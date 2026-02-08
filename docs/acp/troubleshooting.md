---
title: ACP 故障排除
---

# ACP 故障排除

本指南帮助你诊断和解决使用 ACP 代理时遇到的常见问题。

## 连接问题

### 问题 1: "ACP agent is not connected"

**症状**: 
- 无法发送消息
- 连接按钮显示"未连接"状态

**可能原因**:
1. 代理未安装或不在 PATH 中
2. 代理进程启动失败
3. 配置文件路径错误
4. 权限问题

**解决方案**:

#### 步骤 1: 验证代理安装

```bash
# 检查代理是否在 PATH 中
which opencode
# 应该输出: /usr/local/bin/opencode (或其他路径)

# 测试代理是否可执行
opencode --version
# 应该输出版本号
```

如果命令不存在：

```bash
# 重新安装代理
curl -fsSL https://opencode.ai/install | bash

# 或添加到 PATH
export PATH=$PATH:/path/to/agent/bin
echo 'export PATH=$PATH:/path/to/agent/bin' >> ~/.zshrc
source ~/.zshrc
```

#### 步骤 2: 检查配置文件

```bash
# 查看配置
cat ~/.autodev/config.yaml | grep -A 5 acpAgents

# 验证命令路径
ls -l $(which opencode)
```

确保配置正确：

```yaml
acpAgents:
  "opencode":
    name: "OpenCode"
    command: "/正确的/路径/opencode"  # 使用 which opencode 获取
    args: "acp"
    env: ""
```

#### 步骤 3: 测试 ACP 协议

```bash
# 手动测试代理响应
echo '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":1,"capabilities":{},"implementation":{"name":"test","version":"1.0","title":"Test"}}}' | opencode acp

# 应该返回类似:
# {"jsonrpc":"2.0","id":1,"result":{"protocolVersion":1,...}}
```

如果没有输出或报错：
- 检查 stderr: `opencode acp 2>&1`
- 查看代理日志（如果有）
- 尝试重新安装代理

#### 步骤 4: 检查权限

```bash
# 检查文件权限
ls -la $(which opencode)
# 应该有执行权限 (x)

# 如果没有，添加权限
chmod +x /path/to/opencode
```

#### 步骤 5: 查看日志

```bash
# AutoDev 日志
tail -f ~/.autodev/logs/autodev-app.log | grep -i acp

# 查找错误信息
grep "ERROR\|WARN" ~/.autodev/logs/autodev-app.log | tail -20
```

### 问题 2: 连接超时

**症状**:
- 连接一直显示"连接中..."
- 超过 30 秒后失败

**可能原因**:
1. 代理启动缓慢
2. 网络问题（如果使用远程代理）
3. 进程阻塞

**解决方案**:

#### 检查代理启动时间

```bash
# 测量启动时间
time opencode acp <<EOF
{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":1}}
EOF
```

如果超过 10 秒：
- 检查系统资源（CPU、内存）
- 查看代理是否在下载模型
- 尝试使用更快的代理

#### 增加超时时间

在代码中（需要重新编译插件）：

```kotlin
// IdeaAcpAgentViewModel.kt
private val connectionTimeout = 60000L  // 60 秒
```

### 问题 3: 进程意外终止

**症状**:
- 连接成功后立即断开
- 发送第一条消息后崩溃

**可能原因**:
1. 代理内部错误
2. 依赖缺失
3. 环境变量配置错误

**解决方案**:

#### 查看 stderr 输出

在 ACP 面板底部查看 stderr 区域，查找错误信息。

常见错误及解决方案：

**错误**: `command not found: node`
```bash
# 安装 Node.js
brew install node
# 或
apt install nodejs
```

**错误**: `ModuleNotFoundError: No module named 'openai'`
```bash
# 安装 Python 依赖
pip install openai
# 或使用 requirements.txt
pip install -r requirements.txt
```

**错误**: `Error: EACCES: permission denied`
```bash
# 修复权限
sudo chown -R $USER /path/to/agent
```

#### 启用详细日志

```yaml
acpAgents:
  "opencode-debug":
    name: "OpenCode (Debug)"
    command: "opencode"
    args: "acp --verbose"
    env: |
      DEBUG=true
      LOG_LEVEL=trace
```

## 响应问题

### 问题 4: 代理无响应

**症状**:
- 消息发送后无任何反应
- 界面显示"执行中"但无输出

**解决方案**:

#### 检查会话状态

```bash
# 查看进程
ps aux | grep opencode

# 检查是否卡死
lsof -p <pid>
```

#### 重置连接

1. 点击"断开连接"按钮
2. 等待 2-3 秒
3. 点击"连接"或重新发送消息

#### 简化提示

复杂的提示可能导致超时：

