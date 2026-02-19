# Appendix S: Organizations, Templates, and Repository Settings
## A Contributor's Guide to GitHub's Structural Features

> This appendix covers three features that shape how repositories and communities are organized on GitHub: repository templates (how new projects are bootstrapped), GitHub organizations (the account type behind most open source projects and companies), and repository settings (the configuration that governs visibility, archiving, and other behavior contributors encounter in the wild).

---

## Repository Templates

### Template vs. Fork — Which One?

These are two very different actions that both appear near the "Code" button:

| Action | Use when... | What you get |
|--------|-------------|-------------|
| **Fork** | Contributing back to the original project | Full git history; your changes can be PRed upstream |
| **Use this template** | Starting a *new* project based on the structure | Clean git history; no connection to the original repo |

GitHub Skills courses use **"Use this template"** — you start fresh with the course scaffold but your copy has no upstream connection.

Agent-forge could serve as a template if you want to build your own agent suite starting from its structure without forking.

### Creating a Template Repository

Maintainers can mark any repository as a template:
1. Navigate to the repository's **Settings** tab
2. Scroll to the **"General"** section → find the **"Template repository"** checkbox
3. Check it and save
4. The repository now shows a **"Use this template"** button instead of (or alongside) "Fork"

### Using a Template Repository

1. Navigate to the template repository
2. Select **"Use this template"** button (near the top, next to "Code")
3. Select **"Create a new repository"**
4. Name your new repository, choose visibility, and confirm
5. GitHub creates a new repository with the template's files but **no commit history**

**Screen reader path:**
```
B → navigate buttons → find "Use this template" → Enter
↓ → "Create a new repository" from the dropdown → Enter
```

---

## GitHub Organizations — A Contributor's View

### What Is an Organization?

A GitHub organization is an account that multiple people share. Instead of `github.com/username/repo`, organization repos live at `github.com/org-name/repo`. The workshop's central project lives at `github.com/accesswatch/agent-forge` — `accesswatch` is an organization.

| Personal Account | Organization Account |
|-----------------|---------------------|
| Owned by one person | Shared by a team or community |
| Single-person repos | Repos are shared assets |
| Your profile at `github.com/username` | Org profile at `github.com/org-name` |
| You are the only admin | Has owners, members, and optional teams |

### Joining an Organization

Maintainers can invite you to join. When invited:
1. You receive an email + GitHub notification
2. Navigate to [github.com/settings/organizations](https://github.com/settings/organizations) to accept
3. Or click the link in the invitation email

You can also be a **public contributor** to an org repo without being a member — you fork the repo and submit PRs without needing an invitation.

### Organization Membership Visibility

- By default, your org membership is **private** (only you and org owners can see it)
- You can set it to **public** in your organization membership settings
- Public membership appears on your GitHub profile under "Organizations"
- For `accesswatch`: if you become a member, set your membership public to show your contribution publicly on your profile

### Teams Inside Organizations

Organizations can create **teams** (e.g., `@accesswatch/accessibility-reviewers`). When you see a team mentioned in a PR or issue, that `@mention` notifies everyone on that team. As a contributor, you don't need to create teams — just understand why you see them.

### Navigating an Organization Profile Page

At `github.com/accesswatch`:
```
H → headings: org name, People, Repositories, Projects sections
1 → jumps to the org name heading
Links → navigate to individual repositories, members, and projects
```

Organization-level Projects (like the `accesswatch` project board) appear in the org's Projects tab, not inside any single repository.

---

## Repository Settings — What Contributors Need to Know

You may not have Settings access to most repositories (that requires maintainer role). But knowing what's there helps you understand why a repository behaves the way it does.

### Repository Visibility

| Setting | What it means for contributors |
|---------|-------------------------------|
| **Public** | Anyone can view and fork; you don't need an account to read it |
| **Private** | Only invited users can see or contribute |
| **Internal** (org only) | Visible to all org members; cannot be forked outside the org |

The repository's visibility label appears on its page. Screen readers: the visibility badge is usually near the repo name heading (`H1`).

### Archived Repositories

When a maintainer archives a repository, it becomes **read-only**:
- No new issues, PRs, or comments can be created
- Existing content is fully preserved and viewable
- The UI shows a yellow banner: "This repository has been archived by the owner."
- Screen readers: NVDA/JAWS will read this banner when you navigate to the top of the page with `Ctrl+Home`

If you find a repo you planned to contribute to is archived, look for a fork or successor project.

### Repository Topics

Topics are keyword tags on a repository (e.g., `accessibility`, `screen-reader`, `open-source`). They appear as colored chips on the repository home page and improve discoverability in GitHub search.

- **As a contributor:** Topics tell you what the project is about at a glance
- **As a maintainer:** Add topics in Settings → General → Topics section to improve search ranking
- **Screen reader:** Topics are links in the "About" sidebar section; use `B` (next button) or Links list to reach them

### Default Branch Name

The default branch is the one all PRs target by default. Modern projects use `main`; older projects may use `master` or another name. When you clone and create a branch, you always branch from the repository's default branch.

The default branch name appears in the branch selector at the top of the Code tab.

---

*Return to: [Resources](appendix-u-resources.md) | [Appendix R — GitHub Profile, Sponsors, and Wikis](appendix-r-github-profile-sponsors-wikis.md) | [Appendix A — Glossary](appendix-a-glossary.md)*
