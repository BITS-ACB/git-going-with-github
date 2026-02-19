# GitHub Pull Requests Extension
## Managing Pull Requests from VS Code

> **Day 2, Block 2 Material**
>
> This guide covers the GitHub Pull Requests and Issues extension: viewing open PRs, checking out PR branches for local testing, reviewing PRs with screen reader-accessible tools, creating PRs directly from VS Code, using PR templates, and syncing PR status with GitHub.
>
> **Prerequisites:** [Working with Pull Requests](05-working-with-pull-requests.md), [Git & Source Control in VS Code](11-git-source-control.md)

> **Mac keyboard shortcuts:** Throughout this chapter, all `Ctrl+` shortcuts use `Cmd+` on Mac, and `Alt+` shortcuts use `Option+` on Mac. For example: `Ctrl+Shift+P` → `Cmd+Shift+P`, `Ctrl+Shift+G` → `Cmd+Shift+G`, `Alt+F2` → `Option+F2`. Context menus (`Shift+F10` on Windows) use `Ctrl+Return` on Mac.

---

## Table of Contents

1. [Installing the GitHub Pull Requests Extension](#1-installing-the-github-pull-requests-extension)
2. [Viewing Pull Requests](#2-viewing-pull-requests)
3. [Checking Out a Pull Request Branch](#3-checking-out-a-pull-request-branch)
4. [Reviewing Pull Requests in VS Code](#4-reviewing-pull-requests-in-vs-code)
5. [Creating a Pull Request from VS Code](#5-creating-a-pull-request-from-vs-code)
6. [Pull Request Description Templates](#6-pull-request-description-templates)
7. [Commenting and Requesting Changes](#7-commenting-and-requesting-changes)
8. [Merging Pull Requests](#8-merging-pull-requests)

---

## 1. Installing the GitHub Pull Requests Extension

The GitHub Pull Requests and Issues extension integrates GitHub's PR workflow directly into VS Code — no browser tab switching required.

### Installation Steps

**Method 1: Extensions Sidebar**

1. Open Extensions sidebar: `Ctrl+Shift+X` (Mac: `Cmd+Shift+X`)
2. Type "GitHub Pull Requests" in the search box
3. Find "GitHub Pull Requests and Issues" (publisher: GitHub)
4. Navigate to the extension in the results list
5. Press `Enter` to open the extension detail page
6. `Tab` to "Install" button → press `Enter`

**Method 2: Command Palette**

1. `Ctrl+Shift+P`
2. Type "install extensions"
3. Select "Extensions: Install Extensions"
4. Search for "GitHub Pull Requests"
5. Install "GitHub Pull Requests and Issues"

**Screen reader note:** The Extensions sidebar is a tree view. Use `Up/Down Arrow` to navigate, `Enter` to open an extension's detail page.

### Signing In to GitHub

After installation, VS Code prompts you to sign in:

1. A notification appears: "Sign in to GitHub to use Pull Requests"
2. Navigate to the notification (`Alt+N` / Mac: `Option+N`, or status bar navigation)
3. Select "Sign in"
4. VS Code opens your browser for GitHub OAuth authentication
5. Authorize VS Code in the browser
6. Return to VS Code — you're now signed in

**Verify sign-in:**
- Open Command Palette: `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`)
- Type "GitHub Pull Requests: Sign in"
- If already signed in, the option shows "Sign out" instead

### What the Extension Adds

After installation, you gain:

- **GitHub view in the Activity Bar** (sidebar icon that looks like the GitHub logo)
- **Pull Requests and Issues tree** in the Explorer
- **PR creation commands** in the Command Palette
- **Inline PR review features** in the editor
- **Issue linking** when writing commit messages

---

## 2. Viewing Pull Requests

### Opening the GitHub Pull Requests Panel

**Method 1: Activity Bar**

<details>
<summary>Visual / mouse users</summary>

Click the **GitHub logo icon** in the Activity Bar (the vertical strip of icons on the far left). It's usually the 5th or 6th icon. The GitHub Pull Requests panel opens.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS / VoiceOver)</summary>

1. The Activity Bar is not always reachable by `Tab` from the editor
2. Use `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`) → type "GitHub Pull Requests: View Pull Request" or "Focus on Pull Requests View" → press `Enter`
3. Alternatively press `Ctrl+Shift+G` (Mac: `Cmd+Shift+G`) to open Source Control, then `Tab` until you reach the Activity Bar icon strip

The GitHub view opens, showing:
- "Pull Requests"
- "Issues"

</details>

**Method 2: Explorer Section**

1. Open Explorer: `Ctrl+Shift+E` (Mac: `Cmd+Shift+E`)
2. Navigate with `Arrow` keys to find the "GitHub Pull Requests" section
3. Expand it with `Right Arrow`

### Pull Request Tree Structure

```
GitHub Pull Requests
├── My Pull Requests
│   ├── Assigned to Me
│   ├── Created by Me
│   ├── Waiting for my Review
│   └── All Open
├── [Repository Name]
│   ├── Local Pull Request Branches (checked out locally)
│   ├── All Open Pull Requests
│   └── All Closed Pull Requests
```

**Screen reader announcement example:**
"Pull Request #42: Add Timeline Guide, opened by jeffb, 2 days ago, 3 files changed"

### Filtering PR Lists

**By status:**
- "All Open" — every open PR
- "Assigned to Me" — PRs where you're an assignee
- "Waiting for my Review" — PRs where you're requested as reviewer
- "Draft" — PRs marked as work-in-progress

**By repository:**
The tree organizes PRs by repository. Expand a repo to see its PRs.

### Viewing PR Details

1. Navigate to a PR in the tree
2. Press `Enter`

A PR detail view opens in the editor area showing:
- PR title and number
- Author and creation date
- Status (Open, Merged, Closed)
- Description (full Markdown with inline rendering)
- Reviewers and their status (Approved, Requested Changes, Pending)
- Checks (CI status: passing, failing, pending)
- Files changed (clickable list)
- Comments timeline

**Screen reader experience:**
- The detail view is Markdown-rendered HTML
- Use standard screen reader reading commands (`Arrow` keys in NVDA/JAWS virtual mode)
- Headings mark each section ("Description", "Reviewers", "Files Changed", "Comments")
- Links are clickable with `Enter`

---

## 3. Checking Out a Pull Request Branch

**Checking out a PR** means downloading its branch to your local machine so you can test it, review it interactively, or add commits to it.

### Why Check Out a PR

- **Test functionality:** Run the code locally to verify it works
- **Review with full context:** See the changes in your editor with full file access
- **Make suggestions:** Add commits to someone else's PR (if you have write access)
- **Verify accessibility:** Test with your screen reader to ensure changes don't break navigation

### How to Check Out a PR

**Method 1: From the PR Detail View**

1. Open a PR (see Section 2)
2. In the PR detail view, navigate to "Checkout" button
3. Press `Enter`

VS Code:
- Downloads the branch
- Switches your local repository to that branch
- Opens the changed files in the editor

**Method 2: From the PR Tree**

1. Navigate to the PR in the GitHub Pull Requests tree
2. Press `Shift+F10` (Mac: `Ctrl+Return`) to open context menu
3. Select "Checkout Pull Request"

**Method 3: Command Palette**

1. `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`)
2. Type "GitHub Pull Requests: Checkout"
3. Select "GitHub Pull Requests: Checkout Pull Request"
4. Choose the PR from the list

**Screen reader note:** After checkout, the bottom-left status bar shows the branch name (example: "jeffb/add-timeline-guide"). Your local files now match that branch.

### Returning to Your Original Branch

After reviewing:

1. `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`)
2. Type "git checkout"
3. Select "Git: Checkout to..."
4. Choose your original branch (usually `main` or your feature branch)

---

## 4. Reviewing Pull Requests in VS Code

Once you've checked out a PR (or opened it in the detail view), you can review its changes fully within VS Code.

### Reading the Files Changed List

**In the PR detail view:**

1. Scroll down to "Files Changed" section
2. Each file is a link
3. Navigate with `Arrow` keys
4. Press `Enter` on a file to open its diff view

**Screen reader announcement:**
"docs/11-vscode-basics.md, 42 additions, 3 deletions"

### Understanding the Diff View

When you open a file from "Files Changed":

**Split view mode (default):**
- Left side: original file (before changes)
- Right side: modified file (after changes)
- Changed lines highlighted (added = green, removed = red)

**Inline view mode:**
- Single editor
- Removed lines shown with `-` prefix
- Added lines shown with `+` prefix

**To toggle between views:**
- Command Palette: `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`) → "Diff: Toggle Inline View"

### Screen Reader Diff Review with Accessible Diff Viewer

**Recommended workflow for screen reader users:**

1. Open a changed file from the PR detail view
2. Press `F7` to jump to the first diff hunk
3. Press `Alt+F2` (Mac: `Option+F2`) to open Accessible View
4. Read the hunk content:
   - Unchanged lines (for context)
   - Removed lines (prefixed with `-`)
   - Added lines (prefixed with `+`)
5. Press `Escape` to close Accessible View
6. Press `F7` to jump to the next hunk
7. Repeat until all hunks reviewed

**Example Accessible Diff output:**

```
Hunk 1 of 3 — lines 12 to 18
  Unchanged: ## VS Code Setup
- Removed: This guide covers VS Code basics.
+ Added: This guide covers VS Code basics and accessibility features.
  Unchanged:
  Unchanged: **Prerequisites:** Day 1 completion
```

**This structured reading is far superior to navigating the visual diff manually.**

> **VS Code October 2025 update:** Deleted lines (shown with the `-` prefix) are now fully selectable and copyable in the diff editor. Previously, deleted code could only be read, not selected. This is useful when you want to copy a deleted function signature, old variable name, or removed text for reference while writing your review comment.

### Flagging Issues During Review

As you review, note any problems:

1. Navigate to the specific line in the diff
2. Press `Shift+F10` (Mac: `Ctrl+Return`) for context menu
3. Select "Add Comment"
4. Type your comment in the input that appears
5. Choose "Single Comment" or "Start Review"

**Single Comment** posts immediately.  
**Start Review** saves your comments as a draft until you submit the full review (see Section 7).

---

## 5. Creating a Pull Request from VS Code

After you've pushed commits to a feature branch, you can create a PR without leaving VS Code.

### Prerequisites

1. You've created a branch (see [Git & Source Control: Branch Management](11-git-source-control.md#3-branch-management))
2. You've made commits
3. You've pushed the branch to GitHub (`Ctrl+Shift+P` / Mac: `Cmd+Shift+P` → "Git: Push")

### Creating the PR

**Method 1: Command Palette (Recommended)**

1. `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`)
2. Type "GitHub Pull Requests: Create"
3. Select "GitHub Pull Requests: Create Pull Request"
4. A form opens in the editor

**Method 2: Source Control Panel**

1. Open Source Control: `Ctrl+Shift+G` (Mac: `Cmd+Shift+G`)
2. After pushing, a "Create Pull Request" button appears
3. Press `Enter` on that button

**Method 3: GitHub Panel**

1. Open GitHub view (Activity Bar → GitHub icon)
2. Right-click your branch in the tree
3. Select "Create Pull Request"

### Filling Out the PR Form

The form has these fields:

**Title (required):**
- Auto-filled with your most recent commit message
- Edit to make it descriptive (example: "Add Timeline View documentation")

**Description (optional but recommended):**
- Explain what changed and why
- Reference the issue you're fixing: "Fixes #42"
- If a PR template exists, VS Code loads it here (see Section 6)
- **Copilot-assisted description:** An AI sparkle icon in the description toolbar lets you generate a description from your commits. When a PR template exists, Copilot fills in the template sections intelligently rather than replacing the template — it populates the checklist items and description sections with content derived from your changes.

**Base branch (target):**
- Usually `main` or `develop`
- This is the branch your changes will merge into

**Compare branch (source):**
- Your feature branch (auto-selected)
- This is the branch with your changes

**Reviewers (optional):**
- Select people to review your PR
- Navigate the list with `Arrow` keys

**Labels (optional):**
- Add labels like `documentation`, `accessibility`, `good-first-issue`

**Milestone (optional):**
- Link the PR to a project milestone

**Draft PR checkbox:**
- Check this if the PR is not ready for review yet
- Unchecked = "Ready for review"

**Screen reader navigation:**
- All fields are standard form inputs
- `Tab` to move between fields
- Use `Arrow` keys in dropdowns (reviewers, labels, milestones)

### Submitting the PR

1. Review all fields
2. `Tab` to "Create" button
3. Press `Enter`

VS Code creates the PR on GitHub and shows a success message. The PR link appears in the notification — click it to open the PR on GitHub, or open it in the GitHub Pull Requests panel.

---

## 6. Pull Request Description Templates

Many repositories include a **PR template** — a Markdown file that pre-fills the PR description with a checklist or structure.

### Where Templates Are Stored

Common locations:
- `.github/pull_request_template.md` (root)
- `.github/PULL_REQUEST_TEMPLATE.md`
- `.github/PULL_REQUEST_TEMPLATE/` (folder with multiple templates)
- `docs/pull_request_template.md`

When you create a PR in VS Code, the extension automatically loads the template into the description field.

### Example PR Template

```markdown
## Description
<!-- Briefly describe what this PR changes and why -->

## Related Issue
<!-- Link to the issue this PR fixes: Fixes #123 -->

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Accessibility improvement

## Testing
<!-- How did you test these changes? -->

## Checklist
- [ ] My code follows the project's style guidelines
- [ ] I have tested with a screen reader (NVDA, JAWS, or VoiceOver)
- [ ] I have updated the documentation
- [ ] All new and existing tests pass
- [ ] I have linked this PR to the related issue

## Screenshots (if applicable)
<!-- Add screenshots or screen recordings -->
```

### Filling Out a Template

**Screen reader workflow:**

1. Create PR (Method 1-3 from Section 5)
2. The description field is pre-filled with the template
3. Navigate through the template with `Arrow` keys
4. Replace each `<!-- comment -->` with your content
5. Check checkboxes by typing `x` between the brackets: `- [x]`

**Keyboard tip:** Use `Ctrl+F` (Mac: `Cmd+F`) to jump to each `<!--` placeholder, fill it in, then `F3` to jump to the next one.

---

## 7. Commenting and Requesting Changes

When reviewing a PR, you can:
- Leave inline comments on specific lines
- Request changes before the PR can be merged
- Approve the PR
- Submit general feedback

### Adding an Inline Comment

1. Open a file from the PR's "Files Changed" list
2. Navigate to the line you want to comment on
3. Press `Shift+F10` (Mac: `Ctrl+Return`) to open context menu
4. Select "Add Comment"
5. Type your comment
6. Choose "Add Single Comment" (posts immediately) or "Start Review" (saves as a draft)

**Comment format tips:**
- Be specific: "This heading should be H3, not H2"
- Provide context: "Screen readers announce this as 'list with 1 item' — should be a paragraph instead"
- Suggest a fix: "Consider rewording to: 'Click the button to save'"

### Starting a Review

**If you have multiple comments to make, use "Start Review":**

1. Add your first inline comment → select "Start Review"
2. Continue adding comments to other lines
3. All comments are saved as drafts (not visible to others yet)

### Submitting Your Review

When you've reviewed all files:

1. `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`)
2. Type "GitHub Pull Requests: Submit Review"
3. Select "GitHub Pull Requests: Finish Review"
4. Choose review type:
   - **Comment** — general feedback, no approval decision
   - **Approve** — PR looks good, ready to merge
   - **Request Changes** — issues must be fixed before merging
5. Optionally add a summary comment
6. Press `Enter` to submit

**Screen reader note:** The review type selector is a radio button group. Use `Arrow` keys to choose, `Enter` to confirm.

### What Happens After Submission

- All your draft comments post to GitHub
- The PR author receives a notification
- Your review status appears on the PR (Approved / Changes Requested / Commented)
- If you requested changes, the PR cannot merge until you approve it

---

## 8. Merging Pull Requests

**Who can merge:** Repository maintainers, or contributors with write access.

### Prerequisites for Merging

Before merging, verify:
1. All required reviews are approved
2. All CI checks pass (green checkmarks)
3. No merge conflicts exist
4. Branch is up to date with base branch (main)

**Changing the base branch:** If the PR was opened against the wrong base branch, you can change it from the PR detail view in VS Code. Scroll to the base branch field in the PR detail view and activate the dropdown to select a different target branch. This saves opening the PR on GitHub.com.

**Converting to/from draft:** You can also convert a ready PR back to a draft (or mark a draft as ready for review) directly from the PR detail view. Scroll to the Status section and use the context menu on the PR title or the "..." more actions button.

### Merging from VS Code

**Method 1: PR Detail View**

1. Open the PR in VS Code
2. Scroll to the bottom of the PR detail view
3. Find "Merge Pull Request" button
4. Press `Enter`
5. Choose merge type (see below)
6. Confirm

**Method 2: Command Palette**

1. `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`)
2. Type "GitHub Pull Requests: Merge"
3. Select "GitHub Pull Requests: Merge Pull Request"
4. Choose the PR from the list
5. Select merge type
6. Confirm

