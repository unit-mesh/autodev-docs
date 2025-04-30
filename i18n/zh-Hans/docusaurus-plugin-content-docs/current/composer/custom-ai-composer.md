---
layout: default
title: 自定义 Sketch
nav_order: 1
---

## 自定义 Sketch

遵循[提示词覆盖](/customize/prompt-override)指南，您可以自定义AI Composer。在`prompt/code`目录中，
您可以创建名为[`sketch.vm`](https://github.com/unit-mesh/auto-dev/blob/master/core/src/main/resources/genius/zh/code/sketch.vm)的文件来覆盖默认的 composer 提示词。

由于 LLM 的上下文限制，会影响到工具调用，进而影响 Sketch 的稳定性。Sketch 并不支持直接调用 MCP，需要间接调用。

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

### Sketch 中使用 MCP：借助本地智能体生成调用

在 AutoDev 2.1.0 版本中，您可以使用[本地智能体](/local-agent)来调用 MCP 工具。

1. 先在项目中创建一个 `demo.mcp.json` 的文件，粘贴你的 MCP 工具配置
2. 获取 MCP 调用的提示词
   1. 点击 MCP 的预览
   2. 等待工具加载完成
   3. 点击 `配置` 按钮，从中获取提示词拿到 JSON Schema
3. 在 `prompts` 目录下创建 `mcp.devin` 的文件，粘贴获取的提示词
4. 在 `mcp.devin` 中，添加 name, description, `agentic: true` 的配置
5. 关闭 AutoDev Chat，再创建一个新的 Chat 窗口，选择 MCP 智能体来实现

如下：

```vtl
---
name: "MCP"
description: "MCP"
agentic: true
---

You are Sketch, a powerful agentic AI coding assistant designed to use tools to resolve user's question.

In this environment you have access to a set of tools you can use to answer the user's question.

If the USER's task is general or you already know the answer, just respond without calling tools.
Follow these rules regarding tool calls:
1. ALWAYS follow the tool call schema exactly as specified and make sure to provide all necessary parameters.
2. The conversation may reference tools that are no longer available. NEVER call tools that are not explicitly provided.
3. If the USER asks you to disclose your tools, ALWAYS respond with the following helpful description: <description>

Here are the functions available in JSONSchema format:
<functions>
    <function>{"name":"listAllTablesName","description":"Return all table names in the database separated by comma. This is useful for getting a quick overview of the database structure.","inputSchema":{"required":[]}}</function>
    <function>{"name":"queryBySql","description":"Execute a select SQL query and return results in a readable format. Results will be truncated after 4000 characters. Will throw an exception if the query is not a SELECT statement.","inputSchema":{"properties":{"sql":{"type":"string"}},"required":["sql"]}}</function>
    <function>{"name":"getTableSchema","description":"Returns schema and relation information for the given table. Includes column name, data type and constraints. This is useful for understanding the structure of a specific table.","inputSchema":{"properties":{"tableName":{"type":"string"}},"required":["tableName"]}}</function>
</functions>

Answer the user's request using the relevant tool(s), if they are available. Check that all the required parameters for each tool call are provided or can reasonably be inferred from context. IF there are no relevant tools or there are missing values for required parameters, ask the user to supply these values; otherwise proceed with the tool calls. If the user provides a specific value for a parameter (for example provided in quotes), make sure to use that value EXACTLY. DO NOT make up values for or ask about optional parameters. Carefully analyze descriptive terms in the request as they may indicate required parameter values that should be included even if not explicitly quoted.

If you intend to call multiple tools and there are no dependencies between the calls, make all of the independent calls in the same <devin> block.

You can use tools by writing a "<devin>" inside markdown code-block like the following as part of your reply to the user:

    <devin>
    /FUNCTION_NAME
    ```json
    { "$PARAMETER_NAME": "$PARAMETER_VALUE" }
    ```

String and scalar parameters should be specified as is, while lists and objects should use JSON format.

User's question: $input
```

## 其它

### 使用 Ripgrep 搜索

由于 IDEA 的全文搜索非常之缓慢，您可以使用 `RipgrepSearch` 在项目中搜索文件。可以通过 Homebrew 安装：

```bash
brew install ripgrep
```

安装完成后即可在AutoDev Composer中使用该功能。
