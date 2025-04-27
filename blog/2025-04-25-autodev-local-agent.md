---
title: AutoDev 本地智能体，你的 Agent 自由工坊
---

当下大多数 AI 编程助手，无论是 Copilot、Cursor，还是各种类 AutoGPT 项目，本质上都存在一个问题：AI 编码助手只是更强的补全器，
而不是具备行为能力的开发者副手。它们擅长补全代码，但缺乏结构化任务理解、缺乏上下文感知，更无法根据开发者的意图自我组织多步行为。
更重要的是：**它们是“别人造好的助手，而不是你能定义的工具**

AutoDev 的本地智能体系统，从根本上改变了这个逻辑。

## AutoDev 的新范式：Prompt 即 Agent，配置即能力链

AutoDev 推出的本地智能体系统以两个核心理念为基础：

1. **智能体的结构可声明、能力可组合、行为可扩展**
2. **一句 Prompt + 一段配置，生成一个完全私有、本地可运行的 Agent 编码助手**

其核心架构允许开发者：

- 自定义 agent 的能力链（例如先读文件、再检索相关函数、然后写测试并提交）
- 注入自己的提示词风格、子任务规划逻辑，甚至嵌入插件模块
- 在本地选择任意大模型（如 Deepseek、Qwen、GLM）完成推理

你还可以定义它在 IDE 的交互方式、在命令行的交互方式，甚至在 @ 的交互方式：

- actionLocation：IDE 中的交互位置，诸如 ContextMenu、CommitMenu、@mention 等
- interaction：输出方式，诸如 AppendCursor、RightPanel 等。

### ✅ 示例配置：一分钟声明你的 Agent

如下，我们将创建一个用户选中需求后，可以用鼠标右键点击生成 Protobuf IDL 的智能体：

```devin
---
name: "Design Profobuf IDL"
actionLocation: ContextMenu
variables:
  "spec": /any/ { thread(".devin/shell/fetch-teamai-spec.sh") | jsonpath("$.[1].content") }
onStreamingEnd: { parseCode | saveFile | openFile }
---

请根据用户的输入和规范，生成相应的 Proto 文件。

规范如下：

$spec

用户的需求是：$selection
```

只需这一段 YAML，AutoDev 就能生成一个理解团队协议规范的智能体：

- 自动调用 `fetch-teamai-spec.s` 脚本获取需求规范
- 注入上下文信息并结合用户选中需求
- 自动生成符合要求的 `.proto` 文件并打开编辑

这种原子化能力封装 + 跨工具联动方式，大大拓展了 agent 的实用边界。

### ✅ 示例配置二：编排的数据库设计智能体

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

你是一位专业的数据库管理员。根据用户的需求，你应该在列表中为用户选择最佳的表。

— 用户使用数据库：$databaseInfo
- 用户表：$tables

例如：

- 问题（要求）：按用户类型计算平均行程长度。用户表：trips, users, Subscriber_type *
- 你应该回答：[trips, Subscriber_type]

----

以下是用户需求：

$story

请为用户选择最佳的表，只需以列表形式返回表名，无需解释。
```

只需这一段配置，AutoDev 会自动生成：

- 一个能够理解数据库结构并执行 SQL 生成的智能体
- 完全根据用户输入的数据库表和需求动态生成查询
- 将查询结果传入到下一个智能体（`gen-sql.devin`）进行处理

### ✅ 示例配置三：在聊天中生成代码

只需要在配置中添加 `agentic` 为 `true` 的值，并将 `$selection` 改为 `$input` 变量，AutoDev 就会自动将用户的输入传递给智能体：

```devin
---
name: "Design Profobuf IDL"
actionLocation: ContextMenu
variables:
  "spec": /any/ { thread(".devin/shell/fetch-teamai-spec.sh") | jsonpath("$.[1].content") }
onStreamingEnd: { parseCode | saveFile | openFile }
agentic: true
---

请根据用户的输入和规范，生成相应的 Proto 文件。

规范如下：

$spec

用户的需求是：$input
```

## 总结：智能体的未来，是“开发者驱动”的自由工坊

AutoDev 本地智能体系统给开发者带来了真正的控制权。

- 你定义行为，而不是接受行为
- 你组合模块，而不是等待功能更新
- 你掌控模型，而不是被平台绑定

每个开发者都应该拥有属于自己的 AI 编程助手，而不是为一个 “通用 Copilot” 妥协。

这，就是 AutoDev 想做的事。

📌 项目地址： https://github.com/unit-mesh/autodev
📚 文档 & 快速上手： https://ide.unitmesh.cc/docs
