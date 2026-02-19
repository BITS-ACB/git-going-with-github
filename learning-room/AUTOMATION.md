# Learning Room Automation Guide

Welcome! The Learning Room uses intelligent automation to provide instant feedback while preserving the value of human peer review. This guide explains how the automation works and how to interpret its feedback.

## What Gets Automated

### 1. PR Validation Bot
When you open a pull request, the bot automatically:

- **Welcomes first-time contributors** with orientation information
- **Validates your changes** against quality standards
- **Checks accessibility** (heading hierarchy, link text, alt text)
- **Provides educational feedback** explaining why checks matter
- **Links to resources** for learning more
- **Applies labels** to help facilitators prioritize reviews

**The bot runs on every PR update**, so you'll see new feedback as you make changes.

### 2. Skills Progression Engine
As you complete challenges:

- **Tracks your progress** through skill levels (Beginner → Intermediate → Advanced → Expert)
- **Unlocks new challenges** when you reach milestones
- **Awards badges** for specific achievements (Markdown Master, Accessibility Advocate, etc.)
- **Celebrates milestones** (1st, 5th, 10th, 25th merged PRs)
- **Provides progress updates** showing what you've accomplished

### 3. Student Pairing & Grouping
To ensure everyone gets reviewed:

- **Assigns peer reviewers** automatically when you open a PR
- **Balances review load** so no one gets overwhelmed
- **Creates study groups** for collaborative learning (when enabled by facilitators)
- **Matches by skill level** to pair mentors with newcomers

---

## Understanding Bot Feedback

### Validation Report Structure

When the bot comments on your PR, it provides:

#### **Required Checks** /
These MUST pass before merge:
- **Issue Reference**: PR must link to an issue (`Closes #123`)
- **Description**: PR must have meaningful description (50+ characters)
- **File Location**: Changes must be in `learning-room/` directory only

#### **Suggestions**
Optional improvements that enhance quality:
- Better commit messages
- Additional documentation
- Code formatting improvements

#### **Accessibility Analysis**
Detailed checks organized by severity:

- **Errors**: Block merge (broken links, missing alt text, heading skips)
- **Warnings**: Should fix (generic link text like "click here")
- **Success**: Celebrates good practices (proper code blocks, descriptive links)

Each accessibility issue includes:
- **File and line number** where issue occurs
- **What's wrong** and why it matters
- **How to fix it** with examples
- **Resources** for learning more

#### **Learning Resources**
Links to relevant documentation based on your PR content

---

## Common Validation Issues & Fixes

### "No issue reference found"

**What this means:** Your PR description doesn't link to an issue.

**Why it matters:** Linking PRs to issues provides context and helps track work.

**How to fix:**
Add one of these patterns to your PR description:
```markdown
Closes #42
Fixes #42
Resolves #42
```

**Screen reader tip:** Use the "Reference in new issue" button in the GitHub UI, or type `#` followed by the issue number to get autocomplete.

---

### "Heading hierarchy violation"

**What this means:** Your document skips heading levels (e.g., H1 → H3 without H2).

**Why it matters:** Screen readers use headings for navigation. Skipping levels creates confusion.

**Example problem:**
```markdown
# Main Title (H1)
### Sub-section (H3) ← SKIP! Missing H2
```

**How to fix:**
```markdown
# Main Title (H1)
## Section (H2)
### Sub-section (H3) ← Proper hierarchy
```

**Resources:**
- [MDN: HTML Heading Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)
- [Workshop: Accessible Code Review](../docs/14-accessible-code-review.md)

---

### "Generic link text detected"

**What this means:** Your link text is "click here", "here", "read more", etc.

**Why it matters:** Screen reader users often navigate by links. Generic text doesn't describe the destination.

**Example problem:**
```markdown
For more information, [click here](https://example.com).
```

**How to fix:**
```markdown
Read the [GitHub accessibility documentation](https://example.com).
```

**Key principle:** Link text should make sense out of context.

---

### "Missing alt text"

**What this means:** An image has no alt text or empty alt text.

**Why it matters:** Screen readers announce alt text so blind users understand images.

**Example problem:**
```markdown
![](screenshot.png)
```

**How to fix:**
```markdown
![Screenshot showing the GitHub Issues page with three open issues labeled "bug"](screenshot.png)
```

**Alt text guidelines:**
- Describe what's in the image
- Include relevant text from the image
- Keep it concise but complete
- For decorative images, use empty alt: `![""](decorative.png)`

