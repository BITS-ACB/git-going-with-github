# Accessible Code Review
## Conducting Pull Request Reviews with a Screen Reader

> This guide is focused entirely on the **reviewer experience** — navigating diffs, reading changes, leaving comments, and submitting a review — using only your keyboard and screen reader. For the full pull request lifecycle (opening PRs, merge options, conflict resolution), see [Working with Pull Requests](05-working-with-pull-requests.md).

---

## Prerequisites Checklist

**Before starting this chapter, verify you have completed:**

- [ ] Chapter 5: [Working with Pull Requests](05-working-with-pull-requests.md) — Understand PR structure, diffs, and comment workflows
- [ ] Chapter 13: [GitHub Copilot](13-github-copilot.md) — VS Code installed and configured
- [ ] Screen Reader Setup — NVDA, JAWS, or VoiceOver installed and ready to use
- [ ] Access to at least one pull request to review (your own fork or a practice repo)

**Estimated time for this chapter:** 1 hour (including exercises)

---

## Two Environments for Code Review

You can review pull requests in two places — each with different strengths:

| Environment | Best For | Key Accessibility Feature |
|-------------|----------|--------------------------|
| GitHub web (browser) | Quick reviews, inline comments on any machine | New Files Changed Experience + keyboard navigation |
| VS Code | Deep reviews, large diffs, local context | Accessible Diff Viewer (`F7`) |

Both environments give you full keyboard and screen reader access. Your choice depends on context, not accessibility.

---

## Part 1 — Reviewing on GitHub.com

### Good News: Modern Interface is Default

As of January 2026, GitHub's improved Files Changed experience is enabled by default. The instructions below assume you have the modern interface (which you do).

If the interface seems different from what's described here, clear your browser cache and reload the page.

---

### Step 1: Reach the Files Changed Tab

From any pull request page:

<details>
<summary>Visual / mouse users</summary>

Click the **Files changed** tab at the top of the PR page. The tab label shows the number of changed files (e.g., "Files changed 4").

</details>

<details>
<summary>Screen reader users (NVDA / JAWS)</summary>

```
Press D → navigate to "Pull request navigation tabs" landmark
Press → or Tab → find "Files changed" link → Enter
```

The tab label announces the number of changed files: *"Files changed, 4 files changed"*

</details>

<details>
<summary>Screen reader users (VoiceOver — macOS)</summary>

```
VO+U → Landmarks → navigate to "Pull request navigation tabs"
VO+Right or Quick Nav K → find "Files changed" link → VO+Space
```

VoiceOver announces the number of changed files: *"Files changed, 4 files changed"*

</details>

---

### Step 2: Use the File Tree to Orient Yourself

The file tree panel lists every changed file. Before reading any diff, scan this list to understand the scope of the PR.

<details>
<summary>Visual / mouse users</summary>

The file tree is the left panel on the Files Changed page. Each file shows its name and a `+N / -N` badge (lines added/removed). Click any filename to scroll directly to its diff.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS)</summary>

```
Press D → navigate to "File tree" region
Press ↓ to move through files
Each file reads: "[filename] — [N additions, N deletions]"
Press Enter on a file to scroll its diff into view
```

</details>

<details>
<summary>Screen reader users (VoiceOver — macOS)</summary>

```
VO+U → Landmarks → navigate to "File tree" region
VO+Down to move through files
Each file reads: "[filename] — [N additions, N deletions]"
VO+Space on a file to scroll its diff into view
```

</details>

**What to listen for / look for:**
- How many files changed?
- Which areas of the codebase are affected?
- Are there unexpected files (generated files, lock files, configuration changes)?

---

### Step 3: Navigate Between File Diffs

Each changed file in the main area is an `h3` heading containing the filename.

<details>
<summary>Visual / mouse users</summary>

Scroll through the page or click a filename in the file tree on the left. Collapsed files can be expanded by clicking the file header.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS)</summary>

```
Press 3 to jump file-by-file through the diff
Listen for: "learning-room/docs/keyboard-shortcuts.md — collapsed" or "expanded"
Press Enter or Space to expand a collapsed file
```

If a diff is very long, the file tree is usually faster than pressing `3` repeatedly.

</details>

<details>
<summary>Screen reader users (VoiceOver — macOS)</summary>

```
Quick Nav H or VO+Cmd+H to jump file-by-file through the diff
Listen for: "learning-room/docs/keyboard-shortcuts.md — collapsed" or "expanded"
VO+Space to expand a collapsed file
```

If a diff is very long, the file tree is usually faster than using heading navigation.

</details>

---

### Step 4: Read a Diff

Each file's diff is a table. Every row is one line of code.

<details>
<summary>Visual / mouse users</summary>

- **Green highlighted lines** (with a `+`) = lines added
- **Red highlighted lines** (with a `-`) = lines removed
- **Plain/white lines** = unchanged context
- Use `Ctrl+F` to search within the page for specific text in the diff

</details>

<details>
<summary>Screen reader users — NVDA</summary>

```
Press T to jump to the diff table → Insert+Space (Focus Mode)
Press ↓ to move through lines one at a time
Press Ctrl+Alt+→ to read across columns: [line number] | [change type] | [code content]
```

</details>

<details>
<summary>Screen reader users — JAWS</summary>

