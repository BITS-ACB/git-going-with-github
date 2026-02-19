# Working with Issues
## Filing, Managing, and Participating in GitHub Issues

> Issues are where open source collaboration begins. This guide covers everything from finding the right issue to file a perfect bug report — all with your keyboard and screen reader.
>
> **Screen reader note — New Issues Experience:** This guide uses GitHub's improved Issues experience, which provides better ARIA landmark structure and live-region announcements for screen readers. This feature may already be active for your account — it has been broadly rolled out and may no longer appear as a Feature Preview toggle at all.
>
> **To verify:** Activate the **User Menu** button (top-right of any GitHub page) → activate **"Feature preview"** → scan the list for **"New Issues Experience"**:
> - If listed and the toggle announces **"Pressed"** (or **"Disable"**) — already enabled, no action needed
> - If listed but **not Pressed** (or **"Enable"**) — activate the toggle to enable it
> - If not listed at all — the feature has graduated to the standard interface; it is active automatically
>
> Full step-by-step instructions with per-screen-reader commands are in [Pre-Workshop Setup, Step 4](00-pre-workshop-setup.md#6-step-4--check-github-feature-preview-settings).
>
> **Browse vs Focus Mode (NVDA):** Toggle between modes with `NVDA+Space` (NVDA key = `Insert` or `Caps Lock`). Use **Browse Mode** (the default) for reading lists, headings, and issue content. Switch to **Focus Mode** when typing in text fields and search boxes. Use `NVDA+F7` at any time to open a list of all headings, links, form fields, buttons, and landmarks on the page — this is your orientation tool.

---

## What Is a GitHub Issue?

An issue is a discussion thread attached to a repository. Issues are used for:

- **Bug reports** — "This feature doesn't work when using a screen reader"
- **Feature requests** — "It would help if the submit button had an accessible label"
- **Questions** — "How do I configure X for Y use case?"
- **Tasks** — "Update the README with screen reader instructions"
- **Accessibility reports** — "The infinite scroll carousel is not keyboard accessible"

Every issue has a **number** (`#42`), a **state** (Open or Closed), a **title**, a **description**, and a **comment thread**. Issues are public by default on public repositories.

---

## Navigating to the Issues List

### From a repository page

<details>
<summary>Visual / mouse users</summary>

Click the **Issues** tab in the repository navigation bar below the repository name. The tab shows the open issue count (e.g., “Issues · 14”).

</details>

<details>
<summary>Screen reader users (NVDA / JAWS — Windows)</summary>

1. Press `D` to navigate to the "Repository navigation" landmark
2. Press `K` or `Tab` to move through the tab links
3. Find "Issues" — it will be announced with the count: "Issues, 14 open"
4. Press `Enter` to open the Issues tab

</details>

<details>
<summary>Screen reader users (VoiceOver — macOS)</summary>

1. `VO+U` → Landmarks → navigate to "Repository navigation"
2. `VO+Right` or Quick Nav `K` to move through tab links
3. Find "Issues" — VoiceOver announces the count: "Issues 14"
4. `VO+Space` to activate the Issues tab

</details>

### Direct URL

Navigate directly: `https://github.com/[owner]/[repo]/issues`

---

## The Issues List Page

### Page structure

```
[Search / filter bar]          ← controls at the top
[State tabs: Open | Closed]    ← filter by status
[Issues list]                  ← each issue is one list item or heading
[Pagination]                   ← at the bottom
```

### How to read the issue list

<details>
<summary>Visual / mouse users</summary>

The issues list shows each issue as a row with its title, labels, number, assignee avatars, and comment count. Closed issues show a purple merged/closed badge. Click any issue title to open it. Use the **Open** and **Closed** toggle links above the list to switch between states.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS)</summary>

1. Press `D` to reach the “Search Results List” landmark
2. Press `3` (h3) to navigate by issue titles — each issue title is an h3 link
3. Press `I` to move between list items if you want more detail per item
4. Press `Enter` on a title to open that issue

</details>

<details>
<summary>Screen reader users (VoiceOver)</summary>

1. `VO+U` → Landmarks → navigate to “Search Results List”
2. `VO+Down` to read through items
3. `H` (with Quick Nav on) or `VO+U` → Headings to jump by issue title

</details>

### What is announced per issue

