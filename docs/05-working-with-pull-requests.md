# Working with Pull Requests
## Creating, Reviewing, and Merging Pull Requests with a Screen Reader

> Pull requests are where your work becomes a contribution. This guide takes you through the full pull request workflow — from opening one to participating in review — using only your keyboard and screen reader.
>
> **Screen reader note — New Files Changed Experience:** This guide uses GitHub's improved Files Changed experience, which adds proper ARIA landmark structure to the Files Changed tab, including the file tree and diff navigation. This feature may already be active for your account — it has been broadly rolled out and may no longer appear as a Feature Preview toggle at all.
>
> **To verify:** Activate the **User Menu** button (top-right of any GitHub page) → activate **"Feature preview"** → scan the list for **"New Files Changed Experience"**:
> - If listed and the toggle announces **"Pressed"** (or **"Disable"**) — already enabled, no action needed
> - If listed but **not Pressed** (or **"Enable"**) — activate the toggle to enable it
> - If not listed at all — the feature has graduated to the standard interface; it is active automatically
>
> Full step-by-step instructions with per-screen-reader commands are in [Pre-Workshop Setup, Step 4](00-pre-workshop-setup.md#6-step-4--check-github-feature-preview-settings).
>
> **Browse vs Focus Mode (NVDA):** Use **Browse Mode** (the default) for reading PR conversations, navigating headings, and reviewing diffs. Switch to **Focus Mode** (`NVDA+Space`) only when you need to type in comment boxes or search fields. Switch back to Browse Mode to resume navigation. Maximize your browser window for consistent landmark layout.

---

## What Is a Pull Request?

A pull request (PR) is a proposal to merge changes from one branch into another. When you have:
- Edited a file directly on GitHub (web editor)
- Made changes in your fork
- Made changes on a feature branch

...you open a PR to request that those changes be merged into the target branch (usually `main`).

A PR shows:
- **What** changed — a diff of every file
- **Why** it changed — your PR description
- **Conversation** — comments, reviews, and discussion
- **Status** — automated checks (CI/CD) and review status

---

## Navigating to Pull Requests

<details>
<summary>Visual / mouse users</summary>

Click the **Pull requests** tab in the repository navigation bar. The tab shows the count of open PRs. Click any PR title to open it.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS — Windows)</summary>

1. `D` → "Repository navigation" landmark
2. `K` to navigate tabs → "Pull requests, [N] open"
3. `Enter` to open

</details>

<details>
<summary>Screen reader users (VoiceOver — macOS)</summary>

1. `VO+U` → Landmarks → navigate to "Repository navigation"
2. Quick Nav `K` or `VO+Right` to navigate tabs → "Pull requests"
3. `VO+Space` to open

</details>

### From a PR notification:
If you received a notification about a PR, follow the notification link directly to the PR page.

---

## The Pull Request List Page

The PR list works identically to the Issues list:
- `3` to navigate PR titles (they are h3 headings)
- `I` to navigate list items
- `F` or `E` / `Shift+E` to reach the search/filter field
- Filters work the same as Issues: `is:open`, `author:@me`, `review-requested:@me`, etc.

> **Screen reader note — PR list semantics:** The PR list does **not** have individual ARIA item containers with per-item semantics. To read a PR's full detail (title, author, labels, status), you must navigate sequentially with `Tab` or arrow keys through the elements for each item. Starting from a PR title link, `Tab` forward to find the author, labels, and review status for that same PR before moving to the next title.
>
> **Hovercards:** Hovercards appear when you hover over usernames and links in the PR list, adding extra verbosity. To reduce this noise: go to your GitHub Profile → Accessibility settings → disable "Show link previews" and similar hover triggers. This makes sequential navigation significantly less cluttered.

---

## Anatomy of a Pull Request Page

A PR page has three main tabs:

