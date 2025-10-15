---
layout: default
title: Multiple Agents - A2A Overview
nav_order: 7
has_children: true
permalink: /a2a
---

在 issue [#435](https://github.com/unit-mesh/auto-dev/issues/435), 我们创建了 AutoDev 的 A2A 功能。

> A2A 全称为Agent to Agent Protocol，是由Google推出的一个开放协议，旨在实现不同AI智能体之间的互操作性，
> 促进它们在动态多智能体环境下的有效通信和协作。简单来说，A2A协议就像是为AI智能体之间提供了一套标准化的“语言”，
> 使得不同厂商、不同技术框架的AI智能体能够像人与人交流一样，互相理解、互相协作，共同完成任务

## AutoDev Multiple Agents - A2A 

在 AutoDev 中，我们使用 https://github.com/a2aproject/a2a-java 实现了对 A2A 协议的支持。当前 AutoDev 支持
两种的 A2A 功能：

- A2A Agent 即 Tool。即你可以将支持 A2A 的 Agent，作为类似于 MCP 中的 Tool 来使用。
- A2A Debugger。即你可以通过 A2A Debugger 来调试 A2A Agent。

### A2A Agent as Tool: `/a2a`

Enable the MCP server in AutoDev settings, and Config with A2A

```JSON
{
  "mcpServers": {
    "weather": {
      "command": "java",
      "args": [
        "-jar",
        "/Volumes/source/ai/autodev-mcp-test/java-mcp/target/mcp-0.0.1-SNAPSHOT.jar"
      ]
    }
  },
  "a2aServers": {
    "remote-example": {
      "url": "http://localhost:9999"
    }
  }
}
```

如下是示例的 DevIns Command:

<devin>
/a2a
```json
{
  "agent": "code-reviewer",
  "message": "Please review this code for potential security vulnerabilities"
}
```
Legacy format also supported:
/a2a code-reviewer "Please review this code for potential issues"
/a2a documentation-writer "Generate documentation for this module"
/a2a test-generator "Create unit tests for the PaymentService class"
</devin>

### Agent Tool: `/agents`

List all available agents.

/agents

Invoke a specific agent with JSON format:

<devin>
/agents
```json
{
  "agent": "code-reviewer",
  "message": "Please review this code for potential security vulnerabilities"
}
```
</devin>