```
❌ 不推荐: "分析整个项目，找出所有问题，并生成完整的重构方案和测试用例"
✅ 推荐: "分析 UserService.kt 的主要功能"
```

### 问题 5: 响应不完整

**症状**:
- 代理响应到一半停止
- 最后显示错误或超时

**可能原因**:
1. 超时限制
2. 令牌限制
3. 网络中断

**解决方案**:

#### 检查超时设置

```kotlin
// 调整超时时间
val promptTimeout = 120000L  // 120 秒
```

#### 分解任务

```
第一轮: "分析代码结构"
第二轮: "找出潜在问题"
第三轮: "提供修复建议"
```

#### 检查令牌限制

```yaml
env: |
  MAX_TOKENS=128000  # 增加令牌限制
```

### 问题 6: 响应内容不相关

**症状**:
- 代理回答与问题无关
- 引用错误的文件或代码

**解决方案**:

#### 清除上下文

```
1. 断开并重新连接代理
2. 开始新的对话
```

#### 使用显式引用

```
❌ 不推荐: "这个函数有什么问题？"
✅ 推荐: "@UserService.kt:150-180 这个函数有什么问题？"
```

#### 提供更多上下文

```
我正在开发一个用户管理系统。
@UserService.kt 是核心服务类。
请分析 validateUser 方法的安全性。
```

## 权限问题

### 问题 7: 权限对话框不显示

**症状**:
- 代理请求权限但无对话框
- 操作似乎被阻塞

**解决方案**:

#### 检查模态对话框

1. 按 `Cmd+Tab` (macOS) 或 `Alt+Tab` (Windows/Linux) 切换窗口
2. 查看是否有被遮挡的对话框

#### 检查通知权限

macOS:
```
系统偏好设置 → 通知 → IntelliJ IDEA
确保启用通知
```

Windows:
```
设置 → 系统 → 通知和操作
确保允许 IntelliJ IDEA 显示通知
```

#### 重启 IDE

```bash
# 完全退出
killall idea

# 重新启动
open /Applications/IntelliJ\ IDEA.app
```

### 问题 8: 权限被意外拒绝

**症状**:
- 选择"Allow Always"但仍然弹出请求
- 权限设置不生效

**解决方案**:

权限设置仅在当前会话有效。断开重连后需要重新授权。

如需持久化权限（需要修改插件）：

```kotlin
// 保存权限设置到配置文件
class PermissionManager {
    private val permissions = mutableMapOf<String, PermissionSetting>()

    fun save() {
        // 保存到 ~/.autodev/permissions.yaml
    }

    fun load() {
        // 从文件加载
    }
}
```

## 性能问题

### 问题 9: 响应速度慢

**症状**:
- 首次响应需要 10+ 秒
- 后续响应也很慢

**解决方案**:

#### 使用进程复用

确保进程管理器正常工作：

```kotlin
// 检查进程是否被复用
val manager = AcpAgentProcessManager.getInstance()
val process = manager.getOrCreateProcess(agentKey, config, cwd)
// 应该返回已存在的进程
```

#### 减少上下文大小

```yaml
env: |
  CONTEXT_WINDOW=16000  # 减小上下文窗口
```

#### 使用更快的模型

```yaml
env: |
  MODEL=gpt-4o-mini  # 使用更快的模型
```

#### 本地缓存

```kotlin
class CachingAgent : AcpServer {
    private val cache = LRUCache<String, String>(100)

    override suspend fun prompt(
        sessionId: SessionId,
        content: List<ContentBlock>
    ): Flow<PromptEvent> = flow {
        val key = content.hashCode().toString()
        
        cache.get(key)?.let { cached ->
            // 使用缓存响应
            emit(cached)
            return@flow
        }

        // 生成新响应
        val response = generateResponse(content)
        cache.put(key, response)
        emit(response)
    }
}
```

### 问题 10: 内存占用过高

**症状**:
- IDE 变慢
- 系统内存不足

**解决方案**:

#### 限制代理内存

```yaml
acpAgents:
  "opencode":
    command: "java"
    args: "-Xmx2g -jar /path/to/agent.jar acp"
```

#### 定期重启进程

```kotlin
// 在长时间使用后重启
if (sessionCount > 100 || uptime > Duration.ofHours(2)) {
    disconnect()
    connect()
}
```

#### 清理旧会话

```kotlin
class SessionManager {
    private val sessions = mutableMapOf<SessionId, Session>()

    fun cleanup() {
        val now = System.currentTimeMillis()
        sessions.entries.removeIf { (_, session) ->
            now - session.lastActivity > Duration.ofMinutes(30).toMillis()
        }
    }
}
```

## 日志和调试

### 启用详细日志

#### IntelliJ IDEA

1. `Help` → `Diagnostic Tools` → `Debug Log Settings`
2. 添加:
   ```
   #cc.unitmesh.devins.idea.toolwindow.acp
   #cc.unitmesh.agent.acp
   ```
