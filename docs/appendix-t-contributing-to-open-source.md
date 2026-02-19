# Appendix T: Contributing to Open Source
## A Guide for First-Time Contributors

> You do not need to be a professional developer to contribute to open source. Documentation, accessibility improvements, and bug reports are among the most valuable contributions any project can receive.

---

## Table of Contents

1. [What Is Open Source?](#1-what-is-open-source)
2. [Who Can Contribute?](#2-who-can-contribute)
3. [What Makes a Good First Contribution?](#3-what-makes-a-good-first-contribution)
4. [Finding Something to Work On](#4-finding-something-to-work-on)
5. [Reading an Issue Before You Start](#5-reading-an-issue-before-you-start)
6. [Making Your Contribution](#6-making-your-contribution)
7. [Getting Help](#7-getting-help)
8. [After Your Contribution Is Merged](#8-after-your-contribution-is-merged)
9. [Building a Contribution Habit](#9-building-a-contribution-habit)

---

## 1. What Is Open Source?

Open source software is software whose source code is publicly available. Anyone can read it, use it, and — in most cases — contribute to it. Contributions can include:

- Fixing bugs in the software
- Writing or improving documentation
- Filing bug reports that help maintainers understand problems
- Reviewing other people's changes and leaving thoughtful feedback
- Translating content into other languages
- Improving accessibility — adding alt text, fixing heading structure, testing with screen readers

The projects that power much of today's web infrastructure — operating systems, programming languages, screen readers, and developer tools — are maintained by contributors who started exactly where you are now.

---

## 2. Who Can Contribute?

Contributors come from all backgrounds, skill levels, and countries. A first contribution could be fixing a typo, adding a missing full stop, or filing a bug report that saves a maintainer hours of debugging.

Assistive technology users bring a perspective that most sighted, mouse-first developers cannot — you notice when heading structure is broken, when a button has no accessible name, or when a form cannot be completed with a keyboard. These are real, high-value contributions that improve projects for everyone.

You do not need permission to start. If a repository's issues are public, you can file a bug or suggest an improvement today.

---

## 3. What Makes a Good First Contribution?

A good first contribution is:

- **Specific** — it addresses one problem clearly, not a general "this could be better"
- **Scoped** — it does not try to fix everything at once; one PR, one problem
- **Described** — the PR or issue explains what changed and why, not just what
- **Tested** — for documentation, this means reading it aloud with your screen reader before submitting; for code, it means verifying the fix works

**Signs a contribution is too large for a first attempt:**
- The PR touches more than three or four files
- You need to understand the entire codebase to make the change
- The issue has been open for a long time with many comments suggesting it is complex

Start small. A well-executed small contribution is far more valuable than a large contribution that cannot be merged because it is out of scope.

---

## 4. Finding Something to Work On

Most open source projects label issues that are suitable for new contributors. Look for:

| Label | Meaning |
|-------|---------|
| `good first issue` | Explicitly recommended for first-time contributors |
| `first-timers-only` | Reserved for people making their first contribution to this project |
| `help wanted` | Maintainers are actively looking for someone to pick this up |
| `beginner` or `easy` | Lower complexity than average |
| `documentation` | No coding required — writing or editing docs |
| `accessibility` | Directly relevant to AT users; high-value work |

**How to search:** On any GitHub repository, go to Issues → filter by label. Or use GitHub's global search: `label:"good first issue" is:open language:markdown` to find documentation issues across all public repositories.

---

## 5. Reading an Issue Before You Start

Before commenting "I'll take this" on an issue, ask yourself:

- **Is the description clear enough to act on?** If you are not sure what the problem is, ask a clarifying question before starting work.
- **Is anyone else already working on it?** Look for recent comments from others saying they are working on it, or an open PR that references this issue. If a PR exists, it may already be in review.
- **Is the issue in scope for me?** A documentation task does not require programming knowledge. A bug fix in compiled code may require understanding the codebase.
- **How old is the issue?** Very old issues (2+ years) may be stale or no longer relevant. You can ask the maintainer if it is still valid before investing time.

If the issue looks right for you, comment briefly to let the team know you are working on it: "I'd like to work on this. I'll open a draft PR shortly." This prevents duplicate work.

---

## 6. Making Your Contribution

### The Basic Workflow

1. **Fork the repository** — creates your own copy on GitHub
2. **Clone your fork** to your computer (or open a Codespace — see [Appendix N](appendix-n-github-codespaces.md))
3. **Create a branch** — name it something descriptive: `fix/broken-link-setup-guide`
4. **Make your change** — edit the file, save, verify
5. **Commit with a clear message** — "Fix broken link in setup-guide.md line 34"
6. **Push to your fork**
7. **Open a pull request** from your branch to the original repository's default branch
8. **Respond to review feedback** — maintainers may ask for changes; this is normal and not a rejection

### Writing a Good PR Description

A PR description should answer:
- **What** did you change?
- **Why** was the change needed?
- **How** did you verify it works?

Example:
> Fixed a broken link on line 34 of `setup-guide.md`. The link pointed to `/docs/old-setup` which no longer exists. Updated it to `/docs/00-pre-workshop-setup.md`, verified the target file exists and the anchor is correct.

This gives the reviewer everything they need to approve quickly.

---

## 7. Getting Help

It is always acceptable to ask a question on an issue or pull request. Good questions:

- **Are specific:** "I'm trying to fix the broken link on line 24 of `setup-guide.md`. The link currently points to `/docs/old-setup`. Where should it point?"
- **Show what you tried:** "I searched the repository for the correct URL but couldn't find a file at that path."
- **Are polite:** Assume good intent from maintainers, even if they are slow to respond. Maintainers are often volunteers with day jobs.

If you opened a PR and are waiting for a review, it is appropriate to leave one polite follow-up comment after a week or two. Start with: "Hi, just checking in on this PR when you have a moment."

---

## 8. After Your Contribution Is Merged

When your pull request is merged:

- Your name appears in the project's **commit history permanently** — it cannot be removed
- The issue you fixed is closed
- You are officially listed as a **contributor** to this project, visible on the repository's Contributors page

This matters for your GitHub profile. Each merged contribution demonstrates real-world collaboration with a project team: you scoped a problem, communicated with maintainers, addressed feedback, and saw the work through. That record is visible to anyone who views your profile.

Over time, a series of contributions builds a portfolio that shows how you work — not just what you can do in isolation.

---

## 9. Building a Contribution Habit

The hardest part of open source contribution is starting. Once you have one merged PR, the next is easier — you know the workflow, you have proof it is possible, and you have already navigated the social dynamics of working with a maintainer.

**Practical habits:**

- **Keep a list** of projects you use and like. These are natural candidates for contributions because you already understand what they do.
- **File bug reports** when you encounter problems, even if you cannot fix them yourself. A clear, reproducible bug report is a real contribution.
- **Review other PRs.** Even as a new contributor, you can leave useful feedback: "Does this change affect screen reader users?" or "The example in the PR description is missing a step."
- **Set a low bar.** A contribution does not need to be impressive. A fixed typo merged into a project used by thousands of people is more valuable than a perfect contribution never submitted.

---

*Return to: [Resources](appendix-u-resources.md) | [Appendix A — Glossary](appendix-a-glossary.md)*