```
Press T to jump to the diff table → Insert+Z (Virtual PC Cursor off)
Press ↓ to move through lines
Press Ctrl+Alt+→ for column-by-column reading
```

</details>

<details>
<summary>Screen reader users — VoiceOver (macOS)</summary>

```
Press T or VO+U → Tables → select the diff table
VO+Shift+↓ to enter the table
VO+→/← to navigate columns, VO+↑/↓ to navigate rows
```

</details>

**What each line announces / shows:**
- Added lines: `"+ [code content]"` — or announced as "inserted"
- Removed lines: `"- [code content]"` — or announced as "deleted"
- Context lines: code without a `+` or `-`

**Tip:** If the code on a line is very long, the screen reader will read the full line. For minified or generated files, consider collapsing the file in the tree and skipping it.

---

### Step 5: Place an Inline Comment

When you have a specific observation about a particular line, place an inline comment directly on it.

<details>
<summary>Visual / mouse users</summary>

1. Hover your mouse over a line in the diff — a **blue `+`** (comment) button appears on the left
2. Click it to open the inline comment box
3. Type your comment
4. Click **"Start a review"** (not "Add single comment" — see note below)

</details>

<details>
<summary>Screen reader users (NVDA / JAWS)</summary>

```
Step 1: Navigate to the target line in the diff table (see Step 4)
Step 2: While focused on that line, press Tab → look for a comment button
Step 3: Alternatively: press B to navigate buttons → look for "Add a comment to this line"
Step 4: Press Enter to open the inline comment box
Step 5: Insert+Space (NVDA) or Insert+Z (JAWS) → switch to Focus Mode
Step 6: Type your comment
Step 7: Tab to "Start a review" button (not "Add single comment" — see note below)
Step 8: Press Enter
```

</details>

<details>
<summary>Screen reader users (VoiceOver — macOS)</summary>

```
Step 1: Navigate to the target line in the diff table (see Step 4)
Step 2: While focused on that line, Tab → look for a comment button
Step 3: Alternatively: Quick Nav B → look for "Add a comment to this line"
Step 4: VO+Space to open the inline comment box
Step 5: VO+Shift+Down to interact with the text area
Step 6: Type your comment
Step 7: VO+Shift+Up to stop interacting → Tab to "Start a review" button
Step 8: VO+Space
```

</details>

> **Why "Start a review" instead of "Add single comment":** A single comment posts immediately and sends a notification for each one. "Start a review" batches all your comments and sends one notification when you submit — far less disruptive for the author.

**Placing a multi-line comment:**

<details>
<summary>Visual / mouse users</summary>

Click and drag across multiple line numbers in the diff gutter to select a range. A comment button appears for the selected range.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS)</summary>

```
Step 1: Navigate to the first line of the range
Step 2: Press Shift+↓ to extend selection to additional lines
Step 3: A comment button appears for the selected range
Step 4: Proceed as above
```

</details>

<details>
<summary>Screen reader users (VoiceOver — macOS)</summary>

```
Step 1: Navigate to the first line of the range
Step 2: Shift+↓ to extend selection to additional lines
Step 3: A comment button appears for the selected range
Step 4: VO+Space to activate, then proceed as above
```

</details>

---

### Step 6: Read Existing Comments and Threads

Inline comments from other reviewers appear as `h3` headings within the diff table. Each thread shows: reviewer username, comment body, replies, a "Reply" link and resolution button.

<details>
<summary>Visual / mouse users</summary>

Comments appear inline within the diff as collapsible cards. Click **"Reply…"** to add to a thread. Click **"Resolve conversation"** to mark a thread done (requires write access).

</details>

<details>
<summary>Screen reader users (NVDA / JAWS)</summary>

Navigate them with `3` (jump to `h3` headings in the diff).

To add to a thread:
```
Step 1: Navigate to the thread heading (3)
Step 2: Tab to "Reply…" link
Step 3: Enter → text area appears → Focus Mode → type reply
Step 4: Ctrl+Enter to submit the reply
```

To mark a thread as resolved (if you have write access):
```
Tab to the "Resolve conversation" button → Enter
```

</details>

<details>
<summary>Screen reader users (VoiceOver — macOS)</summary>

Navigate with Quick Nav `H` or `VO+Cmd+H` (jump to headings in the diff).

To add to a thread:
```
Step 1: Quick Nav H to navigate to the thread heading
Step 2: Tab to "Reply…" link
Step 3: VO+Space → text area appears → VO+Shift+Down → type reply
Step 4: Cmd+Return to submit the reply
```

To mark a thread as resolved (if you have write access):
```
Tab to the "Resolve conversation" button → VO+Space
```

</details>

---

### Step 7: Submit Your Review

After adding all inline comments:

<details>
<summary>Visual / mouse users</summary>

1. Click the **"Review changes"** button (top-right of the Files Changed page or bottom of the PR)
2. A dialog opens with a summary text area and three radio buttons: Comment / Approve / Request changes
3. Optionally type an overall summary in the text area
4. Select your verdict
5. Click **"Submit review"**

</details>

<details>
<summary>Screen reader users (NVDA / JAWS)</summary>

