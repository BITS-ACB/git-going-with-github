# Facilitator Guide
## Open Source Assistive Technology Hackathon

> This document is for workshop facilitators only. Participants should start with [README.md](README.md) and [docs/00-pre-workshop-setup.md](docs/00-pre-workshop-setup.md).

---

## Repository Structure

This is the single repository students clone. Everything they need for both days is here:

```
learning-room/                  ← workshop repository root
├── README.md                   ← participant-facing start page
├── CONTRIBUTING.md             ← contribution guide
├── CODE_OF_CONDUCT.md          ← community standards
├── FACILITATOR.md              ← this file
├── .gitignore
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── config.yml          ← disables blank issues, links to Skills modules
│   │   ├── accessibility-bug.yml ← accessibility bug report YAML form
│   │   └── feature-request.yml ← feature/improvement request YAML form
│   ├── PULL_REQUEST_TEMPLATE.md ← PR template with accessibility checklist
│   ├── agents/                 ← Agent Forge — six Copilot agents
│   │   ├── daily-briefing.agent.md
│   │   ├── issue-tracker.agent.md
│   │   ├── pr-review.agent.md
│   │   ├── analytics.agent.md
│   │   ├── insiders-a11y-tracker.agent.md
│   │   ├── template-builder.agent.md
│   │   └── preferences.example.md
│   └── prompts/                ← 28 slash commands for Copilot Chat
│       ├── a11y-update.prompt.md
│       ├── create-issue.prompt.md
│       ├── daily-briefing.prompt.md
│       ├── explain-code.prompt.md
│       ├── review-pr.prompt.md
│       ├── triage.prompt.md
│       └── ... (22 more — see docs/appendix-w-agent-forge-reference.md)
├── docs/                       ← full workshop curriculum (16 chapters + appendices A–X)
│   ├── 00-pre-workshop-setup.md
│   ├── 01-understanding-github-web-structure.md
│   ├── 02-navigating-repositories.md
│   ├── 03-the-learning-room.md
│   ├── 04-working-with-issues.md
│   ├── 05-working-with-pull-requests.md
│   ├── 06-merge-conflicts.md
│   ├── 07-culture-etiquette.md
│   ├── 08-labels-milestones-projects.md
│   ├── 09-notifications.md
│   ├── 10-vscode-basics.md
│   ├── 11-git-source-control.md
│   ├── 12-github-pull-requests-extension.md
│   ├── 13-github-copilot.md
│   ├── 14-accessible-code-review.md
│   ├── 15-issue-templates.md
│   ├── 16-agent-forge.md
│   ├── appendix-a-glossary.md              ← every term explained
│   ├── appendix-b-screen-reader-cheatsheet.md ← full shortcut reference
│   ├── appendix-c through appendix-x      ← deep-dive references (C–X)
│   └── (see appendix-u-resources.md for complete file listing)
└── learning-room/              ← practice content (contribution sprint targets)
    ├── README.md
    └── docs/
        ├── welcome.md          ← has [TODO] gaps for participants to complete
        ├── keyboard-shortcuts.md ← has intentional errors and a heading hierarchy problem
        └── setup-guide.md      ← has a broken URL and [TODO] markers
```

---

## Two Weeks Before the Workshop

### Create the GitHub Organization and Repository

1. Create a GitHub org (recommended) or use your personal account
2. Create a new repository named `learning-room` (or your preferred name)
3. Make it **Public** — participants need read access without being org members
4. Push the contents of this repository to it:
   ```
   git remote add origin https://github.com/[org]/learning-room
   git push -u origin main
   ```

### Configure the Repository

**Enable Issues:**
Settings → Features → check Issues

**Enable Discussions (optional):**
Settings → Features → check Discussions (useful for async Q&A)

**Branch protection for `main`:**
Settings → Branches → Add rule:
- Require pull request before merging:
- Require at least 1 approving review:
- Do not require up-to-date branches before merging (reduces friction for beginners)

**Mark as Template Repository (recommended):**
Settings → check "Template repository"
This allows you to create a fresh copy for each cohort with one click.

