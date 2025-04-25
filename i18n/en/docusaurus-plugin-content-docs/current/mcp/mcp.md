---
layout: default
title: MCP
nav_order: 6
has_children: true
permalink: /mcp
---

在 issue [#330](https://github.com/unit-mesh/auto-dev/issues/330), 我们创建了 AutoDev 的 MCP Tool 功能。

# Model Context Protocol (MCP)

> MCP 旨在通过提供一种标准化的接口，LLM 应用可以访问外部信息、工具和资源。

优点：

- **解耦**大模型与工具调用
- 提升开发效率与**工具生态**
- **跨平台与协议标准化**

当前 MCP Server 的组件包括：

- 工具（模型控制）：这些是大语言模型（LLM）可以调用以执行特定操作的函数（工具），例如天气 API，本质上就是函数调用。
- 资源（应用控制）：这些是 LLM 可以访问的数据源，类似于 REST API 中的 GET 端点。资源仅提供数据，不执行复杂计算，没有副作用，作为上下文/请求的一部分提供给模型。
- 提示词模板（用户控制）：这些是预定义的模板，用于以最优方式使用工具或资源，在进行推理之前选择使用。

在 AutoDev 是一个编程助手，因此主要是支持工具的使用。

## 环境准备

如下是 AutoDev 使用 MCP 的示例：

```json
{
  "mcpServers": {
    "weather": {
      "command": "java",
      "args": [
        "-jar",
        "/Volumes/source/ai/autodev-mcp-test/java-mcp/target/mcp-0.0.1-SNAPSHOT.jar"
      ]
    }
  }
}
```

从配置中，你会看到使用 STDIO 方式的 MCP 调用，它依赖于 command 和 args 来启动 MCP 服务器。因此，当你知道不同语言开发 MCP 服务器时，
你需要有对应的运行环境，确保可以通过命令行调用。

- 使用 Java 开发 MCP 服务器，需要安装 JDK
- 使用 Node.js 开发 MCP 服务器，需要: [Install Node.js with Npx](https://nodejs.org/en/download/package-manager)
- 使用 Python 开发 MCP 服务器，需要安装 UV 或者其它工具

