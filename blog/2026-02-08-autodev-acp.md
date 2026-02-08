---
layout: default
title: AutoDev ACP - 标准化 IDE 与 AI 代理通信
date: 2026-02-08
authors:
  - phodal
tags:
  - ACP
  - Agent Client Protocol
  - AI Coding
  - Protocol
---

在 AI 编码助手快速发展的今天，每个工具都有自己的集成方式。为了解决这个问题，我们在 AutoDev 中实现了对 ACP (Agent Client Protocol) 的完整支持，让用户可以在同一个 IDE 中自由切换和使用多个 AI 代理。

## 什么是 ACP？

ACP (Agent Client Protocol) 是一个开放协议，旨在标准化代码编辑器/IDE 与 AI 编码助手之间的通信。它允许任何支持 ACP 的 AI 代理在任何支持 ACP 的客户端中无缝工作。

想象一下：
- 你可以在 IntelliJ IDEA 中使用 OpenCode
- 在 Zed 中使用 Kimi
- 在 Neovim 中使用 Claude Code
- 所有代理都使用同一套标准协议

## 为什么需要 ACP？

### 问题：碎片化的生态

目前的 AI 编码助手生态存在严重的碎片化问题：

```
Cursor → 只能用 GPT 系列
GitHub Copilot → 绑定 VSCode 体验最佳
JetBrains AI → 只在 JetBrains IDEs 中可用
Claude Code → 需要特定客户端
```

每个工具都需要：
- 为不同 IDE 开发适配代码
- 维护多个版本的集成
- 用户被锁定在特定组合中

### 解决方案：标准化协议

ACP 通过标准化接口解决这些问题：

```
┌─────────────────┐
│   Any IDE       │
│  (ACP Client)   │
└────────┬────────┘
         │ ACP Protocol (JSON-RPC over stdio)
         │
┌────────┴────────┐
│  Any AI Agent   │
│  (ACP Server)   │
└─────────────────┘
```

## AutoDev 的 ACP 实现

### 完整的客户端支持

AutoDev 实现了完整的 ACP Client 功能，支持：

1. **多代理管理**
   - 自动检测系统中已安装的 ACP 代理
   - 支持配置自定义代理
   - 一键切换不同代理

2. **协议能力**
   - ✅ 文件系统访问（读取/写入项目文件）
   - ✅ 终端集成（执行命令并获取输出）
   - ✅ 多轮对话（上下文感知）
   - ✅ 工具调用（代理可以调用各种开发工具）
   - ✅ 权限管理（细粒度的操作控制）
   - ✅ 流式输出（实时显示响应）

3. **与 AutoDev 生态集成**
   - 支持 MCP 服务器集成
   - 可与 DevIns 语言协同
   - 兼容 Bridge 远程代理
   - 集成本地智能体系统

### 架构设计

我们的实现采用了清晰的分层架构：

```kotlin
IdeaAcpAgentViewModel          // UI 层：管理用户交互
    ↓
AcpAgentProcessManager         // 进程管理：智能进程复用
    ↓
ACP Protocol (StdioTransport)  // 协议层：JSON-RPC 通信
    ↓
Client/Session                 // 会话层：管理对话上下文
    ↓
JewelRenderer                  // 渲染层：实时显示结果
```

关键特性：
- **进程复用**: 首次连接后进程保持活动，提高响应速度
- **权限对话框**: 用户可以审批/拒绝每个操作
- **流式渲染**: 实时显示代理的思考过程
- **错误恢复**: 完善的错误处理和日志记录

## 支持的代理

AutoDev 内置了常见 ACP 代理的预设配置，包括：

- **OpenCode**: 开源 AI 编码助手（推荐，已测试）
- **Codex**: OpenAI 官方代理
- **Kimi**: Moonshot AI 代理
- **Gemini**: Google AI 代理
- **Claude Code**: Anthropic 代理
- **GitHub Copilot**: 通过 ACP 使用

### 示例：配置 OpenCode

1. 安装 OpenCode:
```bash
curl -fsSL https://opencode.ai/install | bash
```

2. 在 AutoDev 中:
```yaml
# ~/.autodev/config.yaml
acpAgents:
  "opencode":
    name: "OpenCode"
    command: "/usr/local/bin/opencode"
    args: "acp"
    env: ""
activeAcpAgent: "opencode"
```

3. 开始使用:
- 打开 AutoDev 工具窗口
- 切换到 ACP 标签
- 选择 "OpenCode"
- 开始对话！

## 使用场景

ACP 代理可以帮助你完成各种开发任务：

### 1. 代码理解
```
用户: "@UserService.kt 这个服务的主要功能是什么？"
代理: [读取文件] 这是一个用户管理服务，主要提供...
```

### 2. 代码重构
```
用户: "重构 validateUser 方法，提取重复逻辑"
代理: [分析代码] [提供重构方案] [申请写入权限] [修改文件]
```

### 3. 测试生成
```
用户: "为 IdeaAcpAgentViewModel 生成单元测试"
代理: [分析类结构] [生成测试用例] [创建测试文件]
```

### 4. 代码审查
```
用户: "检查这段代码的并发安全性"
代理: [分析代码] [识别竞态条件] [提供修复建议]
```

## 与 MCP 和 A2A 的关系

AutoDev 现在支持三种互补的协议：

| 协议 | 用途 | 示例 |
|------|------|------|
| **ACP** | IDE ↔ AI 代理 | OpenCode 在 IDEA 中工作 |
| **MCP** | AI ↔ 外部工具 | 访问文件系统、数据库 |
| **A2A** | 代理 ↔ 代理 | 调用专门的代码审查代理 |

它们可以协同工作：