---

## One Week Before the Workshop

### Create Labels

Navigate to Issues → Labels → create these labels (delete GitHub defaults if desired):

| Label | Color | Description |
|-------|-------|-------------|
| `accessibility` | `#0075ca` | Keyboard, screen reader, WCAG |
| `good first issue` | `#7057ff` | Good for new contributors |
| `documentation` | `#0075ca` | Improvements to docs |
| `needs triage` | `#e4e669` | Awaiting review by a maintainer |
| `bug` | `#d73a4a` | Something isn't working |
| `enhancement` | `#a2eeef` | New feature or request |
| `help wanted` | `#008672` | Extra attention needed |
| `question` | `#d876e3` | More information needed |
| `wontfix` | `#ffffff` | This will not be addressed |
| `duplicate` | `#cfd3d7` | This issue already exists |

### Create a Milestone

Issues → Milestones → New milestone:
- Title: `Hackathon Day 1`
- Due date: Day 1 date
- Description: "Issues targeted for the Day 1 contribution sprint"

### Pre-Seed Issues for the Contribution Sprint

Create one issue per participant, assigned to them. Each issue points to a specific problem in `learning-room/docs/`. Template:

**Issue title:** `Fix: [specific problem] in [filename]`
**Issue body:**
```markdown
## What to Fix

[Specific description of the problem — be precise enough that the participant knows exactly
what line or section to look at.]

## File to Edit

`learning-room/docs/[filename].md`

## Acceptance Criteria

- [ ] [Specific thing that should be true when the fix is complete]
- [ ] No new heading-level skips introduced
- [ ] Link text is descriptive (not "click here")

## How to Contribute

See [Working with Issues](docs/04-working-with-issues.md) and the [Day 1 Agenda](DAY1_AGENDA.md) for the full contribution workflow.
```

**Pre-seeded issues to create (by file):**

| File | Problem to fix | Label |
|------|---------------|-------|
| `keyboard-shortcuts.md` | Heading jumps from `#` (h1) to `####` (h4) for NVDA section sub-headings — should be `##` and `###` | `accessibility`, `good first issue` |
| `keyboard-shortcuts.md` | The Accessibility Settings link is broken: `htps://` has a typo | `bug`, `good first issue` |
| `setup-guide.md` | Step 2 link has a typo: `htps://github.com/settings/accessibility` — missing one `t` | `bug`, `good first issue` |
| `setup-guide.md` | "Note: Links marked [TODO]" callout at the bottom — replace with actual links to the workshop repo | `documentation`, `good first issue` |
| `welcome.md` | [TODO] paragraph about who can contribute (line 22) | `documentation`, `good first issue` |
| `welcome.md` | [TODO] paragraph about reading an issue to decide if it's right for you (line 40) | `documentation`, `good first issue` |
| `welcome.md` | [TODO] sentence about what a merged PR means for GitHub profile (line 52) | `documentation`, `good first issue` |
| `welcome.md` | `Last reviewed: [DATE]` placeholder at the bottom — replace with today's date | `documentation`, `good first issue` |

Create extras for any additional participants.

### Create the Welcome Issue

Create this issue, unassigned, labeled `good first issue`:

**Title:** `Welcome! Introduce yourself`
**Body:**
```markdown
Welcome to the workshop repository! This issue is for introductions.

## How to participate

Leave a comment on this issue introducing yourself:

- Your name (first name or preferred name)
- Your screen reader and operating system
- One thing you are hoping to learn or do during this workshop

Use Markdown in your comment:
- Use `**bold**` to highlight your screen reader name
- Use a task list (`- [ ]`) for things you want to accomplish

There is no wrong answer. This is practice, and it is also a real community.
```

### Create the Pre-Seeded PR

Create a PR from a `practice-review` branch with a meaningful change to `learning-room/docs/welcome.md` — add one paragraph, change one heading, correct one small issue. This PR exists so participants can practice reviewing in Block 4 before the contribution sprint.

PR title: `Expand the "What Is Open Source?" section`
Description: Use the PR template. Fill in all fields.

