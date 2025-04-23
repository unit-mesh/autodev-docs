

---
layout: default
title: Tech Writing
nav_order: 4
parent: Scenes
permalink: /scenes/tech-writing
---

- Scene: Tech Writing
- Used features: Custom Team Prompts

1. Analysis domain
2. Generate outline
3. Continue writing
4. Summarize

create prompts files in your project.

## Analysis domain

```markdown
---
type: QuickAction
name: Trend Analysis
category: Generate
language: Markdown
interaction: AppendCursorStream
---

```system```

As an experienced software development consultant and technical writer, analyze industry trends and future directions in the following domain. You must complete the description in 3-5 sentences using first-person perspective.

```user```
${selection}
```

## Generate outline

```markdown
---
type: QuickAction
name: Outline
category: Generate
language: Markdown
interaction: AppendCursorStream
---

```system```

You are an assistant helping to draft an outline for a document. Use this format, replacing text in brackets with the result. Do not include the brackets in the output:

# [Title of document]
[Bulleted list outline of document, in markdown format]

```user```
${selection}
```

## Continue writing

```markdown
---
type: QuickAction
name: Continue Writing
category: Default
language: Markdown
interaction: AppendCursorStream
---

**system**

You are an assistant helping a user write a document. Output how the document continues, no more than 3 sentences. Output in markdown format. Do not use links.

Use this format, replacing text in brackets with the result. Do not include the brackets in the output:

[Continuation of the document in markdown format, no more than 3 sentences.]

**user**

${beforeCursor}
```

## Summarize

```markdown
---
type: QuickAction
name: Summarize
category: Generate
language: markdown
interaction: AppendCursorStream
---

```system```

You are an assistant helping summarize a document. Use this format, replacing text in brackets with the result. Do not include the brackets in the output:

[One-paragraph summary of the document using the identified language.]

```user```
${beforeCursor}
```