```
[PR title — h1]
[State badge: Open / Merged / Closed / Draft]
[Author, base ← compare, timestamp]

[ Conversation ] [ Commits ] [ Files changed ]
                                ↑ tab bar landmark

─── Conversation Tab ────────────────────────────────────────
[PR description — authored by opener]
[Status checks summary]
[Activity / review thread]
  [Review comment — h3]
  [Line comments — nested]
[Merge controls (for maintainers)]
[Comment box]

─── Commits Tab ─────────────────────────────────────────────
[List of commits, grouped by date — h3 for dates]
[Each commit as a list item with SHA, message, author]

─── Files Changed Tab ────────────────────────────────────────
[File filter search]
[File tree (left panel)]
[Diff for each file — each file is a heading]
[Line-level comment threads within diffs]
```

---

## Navigating the PR Tab Bar

The Conversation, Commits, and Files changed tabs are in a “Pull request navigation tabs” landmark.

<details>
<summary>Visual / mouse users</summary>

The three tabs — **Conversation**, **Commits**, and **Files changed** — appear just below the PR title. Click the tab you want. The active tab is underlined. The count on **Files changed** shows how many files were modified.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS)</summary>

1. Press `D` → navigate to “Pull request navigation tabs”
2. Press `←` or `→` arrow keys to move between tab options
3. Press `Enter` to activate a tab

</details>

<details>
<summary>Screen reader users (VoiceOver)</summary>

1. `VO+U` → Landmarks → “Pull request navigation tabs”
2. `VO+Right` to move between tabs
3. `VO+Space` to activate

</details>

Each tab link reads with its name and the count: "Files changed, 3 files changed."

---

## Reading the Conversation Tab

### PR Description

1. `2` → navigate to "Description" h2 heading
2. `↓` to read the description
3. Markdown renders as semantic HTML — headings, lists, code blocks are fully accessible

### Status Checks Section

Below the description, the status checks summary shows whether automated tests passed. Look for:
- “All checks have passed” / “Some checks failed” / “Checks pending”
- A “Show all checks” button or link

<details>
<summary>Visual / mouse users</summary>

Status checks appear as a coloured banner below the PR description — green tick for passed, red X for failed, yellow spinner for running. Click **Show all checks** to expand the full list. Click a check name to go to its run log.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS — Windows)</summary>

1. Press `H` or `2` to find the "Checks" or "Status checks" heading
2. Press `K` to navigate links for individual check names
3. Press `Enter` on a check to see its details

</details>

<details>
<summary>Screen reader users (VoiceOver — macOS)</summary>

1. Quick Nav `H` or `VO+Cmd+H` to jump to the "Checks" or "Status checks" heading
2. Quick Nav `K` to navigate check name links
3. `VO+Space` on a check to see its details

</details>

See [GitHub Actions & Workflows](appendix-q-github-actions-workflows.md) for full guidance on reading status checks.

### Review Comments

Each review comment thread is an h3. Navigate with `3`:
- Hear the reviewer's username, timestamp, and their review verdict ("approved" or "requested changes")
- Then the body of their review comment
- Then any replies to that comment

To reply to a review comment:
```
Step 1: Navigate to the comment (3)
Step 2: Tab to "Reply…" link/button
Step 3: The reply text area appears — Focus Mode → type your reply
Step 4: Ctrl+Enter to submit
```

---

## Reading the Commits Tab

```
Step 1: Navigate to Commits tab (D → PR tabs → Enter)
Step 2: 3 to navigate date group headings ("Commits on April 20")
Step 3: I to navigate individual commits within a date group
Step 4: Each commit: SHA link, message, author, [Verified] badge if signed
Step 5: Enter on a commit to open its diff
```

---

## Reading the Files Changed Tab

This is the core of a code review. You will read diffs — the before/after state of every file that changed.

> **Note:** This guide uses GitHub's improved Files Changed experience. If your Files Changed tab doesn't match these steps, refer to the screen reader verification steps in the prerequisite callout at the top of this chapter — the feature may need to be enabled in Feature Preview, or it may already be active for your account with no action required.

### File Tree (left panel)

The file tree lists every changed file. Use it to jump directly to a specific file’s diff.

<details>
<summary>Visual / mouse users</summary>

The file tree panel is on the left side of the Files Changed tab. It lists every modified file. Click a filename to scroll the diff view to that file. You can collapse or expand folders by clicking the arrow. Type in the filter box at the top to narrow the file list.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS — Windows)</summary>

1. `D` → navigate to "File tree" region
2. `↑/↓` to navigate the file list
3. `Enter` to jump to that file's diff

