# Available Challenges

This document lists all current challenges. Challenges are unlocked based on your skill level (determined by merged PRs).

**Your Status:** Check bot comments on your PRs for current level and available challenges.

---

## How to Start a Challenge

1. **Find an available issue** labeled with `challenge` and your skill level
2. **Comment "I'd like to try this!"** to claim the issue
3. **Create a branch** for your work
4. **Make your changes** following the challenge description
5. **Open a pull request** that references the issue (`Closes #XX`)
6. **Get peer review** and incorporate feedback
7. **Merge** when approved!

---

## Beginner Challenges (0+ PRs)

### Challenge 1: Fix Broken Link
- **Issue Label:** `challenge: beginner`, `skill: markdown`
- **Estimated Time:** 10-15 minutes
- **Skills:** Markdown links, file paths
- **Files:** `docs/welcome.md`

**Description:** Find and fix the broken internal link in the welcome guide.

**What You'll Learn:**
- Relative file paths in Markdown
- Testing links in preview
- Creating descriptive commits

**Success Criteria:**
- Link points to correct file
- Link text is descriptive
- No other broken links introduced

[**View Detailed Instructions →**](../../.github/docs/LEARNING_PATHS.md#1-fix-broken-link-skill-markdown)

---

### Challenge 2: Add Keyboard Shortcut
- **Issue Label:** `challenge: beginner`, `skill: markdown`
- **Estimated Time:** 15-20 minutes
- **Skills:** Markdown tables, documentation
- **Files:** `docs/keyboard-shortcuts.md`

**Description:** Add a new keyboard shortcut to the reference guide.

**What You'll Learn:**
- Markdown table syntax
- Finding official documentation
- Clear technical writing

**Success Criteria:**
- Shortcut added to correct section
- Table formatting preserved
- Description is clear and accurate

[**View Detailed Instructions →**](../../.github/docs/LEARNING_PATHS.md#2-add-keyboard-shortcut-skill-markdown)

---

### Challenge 3: Complete Welcome Guide
- **Issue Label:** `challenge: beginner`, `skill: markdown`
- **Estimated Time:** 20-30 minutes
- **Skills:** Document structure, writing
- **Files:** `docs/welcome.md`

**Description:** Fill in the [TODO] sections in the welcome guide.

**What You'll Learn:**
- Consistent documentation style
- Heading hierarchy basics
- Writing for diverse audiences

**Success Criteria:**
- All [TODO] markers removed
- Content is helpful and clear
- Heading hierarchy is correct
- Style matches existing content

[**View Detailed Instructions →**](../../.github/docs/LEARNING_PATHS.md#3-complete-welcome-guide-skill-markdown)

---

## Intermediate Challenges (1+ PRs)

### Challenge 4: Fix Heading Hierarchy
- **Issue Label:** `challenge: intermediate`, `skill: accessibility`
- **Estimated Time:** 15-20 minutes
- **Skills:** Semantic HTML, screen reader navigation
- **Files:** Multiple docs

**Description:** Find and fix heading hierarchy violations throughout the docs.

**What You'll Learn:**
- Why heading order matters
- How screen readers use headings
- Document accessibility auditing

**Success Criteria:**
- No heading level skips (H1→H2→H3)
- Each document has exactly one H1
- Document outline is logical
- Bot validation passes

[**View Detailed Instructions →**](../../.github/docs/LEARNING_PATHS.md#4-fix-heading-hierarchy-skill-accessibility)

---

### Challenge 5: Improve Link Text
- **Issue Label:** `challenge: intermediate`, `skill: accessibility`
- **Estimated Time:** 20-30 minutes
- **Skills:** Descriptive text, context awareness
- **Files:** Multiple docs

**Description:** Replace generic link text ("click here", "read more") with descriptive alternatives.

**What You'll Learn:**
- Link text best practices
- Context-independent descriptions
- Screen reader user experience

**Success Criteria:**
- No generic link text patterns
- Links make sense out of context
- Surrounding text reads naturally
- Bot validation passes

[**View Detailed Instructions →**](../../.github/docs/LEARNING_PATHS.md#5-improve-link-text-skill-accessibility)

---

### Challenge 6: Add Alt Text
- **Issue Label:** `challenge: intermediate`, `skill: accessibility`
- **Estimated Time:** 20-30 minutes
- **Skills:** Descriptive writing, image context
- **Files:** Multiple docs with images

**Description:** Add descriptive alt text to images missing it.

**What You'll Learn:**
- Writing effective alt text
- Informative vs. decorative images
- What screen reader users need

**Success Criteria:**
- All images have alt text
- Alt text is descriptive and complete
- Includes relevant text from images
- Appropriate for context

[**View Detailed Instructions →**](../../.github/docs/LEARNING_PATHS.md#6-add-alt-text-skill-accessibility)

---

## Advanced Challenges (3+ PRs)

### Challenge 7: Review for Accessibility
- **Issue Label:** `challenge: advanced`, `skill: review`
- **Estimated Time:** 30-45 minutes
- **Skills:** Code review, constructive feedback
- **Context:** Assigned as reviewer on peer PR

**Description:** Conduct comprehensive accessibility review of a peer's PR.

**What You'll Learn:**
- Systematic review process
- Writing helpful feedback
- Balancing thoroughness and kindness
- Identifying subtle issues

**Success Criteria:**
- All accessibility aspects checked
- Constructive comments provided
- Clear explanation of issues
- Suggestions for improvement
- Final approve/request changes decision

[**View Detailed Instructions →**](../../.github/docs/LEARNING_PATHS.md#7-review-for-accessibility-skill-review)

---

### Challenge 8: Create Documentation
- **Issue Label:** `challenge: advanced`, `skill: documentation`
- **Estimated Time:** 2-3 hours
- **Skills:** Technical writing, research
- **Files:** New file creation

**Description:** Create comprehensive documentation for an accessibility topic.

**What You'll Learn:**
- Technical writing process
- Researching documentation
- Creating learning materials
- Practicing what you teach

**Success Criteria:**
- Topic thoroughly covered
- Includes practical examples
- Links to quality resources
- Document itself is accessible
- Clear and actionable guidance

[**View Detailed Instructions →**](../../.github/docs/LEARNING_PATHS.md#8-create-documentation-skill-documentation)

---

### Challenge 9: Mentor a Peer
- **Issue Label:** `challenge: advanced`, `skill: collaboration`
- **Estimated Time:** 1-2 hours (async)
- **Skills:** Teaching, empathy, patience
- **Context:** Assigned as reviewer for beginner

**Description:** Guide a beginner through completing their first challenge.

**What You'll Learn:**
- Teaching complex concepts simply
- Patient, encouraging feedback
- Breaking down problems
- Building confidence in others

**Success Criteria:**
- Timely, thoughtful review
- Questions that prompt discovery
- Explanations of WHY, not just WHAT
- Encouragement and celebration
- Beginner successfully completes challenge

[**View Detailed Instructions →**](../../.github/docs/LEARNING_PATHS.md#9-mentor-a-peer-skill-collaboration)

---

## Expert Challenges (5+ PRs)

### Challenge 10: Design a Challenge
- **Issue Label:** `challenge: expert`, `skill: creation`
- **Estimated Time:** 3-5 hours
- **Skills:** Instructional design, scoping
- **Files:** Challenge documentation

**Description:** Identify a learning gap and create a new challenge.

**What You'll Learn:**
- Instructional design principles
- Defining learning objectives
- Appropriate scoping
- Creating evaluation criteria

**Success Criteria:**
- Clear learning objective
- Appropriate difficulty
- Estimated time provided
- Resources included
- Success criteria defined
- Example solution created

[**View Detailed Instructions →**](../../.github/docs/LEARNING_PATHS.md#10-design-a-challenge-skill-creation)

---

### Challenge 11: Accessibility Audit
- **Issue Label:** `challenge: expert`, `skill: accessibility`
- **Estimated Time:** 4-6 hours
- **Skills:** Systematic testing, prioritization
- **Files:** Audit report + issues

**Description:** Conduct comprehensive accessibility audit of entire repository.

**What You'll Learn:**
- Systematic testing methodology
- Real-world evaluation process
- Issue triage and prioritization
- Writing actionable bug reports

**Success Criteria:**
- All docs reviewed
- Screen reader testing completed
- Issues filed for each problem
- Problems prioritized by severity
- Comprehensive audit report written
- Suggested fixes included

[**View Detailed Instructions →**](../../.github/docs/LEARNING_PATHS.md#11-accessibility-audit-skill-accessibility)

---

### Challenge 12: Create Issue Template
- **Issue Label:** `challenge: expert`, `skill: creation`
- **Estimated Time:** 2-3 hours
- **Skills:** Template design, workflow optimization
- **Files:** `.github/ISSUE_TEMPLATE/`

**Description:** Design an issue template for a specific challenge type.

**What You'll Learn:**
- Template design patterns
- Guiding user input effectively
- Workflow optimization
- GitHub community tools

**Success Criteria:**
- Template structure is clear
- Includes helpful guidance
- Appropriate labels/metadata
- Tested with sample issue
- Documentation updated

[**View Detailed Instructions →**](../../.github/docs/LEARNING_PATHS.md#12-create-issue-template-skill-creation)

---

## Group Challenges

These challenges require collaboration with your study group:

- **Group Documentation Sprint**: Collaboratively improve docs
- **Peer Review Circle**: Everyone reviews everyone
- **Accessibility Workshop**: Teach each other a11y topics
- **Challenge Creation**: Design new challenges together

[**View Group Challenges →**](GROUP_CHALLENGES.md)

---

## Custom Challenges

### Have an idea not listed here?

**Open an issue** with:
- Descriptive title
- What you want to learn
- What you plan to change/create
- Estimated difficulty level
- Label: `challenge: custom`

Facilitators will review and may approve custom challenges!

---

## Challenge Status

### Currently Available
Check open issues with label `challenge` to see what's available right now.

### Claimed
Issues assigned to someone are currently claimed. You can watch them to see solutions!

### Completed
Closed issues with merged PRs represent completed challenges. Great for inspiration!

---

## Need Help?

### Appendix T: Resources
- [Learning Paths Guide](../../.github/docs/LEARNING_PATHS.md) - Detailed challenge instructions
- [Automation Guide](../AUTOMATION.md) - Understanding bot feedback
- [PR Workflow](../../docs/05-working-with-pull-requests.md) - Step-by-step PR process
- [Accessibility Guide](../../docs/14-accessible-code-review.md) - A11y principles

### Getting Unstuck
1. **Read bot feedback** - It includes specific fixes
2. **Check documentation** - Bot links to relevant resources
3. **Ask your peer reviewer** - Comment on your PR
4. **Ask study group** - Use your group issue thread
5. **Ask facilitators** - Tag them in your PR

---

## Tips for Success

**Before Starting:**
- Read the full challenge description
- Check the learning objectives
- Review linked resources
- Make sure you have time to complete it

**While Working:**
- Commit early and often
- Use descriptive commit messages
- Reference the issue number
- Test your changes

**During Review:**
- Respond to feedback promptly
- Ask questions if unclear
- Make requested changes
- Thank your reviewers

**After Merging:**
- Celebrate your achievement!
- Reflect on what you learned
- Review the resources again
- Help others with similar challenges

---

*Challenges designed for progressive skill building and real-world applicability. Every challenge completed makes you a better contributor!*
