# Appendix G: GitHub Discussions
## Forum-Style Conversations Beyond Issues and Pull Requests

> GitHub Discussions is a built-in community forum for repositories and organizations. It's where open-ended conversations live — questions, ideas, announcements, polls, and community Q&A — separate from the action-oriented world of issues and pull requests.

---

## Table of Contents

1. [Discussions vs. Issues: When to Use Which](#1-discussions-vs-issues-when-to-use-which)
2. [Navigating to Discussions](#2-navigating-to-discussions)
3. [Discussion Categories](#3-discussion-categories)
4. [Creating a Discussion](#4-creating-a-discussion)
5. [Participating in Discussions](#5-participating-in-discussions)
6. [Marking an Answer](#6-marking-an-answer)
7. [Polls](#7-polls)
8. [Screen Reader Navigation Reference](#8-screen-reader-navigation-reference)
9. [Organization-Level Discussions](#9-organization-level-discussions)
10. [Agent Forge: What's Different Here](#10-agent-forge-whats-different-here)

---

## 1. Discussions vs. Issues: When to Use Which

**Not every conversation belongs in an issue.** GitHub Discussions exists for the conversations that don't fit:

| Use Issues When | Use Discussions When |
|---|---|
| You found a bug | You have a question about how something works |
| You want to request a specific feature | You want to brainstorm ideas before filing a feature request |
| There is actionable work to be done | You want community input before deciding what work to do |
| You need to track progress (labels, assign, close) | You want to have an open conversation without resolving it |
| The answer is "fixed" or "won't fix" | The conversation might not have one right answer |

**The signal for maintainers:** A question in an issue is noisier — it implies something needs to be done. The same question in Discussions doesn't trigger workflow automation and doesn't inflate the issue count.

**Common Discussions categories you'll encounter:**
- **Q&A** — Support questions and answers (one answer can be marked correct)
- **Ideas** — Feature brainstorming before a formal feature request
- **Announcements** — Maintainer posts about releases, breaking changes, roadmaps
- **General** — Everything else
- **Show and Tell** — Community members showing what they built

---

## 2. Navigating to Discussions

### From a Repository

1. Navigate to the repository
2. There is a **Discussions** tab in the main navigation (alongside Code, Issues, Pull Requests, Actions, Projects)
3. Press `T` to navigate tab items, or `K` to navigate links and find "Discussions"
4. Press `Enter` to open

**If the tab is missing:** Discussions is an opt-in feature. The repository maintainer must enable it in Settings. Not all repositories use it.

### From an Organization

Large organizations can have organization-level Discussions separate from any individual repository:

1. Navigate to the organization page
2. Look for the Discussions tab at the organization level
3. These are community-wide conversations, not repo-specific

---

## 3. Discussion Categories

The Discussions home page is organized by category. Each category is a section with its own heading.

**Navigating categories:**
```
3 → Jump to category headings
K → Navigate discussion titles within a category
Enter → Open a discussion
```

**The side panel (left or right depending on view width) shows:**
- All categories with item counts
- Pin/announcements section at top
- Most active discussions
- Tags (if the repo uses them)

---

## 4. Creating a Discussion

1. From the Discussions tab, activate **"New discussion"** button
2. Select a category (required — affects which fields appear)
3. Fill in:
   - **Title** — Clear and searchable. "How do I use the daily-briefing agent?" not "Help"
   - **Body** — Use Markdown. Same editor as issues
   - For **Q&A** category: phrase the title as a question
4. Activate **"Start discussion"**

**Screen reader path:**
```
Tab to "New discussion" button → Enter
→ Category list: ↑/↓ to select category → Enter
→ Title field: type title
→ Tab to body: Focus Mode → type or paste content
→ Tab to "Start discussion" button → Enter
```

**Before posting a question:** Search existing discussions first. Use the search bar at the top of the Discussions page or GitHub's global search with `repo:owner/name in:discussions`.

---

## 5. Participating in Discussions

### Reading a Discussion

A discussion page is structured similarly to an issue:
- The original post at the top
- Replies in chronological order
- An "Answered" reply pinned to the top (Q&A category only)
- A reply editor at the bottom

**Navigation:**
```
H → Jump between the original post heading and reply headings
3 → Navigate individual reply headings
↓ → Read through content
```

### Replying to a Discussion

1. Navigate to the bottom of the page (or use the "Reply" button on a specific comment)
2. The reply text area behaves identically to issue comments
3. Focus Mode → type your reply
4. `Ctrl+Enter` to submit

### Replying to a Specific Comment (Nested Reply)

Each comment has a **Reply** button below it:
```
Tab to "Reply" button on the specific comment → Enter
→ Nested text area opens under that comment
→ Focus Mode → type → Ctrl+Enter
```

### Upvoting

Instead of leaving "+1" comments, use the thumbs-up reaction on the original post or replies. Many maintainers sort discussion responses by upvotes to prioritize most-needed answers.

---

## 6. Marking an Answer

In the **Q&A** category, one reply can be marked as the accepted answer. This is similar to Stack Overflow's "accepted answer" mechanic.

**Only the discussion author and repository maintainers** can mark an answer.

**To mark an answer (as the discussion author):**
1. Navigate to the reply you want to mark as the answer
2. Look for the **"Mark as answer"** button below the reply
3. Activate it — the reply is pinned to the top and the discussion shows a green "Answered" badge

**Why it matters:** Marked answers make Q&A discussions into searchable documentation. Anyone who searches for the same question later immediately sees the correct answer without reading the whole thread.

**To unmark an answer:** Activate "Unmark as answer" on the same reply.

---

## 7. Polls

Some discussion categories support embedded polls. A poll lets you gather structured vote data from the community.

**Creating a poll:**
1. When creating a discussion, look for the "Add a poll" option below the body editor
2. Type each poll option (up to 8 options)
3. Set poll duration (optional)
4. Submit the discussion — the poll appears inline

**Voting in a poll:**
```
Navigate to the poll section
→ Radio buttons or checkboxes for each option
→ Space/Enter to vote
→ "Vote" button → Enter
```

**Poll results:** After voting, percentages appear next to each option. Screen readers announce the count and percentage per option.

---

## 8. Screen Reader Navigation Reference

### Discussions List

```
T                     → Navigate tab bar to reach "Discussions" tab
H / 2                 → Category section headings
3                     → Individual discussion titles (h3 links)
K                     → Navigate all links (discussions, categories, pagination)
Enter                 → Open a discussion
/                     → Focus the search bar (if supported)
```

### Inside a Discussion

```
H                     → Original post heading and top-level reply headings
3                     → Individual replies
↓                     → Read body content
Tab                   → Move to interactive elements (reply buttons, reactions, mark as answer)
Ctrl+Enter            → Submit a reply (when in text area)
```

**NVDA note:**
- Browse mode (NVDA+Space) to read the discussion
- Enter application mode for the reply editor
- Discussion replies are `<article>` elements — NVDA announces "article" as you navigate with H

**JAWS note:**
- `A` key navigates `<article>` elements — useful for jumping between replies
- Use Forms Mode for the reply editor

**VoiceOver note:**
- VO+Right to read through content
- VO+Command+L to list all links (useful for navigating many replies quickly)
- VO+Space on the reply field to enter interaction mode

---

## 9. Organization-Level Discussions

Some organizations enable Discussions at the organization level, separate from any repository. These work identically to repository discussions but span the whole organization.

Common uses:
- Org-wide announcements
- Community introductions ("Introduce yourself" pinned thread)
- Cross-repo feature brainstorming
- Community spotlights and events

Find them at `github.com/ORGANIZATION/discussions`.

---

## 10. Agent Forge: What's Different Here

Agent Forge prompts currently operate on **issues, PRs, and code** — not directly on Discussions. If you want to respond to a discussion using Agent Forge:

1. Copy the discussion URL or content
2. Use `/issue-reply` with the content pasted in: the agent will draft a thoughtful, accessible response
3. Paste the result back into the discussion reply editor

This works well for first-response drafts on Q&A threads or community questions in your area of expertise.

---

*Return to: [Resources](appendix-u-resources.md) | [Glossary](appendix-a-glossary.md)*