```
用户提问
  ↓ (ACP)
OpenCode 代理
  ↓ (MCP)
访问 GitHub API
  ↓ (A2A)
调用 SQL 优化代理
  ↓
返回综合结果
```

## 技术细节

### JSON-RPC over stdio

ACP 使用 JSON-RPC 2.0 通过标准输入/输出进行通信：

```json
// Client → Agent: initialize
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "initialize",
  "params": {
    "protocolVersion": 1,
    "capabilities": {
      "fs": {"readTextFile": true, "writeTextFile": true},
      "terminal": true
    }
  }
}

// Agent → Client: response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "protocolVersion": 1,
    "agentInfo": {
      "name": "OpenCode",
      "version": "1.1.53"
    }
  }
}
```

### 流式更新

代理可以实时发送更新：

```kotlin
flow {
    // 发送思考过程
    emit(SessionUpdate.AgentThoughtChunk("Analyzing..."))
    
    // 发送工具调用
    emit(SessionUpdate.ToolCall(
        id = "read-1",
        title = "Reading file",
        tool = Tool.ReadTextFile("Main.kt"),
        status = IN_PROGRESS
    ))
    
    // 发送响应
    emit(SessionUpdate.AgentMessageChunk("The file contains..."))
}
```

### 权限管理

用户可以控制代理的每个操作：

```kotlin
suspend fun requestPermission(
    operation: String,
    options: List<PermissionOption>
): PermissionResponse {
    // 显示权限对话框
    val selected = showDialog(options)
    
    return when (selected.kind) {
        ALLOW_ONCE -> execute()
        ALLOW_ALWAYS -> {
            savePermission(operation)
            execute()
        }
        REJECT_ONCE -> cancel()
        REJECT_ALWAYS -> {
            savePermission(operation, denied = true)
            cancel()
        }
    }
}
```

## 开发者指南

想开发自己的 ACP 代理？AutoDev 提供了完整的文档和示例：

### 最小实现

```kotlin
class MyAgent : AcpServer {
    override suspend fun initialize(
        clientInfo: ClientInfo
    ): InitializeResponse {
        return InitializeResponse(
            protocolVersion = 1,
            agentInfo = AgentInfo("My Agent", "1.0.0")
        )
    }

    override suspend fun prompt(
        sessionId: SessionId,
        content: List<ContentBlock>
    ): Flow<PromptEvent> = flow {
        val message = content.first() as ContentBlock.Text
        val response = callAI(message.text)
        
        emit(PromptEvent.SessionUpdate(
            SessionUpdate.AgentMessageChunk(
                ContentBlock.Text(response)
            )
        ))
    }
}
```

查看完整文档: [AutoDev ACP Development Guide](/docs/acp/development)

## 性能优化

我们在实现中注重性能：

1. **进程复用**: 首次连接后进程保持活动
   - 首次连接: 3-5 秒
   - 后续使用: < 1 秒

2. **流式渲染**: 不等待完整响应即可显示
   ```kotlin
   flow.collect { update ->
       renderer.renderUpdate(update)  // 实时渲染
   }
   ```

3. **智能缓存**: 缓存文件内容和代理响应
   ```kotlin
   val cache = LRUCache<String, String>(100)
   ```

4. **异步处理**: 所有 I/O 操作异步执行
   ```kotlin
   coroutineScope.launch(Dispatchers.IO) {
       // 非阻塞操作
   }
   ```

## 测试与验证

我们提供了完整的测试工具：

```bash
# 快速验证脚本
./docs/test-scripts/verify-opencode.sh

# 输出：
✅ OpenCode binary: /usr/local/bin/opencode
   Version: 1.1.53
✅ Config file: OpenCode configured
✅ Source code: OpenCode preset defined
✅ Testing ACP protocol: Working

✅ All checks passed!
```

完整测试套件包括：
- 单元测试（Kotlin/JUnit）
- 集成测试（完整协议流程）
- 性能测试（响应时间、内存使用）
- 兼容性测试（多个代理）

## 未来计划

我们计划进一步扩展 ACP 支持：

1. **更多代理预设**: 持续添加热门 AI 代理
2. **代理市场**: 让用户分享和发现自定义代理
3. **代理组合**: 支持多个代理协同工作
4. **远程代理**: 通过 Bridge 支持云端代理
5. **代理评分**: 收集用户反馈，推荐优质代理

## 开始使用

### 用户

1. 安装任何 ACP 代理（如 OpenCode）
2. 在 AutoDev 中选择代理
3. 开始编码！

文档: [AutoDev ACP User Guide](/docs/acp/usage)

### 开发者

1. 实现 ACP 协议
2. 发布你的代理
3. 在 AutoDev 中使用

文档: [AutoDev ACP Development Guide](/docs/acp/development)

## 总结

ACP 协议为 AI 编码助手生态带来了急需的标准化。通过在 AutoDev 中实现完整的 ACP 支持，我们：

- ✅ 让用户可以自由选择 AI 代理
- ✅ 降低了代理开发的集成成本
- ✅ 促进了开放的工具生态
- ✅ 提供了与 MCP/A2A 的互操作性

我们相信，标准化的协议是 AI 辅助编程未来发展的关键。AutoDev 将持续投入，推动 ACP 生态的繁荣。

## 资源链接

- [ACP 协议规范](https://github.com/agent-client-protocol/spec)
- [AutoDev ACP 文档](/docs/acp)
- [OpenCode 官网](https://opencode.ai/)
- [GitHub 仓库](https://github.com/phodal/xiuper)
- [测试报告](https://github.com/phodal/xiuper/blob/master/docs/test-scripts/OPENCODE_ACP_TEST_REPORT.md)

---

欢迎在 GitHub 上提交 Issues 和 PR，一起完善 AutoDev 的 ACP 支持！
