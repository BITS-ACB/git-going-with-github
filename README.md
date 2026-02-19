# GitHub Learning Room
## Open Source Assistive Technology Hackathon

> **Welcome.** This repository is your complete guide and companion for the two-day GitHub Learning Room. Every document here is written to be read with or without a screen reader. All steps are keyboard-accessible. You belong here.

---

> **The Central Project: Agent Forge**
>
> This workshop is built around a real, live open source project: **[Agent Forge](https://github.com/accesswatch/agent-forge)** — six GitHub Copilot agents and 28 slash commands for accessible, agentic repository management. It was built by your facilitator and is MIT-licensed.
>
> You will fork it, understand it, contribute to it, and personalize it. By the end of Day 2, your name is in its commit history.
>
> **Agent Forge does not replace what you learn on Day 1. It amplifies it.** The agents only make sense when you already understand the skills they automate. That is why Day 1 comes first — and why every guide in this repository shows you the manual path before it shows you the agent path.

---

## What Is This Event?

During this two-day workshop, you will learn how to confidently navigate and contribute to open source projects on GitHub using:

- A **screen reader** (NVDA on Windows, JAWS on Windows, or VoiceOver on macOS)
- **Keyboard-only navigation** — no mouse required
- **GitHub Copilot** (Day 2) — AI-assisted writing and coding in the browser and in VS Code

By the end of this event, you will have made **real contributions** to a real repository. Not simulated. Not pretend. Real.

---

## Who Is This For?

This event is designed for:

- People new to GitHub who use assistive technology
- Developers who use screen readers and want to contribute to open source
- Anyone who is curious about accessible development workflows
- Sighted participants are welcome — all content is keyboard-navigable for everyone

You do **not** need to know how to code to participate and contribute meaningfully. Documentation improvements, issue filing, accessibility bug reports, and code reviews are all valuable contributions.

---

## Two-Day Overview

| Day | Focus | What You Will Do |
|-----|-------|-----------------|
| **Day 1** | GitHub Foundations | Set up your environment, learn GitHub navigation with your screen reader, file your first issue, open your first pull request |
| **Day 2** | VS Code + Agent Forge | Bridge from the browser to **github.dev** (VS Code in your browser — no install needed), then step into **Visual Studio Code** on the desktop, learn VS Code basics, use GitHub Copilot, activate the six Agent Forge agents, run agentic workflows in the cloud, and ship a real PR upstream to `accesswatch/agent-forge` |

### The Journey Arc

This is not a two-day course with two separate syllabi. It is one arc.

```
Day 1 — Learn the skill in the browser
  Navigate → Issue → Pull Request → Review → Merge

     ↓  (bridge: press . on any GitHub repo — VS Code opens right in your browser)

github.dev — VS Code on the web, no install needed
  Same keyboard shortcuts · Same screen reader mode · Edit files · Open PRs
  What it cannot do: no terminal, no Copilot agents, no local extensions

     ↓  (you've earned the desktop — now it makes sense)

Day 2 — Deepen with VS Code + Agent Forge
  Learn VS Code basics → Copilot inline → Copilot Chat
  @daily-briefing → @issue-tracker → @pr-review → @analytics → ship upstream
```

Every skill you build on Day 1 maps directly to an Agent Forge command on Day 2. The agent is not a shortcut — it is a multiplier. You have to understand what it is doing to know when it is wrong.

**By the end of Day 2, you will have:**
- A fork of `agent-forge` with your personalized preferences
- At least one merged PR in a real open source project
- Your name in the commit history of `accesswatch/agent-forge`
- A working set of six AI agents that travel with your fork to any repository you apply them to

---

## How to Read These Docs

All documentation lives in the `docs/` folder. Read them in order for the full experience, or jump to what you need.

> **HTML Version Available:** All markdown documentation is automatically converted to HTML format. After cloning the repository, you can browse the `html/` directory for web-formatted versions of every document. See [BUILD.md](BUILD.md) for details.

### Quick Navigation

> **Looking for a student-friendly table of contents?** See the [Course Guide](docs/course-guide.md) — a single page with day-by-day chapter tables, grouped appendices, all 24 exercises at a glance, and where to get help.

**Lessons**

| # | Document | What It Covers |
|---|----------|----------------|
| [00](docs/00-pre-workshop-setup.md) | **Pre-Workshop Setup** | Everything to install and configure before Day 1 |
| [01](docs/01-understanding-github-web-structure.md) | **Understanding GitHub's Web Structure** | How GitHub is organized, page types, landmark structure, heading hierarchy, and the screen reader orientation sequence |
| [02](docs/02-navigating-repositories.md) | **Navigating Repositories** | Step-by-step repository navigation with your screen reader |
| [03](docs/03-the-learning-room.md) | **The Learning Room: Shared Practice Repo** | Your shared contribution environment, PR sharing workflow, automation system, peer reviewing, and how everything works together |
| [04](docs/04-working-with-issues.md) | **Working with Issues** | Filing, managing, and participating in issues |
| [05](docs/05-working-with-pull-requests.md) | **Working with Pull Requests** | Creating, reviewing, and merging pull requests |
| [06](docs/06-merge-conflicts.md) | **Merge Conflicts** | Understanding, preventing, and resolving merge conflicts |
| [07](docs/07-culture-etiquette.md) | **Culture and Etiquette** | Open source language, tone, commenting, review etiquette |
| [08](docs/08-labels-milestones-projects.md) | **Labels, Milestones and Projects** | Organizing and cross-referencing work |
| [09](docs/09-notifications.md) | **Notifications and Mentions** | Managing your inbox, @mentions, and subscriptions |
| [10](docs/10-vscode-basics.md) | **VS Code: Setup & Accessibility Basics** | VS Code interface, github.dev (VS Code in the browser), screen reader mode, keyboard navigation, Accessible Help/View/Diff, audio cues |
| [11](docs/11-git-source-control.md) | **VS Code: Git & Source Control** | Cloning, Source Control panel, branching, staging, committing, Timeline view, merge conflicts, stash management |
| [12](docs/12-github-pull-requests-extension.md) | **VS Code: GitHub Pull Requests Extension** | Viewing PRs, checking out branches, reviewing with Accessible Diff, creating PRs, commenting, merging |
| [13](docs/13-github-copilot.md) | **VS Code: GitHub Copilot** | Inline suggestions, Copilot Chat, effective prompting for documentation work, custom instructions vs custom agents, Accessible View workflow |
| [14](docs/14-accessible-code-review.md) | **Accessible Code Review** | Navigating diffs and conducting PR reviews with a screen reader, on GitHub and in VS Code — culminating skill before automation |
| [15](docs/15-issue-templates.md) | **Issue Templates** | Creating and using GitHub issue templates |
| [16](docs/16-agent-forge.md) | **Agent Forge** | Six agents (@daily-briefing, @issue-tracker, @pr-review, @analytics, @insiders-a11y-tracker, @template-builder), 28 slash commands, building custom agents, cloud extension — agentic flow after all learning complete |

**Workshop Agendas** — For facilitators only (not part of learner sequence)

| Document | What It Covers |
|----------|----------------|
| [DAY1_AGENDA.md](DAY1_AGENDA.md) | Full Day 1 schedule, objectives, and activities |
| [DAY2_AGENDA.md](DAY2_AGENDA.md) | Full Day 2 schedule, objectives, and activities |

**Appendices** — Reference material; open any time during the workshop

| Appendix | Document | What It Covers |
|---|---|---|
| [A](docs/appendix-a-glossary.md) | **GitHub Concepts Glossary** | Every term, concept, and piece of jargon explained |
| [B](docs/appendix-b-screen-reader-cheatsheet.md) | **Screen Reader Cheat Sheet** | Complete NVDA, JAWS, and VoiceOver navigation commands — task-based and per-screen-reader — plus the full GitHub built-in keyboard shortcut system |
| [C](docs/appendix-c-accessibility-standards.md) | **Accessibility Standards Reference** | WCAG 2.2 success criteria, ARIA roles and patterns, and a quick-reference PR checklist |
| [D](docs/appendix-d-git-authentication.md) | **Git Authentication** | SSH keys, Personal Access Tokens, credential storage, and commit signing |
| [E](docs/appendix-e-github-flavored-markdown.md) | **GitHub Flavored Markdown** | Alert blocks, collapsible sections, Mermaid diagrams, math, footnotes, heading anchors, and screen reader guidance |
| [F](docs/appendix-f-github-gists.md) | **GitHub Gists** | Code snippets, sharing, embedding, and cloning |
| [G](docs/appendix-g-github-discussions.md) | **GitHub Discussions** | Forum-style conversations, Q&A, polls, and accessibility navigation for discussion threads |
| [H](docs/appendix-h-releases-tags-insights.md) | **Releases, Tags, and Repository Insights** | Versioned releases, semver, reading release notes, pulse, contributors, traffic, and Insights metrics |
| [I](docs/appendix-i-github-projects.md) | **GitHub Projects Deep Dive** | Boards, tables, roadmaps, custom fields, automations, iterations, cross-repo projects, and accessible navigation |
| [J](docs/appendix-j-advanced-search.md) | **GitHub Advanced Search** | Complete query language reference for searching issues, PRs, code, commits, and repositories |
| [K](docs/appendix-k-branch-protection-rulesets.md) | **Branch Protection and Rulesets** | Required reviews, status checks, repository rulesets, and diagnosing why your PR cannot be merged |
| [L](docs/appendix-l-github-security-features.md) | **GitHub Security Features** | Dependabot alerts and updates, secret scanning, code scanning/CodeQL, private vulnerability reporting, and SBOM |
| [M](docs/appendix-m-vscode-accessibility-reference.md) | **VS Code Accessibility Reference** | Complete technical reference for all accessibility settings, audio cues, diff viewer, screen reader configurations, keyboard shortcuts |
| [N](docs/appendix-n-github-codespaces.md) | **GitHub Codespaces** | Cloud development environments — setup, accessibility configuration, and screen reader usage |
| [O](docs/appendix-o-github-mobile.md) | **GitHub Mobile** | Accessibility guide for iOS and Android — VoiceOver, TalkBack, notifications, and PR reviews |
| [P](docs/appendix-p-github-pages.md) | **Publishing with GitHub Pages** | Deploy a static site from your repository — branch setup, custom domains, CI workflows, and accessibility checks |
| [Q](docs/appendix-q-github-actions-workflows.md) | **GitHub Actions and Workflows** | Deep-dive reference — automation, status checks, CI/CD workflows, and the path to agentic cloud |
| [R](docs/appendix-r-github-profile-sponsors-wikis.md) | **GitHub Profile, Sponsors, and Wikis** | Profile README, GitHub Sponsors, and GitHub Wikis |
| [S](docs/appendix-s-github-organizations-templates.md) | **Organizations, Templates, and Repository Settings** | Organizations, repository templates, visibility, archiving, and contributor-relevant settings |
| [T](docs/appendix-t-contributing-to-open-source.md) | **Contributing to Open Source** | A first-timer's guide: finding issues, scoping contributions, writing PRs, and building a contribution habit |
| [U](docs/appendix-u-resources.md) | **Resources** | Every link, tool, and reference from this event |
| [V](docs/appendix-v-agent-forge-reference.md) | **Agent Forge Reference** | Six agents, 28 slash commands, customization system, and workspace configuration |
| [W](docs/appendix-w-github-copilot-reference.md) | **GitHub Copilot Reference** | Copilot features, chat participants, slash commands, MCP servers, and agentic ecosystem |
| [X](docs/appendix-x-copilot-models.md) | **GitHub Copilot AI Models** | Model comparison, strengths, plan availability, and selection guidance |
| [Y](docs/appendix-y-accessing-workshop-materials.md) | **Accessing and Downloading Workshop Materials** | GitHub Pages, GitHub.com, cloning, ZIP download, offline reading, folder guide |
> **Each guide from Lesson 03 onward includes a "Day 2 Amplifier" callout** that shows how Agent Forge extends that skill across three scopes: your VS Code editor → your repository (travels with every fork) → the cloud (GitHub Agentic Workflows running without VS Code). **Learn the manual skill first (Chapter 14), then see how it's automated (Chapter 16).**

---

## This Repository's Structure

> **One repository, everything included.** Clone or fork this repo and you have the complete workshop — all curriculum guides, Agent Forge agents and slash commands, YAML issue forms, PR template, and a practice contribution target in `learning-room/`. GitHub Skills modules cannot be bundled here (each participant activates their own copy on their own account), but links are in `.github/ISSUE_TEMPLATE/config.yml`.

```
[repo root]/
├── README.md                            ← You are here
├── CONTRIBUTING.md                      ← How to contribute to this repo
├── CODE_OF_CONDUCT.md                   ← Community standards
├── FACILITATOR.md                       ← For workshop organizers only
├── DAY1_AGENDA.md                       ← Day 1 workshop schedule (facilitators only)
├── DAY2_AGENDA.md                       ← Day 2 workshop schedule (facilitators only)
├── .gitignore
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── config.yml                   ← Links to GitHub Skills; disables blank issues
│   │   ├── accessibility-bug.yml        ← Structured accessibility bug form (YAML)
│   │   └── feature-request.yml         ← Feature/improvement request form (YAML)
│   ├── PULL_REQUEST_TEMPLATE.md        ← PR checklist with accessibility section
│   ├── agents/                          ← Agent Forge: six Copilot Chat agents
│   │   ├── daily-briefing.agent.md
│   │   ├── issue-tracker.agent.md
│   │   ├── pr-review.agent.md
│   │   ├── analytics.agent.md
│   │   ├── insiders-a11y-tracker.agent.md
│   │   ├── template-builder.agent.md
│   │   └── preferences.example.md      ← Copy to preferences.md and personalize
│   └── prompts/                         ← 28 slash commands for Copilot Chat
│       ├── a11y-update.prompt.md
│       ├── create-issue.prompt.md
│       ├── daily-briefing.prompt.md
│       ├── review-pr.prompt.md
│       ├── triage.prompt.md
│       └── ... (23 more — see appendix-v-agent-forge-reference.md)
├── learning-room/                       ← Practice target for the contribution sprint
│   ├── README.md
│   └── docs/
│       ├── welcome.md                   ← Has [TODO] sections for you to complete
│       ├── keyboard-shortcuts.md        ← Has intentional accessibility issues to find and fix
│       └── setup-guide.md              ← Has a broken link to find and fix
└── docs/                               ← Full workshop curriculum (17 lessons + 25 appendices A–Y)
    ├── course-guide.md                           ← Student landing page: day-by-day overview, exercises, help
    ├── 00-pre-workshop-setup.md
    ├── 01-understanding-github-web-structure.md  ← How GitHub is organized (start here)
    ├── 02-navigating-repositories.md  ← Agent Forge: @daily-briefing
    ├── 03-the-learning-room.md        ← Read this early: your shared space and PR workflow
    ├── 04-working-with-issues.md      ← Agent Forge: @issue-tracker
    ├── 05-working-with-pull-requests.md ← Agent Forge: @pr-review
    ├── 06-merge-conflicts.md          ← Agent Forge: Copilot conflict prevention
    ├── 07-culture-etiquette.md        ← Agent Forge: output responsibility
    ├── 08-labels-milestones-projects.md ← Agent Forge: @issue-tracker + labels
    ├── 09-notifications.md            ← Agent Forge: @daily-briefing + inbox
    ├── 10-vscode-basics.md            ← VS Code setup, github.dev, screen reader mode, accessibility basics
    ├── 11-git-source-control.md       ← Git operations in VS Code: clone, branch, commit, merge, stash
    ├── 12-github-pull-requests-extension.md ← GitHub PR extension: view, review, create, merge PRs
    ├── 13-github-copilot.md           ← GitHub Copilot: inline suggestions, Chat, prompting, custom agents
    ├── 14-accessible-code-review.md   ← Reviewer mechanics: diffs, comments, Accessible Diff Viewer — final culminating skill
    ├── 15-issue-templates.md          ← Creating GitHub issue templates
    ├── 16-agent-forge.md              ← Agent Forge: six agents, 28 commands, agentic workflows — automate everything you learned
    ├── appendix-a-glossary.md                    ← A: Every term explained (look up any time)
    ├── appendix-b-screen-reader-cheatsheet.md    ← B: Full shortcut reference, per-screen-reader tables (keep open)
    ├── appendix-c-accessibility-standards.md     ← C: WCAG 2.2, ARIA, PR checklist
    ├── appendix-d-git-authentication.md          ← D: SSH keys, PATs, credential storage
    ├── appendix-e-github-flavored-markdown.md    ← E: Alert blocks, Mermaid, math, footnotes, heading anchors
    ├── appendix-f-github-gists.md                ← F: Code snippets, sharing, embedding
    ├── appendix-g-github-discussions.md          ← G: GitHub Discussions navigation and participation
    ├── appendix-h-releases-tags-insights.md      ← H: Releases, tags, version numbers, pulse, contributors, traffic
    ├── appendix-i-github-projects.md             ← I: GitHub Projects deep dive (boards, tables, roadmaps, automations)
    ├── appendix-j-advanced-search.md             ← J: Search query language reference
    ├── appendix-k-branch-protection-rulesets.md  ← K: Branch rules, rulesets, diagnosing blocked PRs
    ├── appendix-l-github-security-features.md    ← L: Dependabot, secret scanning, code scanning, private advisories
    ├── appendix-m-vscode-accessibility-reference.md ← M: Complete VS Code accessibility technical reference
    ├── appendix-n-github-codespaces.md           ← N: Cloud dev environments, accessibility setup, screen reader usage
    ├── appendix-o-github-mobile.md               ← O: VoiceOver and TalkBack guide for iOS and Android
    ├── appendix-p-github-pages.md                ← P: GitHub Pages deployment guide
    ├── appendix-q-github-actions-workflows.md    ← Q: Automation, CI/CD workflows, and agentic cloud
    ├── appendix-r-github-profile-sponsors-wikis.md ← R: Profile README, GitHub Sponsors, wikis
    ├── appendix-s-github-organizations-templates.md ← S: Organizations, templates, repository settings
    ├── appendix-t-contributing-to-open-source.md ← T: First contribution guide
    ├── appendix-u-resources.md                   ← U: Every link, tool, and reference (lookup anytime)
    ├── appendix-v-agent-forge-reference.md       ← V: Agent Forge agents, commands, and customization
    ├── appendix-w-github-copilot-reference.md    ← W: Copilot features, chat, MCP servers, agentic ecosystem
    ├── appendix-x-copilot-models.md              ← X: AI model comparison and selection guide
    └── appendix-y-accessing-workshop-materials.md ← Y: How to get, download, and read these materials

> *Note: Appendices were renumbered during a February 2026 review. If you encounter external references to "Appendix D" or later letters, subtract one letter (e.g., the former Appendix D is now [Appendix C](docs/appendix-c-accessibility-standards.md)).*

---

## Quick Reference

These standalone documents provide additional guidance and resources:

| Document | Description |
|----------|-------------|
| [FAQ](FAQ.md) | Frequently asked questions about the workshop |
| [Quick Reference](QUICK_REFERENCE.md) | Condensed cheat sheet for common tasks |
| [Troubleshooting](TROUBLESHOOTING.md) | Solutions for common setup and workflow issues |
| [Progress Tracker](PROGRESS_TRACKER.md) | Track your learning progress through the workshop |
| [Accessibility Testing](ACCESSIBILITY_TESTING.md) | Accessibility testing procedures and standards |
| [Security](SECURITY.md) | Security policy and vulnerability reporting |
| [GitHub Proposal](GITHUB_PROPOSAL.md) | Original event proposal and curriculum overview (internal reference) |

---

## Screen Reader Users: Start Here

Before doing anything else, please read [**00 — Pre-Workshop Setup**](docs/00-pre-workshop-setup.md). It will walk you through:

- Configuring your screen reader for GitHub
- Verifying GitHub's modern interface is working (may already be active — instructions include how to check and enable if needed)
- Turning off settings that make screen reader navigation harder
- Verifying everything works before Day 1 begins

---

## The Goal of This Event

Open source software is built by people. Accessibility bugs in open source affect millions of people who use assistive technology every day. By learning to contribute — even something as small as filing a clear, detailed accessibility issue — you become part of fixing that. That matters.

**You don't have to write a single line of code to make open source more accessible.**

And by the end of Day 2, you will not just be a learner. You will be a product maker — someone who has shipped something real to a project that other people use.

---

## Questions Before the Event?

- Join the [GitHub Accessibility Discussions](https://github.com/orgs/community/discussions/categories/accessibility) on GitHub
- File an issue in this repository if something in these docs is unclear
- Contact the event organizers (details provided separately)

---

## License

All workshop documentation is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — you are free to share and adapt with attribution.

---

*Last reviewed: February 2026*
*Built for the Open Source Assistive Technology Hackathon.*
