

---
layout: default
title: AutoDev 作为 MCP 客户端
nav_order: 2
parent: MCP
---

> 由于需要支持 AutoDev DevIns 使用 MCP 工具，目前我们仅支持基于标准输入输出的传输方式。

## 使用方法

1. 在 `Settings` → `AutoDev` → `Custom Agent` 的 MCP Servers 中配置客户端
2. 添加您的 MCP 服务器，例如：

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

Java 示例：

```json
{
  "mcpServers": {
    "weather": {
      "command": "java",
      "args": [
        "-jar",
        "/Volumes/source/ai/autodev-mcp-test/kotlin-weather-stdio-server/build/libs/weather-stdio-server-0.1.0-all.jar"
      ]
    }
  }
}
```

Python + UV 示例：

```json
{
  "mcpServers": {
    "echo": {
      "command": "uv",
      "args": [
        "run",
        "--with",
        "--directory",
        "/Users/phodal/source/ai/autodev-mcp-test/python-sqlite3/",
        "mcp",
        "mcp",
        "run",
        "/Users/phodal/source/ai/autodev-mcp-test/python-sqlite3/server.py"
      ]
    }
  }
}
```

### MCP 作为 DevIns

在 AutoDev 中，MCP 工具会被转换为 DevIns 指令。例如 `read_multiple_files` 工具会被转换为：

```xml
<tool>name: read_multiple_files, desc: 同时读取多个文件内容。当需要分析或比较多个文件时，这比逐个读取更高效。每个文件内容将与其路径一起返回。单个文件读取失败不会中断整个操作。仅在允许的目录内有效。, example:
    <devin>
        以下是命令和 JSON 结构
        /read_multiple_files
        ```json
        {"properties":{"paths":{"type":"array","items":{"type":"string"}}},"required":["paths"]}
        \```
    </devin>
</tool>
```

随后 Sketch 和 Bridge 代理就可以在 DevIns 指令中使用该工具。

### 测试 MCP 服务器

新建 `sample.devin` 文件并添加以下内容：

     /list_directory
     ```json
     {
      "path": "/Volumes/source/ai/autocrud/docs/mcp"
     }
     ```

运行以下命令后，将返回目录中的文件列表：

```bash
Execute list_directory tool's result
[
    {
        "text": "[FILE] mcp-client.md\n[FILE] mcp-server.md\n[FILE] mcp.md"
    }
]
```