---
layout: default
title: AutoDev MCP
---

在 Agentic Coding 这一话题下，工具使用（Tool Use/Function calling）是一个非常有意思的话题。完成一个软件开发任务，需要使用到大量的工具，
除去在 IDE 及其插件生态本身提供的功能外，还会使用到大量的外部工具，如 Git、Docker、Kubernetes、Jenkins 等等。如何让 AI
知道更多工具的存在以及如何使用这些工具，是一个非常有意思的话题。

所以，我花了一天的时间在 AutoDev 中实现了相关的功能，即 AutoDev 作为一个 MCP 服务，可以被任何 Agent Tool 调用；AutoDev 作为一个
MCP 客户端，可以调用任何 MCP 服务。

## 引子 1：从渐进性 AI Agent 方案，到 AutoDev 即 MCP 服务

在更庞大的 AI Agent 话题之下，比如自动化的 Computer Use 场景下，IDE 也只是一个可调用的 Agent 工具。从当前的 AI Agent
进度来看，现在的 Agent Tool 使用是一种渐进式的 AI Agent 方案 —— 毕竟写过 E2E 测试的同学都知道：操作 UI 的效率是非常之低的；以至于我们在编写
AutoDev 时，并没有写多少 UI 自动化测试。

我们现在考虑的 AI Coding 是以 IDE 为中心的，但是还存在一个场景是以 Agent Tool 为中心的。即：

- Agent 通过操纵 Browser 去获取需求信息；
- Agent 打开 IDE 去编写代码；
- Agent 打开 DevOps 工具去发布代码；
- ……

既然借助 Agent Tool 来调用工具是 2025 年的一个趋势，那么我们为什么不将 AutoDev 作为一个 MCP 服务呢？即 AutoDev 作为一个
MCP 服务，让任何 Agent Tool 都可以调用 AutoDev 的服务。哪怕是 Cursor、Cline、GitHub Copilot 等等，都可以调用 AutoDev 的服务，以获取
IDE 中的高质量上下文。

## 引子 2：从 MCP 即 Agent Tool 生态，到 MCP 服务即 AutoDev 指令

在过去，我们在 AutoDev 中优先考虑的是借助 IDE 的生态，以及自身的插件体系，以实现 AI 更好的支持端到端的开发流程。但是，随着我们在
AutoDev 集成了更丰富的插件能力之后，我们依然需要大量的 Agent Tool。

### Agent Tool 决定 AI IDE 的基线能力

不可否认，在我们研究了大量的 AI Coding 工具之后，我们会发现，大量的 AI Editor 基于 VSCode 时在 tool 上提供的能力非常之相似，以至于我们
可以用一张图来描述它们的能力。但是，在 IDE 上的 AI Coding 插件则提供了更加丰富的能力，如 AST、Debug、FQN 查找等等。

典型的基于 VSCode 的 AI Coding 工具，提供了十个左右的工具，而基于 JetBrains 的 AI Coding 插件（如 AutoDev、JetBrains
Junie）则提供了 20 个左右的工具，而这些只是基础的 IDE 上的能力。

而随着 AI Coding 进一步向需求、部署、运维等方向发展，相关的工具生态势必会更加丰富。

### MCP 开源生态已经形成

MCP（Model Context Protocol）是由 Anthropic 公司（Claude 模型） 推出的一个协议，它通过提供一种标准化的接口，LLM
应用可以访问外部信息、工具和资源。尽管我们在 AutoDev 提供了强大的自定义能力，诸如于 Custom Agent 等能力，但是：

- 有些工具是我们无法预知的，如某些公司内部的工具；
- MCP 等工具的生态是非常丰富的，并且正在成为一个标准。（尽管国内可能有一些不同）

但是，自打 Cursor、Cline 等编程工具引入了 MCP 之后，大量的 MCP 服务已经在国外形成了一个生态，特别是已经有了非常多的开源实现。

## AutoDev x MCP：双向赋能

基于上述的思考，我们基于 MCP 相关的插件（MCP Plugin）和生态（io.modelcontextprotocol），构建了 AutoDev x MCP 的双向赋能方案。即：

- AutoDev 作为一个 MCP 服务，可以被任何 Agent Tool 调用；
- AutoDev 作为一个 MCP 客户端，可以调用任何 MCP 服务。

通过这两种方式来沉淀我们在 MCP 方面的能力。

### AutoDev 作为 MCP 服务端

我们基于 JetBrains 的 MCP 方案，提供构建了 AutoDev 作为一个 MCP 服务的能力（注：需要在配置中开启 MCP 能力）。你只需要通过 JSON 来配置即可
，如下是 Cline 插件中的配置示例：

```json
{
  "mcpServers": {
    "AutoDev": {
      "command": "npx",
      "args": [
        "-y",
        "@jetbrains/mcp-proxy"
      ],
      "disabled": false,
      "autoApprove": []
    }
  }
}
```

在当前的版本里，我们只基于官方提供的能力，加了一些数据库相关的能力，其它能力需要等有合适的国产 MCP 服务后再进行扩展。

### AutoDev 作为 MCP 客户端

相似的，你需要在 AutoDev 的 Custom Agent 页面配置相关的 MCP 服务，如下是 MCP 官方提供的示例

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Volumes/source/ai/auto-dev"
      ]
    }
  }
}
```

随后，这个 MCP 服务提供的工具，就可以在 AutoDev 中被调用了。如下是转换为 DevIns 后的示例：

     /list_directory
     ```json
     {
      "path": "/Volumes/source/ai/autocrud/docs/mcp"
     }
     ```

现在，借助于强大的 AutoDev DevIns Command，你可以在 AutoDev 中调用任何 MCP 服务，当然 Agent 也是可以的。

## 其它

人生苦短，我有 AI。

- 详细文档见：https://ide.unitmesh.cc/mcp
- 欢迎下载和使用最新版本 AutoDev（v2.0.0-rc.2）进行体验。下载地址：https://github.com/unit-mesh/auto-dev/releases/tag/v2.0.0-rc.2
