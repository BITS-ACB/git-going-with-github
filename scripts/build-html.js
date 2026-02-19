#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { marked, Renderer } = require('marked');
const hljs = require('highlight.js');
const chokidar = require('chokidar');

// Configure marked with syntax highlighting via custom renderer (marked v11+)
const renderer = new Renderer();
renderer.code = function(code, infostring, escaped) {
  const lang = (infostring || '').match(/^\S*/)?.[0] || null;
  const language = lang && hljs.getLanguage(lang) ? lang : null;
  let highlighted;
  try {
    highlighted = language
      ? hljs.highlight(code, { language }).value
      : hljs.highlightAuto(code).value;
  } catch (err) {
    highlighted = code;
  }
  const cls = language ? ` class="hljs language-${language}"` : ' class="hljs"';
  return `<pre><code${cls}>${highlighted}</code></pre>\n`;
};

marked.setOptions({
  breaks: false,
  gfm: true,
  renderer
});

// HTML template with accessibility features
const htmlTemplate = (content, title, relativePath) => {
  const depth = relativePath.split('/').length - 1;
  const prefix = depth > 0 ? '../'.repeat(depth) : './';
  const isHome = relativePath === 'index.html';
  const pageTitle = isHome ? 'GitHub Learning Room' : `${title} — GitHub Learning Room`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="GitHub Learning Room - Open Source Assistive Technology Hackathon">
  <title>${pageTitle}</title>
  <link rel="stylesheet" href="${prefix}styles/github-markdown.css">
  <link rel="stylesheet" href="${prefix}styles/highlight.css">
  <link rel="stylesheet" href="${prefix}styles/custom.css">
  <style>
    .markdown-body {
      box-sizing: border-box;
      min-width: 200px;
      max-width: 980px;
      margin: 0 auto;
      padding: 45px;
    }
    @media (max-width: 767px) {
      .markdown-body {
        padding: 15px;
      }
    }
  </style>
</head>
<body>
  <a class="skip-link" href="#main-content">Skip to main content</a>
  <nav aria-label="Breadcrumb" class="breadcrumb">
    ${isHome
      ? '<span aria-current="page">Home</span>'
      : `<a href="${prefix}index.html">Home</a> <span aria-hidden="true">›</span> <span aria-current="page">${title}</span>`
    }
  </nav>
  <main id="main-content" class="markdown-body">
    ${content}
  </main>
  <footer role="contentinfo" style="text-align: center; margin-top: 3rem; padding: 2rem; border-top: 1px solid #d0d7de;">
    <p>GitHub Learning Room — Open Source Assistive Technology Hackathon</p>
    <p><a href="https://github.com/accesswatch/Learning-Room">View on GitHub</a></p>
  </footer>
</body>
</html>`;
};

// Create output directory structure
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Convert markdown file to HTML
function convertMarkdownFile(mdPath, outputDir) {
  try {
    const content = fs.readFileSync(mdPath, 'utf-8');
    const htmlContent = marked.parse(content);
    
    // Determine output path
    const relativePath = path.relative(process.cwd(), mdPath);
    let outputPath = path.join(outputDir, relativePath.replace(/\.md$/, '.html'));
    
    // Special handling for README files
    if (path.basename(mdPath) === 'README.md') {
      const dir = path.dirname(outputPath);
      outputPath = path.join(dir, 'index.html');
    }
    
    // Extract title from first heading or filename
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1] : path.basename(mdPath, '.md');
    
    // Get relative path for template
    const relativeFromOutput = path.relative(outputDir, outputPath);
    
    // Create full HTML
    const html = htmlTemplate(htmlContent, title, relativeFromOutput);
    
    // Ensure output directory exists
    ensureDir(path.dirname(outputPath));
    
    // Write HTML file
    fs.writeFileSync(outputPath, html, 'utf-8');
    console.log(`✓ Converted: ${relativePath} → ${path.relative(process.cwd(), outputPath)}`);
    
    return outputPath;
  } catch (error) {
    console.error(`✗ Error converting ${mdPath}:`, error.message);
    return null;
  }
}

// Find all markdown files
function findMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules, .git, and html output directory
      if (!['node_modules', '.git', '.github', 'html'].includes(file)) {
        findMarkdownFiles(filePath, fileList);
      }
    } else if (file.endsWith('.md')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Copy CSS files
function setupStyles(outputDir) {
  const stylesDir = path.join(outputDir, 'styles');
  ensureDir(stylesDir);
  
  // Copy github-markdown-css
  const githubCss = require.resolve('github-markdown-css');
  fs.copyFileSync(githubCss, path.join(stylesDir, 'github-markdown.css'));
  
  // Copy highlight.js CSS (GitHub theme)
  const highlightCss = path.join(require.resolve('highlight.js'), '../../styles/github.css');
  fs.copyFileSync(highlightCss, path.join(stylesDir, 'highlight.css'));
  
  // Create custom CSS for additional accessibility and styling
  const customCss = `
/* Custom styles for GitHub Learning Room HTML documentation */

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif;
  line-height: 1.6;
  background-color: #ffffff;
  color: #24292f;
}

