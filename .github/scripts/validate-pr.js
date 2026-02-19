#!/usr/bin/env node

/**
 * Learning Room PR Validation Script
 * Validates student pull requests and provides educational feedback
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Environment variables from GitHub Actions
const PR_NUMBER = process.env.PR_NUMBER;
const PR_TITLE = process.env.PR_TITLE || '';
const PR_BODY = process.env.PR_BODY || '';
const PR_AUTHOR = process.env.PR_AUTHOR || '';
const BASE_SHA = process.env.BASE_SHA;
const HEAD_SHA = process.env.HEAD_SHA;

const results = {
  passed: true,
  required: [],
  suggestions: [],
  accessibility: [],
  resources: []
};

/**
 * Check if PR has issue reference
 */
function checkIssueReference() {
  const issuePatterns = [
    /closes\s+#\d+/i,
    /fixes\s+#\d+/i,
    /resolves\s+#\d+/i,
    /fix\s+#\d+/i,
    /close\s+#\d+/i,
    /resolve\s+#\d+/i
  ];
  
  const hasIssueRef = issuePatterns.some(pattern => 
    pattern.test(PR_TITLE) || pattern.test(PR_BODY)
  );
  
  results.required.push({
    name: 'Issue Reference',
    passed: hasIssueRef,
    message: hasIssueRef 
      ? 'PR properly references an issue'
      : 'PR should reference the issue it addresses (e.g., "Closes #12")',
    help: hasIssueRef 
      ? null 
      : 'Add "Closes #XX" to your PR description to automatically close the issue when merged. Learn more: docs/04-working-with-issues.md'
  });
  
  if (!hasIssueRef) {
    results.passed = false;
    results.resources.push({
      title: 'Working with Issues',
      url: '../../docs/04-working-with-issues.md#linking-issues-to-prs'
    });
  }
}

/**
 * Check if PR description is meaningful
 */
function checkDescription() {
  const minLength = 50;
  const hasDescription = PR_BODY && PR_BODY.trim().length >= minLength;
  
  // Check for template usage
  const hasTemplateMarkers = PR_BODY && (
    PR_BODY.includes('## Description') ||
    PR_BODY.includes('## Changes Made') ||
    PR_BODY.includes('## Type of Change')
  );
  
  results.required.push({
    name: 'PR Description',
    passed: hasDescription,
    message: hasDescription
      ? 'PR has a detailed description'
      : `PR description should be at least ${minLength} characters and explain what changed and why`,
    help: hasDescription
      ? null
      : 'Use the PR template to structure your description. Explain what you changed, why you changed it, and how to test it.'
  });
  
  if (!hasDescription) {
    results.passed = false;
    results.resources.push({
      title: 'Writing Good PR Descriptions',
      url: '../../docs/05-working-with-pull-requests.md#writing-a-good-pr-description'
    });
  }
  
  if (hasTemplateMarkers) {
    results.suggestions.push({
      message: 'Great job using the PR template!',
      help: 'Templates help reviewers understand your changes quickly.'
    });
  }
}

/**
 * Get changed files in the PR
 */
function getChangedFiles() {
  try {
    const diff = execSync(`git diff --name-only ${BASE_SHA} ${HEAD_SHA}`, {
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'ignore']
    });
    return diff.trim().split('\n').filter(f => f);
  } catch (error) {
    console.error('Error getting changed files:', error.message);
    return [];
  }
}

/**
 * Check if changes are in learning-room
 */
function checkFileLocation() {
  const changedFiles = getChangedFiles();
  const learningRoomFiles = changedFiles.filter(f => f.startsWith('learning-room/'));
  
  const allInLearningRoom = changedFiles.length > 0 && 
    changedFiles.every(f => f.startsWith('learning-room/'));
  
  results.required.push({
    name: 'File Location',
    passed: allInLearningRoom,
    message: allInLearningRoom
      ? 'All changes are in the learning-room directory'
      : 'Changes should be in learning-room/ directory only',
    help: allInLearningRoom
      ? null
      : 'Student contributions should modify files in learning-room/docs/ only. Other directories are workshop infrastructure.'
  });
  
  if (!allInLearningRoom) {
    results.passed = false;
  }
  
  return learningRoomFiles;
}

/**
 * Validate Markdown files for accessibility
 */