When you navigate to an issue in the list, your screen reader will announce (in some order):
- Issue title (as a link)
- Issue number (`#42`)
- Labels (e.g., "bug, good first issue")
- Who opened it and when ("Opened 3 days ago by username")
- Number of comments ("5 comments")

---

## Filtering and Searching Issues

Filtering lets you narrow the list to find the right issue quickly.

### Using the search/filter bar

1. Press `F` or `E` to jump to the filter input field (or navigate from the landmark)
2. Switch to Focus Mode (`NVDA+Space` / `Insert+Z`) if not already in it
3. Type your filter or search query
4. Press `Enter` to apply

**Useful filter queries:**
```
is:open label:"good first issue"    ← great for finding your first contribution
is:open label:accessibility         ← accessibility-related open issues
is:open assignee:@me                ← issues assigned to you
is:open no:assignee                 ← unassigned issues
is:open author:@me                  ← issues you filed
mentions:@me                        ← where you were @mentioned
is:open is:unread                   ← issues with unread activity
```

### Using the filter buttons

Above the issue list, there is an **actions toolbar** with filter buttons for Labels, Milestones, Assignees, etc.

<details>
<summary>Visual / mouse users</summary>

The filter bar sits above the issue list. Click **Label**, **Milestone**, or **Assignee** to open a dropdown, select the values you want, then click anywhere outside to close. The issue list updates immediately.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS — Windows)</summary>

1. Press `Tab` from the search bar (or `Shift+Tab` from the issue list) to reach the actions toolbar
2. Press `←/→` to move between toolbar options (Label, Milestone, Assignee, Sort)
3. Press `Enter` to open the selected dropdown
4. Use `↑/↓` to navigate options in the dropdown
5. Press `Enter` or `Space` to select
6. Press `Escape` to close (filter applies immediately)

</details>

<details>
<summary>Screen reader users (VoiceOver — macOS)</summary>

1. `Tab` forward from the search bar to reach the filter buttons, or use Quick Nav to find them
2. `VO+Left/Right` to move between Label, Milestone, Assignee, Sort buttons
3. `VO+Space` to open the selected dropdown
4. `VO+Down` or arrow keys to navigate the dropdown options
5. `VO+Space` to select/deselect
6. `Escape` to close (filter applies immediately)

</details>

### Open vs Closed filter

The two state links "Open" and "Closed" appear near the top of the issue list. Press `K` to navigate links until you find them, or look for them as buttons near the search bar.

---

## Reading an Issue

### Landing on an issue page

When you open an issue, the page structure is:

```
[Issue title — h1]
[Open/Closed status badge]
[Author, timestamp, comment count]
─────────────────────────────────
[Issue description — Main content]   ← the original post
[Labels, Assignees sidebar — h3s]
─────────────────────────────────
[Activity / Timeline]                ← comments and events
  [First comment — h3]
  [Second comment — h3]
  ...
─────────────────────────────────
[Add a comment — landmark]
[Comment text area]
[Close issue / Submit button]
```

### Quick navigation

| Goal | Key |
|------|-----|
| Hear the issue title | `1` |
| Jump to description | `2` (first h2 is usually "Description") |
| Jump to Activity section | `2` → next h2 is "Activity" |
| Navigate between comments | `3` (each comment is h3) |
| Jump to comment box | `D` → "Add a comment" landmark |
| Navigate labels/assignees | `H` or `3` in the sidebar |

### Reading the issue description

1. Press `2` to reach the "Description" heading
2. Press `↓` to read the content line by line, OR
3. Use `NVDA+↓` (NVDA say all) to have it read continuously

> **Browse Mode recommended:** The issue detail page is primarily text-based. Stay in **Browse Mode** (not Focus Mode) for reading — it gives you full heading (`H`), section (`D`), and link (`K`) navigation throughout the page. Only switch to Focus Mode when you need to type in a comment box.

Markdown in the description renders as proper HTML: headings become actual headings, bullets become lists, code blocks become `<code>` elements with the text "code block" announced.

### Reading comments and activity

Each comment in the thread is marked as an h3. Navigate between them with `3`.

Each comment announces:
- Commenter's username
- Timestamp ("2 days ago")
- Body text
- Reactions (if any — announced as a button with an emoji and count)
- A "Reply" link

Other timeline events (label added, PR linked, issue closed) appear between comments in the activity stream. They are typically announced as text paragraphs.

