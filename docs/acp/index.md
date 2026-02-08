---
layout: default
title: ACP
nav_order: 8
has_children: true
permalink: /acp
---

# Agent Client Protocol (ACP)

> ACP (Agent Client Protocol) 是一个开放协议，旨在标准化代码编辑器/IDE 与 AI 编码助手之间的通信。
> 它允许任何支持 ACP 的 AI 代理在任何支持 ACP 的客户端（如 IntelliJ IDEA、Zed、Neovim）中无缝工作。

## 为什么需要 ACP？

在 AI 编码助手快速发展的今天，每个工具都有自己的集成方式：

- **重复开发**：每个 AI 代理都需要为不同的 IDE 编写适配代码
- **用户锁定**：用户被限制在特定的 IDE-Agent 组合中
- **维护成本高**：IDE 或 Agent 的更新可能导致集成失效

ACP 通过提供标准化接口解决了这些问题：

```
┌─────────────────┐
│   IDE/Editor    │
│  (ACP Client)   │
└────────┬────────┘
         │ ACP Protocol (JSON-RPC over stdio)
         │
┌────────┴────────┐
│   AI Agent      │
│  (ACP Server)   │
└─────────────────┘
```

## AutoDev 的 ACP 支持

AutoDev 实现了完整的 ACP Client 功能，支持：

### 1. 多 AI 代理支持

AutoDev 支持连接任何遵循 ACP 协议的 AI 代理：

- **OpenCode**: 开源 AI 编码助手 (推荐)
- **Codex**: OpenAI 官方代理
- **Kimi**: Moonshot AI 代理
- **Gemini**: Google AI 代理
- **Claude Code**: Anthropic 代理
- **GitHub Copilot**: 通过 ACP 使用
- **自定义代理**: 支持任何实现 ACP 的代理

### 2. 核心能力

- ✅ **文件系统访问**: 读取/写入项目文件
- ✅ **终端集成**: 执行命令并获取输出
- ✅ **多轮对话**: 上下文感知的连续交互
- ✅ **工具调用**: 代理可以调用各种开发工具
- ✅ **权限管理**: 细粒度的操作权限控制
- ✅ **MCP 集成**: 支持 Model Context Protocol 服务器
- ✅ **流式输出**: 实时显示代理响应
- ✅ **进程管理**: 智能的代理进程生命周期管理

### 3. 使用场景

ACP 代理可以帮助你：

- 📝 **代码生成**: "创建一个用户认证服务"
- 🔍 **代码审查**: "检查这段代码的安全问题"
- 🐛 **调试协助**: "找出这个函数的 bug"
- 📚 **文档生成**: "为这个类生成 API 文档"
- ♻️ **重构建议**: "重构这段代码以提高性能"
- 🧪 **测试编写**: "为这个函数生成单元测试"

## 快速开始

### 1. 安装 AI 代理

以 OpenCode 为例：

```bash
# macOS/Linux
curl -fsSL https://opencode.ai/install | bash

# 或使用 Homebrew
brew install anomalyco/tap/opencode

# 验证安装
opencode --version
```

### 2. 在 AutoDev 中配置

1. 打开 IntelliJ IDEA
2. 打开 AutoDev 工具窗口
3. 切换到 **ACP** 标签
4. 从下拉列表选择代理（如 "OpenCode"）
5. 点击连接或直接发送消息

### 3. 开始对话

```
示例提示：
- "解释这个文件的功能"
- "重构这个函数以提高可读性"
- "为这个类添加单元测试"
- "找出这段代码中的潜在 bug"
```

## ACP vs MCP vs A2A

| 特性 | ACP | MCP | A2A |
|------|-----|-----|-----|
| **目标** | IDE ↔ AI 代理 | AI ↔ 外部工具 | 代理 ↔ 代理 |
| **通信方式** | JSON-RPC (stdio) | JSON-RPC (stdio/SSE/HTTP) | HTTP/WebSocket |
| **主要用途** | 编码助手集成 | 工具能力扩展 | 多代理协作 |
| **代表应用** | Zed, Cursor, AutoDev | Claude Desktop, AutoDev | Google Vertex AI |
| **标准化程度** | 开放标准 | Anthropic 主导 | Google 主导 |

### 协议组合使用

在 AutoDev 中，这三种协议可以协同工作：

```
用户提问
    ↓
ACP Agent (AI 代理)
    ↓
MCP Server (访问文件系统、数据库等)
    ↓
A2A Agent (调用专门的代理，如代码审查代理)
    ↓
返回综合结果
```

示例工作流：

1. 用户通过 ACP 向 OpenCode 提问："优化这个 SQL 查询"
2. OpenCode 通过 MCP 访问数据库架构
3. OpenCode 通过 A2A 调用专门的 SQL 优化代理
4. 结果通过 ACP 返回给用户

## 架构设计

### 组件架构

```kotlin
IdeaAcpAgentViewModel          // UI 层：管理用户交互
    ↓
AcpAgentProcessManager         // 进程管理：启动和维护代理进程
    ↓
ACP Protocol (StdioTransport)  // 协议层：JSON-RPC 通信
    ↓
Client/Session                 // 会话层：管理对话上下文
    ↓
JewelRenderer                  // 渲染层：显示结果
```

### 关键特性

1. **进程复用**: 代理进程在会话间保持活动，提高响应速度
2. **权限控制**: 用户可以批准/拒绝代理的每个操作
3. **错误处理**: 完善的错误恢复和日志记录
4. **流式渲染**: 实时显示代理的思考过程和工具调用
5. **多代理切换**: 在不同代理间无缝切换

## 相关资源

- [ACP 配置指南](/acp/configuration)
- [使用教程](/acp/usage)
- [开发自定义代理](/acp/development)
- [故障排除](/acp/troubleshooting)
- [ACP 协议规范](https://github.com/agent-client-protocol/spec)

## 与其他功能集成

ACP 可以与 AutoDev 的其他功能协同工作：

- **MCP 服务器**: ACP 代理可以调用 MCP 工具
- **DevIns 语言**: 在 DevIns 脚本中调用 ACP 代理
- **Bridge 工具**: 通过 Bridge 连接远程 ACP 代理
- **本地智能体**: ACP 代理可以作为本地智能体的一部分

---

**下一步**: 查看 [ACP 配置指南](/acp/configuration) 了解详细配置方法。
