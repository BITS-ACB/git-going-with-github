# VS Code Setup & Accessibility Basics
## Your Accessible Development Environment — Part 1: Foundation

> **Day 2, Block 1 Material**
>
> This guide covers VS Code fundamentals: why VS Code for open source, accessing VS Code through github.dev (no installation), screen reader configuration, keyboard navigation essentials, and VS Code's three primary accessibility tools (Accessible Help, Accessible View, Accessible Diff).
> 
> **Prerequisites:** Complete Day 1 walkthrough of GitHub's browser interface before working through VS Code material.

---

## Table of Contents

1. [Why VS Code for Open Source Contribution](#1-why-vs-code-for-open-source-contribution)
2. [The Bridge: github.dev — VS Code in Your Browser](#2-the-bridge-githubdev--vs-code-in-your-browser)
3. [Screen Reader Mode in VS Code](#3-screen-reader-mode-in-vs-code)
4. [Essential Keyboard Navigation and Find/Filter](#4-essential-keyboard-navigation-and-findfilter)
5. [Accessible Help, Accessible View, and Accessible Diff](#5-accessible-help-accessible-view-and-accessible-diff)

---

## 1. Why VS Code for Open Source Contribution

GitHub's browser interface is excellent for reviewing, discussing, and triaging. VS Code is where you create. The difference:

| Task | Browser | VS Code |
|------|---------|---------|
| Navigate a repository | Excellent | Explorer sidebar |
| Read issues and PRs | Excellent | GitHub PR extension |
| Comment on a PR | Excellent | GitHub PR extension |
| Edit a file | Web editor | Full text editor with Copilot |
| Review a diff | Files Changed tab | Three-way merge view with navigation |
| Get AI help while writing | Not available | Copilot inline + Chat |
| Run Agent Forge agents | Not available | Copilot Chat with agent files |
| See errors in your contribution | After push | Real-time as you type |

For Markdown contributions (which is most of what `agent-forge` needs), VS Code gives you Copilot assistance, live preview, and the same Git workflow — with less tab switching and with agents available on every file you open.

---

## 2. The Bridge: github.dev — VS Code in Your Browser

**Before you install anything: try VS Code right now in your browser.**

GitHub provides a web-based version of VS Code called **github.dev**. It runs entirely in your browser with zero installation. The keyboard shortcuts, screen reader mode, and editor experience are identical to the desktop app.

### How to Access github.dev

**Method 1: The Period Key Shortcut (Fastest)**

From any GitHub repository page:

1. Press `.` (period key — just the period, no modifier keys)
2. The page transforms into VS Code
3. You're now editing in github.dev
4. The URL changes to `github.dev/owner/repo`
5. Screen reader mode works exactly as it does in desktop VS Code (toggle with `Shift+Alt+F1`)

**Where it works:**
- Repository home pages
- File view pages
- Pull request pages
- Any branch or commit view

**Screen reader note:** The period key shortcut is a single keypress — no modifier keys. It's GitHub's universal "open this in VS Code" command.

**Alternative: Press `>` (Shift+Period)** to open github.dev in a **new tab**. This preserves your GitHub page and is the preferred method when you want to keep both interfaces open.

**Method 2: Direct URL**

Change the domain in any GitHub URL:
- `github.com/owner/repo` → `github.dev/owner/repo`
- Works for any branch, file, or commit URL

**Method 3: From the Repository Page**

<details>
<summary>Visual / mouse users</summary>

1. Click the green **Code** button on any repository page
2. In the dropdown, click **Open with github.dev**

</details>

<details>
<summary>Screen reader users (NVDA / JAWS / VoiceOver)</summary>

1. Navigate to the Code button (press `B` or `Tab` until you hear "Code, button" or similar)
2. Press `Enter` to open the dropdown menu
3. Press `Down Arrow` to reach "Open with github.dev"
4. Press `Enter`

</details>

---

### What You Get in github.dev

Everything in the list below works **exactly like desktop VS Code**:

**Full text editor with syntax highlighting**  
**All VS Code keyboard shortcuts** (see [Keyboard Reference](13-github-copilot.md#8-keyboard-shortcuts-reference))  
**Screen reader mode** (`Shift+Alt+F1` to activate — Mac: `Shift+Option+F1`)  
**File Explorer** (`Ctrl+Shift+E` — Mac: `Cmd+Shift+E`) — browse the entire repository  
**Search across files** (`Ctrl+Shift+F` — Mac: `Cmd+Shift+F`)  
**Source Control (Git)** (`Ctrl+Shift+G` — Mac: `Cmd+Shift+G`) — stage, commit, push changes  
**Markdown preview** (`Ctrl+Shift+V` — Mac: `Cmd+Shift+V`)  
**Command Palette** (`Ctrl+Shift+P` — Mac: `Cmd+Shift+P`) — access every VS Code command  
**Go to File** (`Ctrl+P` — Mac: `Cmd+P`) — instant file picker  
**Go to Symbol** (`Ctrl+Shift+O` — Mac: `Cmd+Shift+O`) — navigate by headings in Markdown  
**Multiple editor tabs and split view**  
**Settings sync** — if you sign in, your VS Code settings apply here too

---

### What github.dev Does NOT Have

**No terminal** — can't run shell commands, npm, git CLI  
**No GitHub Copilot** — Copilot requires the desktop app or a Codespace  
**No Agent Forge agents** — agents rely on extensions that need desktop VS Code  
**No extension installation** — extensions are disabled in github.dev  
**No debugger** — debugging requires a local environment  
**No live server or preview** — except Markdown preview, which does work

These limitations are why **desktop VS Code exists**. github.dev is for quick edits and reading code. Desktop is for Copilot, agents, terminal workflows, and full development.

---

### Why github.dev Matters for This Workshop

**It's the bridge.** You spend Day 1 in the GitHub browser interface. You'll spend Day 2 in desktop VS Code. github.dev sits in between:

- Same keyboard shortcuts as desktop VS Code (you learn them once)
- Same screen reader mode (you configure it once)
- Same file navigation patterns (Explorer, `Ctrl+P` / Mac: `Cmd+P`, `Ctrl+Shift+O` / Mac: `Cmd+Shift+O`)
- But accessible instantly from any GitHub page with one keystroke

**Use github.dev when:**
- You want to edit a file quickly without switching apps
- You're on a machine where you can't install software
- You want to browse code with VS Code navigation (symbols, search, split view)
- You're reviewing a PR and want to see the full file context

**Use desktop VS Code when:**
- You need Copilot inline suggestions
- You want to run Agent Forge agents
- You're making multi-file changes that benefit from AI assistance
- You need a terminal for git commands or running scripts

---

### Screen Reader Experience in github.dev

**Activate screen reader mode immediately:**

1. Press `.` on any GitHub repository to open github.dev
2. Press `Shift+Alt+F1` (Mac: `Shift+Option+F1`) to enable screen reader mode
3. VS Code announces "Screen reader optimized"

**What changes:**
- Focus behavior adjusts for keyboard navigation
- Code suggestions are announced via ARIA live regions
- Error messages are announced when you navigate to them
- Inline decorations are suppressed to reduce noise

**Navigation:**
- Use `Ctrl+Shift+E` to open the Explorer (file tree)
- Use `Up/Down Arrow` to navigate files
- Press `Enter` on a file to open it in the editor
- The editor behaves like a standard text area — your screen reader's reading commands work normally

**NVDA/JAWS users:**
- You remain in Browse/Virtual mode for the overall interface
- When focus enters the editor text area, you're automatically in Forms/Focus mode
- All standard cursor movement works: `Home`, `End`, `Ctrl+Home`, `Ctrl+End`, `Ctrl+F` to find

**VoiceOver users:**
- Quick Nav OFF when inside the editor (`Left Arrow + Right Arrow` to toggle)
- Use `VO+Shift+Down` to interact with the editor area
- Standard text navigation (`Control+A` for line start, `Control+E` for line end, etc.)

---

### Try It Right Now

Before reading the rest of this guide:

1. Open [github.com/accesswatch/agent-forge](https://github.com/accesswatch/agent-forge) in your browser
2. Press `.` (period key)
3. github.dev opens
4. Press `Shift+Alt+F1` (Mac: `Shift+Option+F1`) to enable screen reader mode
5. Press `Ctrl+Shift+E` (Mac: `Cmd+Shift+E`) to open the Explorer
6. Navigate to `README.md` and press `Enter`
7. Press `Ctrl+Home` (Mac: `Cmd+Up`) to go to the top of the file
8. Press `Ctrl+Shift+O` (Mac: `Cmd+Shift+O`) to see the outline (all headings)
9. Close the tab when done

**You just used VS Code.** The desktop version in the rest of this guide is the same experience — with Copilot and agents added.

---

## 3. Screen Reader Mode in VS Code

> **Who needs this section?** If you use NVDA, JAWS, VoiceOver, or another screen reader, read this section before continuing. If you are not using a screen reader, you can skip to [Section 4](#4-essential-keyboard-navigation-and-findfilter) — VS Code works fully without enabling this mode.

VS Code has built-in accessibility support designed for screen reader users. It changes how focus moves, how announcements work, and how navigation behaves.

### Activating Screen Reader Mode

| Method | Steps |
|--------|-------|
| Keyboard shortcut | `Shift+Alt+F1` (Windows) / `Shift+Option+F1` (Mac) |
| Command Palette | `Ctrl+Shift+P` (Windows) / `Cmd+Shift+P` (Mac) → type "screen reader" → select "Toggle Screen Reader Accessibility Mode" |
| Auto-detection | VS Code detects NVDA and JAWS automatically on Windows; VoiceOver on macOS |

**Verify it is active:**
Open Settings (`Ctrl+,` — Mac: `Cmd+,`) → search for `accessibility support` → confirm it shows `on` (not `auto`).

### What Changes in Screen Reader Mode

| Area | Normal Mode | Screen Reader Mode |
|------|-------------|-------------------|
| Suggestions list | Popup overlay | Announced via ARIA live region |
| Diff navigation | Visual highlighting | Announces "Added" / "Removed" before line content |
| Error indicators | Red underlines | Announced on focus |
| Inline decorations | Displayed visually | Suppressed to reduce noise |
| Tab completion | Visual ghost text | Announced as suggestion |

### NVDA-Specific Settings for VS Code

VS Code uses a web-based renderer. Configure NVDA for best results:

1. Open NVDA Menu → Preferences → Settings → Browse Mode
2. Set "Maximum length of text on a single line" to `10000` (prevents truncation in long lines)
3. Under Object Presentation: set "Report tooltip delay" to `off`
4. Recommended: use **NVDA + Google Chrome** for the integrated browser panels

### JAWS-Specific Settings for VS Code

1. JAWS should detect VS Code automatically and switch to PC Cursor mode for the editor
2. If the editor feels unresponsive, press `Insert+Z` to toggle virtual cursor off
3. For the integrated terminal: use `Insert+Z` to enter forms/PC mode, then interact with the terminal

### VoiceOver-Specific Settings for VS Code (macOS)

1. Open VS Code → `Shift+Alt+F1` (Mac: `Shift+Option+F1`) to confirm screen reader mode
2. In VoiceOver Utility: Verbosity → set "Punctuation" to "All" for reading code
3. Use Quick Nav OFF (`Left+Right Arrow`) when inside the editor — standard cursor navigation is more predictable
4. Use `VO+Shift+Down` to interact with the editor, `VO+Shift+Up` to stop interacting

---

## 4. Essential Keyboard Navigation and Find/Filter

### Panels and Areas

> **Mac users:** Substitute `Cmd` for `Ctrl` and `Option` for `Alt` in all shortcuts below.
>
> For example: `Ctrl+Shift+E` → `Cmd+Shift+E`, `Ctrl+Backtick` → `Ctrl+Backtick` (same on Mac), `Ctrl+Shift+P` → `Cmd+Shift+P`.

| Area | Shortcut (Windows) | What Gets Focus |
|------|----------|----------------|
| Explorer (file tree) | `Ctrl+Shift+E` | Folder/file list |
| Search | `Ctrl+Shift+F` | Search input |
| Source Control (Git) | `Ctrl+Shift+G` | Changes list |
| Extensions | `Ctrl+Shift+X` | Extensions list |
| Terminal | `Ctrl+Backtick` | Terminal input |
| Copilot Chat | `Ctrl+Shift+I` | Chat input |
| Command Palette | `Ctrl+Shift+P` | Command search input |
| Editor | `Ctrl+1` | Active editor file |
| Problems panel | `Ctrl+Shift+M` | List of all errors and warnings |

### Within the Editor

| Action | Shortcut |
|--------|----------|
| Go to beginning of file | `Ctrl+Home` |
| Go to end of file | `Ctrl+End` |
| Go to line N | `Ctrl+G` → type line number |
| Go to line and column | `Ctrl+G` → type `N:C` (e.g., `10:5` for line 10, column 5) |
| Go to character offset | `Ctrl+G` → type `::N` (e.g., `::599` for the 599th character in the file) |
| Go to symbol (heading in Markdown) | `Ctrl+Shift+O` |
| Go to definition | `F12` |
| Find in file | `Ctrl+F` |
| Next find result | `F3` |
| Previous find result | `Shift+F3` |
| Next error or warning | `F8` |
| Previous error or warning | `Shift+F8` |
| Open file by name | `Ctrl+P` → type filename |
| Toggle word wrap | `Alt+Z` |
| Toggle Tab focus mode | `Ctrl+M` (makes Tab move focus instead of indenting) |
| Increase/decrease font size | `Ctrl+=` / `Ctrl+-` |
| Breadcrumb navigation | `Ctrl+Shift+;` → Arrow keys to navigate path segments |

### Rich Find and Filtering Experiences

VS Code's Find and Search tools go far beyond a simple text match. Every option below is keyboard-accessible, and all toggles are announced as checkboxes by screen readers.

#### Find in Current File (`Ctrl+F`)

When the Find widget opens, three toggle buttons refine what matches:

| Toggle | Shortcut | What It Does |
|--------|----------|--------------|
| Match Case | `Alt+C` | Limits results to exact uppercase/lowercase |
| Match Whole Word | `Alt+W` | Matches full words only, not substrings |
| Use Regular Expression | `Alt+R` | Enables regex patterns in the search box |

**Screen reader interactions inside the Find widget:**
- Toggles are announced as checkboxes — press `Space` to toggle each one
- Match count is announced as you type (example: `3 of 12 matches`)
- `F3` / `Shift+F3` move through matches while the widget stays open
- `Escape` closes the widget and returns focus to your last cursor position

**Replace (`Ctrl+H`):** Opens the Find widget with a second input for the replacement text.
- `Ctrl+Shift+1` — replace the current match
- `Ctrl+Alt+Enter` — replace all matches at once

#### Global Search Across the Workspace (`Ctrl+Shift+F`)

The global Search panel has a rich filtering system — all keyboard-accessible:

| Action | How |
|--------|-----|
| Open global search | `Ctrl+Shift+F` |
| Search input | Focus lands here automatically — type your query |
| Toggle case / word / regex | `Alt+C`, `Alt+W`, `Alt+R` (same as Find) |
| Include files filter | `Tab` to "files to include" field → type glob patterns |
| Exclude files filter | `Tab` to "files to exclude" field → type glob patterns |
| Collapse all results | `Ctrl+Shift+J` |
| Open a result | Navigate the result tree with `Up/Down Arrow` → `Enter` to open |

**Glob pattern examples for this workshop:**
```
docs/*.md          → all Markdown files in the docs folder
*.agent.md         → all Agent Forge agent definition files
.github/**         → everything inside the .github folder
!node_modules/**   → exclude the node_modules folder from results
```

#### Finding Settings (`Ctrl+,`)

The Settings editor has built-in search that filters by keyword as you type. Additional filter options:

| Filter | What It Shows |
|--------|---------------|
| `@modified` | Only settings you have changed from their defaults |
| `@tag:accessibility` | All accessibility-related settings |
| `@tag:advanced` | Advanced settings — useful for finding less common configuration options |
| `@tag:experimental` | Experimental features not enabled by default |

Type any of these directly in the Settings search box (`Ctrl+,`).

#### Terminal IntelliSense (`Ctrl+Space`)

The VS Code integrated terminal now offers completions for shell commands, file paths, and arguments. Press `Ctrl+Space` while typing in the terminal to trigger the completion list. Navigate suggestions with `Up/Down Arrow`, accept with `Tab` or `Enter`.

Enable with: Settings (`Ctrl+,`) → search `terminal.integrated.suggest.enabled` → set to `on`.

**Screen reader note:** Terminal IntelliSense completions are announced via ARIA live regions. The completion popup behaves the same as editor IntelliSense.

#### Type-to-Filter in Tree Views

In the **Explorer** file tree and the **Source Control** changes list, you can type characters to narrow the visible items — no scrolling required:

1. Focus the Explorer (`Ctrl+Shift+E`)
2. Start typing a filename — a filter input appears at the bottom of the tree
3. The tree instantly narrows to matching files
4. Press `Escape` to clear the filter and restore full view

This is one of VS Code's most useful keyboard affordances for large repositories with many files.

#### Go to Symbol with Inline Filtering (`Ctrl+Shift+O`)

In any Markdown file, `Ctrl+Shift+O` opens a symbol picker populated by every heading in the document. Type to narrow the list:

- `Ctrl+Shift+O` → symbol picker opens
- Type `## Day` → results narrow to all H2 headings containing "Day"
- `Up/Down Arrow` → move through results
- `Enter` → jump to the selected heading

For navigating `agent-forge`'s longer reference documents, this is faster than heading-by-heading screen reader navigation.

### Explorer (File Tree) Navigation

| Action | Key |
|--------|-----|
| Navigate items | `Up/Down Arrow` |
| Expand folder | `Right Arrow` |
| Collapse folder | `Left Arrow` |
| Open file | `Enter` |
| Rename file | `F2` |
| Delete file | `Delete` |
| New file | `Ctrl+N` (then save with `Ctrl+S`) |

---

## 5. Accessible Help, Accessible View, and Accessible Diff

VS Code has a family of purpose-built accessibility features that give screen reader users complete, structured access to content that is otherwise conveyed visually or through dynamic regions. These three are the most important to know before working with Copilot and diffs.

---

### 5.1 Accessible Help — Context-Aware Keyboard Guide

Every interactive area of VS Code — the editor, the terminal, the diff view, the Copilot Chat panel — has its own keyboard commands. **Accessible Help** surfaces those commands in a plain-text, fully readable dialog, tailored to exactly where your focus is right now.

**How to open Accessible Help:**

| Context | Shortcut |
|---------|----------|
| Inside the editor | `Alt+H` |
| Inside the terminal | `Alt+H` |
| Inside a diff view | `Alt+H` |
| Inside Copilot Chat | `Alt+H` |
| Any VS Code widget | `Alt+H` |

The dialog is announced with a heading and a complete list of keyboard shortcuts for that specific widget. Navigate with `Up/Down Arrow`. Press `Escape` to dismiss and return focus to where you were.

**Why this matters:** You do not need to memorize every shortcut in every panel. Open Accessible Help in any unfamiliar area and VS Code will tell you exactly what you can do there. It is the built-in answer to "what can I press from here?"

**Example output when pressing `Alt+H` in the editor:**
```
Accessible Help: Editor

Press F8 to jump to the next error or warning.
Press Shift+F8 to jump to the previous error or warning.
Press Ctrl+Shift+M to open the Problems panel.
Press F12 to go to a definition.
Press Alt+F12 to peek a definition inline.
Press Ctrl+Shift+O to go to a symbol in this file.
Press Alt+F2 to open the Accessible View.
Press Alt+H to view this help content again.
```

Use Accessible Help as your first action whenever you land somewhere new in VS Code.

---

### 5.2 Accessible View — Reading Dynamic and Streamed Content

**Accessible View** (`Alt+F2`) gives screen reader users a clean, static, fully readable version of content that is otherwise presented dynamically, in tooltips, or in streaming form.

**How to open Accessible View:**

| Shortcut | When to Use |
|----------|-------------|
| `Alt+F2` | Open Accessible View for the currently focused element |
| `Escape` | Close Accessible View and return to the editor |

**What Accessible View provides:**

| Content Type | Without Accessible View | With Accessible View (`Alt+F2`) |
|-------------|-------------------------|---------------------------------|
| Copilot Chat response | Fragmented — announced as tokens stream in | Full complete response, read sequentially with Arrow keys |
| Inline Copilot suggestion | Ghost text — may not be announced | Announced as "Suggestion: [full text]" |
| Hover documentation | Popup tooltip — announced only briefly | Full content, fully navigable with Arrow keys |
| Error / warning details | On-focus message only | Full error text, error code, and suggested fix |
| Terminal output | May be truncated by live region limits | Full output in review mode with scroll |
| Notification banners | Announced once and dismissed | Persistent readable content until you close it |

**Recommended workflow for Copilot Chat:**
1. Type your prompt in the Chat input
2. Wait for the response to finish (NVDA: live region announcements stop; JAWS: typing indicator disappears; VoiceOver: busy state clears)
3. Press `Alt+F2` — Accessible View opens with the complete response
4. Navigate with `Up/Down Arrow` through the response
5. Press `Escape` to return to the chat input

**Recommended workflow for hover documentation:**
1. Navigate to a symbol or link with keyboard
2. Press `Ctrl+K I` to trigger hover programmatically (no mouse needed)
3. Press `Alt+F2` to open Accessible View with the full hover content
4. Press `Escape` to dismiss

---

### 5.3 Accessible Diff Viewer — Reading Changes Without Visual Scanning

When you open a file diff — in Source Control, in the GitHub PR extension, or during a merge conflict — VS Code normally shows it as a side-by-side or inline visual view. For screen reader users, tracking which lines changed and how can be difficult without a structured reading mode.

**The Accessible Diff Viewer** presents the same diff as a plain, navigable list of changed lines — organized by hunk, labeled by change type (added, removed, unchanged), with the line number announced for each line.

**How to open the Accessible Diff Viewer:**

| Shortcut | What Happens |
|----------|--------------|
| `F7` | Move to the next diff hunk (from within the diff editor) |
| `Shift+F7` | Move to the previous diff hunk |
| Command Palette | `Ctrl+Shift+P` → type "Open Accessible Diff Viewer" |

**What the Accessible Diff Viewer announces:**

For each hunk (a block of related changes), the viewer announces:
- The hunk number and total hunk count (`Hunk 2 of 5`)
- The line range affected
- Each line, prefixed with its change type:

```
Hunk 1 of 3 — lines 12 to 18
  Unchanged: ## Screen Reader Cheat Sheet
- Line removed: > Quick reference for NVDA users.
+ Line added: > Quick reference for NVDA, JAWS, and VoiceOver users.
  Unchanged:
  Unchanged: Use this document during the workshop.
```

This gives you the complete picture of what changed, in reading order, without visual diff scanning.

**Practical uses during this workshop:**

- **Before approving a PR:** Open the diff → `F7` to enter the first hunk → navigate each change → `F7` for next hunk → repeat until all hunks reviewed
- **During a merge conflict:** The conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) appear as lines in the viewer — you can read both conflicting versions before deciding which to keep
- **After Copilot generates an edit:** Open the diff (`Ctrl+Shift+G` → navigate to the changed file → `Enter`) then review exactly what Copilot changed vs. what was there before

**Audio cues for diffs:**

With `accessibility.signals.diffLineInserted` and `accessibility.signals.diffLineDeleted` both set to `on` in Settings, VS Code plays a distinct tone when your cursor moves over an added line (higher pitched) or a removed line (lower pitched). You receive change-type information through sound before the line text is announced.

---

## Accessibility Signals and Audio Cues

VS Code can communicate editor state through accessibility signals — sounds that announce when you move past line breaks, reach the end of a file, land on an error, or complete a task. This is particularly useful for screen reader users who benefit from non-verbal state confirmation.

### Enabling Accessibility Signals

Open Settings (`Ctrl+,`) → search "accessibility signals":

| Setting | Recommended Value | What It Does |
|---------|-------------------|-------------|
| `editor.accessibilitySupport` | `on` | Full screen reader mode |
| `accessibility.signals.lineHasError` | `on` | Sound when cursor is on a line with an error |
| `accessibility.signals.lineHasWarning` | `auto` | Sound on warnings (lower pitch than errors) |
| `accessibility.signals.taskCompleted` | `on` | Sound when a terminal command completes |
| `accessibility.signals.taskFailed` | `on` | Different sound when a command fails |
| `accessibility.signals.diffLineInserted` | `on` | Sound when navigating over added lines in a diff |
| `accessibility.signals.diffLineDeleted` | `on` | Sound when navigating over deleted lines in a diff |
| `accessibility.signals.chatResponsePending` | `on` | Sound while Copilot is generating |
| `accessibility.signals.chatResponseReceived` | `on` | Sound when Copilot response is complete |

### Recommended Profile for Screen Reader Users

Add this to your VS Code `settings.json` (Command Palette → "Open User Settings JSON"):

```json
{
  "editor.accessibilitySupport": "on",
  "accessibility.signals.lineHasError": "on",
  "accessibility.signals.taskCompleted": "on",
  "accessibility.signals.taskFailed": "on",
  "accessibility.signals.chatResponseReceived": "on",
  "accessibility.signals.diffLineInserted": "on",
  "accessibility.signals.diffLineDeleted": "on",
  "editor.minimap.enabled": false,
  "editor.renderWhitespace": "none",
  "editor.wordWrap": "on"
}
```

**Note:** `minimap.enabled: false` removes the visual minimap that adds no value for screen reader users and can cause some accessibility tools to announce additional regions.

---

*Next: [Git & Source Control in VS Code](11-git-source-control.md)*  
*Back: [Day 2 Agenda](../DAY2_AGENDA.md)*  
*Related: [GitHub Pull Requests Extension](12-github-pull-requests-extension.md) | [GitHub Copilot](13-github-copilot.md)*