```
Step 1: Press D → navigate to "Pull request navigation tabs"
Step 2: Press ← to return to the Conversation tab → Enter
Step 3: Scroll to the bottom (End key, or ↓ repeatedly)
Step 4: Alternatively: press B repeatedly → find "Review changes" button
Step 5: Press Enter to open the review summary dialog
Step 6: Focus Mode → type your overall comment
Step 7: Tab to the radio button group → ↑/↓ to select a verdict
Step 8: Tab to "Submit review" button → Enter
```

</details>

<details>
<summary>Screen reader users (VoiceOver — macOS)</summary>

```
Step 1: VO+U → Landmarks → navigate to "Pull request navigation tabs"
Step 2: VO+Left to return to the Conversation tab → VO+Space
Step 3: VO+End or VO+Down to reach the bottom of the page
Step 4: Alternatively: Quick Nav B → find "Review changes" button
Step 5: VO+Space to open the review summary dialog
Step 6: VO+Shift+Down → type your overall comment
Step 7: VO+Shift+Up → Tab to the radio button group → VO+Left/Right to select a verdict
Step 8: Tab to "Submit review" button → VO+Space
```

</details>

**Verdicts and their meaning:**

| Verdict | When to use |
|---------|-------------|
| Comment | You have observations but no strong position; does not block merge |
| Approve | You've reviewed and are satisfied; signals readiness to merge |
| Request changes | Changes are needed before this should merge; blocks merge |

---

### Step 8: Re-request Review (for Authors)

After you address review comments on your own PR:

<details>
<summary>Visual / mouse users</summary>

Look in the right sidebar for the **Reviewers** section. Click the **re-request icon** (circular arrows) next to the reviewer's name to notify them that you've pushed changes.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS)</summary>

```
Step 1: From your PR's Conversation tab, find the reviewer's name in the sidebar (3 → "Reviewers" heading)
Step 2: Activate the refresh/re-request icon next to their name
Step 3: This re-notifies the reviewer that you've made changes
```

</details>

<details>
<summary>Screen reader users (VoiceOver — macOS)</summary>

```
Step 1: From your PR's Conversation tab, Quick Nav H or VO+Cmd+H to find the "Reviewers" heading in the sidebar
Step 2: Tab or Quick Nav B to find the re-request icon ("Re-request review") next to the reviewer's name
Step 3: VO+Space to activate — this re-notifies the reviewer that you've made changes
```

</details>

---

## Part 2 — Reviewing in VS Code with the Accessible Diff Viewer

When you check out a branch locally, VS Code's diff editor offers the **Accessible Diff Viewer** — a purpose-built, line-by-line reading mode designed specifically for screen readers.

### Opening a Diff in VS Code

If you have the GitHub Pull Requests extension:
1. Open the GitHub Pull Requests view (Explorer sidebar or Ctrl+Shift+P → "GitHub Pull Requests: View Pull Request")
2. Find the PR and open it — changed files appear in the file tree
3. Navigate to any file in the tree and press `Enter` to open its diff view

Without the extension, any `git diff` operation also opens the diff editor.

### Using the Accessible Diff Viewer (`F7`)

From any open diff editor:

```
Press F7 → Accessible Diff Viewer opens as a panel below the diff
```

The Accessible Diff Viewer reads each change as a structured block:

```
"Changed lines 14 to 14 in keyboard-shortcuts.md
[Change 1 of 3]

Removed:
    #### NVDA Single-Key Navigation

Added:
    ### NVDA Single-Key Navigation"
```

**Navigation:**
- `F7` — jump to next change (next hunk)
- `Shift+F7` — jump to previous change
- `Alt+F2` — open VS Code's Accessible View for additional context on the current item
- `Escape` — close the Accessible Diff Viewer

**What makes this better than the raw diff editor:**
- Each change is announced as a discrete unit with clear "Removed:" and "Added:" labels
- You hear the change number of total changes ("Change 3 of 12")
- No table navigation required — purpose-built for sequential listening
- Works with all three major screen readers without any special configuration

### Placing Comments in VS Code (GitHub PR Extension)

From the diff editor with the GitHub PR extension:
```
Step 1: In the diff gutter, navigate to the line you want to comment on
Step 2: Ctrl+Shift+P → "GitHub Pull Requests: Add Comment"
Step 3: Or press Shift+F10 (Windows) or Control+Return (macOS) on the line → context menu → "GitHub Pull Requests: Add Comment"
Step 4: A text area opens — type your comment
Step 5: Submit from the inline UI
```

Comments placed in VS Code sync to GitHub — they appear in the PR's Files Changed tab and the author receives the same notification.

---

## Code Review Structure and Content

### The Anatomy of a Useful Review Comment

A comment that helps the author is:
1. **Specific** — link to the exact line and name the pattern you see
2. **Educational** — say *why* something matters, not just what to change
3. **Graduated** — signal whether this is blocking, or a preference

**Blocking example:**
> "The heading on line 34 jumps from `##` (level 2) to `####` (level 4), skipping heading level 3. Screen reader users who navigate by heading level will miss any content between those two levels. Please change `####` to `###` before this merges."

**Non-blocking (nit) example:**
> "nit: The link text on line 22 reads 'click here for more information.' Screen reader users who navigate links out of context will hear only 'click here' with no destination. 'See the accessibility setup guide' would be clearer. Not blocking."

