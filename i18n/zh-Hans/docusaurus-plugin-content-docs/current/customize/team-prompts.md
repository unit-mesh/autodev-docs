---
layout: default
title: 团队提示
parent: 功能定制
nav_order: 14
permalink: /custom/team-prompts
---

> 探索新的合作方式并与您的团队分享您的才华。

默认的 Team Prompts 路径是`prompts/`，它是`prompts/`位于项目根目录中的目录。

AutoDev 目前使用 Apache Velocity 模板引擎，允许您通过修改模板文件来定制您的团队提示。

如果您对模板文件进行了更改，请确保保存它们，否则，IDE 将无法识别您的修改。


## 格式

团队提示文件格式是 .vtl，即 Velocity 模板语言文件格式。它包含三个部分：

- 前置配置，即 YAML 格式的提示配置
- 聊天角色，如  `system`, `user`, 将以 \`\`\` 开始并以 \`\`\`结束，例如：
  ```vtl
  ```system```
  ```
- 聊天内容，即提示内容

## 前置配置

```
---
interaction: AppendCursorStream # 交互类型，支持 AppendCursorStream, ChatPanel, AppendCursor, OutputFile
priority: 99
batchFileRegex: ".*" # 匹配批处理文件的正则表达式
codeOnly: false # 只显示代码部分
---    
```

Priority 是提示优先级，优先级越高，提示在顶部显示的位置越靠前。

- 默认操作优先级为 900~999，如 `Chat with xx`, `Code complete` 等。

交互类型：

- AppendCursor，提示将插入到光标位置
- AppendCursorStream，提示将插入到光标位置
- ChatPanel，提示将插入到聊天面板
- OutputFile，提示将插入到输出文件，`output-{timestamp}.{extension}`，扩展名将从结果的语言中解析。
- ReplaceSelection，提示将替换当前选择（自版本@1.6.3起）
- ReplaceCurrentFile，提示将替换当前文件（自版本@1.8.6起）

## 英文示例

变量列表: [https://ide.unitmesh.cc/variables](https://ide.unitmesh.cc/variables)

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