---

## Leaving a Comment

### Step-by-step

<details>
<summary>Visual / mouse users</summary>

1. Scroll to the bottom of the issue page
2. Click in the **Leave a comment** text area
3. Type your comment (Markdown is supported — use the toolbar buttons above the text for bold, italic, code, etc.)
4. Optionally click **Preview** to see how it will render
5. Click the green **Comment** button to post

To close the issue while commenting: click the arrow on the **Close issue** button and choose **Close with comment**.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS — Windows)</summary>

1. Navigate to the comment box: `D` → "Add a comment" landmark, or press `E` or `F` to focus the text area
2. Enter Focus Mode: NVDA: `Insert+Space` | JAWS: `Insert+Z`
3. Type your comment (plain text or Markdown)
4. To preview: `Tab` to the **Preview** button, press `Enter`; then `Tab` back to **Write** to continue editing
5. Submit: press `Ctrl+Enter` from inside the text area, OR press `Escape` → `Tab` to the **Comment** button → `Enter`

</details>

<details>
<summary>Screen reader users (VoiceOver — macOS)</summary>

1. Navigate to the comment box: `VO+U` → Landmarks → "Add a comment", or Quick Nav `F` to jump to the text area
2. Interact with the text area: `VO+Shift+Down`
3. Type your comment (plain text or Markdown)
4. To preview: `VO+Shift+Up` to stop interacting, then `Tab` to the **Preview** button and `VO+Space`
5. Submit: press `Cmd+Return` from inside the text area, OR `VO+Shift+Up` → `Tab` to the **Comment** button → `VO+Space`

</details>

### Markdown formatting while typing

These keyboard shortcuts work inside the text area (Focus Mode):

| Shortcut | Result |
|----------|--------|
| `Ctrl+B` | **Bold text** |
| `Ctrl+I` | *Italic text* |
| `Ctrl+E` | `Code span` |
| `Ctrl+K` | [Link text](URL) dialog |
| `Ctrl+Shift+.` | > Blockquote |
| `Ctrl+Shift+L` | - Bullet list |
| `Ctrl+Shift+7` | 1. Numbered list |

### GitHub shortcuts for the Issues pages

These are the GitHub built-in shortcuts for working with issues. Enable Focus Mode first (NVDA: `NVDA+Space`, JAWS: `Insert+Z`) before using single-key shortcuts.

**On the Issues list page:**

| Shortcut | Action |
|---|---|
| `?` | Show all shortcuts for this page |
| `G I` | Jump to the Issues tab from anywhere in the repo |
| `C` | Create a new issue |

**Shortcut note:** For `G I`, press `G`, release it, then press `I` (two sequential key presses, not simultaneous).
| `Ctrl+/` (Win) or `Cmd+/` (Mac) | Focus the issues search and filter bar |
| `U` | Filter by author |
| `L` | Filter by or edit labels |
| `M` | Filter by or edit milestones |
| `A` | Filter by or edit assignee |
| `O` or `Enter` | Open the selected issue |

**On an open issue:**

| Shortcut | Action |
|---|---|
| `M` | Set a milestone |
| `L` | Apply a label |
| `A` | Set an assignee |
| `X` | Link a related issue from the same repository |
| `R` | Quote selected text in your reply (select text first) |
| `Ctrl+Shift+P` (Win) or `Cmd+Shift+P` (Mac) | Toggle Write and Preview tabs |
| `Ctrl+Enter` | Submit comment from inside the text area |

> **`R` to quote is a power move:** Select any text in a comment while in Browse Mode (`Shift+Arrow` to select), then press `R`. GitHub puts the quoted text in the comment box as a Markdown blockquote. Much faster than typing `> ` manually.

For the full shortcut system, see [Screen Reader Cheat Sheet — GitHub Shortcuts section](appendix-b-screen-reader-cheatsheet.md#github-built-in-keyboard-shortcuts).

1. Navigate to your comment (`3` to jump to comments)
2. Find the "..." (ellipsis) menu button near your comment
3. Press `Enter` on "Edit" from that menu
4. The comment turns into a text area — switch to Focus Mode
5. Make your changes
6. Tab to "Update comment" button → Enter

---

## Filing a New Issue

### Navigating to New Issue

<details>
<summary>Visual / mouse users</summary>

From the Issues list page, click the green **New issue** button in the top-right of the issue list. If the repository has templates, a template picker page appears — click **Get started** next to the template that fits your needs, or click **Open a blank issue** to skip templates.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS — Windows)</summary>