**Question example:**
> "The PR description says this improves keyboard navigation of the shortcut table, but I only see a heading change in the diff. Am I missing a related file, or is the keyboard improvement a side effect of fixing the heading? Happy to re-review once I understand."

### Prefixes That Set Expectations

Using shorthand prefixes helps authors parse many comments quickly:

| Prefix | Meaning |
|--------|---------|
| `nit:` | Non-blocking stylistic preference |
| `question:` | Genuine question; not blocking |
| `suggestion:` | Alternative to consider; take it or leave it |
| `important:` | Should be addressed; may block |
| `blocking:` | Must be addressed before merge |
| `praise:` | Positive callout — works well, good pattern |

### How Many Comments Is Too Many?

There is no hard limit, but quantity without prioritization is noise. If you have 15 comments, make clear which 2-3 are blocking. Authors can then focus energy on what matters most and address preferences in follow-up PRs.

---

## Keyboard Reference

### GitHub Web Review

| Action | Key |
|--------|-----|
| Navigate to Files Changed tab | `D` → PR tabs landmark → `→` → `Enter` |
| Jump between file diffs | `3` |
| Navigate diff lines (NVDA/JAWS) | Focus Mode + `↓` |
| Read across diff columns | `Ctrl+Alt+→` |
| Open inline comment box | Line focused → `B` → comment button |
| Submit entire review | `D` → Conversation → `B` → "Review changes" |
| Navigate existing threads | `3` |
| Reply to a thread | `3` → thread → `Tab` → "Reply" → `Enter` |

### VS Code Accessible Diff Viewer

| Action | Key |
|--------|-----|
| Open Accessible Diff Viewer | `F7` |
| Next change (hunk) | `F7` |
| Previous change (hunk) | `Shift+F7` |
| Open Accessible View | `Alt+F2` |
| Accessible Help (any widget) | `Alt+H` |
| Close Accessible Diff Viewer | `Escape` |

---

## Common Review Scenarios

### "I want to verify the PR only changes what it claims"

```
1. File tree → count the files, read the names
2. 3 → navigate each file heading → listen to the stats line (N additions, N deletions)
3. For each file: skim with T → Focus Mode → ↓ through lines
4. If a file feels unrelated: leave a comment on the first line of that file
```

### "I want to find all changes to one specific section"

```
1. In VS Code: open the file → Ctrl+G → jump to the section's line number
2. F7 → Accessible Diff Viewer → listen for changes near that line
3. Or on GitHub: file tree → expand that file → T → navigate the diff table
```

### "I agreed but then the author made more changes — did anything new appear?"

```
1. Go to the Commits tab (D → PR tabs → "Commits" → Enter)
2. 3 to navigate commits — find any commits after your last review
3. Press `Enter` on the commit to see only what changed in that push (not the full diff)
```

### "A reviewer left a comment I don't understand"

```
1. Read the full thread (3 → navigate to the thread heading)
2. Tab to the "Reply" button
3. Ask: "Can you clarify what change you're suggesting? I want to understand before I act on this."
4. Or: reference a specific line in your reply using the line number
```

---

## Exercises

These exercises use the files in `learning-room/docs/` in this repository. All examples involve documentation changes — no code required.

---

### Exercise A — Complete a Web Review

**Scenario:** A contributor has submitted a pull request titled "Add screen reader tips to the setup guide." The PR modifies `learning-room/docs/setup-guide.md`. Your job is to review it before it merges.

**What You'll Learn:** How to use screen reader heading navigation to spot accessibility issues in a GitHub PR diff.

---

#### Step 1: Navigate to the Pull Request

**What to do:**
1. Open GitHub in your browser and navigate to the workshop repository (`github.com/[your-fork]/[workshop-repo]` or `accesswatch/agent-forge`)
2. Click the **Pull Requests** tab (top navigation)
3. Look for a PR titled "Add screen reader tips to the setup guide" — click it to open
4. You should now see the PR page with sections: Conversation, Commits, Files Changed

**How to know you're in the right place:**
- The PR title is visible at the top
- You see a description box with text about what this PR does
- You see tabs labeled "Conversation," "Commits," "Files Changed"

**If you can't find the PR:**
- Use `Ctrl+F` to search the PR list for "screen reader tips"
- Or ask in the workshop Slack — someone can share the exact URL

---

#### Step 2: Read the PR Description

**What to do:**
1. You are currently on the **Conversation** tab
2. Read the PR description (the text immediately under the PR title)
3. Look for: "What does this PR change?" and "Why does it change it?"
4. **With screen reader:** Navigate to the description with `D` (NVDA) or press `Ctrl+Option+Up` (VoiceOver) to find main landmarks, then read the content region

**What to look for:**
- Does the PR author explain what file changed? (should mention `setup-guide.md`)
- Does it explain why? (should mention "improve accessibility" or "add tips")
- Is it clear enough that a reviewer can understand the goal without reading the diff?

**What success looks like:**
- You can answer: "This PR adds [specific content] to [specific file] because [clear reason]"
- Example: "This PR adds screen reader usage tips to the setup guide because new users need accessibility guidance"

---

#### Step 3: Navigate to "Files Changed"

