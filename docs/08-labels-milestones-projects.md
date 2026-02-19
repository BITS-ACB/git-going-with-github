# Labels, Milestones, and Projects
## Organizing Work and Cross-Referencing on GitHub

> Labels, milestones, and projects are the organizational layer of GitHub. They turn a chaotic list of issues into a structured, navigable, prioritized body of work.

---

## Labels

### What Are Labels?

Labels are colored tags applied to issues and pull requests. They communicate at a glance what category, priority, or status an item belongs to. When you scan the issue list with your screen reader, labels are announced alongside each issue title.

Labels are announced as: "Label: bug" or "Labels: accessibility, good first issue" depending on how many are applied.

### Standard Labels You Will Find in Most Repos

| Label | Purpose |
|-------|---------|
| `bug` | Something isn't working as expected |
| `enhancement` | A new feature or improvement |
| `documentation` | Changes or additions to documentation only |
| `good first issue` | Suitable for first-time contributors |
| `help wanted` | Maintainers are actively seeking community help |
| `question` | More information is needed before action |
| `invalid` | The issue doesn't meet the project's criteria |
| `wontfix` | The project won't address this (by design or out of scope) |
| `duplicate` | Another open issue covers the same topic |
| `accessibility` | Accessibility-related issue or change |
| `needs triage` | Not yet reviewed by a maintainer |

### Navigating to the Labels Page

From a repository:

<details>
<summary>Visual / mouse users</summary>

Go to the **Issues** tab, then click the **Labels** link/button (it’s in the filter toolbar above the issue list, next to Milestones). The Labels page shows every label with its colour, name, and description.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS — Windows)</summary>

1. Navigate to the Issues tab
2. Press `K` to find the "Labels" link (near the "Milestones" link in the toolbar)
3. Press `Enter`

</details>

<details>
<summary>Screen reader users (VoiceOver — macOS)</summary>

1. Navigate to the Issues tab
2. Quick Nav `K` to find the "Labels" link (near the "Milestones" link in the toolbar)
3. `VO+Space` to activate

</details>

### Applying a Label to an Issue or PR

From an open issue or PR:

<details>
<summary>Visual / mouse users</summary>

In the right sidebar, click the gear icon () next to **Labels**. A dropdown opens showing all labels. Click a label to apply it (a checkmark appears). Click outside to close — the label appears immediately on the issue.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS — Windows)</summary>

1. Navigate to the sidebar → press `H` or `3` to find the "Labels" heading
2. Activate the Labels gear/edit button (`B` until you hear "Labels" button → `Enter`)
3. Dropdown opens showing all available labels: use `↑/↓` to navigate
4. `Enter` to select or deselect a label; type to filter (e.g., type "access" to find "accessibility")
5. Press `Escape` to close — selections save automatically

</details>

<details>
<summary>Screen reader users (VoiceOver — macOS)</summary>

1. `VO+U` → Headings or Quick Nav `H` to find the "Labels" heading in the sidebar
2. Quick Nav `B` to find the "Labels" gear/edit button → `VO+Space`
3. Dropdown opens: `VO+Down` or arrow keys to navigate labels
4. `VO+Space` to select or deselect; type to filter
5. `Escape` to close — selections save automatically

</details>

### Filtering Issues by Label

<details>
<summary>Visual / mouse users</summary>

- **Using the filter button:** From the Issues list, click the **Label** dropdown button above the issue list, choose the label(s) you want, then click outside to apply. The active filter shows in the search bar.
- **Using the search bar:** Click in the search/filter bar and type `label:accessibility` (for example) along with any other filters.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS — Windows)</summary>

**Option A — Filter bar:** Press `F` → type `is:open label:accessibility` → `Enter`

**Option B — Filter button:** `B` → "Label" dropdown button → `Enter` → `↑/↓` to choose → `Enter` → `Esc`

**Option C — Combining labels:** `is:open label:accessibility label:"good first issue"`

</details>

<details>
<summary>Screen reader users (VoiceOver — macOS)</summary>

**Option A — Filter bar:** Quick Nav `F` to find the search bar → `VO+Shift+Down` to interact → type `is:open label:accessibility` → `Return`

**Option B — Filter button:** Quick Nav `B` → "Label" dropdown button → `VO+Space` → arrow keys to choose → `VO+Space` to select → `Esc`

**Option C — Combining labels:** `is:open label:accessibility label:"good first issue"`

</details>

### Creating a New Label