.breadcrumb {
  max-width: 980px;
  margin: 0 auto;
  padding: 1rem 45px 0;
  font-size: 0.875rem;
  color: #57606a;
}

.breadcrumb a {
  color: #0969da;
  text-decoration: none;
}

.breadcrumb a:hover {
  text-decoration: underline;
}

/* Improve focus visibility for keyboard navigation */
a:focus,
button:focus,
summary:focus {
  outline: 2px solid #0969da;
  outline-offset: 2px;
}

/* Skip to main content link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #0969da;
  color: #ffffff;
  padding: 8px 16px;
  z-index: 100;
  text-decoration: none;
  font-weight: 600;
  border-radius: 0 0 4px 0;
}

.skip-link:focus {
  top: 0;
  outline: 2px solid #ffffff;
  outline-offset: 2px;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  body {
    background-color: #000000;
    color: #ffffff;
  }
  .markdown-body {
    color: #ffffff;
  }
  .skip-link {
    background: #ffffff;
    color: #000000;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  body {
    background-color: #0d1117;
    color: #e6edf3;
  }
  .markdown-body {
    color: #e6edf3;
  }
  .breadcrumb {
    color: #8b949e;
  }
  .breadcrumb a {
    color: #58a6ff;
  }
  footer {
    border-color: #30363d !important;
    color: #8b949e;
  }
  footer a {
    color: #58a6ff;
  }
}

/* Ensure tables are responsive */
.markdown-body table {
  display: block;
  overflow-x: auto;
  max-width: 100%;
  white-space: normal;
}

/* details/summary styling for collapsible blocks */
.markdown-body details {
  border: 1px solid #d0d7de;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  margin: 0.75rem 0;
}

.markdown-body details[open] {
  padding-bottom: 0.75rem;
}

.markdown-body summary {
  cursor: pointer;
  font-weight: 600;
  padding: 0.25rem 0;
  user-select: none;
  list-style: none;
}

.markdown-body summary::-webkit-details-marker {
  display: none;
}

.markdown-body summary::before {
  content: '';
  font-size: 0.75em;
  vertical-align: middle;
}

.markdown-body details[open] > summary::before {
  content: '▼ ';
}

/* Print styles */
@media print {
  .breadcrumb,
  footer,
  .skip-link {
    display: none;
  }
  .markdown-body details {
    border: none;
    padding: 0;
  }
  .markdown-body details > * {
    display: block;
  }
  .markdown-body summary::before {
    display: none;
  }
}
`;
  
  fs.writeFileSync(path.join(stylesDir, 'custom.css'), customCss, 'utf-8');
  console.log('✓ CSS files copied');
}

// Build all HTML files
function buildAll() {
  console.log('Starting HTML build...\n');
  
  const outputDir = path.join(process.cwd(), 'html');
  
  // Setup styles
  setupStyles(outputDir);
  
  // Find and convert all markdown files
  const markdownFiles = findMarkdownFiles(process.cwd());
  console.log(`\nFound ${markdownFiles.length} markdown files\n`);
  
  let convertedCount = 0;
  markdownFiles.forEach(mdPath => {
    if (convertMarkdownFile(mdPath, outputDir)) {
      convertedCount++;
    }
  });
  
  console.log(`\n✓ Build complete! Converted ${convertedCount}/${markdownFiles.length} files`);
  console.log(`Output directory: ${outputDir}`);
}

// Watch mode
function watchMode() {
  const outputDir = path.join(process.cwd(), 'html');
  
  console.log('Starting watch mode... (Press Ctrl+C to stop)\n');
  
  // Initial build
  buildAll();
  
  // Watch for changes
  const watcher = chokidar.watch('**/*.md', {
    ignored: /(^|[\/\\])\..|(node_modules|html)/,
    persistent: true,
    ignoreInitial: true
  });
  
  watcher
    .on('add', mdPath => {
      console.log(`\nFile added: ${mdPath}`);
      convertMarkdownFile(mdPath, outputDir);
    })
    .on('change', mdPath => {
      console.log(`\nFile changed: ${mdPath}`);
      convertMarkdownFile(mdPath, outputDir);
    })
    .on('unlink', mdPath => {
      console.log(`\nFile removed: ${mdPath}`);
      const htmlPath = path.join(outputDir, mdPath.replace(/\.md$/, '.html'));
      if (fs.existsSync(htmlPath)) {
        fs.unlinkSync(htmlPath);
        console.log(`✓ Removed: ${htmlPath}`);
      }
    });
}

// Main execution
const args = process.argv.slice(2);
if (args.includes('--watch') || args.includes('-w')) {
  watchMode();
} else {
  buildAll();
}
