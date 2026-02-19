# You Belong in Open Source. Let Us Show You the Door.

## GitHub Learning Room — A Two-Day Workshop for the Blind and Low Vision Community

**Dates:** [EVENT_DATE_DAY1] and [EVENT_DATE_DAY2]
**Time:** 9:00 AM — 5:00 PM [EVENT_TIMEZONE] (both days)
**Location:** Online via Zoom
**Cost:** Free
**Capacity:** [MAX_PARTICIPANTS] participants

---

## What Is This?

This is a two-day, hands-on workshop where blind and low vision participants learn to navigate, contribute to, and build real open source projects on GitHub — using a screen reader, a keyboard, and nothing else.

No mouse. No sighted assistance. No pretending.

By the end of Day 2, your name will be in the commit history of a live, public open source project. Not a sandbox. Not a simulation. The real thing.

This workshop exists because open source software powers the world — and the people who use assistive technology every day deserve to be the ones shaping it. Not just filing complaints. Building. Reviewing. Shipping.

---

## Who Should Attend?

This workshop is designed for:

- **Blind and low vision individuals** who want to learn GitHub and open source contribution
- **Screen reader users** (NVDA, JAWS, or VoiceOver) at any skill level
- **People who have never used GitHub before** — no prior experience required
- **Developers who use assistive technology** and want to sharpen their open source workflow
- **Anyone curious about accessible development** — sighted participants are welcome; all content is fully keyboard-navigable

You do **not** need to know how to write code. Seriously. Documentation improvements, accessibility bug reports, issue filing, and code reviews are all real, valued contributions. Some of the most impactful open source work never touches a line of code.

---

## What You Will Walk Away With

By the end of this workshop, you will have:

- Filed real issues on a real GitHub repository
- Opened, reviewed, and merged real pull requests
- Your name permanently in the commit history of a public accessibility project
- A working VS Code setup with GitHub Copilot and six AI agents configured
- The confidence to navigate any GitHub repository with your screen reader
- A network of peers who understand the intersection of accessibility and open source

These are not hypothetical outcomes. Every participant ships something real.

---

## The Two-Day Journey

### Day 1 — GitHub Foundations (Browser + Screen Reader)

Your screen reader and keyboard are the only tools you need. Everything happens in the browser.

| Block | What Happens |
|-------|-------------|
| **Welcome and Setup Check** | Introductions, verify everyone's screen reader and browser are ready |
| **Screen Reader Orientation to GitHub** | Navigate GitHub pages using headings, landmarks, and keyboard shortcuts |
| **Navigating Repositories** | Explore a real repository — files, branches, commits, contributors |
| **Working with Issues** | Search, file, comment on, and triage issues using Markdown |
| **Understanding Pull Requests** | Read diffs, write inline review comments, approve and merge |
| **Your First Contribution Sprint** | Make a real contribution to the shared practice repository — with automated bot feedback and human peer review |
| **Community and Culture** | Open source etiquette, constructive feedback, managing notifications, organizing with labels |

You will also work through GitHub Skills modules — interactive, bot-guided courses that run in your own GitHub account. A bot named Mona creates real issues and pull requests for you, verifies your actions, and guides you through each step. It is the same mechanism used by real open source projects.

### Day 2 — From Contributor to Product Maker (VS Code + Agent Forge)

You earned the tools. Now you wield them.

| Block | What Happens |
|-------|-------------|
| **Day 1 Debrief** | Celebrate what shipped, surface questions, set your Day 2 goal |
| **VS Code Setup** | Screen reader mode, workspace navigation, the bridge from browser to editor |
| **Deep Contribution with Copilot** | Use GitHub Copilot as a writing partner — draft improvements, review your own work, commit with confidence |
| **Activate the Agents** | Run six AI agents that amplify every skill you built on Day 1 — daily briefings, issue triage, PR review, accessibility monitoring |
| **Ship Your Contribution** | Open a real pull request to a live public repository. Your facilitator reviews and merges it. |
| **Design the Future** | Collaborative speccing session — what should the next version of these tools look like? Your ideas, on the record. |

The central project is **Agent Forge** — a real, MIT-licensed open source project with six GitHub Copilot agents and 28 slash commands for accessible repository management. You will fork it, understand it, improve it, and personalize it.

---

## Prerequisites — What You Need Before Day 1

Please complete these steps **at least one day before the workshop.** If anything gives you trouble, contact us — we will help you get set up. We want Day 1 to start with learning, not troubleshooting.

### Hardware

- A computer running **Windows** or **macOS**
- A reliable internet connection
- Headphones (recommended — screen reader audio in a group call can get lively)

### Screen Reader

You need one of the following. Use whichever you are most comfortable with.