### Merge Types

| Type | What It Does | When to Use |
|------|-------------|------------|
| **Merge Commit** | Creates a merge commit preserving all branch commits | Default for most projects; preserves full history |
| **Squash and Merge** | Combines all commits into one before merging | Cleans up messy commit history; common for feature branches |
| **Rebase and Merge** | Replays commits onto base branch without a merge commit | Creates linear history; requires clean commit messages |

**Screen reader note:** The merge type selector is a dropdown or radio group. Navigate with `Arrow` keys, confirm with `Enter`.

**Which merge type to use:**
- Check the repository's CONTRIBUTING.md for guidance
- If unsure, use **Merge Commit** (the default and safest option)

### After Merging

1. The PR closes automatically
2. The feature branch can be deleted (VS Code prompts: "Delete branch?")
3. Recommended: switch back to `main` and pull the merged changes

**Switching to main and pulling:**

```
Ctrl+Shift+P → "Git: Checkout to..." → select "main"
Ctrl+Shift+P → "Git: Pull"
```

*(Mac users: use `Cmd+Shift+P` instead of `Ctrl+Shift+P`)*

### Deleting the Feature Branch

After merging, the feature branch is no longer needed:

1. `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`)
2. Type "git delete branch"
3. Select "Git: Delete Branch..."
4. Choose the merged branch

