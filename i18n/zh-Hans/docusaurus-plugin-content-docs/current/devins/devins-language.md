---
layout: default
title: DevIns 语言规范
nav_order: 2
parent: AI Agent 语言
---

# DevIn 语言

在 issue [#101](https://github.com/unit-mesh/auto-dev/issues/101) 中，为了更好地与 LLM 交互，并改进对 `@`、`/`、`#`、`$` 和 `!` 的补全处理，我们引入了一种新语言：DevIn。

代码仓库: [DevIns 语言](https://github.com/unit-mesh/auto-dev/tree/master/exts/devin-lang)

基于: [JetBrains的Markdown工具库](https://github.com/JetBrains/intellij-community/tree/master/platform/markdown-utils)

## 设计理念

- `/` 内置命令，与IDE/编辑器交互的自然语言指令，如读取文件、写入文件等
- `@` 智能体，自然语言自定义函数/系统函数名称，对应处理程序或命令
- `$` 变量，自然语言变量名称，如文件名、文件内容等
- ~~`#` 传统第三方系统API，如 `#kanban:afd`、`#issue:233`、`#github:111` 等~~（2.0.0版本已移除）

## 语言规范

```bnf
DevInFile ::= (used | code | TEXT_SEGMENT | NEWLINE)*

used ::= (
    AGENT_START AGENT_ID
    | COMMAND_START COMMAND_ID (COLON COMMAND_PROP?)?
    | VARIABLE_START VARIABLE_ID
)

code ::=  CODE_BLOCK_START LANGUAGE_ID? NEWLINE? code_contents? CODE_BLOCK_END?

code_contents ::= (NEWLINE | CODE_CONTENT)*
```
