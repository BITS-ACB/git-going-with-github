# Appendix R: GitHub Profile, Sponsors, and Wikis
## Building Your Community Presence on GitHub

> This appendix covers three community-facing GitHub features: your profile README (how the world sees you), GitHub Sponsors (financially supporting the people whose work you depend on), and GitHub Wikis (community-editable documentation inside a repository).

---

## Profile Customization

### The Special Profile README

GitHub has a hidden feature: if you create a repository named exactly **your-username/your-username** (e.g., `janesmith/janesmith`), the README in that repo appears on your GitHub profile page.

**This is your profile README.** It's a custom introduction visible to anyone who visits your profile.

### Creating Your Profile README

1. Create a **new repository**
2. Name it exactly `your-username` (match your GitHub username exactly, case-sensitive)
3. Make it **public**
4. Initialize with a README
5. Edit the README with whatever you want to show on your profile

**What to include:**

- **Introduction:** Who you are, what you work on
- **Current focus:** What projects or technologies you're learning
- **Skills:** Languages, frameworks, tools (optional)
- **How to reach you:** Email, LinkedIn, personal site
- **Fun facts:** Hobbies, interests (optional—keeps it human)

**Example profile README:**

```markdown
# Hi, I'm Jane Smith

I'm an accessibility advocate and open source contributor focused on making the web more inclusive.

## Current focus
- Contributing to NVDA documentation
- Building accessible React components
- Learning TypeScript

## Skills
- JavaScript, Python, HTML/CSS
- Screen reader testing (NVDA, JAWS, VoiceOver)
- Git, GitHub, GitHub Actions

## Get in touch
- Email: jane@example.com
- LinkedIn: [linkedin.com/in/janesmith](https://linkedin.com/in/janesmith)

## Fun fact
I've been using screen readers for 8 years and believe accessible design is better design for everyone.
```

### Profile README Best Practices

**Keep it concise** — visitors skim, not read  
**Update occasionally** — a README from 2019 looks stale  
**Be authentic** — people connect with real humans, not buzzwords  
**Include links** — make it easy to learn more or get in touch  

**Avoid excessive badges** — 50 skill badges is visual clutter and screen reader noise  
**Skip auto-generated stats** — "commits per day" widgets are often inaccessible  
**Don't overthink it** — a simple paragraph is better than nothing  

### Screen Reader Considerations

- **Use headings** (`##`) for structure
- **Provide alt text** for any images: `![Description of image](url)`
- **Avoid ASCII art** — screen readers read it character by character (annoying)
- **Test your README** with a screen reader before publishing

### Other Profile Customizations

**Pinned repositories (up to 6):**

- Highlight your best work on your profile
- Navigate to your profile → Select "Customize your pins"
- Choose which repos appear first

**Contribution graph:**

- Shows your GitHub activity over the past year
- Green squares indicate days with commits, PRs, issues, etc.
- Cannot be customized but reflects consistent contribution

**Status:**

- Set a temporary status message (e.g., "On vacation until March 15")
- Navigate to your profile → Select the smile icon → Set status

---

## GitHub Sponsors (Supporting Open Source)

### What Is GitHub Sponsors?

GitHub Sponsors lets you financially support developers and projects you depend on. It's like Patreon for open source.

**How it works:**
- Developers/projects create a Sponsors profile
- You choose a monthly sponsorship tier ($5, $10, $25/month, etc.)
- Your payment goes directly to the developer (GitHub takes no fees)

### Why Sponsor?

- **Sustainability:** Many open source maintainers volunteer their time. Sponsorships help them keep projects alive.
- **Gratitude:** If a project saved you hours of work, sponsorship is a way to say thanks.
- **Priority support:** Some maintainers offer sponsor-only Discord access, early releases, or prioritized bug fixes.

### How to Sponsor

1. Navigate to a user or repository's GitHub page
2. Look for the **"Sponsor"** button (heart icon)
3. Choose a tier or custom amount
4. Select payment method (credit card or PayPal)
5. GitHub sends a receipt; your sponsorship appears on your profile (optionally publicly)

**Screen reader navigation:**
- The Sponsor button appears near the profile photo or repo name
- Press `B` to cycle through buttons on the page until you hear "Sponsor"

### Can I Receive Sponsorships?

Yes! If you maintain an open source project or contribute regularly:

1. Navigate to [github.com/sponsors](https://github.com/sponsors)
2. Select "Join the waitlist" or "Set up sponsors"
3. Connect a payment method (Stripe or bank account)
4. Create sponsor tiers with descriptions
5. Promote your Sponsors page to your audience

Many accessibility advocates successfully use Sponsors to fund their work improving assistive technology and inclusive design.

---

## GitHub Wikis

### What Is a GitHub Wiki?

Every repository can have a wiki — a space for documentation separate from the code. It's lightweight and Markdown-based.

**When to use a wiki:**
- Multi-page documentation (tutorials, guides, FAQs)
- Community-editable docs (wikis can be editable by anyone)
- Knowledge that doesn't belong in README (too long, too specific)

**When NOT to use a wiki:**
- Your project already uses GitHub Pages or external docs
- Documentation needs to be version-controlled with code (wikis are separate Git repos)
- You want full control (wikis are less customizable than Pages)

### Accessing a Repo's Wiki

1. Navigate to the repository
2. Select the **"Wiki"** tab
3. If no wiki exists, you'll see "Create the first page"

### Creating Wiki Pages

1. Go to the Wiki tab
2. Select **"New page"**
3. Add a **title** and **content** (Markdown)
4. Select **"Save"**

Wiki pages automatically appear in a sidebar for navigation.

### Wiki Accessibility

- GitHub's wiki editor is the same as the issue/PR comment editor
- All Markdown features work (headings, lists, links, code blocks)
- Use proper heading hierarchy (`##`, `###`) for screen reader navigation
- Link between wiki pages: `[[Page Title]]`
- **Screen reader caveat:** Wiki pages are a separate Git repository. Any changes pushed directly to the wiki's git remote are not tracked by the main repository's branch protection — meaning no PR review process applies. Treat wikis as community-editable supplementary docs, not your primary critical documentation source.

---

*Return to: [Resources](appendix-u-resources.md) | [Appendix S — Organizations and Templates](appendix-s-github-organizations-templates.md) | [Appendix G — GitHub Discussions](appendix-g-github-discussions.md) | [Appendix T — Contributing to Open Source](appendix-t-contributing-to-open-source.md) | [Appendix A — Glossary](appendix-a-glossary.md)*