This deletes the branch locally. To delete it on GitHub too:

1. `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`)
2. Type "git push"
3. Select "Git: Push (delete remote branch)"

---

## Keyboard Shortcuts — GitHub Pull Requests Extension

| Action | Windows | Mac |
|--------|---------|-----|
| Open GitHub view | Activity Bar → GitHub icon → `Enter` | Activity Bar → GitHub icon → `Enter` |
| Create Pull Request | `Ctrl+Shift+P` → "GitHub Pull Requests: Create" | `Cmd+Shift+P` → "GitHub Pull Requests: Create" |
| Checkout PR | `Ctrl+Shift+P` → "GitHub Pull Requests: Checkout" | `Cmd+Shift+P` → "GitHub Pull Requests: Checkout" |
| Submit Review | `Ctrl+Shift+P` → "GitHub Pull Requests: Finish Review" | `Cmd+Shift+P` → "GitHub Pull Requests: Finish Review" |
| Merge PR | `Ctrl+Shift+P` → "GitHub Pull Requests: Merge" | `Cmd+Shift+P` → "GitHub Pull Requests: Merge" |
| Add inline comment | `Shift+F10` (in diff view) → "Add Comment" | `Ctrl+Return` (in diff view) → "Add Comment" |
| Navigate diff hunks | `F7` (next), `Shift+F7` (previous) | `F7` (next), `Shift+F7` (previous) |
| Accessible Diff Viewer | `Alt+F2` (in diff view) | `Option+F2` (in diff view) |

