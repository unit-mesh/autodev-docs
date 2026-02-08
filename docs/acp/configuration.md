---
title: ACP 配置指南
---

# ACP 配置指南

本指南介绍如何在 AutoDev 中配置和使用 ACP (Agent Client Protocol) 代理。

## 配置文件

AutoDev 使用 `~/.autodev/config.yaml` 存储 ACP 代理配置。

### 配置结构

```yaml
acpAgents:
  "代理ID":
    name: "显示名称"
    command: "可执行文件路径"
    args: "命令行参数"
    env: "环境变量(可选)"

activeAcpAgent: "默认代理ID"
```

### 完整配置示例

```yaml
acpAgents:
  "opencode":
    name: "OpenCode"
    command: "/usr/local/bin/opencode"
    args: "acp"
    env: ""
  
  "kimi":
    name: "Kimi CLI"
    command: "/usr/local/bin/kimi"
    args: "acp"
    env: |
      KIMI_API_KEY=your-api-key-here
  
  "custom-agent":
    name: "My Custom Agent"
    command: "/path/to/my-agent"
    args: "--mode acp --verbose"
    env: |
      AGENT_HOME=/path/to/agent
      AGENT_LOG_LEVEL=debug

activeAcpAgent: "opencode"
```

## 自动检测

AutoDev 会自动检测系统中已安装的 ACP 代理：

### 支持的预设代理

| 代理 ID | 名称 | 命令 | 参数 |
|---------|------|------|------|
| opencode | OpenCode | `opencode` | `acp` |
| codex | Codex CLI | `codex` | `--acp` |
| kimi | Kimi CLI | `kimi` | `acp` |
| gemini | Gemini CLI | `gemini` | `--acp` |
| claude | Claude Code | `claude` | `--acp` |
| copilot | GitHub Copilot | `github-copilot` | `--acp` |

### 检测原理

AutoDev 通过以下方式检测代理：

1. 检查命令是否在 `PATH` 中
2. 验证命令是否可执行
3. 自动添加到可用代理列表

## 手动配置

### 方法 1: UI 配置

1. 打开 IntelliJ IDEA
2. 打开 AutoDev 工具窗口
3. 切换到 **ACP** 标签
4. 点击代理下拉列表旁的 **设置** 按钮
5. 添加或编辑代理配置：
   - **名称**: 代理的显示名称
   - **命令**: 可执行文件的完整路径
   - **参数**: 启动 ACP 模式的参数
   - **环境变量**: 可选的环境变量（每行一个，格式：`KEY=value`）
6. 保存配置

### 方法 2: 直接编辑配置文件

```bash
# 编辑配置文件
vim ~/.autodev/config.yaml

# 或使用你喜欢的编辑器
code ~/.autodev/config.yaml
```

添加代理配置：

```yaml
acpAgents:
  "my-agent":
    name: "My Custom Agent"
    command: "/path/to/agent"
    args: "acp"
    env: ""
```

保存后，在 AutoDev 中点击 **重新加载配置** 按钮。

## 环境变量配置

### 单行格式

```yaml
env: "API_KEY=xxx"
```

### 多行格式

```yaml
env: |
  API_KEY=your-key-here
  BASE_URL=https://api.example.com
  DEBUG=true
```

### 常用环境变量

不同代理可能需要不同的环境变量：

#### OpenCode

```yaml
env: |
  OPENCODE_API_KEY=your-key-here
  OPENCODE_MODEL=claude-sonnet-4
```

#### Kimi

```yaml
env: |
  MOONSHOT_API_KEY=your-key-here
```

#### 自定义代理

```yaml
env: |
  AGENT_HOME=/path/to/agent
  LOG_LEVEL=debug
  MAX_TOKENS=128000
```

## 工作目录配置

### 默认行为

ACP 代理默认使用项目根目录作为工作目录：

```kotlin
val cwd = project.basePath ?: System.getProperty("user.home")
```

### 自定义工作目录

在手动连接模式下，可以指定工作目录：

```kotlin
// 在代码中配置（需要自定义插件）
val config = AcpAgentConfig(
    command = "opencode",
    args = "acp",
    envText = "",
    cwd = "/custom/working/directory"
)
```

## MCP 服务器集成

ACP 代理可以使用 MCP 服务器扩展能力。在配置文件中添加：

```yaml
mcpServers:
  filesystem:
    command: "npx"
    args: "@modelcontextprotocol/server-filesystem /path/to/project"
  
  github:
    command: "npx"
    args: "@modelcontextprotocol/server-github"
    env: |
      GITHUB_TOKEN=your-token-here
```

ACP 代理会自动加载这些 MCP 服务器。

## 高级配置

### 代理优先级

代理在下拉列表中的顺序由配置文件中的顺序决定。将常用代理放在前面：