</details>

<details>
<summary>Screen reader users (VoiceOver — macOS)</summary>

1. `VO+U` → Landmarks → navigate to "File tree" region
2. `VO+Down` to move through the file list
3. `VO+Space` to jump to that file's diff

</details>

### The Diff for a File

Each changed file has:
- A **file heading** (its path, e.g., "src/index.html") — navigable with `3` or `H`
- A **stats line** ("24 additions, 6 deletions")
- The **diff content** — a table where each row is one line of code

**Lines in a diff are read as:**
- `+ Added line` — line that was added
- `- Removed line` — line that was removed
- `Context line` — unchanged line shown for context

### Navigating the diff with a screen reader

<details>
<summary>Visual / mouse users</summary>

Each file’s diff shows added lines in green and removed lines in red. Scroll the page to read through changes. Unchanged context lines are shown in white/grey. Collapse a file’s diff by clicking the arrow next to its filename heading. Use `Ctrl+F` (browser Find) to search for specific text within visible diffs.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS)</summary>

1. `T` to jump to the next diff table
2. Switch to Focus Mode: `Insert+Space` (NVDA) or `Insert+Z` (JAWS)
3. `↓` to move through lines one by one
4. `Ctrl+Alt+→` to read across columns (line number | change type | content)
5. The screen reader reads: “+  Add accessible name to submit button”

</details>

<details>
<summary>Screen reader users (VoiceOver)</summary>

1. `T` or `VO+U` → Tables → select the diff table
2. `VO+Shift+Down` to enter the table
3. `VO+Right/Left` for columns, `VO+Up/Down` for rows

</details>

### Placing an inline comment on a diff line

<details>
<summary>Visual / mouse users</summary>

Hover over any line in the diff — a blue `+` button appears on the left margin. Click it to open a comment box for that line. Type your comment, then click **Add single comment** (posts immediately) or **Start a review** (batches the comment with others). To select a range of lines, click and drag across the line numbers on the left.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS — Windows)</summary>

1. Navigate to the specific line in the diff (using the table navigation above)
2. While focused on that line, a comment button appears — press `Enter` or `Space` to activate it
3. A comment box opens below the line
4. Focus Mode → type your comment
5. `Tab` to **Add single comment** button (instant comment) OR **Start a review** (to batch comments)

**Multi-line comment:**
1. Focus the first line you want to comment on
2. Press `Shift+↓` to extend the selection to additional lines
3. A comment button appears — activate it
4. The comment applies to the full range of selected lines

</details>

<details>
<summary>Screen reader users (VoiceOver — macOS)</summary>

1. Navigate to the specific line in the diff (using the table navigation above)
2. While focused on that line, `VO+Space` on the comment button that appears
3. A comment box opens below the line
4. `VO+Shift+Down` to interact with the text area, then type your comment
5. `VO+Shift+Up` to stop interacting, then `Tab` to **Add single comment** and `VO+Space`

**Multi-line comment:**
1. Focus the first line and `Shift+↓` to extend the selection
2. `VO+Space` on the comment button that appears
3. The comment applies to the full range of selected lines

</details>

### Viewing comments within the diff

Inline comments appear as expandable threads within the diff table. Navigate to them with `3` (they are h3 headings). Each thread shows the comment, any replies, and a "Reply" button.

---

## Opening a Pull Request

### From the web editor workflow (editing a file on GitHub)

1. You edited a file → GitHub showed a "Propose changes" form
2. You named your branch and activated "Propose changes"
3. GitHub redirected you to the "Open a pull request" page

### From a fork or feature branch

<details>
<summary>Visual / mouse users</summary>

1. Navigate to the repository on GitHub
2. If you recently pushed, a yellow banner “Compare & pull request” appears at the top — click it
3. If no banner appears: click the **Pull requests** tab → click the green **New pull request** button
4. Use the branch dropdowns to choose your **base** branch (what to merge into) and your **compare** branch (your changes)
5. Click **Create pull request**

</details>

<details>
<summary>Screen reader users (NVDA / JAWS — Windows)</summary>

1. Navigate to the repository
2. A "Compare & pull request" banner may appear (if you recently pushed) — activate it
3. OR: Navigate to Pull Requests tab → "New pull request"
4. Choose your base branch (what to merge into) and compare branch (your changes)

