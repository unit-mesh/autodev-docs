---
layout: default
title: MCP
nav_order: 6
has_children: true
permalink: /mcp
---

# 模型上下文协议（MCP）

> MCP 是一个开放协议，用于标准化应用程序向大型语言模型（LLMs）提供上下文的方式。可以将 MCP 视为 AI 应用的 USB-C 接口。
> 正如 USB-C 为设备连接各类外设和配件提供了标准化方式，MCP 也为 AI 模型连接不同数据源和工具提供了标准化方案。

在 issue [#330](https://github.com/unit-mesh/auto-dev/issues/330) 中，我们讨论了将 AutoDev 作为 MCP 服务器使用的可能性。
本文档将详细讨论具体实现方案。

环境要求：需安装 Node.js 和 Npx

- https://nodejs.org/en/download/package-manager