**What to do:**
1. Click the **Files Changed** tab (top of the PR page, to the right of "Commits")
2. You are now viewing the diff
3. **With keyboard (all screen readers):** Press `T` to jump to the diff table. The page focuses on the file comparison area.

**What you should see:**
- A section showing the file name `setup-guide.md` with a small badge showing "+20 −0" (20 lines added, 0 lines removed)
- Below it, the diff with removed lines (preceded by `−`) and added lines (preceded by `+`)

**If you see multiple files:**
- Scroll up to see if there are other files. For this exercise, only `setup-guide.md` should be changed.
- If you see other files, confirm they are not modified (the badge should show "+0 −0" or no changes)

---

#### Step 4: Activate Focus Mode for Better Diff Reading

**What to do:**
1. Look for a button labeled "Focus Mode" or an icon (usually at the top right of the diff area)
2. **With keyboard:** Press `F` to toggle Focus Mode (may need to be in the diff area first)
3. **With mouse:** Click the Focus Mode button/icon

**What happens in Focus Mode:**
- The page simplifies: sidebars disappear
- Only the diff is visible — easier for screen reader navigation and less cognitive load
- The diff is now the main content area

**With screen reader (once in Focus Mode):**
- NVDA/JAWS: Press `T` to jump to the diff table
- VoiceOver: Navigate with `VO+Right Arrow` to find the table/content region
- Read through the changes: `↓` arrow moves to each line

---

#### Step 5: Find the Heading Hierarchy Issue

**What to do:**
1. **Read through the entire diff** line by line. Pay special attention to lines starting with `#`
2. You are looking for: a line with `####` (four hashes, heading level 4) that comes *directly after* a `##` (two hashes, heading level 2)
3. When you find it, **note the exact line number** shown in the diff

**Example of what you're looking for:**
```
  ## Setup Basics          ← Heading level 2
  ...several lines...
  #### Advanced Tips       ← Heading level 4 (skipped level 3!)
```

**Why this matters:**
- Screen reader users navigate documents by heading level: `1` → `2` → `3` → `4`
- A skip from `##` to `####` breaks that navigation
- When a user presses "jump to heading level 3," they'll find none, wondering if content is missing

**What success looks like:**
- You found the line with `####` that violates hierarchy
- You can say the line number and what heading text appears there
- You understand *why* this is an accessibility problem

---

#### Step 6: Place a Blocking Review Comment on the Heading

**What to do:**
1. Find the diff line with the problematic `####` heading
2. **Hover your mouse over the line number** on the left side of that line (or if using keyboard, navigate to that line in the table)
3. A button should appear (or press the Add Comment hotkey — usually `C` in GitHub)
4. Click it or press `Enter` to open a comment box

**In the comment box:**
1. Type: `blocking:` (tells reviewers this stops the PR from merging)
2. Press Space, then explain:
   ```
   Heading hierarchy violation. This heading uses #### (level 4) directly 
   after ## (level 2), skipping level 3. Screen reader users navigating 
   by heading level will miss this section. Change to ### (level 3).
   ```
3. Click the **Comment** button (or press `Ctrl+Enter` for keyboard submit)

**What happens next:**
- Your comment appears in the thread under that line
- The PR author sees it and can make the fix

**If the comment button doesn't appear:**
- Make sure you're hovering over the *line number* area (left side of the line)
- Try refreshing the page and trying again
- Or use the "Add a reply" field at the bottom of the PR and mention the line number manually

---

#### Step 7: Find the Link Text Issue

**What to do:**
1. **Continue reading the diff** (from where you left off)
2. Look for a line containing link text that reads `"click here"` or `"click here for more information"`
3. **Note the line number**

**Why this matters:**
- Screen reader users can ask their reader to "list all links on this page" — they hear only the link text
- If the text is "click here," they have no context about where it goes
- Descriptive link text is WCAG 2.4.4 (Link Purpose)

**What success looks like:**
- You found a link with non-descriptive text
- You can explain why "click here" is bad and what would be better

---

#### Step 8: Place a Comment on the Link

**What to do:**
1. Find the line in the diff with the problematic link
2. Hover over the line number and click to open a comment box (or press `C`)
3. Type:
   ```
   nit: Link text "click here" is not descriptive. Screen reader users 
   who list links won't know the context. Suggest: "Read the accessibility 
   checklist" or another descriptive phrase.
   ```
4. Click **Comment** or press `Ctrl+Enter`

**Note:** `nit:` means "nice-to-have improvement" (not blocking, but good to fix)

---

#### Step 9: Submit Your Review

**What to do:**
1. Look for a button labeled **"Review changes"** (usually at the top right of the page or bottom of comments)
2. Click it (or navigate with keyboard and press `Enter`)
3. A dialog appears with options:
   - **Comment** — provide feedback but don't block (for minor notes)
   - **Approve** — the PR is ready to merge
   - **Request changes** — this PR cannot merge until changes are made

**For this exercise:**
1. Select **"Request changes"** (you found two things to fix)
2. In the summary field, write: `Found 2 accessibility issues that must be fixed before merging.`
3. Click **"Submit review"**

**What happens:**
- Your review is submitted
- The PR author gets a notification
- The PR shows your review with the two comments
- GitHub blocks merging until the author responds to or fixes the changes