</details>

<details>
<summary>Screen reader users (VoiceOver — macOS)</summary>

1. Navigate to the repository
2. Check for a "Compare & pull request" banner — Quick Nav `B` to find and `VO+Space` to activate it
3. OR: navigate to Pull Requests tab (`VO+U` → Landmarks → Repository navigation) → Quick Nav `B` for "New pull request"
4. Use the branch dropdowns (`VO+Space` to open, arrow keys to select) to choose base and compare branches

</details>

### Filling out the PR form

**Title field:**
```
Step 1: F to navigate to the title field
Step 2: Focus Mode → type a descriptive title
Step 3: Good: "Add keyboard navigation for carousel component"
Step 4: Bad: "Fix bugs"
```

**Description field:**
```
Step 1: Tab to the body text area
Step 2: Focus Mode → type using the PR template (if provided)
```

If no template, use this structure:

```markdown
## Summary

What does this PR change and why?

## Changes

- Added `aria-label` to the search button
- Fixed keyboard trap in the modal dialog
- Replaced `<div>` with `<button>` for the dismiss control

## Related Issues

Closes #42

## Testing

- Tested with NVDA + Chrome on Windows 11
- Tested with VoiceOver + Safari on macOS Sonoma
- Keyboard-only navigation verified

## Screenshots / recordings

[Include if relevant — with descriptive alt text for any images]
```

**Setting a Draft PR:**
If your work is not finished, open as a Draft:
1. After filling in the form, find the dropdown arrow next to "Create pull request"
2. Select "Create draft pull request"
3. This signals to reviewers that it is not ready for formal review yet

### Draft Pull Requests — Full Lifecycle

A **draft pull request** is a PR explicitly marked as a work in progress. It is visible to the team, can receive comments, and runs CI — but is blocked from being merged until you mark it ready.

**When to use a draft:**
- You want to show your approach and get early feedback before finishing
- You need CI to run but don't want accidental merges
- You are working across multiple days and want your progress visible
- You want to pair with a collaborator on the work

**What a draft PR does differently:**
- The merge button is disabled — even an authorized maintainer cannot merge a draft
- The PR header shows a grey "Draft" badge instead of the green "Open" badge
- Reviewers are not auto-notified (no review requests are sent until ready)
- CI workflows still run normally

**Mark a draft ready for review:**
1. Open the PR
2. Navigate to the "Reviewers" sidebar or scroll to bottom of the Conversation tab
3. Find and activate the **"Ready for review"** button
4. The draft badge changes to "Open" and reviewers are notified

**Screen reader path:**
```
Scroll to bottom of Conversation tab
→ B to navigate buttons
→ "Ready for review" button → Enter
→ Confirmation: PR status changes to Open
```

**Convert an open PR to draft (after opening):**
1. In the right sidebar, find the "Reviewers" section
2. Look for the **"Convert to draft"** link (below the review status)
3. Confirm in the dialog — this removes merge eligibility until you mark it ready again

**Requesting reviewers:**
From the sidebar Reviewers section:
1. Navigate to "Reviewers" heading (`3` or `H`)
2. Activate the gear button
3. Type a username in the search field
4. Select from the dropdown
5. Escape to save

> **Why some reviews are requested automatically:** A file called `CODEOWNERS` in many repositories maps file paths to specific people or teams. When your PR touches a file covered by a CODEOWNERS rule, GitHub automatically adds those people as required reviewers — you'll see them appear in the Reviewers sidebar without you adding them. You cannot remove a CODEOWNERS-required reviewer. If a required reviewer hasn't responded, reach out to them directly or leave a comment on the PR.

---

## Submitting a Review

When you are asked to review a PR, you have three options:
- **Comment** — leave feedback without a verdict; does not block merging
- **Approve** — signal you are satisfied; often required before merge
- **Request changes** — indicate changes must be addressed; blocks merge until resolved

### Starting a review

On the Files Changed tab, when you add inline comments, choose "Start a review" instead of "Add single comment." This batches all your comments into one review submission.

### Completing and submitting a review

