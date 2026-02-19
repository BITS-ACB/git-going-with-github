# Culture, Etiquette, and Community Standards
## How to Be an Effective and Respectful Open Source Contributor

> Technical skills get your code into a project. Communication skills keep you welcomed in the community. This guide covers the human side of open source.

---

## GitHub Flow — The Standard Contribution Workflow

Before diving into communication norms, it helps to understand the workflow that gives all of those conversations their context. **GitHub Flow** is the lightweight branching model recommended for open source contribution. It is simple by design and works whether you are making a one-line documentation fix or a major feature addition.

### The Six Steps of GitHub Flow

```
1. Create a branch
   └─ Branch off main with a descriptive name
      (e.g., fix/missing-alt-text, docs/update-contributing-guide)

2. Make your changes and commit
   └─ Work in small, logical commits with clear messages
      Each commit should represent one coherent, complete change

3. Open a Pull Request
   └─ Share your work early — even as a Draft PR
      Describe what you changed, why, and how to test it
      Link to the related issue (Closes #42)

4. Discuss and review
   └─ Reviewers leave feedback → you refine your work
      This is collaborative, not adversarial

5. Pass status checks
   └─ Automated tests and linting must pass
      The project's quality gates exist to protect everyone

6. Merge
   └─ A maintainer merges your PR into main
      The linked issue closes automatically
      Your contribution is now part of the project
```

### Why This Model Works

- **`main` is always deployable.** Nothing goes into `main` directly — every change goes through a PR and review. This protects the project and all its users.
- **Branches are cheap and disposable.** Create a branch per task. Delete it after merging. There is no overhead to starting fresh.
- **PRs are the unit of conversation.** Everything about a change — the why, the tradeoffs, the review, the approval — lives in one place.
- **Small changes move faster.** A 5-file PR gets reviewed in an hour. A 50-file PR sits for days. The most effective contributors keep PRs small and focused.

### GitHub Flow vs Git Flow

You may encounter "Git Flow" in older projects or enterprise environments. It uses longer-lived branches (`develop`, `release/`, `hotfix/`) and is more complex. For open source contribution — especially at a hackathon — **GitHub Flow is what you want**. It is what GitHub itself uses and what most modern open source projects follow.

### The Unwritten Rule: One Thing Per Branch

A branch and its PR should do **one thing**. If you are fixing a broken link and you notice a typo nearby, fix the typo in a **separate branch and PR**. This keeps reviews fast, history clean, and reduces the risk of one unrelated problem blocking an urgent fix.

---

## Keeping Your Fork Up to Date

When you fork a repository, you get a snapshot of the project at that moment. The original repository (called "upstream") continues to evolve. To keep your fork current with upstream changes:

### Why Sync Your Fork?

- **Stay compatible** — upstream changes may affect your work
- **Avoid conflicts** — the longer you wait, the more conflicts you'll face when merging
- **Get bug fixes** — benefit from improvements made while you worked
- **Keep branches clean** — start new PRs from an up-to-date main branch

### Method 1: GitHub Web Interface (Easiest)

<details>
<summary>Visual / mouse users</summary>

1. Navigate to your fork's main page: `github.com/your-username/repo-name`
2. Look for the sync indicator: "This branch is X commits behind upstream/main"
3. Click the **"Sync fork"** button
4. Click **"Update branch"**

GitHub merges the upstream changes into your fork automatically.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS / VoiceOver)</summary>

1. Navigate to your fork's main page: `github.com/your-username/repo-name`
2. The sync button appears in the landmark that contains the branch selector
3. Press `D` to cycle through landmarks until you reach that region
4. Press `B` to cycle buttons until you hear "Sync fork" → press `Enter`
5. A dialog or page update presents "Update branch" — activate it

</details>

### Method 2: Git Command Line (VS Code Terminal)

If you're working locally in VS Code:

**One-time setup — add the upstream remote:**

```bash
git remote add upstream https://github.com/original-owner/repo-name.git
git remote -v  # Verify it was added
```

**Sync process:**

```bash
# 1. Switch to your main branch
git checkout main

# 2. Fetch upstream changes
git fetch upstream

# 3. Merge upstream's main into yours
git merge upstream/main

# 4. Push the updated main to your fork on GitHub
git push origin main
```

