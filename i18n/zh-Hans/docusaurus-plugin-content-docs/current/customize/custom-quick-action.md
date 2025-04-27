---
layout: default
title: 自定义快速操作
parent: 自定义
nav_order: 10
permalink: /custom/quick-action
---

# 自定义快速操作

QuickAction 通过 `control` + 反斜杠(`\`) 键触发。默认行为是显示输入对话框，您可以在其中输入提示词。

## 自定义配置

示例项目：[https://github.com/unit-mesh/untitled](https://github.com/unit-mesh/untitled)

完整示例参考：[https://github.com/unit-mesh/untitled/tree/master/prompts/quick](https://github.com/unit-mesh/untitled/tree/master/prompts/quick)

通过在 `prompts/quick` 目录下放置提示文件即可自定义任务：

```markdown
---
type: QuickAction
name: Continue Writing
category: Default
language: Markdown
interaction: AppendCursorStream
---
**system**

你是一个协助用户撰写文档的助手。输出文档的后续内容，不超过3句话。使用markdown格式输出，不要使用链接。

请按照以下格式替换方括号中的内容，输出时不要包含方括号：

[用markdown格式续写文档内容，不超过3句话]

**user**

${beforeCursor}
```
