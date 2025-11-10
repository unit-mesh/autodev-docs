---
title: AutoDev MPP Quickstart
nav_order: 2
parent: AutoDev MPP
---

在本地配置模型，或者使用 GUI 配置。示例路径：

```bash
➜  untitled git:(github) ✗ cat ~/.autodev/config.yaml
```

代码：

`File(System.getProperty("user.home"), ".autodev/config.yaml")` 

- 对于 Windows 来说，路径为 `C:\Users\<username>\.autodev\config.yaml`
- 对于 macOS 来说，路径为 `~/.autodev/config.yaml`
- 对于 Linux 来说，路径为 `~/.autodev/config.yaml`

配置示例：

```yaml
active: deepseek
configs:
  - name: deepseek
    provider: deepseek
    apiKey: sk-xxx
    model: deepseek-chat
  - name: glm-4
    provider: glm
    apiKey: xxx
    model: glm-4.6
    baseUrl: https://open.bigmodel.cn/api/paas/v4/
    temperature: 0.0
    maxTokens: 128000
```