After adding your inline comments via “Start a review,” you must submit the review to notify the PR author. The review is pending until you submit it.

<details>
<summary>Visual / mouse users</summary>

1. Look for the **Finish your review** button in the top-right area of the Files Changed tab (it shows the number of pending comments)
2. Click it — a popover appears with a summary text area and three radio buttons: **Comment**, **Approve**, **Request changes**
3. Optionally type a summary comment
4. Select your verdict by clicking the radio button
5. Click **Submit review**

</details>

<details>
<summary>Screen reader users (NVDA / JAWS)</summary>

1. Press `1` to go to the h1 (PR title)
2. Press `B` (or `Tab`) to navigate to the **“Submit review”** button and activate it (`Enter`/`Space`)
3. A “Submit review” dialog/panel appears
4. Switch to Focus Mode (`NVDA+Space`) if prompted to type
5. Optionally type a summary comment in the “markdown value” textbox
6. `Tab` to the “Review Event” radio group
7. Use `↑/↓` to select one of:
   - **Comment** — general feedback, does not block merge
   - **Approve** — you are satisfied; signals merge readiness
   - **Request changes** — must be addressed before merge
8. `Tab` to the “Submit review” button and press `Enter`

</details>
<details>
<summary>Screen reader users (VoiceOver — macOS)</summary>

1. Quick Nav `H` or `VO+Cmd+H` to navigate to the PR title (h1)
2. Quick Nav `B` or `Tab` to find the **"Submit review"** button → `VO+Space`
3. A "Submit review" dialog/panel appears
4. `VO+Shift+Down` to interact with the summary text area, type an optional comment
5. `VO+Shift+Up` to stop interacting, then `Tab` to the "Review Event" radio group
6. `VO+Left/Right` or arrow keys to select:
   - **Comment** — general feedback, does not block merge
   - **Approve** — you are satisfied; signals merge readiness
   - **Request changes** — must be addressed before merge
7. `Tab` to the "Submit review" button → `VO+Space`

</details>
> **Tip from accessibility.github.com:** If you submitted comments as "Add single comment" instead of "Start a review," each comment is already posted individually. The "Submit review" flow is only needed when you chose "Start a review" to batch comments together.

### GitHub shortcuts for pull requests

These are the GitHub built-in shortcuts for PR pages. Enable Focus Mode first (NVDA: `NVDA+Space`, JAWS: `Insert+Z`) before using single-key shortcuts.

**On the PR list page:**

| Shortcut | Action |
|---|---|
| `G P` | Jump to the Pull Requests tab from anywhere in the repo |
| `C` | Create a new pull request |
| `Ctrl+/` (Win) or `Cmd+/` (Mac) | Focus the PR search bar |

**Shortcut note:** For `G P`, press `G`, release it, then press `P` (two sequential key presses, not simultaneous).

**On an open pull request:**

| Shortcut | Action |
|---|---|
| `?` | Show all shortcuts for this page |
| `Q` | Request a reviewer |
| `M` | Set a milestone |
| `L` | Apply a label |
| `A` | Set an assignee |
| `R` | Quote selected text in your reply |
| `Ctrl+Shift+P` | Toggle Write and Preview tabs in the comment box |
| `Ctrl+Enter` | Submit comment from inside the text area |

**On the Files Changed tab:**

| Shortcut | Action |
|---|---|
| `T` | Jump to the "Filter changed files" field |
| `C` | Open the commits dropdown to filter which commits are shown |
| `Ctrl+G` (Win) or `Cmd+G` (Mac) | Insert a code suggestion block around selected code |
| `Ctrl+Shift+Enter` (Win) or `Cmd+Shift+Enter` (Mac) | Submit a review comment |