From the Issues list:
1. Press `K` to navigate links and find the "New issue" button/link
2. Press `Enter`
3. If a template picker appears: press `3` to navigate template names, read the description below each, then press `Enter` on "Get started" for the right template — or find "Open a blank issue." link if no template fits

</details>

<details>
<summary>Screen reader users (VoiceOver — macOS)</summary>

From the Issues list:
1. Quick Nav `B` or `VO+U` → Buttons to find the "New issue" button
2. `VO+Space` to activate it
3. If a template picker appears: Quick Nav `H` or `VO+Cmd+H` to navigate template names, then `VO+Space` on "Get started" for the right template — or Quick Nav `K` to find the "Open a blank issue" link

</details>

### Filling Out the Issue Form

The issue form has these fields (order may vary depending on the template):

**Title field:**
1. Find the Title input field (`F` or by landmark)
2. Focus Mode → type a clear, specific title
3. Good title: "Screen reader announces wrong element count on Issues list with 50+ items"
4. Bad title: "Bug with screen reader"

**Description / Body field:**
1. Tab to the body text area
2. Focus Mode → type using the Markdown template provided
3. If no template, use this structure:

```markdown
## What happened

Describe what you observed.

## What I expected

Describe what should have happened.

## How to reproduce

1. Step one
2. Step two
3. Step three

## Environment

- Screen reader: [NVDA 2025.3.3 / JAWS 2026 / VoiceOver macOS Sonoma]
- Browser: [Chrome 124 / Firefox 125 / Safari 17]
- OS: [Windows 11 / macOS 14]
- GitHub interface: [Modern experience (default since Jan 2026) / Classic experience]

## Additional context

Any other information, screenshots (with alt text), or links.
```

**Assigning labels from the sidebar:**

While the form is open, the sidebar has dropdowns for Labels, Assignees, and Milestone.

<details>
<summary>Visual / mouse users</summary>

In the right sidebar, click the gear icon () next to **Labels**. A dropdown opens — click a label to select it. Click outside to close. Repeat for **Assignees** and **Milestone**.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS — Windows)</summary>

1. `Tab` away from the text area (or press `Escape` to leave Focus Mode)
2. Navigate to the sidebar — press `H` to find "Labels" heading
3. Press `Enter` on the Labels gear/button
4. Dropdown opens → `↑/↓` to navigate labels
5. `Enter` to select/deselect
6. `Escape` to close (selections save automatically)

</details>

<details>
<summary>Screen reader users (VoiceOver — macOS)</summary>

1. `VO+Shift+Up` to stop interacting with the text area
2. `VO+U` → Headings to find the "Labels" heading in the sidebar
3. `VO+Space` on the Labels gear/button to open the dropdown
4. `VO+Down` or arrow keys to navigate labels
5. `VO+Space` to select/deselect
6. `Escape` to close (selections save automatically)

</details>

**Submitting the issue:**
1. Tab to "Submit new issue" button
2. Press `Enter`

---

## Cross-Referencing Issues

Linking issues and PRs to each other creates a trail of context that helps everyone understand the project's history.

### Closing keywords in PR descriptions or issue comments

When you type these phrases in a PR description or comment (followed by an issue number), GitHub creates a connection:

| Keyword | Effect on merge |
|---------|----------------|
| `Closes #42` | Closes issue #42 when the PR merges |
| `Fixes #42` | Same — typically for bugs |
| `Resolves #42` | Same — general use |
| `refs #42` | Creates a reference without auto-closing |
| `cc @username` | Notifies the person |

### Mentioning another issue in a comment

Simply type `#` followed by a number anywhere in a comment body. GitHub autocompletes with a dropdown of matching issues and PRs:

```
Step 1: Type # in the comment box (Focus Mode)
Step 2: A dropdown appears with issues and PRs
Step 3: ↑/↓ to navigate, or type more numbers to filter
Step 4: Enter to insert the reference
```

### Cross-repo references

`owner/repo#42` — references issue #42 in a different repository.

---

## Sub-Issues — Parent and Child Relationships