3. 重启 IDE

#### 代理端日志

```yaml
env: |
  LOG_LEVEL=debug
  LOG_FILE=/tmp/agent.log
```

### 查看日志

```bash
# AutoDev 日志
tail -f ~/.autodev/logs/autodev-app.log

# ACP 特定日志
tail -f ~/.autodev/acp-logs/*.log

# 代理日志
tail -f /tmp/agent.log

# 系统日志 (macOS)
log show --predicate 'process == "idea"' --last 5m | grep -i acp
```

### 日志分析

常见日志模式及其含义：

**正常连接**:
```
INFO: ACP initialize request for agent 'opencode'
INFO: ACP initialize successful for agent 'opencode'
INFO: ACP agent 'opencode' connected successfully (session=session-xxx)
```

**连接失败**:
```
WARN: ACP connect failed for agent 'opencode': Connection timeout
ERROR: Failed to start ACP process: command not found
```

**协议错误**:
```
ERROR: ACP protocol error: Invalid JSON-RPC response
ERROR: Unexpected message type: expected response, got error
```

## 常见错误代码

| 错误代码 | 含义 | 解决方案 |
|---------|------|---------|
| `-1` | 进程启动失败 | 检查命令路径和权限 |
| `-2` | 初始化超时 | 增加超时时间或检查网络 |
| `-3` | 协议版本不匹配 | 更新代理或客户端 |
| `-4` | 会话创建失败 | 检查工作目录权限 |
| `-5` | 权限被拒绝 | 重新授权或修改权限设置 |

## 报告问题

如果问题仍未解决，请收集以下信息后报告：

### 信息收集清单

```bash
# 1. 系统信息
uname -a
java -version
node --version
python --version

# 2. 代理信息
opencode --version
which opencode
ls -la $(which opencode)

# 3. 配置信息
cat ~/.autodev/config.yaml

# 4. 日志
tail -100 ~/.autodev/logs/autodev-app.log

# 5. 进程信息
ps aux | grep opencode
lsof -p <pid>

# 6. 网络信息（如果使用远程代理）
curl -v https://api.opencode.ai/health
```

### 报告模板

```markdown
## 问题描述
[简要描述问题]

## 复现步骤
1. [步骤 1]
2. [步骤 2]
3. [步骤 3]

## 期望行为
[描述期望发生什么]

## 实际行为
[描述实际发生了什么]

## 环境信息
- OS: [macOS 14.0 / Ubuntu 22.04 / Windows 11]
- IDE: [IntelliJ IDEA 2024.3]
- AutoDev 版本: [x.x.x]
- 代理: [OpenCode 1.1.53]

## 日志
```
[粘贴相关日志]
```

## 配置
```yaml
[粘贴配置文件（隐藏敏感信息）]
```
```

### 提交问题

- GitHub: https://github.com/phodal/xiuper/issues
- Discord: [AutoDev 社区]
- Email: [支持邮箱]

## 预防措施

### 最佳实践

1. **定期更新**: 保持代理和插件最新
2. **配置备份**: 定期备份 `config.yaml`
3. **日志轮转**: 清理旧日志文件
4. **资源监控**: 监控内存和 CPU 使用
5. **测试环境**: 在测试项目中验证新配置

### 健康检查脚本

```bash
#!/bin/bash
# acp-health-check.sh

echo "ACP Health Check"
echo "================"

# 检查代理
if command -v opencode &>/dev/null; then
    echo "✅ OpenCode: $(opencode --version)"
else
    echo "❌ OpenCode: Not found"
fi

# 检查配置
if [ -f ~/.autodev/config.yaml ]; then
    echo "✅ Config: Found"
    if grep -q "acpAgents" ~/.autodev/config.yaml; then
        echo "✅ ACP Config: Present"
    else
        echo "❌ ACP Config: Missing"
    fi
else
    echo "❌ Config: Not found"
fi

# 检查进程
PROC_COUNT=$(ps aux | grep -c "[o]pencode acp")
echo "ℹ️  Active processes: $PROC_COUNT"

# 检查日志
if [ -f ~/.autodev/logs/autodev-app.log ]; then
    ERROR_COUNT=$(grep -c "ERROR" ~/.autodev/logs/autodev-app.log)
    echo "ℹ️  Recent errors: $ERROR_COUNT"
fi

echo ""
echo "Run './verify-opencode.sh' for detailed testing"
```

定期运行：

```bash
chmod +x acp-health-check.sh
./acp-health-check.sh
```

## 相关资源

- [配置指南](/acp/configuration)
- [使用教程](/acp/usage)
- [开发指南](/acp/development)
- [ACP 协议规范](https://github.com/agent-client-protocol/spec)
- [FAQ 文档](/troubleshooting)