**Resources:**
- [Alternative Text - WebAIM](https://webaim.org/techniques/alttext/)
- [Alt Text Workshop Section](../docs/14-accessible-code-review.md#image-alt-text)

---

### "Broken relative link"

**What this means:** A link points to a file that doesn't exist.

**Example problem:**
```markdown
See [installation guide](docs/install.md)  ← File doesn't exist
```

**How to fix:**
1. Check the file path is correct
2. Ensure the file exists in the repository
3. Use correct relative paths from your file's location

**Path examples:**
- Same directory: `[file](file.md)`
- Subdirectory: `[file](subfolder/file.md)`
- Parent directory: `[file](../file.md)`
- Root of learning-room: `[file](../../learning-room/file.md)`

---

### "[TODO] markers remaining"

**What this means:** Your file contains `[TODO]` placeholders.

**Why it matters:** Incomplete work shouldn't be merged.

**How to fix:**
Complete all TODO items or remove the markers if work is done.

---

## Getting Help

### Ask the Bot

You can interact with the bot by commenting on your PR:

- `@bot help` - Get help information
- Mention "merge conflict" - Get conflict resolution guide
- Mention "request review" - Get instructions for requesting human review

### Request Human Review

**The bot is not a substitute for peer review!** Always request review from:

1. **Your peer reviewer** (assigned automatically)
2. **Study group members** (if in a group)
3. **Facilitators** (for complex questions)

Click "Reviewers" in the PR sidebar and select someone.

### Ask in Your PR

If you're stuck:
1. Comment on your PR with your specific question
2. Tag your peer reviewer or study group
3. Facilitators monitor all PRs and will help

---

## Skills Progression System

### Skill Levels

**Beginner** (0+ merged PRs)
- Focus: Basic Markdown, fixing simple issues
- Challenges: Fix broken links, add keyboard shortcuts, complete welcome guide

**Intermediate** (1+ merged PRs)
- Focus: Accessibility basics, document structure
- Challenges: Fix heading hierarchy, improve link text, add alt text

**Advanced** (3+ merged PRs)
- Focus: Comprehensive accessibility, review skills
- Challenges: Accessibility audits, documentation creation, mentoring peers

**Expert** (5+ merged PRs)
- Focus: Creating content, teaching others
- Challenges: Design new challenges, create templates, lead reviews

### How Progression Works

1. **Complete a challenge** by opening a PR that closes an issue
2. **Get peer review** and make requested changes
3. **Merge your PR** when approved
4. **Receive your badge** and see progress update
5. **New challenges unlock** based on your level

### Achievement Badges

- **Markdown Master**: Completed Markdown challenge
- **Accessibility Advocate**: Completed accessibility challenge
- **Code Reviewer**: Provided thorough peer review
- **Team Player**: Completed collaborative challenge
- **Contributor**: General contribution

### Milestones

Special celebrations at: 1, 5, 10, 25, 50, and 100 merged PRs!

---

## Peer Review & Grouping

### Automatic Reviewer Assignment

When you open a PR:
1. Bot assigns a peer reviewer automatically
2. They receive a notification
3. You both get guidance on the review process

### Study Groups

Facilitators may create study groups that:
- Work through challenges together
- Review each other's PRs
- Share resources and tips
- Support each other's learning

If assigned to a group, you'll get an issue thread for communication.

### Review Guidelines

**When reviewing others:**
- Be kind and constructive
- Suggest improvements, don't just criticize
- Ask questions if something is unclear
- Explain why something matters
- Celebrate good work

**When receiving reviews:**
- Say thank you
- Ask for clarification if needed
- Implement feedback or discuss alternatives
- Don't take criticism personally
- Learn from suggestions

---

## Troubleshooting

### "Bot comment is out of date"

The bot updates its comment when you push changes. If it seems wrong:
1. Check if your latest commit is the one being validated
2. Wait a few seconds for GitHub Actions to complete
3. Look at the "Checks" tab for real-time status

### "I fixed it but bot still reports error"

Make sure you:
1. Committed your changes (`git add`, `git commit`)
2. Pushed to GitHub (`git push`)
3. Waited for checks to complete (~30 seconds)

### "Bot assigned wrong reviewer"

The assignment is automatic but not perfect. You can:
1. Request additional reviewers manually
2. Ask in your study group
3. Tag someone specific if they have relevant expertise

### "I disagree with bot's feedback"

The bot isn't always right! If you believe feedback is incorrect:
1. Comment explaining your reasoning
2. Request human review for a second opinion
3. Facilitators can override bot checks

### "Bot is commenting too much"

Each PR gets ONE comment that updates. If you're seeing multiple:
1. This might be a bug - notify facilitators
2. Check if comments are from different bots/workflows

---

## Philosophy: Automation + Human Review

### Why Both?

**Automation provides:**
- Instant feedback
- Educational resources
- Consistency
- Unlimited patience

**Human review provides:**
- Creative suggestions
- Contextual judgment
- Social learning
- Encouragement and mentorship

### The Best of Both

By combining automation with peer review:
- You get fast feedback on technical issues
- Humans focus on higher-level improvements
- You learn both technical skills AND collaboration
- You experience real-world development workflows

**This mirrors professional development** where CI/CD handles checks and humans provide code review.

---

## Additional Resources

- [Working with Pull Requests](../docs/05-working-with-pull-requests.md)
- [Accessible Code Review](../docs/14-accessible-code-review.md)
- [Culture & Etiquette](../docs/07-culture-etiquette.md)
- [Learning Paths](../.github/docs/LEARNING_PATHS.md)
- [Available Challenges](docs/CHALLENGES.md)

---

## Feedback on Automation

Found a bug? Have suggestions for improving the automation?

Open an issue with label `automation-feedback` and let us know!

---

## Setting Up Automation for Your Workshop

The automation features described above (PR validation, skills progression, student pairing) require GitHub Actions workflows that facilitators must configure for their own deployment. These workflows are not included in this repository because each workshop instance may have different requirements.

**What facilitators need to create:**

1. **PR validation workflow** — A GitHub Actions workflow (`.github/workflows/pr-validation.yml`) triggered on `pull_request` events that runs the checks described in the "PR Validation Bot" section above
2. **Skills tracker** — A workflow or bot that monitors merged PRs and updates contributor progress
3. **Reviewer assignment** — A workflow that auto-assigns peer reviewers when PRs are opened

**Resources for building these:**
- [GitHub Actions Workflows](../docs/appendix-q-github-actions-workflows.md) — Workshop appendix on Actions
- [GitHub Actions Documentation](https://docs.github.com/en/actions) — Official reference
- [Probot](https://probot.github.io/) — Framework for building GitHub bots

---

*This system was designed with accessibility and inclusive learning at its core. Every student deserves instant, helpful feedback and supportive peer connections.*