For the full shortcut system, see [Screen Reader Cheat Sheet — GitHub Shortcuts section](appendix-b-screen-reader-cheatsheet.md#github-built-in-keyboard-shortcuts).

### Suggested Changes

A **suggested change** is a special form of inline review comment where the reviewer proposes exact replacement text. The PR author can apply the suggestion directly from GitHub — no copy-paste or separate commit needed.

**As a reviewer — inserting a suggestion:**
1. On the Files Changed tab, navigate to the line you want to propose a change for
2. Activate the **line comment button** for that line (the `+` that appears on hover, or Tab to navigate to it)
3. In the comment text area that opens, press `Ctrl+G` (Windows) or `Cmd+G` (Mac)
4. GitHub wraps a suggestion block around the current line content:
   ````
   ```suggestion
   the current line content here
   ```
   ````
5. Edit the text inside the suggestion block to show your proposed change
6. Add context above the block if helpful: "This makes the alt text more descriptive:"
7. Submit as part of your review ("Start a review" → batch with other comments)

**Screen reader note:** The suggestion block is plain Markdown text in the comment editor. Type it directly:
```
```suggestion
your proposed text here
```
```
(Three backticks, the word `suggestion`, Enter, your text, Enter, three backticks.)

**As an author — applying a suggestion:**
1. Open the PR Conversation or Files Changed tab
2. Navigate to the inline comment containing a suggestion (it shows a diff-style preview)
3. Find and activate the **"Apply suggestion"** button below the suggestion block
4. GitHub creates a commit automatically that applies the change — no file editing required
5. The conversation thread is marked as resolved

**Batching multiple suggestions into one commit:**
1. For each suggestion you want to apply, activate **"Add suggestion to batch"** instead of "Apply suggestion"
2. After selecting all suggestions, activate the **"Commit suggestions"** button that appears at the top
3. GitHub applies all batched suggestions in a single commit

**When to use suggestions vs. comments:**
- Use a suggestion when you know the exact text that would fix the issue
- Use a plain comment when the change requires judgment from the author (e.g., "this alt text isn't descriptive — can you describe what the image shows?")

1. After adding all your inline comments, navigate to the review summary button
2. On Files Changed tab: find the "Review changes" button (B to navigate buttons)
3. Press Enter to open the review dialog
4. A panel opens:
   - A summary text area for overall comments
   - Radio buttons for Comment / Approve / Request changes
5. Switch to Focus Mode → type your summary comment
6. Navigate to the radio buttons with arrow keys → select your verdict
7. Tab to "Submit review" button → Enter

---

## Understanding Merge Options (for Maintainers)

When a PR is approved and checks pass, a maintainer can merge it. The merge button section appears at the bottom of the Conversation tab.

```
Step 1: Navigate to the bottom of the Conversation tab
Step 2: Find "Merge pull request" button (or similar)
Step 3: A dropdown arrow next to the button offers strategy options:
   - Create a merge commit
   - Squash and merge
   - Rebase and merge
Step 4: Choose strategy → activate the button
Step 5: Confirm in the dialog that appears
```

**After a PR is merged:**
- The PR status badge changes to "Merged" (purple)
- The source branch can be deleted — a "Delete branch" button appears
- Any linked issues with `Closes #N` in the description are automatically closed

---

## Auto-Merge — Merging When You Can't Wait Around

**Auto-merge** lets you pre-authorize a PR to merge automatically the moment all branch protection requirements are satisfied — required reviews approved, all status checks passing, and the branch up to date.

This is especially useful when:
- You've addressed all review comments and are waiting for CI to finish
- A maintainer has approved the PR but a required check is still running
- You're in a different time zone from the reviewers

### Enabling Auto-Merge on Your PR

```
1. Open your PR → scroll to the merge box at the bottom
2. Tab to the merge button dropdown arrow (next to "Merge pull request")
3. Select "Enable auto-merge"
4. Choose your merge strategy (squash, rebase, or merge commit)
5. Confirm in the dialog — the merge box now shows "Auto-merge enabled"
```

**Screen reader path:**
```
Conversation tab → End key → merge box region
Tab → dropdown button (announced as "Select merge method" or similar)
Enter → arrow keys through options → "Enable auto-merge" → Enter
Dialog: Tab → confirm button → Enter
```

**What happens next:**
- The PR merge box changes to show "Auto-merge enabled — merge will happen automatically"
- When the last required check passes (or last required review arrives), GitHub merges the PR silently
- You receive a notification: "Your PR was automatically merged"
- If a reviewer requests changes after auto-merge is enabled, auto-merge is automatically cancelled (a new approval is required before it re-enables)

### Cancelling Auto-Merge

```
Merge box → Tab → "Disable auto-merge" button → Enter
```

> **Note:** Auto-merge is only available if the repository administrator has enabled it in Settings → General. Many open source repos have it on; some do not.

---

## Practical Scenarios

### Scenario A: "I want to review an assigned PR"

```
1. Notifications → open the PR notification
2. D → PR tabs → Files changed tab
3. T → enter the first diff table → navigate lines with arrow keys
4. For each concern: activate the line comment button → type comment → Start a review
5. D → PR tabs → Conversation → scroll to bottom
6. B → "Review changes" button → type summary → select verdict → Submit review
```

### Scenario B: "I want to respond to review feedback on my PR"

```
1. Open your PR (Notifications → PR link, or find it in PR list)
2. 3 to navigate review comments
3. For each comment: read it → Tab to "Reply" → Focus Mode → type response
4. If you made a fix in code: reference the commit in your reply
5. When all addressed: Tab to "Re-request review" button → Enter
```

### Scenario C: "My PR has a merge conflict"

```
1. You will see a "This branch has conflicts that must be resolved" message near the bottom
2. Tab to "Resolve conflicts" button → GitHub opens a web conflict editor
3. The editor shows conflict markers — see Merge Conflicts guide (06-merge-conflicts.md)
4. Edit the file to resolve → Mark as resolved → Commit merge
```

---

## Common PR Mistakes to Avoid

| Mistake | Better Approach |
|---------|----------------|
| Opening a PR without an associated issue | Link to or create an issue first; comment "I'd like to work on this" |
| A vague title like "Fix things" | Be specific: "Fix missing alt text on homepage hero image" |
| Missing the PR template sections | Fill all sections — description, testing, related issues |
| Pushing many unrelated changes in one PR | One PR per logical change (smaller PRs get faster reviews) |
| Not testing your own changes | Test before requesting review |
| Not responding to reviewer comments | Acknowledge all comments, even if you disagree |

---

## Try It: Read a Real Pull Request

**Time:** 3 minutes | **What you need:** Browser, signed in to GitHub

Go to the Learning Room repository's Pull Requests tab and find any open or recently closed PR:

1. Navigate to Pull Requests (`G` then `P` in Focus Mode)
2. Open the first PR in the list (press `Enter` on its title)
3. **Read the description** — press `2` to jump to the first section heading, then arrow down to read
4. **Check the conversation** — press `3` to jump between comments. Read what the reviewer said and how the author responded.
5. **Look at the diff** — press `D` to the "Pull request tabs" landmark, then navigate to "Files changed" and press `Enter`. Press `H` to scan the changed file headings.

**You're done.** You just read a complete PR — description, conversation, and code changes.

> **What success feels like:** You followed a PR from description to diff using only headings and landmarks. The next time you open a PR — yours or someone else's — you'll know exactly where everything is.

---

> ### Day 2 Amplifier — Agent Forge: `@pr-review`
>
> **Review at least two pull requests manually before using any agent.** A review generated by `@pr-review` is only as useful as your ability to read, edit, and challenge it. The agent writes a first draft — you supply the context, the history, and the final judgment that no diff can contain.
>
> Once you have mastered manual pull request review:
> - **In VS Code** — `@pr-review review PR #N` generates line-numbered diffs with change maps, risk assessment, before/after snapshots, CI results, and suggested inline comments — a documented starting point for your own review, not a replacement for it
> - **In your repo** — Agent Forge's review capabilities work across every repository you have access to by default; fork `agent-forge` and those capabilities travel with your project from day one
> - **In the cloud** — GitHub Agentic Workflows can auto-generate PR descriptions, verify linked issues, and post accessibility impact summaries on a `pull_request` trigger — running the moment a PR is opened, whether or not anyone is watching
>
> *The agent documents the diff. You bring the context that no diff can contain.*

---

*Next: [Merge Conflicts](06-merge-conflicts.md)*
*Back: [Working with Issues](04-working-with-issues.md)*
*Related: [Accessible Code Review](14-accessible-code-review.md) | [Screen Reader Cheat Sheet](appendix-b-screen-reader-cheatsheet.md) | [Culture & Etiquette](07-culture-etiquette.md) | [GitHub Actions](appendix-q-github-actions-workflows.md)*
