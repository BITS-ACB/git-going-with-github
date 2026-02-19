# Appendix F: GitHub Gists
## Shareable Code Snippets and Notes

> Gists are a simple way to share code snippets, notes, or small files without creating a full repository. Think of them as lightweight, version-controlled pastebins.

---

## What Is a Gist?

A Gist is a Git repository that holds a single file or a small collection of files. Every Gist:
- Has its own URL (e.g., `gist.github.com/username/a1b2c3d4`)
- Is version-controlled (you can see edit history)
- Can be **public** (anyone can see) or **secret** (only people with the link can see)
- Supports Markdown rendering
- Can be embedded in web pages
- Can be cloned, forked, and starred just like repos

**Secret does not mean private.** Anyone with the URL can view a secret Gist. It's just not listed publicly on your profile.

---

## When to Use a Gist vs a Repository

| Use a Gist When... | Use a Repository When... |
|--------------------|--------------------------|
| Sharing a single code snippet | Building a full project |
| Posting configuration examples | Collaborating with multiple people |
| Quick notes or documentation | Need issues, PRs, or project management |
| Sharing logs or error messages | Want CI/CD and automated checks |
| Small utility scripts | Need multiple branches |

---

## Creating a Gist

### Via GitHub Web Interface

1. Navigate to [gist.github.com](https://gist.github.com)
2. **Gist description:** A short title (e.g., "NVDA configuration for GitHub")
3. **Filename:** Name your file with extension (e.g., `nvda-config.txt`, `script.py`, `notes.md`)
4. **Content:** Paste or type your code/text
5. **Visibility:**
   - Select **"Create public gist"** for openly shareable content
   - Select **"Create secret gist"** for link-only sharing
6. The Gist is created with a unique URL you can share

**Screen reader navigation:**
- `D` to cycle landmarks to "Main"
- `F` to navigate form fields
- Tab through: Description → Filename → Content textbox → Visibility buttons

### Adding Multiple Files to a Gist

You can add multiple files to a single Gist:
1. After typing the first filename and content, select **"Add file"** (button below the editor)
2. Repeat for each additional file
3. Create the Gist

**Use case:** Share related config files together (e.g., `.vscode/settings.json` + `.vscode/keybindings.json`)

---

## Editing a Gist

1. Navigate to your Gist's URL
2. Select **"Edit"** (button in the top-right)
3. Make your changes
4. Select **"Update public gist"** or **"Update secret gist"**

Every edit creates a new revision. Click **"Revisions"** to see the full edit history.

---

## Embedding a Gist

You can embed Gists in web pages, blog posts, or documentation:

```html
<script src="https://gist.github.com/username/gist-id.js"></script>
```

GitHub renders it as a formatted code block with syntax highlighting and a link back to the Gist.

**Accessibility note:** Embedded Gists are `<iframe>` elements. Screen readers will announce them as "frame" and allow navigation into the content.

---

## Cloning a Gist

Every Gist is a Git repository. You can clone it:

```bash
git clone https://gist.github.com/username/gist-id.git
```

Make changes locally, commit, and push just like a normal repo.

---

## Forking a Gist

You can fork someone else's Gist to create your own copy:
1. View the Gist
2. Select **"Fork"** in the top-right
3. GitHub creates a new Gist under your account

**Use case:** Someone shares a useful script, you fork it, and customize it for your needs.

---

## Finding Your Gists

**Your Gists page:** [gist.github.com/your-username](https://gist.github.com/)

All your public and secret Gists are listed here. You can:
- Search your Gists by filename or content
- Star Gists you want to reference later
- Delete old Gists

**Screen reader navigation:**
- Each Gist appears as a heading (H2) with its description
- Press `2` or `H` to jump between Gists
- Each Gist has links: "Edit," "Delete," "Star," "Embed"

---

## Discovering Public Gists

**Browse trending Gists:** [gist.github.com/discover](https://gist.github.com/discover)

See popular Gists by language. Great for finding:
- Useful scripts and utilities
- Configuration examples
- Code snippets for learning

---

## Gist Comments

Public Gists support comments. Anyone with a GitHub account can leave a comment, making Gists useful for:
- Asking questions about a snippet
- Suggesting improvements
- Discussing implementation details

**To add a comment:**
1. Scroll to the bottom of the Gist page
2. `F` to navigate form fields → Find the comment textarea
3. Type your comment (Markdown supported)
4. `Ctrl+Enter` or activate "Comment" button

---

## Security and Privacy

**Public Gists:**
- Appear on your profile
- Are indexed by search engines
- Anyone can view, fork, and comment

**Secret Gists:**
- Do not appear on your profile
- Are not indexed by search engines
- Anyone with the URL can view
- Still version-controlled and can be starred

**Never put sensitive data in Gists:**
- Passwords or API keys
- Personal identifying information
- Proprietary code you don't have permission to share

If you accidentally post sensitive data:
1. Delete the Gist immediately
2. Revoke/regenerate any exposed credentials
3. Remember: Forks and clones may still exist

---

## Example Use Cases

### 1. Sharing Screen Reader Config

```
Filename: nvda-github-config.txt
Content:
# NVDA Settings for GitHub Web Navigation
- Browse Mode: Use screen layout (enabled)
- Verbosity: Most punctuation
- Rate: 65%
- Keyboard shortcuts: Use standard GitHub shortcuts (G+I, G+P, etc.)
```

Share the Gist URL with other screen reader users.

### 2. Quick Markdown Note

```
Filename: workshop-notes.md
Content:
# Workshop Day 1 Notes
- GitHub Flow: branch → commit → PR → review → merge
- Keyboard shortcuts: G+I (issues), G+P (PRs), / (search)
- Always link PRs to issues with "Closes #N"
```

Reference it later or share with workshop participants.

### 3. Code Snippet for a StackOverflow Answer

When answering questions, paste your code as a Gist and link to it. Readers get syntax highlighting, version history, and the ability to fork your solution.

---

## Gists vs GitHub Repositories — Quick Comparison

| Feature | Gist | Repository |
|---------|------|------------|
| Issues | No | Yes |
| Pull Requests | No | Yes |
| GitHub Actions | No | Yes |
| Projects | No | Yes |
| Multiple branches | No | Yes |
| Revisions/history | Yes | Yes |
| Forkable | Yes | Yes |
| Embeddable | Yes | No |
| Comments | Yes | Yes (on issues/PRs) |

---

## Deleting a Gist

1. Navigate to the Gist
2. Select **"Edit"**
3. Select **"Delete"** (top-right, after Edit button)
4. Confirm deletion

**Warning:** Deletion is permanent. Forks of your Gist are not deleted.

---

*Return to: [Resources](appendix-u-resources.md)*