If you have write access:
1. Navigate to Issues → Labels page
2. Tab to "New label" button → Enter
3. Fill in: Label name (F for form field), Color (use the color picker or hex code), Description
4. Tab to "Create label" button → Enter

**Accessibility note for color:** Labels have color, but they also have a text name and description — the color is supplementary information. Screen readers announce the label name, not the color, so labels are fully accessible.

---

## Milestones

### What Are Milestones?

Milestones group issues and PRs toward a shared goal or deadline. Think of a milestone as a sprint, a version release, or an event (like "Hackathon Day 1 Deliverables"). A milestone shows:
- A title and optional description
- An optional due date
- A progress bar (percentage of closed issues vs total)

### Navigating to Milestones

From Issues tab:
1. Press `K` to find the "Milestones" link → Enter
2. You see a list of milestones, each with its title, progress, and due date

**Reading a milestone:**
Each milestone is announced as a heading + progress information:
- "Hackathon Day 1 Deliverables, 3 of 8 issues closed, due April 20"

### Opening a Milestone

1. Press `3` to navigate milestone titles (they are h3 links)
2. Press `Enter` to open a milestone
3. The milestone detail page shows all issues and PRs belonging to it
4. Navigate the list with `3` (issue titles) or `I` (list items)

### Adding an Issue to a Milestone

<details>
<summary>Visual / mouse users</summary>

From the open issue, find the **Milestone** section in the right sidebar and click the gear icon. A dropdown lists available milestones — click one to assign it.

</details>

<details>
<summary>Screen reader users (NVDA / JAWS — Windows)</summary>

1. Navigate to the sidebar → "Milestone" heading (`H` or `3`)
2. Activate the Milestone gear button
3. Select a milestone from the dropdown (`↑/↓` → `Enter`)
4. `Esc` to close

</details>

<details>
<summary>Screen reader users (VoiceOver — macOS)</summary>

1. Quick Nav `H` or `VO+Cmd+H` to find the "Milestone" heading in the sidebar
2. Quick Nav `B` to find and activate the Milestone gear button (`VO+Space`)
3. Select a milestone from the dropdown (`VO+Down` or arrow keys → `VO+Space`)
4. `Esc` to close

</details>

### Creating a Milestone

Requires write access:
1. Navigate to Milestones page
2. Tab to "New milestone" button → Enter
3. Fill in: Title, Description, Due date (optional)
4. Tab to "Create milestone" → Enter

**Due date field note:** The date field may render as a date picker. You can:
- Type the date in `YYYY-MM-DD` format directly (most reliable)
- Or use arrow keys to adjust month/day/year if spin buttons are provided
- Or press `Space` or `Enter` to open a calendar widget (if your screen reader supports it) and arrow through dates

Screen readers handle date pickers inconsistently — typing the date is most reliable across browsers.

---

## Cross-References

Cross-references are links between issues, PRs, and commits. GitHub automatically renders `#42` as a link to issue or PR #42. This creates a web of context so any contributor can trace the history of a decision.

### Types of Cross-References

| Syntax | Effect |
|--------|--------|
| `#42` | Links to issue or PR #42 in the same repo |
| `owner/repo#42` | Links to issue #42 in a different repository |
| `a1b2c3d` | Links to a specific commit by its SHA hash |
| `@username` | Notifies and links to a GitHub user's profile |
| `Closes #42` | Closes issue #42 when the PR merges |
| `Fixes #42` | Same as Closes — conventional for bugs |
| `Resolves #42` | Same as Closes — general use |
| `Refs #42` | Links without auto-closing |

### Typing a Cross-Reference

Inside any comment or PR description text area (Focus Mode):
1. Type `#` — a live-search dropdown appears
2. Continue typing the issue number or title fragment
3. Use `↓` to navigate the dropdown → `Enter` to select
4. The `#42` link is inserted automatically

For `@mentions`:
1. Type `@` followed by a username
2. A dropdown of suggestions appears
3. `↓` to navigate → `Enter` to select

### When the "Closes" Keyword Fires

The `Closes #42` keyword must appear in:
- The **PR description** (body text)
- A **commit message** pushed to the default branch

It does **not** fire from comments on the PR. If you write "Closes #42" in a comment, it creates a reference but does not auto-close the issue on merge.

---

## GitHub Projects

### What Is a GitHub Project?

GitHub Projects is a built-in project management tool. It can display issues and PRs from across multiple repositories in one view. Projects support three layouts:

