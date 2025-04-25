---
title: 本地智能体
---

# 自定义本地智能体：一行代码，一个智能体

AutoDev 的本地智能体是基于 DevIns 语言与 [Shire](https://shire.phodal.com/) 所构建的，其核心包含三部：

- Hobbit Hole：类似于 Front Matter，用于定义数据结构。
    - Pattern-Action：用于定义数据处理逻辑。
    - Condition Visible：用于定义可见性条件。
    - Output：用于定义输出。
    - Variable：用于定义过程变量。
- Template：用于定义 LLM 模板，基于 Velocity 模板引擎。
- Life Cycle：用于定义生命周期。

示例见：[Untitled .devin](https://github.com/unit-mesh/untitled/tree/master/.devin)

## 快速开始

1. 创建 `sample.devin`

```devin
Explain code /file:src/main/java/com/example/Controller.java
```

2. 点击运行

![AutoDev DevIns](https://unitmesh.cc/auto-dev/autodev-devins.png)

## 示例

### 获取远程规范，调用 AI 编写代码

在 variables 中，你可以通过 thread 函数获取远程的规范内容，并通过 jsonpath 函数提取出你需要的内容。

```devin
---
name: "Design Profobuf IDL"
actionLocation: ContextMenu
variables:
  "spec": /any/ { thread(".devin/shell/fetch-teamai-spec.sh") | jsonpath("$.[1].content") }
onStreamingEnd: { parseCode | saveFile | openFile }
---

Please based on the user's input and spec, generate the corresponding Proto file.

Spec is as follows:

$spec

The user's requirement is: $selection
```

同时，在 onStreamingEnd，即执行完当前的 DevIns 之后，执行 parseCode、saveFile 和 openFile 三个 Processor，来处理当前的输出结果。

### 获取 Jira ID，生成提交信息

其中的 actionLocation 用于定义当前 DevIns 的执行位置，CommitMenu 表示在提交信息编写页面执行。

```devin
---
name: "Commit message"
description: "生成提交信息"
interaction: AppendCursor
actionLocation: CommitMenu
variables:
  "story": /any/ { thread(".devin/shell/fetch-jira.sh") | jsonpath("$.data[*].Story") }
---

为给定的变更（Diff）编写一个连贯但具有描述性的代码提交信息。

- 确保包含修改了什么以及为什么。
- 以不超过 50 个字符的祈使句形式开头，使用 # 号带上需求编号。

现有的变更如下：

$currentChanges

请遵循常规提交规范，例如：

- fix(authentication): 修复密码正则表达式模式问题
- feat(storage): 添加对S3存储的支持
- test(java): 修复用户控制器的测试用例
- docs(architecture): 在主页添加架构图

我当前待完成的需求信息有：$story，请分析出适合的需求编号，以 # 加到提交信息中。

只返回提交信息，不使用 ``` 标记。
```

### 多个 DevIns 编排示例

通过 afterStreaming 你可以在执行完当前的 DevIns 之后，执行下一个 DevIns。同时，可以把当前的变量以及 `$output` 传递给下一个
DevIns。
如下代码示例：

```devin
---
name: "设计数据库"
variables:
  "story": /any/ { thread(".devin/shell/github-issue.curl.sh") | jsonpath("$.body") }
afterStreaming: {
  case condition {
    default { execute("gen-sql.devin", $story, $output) }
  }
}
---

You are a professional Database Administrator.
According to the user's requirements, you should choose the best Tables for the user in List.

— User use database: $databaseInfo
- User tables: $tables

For example:

- Question(requirements): calculate the average trip length by subscriber type.  User tables: trips, users, subscriber_type *
- You should anwser: [trips, subscriber_type]

----

Here are the User requirements:

$story

Please choose the best Tables for the user, just return the table names in a list, no explain.
```

在 variable 中定义了一个变量 story，内容为 GitHub Issue 的正文内容。通过 `thread` 函数获取 issue 的正文内容，并通过
`jsonpath` 函数提取出正文内容。