**Sub-issues** (released 2025) let you nest issues inside a parent issue to break large work into tracked pieces. A "parent" issue contains a list of child issues; each child is a full issue with its own discussion, labels, and assignees.

### When to Use Sub-Issues

| Use case | Example |
|----------|---------|
| Large feature broken down | Parent: "Redesign navigation"; Children: "Keyboard nav," "Screen reader nav," "Mobile nav" |
| Epic tracking | Parent: "WCAG 2.1 AA compliance"; Children: one issue per failing criterion |
| Release milestone | Parent: "v2.0 release"; Children: every required PR/fix |

### Creating a Sub-Issue

From any open issue:

```
1. Open the parent issue page
2. Scroll to (or H-navigate to) the "Sub-issues" section in the issue body/sidebar
3. Tab to "Add sub-issue" button → Enter
4. Type the issue number or title to search
5. Select the issue from the dropdown → Enter to link
   Or: select "Create new issue" to create and link in one step
```

**Screen reader note:** The sub-issues section is announced as a region. After linking, the child issue appears as a list item with a checkbox showing its open/closed state. Tab through to read each child's title and status.

### Reading Sub-Issues on a Parent Issue

```
H → "Sub-issues" heading
↓ → list of linked child issues
Each item: [checkbox state] [issue title] [#number] [open/closed badge]
Tab → "Add sub-issue" button (if you have write access)
```

**Progress indicator:** The parent issue shows a completion bar (e.g., "3 of 7 completed") based on how many child issues are closed. Screen readers announce this as a progress region.

### Viewing a Child Issue's Parent

Every child issue shows a "Parent issue" link near the top of the page (above the description). Navigate with `H` or links (`K`) to find it.

### Sub-Issues vs. Task Lists

| Feature | Task list checkboxes | Sub-issues |
|---------|---------------------|------------|
| Location | Issue description (Markdown) | Sidebar/section (structured data) |
| Each item is | Text line + checkbox | A full GitHub issue |
| Tracked in Projects | No (checkbox only) | Yes (each child tracks independently) |
| Cross-repo | No | Yes |
| Best for | Quick checklists in one issue | Multi-issue work tracking |

> **Workshop tip:** If you are working on a feature that requires multiple PRs or involves several team members, ask the maintainer to create a parent issue. You can then claim individual child issues without one person owning the whole feature.

---

## Managing Issues (for Maintainers and Triagers)

### Closing an issue

<details>
<summary>Visual / mouse users</summary>

Scroll to the bottom of the issue page. Click the **Close issue** button next to the comment box. Optionally type a closing comment first. If you want to record a reason, click the dropdown arrow on the button and choose **Close as completed** or **Close as not planned**.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS — Windows)</summary>

1. **Keyboard shortcut (fastest):** Navigate to the comment text area (`D` → "Add a comment" landmark), switch to Focus Mode, then press `Ctrl+Shift+Enter` to close the issue
2. **Button approach:** `Tab` to the "Close issue" button (at the bottom of the page, near the comment box) and press `Enter`
3. Optionally leave a closing comment first

</details>

<details>
<summary>Screen reader users (VoiceOver — macOS)</summary>

1. **Keyboard shortcut (fastest):** `VO+U` → Landmarks → "Add a comment", interact with the text area (`VO+Shift+Down`), then press `Cmd+Shift+Return` to close the issue
2. **Button approach:** Quick Nav `B` or `Tab` to find the "Close issue" button, then `VO+Space`
3. Optionally leave a closing comment first

</details>

### Reopening a closed issue
If an issue is Closed, the "Close issue" button becomes "Reopen issue" — navigate and activate to reopen.

### Assigning an issue
From the issue sidebar:
1. Navigate to "Assignees" heading (`3` or `H`)
2. Activate the gear/plus button
3. Type a username in the search field
4. Select from the dropdown

### Changing labels
From the issue sidebar:
1. Navigate to "Labels" heading
2. Activate the gear button
3. Select/deselect labels from the dropdown
4. Press Escape to save

### Transferring or deleting an issue
Available from the "..." (ellipsis) button at the top of the issue — navigate buttons with `B` to find it.

---

## The "good first issue" Label — Your Entry Point

When looking for your first open source contribution:

1. Navigate to any project's Issues tab
2. Filter by label: type `is:open label:"good first issue"` in the search
3. Read through issues until you find one in your area of interest
4. Comment on the issue: "Hi, I'd like to work on this. Can I be assigned?"
5. Wait for a maintainer to respond and assign you before starting work

