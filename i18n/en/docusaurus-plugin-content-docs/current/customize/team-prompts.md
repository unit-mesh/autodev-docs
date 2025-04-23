

---
layout: default
title: Team Prompts
parent: Customize Features
nav_order: 14
permalink: /custom/team-prompts
---

> Discover new ways to collaborate and share your brilliance with your team.

The default Team Prompts path is `prompts/`, which is the `prompts/` directory located in the project's root directory.

AutoDev currently utilizes the Apache Velocity template engine, allowing you to customize your Team Prompts by modifying
template files.

If you make changes to the template files, make sure to save them, as otherwise, the IDE won't recognize your
modifications.

## Format

The Team Prompts file format is .vtl, which is the Velocity Template Language file format. Will be include three parts:

- frontmatter config, which is the prompt config with YAML format
- chat role, like `system`, `user`, will start with \`\`\` and end with \`\`\`, like:
  ```vtl
  ```system```
  ```
- chat content, aka prompt content

## FrontMatter Config

```
---
interaction: AppendCursorStream # the interaction type, support AppendCursorStream, ChatPanel, AppendCursor, OutputFile
priority: 99
batchFileRegex: ".*" # the regex to match the batch file
codeOnly: false # only show the code part
---    
```

Priority is the prompt priority, the higher the priority, the higher the prompt will be displayed in top.

- the default action priority is 900~999, like `Chat with xx`, `Code complete` etc.

interaction type:

- AppendCursor, the prompt will be inserted at the cursor position
- AppendCursorStream, the prompt will be inserted at the cursor position
- ChatPanel, the prompt will be inserted in the chat panel
- OutputFile, the prompt will be inserted in the output file, `output-{timestamp}.{extension}`, the extension will be
  parsed from the result's language.
- ReplaceSelection, the prompt will replace the current selection (since version@1.6.3)
- ReplaceCurrentFile, the prompt will replace the current file (since version@1.8.6)

## English Examples

variables list: [https://ide.unitmesh.cc/variables](https://ide.unitmesh.cc/variables)

```markdown
    ---
    interaction: AppendCursorStream
    ---
    ```user```
    
    You are an experienced software development engineer skilled in using Test-Driven Development (TDD) to develop software.
    You need to help users write test code based on their requirements.
    
    ${frameworkContext}
    
    The current class-related code is as follows:
    
    ${beforeCursor}
    
    The user's requirement is: ${selection}
    
    Please use ```@Test to begin writing your code block:
```

full TDD
example: [https://github.com/unit-mesh/untitled/tree/english/prompts](https://github.com/unit-mesh/untitled/tree/english/prompts)

## 中文示例（Chinese Example）

Variables list: [AutoDev Template Variables](/customize/variables)

```markdown
---
interaction: AppendCursorStream
---

You are a senior software development engineer skilled in using TDD methodology. You need to assist developers in Tasking to facilitate test case writing.

- Each task generated through Tasking should have independent business value, and completion of each task can be independently delivered and create value.
- Use business language descriptions for Tasking to facilitate detailed communication and confirmation between developers and business stakeholders.
- Adopt the Given When Then format, where "When" represents system behavior.
- Consider business scenario coverage and boundary conditions as comprehensively as possible.

Please strictly follow the output format below.

Example:

Question: Develop a taxi fare calculation feature with these rules: 0.8 yuan per km within 8 km, 50% long-distance surcharge beyond 8 km, 0.25 yuan per minute for waiting.
Answer: ###
${commentSymbol} Given taxi traveled 5 km (within 8 km) without waiting, When calculating fare, Then charge 4 yuan
${commentSymbol} Given taxi traveled 5 km (within 8 km) with 10min wait, When calculating fare, Then charge 6.5 yuan
${commentSymbol} Given taxi traveled exactly 8 km without waiting, When calculating fare, Then charge 6.4 yuan
${commentSymbol} Given taxi traveled exactly 8 km with 10min wait, When calculating fare, Then charge 8.9 yuan
###
Question: ${selection}
Answer: ###
```

Complete TDD
example: [https://github.com/unit-mesh/untitled/tree/master/prompts](https://github.com/unit-mesh/untitled/tree/master/prompts)

### Batch File Example

Key points: `batchFileRegex` matches batch files, `codeOnly: true` will only place the pure code part into the file, `interaction: ReplaceCurrentFile` replaces current file.

```markdown
    ---
    interaction: ReplaceCurrentFile
    batchFileRegex: "**/*.ts"
    codeOnly: true
    ---
    
    Refactor user's code.
    Requirement: Only return refactored code within a single markdown code block
    
    ${all}
```