---

## Day 1 — Pre-Session Checklist

Run through this 30 minutes before participants arrive:

- [ ] All participant issues created, assigned, and labeled
- [ ] Welcome issue open and unlabeled
- [ ] Pre-seeded practice PR open on `practice-review` branch
- [ ] `learning-room` milestone created and linked to all participant issues
- [ ] All labels created
- [ ] `day1-practice` branch created (differs from `main` by 2–3 files — for Branch Navigation exercise in Block 2)
- [ ] Repository is public and accessible without login
- [ ] GitHub Skills modules tested (go through the first 2 steps of each to verify Mona responds)

### GitHub Skills Pre-Test (Important)

Test each module at least 3 days before the workshop:
1. [Introduction to GitHub](https://github.com/skills/introduction-to-github) — complete Steps 1–3 in a test account
2. [Communicate Using Markdown](https://github.com/skills/communicate-using-markdown) — start and verify Mona creates the first issue
3. [Review Pull Requests](https://github.com/skills/review-pull-requests) — start and verify Mona creates the practice PR

**Note:** GitHub Skills modules occasionally have delayed Mona responses. If Mona does not respond within 2 minutes:
1. Check that the repo was created as **Public** (Mona requires this on the free tier)
2. Navigate to the Actions tab of the student's new repo — confirm a workflow run is listed
3. If the workflow failed: click it → read the error → the most common cause is a rate limit (wait 1–2 minutes and re-trigger by creating another commit)
4. Have backup screenshots of Mona's expected responses ready for demo purposes

---

## Day 2 — Pre-Session Checklist

- [ ] VS Code installed on any shared/demo machine
- [ ] GitHub Copilot Chat extension installed and authenticated
- [ ] GitHub Pull Requests extension installed
- [ ] Agent Forge agents verified: open Copilot Chat → type `@daily-briefing morning briefing` → confirm a response
- [ ] Slash commands verified: type `/find-issues good first issue` → confirm a response
- [ ] Each participant's upstream PR target ready (if doing the agent-forge contribution)

---

## GitHub Skills — Facilitator Script

### Block 1: Introducing Introduction to GitHub

> *"Before we explore the learning-room repo, I want you to do something first. We're going to navigate to a GitHub Skills module — this is an interactive learning course built into GitHub itself. When you activate it, GitHub creates a copy of the course repository in your own account. Then a bot called Mona starts guiding you through steps — and it responds to real GitHub actions that you take."*

Walk through the setup together. Wait until everyone sees Mona's Issue #1 before continuing.

> *"Look at your repositories list. You now own a repository on GitHub. Mona is waiting inside it. Keep that tab open — we'll come back to it throughout the day."*

### Block 3: Mona Responds to the PR

When participants create their PR and Mona responds:

> *"Pause what you're doing. Navigate to your Pull Request tab in your Skills repo. What does Mona say? Read it with your screen reader."*

Wait a moment.

> *"What just happened is exactly how real open source bots work. Dependabot, GitHub Actions CI, automated labelers — they all watch for GitHub events and respond automatically. You just experienced that for the first time on your own repository."*

### Wrap-Up: Completion Certificates

When checking Skills module completions:

> *"Navigate to github.com/skills/introduction-to-github. Do you see your completion badge? That's yours. It's tied to your GitHub profile. It will be there when you apply for jobs, when you introduce yourself to a new open source community, when you want to demonstrate that you know how to use GitHub."*

---

## Managing Learning Room Automation

The Learning Room includes comprehensive automation that provides instant feedback while preserving the educational value of human peer review.

### Automation Components

**1. PR Validation Bot** (`.github/workflows/learning-room-pr-bot.yml`)
- Welcomes first-time contributors
- Validates PRs against quality standards
- Checks accessibility (headings, links, alt text, broken links)
- Provides educational feedback with links to resources
- Auto-applies labels (first-time-contributor, documentation, needs-work, accessibility)
- Responds to keywords: @bot help, "merge conflict", "request review"

**2. Skills Progression Engine** (`.github/workflows/skills-progression.yml`)
- Tracks student progress through skill levels (Beginner → Intermediate → Advanced → Expert)
- Awards badges for specific achievements (Markdown Master, Accessibility Advocate, etc.)
- Unlocks new challenges based on merged PR count
- Celebrates milestones (1st, 5th, 10th, 25th merged PRs)
- Posts progress updates with stats

**3. Student Pairing & Grouping** (`.github/workflows/student-grouping.yml`)
- Automatically assigns peer reviewers to PRs
- Balances review load using "least_reviews" strategy
- Creates study groups when triggered manually
- Provides review guidance to both author and reviewer

### Before the Workshop: Configure Automation

**Update Student Roster** (`.github/data/student-roster.json`)
```json
{
  "cohort": "Your Cohort Name 2024",
  "facilitators": ["your-github-username"],
  "students": [
    {
      "username": "student-github-username",
      "name": "Student Display Name",
      "timezone": "America/Los_Angeles",
      "interests": ["accessibility", "frontend"],
      "pronouns": "they/them",
      "screenReader": false,
      "mergedPRs": 0,
      "currentLevel": "Beginner",
      "badges": [],
      "joinedDate": "2024-01-15"
    }
  ]
}
```

**Verify Workflows Are Enabled**
- Navigate to Actions tab
- Ensure workflows are enabled (not disabled by GitHub)
- Check that GitHub Actions has write permissions:
  - Settings → Actions → General → Workflow permissions
  - Select "Read and write permissions"
  - Check "Allow GitHub Actions to create and approve pull requests"

**Test Automation**
1. Open a test PR before workshop
2. Verify bot comments within ~30 seconds
3. Check that labels are applied
4. Verify validation results are accurate
5. Test @bot help keyword response

### During the Workshop: Interacting with Automation

**Introducing the Bot (Day 1, Block 5)**

> *"When you open your PR, you'll see a comment from a bot within about 30 seconds. This bot is not grading you — it's teaching you. Read its feedback carefully. It will tell you about accessibility issues, link you to resources, and celebrate things you did well."*

Walk through a sample bot comment:
- Required checks (must pass)
- Suggestions (optional improvements)
- Accessibility analysis (detailed feedback with fixes)
- Learning resources (relevant documentation links)

> *"The bot is consistent and instant, but it's not perfect. If you disagree with its feedback, comment on your PR explaining why. Always request human review — peer review teaches things the bot cannot."*

**Monitoring Bot Behavior**

Watch for:
- Bot comments that are incorrect (file issues with label `automation-feedback`)
- Bot overwhelming participants (adjust timing if needed)
- Students relying solely on bot without requesting reviews (remind them of human review value)

**Overriding Bot Checks**

If bot incorrectly flags something:
1. Facilitator comments: "Bot feedback incorrect here — [explanation]"
2. Approve PR despite bot warning
3. File issue to improve validation script later

**Manual Skill Progression Adjustments**

If a student completes work outside tracked PRs:
1. Update their entry in `.github/data/student-roster.json`
2. Increment `mergedPRs` count
3. Update `currentLevel` if appropriate
4. Add badges to `badges` array
5. Commit and push to apply

### Creating Study Groups

**Manual Creation:**
Run the student-grouping workflow manually:
1. Navigate to Actions tab
2. Select "Student Pairing & Grouping"
3. Click "Run workflow"
4. Choose pairing strategy:
   - `random`: Shuffle and divide
   - `skill_match`: Mix skill levels (recommended)
   - `timezone_match`: Group by timezone
5. Bot creates issue thread for each group

**Group Sizes:**
- 2-3 students: Ideal for focused collaboration
- 4-5 students: Good for larger cohorts
- Edit `groupSize` variable in workflow to adjust

**Monitoring Groups:**
- Check group issue threads for activity
- Ensure all members are participating
- Intervene if one person dominates or is left out

### Automation Philosophy

**Automation Provides:**
- Instant feedback (students don't wait)
- Educational resources (links to learning materials)
- Consistency (same standards for everyone)
- Unlimited patience (can run on every commit)

**Human Review Provides:**
- Creative suggestions (beyond rule-checking)
- Contextual judgment (understanding nuance)
- Social learning (building relationships)
- Encouragement (celebrating growth)

**The Goal:** Automation handles technical checks so humans can focus on higher-level feedback, mentorship, and community building.

### Troubleshooting Automation

**Bot not commenting:**
- Check Actions tab for workflow runs
- Verify workflow triggered (visible in Actions)
- Check workflow permissions (Settings → Actions)
- Review workflow logs for errors

**Incorrect validation results:**
- Review `.github/scripts/validate-pr.js` logic
- Check if file paths match expectations
- Test validation script locally: `node .github/scripts/validate-pr.js`
- File issue with details for post-workshop fixes

**Bot commenting multiple times:**
- Should only update one comment per PR
- If creating multiple: check workflow logic in `find-comment` step
- May be multiple workflows triggering (check Actions tab)

**Skills not unlocking:**
- Verify PR was merged (not just closed)
- Check that issue was linked with "Closes #XX"
- Review skills-progression.yml workflow logs
- Manually update `student-roster.json` if needed

**Peer reviewers not assigned:**
- Check that student-roster.json has active students
- Verify pairing workflow triggered
- Review logs for errors
- Manually request reviewers as fallback

### Customizing Automation

**Adjusting Validation Rules:**
Edit `.github/scripts/validate-pr.js`:
- Modify `checkDescription()` to change min character count
- Add new validation functions
- Adjust accessibility checks (heading hierarchy, link text patterns)
- Update messages and resources

**Changing Skill Progression:**
Edit `.github/data/challenge-progression.json`:
- Adjust required PR counts per level
- Add new skill levels
- Create new badge types
- Change challenge lists

**Adding New Challenges:**
1. Create issue template in `.github/ISSUE_TEMPLATE/`
2. Add to `learning-room/docs/CHALLENGES.md`
3. Document in `.github/docs/LEARNING_PATHS.md`
4. Add to progression data

### Post-Workshop: Reviewing Automation Impact

After the workshop, analyze:
- Did bot feedback help students improve faster?
- Were validation messages clear and educational?
- Did automation reduce facilitator burden?
- Was peer review still valued despite automation?
- What false positives/negatives occurred?
- Did skills progression motivate continued participation?

**Collect Feedback:**
Create issue labeled `automation-retrospective` asking:
- What bot feedback was most helpful?
- What feedback was confusing?
- Did automation enhance or detract from learning?
- Would you want more or less automation?

**Iterate:**
Use feedback to improve validation scripts, messages, and workflows for next cohort.

---

## Accessibility Notes for Facilitators

- Deliver all verbal instructions slowly — participants are simultaneously navigating and listening
- When demonstrating on screen, describe what you are doing out loud: "I am pressing Tab three times to reach the Issues tab, then pressing Enter"
- Pause after introducing each new concept before moving to the next
- When a participant is stuck: ask "what does your screen reader say right now?" before any other question — this locates them precisely
- Respect different reading speeds. Some participants' screen readers read faster, some slower. Build buffer time into each activity.
- If the room has mixed screen reader experience: pair advanced and new users during the contribution sprint — code review is a natural collaboration opportunity
- **Bot accessibility:** Automation comments are standard GitHub comments, fully accessible with screen readers. Bot uses clear headings, lists, and links for easy navigation.

---

## Personalizing This Workshop

The curriculum, agent files, and practice documents are designed to be adapted:

- **Rename `learning-room`** to reflect your project or organization
- **Replace the practice issues** with real issues from an AT project you support
- **Edit the agent files** in `.github/agents/` to be project-specific
- **Add more slash commands** by creating new `.prompt.md` files in `.github/prompts/`
- **Add more practice docs** to `learning-room/docs/` with intentional issues relevant to your project's actual documentation

The workshop is licensed under Creative Commons Attribution. Attribution: "Based on the Open Source AT Hackathon Learning Room by [your name]."

---

*Questions about facilitation? Open an issue with the `question` label.*