**What success looks like:**
- You see your review appear on the PR page
- It shows 2 comments you made
- The PR status shows "Changes requested"

---

#### Reflect on This Exercise

After submitting, answer:
1. **Did heading-level navigation help?** When you were looking for the `####` issue, was it easier to navigate by heading level (`1`–`6`) than to scan every line?
2. **Would you have caught this without the exercise prompt?** If you were a real reviewer not specifically looking for heading issues, would the diff have been obvious?
3. **Why does screen reader navigation matter?** In one sentence, explain why a screen reader user's ability to jump through heading levels is important for this document.

Keep your answers — you'll need them for Chapter 16's Agent Forge exercise to compare manual review with agent-assisted review.

---

### Exercise B — Use the VS Code Accessible Diff Viewer

**Scenario:** Review the same pull request from Exercise A, this time entirely in VS Code. You'll compare the browser experience with the VS Code experience.

**What You'll Learn:** How the VS Code Accessible Diff Viewer announces changes differently than the browser diff, and when each environment is most useful.

---

#### Prerequisites

Before starting:
- VS Code must be installed on your machine
- The GitHub Pull Requests extension must be installed (see [Chapter 12](12-github-pull-requests-extension.md) for installation)
- You must be signed into GitHub from VS Code (use `Ctrl+Shift+P` → "GitHub: Sign in")

---

#### Step 1: Open the GitHub Pull Requests Extension

**What to do:**
1. Open VS Code
2. **With keyboard (all screen readers):** Press `Ctrl+Shift+X` to open the Extensions sidebar
   - **With mouse:** Click the Extensions icon on the left sidebar (looks like four squares)
3. Search for "GitHub Pull Requests"
4. If it's not installed, click **Install**
5. If it is installed, click **GitHub Pull Requests** to view its details

**What you should see:**
- The extension is listed as active
- It mentions: "Review and manage GitHub pull requests and issues"

---

#### Step 2: Open the Pull Requests Sidebar

**What to do:**
1. Look for a **GitHub-themed icon** on the left sidebar (circle with octocat logo) — click it
   - **With keyboard:** The icon may not be keyboard-reachable directly; instead go to Step 3
2. A sidebar appears showing open pull requests on repositories you have access to
3. **Find the PR titled "Add screen reader tips to the setup guide"** — it should appear in a list
4. Click it to open

**What happens:**
- VS Code opens a new editor tab for this PR
- Below the PR title, you see a "Changes" section listing modified files
- You should see `setup-guide.md` in the changes list

**If you can't find the PR:**
- Use `Ctrl+Shift+P` → search `GitHub Pull Requests: Open Pull Request`
- Paste the PR URL: `https://github.com/[owner]/[repo]/pull/[number]`
- Press Enter

---

#### Step 3: View the File Changes

**What to do:**
1. In the **Changes** section, locate `setup-guide.md`
2. Click on the filename to open it

**What happens:**
- A diff editor opens showing two columns:
  - **Left:** the original file (before changes)
  - **Right:** the new file (after changes)
- Different colors show added (green), removed (red), and modified (blue) lines
- The file name appears at the top: `setup-guide.md`

**With screen reader:**
- NVDA/JAWS: The editor announces "Diff Editor — setup-guide.md"
- Use `Ctrl+Home` to jump to the start of the diff
- Use `Ctrl+End` to jump to the end

---

#### Step 4: Access the Accessible Diff Viewer

**What to do:**
1. **With keyboard:** Press `F7` to open the Accessible Diff Viewer
   - **With mouse:** Look for a button or menu option labeled "Accessible View" or "Open Accessible Diff"
   - If no button is visible, try `Alt+F2` (VS Code Accessible View toggle)