| Screen Reader | Platform | Cost | Where to Get It |
|---------------|----------|------|-----------------|
| **NVDA** | Windows | Free | [nvaccess.org/download](https://www.nvaccess.org/download/) |
| **JAWS** | Windows | Paid (40-minute trial available) | [freedomscientific.com](https://www.freedomscientific.com/products/software/jaws/) |
| **VoiceOver** | macOS | Built-in (free) | Already on your Mac — press Cmd+F5 to activate |

All exercises work with any of these. Where keyboard commands differ, we provide all three.

### Web Browser

| Platform | Recommended |
|----------|-------------|
| Windows | Chrome or Firefox (Edge also works) |
| macOS | Safari (best VoiceOver support) or Firefox |

### Software to Install

Install these before the workshop. Detailed, screen-reader-friendly installation instructions are in our [Pre-Workshop Setup Guide](docs/00-pre-workshop-setup.md).

1. **Git** — the version control system underneath GitHub
   - Windows: Download from [git-scm.com/download/win](https://git-scm.com/download/win) — run the installer with default options
   - macOS: Open Terminal and type `git --version` — if Git is not installed, macOS will prompt you to install it automatically
   - Verify: Open a terminal and run `git --version` — you should see a version number

2. **Visual Studio Code** — the free, accessible code editor used on Day 2
   - Download from [code.visualstudio.com](https://code.visualstudio.com/)
   - After installing, press `Shift+Alt+F1` to enable Screen Reader Mode — this is essential

3. **GitHub Copilot Chat extension** — installed from within VS Code
   - Press `Ctrl+Shift+X` in VS Code to open Extensions
   - Search for "GitHub Copilot Chat" (publisher: GitHub)
   - Install it — Copilot Free tier is available to all GitHub users at no cost

4. **GitHub Pull Requests extension** — also installed from within VS Code
   - Search for "GitHub Pull Requests" (publisher: GitHub) in the Extensions panel
   - Install it

### GitHub Account

If you do not have a GitHub account, create one before the workshop:

1. Navigate to [github.com/signup](https://github.com/signup)
2. Enter your email address, create a password, and choose a username
   - Your username appears on every contribution you make — keep it professional
3. Complete the verification step
   - **Screen reader users:** GitHub's visual CAPTCHA can be a barrier. Look for an "Audio" or "Try an audio challenge" option. If neither is accessible, contact us before the event and we will assist with verification.
4. Check your email for a verification code and enter it on the GitHub page
5. Verify your email address when GitHub sends a separate confirmation link

**After creating your account, configure these accessibility settings** (they make a significant difference):

1. Go to [github.com/settings/accessibility](https://github.com/settings/accessibility)
2. **Turn OFF Hovercards / Link Previews** — this is the single most important setting. With hovercards on, your screen reader announces extra noise on every link you pass. Turn it off.
3. **Turn ON Link Underlines** — makes links visually distinguishable without relying on color
4. Set your preferred theme at [github.com/settings/appearance](https://github.com/settings/appearance) — high contrast options are available

**Enable two-factor authentication** (strongly recommended):

1. Go to [github.com/settings/security](https://github.com/settings/security)
2. Enable 2FA using an authenticator app, SMS, or a security key
3. Save your recovery codes somewhere safe

Our [Pre-Workshop Setup Guide](docs/00-pre-workshop-setup.md) walks through every one of these steps with detailed screen reader instructions for NVDA, JAWS, and VoiceOver.

---

## Register

Registration is a two-step process:

### Step 1 — Sign Up Form

Complete the participant sign-up form so we can prepare your workshop materials, create your assigned issues, and pair you with a peer reviewer:

[SIGN_UP_FORM_URL]

The form asks for:
- Your name and email address
- Your GitHub username (create your account first — see prerequisites above)
- Which screen reader and operating system you use
- Your experience level with GitHub (none is perfectly fine)
- Any accommodations or access needs

### Step 2 — Zoom Registration

Register for the Zoom sessions. You will receive calendar invites and join links after registering.

- **Day 1:** [ZOOM_REGISTRATION_URL_DAY1]
- **Day 2:** [ZOOM_REGISTRATION_URL_DAY2]

Both days use the same Zoom meeting. The links above will add the sessions to your calendar with reminders.

**Zoom accessibility notes:**
- The Zoom client works well with NVDA, JAWS, and VoiceOver
- We will have live captions enabled throughout
- If you need a sign language interpreter or any other accommodation, note it on the sign-up form and we will arrange it

---

## What Makes This Workshop Different

Most GitHub tutorials tell you what buttons to click. This one starts from a different place entirely: **what does your screen reader announce when the page loads?**

Every step in this workshop is written three ways — for NVDA, for JAWS, and for VoiceOver. Not as an afterthought. As the default.

And the goal is not just "learn GitHub." The goal is to move you from **user** to **maker**. From someone who encounters accessibility barriers to someone who files the issue, proposes the fix, reviews the pull request, and ships the solution. That arc — from observer to contributor to product maker — is what the two days are designed to deliver.

The curriculum includes 17 chapters, 25 reference appendices, 24 hands-on exercises, a shared practice repository with automated feedback bots, three GitHub Skills modules with a bot that verifies your work in real time, and a live open source project where your contributions are merged on Day 2.

All of it is open source. All of it is yours to keep, fork, and share.

---

## Frequently Asked Questions

**Do I need to know how to code?**
No. Many of the most valuable open source contributions are documentation, bug reports, accessibility reviews, and feedback. Code is welcome but never required.

**What if I have never used GitHub before?**
Perfect. That is exactly who this workshop is for. We start from zero.

**What if I get stuck during setup?**
Contact us. The whole point of doing setup before Day 1 is so we can troubleshoot together without eating into learning time. We will not let anyone fall behind.

**Can sighted people attend?**
Yes. Everything is keyboard-navigable. You will gain a new perspective on how software is experienced without a screen, and you will be a better developer for it.

**What if I cannot attend both days?**
Day 1 stands on its own — you will leave with real GitHub skills. Day 2 builds on Day 1, so attending only Day 2 without Day 1 is not recommended.

**Is there a cost?**
No. The workshop, all software, and all materials are free.

---

## About the Facilitator

[FACILITATOR_NAME] is the creator of Agent Forge and the architect of this workshop. [FACILITATOR_BIO]

---

## Questions?

- Email: [CONTACT_EMAIL]
- File an issue in the [workshop repository]([REPO_URL]) — yes, even before the workshop starts. That counts as practice.
- Join the [GitHub Accessibility Discussions](https://github.com/orgs/community/discussions/categories/accessibility) community

---

## Share This Event

Know someone who would benefit from this workshop? Forward this announcement. The best way to make open source more accessible is to bring more people who use assistive technology into the room where it is built.

Open source is not complete without you. Come build with us.

---

*All workshop materials are licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).*