function validateMarkdownAccessibility(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    // Check heading hierarchy
    const headings = [];
    lines.forEach((line, index) => {
      const match = line.match(/^(#{1,6})\s+(.+)$/);
      if (match) {
        const level = match[1].length;
        const text = match[2];
        headings.push({ level, text, line: index + 1 });
      }
    });
    
    // Detect heading skips
    for (let i = 1; i < headings.length; i++) {
      const prevLevel = headings[i - 1].level;
      const currLevel = headings[i].level;
      
      if (currLevel > prevLevel + 1) {
        results.accessibility.push({
          type: 'error',
          title: 'Heading Hierarchy Skip',
          message: `Heading jumps from H${prevLevel} to H${currLevel}. This breaks screen reader navigation.`,
          file: filePath,
          line: headings[i].line,
          fix: `Change "H${currLevel}" to "H${prevLevel + 1}" or add intermediate heading levels.`
        });
        results.passed = false;
      }
    }
    
    // Check for H1
    const hasH1 = headings.some(h => h.level === 1);
    if (!hasH1 && headings.length > 0) {
      results.accessibility.push({
        type: 'warning',
        title: 'Missing H1 Heading',
        message: 'Document should start with a level 1 heading (# Title)',
        file: filePath,
        fix: 'Add a level 1 heading at the start of the document.'
      });
    }
    
    // Check link text quality
    const poorLinkPatterns = [
      { pattern: /\[click here\]/gi, name: 'click here' },
      { pattern: /\[here\]/gi, name: 'here' },
      { pattern: /\[read more\]/gi, name: 'read more' },
      { pattern: /\[link\]/gi, name: 'link' },
      { pattern: /\[this\]/gi, name: 'this' }
    ];
    
    poorLinkPatterns.forEach(({ pattern, name }) => {
      const matches = content.match(pattern);
      if (matches) {
        results.accessibility.push({
          type: 'warning',
          title: 'Non-Descriptive Link Text',
          message: `Found ${matches.length} instance(s) of "${name}" link text. Screen reader users can't tell where the link goes.`,
          file: filePath,
          fix: `Replace with descriptive text like "View keyboard shortcuts guide" or "Download the setup instructions".`
        });
        
        results.resources.push({
          title: 'Writing Accessible Link Text',
          url: '../../docs/07-culture-etiquette.md#writing-accessible-content'
        });
      }
    });
    
    // Check for [TODO] markers
    const todoPattern = /\[TODO\]/gi;
    const todoMatches = content.match(todoPattern);
    if (todoMatches) {
      results.accessibility.push({
        type: 'error',
        title: 'Incomplete Content',
        message: `Found ${todoMatches.length} [TODO] marker(s). These should be completed before submitting.`,
        file: filePath,
        fix: 'Complete all [TODO] sections with actual content.'
      });
      results.passed = false;
    }
    
    // Check for alt text on images
    const imagePattern = /!\[(.*?)\]\(.+?\)/g;
    let match;
    while ((match = imagePattern.exec(content)) !== null) {
      const altText = match[1];
      if (!altText || altText.trim() === '') {
        results.accessibility.push({
          type: 'error',
          title: 'Missing Image Alt Text',
          message: 'Images must have descriptive alt text for screen reader users.',
          file: filePath,
          fix: 'Add descriptive alt text: ![Description of image](image.png)'
        });
        results.passed = false;
      }
    }
    
    // Check for broken links (basic check)
    const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
    while ((match = linkPattern.exec(content)) !== null) {
      const linkUrl = match[2];
      
      // Check for relative links to non-existent files
      if (!linkUrl.startsWith('http') && !linkUrl.startsWith('#')) {
        const linkPath = path.resolve(path.dirname(filePath), linkUrl);
        if (!fs.existsSync(linkPath.split('#')[0])) {
          results.accessibility.push({
            type: 'error',
            title: 'Broken Link',
            message: `Link points to non-existent file: ${linkUrl}`,
            file: filePath,
            fix: 'Verify the file path is correct or check if the file exists.'
          });
          results.passed = false;
        }
      }
    }
    
    // Check for good practices
    const hasCodeBlocks = /```/.test(content);
    if (hasCodeBlocks) {
      results.suggestions.push({
        message: 'Good use of code blocks for examples',
        help: 'Code blocks help both sighted and non-sighted users understand technical content.'
      });
    }
    
    const hasTables = /\|.*\|/.test(content);
    if (hasTables) {
      // Check if tables have headers
      const tableHeaderPattern = /\|[^\n]+\|\n\|[\s:-]+\|/;
      if (tableHeaderPattern.test(content)) {
        results.suggestions.push({
          message: 'Tables include proper headers',
          help: 'Screen readers announce table headers, helping users navigate data.'
        });
      } else {
        results.accessibility.push({
          type: 'warning',
          title: 'Table Missing Headers',
          message: 'Tables should have header rows for accessibility',
          file: filePath,
          fix: 'Add a header row with | Header 1 | Header 2 | followed by | --- | --- |'
        });
      }
    }
    
  } catch (error) {
    console.error(`Error validating ${filePath}:`, error.message);
  }
}

/**
 * Main validation function
 */
function validate() {
  console.log(`Validating PR #${PR_NUMBER} by @${PR_AUTHOR}`);
  
  // Run required checks
  checkIssueReference();
  checkDescription();
  const changedFiles = checkFileLocation();
  
  // Validate each changed markdown file
  changedFiles.forEach(file => {
    if (file.endsWith('.md')) {
      console.log(`Validating ${file}...`);
      validateMarkdownAccessibility(file);
    }
  });
  
  // Add relevant resources based on checks
  if (results.accessibility.length > 0) {
    results.resources.push({
      title: 'Accessible Documentation Guide',
      url: '../../docs/07-culture-etiquette.md#writing-accessible-content'
    });
  }
  
  // Deduplicate resources
  results.resources = Array.from(
    new Map(results.resources.map(r => [r.url, r])).values()
  );
  
  // Write results to file for GitHub Actions
  fs.writeFileSync('validation-results.json', JSON.stringify(results, null, 2));
  
  console.log(`\nValidation complete:`);
  console.log(`  Passed: ${results.passed}`);
  console.log(`  Required checks: ${results.required.filter(r => r.passed).length}/${results.required.length}`);
  console.log(`  Accessibility issues: ${results.accessibility.filter(a => a.type === 'error').length}`);
  console.log(`  Suggestions: ${results.suggestions.length}`);
  
  // Exit with appropriate code (but don't fail the workflow)
  process.exit(0);
}

// Run validation
validate();
