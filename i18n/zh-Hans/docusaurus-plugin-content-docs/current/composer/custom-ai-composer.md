---
layout: default
title: 自定义 Sketch
nav_order: 1
---

## 自定义 Sketch

遵循[提示词覆盖](/customize/prompt-override)指南，您可以自定义AI Composer。在`prompt/code`目录中，
您可以创建名为[`sketch.vm`](https://github.com/unit-mesh/auto-dev/blob/master/core/src/main/resources/genius/zh/code/sketch.vm)的文件来覆盖默认的 composer 提示词。

由于 LLM 的上下文限制，会影响到工具调用，进而影响 Sketch 的稳定性。Sketch 并不支持直接调用 MCP，需要间接调用。

### Sketch 中使用 MCP：使用提示词覆盖加入 MCP

1. 在 Bridge 中默认是开启 MCP 的，你可以打开聊天窗口中，获取当前的 MCP 工具示例，再加入到 Sketch 的 MCP 工具中
2. 在 `prompt/code/sketch.vm` 中加入 MCP 工具的提示词（在 $context.toolList 后加入即可）

```vtl
$context.toolList
```

### Sketch 中使用 MCP：手动使用 Command

在 AutoDev 中，使用的 MCP Tools 会都转换成 MCP Tools。即你可以通过输入 `/` 来触发自动补全，从中选择你的 MCP 工具 

```devin
/read_file
\```json
{"path":"mock_path"}
\```
```

再把 path 修改为你需要的文件路径。如下是三方的 Jira 封装示例：

```json
{
  "mcpServers": {
    "Jira": {
      "command": "npx",
      "args": [
        "-y",
        "@smithery/cli@latest",
        "run",
        "@rahulthedevil/Jira-Context-MCP",
        "--config",
        // some config in here
      ]
    }
  }
}
```

此时，你可以使用 `/get_issue` 来获取 issue 的信息。

## 其它

### 使用 Ripgrep 搜索

由于 IDEA 的全文搜索非常之缓慢，您可以使用 `RipgrepSearch` 在项目中搜索文件。可以通过 Homebrew 安装：

```bash
brew install ripgrep
```

安装完成后即可在AutoDev Composer中使用该功能。