**What happens:**
- A new panel opens at the bottom of VS Code
- The panel announces each change one at a time
- Changes appear in text format with labels: "Added: " and "Removed: "
- The panel is read-only (you read the changes, you don't edit here)

**If the Accessible Diff Viewer doesn't open:**
- Make sure the diff editor is active (click in the diff area first)
- Try `Ctrl+Shift+P` → search `Open Accessible Diff`
- If available, select it

---

#### Step 5: Listen to and Understand the First Change

**What to do:**
1. The first change is automatically announced when you open the Accessible Diff Viewer
2. **Let your screen reader read it completely** — don't interrupt
3. Write down the exact text announced:
   ```
   Removed: [write what the viewer said]
   Added: [write what the viewer said]
   ```
4. Press the **Down arrow** to move to the next change

**What to expect (example):**
```
Removed: ## Old Heading
Added: ## New Heading with More Details
```

**With screen reader:**
- NVDA/JAWS: The Accessible Diff Viewer announces "Removed:" and "Added:" labels, followed by the line content
- VoiceOver: The announcement may be similar; listen for "removed" and "added" keywords

---

#### Step 6: Find the Heading Hierarchy Issue

**What to do:**
1. Continue pressing **Down arrow** to move through changes
2. Listen carefully for a change involving headings (lines starting with `#`)
3. Specifically, listen for: "Added: ####" (four hashes)
4. When you hear this, **stop and write it down:**
   ```
   Line number: [if available]
   Removed: [what was removed, if anything]
   Added: [the four-hash heading]
   Context: [is there a ## heading just before this?]
   ```

**Why listen for this?**
- Four hashes (`####`) indicate a level 4 heading
- In the diff, you're looking for it appearing after a level 2 heading (`##`)
- This creates the hierarchy skip you caught in Exercise A

**What success looks like:**
- You found the explanation in the Accessible Diff Viewer's format
- You can explain: "The added line with `####` directly follows a `##`, skipping level 3"
- The Accessible Diff Viewer made this *pattern* clearer than scanning raw `+` characters

---

#### Step 7: Locate the Heading Line and Add an Inline Comment

**What to do:**
1. Once you identified the problematic heading in the Accessible Diff Viewer, **close the Accessible Diff Viewer** (press `F7` again or `Alt+F2`)
2. You're back in the regular Diff Editor
3. **Find the line with the problematic `####` heading:**
   - Use `Ctrl+F` to open Find
   - Search for `####` to locate it quickly
   - Press `Enter` to jump to it
4. Close Find (`Escape`)
5. Place your cursor on that line
6. **Right-click** and select "Add Comment" or press the **Comment icon** that appears on the left margin
   - **With keyboard:** The comment button may appear on the current line; navigate to it and press `Enter`

**What happens:**
- A comment box opens
- You can type your comment

---

#### Step 8: Write Your Accessible Diff Comment

**What to do:**
1. In the comment box, type:
   ```
   blocking: Heading hierarchy violation. The Accessible Diff Viewer 
   clearly showed this #### heading appearing directly after ##, skipping 
   level 3. Screen reader users navigating by heading level will miss this 
   content. Change to ###.
   ```
2. Press `Ctrl+Enter` or click **Comment** to submit

**Why mention the Accessible Diff Viewer?**
- It shows that the tool *itself* helps you see the issue
- It documents how you caught the problem (useful for learning)

---

#### Step 9: Create a GitHub Pull Request Comment

**Special Section: Comparing Tools**

Now you've reviewed the same PR in:
1. **Browser (Exercise A):** You spot-checked line numbers manually
2. **VS Code (Exercise B):** The Diff Editor plus Accessible Diff Viewer announced changes

**What to do:**
1. Go to GitHub in your browser and open the same PR
2. Scroll to the bottom and leave a comment in the Conversation tab:

```
I've now reviewed this PR in both the browser and VS Code. Here's 
what I found:

**Browser review:** I had to manually navigate with heading commands 
and scan for the skip visually. Found 2 issues.

**VS Code + Accessible Diff Viewer:** The Accessible Diff Viewer 
announced changes in a linear format, making it easier to follow 
the story of what changed without scanning back and forth.

**My conclusion:** [Choose one]
- The browser method was clearer for me
- VS Code was clearer for me
- Both have strengths; I'd use each for different purposes
  - Browser best for: [specific reason]
  - VS Code best for: [specific reason]
```

3. Click **Comment**

---

#### Reflect on This Exercise

After completing Steps 1-9, answer:
1. **Announcement clarity:** Did the "Added:" and "Removed:" labels from the Accessible Diff Viewer help you follow changes faster than reading `+` and `−` prefixes in the browser?
2. **Navigation pattern:** Which tool required less back-and-forth clicking/tabbing to understand each change?
3. **When would you use each?** In one sentence: describe a type of PR where you'd prefer to use each tool.

**Record your answers.** In Chapter 16, you'll compare these manual reviews with the `@pr-review` agent's suggested changes.

---

### Exercise C — Compare and Reflect

**Your Mission:** Synthesize what you learned from the manual code reviews (Exercises A & B) and document your findings.

**What You'll Learn:** Which tools work best for different scenarios, and how your manual review skills prepare you to use AI agents effectively.

---

#### Step 1: Gather Your Data

Before writing your reflection, collect all the information you gathered:

**From Exercise A (Browser Review):**
- Which line number had the heading hierarchy skip?
- Which line number had the link text issue?
- How many steps did it take to find each issue?
- Did you use screen reader commands or visual scanning more?

**From Exercise B (VS Code Review):**
- What did the Accessible Diff Viewer announce for the heading change?
- Was the announcement clearer than the browser's `+` and `−` format?
- Did you need to switch between the Accessible Diff Viewer and the regular editor?
- How many steps to find the problem?

**Write these down** (in a text editor, on paper, or mentally) — you'll reference them in Steps 2-4.

---

#### Step 2: Navigate to the PR and Leave Your Reflection Comment

**What to do:**
1. Go to GitHub in your browser
2. Open the same PR ("Add screen reader tips to the setup guide")
3. Scroll to the **Conversation** tab
4. Scroll all the way down to the comment box at the bottom (labeled "Leave a comment" or "Add a comment")
5. Click in the comment box

**What you should see:**
- A text editing area with formatting options (Bold, Italic, Link, etc.)
- A **Comment** button below the text area

---

#### Step 3: Write Your Comparison

**What to do:**
Type your response to these three questions. Be specific — reference exact tools, steps, and what you discovered:

**Question 1: Environment Preference**
```
After reviewing this PR in both environments, my preferred tool was:
[Browser / VS Code / Both equally]

Why: [1-2 sentences explaining your choice]

Example: "I preferred VS Code because the Accessible Diff Viewer 
separated changes into 'Added:' and 'Removed:', making it obvious 
what the new content was. In the browser, I had to mentally filter 
the + and − characters."
```

**Question 2: Strengths of Each Environment**
```
Browser made this easier: [One specific task, e.g., "Finding the PR URL"] 
because [Why]

VS Code made this easier: [One specific task, e.g., "Following the diff linearly"] 
because [Why]

Example Browser: "Finding context about *why* the change was made, 
because all the discussion is in one place"

Example VS Code: "The Accessible Diff Viewer announcing changes sequentially 
meant I didn't miss anything by accidentally scrolling past it"
```

**Question 3: Real-World Impact**
```
For someone reading the published document (not the diff), the heading 
skip matters because: [1-2 sentences]

Example: "A screen reader user pressing the '3' key to navigate to level-3 
headings will find none, and might think the document skipped a section. 
This breaks the information hierarchy."
```

**Full template to copy into the comment box:**

```
## Code Review Reflection — Browser vs VS Code

After reviewing this PR using both the browser and VS Code environments, 
here's what I found:

### Environment Preference

My preferred tool was: **[Browser / VS Code]**

Why: [1-2 sentences]

### Specific Strengths

**Browser made this easier:**
- Task: [specific thing]
- Why: [explanation]

**VS Code made this easier:**
- Task: [specific thing]
- Why: [explanation]

### Real-World Impact

The heading hierarchy skip in the published document matters because: 
[1-2 sentences about why screen reader users would be affected]
```

---

#### Step 4: Review Your Comment

**What to do:**
1. Before submitting, **re-read your comment** using your screen reader or by reading aloud
2. Ask yourself:
   - Is it clear which tool I preferred?
   - Did I explain *why* with concrete examples?
   - Am I describing the real-world impact accurately?
   - Would someone else reading this understand how I caught the issue?
3. Make any corrections needed
4. **Do not submit yet** — continue to Step 5

---

#### Step 5: Submit Your Reflection

**What to do:**
1. Locate the **Comment** button at the bottom right of the comment box
2. **With keyboard:** Press `Tab` until the Comment button is focused, then `Enter`
3. **With mouse:** Click the **Comment** button
4. Your comment is submitted and appears on the PR page

**What happens:**
- Your comment is now visible on the PR
- Other reviewers can see your comparison
- You have completed the three-part exercise series

**What success looks like:**
- Your comment appears on the PR thread
- It includes all three reflections
- The PR author and other reviewers can see your thought process

---

#### Step 6: Checkpoint — Validate Your Learning

Before moving forward, verify you understand:

1. **Heading Hierarchy:** Can you explain in one sentence why a `##` → `####` skip breaks screen reader navigation?
   - *Expected answer:* Something like "Screen readers let users navigate by heading level (pressing 3 jumps to H3), so skipping a level makes users think content is missing."

2. **Tool Strengths:** For each tool you used, name one task it made easier.
   - *Expected answer:* e.g., "Browser: finding context in discussions. VS Code: linear reading of changes."

3. **Real-World Testing:** How would you test the heading issue in the *published* document (not the PR diff)?
   - *Expected answer:* Something like "Open the document in a browser, use screen reader heading navigation, and confirm I can reach all levels (H2, H3, H4)."

If you can answer all three, you're ready for the next chapter.

---

### What Comes Next

Your manual code review skills — identifying heading issues, catching link text problems, understanding screen reader navigation — are the **foundation** for understanding automated review.

In **Chapter 16 (Agent Forge)**, you'll use the `@pr-review` agent to generate a *draft* review of this same PR. The agent will:
- Suggest changes automatically
- Identify accessibility issues
- Create a review checklist

**But** — and this is critical — the agent's suggestions will only make sense *because you already know what to look for*. You'll be able to:
- Verify the agent didn't miss anything
- Add context the agent can't see
- Decide whether the agent's suggestions are correct

That's the power of "manual skill first, agent second." You're building that skill right now.

---

> ### Day 2 Amplifier — Agent Forge: `@pr-review`
>
> **Review at least two pull requests manually — using the techniques in this guide — before running `@pr-review`.** The agent generates a first-draft review: a line-numbered diff map, risk assessment, before/after snapshots, and suggested inline comments. Your job as reviewer is to read that draft, correct it, enrich it with context the diff cannot contain, and decide what is actually worth saying to the author.
>
> Once you have that manual foundation:
> - **In VS Code** — `@pr-review review PR #N` produces a structured, annotated review draft
> - **In your repo** — Agent Forge's review capabilities work in any repository you can access; fork `agent-forge` and those capabilities travel with your project
> - **In the cloud** — GitHub Agentic Workflows can auto-post PR summaries and accessibility impact assessments the moment a PR is opened, without anyone being online
>
> *The Accessible Diff Viewer teaches you to hear changes. The agent drafts the notes. You bring the judgment.*

---

*Next: [Issue Templates](15-issue-templates.md)*
*Back: [GitHub Copilot](13-github-copilot.md)*
*Related: [Screen Reader Cheat Sheet](appendix-b-screen-reader-cheatsheet.md) | [Merge Conflicts](06-merge-conflicts.md) | [Git & Source Control in VS Code](11-git-source-control.md)*
