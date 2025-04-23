

---
layout: default
title: AutoDev as MCP Server
nav_order: 3
parent: MCP
---

## How to Use

1. Enable the MCP server in AutoDev settings
2. Use the MCP client to connect to the AutoDev server (We use JetBrains MCP Proxy Server to maintain protocol consistency)

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

### Testing Sketch Calls

Tool list: http://127.0.0.1:63342/api/mcp/list_tools

Ports for IDEA-related services range from 63342 to 63352, requiring trial and error

#### Example Call 1

```bash
➜  ~ curl -X POST "http://127.0.0.1:63343/api/mcp/issue_or_story_evaluate" \
     -H "Content-Type: application/json" \
     -d '{"issue": "添加根据作者删除博客"}'

{
    "status": "1. 在 `BlogRepository` 中添加根据作者删除博客的方法\n   - [*] 添加 `deleteByAuthor` 方法\n2. 在 `BlogService` 中添加根据作者删除博客的业务逻辑\n   - [*] 添加 `deleteBlogsByAuthor` 方法\n3. 在 `BlogController` 中添加根据作者删除博客的 API 端点\n   - [*] 添加 `DELETE /blog/author/{author}` 端点"
}
```

#### Example Call 2

```bash
➜  ~ curl -X POST "http://127.0.0.1:63342/api/mcp/issue_or_story_evaluate" \
     -H "Content-Type: application/json" \
     -d '{"issue": "检索代码库，总结 Sketch 的工作流程"}'

{
    "status": "1. 定位核心工作流类\n   - [✓] 搜索包含 \"Workflow\" 和 \"Sketch\" 的类定义\n   - [✓] 分析 SketchRunner 的 execute 方法\n2. 解析 AI Flow 执行阶段\n   - [✓] 识别上下文收集阶段\n   - [✓] 分析工具调用决策模块\n   - [✓] 跟踪代码生成流水线\n3. 验证工作流程完整性\n   - [✓] 检查异常处理机制\n   - [✓] 确认版本控制集成点"
}
```

Generated Plan Example:

1. Locate core workflow classes
    - [✓] Search for class definitions containing "Workflow" and "Sketch"
    - [✓] Analyze SketchRunner's execute method
2. Parse AI Flow execution phases
    - [✓] Identify context collection phase
    - [✓] Analyze tool invocation decision module
    - [✓] Track code generation pipeline
3. Validate workflow integrity
    - [✓] Check exception handling mechanisms
    - [✓] Confirm version control integration points

Mermaid workflow:

```mermaid
graph TD
    A[User Input] --> B[SketchToolWindow]
    B --> C[SketchInputListener]
    C --> D[SketchRunContext]
    D --> E[Collect Context Information]
    E --> F[LanguageSketchProvider]
    F --> G{Task Type}
    G -->|Go Language| H[GoLangPlaygroundSketch]
    G -->|Terminal Command| I[TerminalSketch]
    G -->|Others| J[ExtensionLangSketch]
    H --> K[Execute Task]
    I --> K
    J --> K
    K --> L[PlanLangSketch]
    L --> M[Generate Task Plan]
    M --> N[PlanController]
    N --> O[Update Task Status]
    O --> P[Save to AgentStateService]
    P --> Q[Feedback Result]
    Q --> B
```