| Layout | Description | Best For |
|--------|-------------|----------|
| **Table** | Spreadsheet-style with custom fields | Tracking detailed status |
| **Board** | Kanban columns (Todo, In Progress, Done) | Visual workflow |
| **Roadmap** | Timeline/Gantt view | Planning across time |

### Finding a Project

From an organization page or repository:
1. Navigate to the "Projects" tab
2. Press `3` to navigate project titles (they are h3 links)
3. `Enter` to open a project

### Navigating a Project — Table View

```
Step 1: The main content is a large grid/table
Step 2: T to jump to the table
Step 3: Ctrl+Alt+↓ to navigate rows (each row is an issue or PR)
Step 4: Ctrl+Alt+→ to navigate columns (Title, Status, Priority, etc.)
Step 5: Enter on a row to open the issue/PR detail panel
```

**What is announced per row:**
"Add keyboard navigation to carousel | Status: In Progress | Assignee: username | Priority: High"

### Navigating a Project — Board View

```
Step 1: Switch to Board view using the view selector button
Step 2: Each column (Todo / In Progress / Done) is a region
Step 3: D to navigate between column landmarks
Step 4: Within a column: 3 to navigate card titles, I for list items
Step 5: Enter on a card to open the issue/PR panel
```

### Adding an Issue to a Project

From an open issue:
1. Navigate to the sidebar "Projects" section (`H` or `3`)
2. Activate the Projects gear button
3. Select the project from the dropdown

Or from within a project:
1. Activate "Add item" button at the bottom of a column/table
2. Type `#` to search for existing issues
3. Select the issue → it's added to the project

---

## Practical Organization Strategy for the Hackathon

Here is a recommended structure for the `learning-room` sandbox project:

### Labels to create
```
accessibility      — all a11y-related work
documentation      — docs-only changes
good first issue   — for new contributors
in progress        — being actively worked on
needs review       — PR is open, review needed
blocked            — waiting on something external
help wanted        — community assistance requested
```

### Milestone to create
```
Name: Hackathon Day 1 Deliverables
Due: [Day 1 date]
Description: All contributions made during Day 1 of the Open Source AT Hackathon
```

### Workflow
```
1. File an issue → add label + milestone
2. Comment "I'll work on this" → add "in progress" label
3. Make changes → open PR → link to issue
4. PR merged → issue closes automatically → milestone progress updates
```

---

## Try It: Label and Link

**Time:** 2 minutes | **What you need:** Browser, signed in to GitHub

Go to the Learning Room repository and do two things:

1. **Add a label to an issue** — Open any issue (press `G` then `I`, then `Enter` on an issue title). Press `L` (in Focus Mode) to open the label picker. Type `documentation` to filter, then press `Enter` to apply it. Press `Esc` to close.
2. **Use a cross-reference** — Leave a comment on that issue mentioning another issue number: `Related to #1` (or any issue number you've seen). Press `Ctrl+Enter` to submit.

**You're done.** You just organized work using labels and connected two issues with a cross-reference.

> **What success feels like:** The label now appears on the issue, and your cross-reference is a clickable link that connects the two issues. That's project management on GitHub — and you did it in under two minutes.

---

> ### Day 2 Amplifier — Agent Forge: `@issue-tracker` with Labels
>
> **Apply labels and milestones manually in today's exercises before using any agent.** Labels are the language that automation uses to filter, route, and prioritize work. If you have not designed and applied them yourself, you cannot configure them correctly for automated use — and you cannot tell when automation is applying the wrong ones.
>
> Once you have mastered manual organization:
> - **In VS Code** — `@issue-tracker find open issues labeled accessibility, severity-high` uses the exact label vocabulary you configured today, delivering prioritized cross-repository results with community engagement and release-impact scoring
> - **In your repo** — Agent Forge forks carry the label schema in `.github/ISSUE_TEMPLATE/`; your project's organizational language travels with every clone and does not require manual recreation
> - **In the cloud** — GitHub Agentic Workflows apply labels automatically when issues are opened, routing work into the right milestone and Project view without manual triage on every item — but only if your labels were designed with clear, consistent intent
>
> *Labeling today is not overhead. It is configuring the input layer that every agent downstream depends on.*

---

*Next: [Notifications](09-notifications.md)*
*Back: [Culture and Etiquette](07-culture-etiquette.md)*
*Related: [Working with Issues](04-working-with-issues.md) | [Day 1 Agenda](../DAY1_AGENDA.md)*