---

## Troubleshooting

### "No pull requests found"

**Issue:** The GitHub Pull Requests panel is empty.

**Solutions:**
1. Verify you're signed in: `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`) → "GitHub Pull Requests: Sign in"
2. Check you have a folder open containing a Git repository
3. Refresh the panel: `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`) → "GitHub Pull Requests: Refresh Pull Requests List"

### "Could not create pull request"

**Issue:** PR creation fails.

**Solutions:**
1. Verify you've pushed your branch: `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`) → "Git: Push"
2. Check you have write access to the repository
3. Ensure your branch is ahead of the base branch (has new commits)

### "Authentication failed"

**Issue:** VS Code can't connect to GitHub.

**Solutions:**
1. Sign out and sign back in: `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`) → "GitHub Pull Requests: Sign out" → then sign in again
2. Check your GitHub Personal Access Token (see [Appendix D: Git Authentication](appendix-d-git-authentication.md))
3. Verify network connection

---

## Try It: Review a PR from VS Code

**Time:** 3 minutes | **What you need:** VS Code with GitHub Pull Requests extension installed and signed in

1. **Open the PR view** — Press `Ctrl+Shift+P` → type `Pull Requests: Focus on GitHub Pull Requests View` → `Enter`.
2. **Find a PR** — Navigate the tree with arrow keys. Expand a PR to see its changed files.
3. **Open a diff** — Press `Enter` on a changed file. The diff editor opens.
4. **Use the Accessible Diff Viewer** — Press `F7` to jump to the first change. Your screen reader announces what was added or removed. Press `F7` again to move to the next change.
5. **Leave a comment** — Position your cursor on a line you want to comment on, then press `Ctrl+Shift+P` → `Pull Request: Add Comment on Current Diff Line`. Type a brief, constructive comment and submit.

**You're done.** You just reviewed a pull request entirely from VS Code.

> **What success feels like:** You read a diff, heard the changes announced by your screen reader, and left feedback — all without opening a browser. This is how many developers review code every day.

---

*Next: [GitHub Copilot](13-github-copilot.md)*  
*Back: [Git & Source Control in VS Code](11-git-source-control.md)*  
*Related: [Working with Pull Requests](05-working-with-pull-requests.md) | [Issue Templates](15-issue-templates.md)*