**Remember:** It's respectful to ask before starting. Maintainers juggle many discussions and need to know who is working on what to avoid duplicated effort.

---

## Accessibility-Specific Issue Writing Tips

When filing accessibility bugs, these details help maintainers reproduce and fix the problem:

1. **Screen reader and version** — "NVDA 2025.3.3" not just "screen reader"
2. **OS and version** — "Windows 11 22H2"
3. **Browser and version** — "Chrome 124.0.6367.82"
4. **GitHub interface** — "Modern experience (default since Jan 2026)" or "Classic experience (opted out)"
5. **What was announced** — quote the exact text your screen reader spoke
6. **What should have been announced** — describe the expected behavior
7. **ARIA issue if known** — e.g., "The button has no accessible name"
8. **Steps to reproduce** — numbered, step-by-step
9. **Frequency** — "This happens every time" vs "intermittent"

**Example of a well-filed accessibility issue:**

```
Title: Issues list does not announce label filtering results to screen readers

## What happened
When I apply a label filter on the Issues list using the Labels dropdown,
the filtered list updates visually but NVDA does not announce that the
results changed or how many items are now shown.

## What I expected
After filtering, the screen reader should announce something like
"14 issues open, filtered by label: accessibility" or a live region
update indicating the results changed.

## How to reproduce
1. Navigate to any repo's Issues tab
2. Press B to navigate to the "Label" filter button
3. Press Enter to open the dropdown
4. Select the "accessibility" label
5. Press Escape to close
6. Notice: no announcement that filtering has been applied

## Environment
- Screen reader: NVDA 2025.3.3 (with NVDA+Chrome)
- Browser: Chrome 124.0.6367.82
- OS: Windows 11 22H2
- GitHub interface: Modern experience (default since Jan 2026)

## Additional context
JAWS 2026 also does not announce. VoiceOver on macOS Sonoma with
Safari 17 does announce "List updated" when filtering is applied,
so the macOS behavior appears correct.
```

---

## Try It: File Your First Issue

**Time:** 3 minutes | **What you need:** Browser, signed in to GitHub

Go to the Learning Room repository and file a real issue:

1. Navigate to the Issues tab (press `G` then `I` in Focus Mode)
2. Find and activate the "New issue" button (`K` to links, or `Tab` to it)
3. In the title field, type: **"Introduce myself — [Your Name]"**
4. In the description, write 2-3 sentences: who you are, what screen reader you use, and one thing you're hoping to learn today
5. Press `Ctrl+Enter` to submit (or Tab to the Submit button and press `Enter`)

**You're done.** You just filed your first GitHub issue. Go read someone else's introduction and leave a friendly comment — press `3` to jump between issue titles on the Issues list.

> **What success feels like:** Your issue is live. Other participants can see it. You just contributed to a real repository — and it took less than three minutes.

---

> ### Day 2 Amplifier — Agent Forge: `@issue-tracker`
>
> **File, read, comment on, and triage real issues manually before using any agent.** If you have not done the triage work yourself — reading descriptions, assigning labels, identifying duplicates — you cannot evaluate whether an agent's priority scoring is correct. The skill must exist before the amplifier is useful.
>
> Once you have mastered manual issue management:
> - **In VS Code** — `@issue-tracker find open issues labeled good-first-issue` searches cross-repository with community sentiment scoring, release-awareness prioritization, and batch-reply capability across every repo you have access to
> - **In your repo** — The issue templates in `agent-forge/.github/ISSUE_TEMPLATE/` structure both human filing and automated triage; fork `agent-forge` and that structure travels into any project you lead
> - **In the cloud** — GitHub Agentic Workflows triage new issues the moment they are opened: applying labels, posting first-response comments, adding to Project boards — the same triage actions you practiced manually today, running at scale
>
> *Today you are the triage engine. On Day 2, you understand the engine well enough to direct it.*

---

*Next: [Working with Pull Requests](05-working-with-pull-requests.md)*
*Back: [The Learning Room](03-the-learning-room.md)*
*Related: [Issue Templates Guide](15-issue-templates.md) | [Labels & Milestones](08-labels-milestones-projects.md) | [Culture & Etiquette](07-culture-etiquette.md)*
