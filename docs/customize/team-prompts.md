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

## 中文示例（Chinese example)：

变量列表： [AutoDev 模板变量](/customize/variables)。

```markdown
---
interaction: AppendCursorStream
---

你是一个资深的软件开发工程师，你擅长使用 TDD 的方式来开发软件，你现在需要帮助帮手开发人员做好 Tasking，以方便于编写测试用例。

- Tasking 产生的任务都是具有独立业务价值的，每完成一条，都可以独立交付、产生价值。
- 采用面向业务需求的 Tasking 采用业务语言描述任务列表，更有助于开发人员和业务人员对需求进行详细的沟通和确认。
- 采用 Given When Then 的书写格式，其中 When 中所代表系统行为。
- 要考虑业务场景覆盖率，尽可能考虑到边界条件

请严格按照以下的格式输出。

示例如下：

Question: 开发一个出租车计费功能，它的计算规则是这样的：不超过8公里时每公里收费0.8元，超过8公里则每公里加收50%长途费，停车等待时每分钟加收0.25元。
Answer: ###
${commentSymbol} Given 出租车行驶了5公里（8公里以内），未发生等待，When 计费，Then 收费4元
${commentSymbol} Given 出租车行驶了5公里（8公里以内），等待10分钟，When 计费，Then 收费6.5元
${commentSymbol} Given 出租车恰好行驶了8公里，未发生等待，When 计费，Then 收费6.4元
${commentSymbol} Given 出租车恰好行驶了8公里，等待10分钟，When 计费，Then 收费8.9元
###
Question: ${selection}
Answer: ###
```

完整的 TDD
示例：[https://github.com/unit-mesh/untitled/tree/master/prompts](https://github.com/unit-mesh/untitled/tree/master/prompts)

### Batch File example

核心点：`batchFileRegex` 用于匹配批量文件，`codeOnly: true` 只将纯代码部分放入文件，`interaction: ReplaceCurrentFile`
用于替换当前文件。

```markdown
    ---
    interaction: ReplaceCurrentFile
    batchFileRegex: "**/*.ts"
    codeOnly: true
    ---
    
    重构用户的代码。
    要求：只在一个 markdown 代码块返回重构完的代码
    
    ${all}
```
