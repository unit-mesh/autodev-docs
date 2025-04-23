

---
layout: default
title: 开发MCP服务器
nav_order: 3
parent: MCP
permalink: /mcp/development
---

## 构建服务器

资源链接

- [MCP服务器开发者指南](https://modelcontextprotocol.io/quickstart/server)

由于MVP规范存在不同版本，建议您保持与AutoDev相同的版本

- Kotlin SDK: io.modelcontextprotocol:kotlin-sdk:0.4.0
- Java SDK: io.modelcontextprotocol.sdk:mcp:0.8.1


## 使用RPC命令测试服务器

启动服务器后，粘贴以下消息进行测试：

```json
{"id":4,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{"experimental":{},"sampling":{}},"clientInfo":{"name":"weather","version":"1.0.0"},"_meta":{},"method":"initialize"},"jsonrpc":"2.0"}
```

成功响应示例：

```json
{"jsonrpc":"2.0","id":4,"result":{"protocolVersion":"2024-11-05","capabilities":{"logging":{},"tools":{"listChanged":true}},"serverInfo":{"name":"my-weather-server","version":"0.0.1"}}}
```

错误响应示例：

```json
{"jsonrpc":"2.0","id":4,"error":{"code":-32603,"message":"Unrecognized field \"_meta\" (class io.modelcontextprotocol.spec.McpSchema$InitializeRequest), not marked as ignorable (3 known properties: \"protocolVersion\", \"clientInfo\", \"capabilities\"])\n at [Source: UNKNOWN; byte offset: #UNKNOWN] (through reference chain: io.modelcontextprotocol.spec.McpSchema$InitializeRequest[\"_meta\"])"}}
```