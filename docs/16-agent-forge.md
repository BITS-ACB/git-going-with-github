# Agent Forge
## Custom AI Agents for GitHub Workflows

> **Day 2, Block 3 Material**
>
> **Before you read this guide:**
>
> Agent Forge covers six AI-powered agents and 28 slash commands. These are Day 2, Block 3 material. They are not where you start.
>
> **The agents are only useful if you have already done the work manually.** An agent that summarizes issues is useless to someone who has never read an issue. An agent that reviews a diff is useless to someone who has never read a diff. The agent does not teach you the skill — it multiplies a skill you already have.
>
> Day 1 built those skills. This chapter shows how to amplify them with automation.

---

## Prerequisites Checklist

**Before starting this chapter, verify you have completed:**

### Core Prerequisites (Required for All Agents)
- [ ] Chapter 0: [Pre-Workshop Setup](00-pre-workshop-setup.md) — Git, VS Code, and GitHub account
- [ ] Chapter 13: [GitHub Copilot](13-github-copilot.md) — GitHub Copilot Chat installed and working
- [ ] GitHub Copilot subscription or organization access (classroom/free tier)
- [ ] `.github/agents/` folder exists in your repository (or will create custom agents)

### Agent-Specific Prerequisites (Complete Before Using That Agent)

| Agent | You Must Have Done First | Reference |
|-------|--------------------------|----------|
| `@daily-briefing` | Navigated repository, read issues and PRs, understood notifications | [Ch 2](02-navigating-repositories.md), [Ch 9](09-notifications.md) |
| `@issue-tracker` | Filed at least 2 issues, applied labels, triaged lists | [Ch 4](04-working-with-issues.md), [Ch 8](08-labels-milestones-projects.md) |
| `@pr-review` | Manually reviewed 1+ PR diff, left inline comments | [Ch 5](05-working-with-pull-requests.md), [Ch 14](14-accessible-code-review.md) |
| `@analytics` | Explored Insights tab, understand repo metrics | [Ch 2](02-navigating-repositories.md) |
| `@insiders-a11y-tracker` | Filed an accessibility bug, applied WCAG labels | [Ch 4](04-working-with-issues.md), [Ch 15](15-issue-templates.md) |
| `@template-builder` | Designed a template manually, tested locally | [Ch 15](15-issue-templates.md#7-building-an-accessibility-bug-report-template) |

**Estimated time for this chapter:** 1.5 hours (including exercises)

---

## Table of Contents

1. [The Principle: Skill First, Agent Second](#1-the-principle-skill-first-agent-second)
2. [Setup and Configuration](#2-setup-and-configuration)
3. [The Six Agents — Complete Reference](#3-the-six-agents--complete-reference)
4. [The 28 Slash Commands](#4-the-28-slash-commands)
5. [Building Your Own Agent](#5-building-your-own-agent)
6. [The Cloud Extension: Agents Beyond VS Code](#6-the-cloud-extension-agents-beyond-vs-code)
7. [GitHub Desktop, GitHub CLI, and Copilot CLI](#7-github-desktop-github-cli-and-copilot-cli)

---

## 1. The Principle: Skill First, Agent Second

Agent Forge is not a way to skip learning GitHub. It is a way to amplify skills you have already built through deliberate practice.

Every agent automates a sequence of steps you learned to do manually on Day 1. If you do not know those steps by hand, you cannot:

- Verify that the agent's output is correct
- Catch when the agent misses context that only you have
- Edit the agent's drafts into something worth posting under your name
- Know when the agent is confidently wrong

**Every agent has a Day 1 prerequisite. If you have not done the corresponding skill by hand, the agent is not ready for you yet — and you are not ready for it.**

| Agent | Skill You Must Have Done Manually First | See |
|-------|----------------------------------------|-----|
| `@daily-briefing` | Navigate repository activity, read notifications, understand issue and PR state | [Navigating Repos](02-navigating-repositories.md), [Notifications](09-notifications.md) |
| `@issue-tracker` | File at least one issue using the full manual process; apply labels; triage a list | [Working with Issues](04-working-with-issues.md), [Labels & Milestones](08-labels-milestones-projects.md) |
| `@pr-review` | Manually review at least one PR diff in the browser — read changed lines, leave inline comments | [Working with Pull Requests](05-working-with-pull-requests.md) |
| `@analytics` | Explore Insights for a repository; understand what contribution velocity and churn mean | [Navigating Repos](02-navigating-repositories.md), [Working with Issues](04-working-with-issues.md) |
| `@insiders-a11y-tracker` | File an accessibility bug report; apply WCAG labels; manually check a Markdown file for heading hierarchy | [Working with Issues](04-working-with-issues.md), [Issue Templates](15-issue-templates.md) |
| `@template-builder` | Design a template manually (understand field types, YAML structure, testing); create a template for your own project | [Issue Templates](15-issue-templates.md#7-building-an-accessibility-bug-report-template) |

The facilitator introduces one agent at a time in Block 3, and always asks the same question before each one:

> *"What would you do if you had to do this step manually right now?"*

That question is not rhetorical. Answer it before running the agent. If you cannot answer it, read the referenced guide section first.

---

## 2. Setup and Configuration

### First-Time Setup

1. **Fork** [agent-forge](https://github.com/accesswatch/agent-forge) to your GitHub account (you did this on Day 1 or Day 2 morning)
2. **Clone** your fork:
   ```bash
   git clone https://github.com/[your-username]/agent-forge.git
   ```
3. **Open in VS Code**: navigate to the folder → `code .` (or File → Open Folder)
4. **Open Copilot Chat**: `Ctrl+Shift+I`
5. **Test**: type `@daily-briefing morning briefing` → press `Enter`

**No API keys. No configuration files. No setup scripts. If Copilot Chat works, the agents work.**

### Prerequisites

- GitHub Copilot Chat extension installed (see [GitHub Copilot: Installation](13-github-copilot.md#2-installing-github-copilot))
- Signed in to GitHub via VS Code
- A workspace open containing `.github/agents/` folder with `.agent.md` files

### How Agents Are Discovered

When you type `@` in Copilot Chat, VS Code scans:

1. `.github/agents/*.agent.md` in your current workspace
2. Any agents installed globally on your machine
3. Agents defined by extensions

The six Agent Forge agents come from `.github/agents/` in your fork of the `agent-forge` repository.

### Optional: Personalize Your Instance

Copy the example preferences file:

```bash
cp .github/agents/preferences.example.md .github/agents/preferences.md
```

Open `preferences.md` in VS Code and edit:

```markdown
# My Agent Forge Preferences

## My GitHub Username
[your-username]

## Repositories I Work On Most
- [your-org]/[your-repo]
- accesswatch/agent-forge

## Preferred Output Format
Long-form with sections and headings (screen reader optimized)

## Notification Priority
Accessibility issues first, then review requests, then CI failures
```

Commit `preferences.md` to your fork. Now the agents know who you are and what you care about most.

**Note:** `preferences.md` is in `.gitignore` in the upstream repo — your personal preferences will not be included if you submit a PR. They stay in your fork only.

### How Agents Travel with Your Repo

When you fork `agent-forge`, the `.github/agents/` folder comes with it. This means:

- Any collaborator who clones your fork gets the same six agents
- You can customize the agents for your specific project by editing the `.agent.md` files in your fork
- Any project can have agents — you could create a `.github/agents/` folder in any repository and add `.agent.md` files using the same pattern

### Invoking Agents on GitHub.com

Agent Forge agents run in VS Code. But the same `.agent.md` files can also be invoked directly on GitHub.com — no VS Code, no local clone required.

**Option 1: Copilot Chat with Task mode**

<details>
<summary>Visual / mouse users</summary>

1. Open Copilot Chat on GitHub.com (icon in the top-right navigation bar)
2. Click **Task** in the mode picker
3. Optionally click the agent picker to select a custom agent
4. Type your request and click Send
5. Copilot analyzes the task and can create a branch and open a PR automatically

</details>

<details>
<summary>Screen reader users (NVDA / JAWS / VoiceOver)</summary>

1. Open Copilot Chat on GitHub.com (navigate to icon in top-right navigation → `Enter`)
2. The mode picker (Task vs Chat) is a set of radio buttons — navigate with `Arrow` keys to select "Task"
3. The agent picker is a listbox — `Up/Down Arrow` to navigate, `Enter` to select
4. Type your request in the chat input and press `Enter`
5. Copilot response appears in the chat thread; press `H` to navigate to the response heading

</details>

**Option 2: Assign an issue to Copilot**

<details>
<summary>Visual / mouse users</summary>

1. Open any issue (or create a new one describing the task)
2. In the **Assignees** sidebar section, click the gear icon
3. In the dropdown, click **Copilot** as the assignee
4. A dialog opens — optionally provide additional instructions and select a custom agent
5. Click **Assign** to confirm

</details>

<details>
<summary>Screen reader users (NVDA / JAWS / VoiceOver)</summary>

1. Open any issue in the repository
2. Press `B` to navigate to the Assignees gear button → `Enter` to open the popup
3. Navigate the popup with `Arrow` keys → find "Copilot" → `Enter` to select
4. A dialog opens with instruction text area and agent picker — fill as needed
5. `Tab` to the **Assign** button → `Enter`

</details>

This is the bridge to Section 6 (The Cloud Extension). The same agent file, three execution contexts: your editor, GitHub.com interactively, and GitHub Actions on a schedule.

---

### Copilot on GitHub.com — Browser-Native Features

Beyond assigning Copilot to issues and using Task mode in Chat, GitHub.com now has several standalone Copilot features built directly into the web interface. These work **entirely in your browser** — no VS Code, no local clone needed.

#### Copilot PR Summary

On any open pull request, GitHub adds a **"Summarize" button** in the PR description area. Selecting it generates a plain-language summary of what the PR changes, why, and what reviewers should focus on.

**When to use it:** Before doing a full accessible diff review (Chapter 14), read the Copilot summary first to orient yourself. This is especially helpful with large PRs.

<details>
<summary>Visual / mouse users</summary>

On any open PR page, look for a **"Summarize"** or **"Copilot summary"** button near the PR description area. Click it. The summary renders within a few seconds as a new section in the PR description.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS)</summary>

```
On any PR page:
B → navigate buttons → find "Summarize" or "Copilot summary" button → Enter
Wait for the summary to render (usually 5–10 seconds)
Copilot summary appears as a new blockquote or section above/below the description
H or 2 → navigate to the summary heading to read it
```

</details>

#### Copilot PR Review

On open PRs you have write access to review, a **"Review"** button (or Copilot icon) appears in the Files changed tab. Copilot generates inline review comments across the diff.

**When to use it:** As a starting point for a code review. Always read the Copilot-generated comments critically before adopting them — Copilot can miss context that a human reviewer would catch.

#### Copilot in Issues

On any issue page, Copilot adds sidebar buttons that appear once the page loads:
- **"Explain this issue"** — generates a plain-language explanation of a complex technical issue
- **"Suggest fix"** — proposes an approach to resolving the issue (opens a task/PR workflow)

<details>
<summary>Visual / mouse users</summary>

Look in the right sidebar on any issue page for a **Copilot section** with "Explain" and "Suggest fix" buttons. Click the button you want; the response appears below it in the sidebar.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS)</summary>

```
On any issue page:
H or 2 → navigate to "Copilot" section heading in the sidebar
B → activate "Explain" or "Suggest fix" button
Copilot response appears below the button; use H to navigate to it
```

</details>

#### GitHub Models — Free AI Playground

[github.com/marketplace/models](https://github.com/marketplace/models) is a free playground where you can test AI models (OpenAI GPT-4o, Meta Llama 3, Mistral, Phi-4 Mini, and others) directly in your browser.

**What you can do:**
- Send prompts to any listed model and compare responses side by side
- Adjust parameters (temperature, max tokens) without any setup
- Use the code sample generator to get API code for your chosen model
- All free with a GitHub account (rate-limited for free tier)

**Why it matters for Agent Forge:** When you build custom agents and prompts, you can test your system prompts and prompt templates in GitHub Models before adding them to your `.prompt.md` files — rapid iteration without burning API credits.

<details>
<summary>Visual / mouse users</summary>

Navigate to [github.com/marketplace/models](https://github.com/marketplace/models). Browse model cards and click one to open the chat playground. Type in the prompt field and press **Send**. Results appear in the response area.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS)</summary>

```
Navigate to https://github.com/marketplace/models
H → "Models" h1, then model category headings
Links → navigate to individual model cards
Enter on a model card → opens the chat playground
In the playground: E or F → navigate to the prompt textarea → NVDA+Space (Focus Mode) → type prompt → Enter to submit
Response appears below the Send button; use H to find the response section heading
```

</details>

#### Copilot-Drafted Release Notes

When creating a release (Releases tab → Draft a new release), GitHub provides a **"Generate release notes"** button. It scans merged PRs since the last release and drafts categorized release notes automatically.

This directly connects to the `/draft-release` slash command in Agent Forge — use the browser button for one-click generation, or use the agent when you want to customize the structure and add narrative context.

---

## 3. The Six Agents — Complete Reference

Open each agent file in VS Code to read its full instructions before using it: `.github/agents/[name].agent.md`

### Two Types of Agents

Before diving in, it helps to know that custom agents fall into two categories — this distinction affects what tool permissions they need and what they can do:

**Informational agents** search, analyze, and report. They respond in chat without modifying files. Examples: `@daily-briefing`, `@issue-tracker`, `@analytics`. These agents need only read and search tools (like `github/search_issues`, `github/issue_read`) — they are safer to trust with broad repository access and are simpler to build.

**Task-oriented agents** take action. They can read and edit files, run shell commands, create commits, and open pull requests. Examples: `@pr-review`, `@insiders-a11y-tracker`. These agents need a broader toolset (`read`, `edit`, `execute`, `github/*`) — and because they can make changes, their output always warrants human review before anything is posted or merged.

Many agents do both — they explain what they found (informational) and optionally make changes if you ask (task-oriented). The key question when you build your own is: *does this agent need to change files, or only to report?* Start informational. Expand to task-oriented only when the reporting alone is not enough.

---

### Agent 1: `@daily-briefing` — Morning Briefing

**Type:** Informational

**File:** `.github/agents/daily-briefing.agent.md`

**Before you run this agent:** You should have manually navigated a repository's Issues tab, read your GitHub Notifications page, understood what a pull request waiting for review looks like, and know the difference between subscribed and participating notifications. If those steps are not familiar yet, return to [Navigating Repositories](02-navigating-repositories.md) and [Notifications](09-notifications.md) first. The briefing output only makes sense when you already know what each section of it is describing.

**What it does:**

Sweeps every repository you have access to and builds a prioritized dashboard:
- Issues opened in the last 24 hours
- Pull requests waiting for your review
- CI failures on your branches
- Security and Dependabot alerts
- Community reactions to your recent comments

**Example commands:**

```
@daily-briefing morning briefing

@daily-briefing what needs my attention today in agent-forge?

@daily-briefing summarize activity in accesswatch/agent-forge from the last week
```

**Screen reader tip:** The briefing output uses heading level 2 for each section. Use `H` key (NVDA/JAWS virtual mode) or `VO+Command+H` (VoiceOver) to jump between: Open Issues, Review Requests, CI Status, Security Alerts, Community Activity.

**Output format:**

```markdown
## Issues Opened (Last 24 Hours)
- #42 [agent-forge] Add Timeline View documentation (opened 3 hours ago)
- #41 [agent-forge] Fix heading hierarchy in GUIDE.md (opened 18 hours ago)

## Pull Requests Awaiting Your Review
- #14 [agent-forge] Improve screen reader navigation guide (jeffb, 2 days old)

## CI Failures on Your Branches
- feature/add-timeline-guide — Tests failing on line 42 of timeline-test.md

## Security Alerts
- No new security alerts

## Community Activity
- Your comment on #38 received 3 reactions (×2, ×1)
```

---

### Agent 2: `@issue-tracker` — Issue Management

**Type:** Both (Informational + Task-oriented)

**File:** `.github/agents/issue-tracker.agent.md`

**Before you run this agent:** You should have filed at least one issue using the full manual process — writing a title, description, and reproduction steps; applying labels and a milestone; and reading at least five existing issues to understand what a well-formed issue looks like. If you have not done this, the agent's priority scores and draft replies will mean nothing to you. Return to [Working with Issues](04-working-with-issues.md) and [Labels, Milestones & Projects](08-labels-milestones-projects.md) first.

**What it does:**

Finds, prioritizes, and helps you manage issues across all your repositories:
- Cross-repository priority scoring with community sentiment
- Batch-reply capability (draft replies to multiple issues at once)
- Saved search support
- Release-awareness (flags issues that affect upcoming releases)

**Example commands:**

```
@issue-tracker find open issues labeled good-first-issue

@issue-tracker find accessibility issues across all my repos

@issue-tracker is there a duplicate of issue #42 in agent-forge?

@issue-tracker draft a reply to issue #15 acknowledging it and asking for more context
```

**Important:** The agent can draft a reply. You review the tone against the [Culture & Etiquette guide](07-culture-etiquette.md) before posting. Your name goes on it.

**Output example:**

```markdown
## Open Issues Labeled "good-first-issue"

### High Priority
- #45 [agent-forge] Add NVDA-specific navigation tips (3 comments, opened 5 days ago)
  - Priority Score: 8/10 (high community interest, clear scope, no assignee)
  - Recommended for: First-time contributors familiar with screen readers

### Medium Priority
- #38 [agent-forge] Improve commit message examples (1 comment, opened 2 weeks ago)
  - Priority Score: 5/10 (useful addition, low urgency)

## Draft Reply for Issue #15

Hi @contributor-name,

Thanks for opening this issue. To help us reproduce the problem, could you provide:
1. Which screen reader you're using (NVDA, JAWS, VoiceOver)
2. The exact steps you took when the issue occurred
3. What you expected to happen vs what actually happened

This will help us diagnose the issue faster.

— Draft by @issue-tracker (review before posting)
```

---

### Agent 3: `@pr-review` — Pull Request Review

**Type:** Both (Informational + Task-oriented)

**File:** `.github/agents/pr-review.agent.md`

**Before you run this agent:** You should have manually reviewed at least one pull request diff in the GitHub browser interface — navigating the Files Changed tab with your screen reader, reading added and removed lines, leaving at least one inline comment, and submitting a review. The agent generates a review document; you need to know what a good review looks like in order to edit, improve, and take ownership of what it produces. Return to [Working with Pull Requests](05-working-with-pull-requests.md) if this is not yet familiar.

**What it does:**

Generates full review documents for pull requests:
- Line-numbered diffs with change maps
- Risk assessment (what could break, what is high-impact)
- Before-and-after snapshots
- CI results and test coverage information
- Suggested inline review comments with line number references

**Example commands:**

```
@pr-review review PR #14 in agent-forge

@pr-review what is the risk level of PR #8?

@pr-review generate inline comments for PR #14

@pr-review summarize what changed in PR #14 in two sentences
```

**Critical rule:** Read the agent's review. Edit it. Make it yours. Post your edited version. The agent produces a starting point — it does not know the project's history, the contributor's background, or the community's implicit standards the way you do.

**Output example:**

```markdown
## PR Review: #14 — Improve screen reader navigation guide

### Summary
This PR adds 3 new sections to the screen reader navigation guide and updates 2 existing sections with NVDA-specific keyboard shortcuts.

**Files Changed:** 1  
**Lines Added:** 127  
**Lines Removed:** 18  

### Risk Assessment
**Risk Level:** Low

**What Could Break:**
- None identified — documentation-only change

**High-Impact Areas:**
- Section 3 (Keyboard Navigation) — heavily referenced by other guides

### Change Map

#### docs/navigation-guide.md

**Lines 42-65: ADDED — NVDA Browse Mode shortcuts**
+ New content explaining Browse Mode vs Focus Mode
+ Table of NVDA-specific shortcuts
+ Screen reader announcements examples

**Lines 88-92: MODIFIED — Updated heading hierarchy example**
- Old: Basic example with 2 levels
+ New: Comprehensive example with 3 levels and explanations

**Lines 120-145: ADDED — Common navigation mistakes section**
+ Lists 5 common mistakes with solutions

### Suggested Inline Comments

**Line 48:** Consider adding a note that Browse Mode is called "Virtual Cursor" in JAWS
**Line 127:** Typo — "anounced" should be "announced"
**Line 143:** This mistake applies to VoiceOver too — expand to include VO+Arrow navigation

### Recommendation
**Approve with Minor Changes**

This is a valuable addition to the guide. The three typos and one clarification request are minor. Once those are addressed, this is ready to merge.

— Review generated by @pr-review (edit before posting)
```

---

### Agent 4: `@analytics` — Team Analytics

**Type:** Informational

**File:** `.github/agents/analytics.agent.md`

**Before you run this agent:** You should have explored the Insights tab of at least one repository — looked at the contribution graph, understood what commit frequency means, and thought about what "high-churn files" implies for a project's stability. The analytics output describes patterns in data you should already be able to read manually. Return to [Navigating Repositories](02-navigating-repositories.md) if the Insights tab is unfamiliar.

**What it does:**

Surfaces team contribution patterns, velocity metrics, and bottleneck detection:
- Contribution velocity over time
- Review turnaround time by reviewer
- Code hotspot detection (files with the most churn)
- Workload distribution across contributors

**Example commands:**

```
@analytics team velocity in agent-forge this month

@analytics who are the most active contributors to agent-forge?

@analytics which files are changed most often in agent-forge?

@analytics how long does PR review take on average in agent-forge?
```

**Accessibility use case:** After Day 2's contribution wave, run `@analytics team velocity in agent-forge today` to see the hackathon's collective output. A moment of real-time team celebration.

**Output example:**

```markdown
## Team Velocity — agent-forge (January 2026)

### Contribution Summary
- **Total Commits:** 47
- **Total PRs:** 12 (10 merged, 2 open)
- **Contributors:** 8 (3 new this month)
- **Average Commits per Day:** 1.5

### Most Active Contributors
1. **jeffb** — 18 commits, 5 PRs merged
2. **alex-a11y** — 12 commits, 3 PRs merged
3. **sara-docs** — 8 commits, 2 PRs merged

### High-Churn Files (Most Frequently Changed)
1. **docs/GUIDE.md** — 14 changes (documentation updates)
2. **README.md** — 8 changes (feature additions, fixes)
3. **.github/agents/pr-review.agent.md** — 6 changes (agent refinement)

### PR Review Turnaround Time
- **Average:** 18 hours
- **Fastest:** 2 hours (PR #14)
- **Slowest:** 72 hours (PR #8 — awaiting maintainer review)

### Trends
- Commit velocity up 40% compared to December 2025
- New contributors joining at healthy rate (3 this month)
- Review times improving (down from 24-hour average last month)
```

---

### Agent 5: `@insiders-a11y-tracker` — Accessibility Change Monitoring

**Type:** Both (Informational + Task-oriented)

**File:** `.github/agents/insiders-a11y-tracker.agent.md`

**Before you run this agent:** You should have filed at least one accessibility bug report using the workshop's issue template, applied a WCAG label to an issue, and manually reviewed a Markdown file for heading hierarchy — knowing what H1 → H2 → H3 means, what a skip means, and why it matters to screen reader navigation. The tracker flags accessibility issues in your contributions; you need to understand the standard it is measuring against before you can act on its output. Return to [Issue Templates](15-issue-templates.md) and [Working with Issues](04-working-with-issues.md) if these are not yet familiar.

**What it does:**

Monitors accessibility-sensitive changes across configured repositories:
- WCAG/ARIA cross-referenced change tracking
- Flags changes to keyboard navigation, ARIA attributes, focus management, color usage
- Monitors for heading hierarchy violations in Markdown
- Tracks link text quality (flags bare URLs, non-descriptive labels)

**Example commands:**

```
@insiders-a11y-tracker check recent changes in agent-forge

@insiders-a11y-tracker review my PR #14 for accessibility impact

@insiders-a11y-tracker are there any accessibility regressions in the last 5 commits?
```

**Day 2 workflow:** Run this before submitting any PR. If the agent flags an issue, fix it before requesting review — not after.

**Output example:**

```markdown
## Accessibility Changes — agent-forge (Last 5 Commits)

### Issues Found: 2

#### Issue 1: Heading Hierarchy Skip
**File:** docs/11-vscode-basics.md  
**Commit:** a3f2b9c  
**Line:** 142  

**Problem:** H1 → H3 skip (missing H2)

```markdown
# VS Code Setup

### Screen Reader Mode
```

**WCAG Guideline:** 1.3.1 Info and Relationships (Level A)

**Impact:** Screen reader users navigating by heading level will not find this section when jumping to H2 headings.

**Suggested Fix:** Change `### Screen Reader Mode` to `## Screen Reader Mode`

---

#### Issue 2: Non-Descriptive Link Text
**File:** README.md  
**Commit:** b8e3c1d  
**Line:** 28  

**Problem:** Link text is "click here"

```markdown
For more information, [click here](https://example.com/guide).
```

**WCAG Guideline:** 2.4.4 Link Purpose (Level A)

**Impact:** Screen reader users navigating by links will hear "click here" with no context about the destination.

**Suggested Fix:** Use descriptive link text: `Read the [complete setup guide](https://example.com/guide).`

---

### Positive Changes: 1

#### Improvement: ARIA Label Added
**File:** docs/navigation-guide.md  
**Commit:** c7d4e2f  
**Line:** 89  

**Change:** Added `aria-label` to icon-only button example

```markdown
<button aria-label="Close dialog">✕</button>
```

**WCAG Guideline:** 4.1.2 Name, Role, Value (Level A)

**Impact:** Screen reader users can now understand the button's purpose without visible text.

---

## Recommendations

1. Fix heading hierarchy skip in docs/11-vscode-basics.md before merging PR #14
2. Update link text in README.md (low priority — not in active workflow path)
3. Continue using descriptive ARIA labels for icon-only controls (positive trend)
```

---

### Agent 6: `@template-builder` — Interactive Issue Template Wizard

**Type:** Informational with guided output

**File:** `.github/agents/template-builder.agent.md`

**Before you run this agent:** You should have read [Issue Templates](15-issue-templates.md) thoroughly — understanding YAML field types, creating a template manually (Exercise B), and designing your own template (Exercise D). The Template Builder does not teach template design — it automates the YAML writing. You need to know what you want to ask for before the agent can guide you through the form structure.

**What it does:**

An interactive wizard that guides you through building GitHub issue templates step-by-step using VS Code's Ask Questions feature. Instead of writing YAML syntax, answer simple questions and the agent generates production-ready templates.

**Example workflow:**

```
You: @template-builder create accessibility bug template

Agent: [Ask Questions interface]
  Q: What's this template called?
  → "Accessibility Bug Report"
  
  Q: What's it for?
  → "Report screen reader, keyboard, and assistive tech issues"
  
  Q: Add a field (type, label, required?)
  → Field 1: dropdown, "Screen Reader", yes
     Options: NVDA, JAWS, VoiceOver, TalkBack, Other
  
  → Field 2: textarea, "How to reproduce", required
  
  → Field 3: textarea, "Expected vs actual", required
  
  Q: Ready to generate?
  → Yes

Agent: [Syntax-highlighted YAML output]
        Ready to copy and save to .github/ISSUE_TEMPLATE/
```

**Example commands:**

```
@template-builder create accessibility template

@template-builder design a security vulnerability template

@template-builder build a feature request form
```

**Why use it?** Manual YAML template creation takes 15-20 minutes and is error-prone. The Template Builder generates correct, tested templates in 2-3 minutes via guided questions.

**Advanced:** After generating a template, you can ask: `@template-builder reorder the fields` or `@template-builder add a checkbox field for version compatibility` — the agent regenerates your YAML with the changes applied.

---

## 4. The 28 Slash Commands

Slash commands are simpler than agents — they're single-purpose prompts defined in `.github/prompts/`. Type `/` in Copilot Chat to see the full command menu.

### Most Useful for This Workshop

| Command | What It Does | Example Usage |
|---------|-------------|---------------|
| `/my-issues` | Your open issues with priority signals | `/my-issues` |
| `/review-pr` | AI-generated review with inline suggestions | `/review-pr #14` |
| `/pr-comment` | Draft a response to a PR comment | `/pr-comment #14` |
| `/a11y-update` | Latest accessibility improvements with WCAG cross-references | `/a11y-update insiders` |
| `/triage` | Triage a new issue with label and priority suggestions | `/triage #22` |
| `/issue-reply` | Draft a reply to an issue thread | `/issue-reply #15` |
| `/daily-briefing` | Same as `@daily-briefing` — your morning activity snapshot | `/daily-briefing` |
| `/draft-release` | Generate release notes from merged PRs | `/draft-release v2.0` |
| `/my-prs` | Your open PRs with CI and review status | `/my-prs` |

### Complete Slash Command List

```
/address-comments     Address all open review comments on your PR
/a11y-update          Latest accessibility improvements with WCAG cross-references
/ci-status            CI/CD health dashboard across your repos
/create-issue         Create a well-formed issue from a description
/daily-briefing       Morning activity snapshot across all your repos
/draft-release        Generate release notes from merged PRs
/explain-code         Explain selected code in plain language
/issue-reply          Draft a reply to an issue thread
/manage-branches      List, compare, and clean up branches
/manage-issue         Update labels, assignees, or status on an issue
/merge-pr             Check merge readiness and merge a PR
/my-issues            Your open issues with priority signals
/my-prs               Your open PRs with CI and review status
/my-stats             Your contribution stats across repos
/notifications        Manage GitHub notifications without opening a browser
/onboard-repo         First-time scan of a repo — health, quick wins, recommended actions
/pr-author-checklist  Pre-merge checklist for PR authors
/pr-comment           Draft a response to a PR comment
/pr-report            Detailed PR analysis report
/project-status       GitHub Projects board overview — columns, blocked, stale
/react                Suggest or add a reaction to an issue or comment
/refine-issue         Improve issue title, description, and labels
/release-prep         Complete release preparation workflow
/review-pr            AI-generated review with inline suggestions
/security-dashboard   Dependabot alerts and vulnerability status
/sprint-review        End-of-sprint summary with velocity and retrospective
/team-dashboard       Team activity and contribution overview
/triage               Triage a new issue with label and priority suggestions
```

### Reading Slash Command Definitions

Each `/command` corresponds to a `.prompt.md` file in `.github/prompts/`. Open any of them in VS Code to read what instructions it gives Copilot.

**Example: `/a11y-update`**

File: `.github/prompts/a11y-update.prompt.md`

```markdown
---
name: a11y-update
description: "Get the latest accessibility improvements across all tracked repos -- with WCAG cross-references and ARIA pattern mapping"
agent: insiders-a11y-tracker
tools:
  - github/*
  - createFile
  - createDirectory
  - ask_questions
---

Show me the latest accessibility improvements across tracked repositories.

${input:scope:Optional: 'insiders', 'stable', 'both', a specific month, 'screen reader', search keywords, 'track owner/repo', or a specific repo name}

## Behavior

Load accessibility tracking configuration from `.github/agents/preferences.md`
(repos, labels, channels). If no preferences exist, use defaults
(microsoft/vscode with accessibility labels).
```

**This is how you learn to write your own.** Copy an existing file, edit the instructions, save it with a new name — you have just created a new slash command for your fork.

---

## 5. Building Your Own Agent

The six Agent Forge agents and 28 slash commands are starting points. The `.agent.md` format is open — you can create your own agents for any repeatable workflow.

> Source: [accessibility.github.com/documentation/guide/getting-started-with-agents/](https://accessibility.github.com/documentation/guide/getting-started-with-agents/)

### Two Types of Custom Agents

**Informational agents** — conversational; search, analyze, and present results:
- Perform GitHub searches with predefined scopes and filters
- Present results in specific structured formats
- Query GitHub API tools to answer questions

**Task-oriented agents** — active; edit files, run commands, submit PRs:
- Execute external tools (linters, test suites, axe-core)
- Make direct file edits based on findings
- Create pull requests with proposed changes
- Combine both: explain issues (informational) and fix them (task-oriented)

### Agent File Structure

Every `.agent.md` file has two parts: **YAML frontmatter** (metadata) and a **system prompt** (markdown body).

```markdown
---
name: agent-name
description: One-sentence description of what the agent does
tools:
  - github/search_issues
  - github/issue_read
---

## Purpose
Brief explanation of when to use this agent

## Your Capabilities
- What the agent can find or do

## Domain Knowledge
Specific query patterns, filters, or product knowledge

## Responsibilities
Step-by-step behavioral rules

## Response Guidelines
How to format output
```

**Frontmatter fields:**

| Field | Required | Description |
|-------|----------|-------------|
| `name` | Recommended | How the agent appears in the agent picker |
| `description` | Recommended | Shown in agent lists |
| `tools` | Optional | Restricts tool access; omit to grant all tools |

**Restricting tool access** is a security best practice — only grant what the agent actually needs:

```yaml
# Informational agent — read-only GitHub tools only
tools: ["github/search_issues", "github/issue_read"]

# Task-oriented agent — file editing, shell execution, and GitHub API
tools:
  - read
  - edit
  - search
  - execute
  - github/*
```

### Example: Informational Agent — `@insiders-a11y-tracker`

This agent monitors VS Code Insiders releases for accessibility improvements. It searches the `microsoft/vscode` repository using predefined GitHub query syntax, so you never have to remember the exact filter parameters.

**Use it:**
1. Select `@insiders-a11y-tracker` from the agent picker
2. Ask: `what shipped this month?` or `any keyboard navigation improvements in January?`
3. The agent searches with `repo:microsoft/vscode is:closed milestone:"[Month] [Year]" label:accessibility label:insiders-released` and returns formatted results

**Prerequisite:** GitHub MCP server installed ([github.com/github/github-mcp-server](https://github.com/github/github-mcp-server))

### Example: Task-Oriented Agent — The Markdown Accessibility Assistant

The GitHub Accessibility team published a complete walkthrough for building a **Markdown Accessibility Assistant** — a task-oriented agent that reviews Markdown files for accessibility issues and makes direct fixes. It:

- Runs `markdownlint-cli2` to catch structural problems (heading skips, bare URLs, missing blank lines)
- Reviews link text for descriptiveness
- Flags missing or inadequate alt text and **waits for your approval** before changing it (alt text requires human judgment)
- Fixes heading hierarchy, list structure, and bare URL formatting directly
- Works both locally in VS Code (editing files) and on GitHub.com (reviewing PRs and committing fixes)

This agent is the automated version of the accessibility review skills you built during Day 1. The five principles it enforces are directly from GitHub's accessibility documentation.

**To build it:** Follow the step-by-step guide at [accessibility.github.com/documentation/guide/getting-started-with-agents](https://accessibility.github.com/documentation/guide/getting-started-with-agents/) — the YAML frontmatter, each section of the system prompt, and the complete agent file are all shown.

### Key Pattern: Tiered Decision-Making

From the guide:

```
For objective issues (link text, heading hierarchy, list structure):
  → Agent makes the fix directly

For subjective issues (alt text, plain language):
  → Agent flags the issue, explains why it matters, suggests a fix,
    and waits for human approval before making changes
```

This tiered approach — automate what can be objectively evaluated, flag what needs human judgment — is the right model for any accessibility agent. It maximizes the agent's value while keeping humans in control of decisions that require context.

### Required Prerequisites for the Markdown Accessibility Assistant

- GitHub MCP server installed and configured ([github.com/github/github-mcp-server](https://github.com/github/github-mcp-server))
- Node.js installed (for `npx markdownlint-cli2`)

### Invoking Custom Agents

**From VS Code:**
1. Open Copilot Chat (`Ctrl+Shift+I` / `Cmd+Shift+I` on macOS)
2. In the Chat input toolbar, select the **Set Agent** button
3. Select your custom agent from the agent picker
4. Type your request — the agent executes in your local workspace

**From GitHub.com (Task mode):**
1. Open Copilot Chat on GitHub.com
2. Select **Task** from the mode picker
3. Optionally select a custom agent from the agent picker
4. Submit your request — the agent can create a PR automatically

**From an issue (Issue Assignment):**
1. Open any issue → **Assignees** → assign **Copilot**
2. In the dialog, optionally select a custom agent
3. Select **Assign** — Copilot creates a branch, makes changes, and opens a PR

### Environment Setup for GitHub (Cloud Agents)

When agents run on GitHub (not locally), they may need additional tools. Create a workflow file at `.github/workflows/copilot-setup-steps.yml` with a single job named `copilot-setup-steps`. GitHub runs this before the agent starts:

```yaml
name: Copilot Setup Steps
on: workflow_dispatch
jobs:
  copilot-setup-steps:
    runs-on: ubuntu-latest
    steps:
      - name: Install accessibility tools
        run: npm install -g markdownlint-cli2 axe-cli
```

**Windows users:** If your project requires a Windows development environment for Copilot coding agent sessions, you can switch the runner from Ubuntu to Windows. See [Switching Copilot to a Windows development environment](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/customize-the-agent-environment#switching-copilot-to-a-windows-development-environment) for configuration details.

### To Create Your Own Agent

1. Create `.github/agents/your-agent-name.agent.md`
2. Write YAML frontmatter (`name`, `description`, `tools`)
3. Write the system prompt — identity, capabilities, domain knowledge, behavioral rules, output format
4. Save and reload VS Code (`Ctrl+Shift+P` → "Reload Window")
5. Type `@your-agent-name` in Copilot Chat

### Exercise: Extend the Template Builder Agent

You've built templates manually (Chapters 15-16) and seen them in action. Now see how to harness AI to generate templates interactively, and learn to customize agents for your own projects.

**What You'll Learn:** How agents work, how to interact with the `@template-builder` agent, and how to extend it for project-specific needs.

**Prerequisites:**
- Complete Chapters 15-16 (especially Exercise D — designing your own template)
- VS Code is installed and GitHub Copilot is active
- You have forked `agent-forge` to your GitHub account
- You have cloned your fork locally: `git clone https://github.com/[your-username]/agent-forge.git`

---

#### Exercise 1: Generate a Template with the Agent

**Your Mission:** Use the `@template-builder` agent to generate an accessibility bug report template interactively. You'll experience the agent as an end-user and see what production-ready agent output looks like.

**Time estimate:** 5-10 minutes

---

##### Step 1: Open Your Fork in VS Code

**What to do:**
1. Open VS Code
2. **File** → **Open Folder** → select your locally cloned `agent-forge` folder
3. The folder tree appears on the left showing the repository structure
4. **Verify you're in the right place:** The folder name should be `agent-forge` at the top of the sidebar

**What you should see:**
- Left sidebar showing: `.github/`, `docs/`, `learning-room/`, `README.md`, etc.
- The status bar at the bottom shows your current git branch (probably `main`)

---

##### Step 2: Open Copilot Chat

**What to do:**
1. **Keyboard shortcut:** Press `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Shift+I` (macOS)
   - **Alternative:** Use menu: **View** → **Copilot Chat**
2. A chat panel opens on the right side of VS Code
3. At the top, you see "Copilot Chat" and probably a text input at the bottom saying "Ask Copilot..."

**What happens:**
- Copilot is now ready to receive instructions
- You have access to all agents in `.github/agents/` (because you opened that folder)

**If Copilot Chat doesn't open:**
- Make sure GitHub Copilot Chat extension is installed (Extensions sidebar → search "GitHub Copilot Chat")
- Make sure you're signed into GitHub (top right of VS Code)
- Restart VS Code if neither of the above is the problem

---

##### Step 3: Invoke the Template Builder Agent

**What to do:**
1. Click in the chat input box (bottom of Copilot Chat panel)
2. Type: `@template-builder` (the `@` prefix invokes an agent)
3. You should see suggestions appearing: a dropdown showing available agents
4. If `@template-builder` appears, click it or press `Enter` to select it
5. The input now shows: `@template-builder `

**What to do next:**
1. Type: `create accessibility template`
2. Your full message should read: `@template-builder create accessibility template`
3. Press `Enter` to send

**What happens:**
- The agent processes your request
- It starts asking questions via VS Code's Ask Questions interface
- A series of prompts appear asking you to define your template

---

##### Step 4: Answer the Agent's Questions

**What to expect:**
The `@template-builder` agent will ask (via Ask Questions UI):
1. "What's your template name?" (text input)
2. "What's this template for?" (text input)
3. "First field name?" (text input)
4. "Field type?" (dropdown: input, textarea, dropdown, checkboxes, markdown)
5. "Is this field required?" (yes/no toggle)
6. "More fields?" (yes/no)
7. [Repeat for each field you want]

**How to interact:**
- **For text inputs:** Type your answer and press `Tab` or `Enter` to move to the next prompt
- **For dropdowns:** Use `↑↓ Arrow keys` to navigate options, `Enter` to select
- **For toggles:** Press `Space` to switch between yes/no

**Example responses:**

```
Q: Template name?
A: Accessibility Bug Report

Q: What's it for?
A: Report screen reader and keyboard navigation issues

Q: First field name?
A: Screen Reader

Q: Field type?
A: dropdown

Q: Dropdown options? (comma-separated)
A: NVDA, JAWS, VoiceOver, TalkBack, Other

Q: Required?
A: Yes

Q: Add another field?
A: Yes

Q: Second field name?
A: Browser

Q: Field type?
A: dropdown

Q: Options?
A: Chrome, Firefox, Safari, Edge, Other

Q: Required?
A: Yes

Q: Add another field?
A: No
```

**As you answer:**
- Read each question carefully
- Provide clear, brief answers
- Don't worry about perfect wording — the agent will format it correctly

**What success looks like:**
- You've answered at least 3-4 fields
- Each field has a name, type, and requirement status
- The agent confirms: "Ready to generate your template? Yes/No"

---

##### Step 5: Generate and Review the Output

**What to do:**
1. When the agent asks "Ready to generate?", select **Yes**
2. The agent produces a **complete YAML template** in the chat
3. The template appears in a code block with syntax highlighting
4. The code block has buttons: **Copy** and **Insert into File** (or similar)

**What to look for:**
- The template starts with `name:`, `description:`, `title:`, `labels:`
- Under `body:`, each field appears with `type:`, `id:`, `attributes:`, `validations:`
- Dropdown fields show `options:` with your specified choices
- Required fields show `required: true`

**Example output (truncated):**

```yaml
name: Accessibility Bug Report
description: Report screen reader and keyboard navigation issues
title: "[A11Y] "
labels: ["accessibility"]

body:
  - type: dropdown
    id: screen_reader
    attributes:
      label: Screen Reader
      options:
        - NVDA
        - JAWS
        - VoiceOver
        - TalkBack
        - Other
    validations:
      required: true
  
  - type: dropdown
    id: browser
    attributes:
      label: Browser
      options:
        - Chrome
        - Firefox
        - Safari
        - Edge
        - Other
    validations:
      required: true
```

**Validate the output:**
- ✓ Does the YAML syntax look correct? (colons, indentation, no red squiggles if VS Code is open)
- ✓ Are all your fields present?
- ✓ Are dropdowns showing the options you specified?
- ✓ Are required fields marked as `required: true`?

**If something looks wrong:**
- Don't edit the YAML yet — just note what's off
- You can ask the agent: "@template-builder fix the browser field, should be an input not a dropdown"
- The agent regenerates with corrections

---

##### Step 6: Copy the Template

**What to do:**
1. In the code block, click the **Copy** button (usually top-right of the code block)
   - **Keyboard alternative:** Select all the code (`Ctrl+A` while in code block), then `Ctrl+C`
2. The template is copied to your clipboard

**Verify:**
- A notification may appear: "Copied to clipboard"
- The text is ready to paste

---

##### Step 7: Save the Template to Your Fork

**What to do:**
1. In VS Code, open the file explorer (left sidebar)
2. Navigate to: `.github/ISSUE_TEMPLATE/`
3. Right-click in the folder and select **New File**
4. Name it: `my-a11y-template.yml` (or `[project]-template.yml`)
5. A new file opens in the editor with an empty content area
6. **Click and paste** your copied YAML: `Ctrl+V`
7. Save the file: `Ctrl+S`

**What you should see:**
- The YAML fills the file
- Syntax highlighting colors the code
- No red squiggles (if syntax is valid)
- File is marked as "modified" (white dot on the tab)
8. **Commit and push to GitHub:**
   ```bash
   git add .github/ISSUE_TEMPLATE/my-a11y-template.yml
   git commit -m "feat: add accessibility template (agent-generated)"
   git push origin main
   ```

**If there's a merge conflict:**
- Ask your facilitator for help (unlikely at this point)

---

##### Step 8: Test the Template in Your Fork

**What to do:**
1. Go to your fork on GitHub in your browser
2. Click **Issues** tab
3. Click **New issue** → the template chooser appears
4. Your new template should appear: "Accessibility Bug Report"
5. Click it to open the form
6. Fill in a test issue (just to see the form work)
7. **With screen reader:** Navigate through the form and confirm:
   - All labels are announced clearly
   - Dropdown options are readable
   - Required fields are marked

**What success looks like:**
- The template appears when you click "New issue"
- All fields display and behave correctly
- Dropdowns work as expected
- Screen reader announces everything clearly

---

##### Checkpoint: Exercise 1 Complete

Verify you've accomplished:
- Used `@template-builder` to generate a template via Ask Questions
- Received a complete YAML template
- Copied the template and saved it to `.github/ISSUE_TEMPLATE/`
- Pushed it to GitHub
- Tested it in your fork's issue form
- Confirmed it's accessible with screen reader

**What you learned:**
- How AI agents can automate the mechanical parts of GitHub workflows
- The interaction pattern: you describe, agent generates, you refine/deploy
- That the agent's output still needs human review and testing

---

#### Exercise 2: Extend the Agent for Your Project

**Your Mission:** Customize the Template Builder agent to recognize and guide a **Security Vulnerability Report** template. This teaches you how to tailor agents for project-specific needs.

**Time estimate:** 10-15 minutes

---

##### Step 1: Open the Agent File

**What to do:**
1. In VS Code, navigate to `.github/agents/`
2. File: `template-builder.agent.md`
3. Double-click to open it in the editor
4. You see the agent's instructions in Markdown format

**What to notice:**
- The file starts with YAML frontmatter (name, description, topics)
- Below that, sections like "## How to Use", "## Pre-Built Workflow"
- Search for the text "Pre-Built Workflow: Guided Accessibility Template"

---

##### Step 2: Find the Pre-Built Workflows Section

**What to do:**
1. Use `Ctrl+F` to open Find
2. Search for: `Pre-Built Workflow`
3. Press `Enter` to jump to the first match
4. You should land on the "Pre-Built Workflow: Guided Accessibility Template" section
5. This section explains how to invoke the agent with a specific behavior

**What to look for:**
```markdown
## Pre-Built Workflow: Guided Accessibility Template

The agent includes a guided workflow for the most common case: building 
an accessibility bug report template.

### Invoke with:
- `@template-builder` + "create accessibility template"
- `/build-a11y-template`

### Workflow:
The agent skips to Phase 2 but pre-populates it with ...
```

---

##### Step 3: Add a New Pre-Built Workflow

**What to do:**
1. Position your cursor at the end of the "Accessibility Template" section (before the next `## ` or `---`)
2. Press `Enter` twice to create space
3. Type a new section for Security Vulnerability templates:

```markdown
## Pre-Built Workflow: Guided Security Vulnerability Template

Query the agent with: `@template-builder` + "create security template"

### Workflow:
The agent guides you through vulnerability-specific fields:

1. **Vulnerability Type** (dropdown)
   - SQL Injection
   - Cross-Site Scripting (XSS)
   - Authentication bypass
   - Privilege escalation
   - Denial of Service
   - Other

2. **Severity** (dropdown)
   - Critical (impacts availability/integrity/confidentiality)
   - High (moderate impact, likely exploitable)
   - Medium (limited impact or hard to exploit)
   - Low (minimal impact)

3. **Affected Versions** (input)
   - Which versions of your software are vulnerable?

4. **Impact Description** (textarea)
   - What can an attacker do if they exploit this?

5. **Proof of Concept** (textarea, optional)
   - Can you demonstrate the vulnerability?

6. **Requested Disclosure Timeline** (input, optional)
   - When should you publish the fix?

### Output:
A security vulnerability report template ready for your project's use.
```

**What you're adding:**
- A clear label for the new workflow
- Instructions on how to invoke it
- Pre-defined fields that make sense for security reports
- Specific options for severity and vulnerability type

---

##### Step 4: Save the Updated Agent

**What to do:**
1. Save the file: `Ctrl+S`
2. You should see no error messages
3. The agent file now includes your new Pre-Built Workflow

**What happens:**
- The agent recognizes your new workflow
- Next time you invoke `@template-builder` with "create security template", it will follow your new guidance

---

##### Step 5: Test the Extended Agent

**What to do:**
1. Open Copilot Chat again: `Ctrl+Shift+I`
2. Type: `@template-builder create security template`
3. Press `Enter`
4. The agent should now ask vulnerability-specific questions:
   ```
   Q: Template name?
   A: Security Vulnerability Report
   
   Q: What's it for?
   A: Report security vulnerabilities in a standardized format
   
   Q: First field?
   A: Vulnerability Type (dropdown)
   
   Q: Options?
   A: SQL Injection, XSS, Authentication Bypass, Privilege Escalation, DoS, Other
   ```

**What success looks like:**
- The agent recognizes "create security template"
- It guides you through security-specific fields
- The output is a different template than the accessibility one

**If the agent doesn't recognize your new workflow:**
- Make sure you saved the file
- Try reloading VS Code: `Ctrl+Shift+P` → "Reload Window"
- Try the agent invocation again

---

##### Step 6: Deploy Your Extended Agent

**What to do:**
1. Commit your agent change:
   ```bash
   git add .github/agents/template-builder.agent.md
   git commit -m "feat: add security vulnerability template workflow to template-builder agent"
   git push origin main
   ```
2. The extended agent is now in your fork
3. Anyone who forks your fork gets the security workflow too

**What success looks like:**
- Your commit appears on GitHub
- The agent file shows the new Pre-Built Workflow section
- You can prove the template-builder agent is now customized for your project

---

##### Checkpoint: Exercise 2 Complete

Verify you've accomplished:
- Located the agent file (template-builder.agent.md)
- Found the Pre-Built Workflows section
- Added a new Security Vulnerability workflow with specific fields
- Tested the agent to confirm it recognizes your new workflow
- Committed and pushed the changes

**What you learned:**
- How agents are just structured Markdown instructions
- How to tailor agent behavior for specific domains (accessibility, security, etc.)
- That you can extend agents without rewriting them completely

---

#### Exercise 3: Iterative Refinement with Agents

**Your Mission:** Generate a template, then ask the agent to modify it incrementally. This teaches you the iterative pattern that scales to all agent-assisted workflows.

**Time estimate:** 5-10 minutes

---

##### Step 1: Start Fresh

**What to do:**
1. In Copilot Chat, type: `@template-builder create a feature request template`
2. Answer the agent's questions to build a feature request form:
   ```
   Name: Feature Request
   Purpose: Propose new functionality
   Fields:
   - Problem Statement (textarea, required)
   - Proposed Solution (textarea, required)
   - Version Interested (input, optional)
   ```
3. Let the agent generate the YAML
4. Copy it to a file: `.github/ISSUE_TEMPLATE/feature-request.yml`

**What you're doing:**
- Running a complete template generation (same as Exercise 1)

---

##### Step 2: Ask for a Modification

**What to do:**
1. Once the template is generated, **while still in the same chat conversation**, ask:
   ```
   @template-builder add a checkbox field: "I have searched for existing feature requests"
   ```
2. The agent regenerates the YAML with your new checkbox added in the right place (usually as required field pre-validation)

**What happens:**
- The agent **modifies** the YAML it generated
- The new checkbox appears in the YAML with proper formatting and indentation
- It doesn't regenerate from scratch — just adds your change

---

##### Step 3: Request Another Refinement

**What to do:**
1. Follow up with:
   ```
   @template-builder change "Proposed Solution" field to include markdown code block support
   ```
2. The agent modifies the textarea field's attributes to enable code highlighting

**What changes:**
- The field now includes `render: "a11y friendly code rendering"` or similar
- The YAML structure is preserved; only the specific field is enhanced

---

##### Step 4: Observe the Iterative Pattern

**What to reflect on:**
1. You gave the agent **one goal** (generate a feature request template)
2. The agent produced **complete output** (full YAML)
3. You **refined incrementally** (add checkbox, enhance code support)
4. At each step, the agent **understood context** (which field, how to modify it)
5. You **didn't start over** — just evolved the template

**This is the pattern that scales:**
- **Template generation:** "Create a template with these fields"
- **Code review:** "Review this PR and flag accessibility issues"
- **Issue triage:** "Summarize these 5 issues and suggest priorities"
- **Documentation:** "Generate release notes from these commits"

Each one follows: describe → generate → refine → deploy.

---

##### Checkpoint: Exercise 3 Complete

Verify you've accomplished:
- Generated a feature request template with the agent
- Asked for a modification (add checkbox)
- Requested further refinement (enhance field)
- Observed how the agent maintains context across requests

**What you learned:**
- Agents work best with **iterative dialogue**, not one-shot requests
- You can build complex outputs through successive refinements
- The agent remembers context and can modify instead of regenerate
- This pattern applies to any repeatable GitHub workflow

---

### What Comes Next

You've now:
1. **Generated a template** using an agent (Exercise 1)
2. **Customized an agent** for your domain (Exercise 2)
3. **Refined iteratively** with agent help (Exercise 3)

Your next step: use these skills for other agents.

- Use `@pr-review` to draft code review comments (manual → agent → refine)
- Use `@issue-tracker` to find and prioritize issues (manual → agent → refine)
- Use `@daily-briefing` to summarize your daily activity (manual → agent → refine)

Each agent follows the same pattern: **you know the manual way, the agent suggests, you refine and decide.**

That's Agent Forge's promise: not to replace your thinking, but to amplify your skills.

---

## 6. The Cloud Extension: Agents Beyond VS Code

Agent Forge's agents run on your machine, in your editor, when you ask for them. That is one scope.

The same Markdown-authored pattern extends further:

### Scope 1: Your Editor (Agent Forge)

- **File lives in:** `.github/agents/[name].agent.md` in your workspace
- **Triggered by:** You, when you type `@[agent-name]` in Copilot Chat
- **Runs on:** Your machine, using your Copilot subscription
- **Reaches:** Every repository your GitHub account has access to

### Scope 2: Your Repository (Travels with Forks)

- **File lives in:** `.github/agents/[name].agent.md` in the repo
- **Triggered by:** Any contributor who has Copilot and opens the repo as a VS Code workspace
- **Runs on:** Their machine, using their Copilot subscription
- **Reaches:** Their GitHub account's repositories

When you fork `agent-forge`, the agents come with it. You can edit them for your project's context. You can add new ones. You can share them with every contributor who clones your fork.

### Scope 3: The Cloud (GitHub Agentic Workflows)

- **File lives in:** `.github/workflows/[name].md` (same folder as standard Actions YAML)
- **Triggered by:** Any GitHub event — `issues: opened`, `pull_request: created`, `schedule:`
- **Runs on:** GitHub Actions infrastructure, serverlessly
- **Reaches:** The repository where the workflow is defined

No VS Code required. No local machine required. The workflow runs whether or not anyone is watching — when an issue is opened at 3am, the agentic response fires.

**The link between Agent Forge and Agentic Workflows:** Both use Markdown-authored instructions. Both define intent in plain language. Both travel with the repository. The Agent Forge pattern *is* a conceptual precursor to GitHub Agentic Workflows — understanding one makes the other immediately readable.

**Example: Auto-triage accessibility issues**

File: `.github/workflows/auto-triage-a11y.md`

```markdown
---
name: Auto-Triage Accessibility Issues
on:
  issues:
    types: [opened]
---

When an issue is opened with "accessibility" or "a11y" or "screen reader" in the title:

1. Apply labels: `accessibility`, `needs-triage`
2. Assign to the accessibility team
3. Add a comment:

> Thanks for filing this accessibility issue. Our team has been notified and will review it within 24 hours.
>
> To help us address this faster, please include:
> - Which screen reader you're using (NVDA, JAWS, VoiceOver)
> - Steps to reproduce the issue
> - What you expected vs what actually happened
>
> — Auto-triage agent

4. If the issue body already includes those details, remove the `needs-triage` label
```

This runs automatically on every new issue. No human intervention required.

---

## 7. GitHub Desktop, GitHub CLI, and Copilot CLI

These tools are not required for this workshop, but are worth knowing as options for different workflows.

### GitHub Desktop

A graphical Git application with an accessible interface.

- **Download:** [desktop.github.com](https://desktop.github.com)
- **Useful for:** Visual diff review, simpler branch management
- **Screen reader support:** Partial — keyboard navigation works for core flows

**When to use:** If command-line Git feels overwhelming, GitHub Desktop provides a GUI alternative.

### GitHub CLI (`gh`)

A command-line interface for GitHub operations.

**Install:**
```bash
winget install GitHub.cli       # Windows
brew install gh                 # macOS
```

**Authenticate:**
```bash
gh auth login
```

**Common commands:**

```bash
gh issue list                   # List issues in current repo
gh issue view 42                # Read issue #42
gh pr list                      # List pull requests
gh pr view 14                   # Read PR #14
gh pr create                    # Create a new PR interactively
gh pr merge 14                  # Merge PR #14
gh repo clone owner/repo        # Clone a repository
gh repo fork owner/repo         # Fork a repository
```

**Screen reader advantage:** `gh` output is plain text with no dynamic regions — more predictable than the browser for certain operations.

### GitHub Copilot CLI (`gh copilot`)

An extension that adds Copilot to the terminal.

**Install:**
```bash
gh extension install github/gh-copilot
```

**Commands:**

```bash
# Ask Copilot to explain a command
gh copilot explain "git rebase -i HEAD~3"

# Ask Copilot to suggest a command
gh copilot suggest "undo my last commit but keep the changes"

# Ask Copilot to write a shell script
gh copilot suggest "create a script that finds all Markdown files and checks for heading hierarchy"
```

**Use case:** When you know *what* you want to do but are unsure of the exact git command syntax.

**Example session:**

```bash
$ gh copilot suggest "show me all commits from last week"

Suggestion: git log --since="1 week ago" --oneline

Run this command? (Y/n)
```

---

## Keyboard Shortcuts — Agent Forge Quick Reference

| Action | Shortcut |
|--------|----------|
| Open Copilot Chat | `Ctrl+Shift+I` |
| Invoke agent | Type `@agent-name` in Chat |
| Use slash command | Type `/command` in Chat |
| Accessible View | `Alt+F2` |
| Clear chat history | `Ctrl+L` |
| Command Palette | `Ctrl+Shift+P` |

---

## Troubleshooting

### "Agent not found"

**Issue:** Typing `@agent-name` shows "No agent found."

**Solutions:**
1. Verify `.github/agents/[name].agent.md` exists in your workspace
2. Reload VS Code window: `Ctrl+Shift+P` → "Reload Window"
3. Check file naming: must end with `.agent.md`
4. Verify YAML frontmatter is valid (no syntax errors)

### Agent produces incorrect output

**Issue:** Agent's response is wrong or misses context.

**Solutions:**
1. **Provide more context in your prompt:** Be specific about what you need
2. **Use @ mentions:** Reference specific files or selections (`@filename.md`, `#selection`)
3. **Check the agent's prerequisites:** Did you do the manual work first?
4. **Review the agent's instructions:** Open `.github/agents/[name].agent.md` and read what it's supposed to do

### Slash command doesn't work

**Issue:** `/command` shows "Command not found."

**Solutions:**
1. Verify `.github/prompts/[name].md` exists
2. Reload window: `Ctrl+Shift+P` → "Reload Window"
3. Check file naming: must be a `.md` file in `.github/prompts/`
4. Try typing the full command name (autocomplete may be incomplete)

---

*Back: [Issue Templates](15-issue-templates.md)*  
*Reference: [Appendix V: Agent Forge Reference](appendix-v-agent-forge-reference.md)*  
*Related: [Culture & Etiquette](07-culture-etiquette.md) | [Working with Issues](04-working-with-issues.md) | [Appendix M: VS Code Accessibility Reference](appendix-m-vscode-accessibility-reference.md)*
