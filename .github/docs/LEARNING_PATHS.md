# Learning Paths

This document outlines the structured progression through Learning Room skills and challenges.

## Learning Philosophy

The Learning Room uses **progressive skill-building**:
- Start with fundamentals
- Build on previous knowledge
- Increase complexity gradually
- Apply skills in real-world scenarios
- Teach others what you've learned

---

## Skill Levels Overview

| Level | PRs Required | Focus Area | Challenges Available |
|-------|--------------|------------|---------------------|
| **Beginner** | 0+ | Markdown basics & simple fixes | 3 challenges |
| **Intermediate** | 1+ | Accessibility fundamentals | 3 challenges |
| **Advanced** | 3+ | Complex accessibility & review | 3 challenges |
| **Expert** | 5+ | Content creation & mentorship | 3+ challenges |

---

## Beginner Path (0+ merged PRs)

### Goal
Get comfortable with GitHub workflow and Markdown basics.

### Skills You'll Learn
- Basic Markdown syntax
- Navigating GitHub interface
- Creating pull requests
- Describing changes clearly
- Responding to feedback

### Available Challenges

#### 1. Fix Broken Link (`skill: markdown`)
**Scenario:** The `docs/welcome.md` file has a broken internal link.

**Your Task:**
- Find the broken link
- Fix the path to point to correct file
- Verify link works in preview

**Learning Objectives:**
- Understanding relative file paths
- Using Markdown preview
- Testing your changes

**Estimated Time:** 10-15 minutes

---

#### 2. Add Keyboard Shortcut (`skill: markdown`)
**Scenario:** The `docs/keyboard-shortcuts.md` file is missing several common shortcuts.

**Your Task:**
- Research a keyboard shortcut not in the list
- Add it with proper formatting
- Include description of what it does

**Learning Objectives:**
- Markdown tables
- Finding documentation
- Clear technical writing

**Estimated Time:** 15-20 minutes

---

#### 3. Complete Welcome Guide (`skill: markdown`)
**Scenario:** The `docs/welcome.md` file has [TODO] sections that need completing.

**Your Task:**
- Replace [TODO] markers with helpful content
- Keep style consistent with existing text
- Ensure all headings follow hierarchy

**Learning Objectives:**
- Document structure
- Consistent voice/tone
- Heading hierarchy basics

**Estimated Time:** 20-30 minutes

---

## Intermediate Path (1+ merged PRs)

### Goal
Master accessibility fundamentals and document structure.

### Skills You'll Learn
- Heading hierarchy
- Descriptive link text
- Alt text for images
- Screen reader considerations
- More complex Git workflows

### Available Challenges

#### 4. Fix Heading Hierarchy (`skill: accessibility`)
**Scenario:** Several docs have heading hierarchy violations (H1 → H3 skips).

**Your Task:**
- Use bot feedback to find violations
- Fix hierarchy to be sequential
- Ensure document outline makes sense

**Learning Objectives:**
- Why heading hierarchy matters
- Screen reader navigation
- Document outlining

**Estimated Time:** 15-20 minutes