**When to sync:**
- Before starting work on a new feature
- Before submitting a PR (to ensure you're working off the latest code)
- Periodically on long-running branches (weekly if actively developed)

### Method 3: GitHub Desktop

1. Open GitHub Desktop
2. Select **Repository → Pull** to get your fork's latest
3. Select **Branch → Merge into Current Branch**
4. Choose **upstream/main**
5. Push the changes to your fork on GitHub

---

## Writing Good Commit Messages

Every commit you make includes a message describing what changed. Good commit messages make project history understandable months or years later. They also show professionalism and consideration for future contributors (including yourself).

### The commit message format:

```
<type>: <short summary in imperative mood>

<optional body: more detailed explanation>

<optional footer: references to issues>
```

### The First Line (Required)

**Keep it under 50 characters.** This is the commit summary that appears in logs and GitHub's commit list. Think of it as an email subject line.

**Use the imperative mood:** Write as if giving a command to the codebase.

"Fix broken link in README"  
"Add alt text to hero image"  
"Remove deprecated function"  

"Fixed broken link" — past tense  
"Fixing broken link" — gerund  
"I fixed the broken link" — too personal  

**Why imperative?** It matches Git's autogen messages: "Merge pull request #42" or "Revert commit abc123."

**Optional prefixes** (common in some projects):

- `fix:` — bug fix
- `feat:` — new feature
- `docs:` — documentation only
- `style:` — formatting, no code change
- `refactor:` — code restructuring
- `test:` — adding or updating tests
- `chore:` — maintenance (bump dependencies, etc.)

Example: `fix: correct ARIA label on submit button`

### The Body (Optional)

If the summary isn't enough, add a body explaining:
- **Why** you made the change (more important than what)
- **What** trade-offs you considered
- **How** the change affects behavior

Leave a blank line between the summary and the body.

Example:

```
feat: add keyboard shortcuts for issue navigation

The previous interface required excessive tabbing to reach issue actions.
This change adds G+I to jump to issues list and C to comment inline.

Shortcuts follow GitHub's existing pattern (G+letter for navigation).
Tested with NVDA, JAWS, and VoiceOver.
```

### The Footer (Optional)

Link commits to issues or PRs:

```
Closes #42
Fixes #17
Part of #89
```

When the commit is merged, GitHub automatically closes linked issues.

### Atomic Commits

Each commit should represent **one logical change**. Don't bundle unrelated fixes into a single commit.

Good: One commit adds alt text; another fixes a typo  
Bad: One commit adds alt text, fixes a typo, reformats code, and updates dependencies  

**Why?** If a commit introduces a bug, you want to revert just that change—not everything.

### Common mistakes to avoid:

- "WIP" or "more changes" — not descriptive
- "Update file.js" — GitHub already knows that
- "Fixed it" — doesn't say what "it" is
- Commit messages filled with expletives or frustration
- Extremely long summaries that get cut off in logs

### Good commit messages in practice:

```
fix: prevent crash when username contains special characters

Previously, usernames with @ or # caused a parsing error in the
notification system. This escapes special characters before processing.

Fixes #142
```

```
docs: add screen reader instructions to contribution guide

New section covers NVDA, JAWS, and VoiceOver setup for contributors
using assistive technology. Based on workshop feedback.

Part of #200
```

**When you make a habit of writing good commit messages, you build trust.** Maintainers see that you care about the project's long-term health, not just your immediate contribution.

---

## The Nature of Open Source Communication

Open source collaboration happens primarily **in writing**, **asynchronously**, **in public**. Understanding these three characteristics shapes everything about how we communicate.

### In writing
- There is no tone of voice, body language, or immediate clarification
- A message that sounds terse in your head may read as hostile to the reader
- Sarcasm and irony are nearly impossible to convey safely — avoid them
- **Solution:** Be explicit. "I think this might cause a problem because..." is clearer than "This is problematic."

### Asynchronously  
- Comments are not instant messages — the reader may see your post hours or days later
- You may be in a rush; they are not receiving urgency from your message
- Comments exist without the context of what you were thinking when you wrote them
- **Solution:** Provide all necessary context in every message. Do not assume continuity.

### In public
- Everything you write is visible to everyone, forever, and may be indexed and shared
- Future contributors, employers, and the broader community will read your words
- A dismissive reply to a beginner casts a shadow on the entire project
- **Solution:** Write as if your most supportive and most critical reader are both watching.

---

## The Anatomy of Helpful Feedback

Whether commenting on an issue, reviewing a PR, or responding to a question, effective feedback has a structure:

### 1. Acknowledge what's working

Before identifying problems, name what is good. This is not flattery — it is accuracy. Most contributions have real strengths.

> "The approach of separating the icon from the button text is exactly right — makes the screen reader label much cleaner."

### 2. Identify the specific concern

Be precise. Vague feedback is not actionable.

"This code is inaccessible."  
"This button has no accessible name — `aria-label` or visible text is needed for screen readers to announce its purpose."

### 3. Explain why it matters

Context turns a complaint into a lesson. It also respects the contributor — they deserve to understand, not just comply.

> "Without an accessible name, screen readers will announce the button as simply 'button,' which gives the user no information about what activating it will do."

### 4. Suggest a path forward (when you can)

If you have an idea for a solution, offer it as a suggestion, not a mandate.

> "Something like `aria-label='Close navigation menu'` would work well here. Happy to help if you'd like."

### 5. Signal the weight of the concern

Help contributors understand what is a blocker versus a preference.

- `nit:` — minor, optional suggestion ("nit: there's a trailing space here")
- No qualifier — normal concern, should be addressed
- "This is a blocker because..."  — must be fixed before merge
- "Just a thought, not a blocker..." — feedback but no requirement

---

## Language and Tone

### Prefer "we" or describe the code, not the person

"You made an error here."  
"There's an error here." or "This line does X but we need Y."

### Use tentative language for uncertainty

"This will crash on mobile."  
"I think this might cause issues on mobile — have you tested with a narrower viewport?"

### Acknowledge cultural and language diversity

Open source is global. Contributors may be:
- Writing in their second or third language
- Unfamiliar with idioms ("it's a no-brainer," "hit the ground running," "over the top")
- Accustomed to different norms of directness

**When reading someone's comment:** Assume good intent unless there is clear evidence otherwise.  
**When writing:** Choose plain words over clever ones.

### Avoid urgency markers unless genuinely urgent

"I need this fixed ASAP"  
"This is blocking our release scheduled for next Friday — is there capacity to look at it this week?"

---

## Commenting Etiquette

### Keep comments focused
Each comment should address one concern. If you have three issues, leave three comments — unless they are closely related.

### Don't leave comments unresolved
If you asked a question and got an answer, respond. "Thanks, that makes sense" or resolving the conversation thread signals that the thread is complete.

### Resolving conversations
On a PR, conversations (inline comment threads) can be "resolved" once addressed. The author of the change and the reviewer can both resolve them. If you addressed a reviewer's comment, resolve the thread and leave a note: "Fixed in commit a1b2c3d."

### Do not "pile on"
If five people already said the same thing about an issue, you don't need to add a sixth comment saying the same thing. A reaction on an existing comment is enough.

### Reactions
GitHub reactions () are an efficient way to express agreement, appreciation, or concern without adding noise to a thread.

### Saved Replies — Your Accessibility Win

GitHub lets you save frequently used responses as **Saved Replies** — reusable text snippets you can insert into any comment box with a few keystrokes. This is a significant accessibility win for anyone who types the same comments repeatedly during triage, reviews, or issue management.

**Common uses:**
- "Thank you for your contribution! I'll take a look this week."
- "This looks like a duplicate of #N — closing, please continue the discussion there."
- "I've labeled this `good first issue`. To claim it, leave a comment saying you'd like to work on it and I'll assign you."
- Your team's standard accessibility issue acknowledgement template

**Creating a Saved Reply:**
1. Navigate to `github.com/settings/replies`
2. Activate **"Add a saved reply"**
3. Give it a title (e.g., "Good first issue claim") — this is what you search for
4. Type the full reply text in the body (Markdown is supported)
5. Save

**Using a Saved Reply in a comment:**
1. Navigate to any comment text area
2. Activate the **Saved Replies button** (the speech bubble icon in the comment toolbar, or press `Ctrl+.` if enabled)
3. A dropdown appears showing your saved replies — type to filter by title
4. Select the reply — it inserts into the text area
5. Edit as needed before submitting

**Screen reader path:**
```
In a comment text area:
→ Tab to the toolbar icons
→ "Saved replies" button → Enter
→ Filter by typing part of the title
→ ↑/↓ to select → Enter to insert
```

**Limit:** GitHub allows up to 100 saved replies per account.

---

## Code Review Etiquette — For Reviewers

### Review the code, not the person
"You clearly don't understand accessibility."  
"This implementation doesn't account for keyboard navigation — here's how to add it."

### Don't gatekeep knowledge
If a contributor makes a mistake because they didn't know something, explain the concept. They're here to learn.

### Ask questions instead of making demands
"Change this to use `aria-label`."  
"What do you think about using `aria-label` here instead? Screen readers would then announce the button's purpose directly."

### Distinguish opinion from requirement
If something is your stylistic preference but NOT a bug or correctness issue, say so.

> "The current implementation is correct. I personally prefer the pattern in utils/helpers.js, but this is a nit — feel free to keep it as-is."

### Approve explicitly
When a PR is ready to merge, say so clearly — either by using the Approve review option, or in a comment: "This looks great to me! No blockers on my end."

---

## Code Review Etiquette — For Authors

### Say thank you
When someone takes time to review your work, acknowledge it — even if you disagree with some feedback.

> "Thanks so much for the thorough review! I've addressed all but the last comment — see my note there."

### Don't take feedback personally
Code review is about the code, not your worth as a person or developer. Even the most senior contributors receive change requests.

### Explain your choices
If you are keeping your implementation despite feedback, explain why.

> "I considered `aria-label` here, but I went with a visually-hidden `<span>` instead because it allows translators to localize the text more easily. Let me know if you think that tradeoff is wrong."

### Surface blockers early
Don't wait until you have finished a 500-line PR to mention that you weren't sure about the approach. Open a Draft PR early and ask.

---

## Inclusive Commenting for Accessibility Issues

When filing or discussing accessibility bugs, additional context helps:

- **Describe what was announced** — quote your screen reader's exact output when possible
- **Do not assume all users experience the same thing** — NVDA users, JAWS users, and VoiceOver users may have different experiences
- **Be precise about versions** — accessibility behavior changes between OS and screen reader versions
- **Represent the gap** — "This means that [group of people] cannot [do the thing]" — frame in impact, not just symptoms
- **Don't catastrophize or be dismissive** — "No blind person can use this" may be inaccurate; be precise about the specific failure and its scope

---

## The "Good First Issue" Social Contract

When a maintainer labels an issue `good first issue`, they are:
- **Investing time** — good first issues require extra documentation and mentorship
- **Signaling welcome** — they want to support a new contributor

When you take a good first issue, your responsibilities:
1. **Comment to claim it** — "Hi, I'd like to work on this. Can I be assigned?"
2. **Wait for assignment** — do not start until assigned; two people working in parallel wastes everyone's time
3. **Check in if stuck** — "I've been working on this for a day and I'm stuck on X — can you point me in the right direction?"
4. **Check in if unavailable** — "Life got busy and I can't finish this by the original estimate — is it okay if I extend by a week, or should you reassign?"
5. **Don't disappear** — if you claim an issue, see it through or explicitly hand it back

---

## Handling Difficult Situations

### When you receive harsh feedback
1. Take a breath before responding — there is no urgency; the thread will wait
2. Look for the valid concern underneath the harsh words
3. Respond to the concern, not the tone
4. If the behavior crosses into harassment, report it via the "..." button on the comment → "Report"

### When you disagree with a decision
1. Make your case once, clearly and with evidence
2. Accept that the maintainer has the final say in their project
3. If you strongly disagree, you can fork the project and take it in a different direction — this is legitimate in open source

### When someone is rude to you
1. You do not have to engage
2. You can reply once to state your boundary: "I'm happy to discuss the technical merits, but I'd prefer if we kept the conversation constructive."
3. Report via GitHub's reporting tools if the behavior is abusive

### When you accidentally caused offense
1. Acknowledge it directly: "I can see how that came across as dismissive — that wasn't my intention."
2. Do not over-explain or defend excessively
3. Adjust going forward

---

## Community Health Files

A healthy open source project makes these expectations explicit and visible. When you join a project, always check:

### CODE_OF_CONDUCT.md
Community standards and what behavior is expected. Most projects use the [Contributor Covenant](https://www.contributor-covenant.org/). When you see this file, it means:
- The maintainers take community health seriously
- There is a process for reporting violations
- You are protected and expected to protect others

### CONTRIBUTING.md
Specific instructions for how to contribute to this project:
- How to set up the development environment
- The branch and PR naming conventions
- What tests to run before submitting
- How to have a change considered

**Always read CONTRIBUTING.md before opening a PR.** Skipping it leads to rejected PRs and wasted effort.

---

## When to Use Different Communication Channels

| Channel | Use For |
|---------|---------|
| **Issue** | Bug reports, feature requests, questions about a specific problem |
| **PR comment** | Feedback on a specific code change |
| **PR review** | Formal verdict (approve/request changes) with consolidated feedback |
| **Discussion** | Open-ended conversation, proposals, community Q&A |
| **Email / direct** | Sensitive matters (security vulnerabilities, Code of Conduct reports) |

**GitHub Discussions are separate from Issues.** Use Discussions for: "What do people think about X approach?" and Issues for: "The X button is broken."

---

## Quick Reference: Phrases That Work

| Instead of... | Try... |
|---------------|--------|
| "This is wrong." | "This looks like it might cause X — is that intended?" |
| "Everyone knows you should..." | "A common pattern for this is..." |
| "This is terrible." | "I think this approach has some drawbacks — here's what I'm seeing." |
| "Fix this." | "What do you think about changing this to X?" |
| "Obviously..." | *(just omit the word "obviously")* |
| "This is a major issue." | "This is a blocker for users who rely on keyboard navigation." |
| "Can't you just..." | "One approach that might work is..." |
| "No." | "I don't think this approach is right for this project because..." |

---

## Try It: Rewrite One Comment

**Time:** 2 minutes | **What you need:** Just your brain

Read this code review comment and rewrite it to be constructive:

> **Original:** "This alt text is bad. Fix it."

Use the five-step feedback anatomy from this chapter:
1. **What** you noticed
2. **Why** it matters
3. **What** you suggest
4. **Why** the suggestion helps
5. **Encouragement**

Here's one way:

> **Rewritten:** "The alt text on this image says 'image1.png' — screen reader users will hear the filename instead of what's in the image. Could you describe what the screenshot shows, like 'Settings page with the Accessibility section expanded'? That way everyone gets the same information. Nice catch adding the image though — it really helps illustrate the step!"

Notice: same feedback, completely different experience for the person receiving it.

> **What success feels like:** You turned a two-word dismissal into help that someone would actually want to receive. That's the difference between a comment that fixes code and a comment that also keeps a contributor coming back.

---

> ### Day 2 Amplifier — Agent Forge Outputs Are Your Responsibility
>
> **Every communication principle in this guide applies with extra force when agents are involved.** When `@pr-review` generates review comments, *you* are responsible for their tone before you post them. When `@issue-tracker` drafts a triage reply, *your* name appears on it in the repository's public history. The agent writes — the contributor publishes.
>
> As you work with agents on Day 2, use this guide as your editing checklist:
> - **In VS Code** — Review every agent-generated comment against the "anatomy of helpful feedback" section before posting; use the "phrases that work" table to refine anything that reads as automated, generic, or cold
> - **In your repo** — Agent Forge outputs are first drafts, not final words; the community you contribute to experiences your judgment, not the agent's draft
> - **In the cloud** — GitHub Agentic Workflow comments must be designed with the same care as human comments: clear purpose, respectful language, and a transparent signal that automation posted them
>
> *A community's culture is shaped by every message posted in its name — including the ones an agent wrote for you.*

---

*Next: [Labels, Milestones, and Projects](08-labels-milestones-projects.md)*
*Back: [Merge Conflicts](06-merge-conflicts.md)*
*Related: [Working with Issues](04-working-with-issues.md) | [Working with Pull Requests](05-working-with-pull-requests.md)*