```yaml
acpAgents:
  "opencode":      # 第一个（推荐）
    # ...
  "kimi":          # 第二个
    # ...
  "custom":        # 第三个
    # ...
```

### 多版本管理

你可以配置同一代理的不同版本：

```yaml
acpAgents:
  "opencode-stable":
    name: "OpenCode (Stable)"
    command: "/usr/local/bin/opencode"
    args: "acp"
  
  "opencode-beta":
    name: "OpenCode (Beta)"
    command: "/opt/opencode-beta/bin/opencode"
    args: "acp"
```

### 调试模式

启用详细日志以调试连接问题：

```yaml
acpAgents:
  "opencode-debug":
    name: "OpenCode (Debug)"
    command: "/usr/local/bin/opencode"
    args: "acp --verbose"
    env: |
      DEBUG=true
      LOG_LEVEL=trace
```

## 验证配置

### 使用命令行验证

```bash
# 测试代理是否可以启动
opencode acp

# 测试 ACP 协议通信
echo '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":1,"capabilities":{},"implementation":{"name":"test"}}}' | opencode acp
```

### 查看日志

```bash
# AutoDev 日志
tail -f ~/.autodev/logs/autodev-app.log

# ACP 特定日志
tail -f ~/.autodev/acp-logs/*.log
```

### 使用验证脚本

AutoDev 提供了验证脚本（如果已安装）：

```bash
# 下载验证脚本
curl -O https://raw.githubusercontent.com/phodal/xiuper/master/docs/test-scripts/verify-opencode.sh
chmod +x verify-opencode.sh

# 运行验证
./verify-opencode.sh
```

## 配置模板

### 最小配置

```yaml
acpAgents:
  "opencode":
    name: "OpenCode"
    command: "opencode"
    args: "acp"
    env: ""

activeAcpAgent: "opencode"
```

### 推荐配置

```yaml
acpAgents:
  "opencode":
    name: "OpenCode"
    command: "/usr/local/bin/opencode"
    args: "acp"
    env: ""
  
  "kimi":
    name: "Kimi"
    command: "/usr/local/bin/kimi"
    args: "acp"
    env: |
      MOONSHOT_API_KEY=your-key

activeAcpAgent: "opencode"

mcpServers:
  filesystem:
    command: "npx"
    args: "@modelcontextprotocol/server-filesystem ."
```

### 企业配置

```yaml
acpAgents:
  "company-agent":
    name: "Company AI Agent"
    command: "/opt/company-agent/bin/agent"
    args: "acp --enterprise"
    env: |
      AGENT_API_KEY=${COMPANY_API_KEY}
      AGENT_BASE_URL=https://ai.company.com
      AGENT_TIMEOUT=300000

activeAcpAgent: "company-agent"

mcpServers:
  company-wiki:
    url: "https://wiki.company.com/mcp"
    headers:
      Authorization: "Bearer ${WIKI_TOKEN}"
```

## 常见问题

### 问题 1: 代理未被检测到

**原因**: 命令不在 PATH 中

**解决方案**:
```bash
# 检查 PATH
echo $PATH

# 添加到 PATH（临时）
export PATH=$PATH:/path/to/agent/bin

# 永久添加（添加到 ~/.zshrc 或 ~/.bashrc）
echo 'export PATH=$PATH:/path/to/agent/bin' >> ~/.zshrc
source ~/.zshrc
```

或使用完整路径：

```yaml
command: "/complete/path/to/opencode"
```

### 问题 2: 权限问题

**症状**: "Permission denied"

**解决方案**:
```bash
# 添加执行权限
chmod +x /path/to/agent

# 检查权限
ls -l /path/to/agent
```

### 问题 3: 环境变量未生效

**症状**: 代理报告缺少 API key

**解决方案**:

确保环境变量格式正确：

```yaml
env: |
  API_KEY=value1
  ANOTHER_KEY=value2
```

注意：
- 使用 `|` 符号表示多行
- 每行一个变量
- 格式为 `KEY=value`
- 不需要引号（除非值中包含空格）

### 问题 4: 配置不生效

**解决方案**:

1. 重启 IntelliJ IDEA
2. 或在 ACP 面板点击 **重新加载配置**
3. 或调用 API:

```kotlin
viewModel.reloadAgents()
```

## 最佳实践

1. **使用绝对路径**: 避免因 PATH 问题导致的连接失败
2. **安全存储密钥**: 不要在配置文件中直接写入敏感信息，使用环境变量
3. **定期更新**: 保持代理版本最新以获得最佳性能
4. **测试配置**: 修改配置后使用命令行测试
5. **备份配置**: 定期备份 `config.yaml`

## 相关资源

- [使用教程](/acp/usage)
- [开发自定义代理](/acp/development)
- [故障排除](/acp/troubleshooting)
- [OpenCode 文档](https://opencode.ai/docs/acp/)
