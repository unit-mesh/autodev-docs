---
layout: default
title: MCP 调试器
nav_order: 4
parent: MCP
permalink: /mcp/mcp-debugger
---

## AutoDev MCP 调试器

<img src="https://unitmesh.cc/auto-dev/mcp-debugger.png" alt="内联聊天" width="600px"/>

在项目根目录下创建以 `.mcp.json` 结尾的文件，并添加以下内容：

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Volumes/source/ai/autocrud"
      ]
    }
  }
}
```

然后点击文件工具栏中的"显示预览"，您可以看到：

- MCP 服务器/工具列表
- 已配置的 MCP 模型
- MCP 聊天输入框

发送消息后，可以在控制台查看响应：

<img src="https://unitmesh.cc/auto-dev/mcp-debugger-chat.png" alt="内联聊天" width="600px"/>
