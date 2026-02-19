# Git & Source Control in VS Code
## Managing Repositories, Branches, and Changes Accessibly

> **Day 2, Block 1-2 Material**
>
> This guide covers all Git operations in VS Code: cloning repositories, navigating the Source Control panel with screen readers, branch management, staging changes (including individual lines), push/pull operations, viewing file history with Timeline, resolving merge conflicts, and stash management.
>
> **Prerequisites:** [VS Code Setup & Accessibility Basics](10-vscode-basics.md), [Working with Pull Requests](05-working-with-pull-requests.md), [Merge Conflicts](06-merge-conflicts.md)

> **Mac keyboard shortcuts:** Throughout this chapter, all `Ctrl+` shortcuts use `Cmd+` on Mac, and `Alt+` shortcuts use `Option+`. Common equivalents: `Ctrl+Shift+G` → `Cmd+Shift+G`, `Ctrl+Shift+P` → `Cmd+Shift+P`, `Ctrl+Enter` → `Cmd+Enter`, `Ctrl+S` → `Cmd+S`.

---

## Table of Contents

1. [Cloning a Repository in VS Code](#1-cloning-a-repository-in-vs-code)
2. [The Source Control Panel — Complete Walkthrough](#2-the-source-control-panel--complete-walkthrough)
3. [Branch Management](#3-branch-management)
4. [Staging Changes — Files, Lines, and Chunks](#4-staging-changes--files-lines-and-chunks)
5. [Committing with Screen Readers](#5-committing-with-screen-readers)
6. [Push and Pull Operations](#6-push-and-pull-operations)
7. [Discarding Changes](#7-discarding-changes)
8. [Timeline View — File History and Blame](#8-timeline-view--file-history-and-blame)
9. [Resolving Merge Conflicts in VS Code](#9-resolving-merge-conflicts-in-vs-code)
10. [Stash Management](#10-stash-management)
11. [Emergency Recovery — git reflog](#10b-emergency-recovery--git-reflog)
12. [Alternative Git Interfaces](#11-alternative-git-interfaces)

---

## 1. Cloning a Repository in VS Code

**Three ways to clone a repository:**

### Method 1: Command Palette (Recommended for Screen Readers)

1. Open Command Palette: `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`)
2. Type "git clone"
3. Select "Git: Clone"
4. Paste the repository URL (example: `https://github.com/accesswatch/agent-forge.git`)
5. Press `Enter`
6. Choose a local folder where the repository should be cloned
7. VS Code asks: "Would you like to open the cloned repository?" — select "Open"

**Screen reader navigation:**
- The Command Palette is a searchable list — type to filter, `Up/Down Arrow` to navigate results
- The folder picker is a standard file dialog — navigate with `Arrow` keys, `Enter` to select

### Method 2: Start Page Clone Button

1. Open VS Code (no folder open)
2. The Start page appears
3. Navigate to "Clone Git Repository" button — press `Enter`
4. Paste repository URL → `Enter`
5. Choose destination folder
6. Open when prompted

**Screen reader note:** The Start page is keyboard-accessible. `Tab` to navigate between "New File," "Open Folder," and "Clone Repository" buttons.

### Method 3: From GitHub.com

1. On any GitHub repository page, click the green "Code" button
2. Copy the HTTPS URL (recommended) or SSH URL
3. Open VS Code → `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`) → "Git: Clone"
4. Paste URL → `Enter`
5. Choose destination → Open

**Why HTTPS over SSH for this workshop:** HTTPS works immediately with no setup. SSH requires key generation and configuration (see [Appendix D: Git Authentication](appendix-d-git-authentication.md) for SSH setup).

---

## 2. The Source Control Panel — Complete Walkthrough

The Source Control panel (`Ctrl+Shift+G` — Mac: `Cmd+Shift+G`) is where all Git operations happen in VS Code. This section provides a complete screen reader walkthrough of every interactive element.

### Opening the Source Control Panel

**Shortcut:** `Ctrl+Shift+G` (Mac: `Cmd+Shift+G`)

**What opens:**
- A sidebar panel on the left side of VS Code
- Focus lands on the first interactive element (usually the commit message input or the first changed file)

**Panel structure from top to bottom:**

1. **Source Control title bar** (heading level 2)
   - Branch name displayed (example: "main" or "feature/add-documentation")
   - View/More Actions button (three dots menu)

2. **Commit message input** (multi-line text field)
   - Type your commit message here
   - Announced as "Source Control Input, edit, multi-line"

3. **Commit button** (or "Publish Branch" if this is a new branch)
   - Shortcut: `Ctrl+Enter` (Mac: `Cmd+Enter`) when focused in the message input

4. **Changes section** (collapsible tree)
   - Lists all modified files not yet staged
   - Announced as "Changes, expanded" or "Changes, collapsed"
   - Count shown (example: "Changes 3")

5. **Staged Changes section** (collapsible tree)
   - Lists files staged for commit
   - Empty if nothing staged yet
   - Announced as "Staged Changes, expanded"

6. **Merge Changes section** (appears only during a merge)
   - Lists files with conflicts
   - See Section 9 for conflict resolution workflow

### Screen Reader Navigation in the Source Control Panel

**NVDA/JAWS:**
- The panel is a web-based tree view
- Use `Up/Down Arrow` to navigate between items
- Use `Right Arrow` to expand a section (Changes, Staged Changes)
- Use `Left Arrow` to collapse a section
- Use `Enter` to open a file diff
- Use `Space` to stage/unstage a file (when focused on a file item)

**VoiceOver:**
- Navigate with `VO+Arrow` keys
- `VO+Space` to activate (open diff or stage/unstage)
- The panel is announced as a "group" containing lists

**Key point:** The Source Control panel is **not** a standard file tree. It's a specialized Git status view. Each changed file is an interactive item with a context menu.

### What Each File Shows

When a file appears in the Changes or Staged Changes list, VS Code shows a status letter:

| Letter | Meaning |
|--------|---------|
| M | Modified — file exists and was changed |
| A | Added — new file, not in Git yet |
| D | Deleted — file was removed |
| R | Renamed — file was moved or renamed |
| U | Untracked — file exists but Git is ignoring it |
| C | Conflict — file has merge conflicts (see Section 9) |

**Screen reader announcement:** "docs/GUIDE.md, Modified" or "README.md, Added"

### Context Menu Actions (Right-Click or Shift+F10)

When focused on any file in the Source Control panel:

| Action | What It Does |
|--------|-------------|
| Open File | Opens the file in the editor (same as `Enter`) |
| Open Changes | Opens side-by-side diff view (same as `Enter`) |
| Stage Changes | Moves file from Changes → Staged Changes |
| Unstage Changes | Moves file from Staged Changes → Changes |
| Discard Changes | **Dangerous** — deletes your local edits, restores file to last commit |
| Stage Selected Ranges | Stage only specific lines (see Section 4) |
| Revert Selected Ranges | Discard changes to specific lines only |

**Screen reader tip:** Use `Shift+F10` to open the context menu. Navigate options with `Up/Down Arrow`. Press `Enter` to select.

---

## 3. Branch Management

Branches are how you organize work in Git. Every repository starts with a `main` or `master` branch. You create new branches for features, bug fixes, or experiments.

### Viewing the Current Branch

**Where it's shown:**
1. Bottom-left corner of VS Code (status bar) — visual users see it immediately
2. Source Control panel title bar
3. Command Palette: `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`) → "Git: Show Git Output"

**Keyboard access to status bar:**
- The status bar is not in the standard keyboard navigation flow
- Use the Command Palette for branch operations instead

> **Visual users:** You can also click the branch name in the bottom-left status bar to open the branch picker directly.

### Creating a New Branch

**Command Palette method (recommended):**

1. `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`)
2. Type "git create branch"
3. Select "Git: Create Branch..."
4. Type the new branch name (example: `feature/improve-docs`)
5. Press `Enter`

VS Code:
- Creates the branch
- Switches to it automatically
- Your working files stay exactly as they were

**Naming conventions:**
- Use lowercase with hyphens: `feature/add-timeline-guide`
- Avoid spaces and special characters
- Be descriptive: `fix/heading-hierarchy` not `fix1`

### Switching Between Branches

**Command Palette method:**

1. `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`)
2. Type "git checkout"
3. Select "Git: Checkout to..."
4. A list of all branches appears
5. `Up/Down Arrow` to navigate
6. `Enter` to switch

**Screen reader announcement:** "Branch: main" or "Branch: feature/add-timeline-guide"

**What happens when you switch:**
- VS Code saves your current files
- Loads the files from the other branch
- If you have uncommitted changes, Git may block the switch (see "Stashing" in Section 10)

### Deleting a Branch

**After your PR is merged, you can delete the branch:**

1. `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`)
2. Type "git delete branch"
3. Select "Git: Delete Branch..."
4. Choose the branch to delete from the list
5. Confirm

**Note:** You cannot delete the branch you're currently on. Switch to `main` first.

### Viewing All Branches

**Command:** `Ctrl+Shift+P` → "Git: Show Git Output" → Branch list appears

**Alternative:** Use the integrated terminal:
```bash
git branch          # Local branches only
git branch -a       # All branches (including remote)
```

---

## 4. Staging Changes — Files, Lines, and Chunks

Git has a two-step commit process:
1. **Stage** the changes you want to include
2. **Commit** those staged changes

This lets you commit only part of your work, leaving the rest for a later commit.

### Staging an Entire File

<details>
<summary>Visual / mouse users</summary>

1. Open Source Control: `Ctrl+Shift+G` (Mac: `Cmd+Shift+G`)
2. Hover over a file in the "Changes" list — a **+** icon appears to its right
3. Click the **+** to stage that file
4. Or right-click a file → "Stage Changes"

</details>

<details>
<summary>Screen reader users (NVDA / JAWS / VoiceOver)</summary>

1. Open Source Control: `Ctrl+Shift+G` (Mac: `Cmd+Shift+G`)
2. Navigate to the file in the "Changes" list
3. Press `Ctrl+Enter` (Mac: `Cmd+Enter`) to stage immediately

**Alternative:**
- Focus the file → press `Space`

**Alternative:**
- Focus the file → press `Shift+F10` (Mac: `Ctrl+Return`) → select "Stage Changes"

</details>

**What happens:**
- The file moves from "Changes" → "Staged Changes"
- A green "A" or "M" indicator appears

### Staging Multiple Files at Once

1. `Ctrl+Shift+G` (Mac: `Cmd+Shift+G`) to open Source Control
2. Navigate to the "Changes" section heading
3. Press `Shift+F10` (Mac: `Ctrl+Return`) to open context menu on the section itself
4. Select "Stage All Changes"

All modified files move to "Staged Changes."

### Staging Individual Lines or Chunks

**This is one of Git's most powerful features:** You can stage only specific lines of a file, leaving other changes unstaged.

**Workflow:**

1. Open Source Control: `Ctrl+Shift+G` (Mac: `Cmd+Shift+G`)
2. Navigate to a file in "Changes"
3. Press `Enter` to open the diff view
4. The diff shows your changes side-by-side or inline
5. Navigate to a changed line (use `Arrow` keys or `F7` for next hunk)
6. Press `Shift+F10` (Mac: `Ctrl+Return`) to open context menu
7. Select "Stage Selected Lines"

**Result:** Only those lines are staged. The rest of the file remains in "Changes."

**Use case for this workshop:**
- You fixed a typo and added a new section in the same file
- You want to commit the typo fix separately from the new content
- Stage only the typo fix lines, commit them with message "fix: typo in heading"
- Then stage the new section, commit with message "docs: add Timeline View guide"

**Screen reader tip:** In the diff view, press `Alt+H` to see Accessible Help for diff-specific keyboard shortcuts.

### Unstaging Files

**Reverse the process:**

1. Focus the file in "Staged Changes"
2. Press `Ctrl+Enter` (Mac: `Cmd+Enter`) or `Space`
3. File moves back to "Changes"

---

## 5. Committing with Screen Readers

### The Commit Workflow

**Standard process:**

1. Open Source Control: `Ctrl+Shift+G` (Mac: `Cmd+Shift+G`)
2. Stage changes (see Section 4)
3. Focus the commit message input (usually `Tab` or `Shift+Tab` to reach it)
4. Type your commit message
5. Press `Ctrl+Enter` (Mac: `Cmd+Enter`) to commit

**Screen reader experience:**

**NVDA/JAWS:**
- The commit input is announced as "Source Control Input, edit, multi-line"
- You're automatically in Forms Mode — just start typing
- The input expands as you type (supports multi-line messages)
- Press `Ctrl+Enter` (Mac: `Cmd+Enter`) to commit (not `Enter`, which adds a new line)

**VoiceOver:**
- `VO+Tab` to navigate to the input
- `VO+Shift+Down` to interact
- Type your message
- `Ctrl+Enter` to commit
- `VO+Shift+Up` to stop interacting

### Writing Good Commit Messages

See [Culture & Etiquette: Writing Good Commit Messages](07-culture-etiquette.md#writing-good-commit-messages) for format guidance.

**Quick reference:**

```
fix: correct heading hierarchy in GUIDE.md

Fixes #42
```

**Format:**
- First line: type + colon + short summary (50 characters max)
- Blank line
- Optional body: detailed explanation
- Optional footer: "Fixes #123" to link to issue

**Common types:** `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`

### What Happens After Commit

- The "Staged Changes" section clears
- Your changes are now part of Git history
- The commit exists locally only — you must **push** to send it to GitHub (see Section 6)

---

## 6. Push and Pull Operations

**Push** sends your local commits to GitHub.  
**Pull** downloads new commits from GitHub to your local repository.

### Pushing Your Commits to GitHub

**After committing locally:**

1. Open Source Control: `Ctrl+Shift+G` (Mac: `Cmd+Shift+G`)
2. Look for the "Publish Branch" button (if this is a new branch) or "Sync Changes" button
3. Press `Enter` on that button

**Alternative: Command Palette**

1. `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`)
2. Type "git push"
3. Select "Git: Push"
4. VS Code pushes your commits to GitHub

**Screen reader feedback:**
- NVDA/JAWS: Status bar announces "Pushing..." then "Pushed successfully" or an error message
- Check the Source Control panel for any error messages (they appear as banner notifications)

**What to do if push fails:**
- **Error: "No upstream branch"** → You need to publish the branch first (Command Palette → "Git: Publish Branch")
- **Error: "Permission denied"** → Check your authentication (see [Appendix D: Git Authentication](appendix-d-git-authentication.md))
- **Error: "Rejected — non-fast-forward"** → Someone else pushed changes; you need to pull first

### Pulling Changes from GitHub

**When to pull:**
- Before you start work each day
- When GitHub shows your branch is behind the remote
- When preparing to merge a PR

**How to pull:**

1. `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`)
2. Type "git pull"
3. Select "Git: Pull"
4. VS Code fetches and merges remote changes

**If there are conflicts:** See Section 9.

**Auto-fetch setting:**
- VS Code can check for remote changes automatically every few minutes
- Enable: Settings (`Ctrl+,` — Mac: `Cmd+,`) → search "git autofetch" → set to `true`

---

## Syncing Your Fork with the Upstream Repository

When you fork a repository and the original (upstream) repository receives new commits, your fork gets out of date. Keeping your fork current prevents merge conflicts and ensures you're working with the latest code.

### The GitHub "Sync fork" Button (Quickest Method)

For straightforward updates, GitHub has a built-in sync button:

1. Navigate to your fork on GitHub
2. On the repository page, look for the **"This branch is N commits behind owner/repo:main"** notice
3. Activate the **"Sync fork"** button next to it
4. GitHub automatically merges upstream changes into your fork's default branch
5. Then pull those changes to your local clone: `Git: Pull` from the Command Palette

**Screen reader path:**
```
On your fork's main page:
→ H or 3 to find the sync notice heading
→ Tab to "Sync fork" button → Enter
→ "Update branch" in the dialog → Enter
```

**Limitation:** The GitHub sync button only syncs the default branch. For other branches, use the git method below.

### Adding the Upstream Remote (One-Time Setup)

To sync locally using git, you first configure the upstream remote. This only needs to be done once per clone.

```
Step 1: Open the terminal in VS Code: Ctrl+` (backtick)
Step 2: Check your current remotes:
  git remote -v
  → You should see "origin" pointing to YOUR fork
Step 3: Add the upstream remote:
  git remote add upstream https://github.com/ORIGINAL-OWNER/ORIGINAL-REPO.git
Step 4: Verify:
  git remote -v
  → You should now see both "origin" (your fork) and "upstream" (original)
```

**Example for Agent Forge:**
```bash
git remote add upstream https://github.com/accesswatch/agent-forge.git
```

### Fetching and Merging Upstream Changes

Once your upstream remote is configured:

```bash
# 1. Fetch all updates from upstream (does not change your files yet)
git fetch upstream

# 2. Make sure you are on your default branch
git checkout main

# 3. Merge upstream changes into your local branch
git merge upstream/main

# 4. Push the updated branch to your fork on GitHub
git push origin main
```

**Via VS Code Command Palette:**
```
Ctrl+Shift+P → "Git: Fetch" → select "upstream"
Ctrl+Shift+P → "Git: Merge Branch" → select "upstream/main"
Ctrl+Shift+P → "Git: Push"
```

### When Conflicts Occur During Sync

If you've made changes to the same files the upstream has changed, merge conflicts can occur during sync. The same conflict resolution flow applies — see Section 9 of this chapter.

**Best practice:** Always sync before starting new work on a fork. A quick `git fetch upstream` at the start of each session prevents conflicts from accumulating.

---

## 7. Discarding Changes

**Discarding = permanently deleting your local edits.** The file reverts to the state of the last commit. This is **irreversible.**

### When to Discard

- You made experimental changes and they didn't work
- You want to start over from the last commit
- You accidentally edited the wrong file

### How to Discard Changes

**Single file:**

1. Open Source Control: `Ctrl+Shift+G`
2. Navigate to the file in "Changes"
3. Press `Shift+F10` for context menu
4. Select "Discard Changes"
5. Confirm in the warning dialog (VS Code will ask "Are you sure?")

**All changes:**

1. `Ctrl+Shift+G`
2. Navigate to the "Changes" section heading
3. `Shift+F10` for context menu
4. Select "Discard All Changes"
5. Confirm (this affects every modified file)

**Screen reader warning:** VS Code shows a modal confirmation dialog. Navigate with `Tab`, select "Discard" or "Cancel" with `Enter`.

### Safer Alternative: Stash Instead of Discard

If you're not sure whether you'll need these changes later, use **stash** (Section 10) instead of discard. Stash saves your changes temporarily without committing them.

### Deleting a File from the Repository (Git Delete / git rm)

**Git Delete** removes a file from both your working directory AND Git's tracking. This is different from discarding changes — it permanently removes the file from the repository history going forward.

**How to use:**

1. Open the file you want to remove in the editor
2. `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`)
3. Type "Git: Delete"
4. Confirm the deletion

The file is staged for deletion — you still need to commit to record the removal.

**When to use Git Delete vs. just deleting the file:**
- Simply deleting a file from Explorer leaves it as an "untracked deletion" in Git
- Using `Git: Delete` (git rm) stages the deletion in one step
- Use `git rm` when you want to track the file removal as part of your next commit

---

## 8. Timeline View — File History and Blame

The **Timeline view** shows the Git history of the currently open file: every commit that touched this file, who made it, and when.

### Opening Timeline View

**Method 1: Explorer Sidebar**

1. Open Explorer: `Ctrl+Shift+E`
2. At the bottom of the Explorer, there's a "Timeline" section
3. `Tab` or `Arrow` to navigate into Timeline
4. The list shows all commits affecting the currently open file

**Method 2: Command Palette**

1. Open a file in the editor
2. `Ctrl+Shift+P`
3. Type "timeline"
4. Select "View: Show Timeline"

### What Timeline Shows

For each commit entry:

- **Commit message** (first line)
- **Author name**
- **Relative time** (example: "3 days ago" or "2 hours ago")
- **Commit hash** (short form, like `a3f2b9c`)

**Screen reader announcement:** "docs: add Timeline Guide, Jeff, 2 days ago"

### Viewing a Commit's Changes

1. Navigate to a commit in the Timeline list
2. Press `Enter`
3. A diff view opens showing what changed in that specific commit

This is incredibly useful for understanding:
- When a particular line was added
- Why a section was removed
- What the file looked like at any point in history

### Git Blame — Line-by-Line History

**Git Blame** shows who last modified each line of the file.

**How to access:**

1. Open a file in the editor
2. `Ctrl+Shift+P`
3. Type "git blame"
4. Select "Git: Toggle Blame"

**What appears:**
- Inline annotations next to every line (visually)
- Hover over a line to see commit details

**For screen reader users:**
- The inline blame annotations can add noise
- Use **Timeline view instead** to see recent changes to the whole file
- Use `Ctrl+F` to search the Timeline list for a specific author or date

**Useful blame settings** (add to `.vscode/settings.json` or user Settings):

| Setting | Default | What It Does |
|---------|---------|-------------|
| `git.blame.ignoreWhitespace` | `false` | When `true`, whitespace-only changes (reformatting) are excluded from blame — useful when code was reformatted without logic changes |
| `git.blame.editorDecoration.disableHover` | `false` | When `true`, disables the hover tooltip on blame annotations — reduces screen reader noise if you find the blame decorations intrusive |

---

## 9. Resolving Merge Conflicts in VS Code

Merge conflicts happen when two people edit the same lines of a file. Git can't decide which version to keep, so it asks you to choose.

**Prerequisite:** Read [Merge Conflicts](06-merge-conflicts.md) for the underlying concepts. This section covers the VS Code-specific workflow.

### How VS Code Displays Conflicts

When you open a file with conflicts, you see something like:

```markdown
<<<<<<< HEAD
## Timeline View — File History
=======
## Timeline View — Git History and Blame
>>>>>>> feature/improve-timeline-guide
```

**VS Code adds buttons above each conflict** (visually):
- "Accept Current Change" (keeps HEAD version)
- "Accept Incoming Change" (keeps the other branch's version)
- "Accept Both Changes" (keeps both, one after the other)
- "Compare Changes" (opens side-by-side diff)

### Screen Reader Workflow for Resolving Conflicts

**The buttons are NOT accessible via keyboard.** Use this method instead:

1. **Identify the conflict markers:**
   - `<<<<<<<` marks the start
   - `=======` separates the two versions
   - `>>>>>>>` marks the end

2. **Read both versions:**
   - The section between `<<<<<<<` and `=======` is **your current branch** (HEAD)
   - The section between `=======` and `>>>>>>>` is **the incoming branch** (the branch you're merging)

3. **Decide what to keep:**
   - Delete the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
   - Delete the version you don't want
   - Or rewrite the section combining both versions
   - Save the file

4. **Stage the resolved file:**
   - `Ctrl+Shift+G` to open Source Control
   - The file appears in "Merge Changes" section
   - Stage it (presses `Ctrl+Enter` or `Space`)

5. **Commit the merge:**
   - Type commit message (or keep the auto-generated one: "Merge branch 'feature/...' into main")
   - `Ctrl+Enter` (Mac: `Cmd+Enter`) to commit

### Using Accessible Diff for Conflict Review

**Better approach:** Use the Accessible Diff Viewer (`F7`) to navigate conflict hunks systematically.

1. Open the conflicted file
2. Press `F7` to jump to the first conflict hunk
3. Press `Alt+F2` to open Accessible View
4. Read both versions clearly
5. Press `Escape` to return to editor
6. Manually edit to resolve
7. Press `F7` to jump to the next conflict
8. Repeat until all conflicts resolved

**This gives you structured, hunk-by-hunk navigation instead of searching for markers manually.**

### Aborting a Merge

If you want to cancel the merge and go back to before you started:

1. `Ctrl+Shift+P`
2. Type "git abort"
3. Select "Git: Abort Merge"

Everything returns to the pre-merge state.

---

## 10. Stash Management

**Stash** temporarily saves your uncommitted changes so you can switch branches or pull updates without committing half-finished work.

### When to Use Stash

- You need to switch branches but have uncommitted changes
- You want to pull updates from GitHub but have local edits
- You want to save experimental work without committing it

### Creating a Stash

**Method 1: Command Palette**

1. `Ctrl+Shift+P`
2. Type "git stash"
3. Select "Git: Stash"
4. Optionally type a stash message (helps you remember what's in it)

**What happens:**
- Your uncommitted changes disappear from the editor
- The files revert to the last commit
- Your changes are saved in a hidden Git stash
- You can now switch branches or pull safely

### Viewing Stashes

**Command Palette:**

1. `Ctrl+Shift+P`
2. Type "git stash list"
3. Select "Git: Show Stash"

**Alternative: Integrated Terminal**

```bash
git stash list
```

Output looks like:
```
stash@{0}: WIP on feature/docs: add Timeline guide
stash@{1}: WIP on main: fix typo
```

### Applying a Stash

**To restore your stashed changes:**

1. `Ctrl+Shift+P`
2. Type "git stash apply"
3. Select "Git: Apply Latest Stash"

**Or to apply a specific stash:**

1. `Ctrl+Shift+P`
2. Type "git stash pop"
3. Select "Git: Pop Stash..."
4. Choose which stash from the list

**Difference between Apply and Pop:**
- **Apply**: restores changes and keeps the stash (you can apply it again later)
- **Pop**: restores changes and deletes the stash

### Dropping a Stash

If you no longer need what's in a stash:

1. `Ctrl+Shift+P`
2. Type "git stash drop"
3. Select "Git: Drop Stash..."
4. Choose which stash to delete

---

## 10b. Emergency Recovery — git reflog

`git reflog` is the safety net you reach for when something goes seriously wrong: an accidental hard reset, a lost branch, a rebase that destroyed commits you needed. It is the most underused recovery tool in Git.

**What reflog records:** Every time the `HEAD` pointer moves — from commits, resets, rebases, checkouts, merges — Git quietly records it in the reflog. These entries are kept for 90 days by default.

### When to Use Reflog

| Scenario | What happened | Reflog solution |
|----------|--------------|------------------|
| Deleted a branch by mistake | `git branch -D feature/x` | Find the last commit SHA from reflog → recreate branch |
| `git reset --hard` lost commits | Moved HEAD to older commit | Find the SHA before the reset → reset back to it |
| Rebase went wrong | Commits appear lost | Find pre-rebase HEAD → reset to it |
| Accidentally force-pushed | Local history destroyed | Find the SHA from reflog → restore |

### Reading the Reflog in VS Code Terminal

```bash
git reflog
```

Output looks like:

```
abc1234 HEAD@{0}: commit: Fix typo in README
bcd2345 HEAD@{1}: reset: moving to HEAD~1
cde3456 HEAD@{2}: commit: Add accessibility section
def4567 HEAD@{3}: checkout: moving from main to feature/docs
```

Each line: `<SHA> HEAD@{N}: <what happened>`

**Screen reader tip:** Run this in the integrated terminal (`Ctrl+Backtick`). The output is plain text — read line by line with ↓. You are looking for the SHA just before the action that caused the problem.

### Recovering Lost Commits

**If you need to restore a commit that has been lost:**

```bash
# Step 1 — Find the last good commit SHA in reflog
git reflog

# Step 2 — Preview what that commit looked like
git show abc1234

# Step 3a — Create a new branch at that point (safest)
git branch recovery/my-lost-work abc1234

# Step 3b — OR reset the current branch to that point
git reset --hard abc1234
```

> **Use `git branch` over `git reset --hard` when recovering** — creating a branch is non-destructive; you keep both the current state and the recovered state, then decide which to keep.

### Recovering a Deleted Branch

```bash
# Find the last commit on the deleted branch
git reflog | grep 'feature/deleted-branch-name'

# Recreate the branch at that SHA
git checkout -b feature/deleted-branch-name abc1234
```

### Why Reflog Is Local-Only

Reflog records are stored in your local `.git/` directory and are **not pushed to GitHub**. If your entire local clone is destroyed (hard drive failure, `rm -rf`), reflog cannot help — but GitHub retains the pushed commits in the remote history.

**Workshop tip:** If you run a reset or rebase during the workshop and lose something, immediately run `git reflog` before doing anything else. The recovery window is open as long as you haven't run `git gc`.

---

## 11. Alternative Git Interfaces

VS Code's Source Control panel is one way to use Git. These alternatives exist for different workflows.

### GitHub Desktop

- **Graphical Git client**
- Download: [desktop.github.com](https://desktop.github.com)
- Strengths: Visual diff review, simpler branch management for beginners
- Screen reader support: Partial — keyboard navigation works for core flows but some visual-only elements exist

### GitHub CLI (`gh`)

- **Command-line interface for GitHub operations**
- Install: `winget install GitHub.cli` (Windows) or `brew install gh` (macOS)
- Strengths: Fast, scriptable, plain-text output (predictable for screen readers)

**Common commands:**

```bash
gh repo clone owner/repo       # Clone a repository
gh issue list                  # List issues
gh pr create                   # Create a PR interactively
gh pr list                     # List your PRs
gh pr view 14                  # Read PR #14
```

See [Culture & Etiquette](07-culture-etiquette.md) for more `gh` examples.

### Git CLI (Terminal)

- **The standard Git command-line interface**
- Included with VS Code (integrated terminal: `Ctrl+Backtick`)

**Common commands:**

```bash
git status                     # Show modified files
git add .                      # Stage all changes
git commit -m "message"        # Commit with message
git push                       # Push to GitHub
git pull                       # Pull from GitHub
git log                        # View commit history
```

**Screen reader tip:** Terminal output is plain text — more predictable than GUI elements for some operations.

---

## VS Code Keyboard Shortcuts — Git Operations Quick Reference

| Action | Shortcut |
|--------|----------|
| Open Source Control | `Ctrl+Shift+G` |
| Stage file | `Ctrl+Enter` (on file in Changes) |
| Unstage file | `Ctrl+Enter` (on file in Staged Changes) |
| Commit | `Ctrl+Enter` (in message input) |
| View file diff | `Enter` (on file in Source Control) |
| Next diff hunk | `F7` |
| Previous diff hunk | `Shift+F7` |
| Open Accessible Diff Viewer | `Alt+F2` (in diff view) |
| Accessible Help | `Alt+H` (in any panel) |
| Open Timeline view | `Ctrl+Shift+E` → navigate to Timeline section |
| Integrated terminal | `Ctrl+Backtick` |
| Delete file from repo (git rm) | `Ctrl+Shift+P` → "Git: Delete" |

---

## Try It: Clone, Branch, Commit

**Time:** 5 minutes | **What you need:** VS Code with Git configured

Do the complete Git workflow once, start to finish:

1. **Clone** — Press `Ctrl+Shift+P`, type `Git: Clone`, press `Enter`. Paste the Learning Room URL and choose a folder. VS Code opens the repo.
2. **Create a branch** — Click the branch name in the status bar (bottom left) or press `Ctrl+Shift+P` → `Git: Create Branch`. Name it `practice/your-name`.
3. **Make a change** — Open `learning-room/docs/welcome.md`. Add a line at the bottom: `- [Your Name] was here!`
4. **Stage** — Press `Ctrl+Shift+G` to open Source Control. Navigate to your changed file and press `Enter` to stage it (or use the `+` button).
5. **Commit** — Tab to the message input, type `Add my name to the welcome file`, press `Ctrl+Enter`.
6. **Push** — Press `Ctrl+Shift+P` → `Git: Push`.

**You're done.** You just completed the full Git cycle: clone → branch → edit → stage → commit → push.

> **What success feels like:** Your change is on GitHub. You can verify by visiting the repository and switching to your branch. Every future contribution follows this same six-step pattern.

---

*Next: [GitHub Pull Requests Extension](12-github-pull-requests-extension.md)*  
*Back: [VS Code Setup & Accessibility Basics](10-vscode-basics.md)*  
*Related: [Merge Conflicts](06-merge-conflicts.md) | [Culture & Etiquette](07-culture-etiquette.md)*
