---
title: AutoDev CLI/TUI 
slug: autodev-cli-tui
nav_order: 3
parent: AutoDev MPP
---

AutoDev CLI 在设计和 Tool 的实现上参考了 Gemini CLI，部分 UI 借鉴了 Auggie (Augment CLI)。安装方式：

```bash
npm install -g @autodev/cli
````

---

### AutoDev CLI（本地模式）

```bash
autodev code \
  --task "add Spring AI to project and also a service example, I use deepseek, here it's Spring AI documentation https://docs.spring.io/spring-ai/reference/api/chat/deepseek-chat.html 请先阅读文档！！" \
  -p /Users/phodal/IdeaProjects/untitled \
  --max-iterations 100
```

---

### AutoDev CLI（远程模式）

```bash
node dist/jsMain/typescript/index.js server \
  --task "编写 BlogService 测试" \
  --project-id https://github.com/unit-mesh/untitled \
  -s http://localhost:8080
```

---

### AutoDev TUI 模式

```bash
autodev .
```

示例界面：

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ 🤖 AutoDev CLI - AI Coding Assistant🤖 AI Agent - Ready (Project: untitled)                                                  │
└──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
ℹ️  System:
  🤖 **AI Agent Mode Activated**

  Project: `/Users/phodal/IdeaProjects/untitled`

  I'm ready to help you with development tasks. Just describe what you want me to do, and I'll work autonomously to complete it.

  Type `/chat` to switch to chat mode, or `/help` for more commands.

INFO: [McpToolConfigManager] No MCP servers configured, skipping initialization
┌──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ > Type your message... (or /help for commands)                                                                                                       │
└──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
 Press Ctrl+C to exit | Type /help for commands | Ctrl+P to enhance prompt
```