**Resources:**
- [MDN: Heading Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)
- [WebAIM: Headings](https://webaim.org/techniques/semanticstructure/#headings)

---

#### 5. Improve Link Text (`skill: accessibility`)
**Scenario:** Multiple docs use generic link text like "click here" and "read more".

**Your Task:**
- Find generic link text
- Rewrite to be descriptive
- Test that context is clear when reading links alone

**Learning Objectives:**
- Link text best practices
- Writing for screen readers
- Context-independent descriptions

**Estimated Time:** 20-30 minutes

**Resources:**
- [WebAIM: Links and Hypertext](https://webaim.org/techniques/hypertext/)

---

#### 6. Add Alt Text (`skill: accessibility`)
**Scenario:** Images in documentation are missing alt text.

**Your Task:**
- Find images without alt text
- Write descriptive alt text
- Consider what screen reader users need to know

**Learning Objectives:**
- Writing effective alt text
- Decorative vs. informative images
- Testing with screen readers (bonus)

**Estimated Time:** 20-30 minutes

**Resources:**
- [Alt Text Guide - WebAIM](https://webaim.org/techniques/alttext/)
- [Workshop Section on Alt Text](../../docs/14-accessible-code-review.md#image-alt-text)

---

## Advanced Path (3+ merged PRs)

### Goal
Conduct comprehensive accessibility reviews and mentor others.

### Skills You'll Learn
- Complete accessibility audits
- Teaching through code review
- Creating clear documentation
- Identifying subtle issues
- Constructive feedback

### Available Challenges

#### 7. Review for Accessibility (`skill: review`)
**Scenario:** A peer has opened a PR. Conduct an accessibility-focused review.

**Your Task:**
- Review ALL accessibility aspects:
  - Heading hierarchy
  - Link text quality
  - Image alt text
  - Table structure
  - Document organization
- Leave constructive comments
- Approve or request changes with clear explanations

**Learning Objectives:**
- Comprehensive review process
- Writing helpful feedback
- Catching subtle issues
- Balancing thoroughness with kindness

**Estimated Time:** 30-45 minutes

**Resources:**
- [Code Review Guide](../../docs/05-working-with-pull-requests.md#reviewing-pull-requests)
- [Giving Feedback](../../docs/07-culture-etiquette.md#giving-feedback)

---

#### 8. Create Documentation (`skill: documentation`)
**Scenario:** Pick an accessibility topic and create comprehensive documentation.

**Your Task:**
- Choose topic (ARIA, keyboard navigation, color contrast, etc.)
- Research thoroughly
- Write clear, actionable guide
- Include examples and resources
- Make it accessible!

**Learning Objectives:**
- Technical writing
- Researching documentation
- Creating learning materials
- Practicing what you teach

**Estimated Time:** 2-3 hours

**Suggested Topics:**
- Keyboard navigation in GitHub
- Using ARIA labels effectively
- Color contrast checking
- Testing with screen readers
- Accessible table creation

---

#### 9. Mentor a Peer (`skill: collaboration`)
**Scenario:** Help a beginner complete their first challenge.

**Your Task:**
- Be assigned as peer reviewer for beginner PR
- Guide them through the process
- Explain not just WHAT but WHY
- Celebrate their progress
- Help them understand feedback

**Learning Objectives:**
- Teaching skills
- Patience and empathy
- Breaking down concepts
- Building confidence in others

**Estimated Time:** 1-2 hours (including async communication)

**Tips:**
- Ask questions that lead to discovery
- Share your own learning journey
- Be encouraging about mistakes
- Point to resources, don't just give answers

---

## Expert Path (5+ merged PRs)

### Goal
Create learning content and lead community initiatives.

### Skills You'll Learn
- Instructional design
- Challenge creation
- Facilitating discussions
- Identifying learning gaps
- Building inclusive communities

### Available Challenges

#### 10. Design a Challenge (`skill: creation`)
**Scenario:** Identify a skill gap and create a new challenge.

**Your Task:**
- Identify what's missing from current challenges
- Design a new learning exercise
- Write clear instructions
- Create example solution
- Add to challenges documentation

**Learning Objectives:**
- Instructional design
- Identifying learning objectives
- Scoping appropriately
- Creating evaluation criteria

**Estimated Time:** 3-5 hours

**Requirements:**
- Clear learning objective
- Appropriate difficulty level
- Estimated completion time
- Resources for learning
- Success criteria

---

#### 11. Accessibility Audit (`skill: accessibility`)
**Scenario:** Conduct full accessibility audit of workshop repository.

**Your Task:**
- Review ALL documentation files
- Test with screen readers
- Check keyboard navigation
- Verify color contrast
- Create issues for problems found
- Prioritize by severity

**Learning Objectives:**
- Systematic testing methodology
- Real-world accessibility evaluation
- Issue triage and prioritization
- Creating actionable bug reports

**Estimated Time:** 4-6 hours

**Deliverables:**
- Audit report (Markdown document)
- Issues filed for each problem
- Suggested fixes
- Priority rankings

---

#### 12. Create Issue Template (`skill: creation`)
**Scenario:** Design an issue template for a specific challenge type.

**Your Task:**
- Choose challenge category
- Design helpful template structure
- Include guidance for users
- Add relevant labels/metadata
- Test with sample issue

**Learning Objectives:**
- Template design
- Guiding user input
- Workflow optimization
- Community tools

**Estimated Time:** 2-3 hours

**Resources:**
- [GitHub Issue Template Docs](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository)

---

## Cross-Level Challenges

These can be attempted at any level:

### Group Challenges
See [`GROUP_CHALLENGES.md`](../../learning-room/docs/GROUP_CHALLENGES.md) for collaborative exercises that work across skill levels.

### Accessibility Deep Dives
Pick any narrow accessibility topic and become the group expert:
- Screen reader testing workflows
- ARIA landmarks
- Skip links
- Focus management
- Form accessibility

### Tool Mastery
Master a specific tool and teach others:
- Git command line workflows
- VS Code accessibility extensions
- Browser DevTools accessibility features
- GitHub keyboard shortcuts

---

## Tracking Your Progress

### Automatic Tracking
The Skills Progression Engine automatically:
- Counts merged PRs
- Awards badges
- Unlocks new challenges
- Celebrates milestones

### Manual Tracking
Keep your own notes:
- What did you learn?
- What was challenging?
- What resources helped?
- What would you teach differently?

### Reflection Prompts
After each merged PR:
- What accessibility principle did you apply?
- How would you explain this to a beginner?
- What related topics do you want to explore?
- How has this changed your perspective?

---

## Graduation & Beyond

### Completing the Program

You "graduate" when you:
- Reach Expert level (5+ merged PRs)
- Complete at least one challenge from each level
- Mentor at least one peer
- Create new learning content (challenge, doc, or template)

### Next Steps

**In This Community:**
- Become a facilitator
- Maintain the learning-room
- Create advanced challenges
- Help onboard new cohorts

**Beyond This Workshop:**
- Contribute to open source projects
- Apply accessibility skills in your work
- Advocate for inclusive practices
- Teach others what you've learned

**Stay Connected:**
- Share your success stories
- Return to mentor new learners
- Contribute to workshop improvements
- Build accessibility into everything you do

---

## Support & Questions

- **Stuck on a challenge?** Comment on your PR and tag your peer reviewer
- **Need conceptual help?** Ask in your study group issue
- **Found a bug in a challenge?** Open an issue with details
- **Want to suggest a new challenge?** Open an issue with label `challenge-idea`

---

## Additional Resources

### Accessibility
- [WebAIM](https://webaim.org/)
- [A11y Project](https://www.a11yproject.com/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

### GitHub & Git
- [GitHub Skills](https://skills.github.com/)
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com/)

### Markdown
- [Markdown Guide](https://www.markdownguide.org/)
- [GitHub Flavored Markdown](https://github.github.com/gfm/)

---

*Progressive learning paths designed for diverse learners. Go at your own pace, support each other, and celebrate every achievement!*
