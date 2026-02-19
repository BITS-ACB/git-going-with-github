# Appendix X: GitHub Copilot AI Models Reference

<!-- TOC -->
- [Overview](#1-overview)
- [How to Choose a Model](#2-how-to-choose-a-model)
- [Complete Model Reference](#3-complete-model-reference)
- [Model Availability by Plan](#4-model-availability-by-plan)
- [Premium Requests and Cost Multipliers](#5-premium-requests-and-cost-multipliers)
- [Switching Models in VS Code](#6-switching-models-in-vs-code)
- [Auto Model Selection](#7-auto-model-selection)
- [Models Retiring Soon](#8-models-retiring-soon)
<!-- /TOC -->

---

## 1. Overview

GitHub Copilot offers access to AI models from multiple providers including OpenAI, Anthropic, Google, and xAI. The model you choose affects response quality, speed, and premium request consumption. Different models excel at different tasks — understanding these trade-offs helps you get better results.

**Models are updated frequently.** This appendix reflects the model landscape as of February 2026. For the latest additions and retirements, see the [GitHub Copilot changelog](https://github.blog/changelog/label/copilot/) and [GitHub's official supported models documentation](https://docs.github.com/en/copilot/reference/ai-models/supported-models).

---

## 2. How to Choose a Model

GitHub Docs organizes models by task. Match your task to the right model to get the best results without unnecessary premium request cost.

### General-Purpose Coding and Writing

For everyday tasks — code completions, explanations, refactoring, writing documentation.

| Model | Provider | Strengths | Cost |
|-------|----------|-----------|------|
| **GPT-4.1** | OpenAI | Fast, accurate code completions and explanations. Reliable default for most tasks. | Free |
| **GPT-5 mini** | OpenAI | Reliable for most coding and writing tasks. Fast and accurate across languages and frameworks. Also supports image input. | Free |
| **GPT-5.1-Codex** | OpenAI | Higher-quality code on complex engineering tasks like features, tests, debugging, refactors, and reviews — without requiring lengthy prompts. | 1× |
| **Grok Code Fast 1** | xAI | Specialized for coding. Performs well on code generation and debugging across multiple languages. | 0.25× |
| **Raptor mini** | OpenAI (fine-tuned) | Specialized for fast, accurate inline suggestions and explanations. Optimized for completions. | Free |

### Fast Help with Simple or Repetitive Tasks

For quick answers, boilerplate generation, renaming, or lightweight explanations where speed matters.

| Model | Provider | Strengths | Cost |
|-------|----------|-----------|------|
| **Claude Haiku 4.5** | Anthropic | Balances fast responses with quality output. Ideal for small tasks and lightweight code explanations. | 0.33× |
| **Gemini 3 Flash** | Google | Fast, reliable answers to lightweight coding questions. | 0.33× |
| **GPT-5.1-Codex-Mini** | OpenAI | Fast reasoning variant; quick answers on coding tasks. | 0.33× |

### Deep Reasoning and Debugging

For complex problems, architecture decisions, multi-file analysis, tricky bugs, and understanding unfamiliar codebases.

| Model | Provider | Strengths | Cost |
|-------|----------|-----------|------|
| **GPT-5 mini** | OpenAI | Deep reasoning with faster responses. Ideal for interactive sessions and step-by-step code analysis. | Free |
| **GPT-5.2** | OpenAI | Great at complex reasoning, code analysis, and technical decision-making. | 1× |
| **Claude Sonnet 4 / 4.5 / 4.6** | Anthropic | More reliable completions and smarter reasoning under pressure. Performance and practicality balanced for coding workflows; strong at complex problem-solving. | 1× |
| **Claude Opus 4.6** | Anthropic | Anthropic's most powerful model. Best for the most demanding complex problem-solving challenges and sophisticated reasoning. | 3× |
| **Gemini 2.5 Pro** | Google | Complex code generation, debugging, and research workflows. | 1× |
| **Gemini 3 Pro** | Google | Advanced reasoning across long contexts and scientific or technical analysis. Supports vision/image input. | 1× |
| **Goldeneye** | OpenAI (fine-tuned) | Complex problem-solving and sophisticated reasoning. Available for code completions and Copilot Free users only. | 1× |

### Agentic Software Development

For autonomous coding tasks in Agent mode — when Copilot writes code, runs terminal commands, and iterates without step-by-step guidance from you.

| Model | Provider | Strengths | Cost |
|-------|----------|-----------|------|
| **GPT-5.1-Codex-Max** | OpenAI | Best for agentic tasks. Recommended when using Copilot in Agent mode. | 1× |
| **GPT-5.2-Codex** | OpenAI | Best for agentic tasks. Strong autonomous reasoning and multi-step execution. | 1× |
| **GPT-5.3-Codex** | OpenAI | Newest Codex variant. Powerful agentic capabilities. | 1× |

### Working with Visuals

For tasks that involve images, screenshots, diagrams, or UI mockups — paste an image directly into the chat input.

| Model | Supports Images |
|-------|----------------|
| GPT-5 mini | Yes |
| Claude Sonnet 4 / 4.5 / 4.6 | Yes |
| Gemini 3 Pro | Yes |

---

## 3. Complete Model Reference

| Model | Status | Provider | Plans | Multiplier |
|-------|--------|----------|-------|-----------|
| GPT-4.1 | GA | OpenAI | Free, Pro, Pro+, Business, Enterprise | 0 (free) |
| GPT-5 mini | GA | OpenAI | Free, Pro, Pro+, Business, Enterprise | 0 (free) |
| Raptor mini | Preview | OpenAI (fine-tuned) | Free, Pro | 0 (free) |
| Goldeneye | GA | OpenAI (fine-tuned) | All plans (completions only) | 1× |
| Grok Code Fast 1 | GA | xAI | Pro, Pro+, Business, Enterprise | 0.25× |
| Claude Haiku 4.5 | GA | Anthropic | Pro, Pro+, Business, Enterprise | 0.33× |
| Gemini 3 Flash | GA | Google | Pro, Pro+, Business, Enterprise | 0.33× |
| GPT-5.1-Codex-Mini | GA | OpenAI | Pro, Pro+, Business, Enterprise | 0.33× |
| GPT-5.1-Codex | GA | OpenAI | Pro, Pro+, Business, Enterprise | 1× |
| GPT-5.1-Codex-Max | GA | OpenAI | Pro, Pro+, Business, Enterprise | 1× |
| GPT-5.1 | GA | OpenAI | Pro, Pro+, Business, Enterprise | 1× |
| GPT-5.2 | GA | OpenAI | Pro, Pro+, Business, Enterprise | 1× |
| GPT-5.2-Codex | GA | OpenAI | Pro, Pro+, Business, Enterprise | 1× |
| GPT-5.3-Codex | GA | OpenAI | Pro, Pro+, Business, Enterprise | 1× |
| Claude Sonnet 4 | GA | Anthropic | Pro, Pro+, Business, Enterprise | 1× |
| Claude Sonnet 4.5 | GA | Anthropic | Pro, Pro+, Business, Enterprise | 1× |
| Claude Sonnet 4.6 | GA | Anthropic | Pro, Pro+, Business, Enterprise | 1× |
| Gemini 2.5 Pro | GA | Google | Pro, Pro+, Business, Enterprise | 1× |
| Gemini 3 Pro | Preview | Google | Pro, Pro+, Business, Enterprise | 1× |
| Claude Opus 4.5 | Preview | Anthropic | Pro+, Business, Enterprise | 3× |
| Claude Opus 4.6 | GA | Anthropic | Pro+, Business, Enterprise | 3× |

> **Note:** Model availability changes frequently. Check [GitHub's supported models page](https://docs.github.com/en/copilot/reference/ai-models/supported-models) for the current list.

---

## 4. Model Availability by Plan

| Plan | Free Models Included | Paid Models Available | Monthly Premium Requests |
|------|---------------------|----------------------|--------------------------|
| **Copilot Free** | GPT-4.1, GPT-5 mini, Raptor mini | None | 50 (monthly) |
| **Copilot Pro** | All 0× models | Most (Pro+ models excluded) | 300 (monthly) |
| **Copilot Pro+** | All 0× models | All models | Unlimited |
| **Copilot Business** | All 0× models | Most | 300 per user (monthly) |
| **Copilot Enterprise** | All 0× models | All models | Unlimited |

Models marked with a premium multiplier consume premium requests proportionally. For example, Claude Opus 4.6 (3× multiplier) uses 3 premium requests per message. Free models (0× multiplier) never consume premium requests.

---

## 5. Premium Requests and Cost Multipliers

| Multiplier | Impact | Example Models |
|-----------|--------|----------------|
| **0 (free)** | Never consumes premium requests | GPT-4.1, GPT-5 mini, Raptor mini |
| **0.25×** | Very low cost | Grok Code Fast 1 |
| **0.33×** | Low cost | Claude Haiku 4.5, Gemini 3 Flash, GPT-5.1-Codex-Mini |
| **1×** | Standard | Claude Sonnet 4/4.5/4.6, GPT-5.1-Codex, GPT-5.2, Gemini 2.5 Pro, Codex variants |
| **3×** | High cost | Claude Opus 4.5, Claude Opus 4.6 |

**Tips for managing premium request usage:**

- Use **GPT-4.1** or **GPT-5 mini** (both free) for everyday questions, quick explanations, and simple completions — they're fast and capable
- Upgrade to **Claude Sonnet** or **GPT-5.2** (1×) only when the task genuinely requires deeper reasoning
- Save **Claude Opus** (3×) for the most demanding analyses — architecture decisions, complex debugging, sophisticated design review
- Use **Auto** mode (see below) and let Copilot allocate model selection intelligently

---

## 6. Switching Models in VS Code

### In the Chat Panel

1. Open the **Chat** panel (`Ctrl+Shift+I` / `Cmd+Shift+I`)
2. At the bottom of the chat input area, you'll see the current model name as a button (e.g., "Auto" or "Claude Sonnet 4.6")
3. Activate the model picker button — this opens a dropdown list of available models
4. Arrow through the list and press `Enter` to select a model
5. For screen reader users: the chat input will announce the newly selected model after switching

### In an Inline Chat Session

1. Open Inline Chat (`Ctrl+I` / `Cmd+I`)
2. The model picker appears in the inline chat toolbar
3. Same interaction: activate the model button to switch

### Keyboard Note for Screen Readers

In the Chat panel, the model picker button is near the **bottom** of the chat view. If you're having trouble locating it:

- Tab through the bottom toolbar of the chat panel
- Listen for the model name announced — it appears between the "Attach" button and the send button
- Press `Space` or `Enter` to open the picker

---

## 7. Auto Model Selection

**Auto mode** (the default) lets Copilot choose the best model based on the type of request. It became generally available on December 10, 2025.

**How Auto works:**
- For simple questions, Copilot routes to a faster, lighter model
- For complex code generation or debugging, Copilot upgrades to a more capable model automatically
- For agent tasks, Copilot selects an appropriate Codex model
- You can see which model was used after each response

**When to override Auto:**
- You specifically need a model with certain capabilities (e.g., vision input with Claude Sonnet 4)
- You're managing premium request quotas and want to control costs
- You've found a particular model gives better results for your specific workflow or domain
- You're doing agentic work and want to explicitly use GPT-5.1-Codex-Max or GPT-5.2-Codex

To switch back to Auto from a specific model, re-open the model picker and select **Auto** at the top of the list.

---

## 8. Models Retiring Soon

GitHub regularly updates the model roster. Older model versions are retired when newer equivalents are available. When a model is retired, Copilot stops sending requests to it and falls back to newer alternatives.

**Already retired (as of February 2026):**
- Claude Sonnet 3.5, Claude Sonnet 3.7
- Gemini 2.0 Flash
- o1-mini, o3, o3-mini, o4-mini
- Claude Opus 4.1
- GPT-5 (base), GPT-5-Codex

To stay current, watch the [GitHub Copilot changelog](https://github.blog/changelog/label/copilot/) — model additions and retirements are announced there.

---

## Related Resources

- [GitHub Docs: Comparing AI models](https://docs.github.com/en/copilot/reference/ai-models/model-comparison)
- [GitHub Docs: Supported AI models in Copilot](https://docs.github.com/en/copilot/reference/ai-models/supported-models)
- [GitHub Docs: Changing the model for Copilot Chat](https://docs.github.com/en/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-chat)
- [Appendix W: GitHub Copilot Reference](appendix-w-github-copilot-reference.md)
- [Chapter 13: GitHub Copilot](13-github-copilot.md)
