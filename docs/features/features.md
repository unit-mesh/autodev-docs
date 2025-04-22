---
layout: default
title: 功能
nav_order: 3
has_children: true
permalink: /features
---

<p align="center">
  <img src="/img/autodev-overview.svg" width="100%" height="100%"  alt="Overview" />
</p>

## 功能

- **智能体驱动**
    - Sketch - 智能体驱动的编码工作流。
    - Bridge - 遗留代码的智能体驱动重构。
    - MCP
- **自动开发模式**
    - AutoSQL（需要数据库插件）。上下文感知的 SQL 生成。
    - AutoPage（React）。上下文感知的网页生成。
    - 自动测试。创建单元测试意图，自动运行单元测试并尝试修复测试。
    - 自动文档。自动生成文档。
- **副驾驶模式**
    - AutoDev 将帮助您查找错误、解释代码、跟踪异常、生成提交等。
    - 特定模式。基于您的代码上下文（如 Controller、Service `import`），AutoDev 将向您推荐最佳代码。
    - 相关代码。基于最近的文件更改，AutoDev 将计算类似的代码块以生成最佳代码。
- **与 AI 聊天**。与选定代码聊天并感知代码上下文。
- **自定义**。
    - 提示的自定义规范。例如，Controller、Service、Repository、Model 等。
    - 自定义意图操作。您可以添加自己的意图操作。
    - 自定义 LLM 服务器。您可以在 `Settings` -> `Tools` -> `AutoDev` 中自定义 LLM 服务器。
    - 自定义活文档。自定义您自己的活文档，如注释。
    - 团队 AI。在代码库中自定义您的团队提示，并分发给您的团队。
    - 提示覆盖。您可以在代码库中覆盖 AutoDev 的提示。
- **SDLC**
    - VCS。生成/改进提交消息、发布说明等。
    - 代码审查。生成代码审查内容。
    - 智能重构。基于 AI 的重命名、代码异味重构、重构建议等。
    - Dockerfile。基于您的项目生成 Dockerfile。
    - CI/CD 配置。基于构建工具生成 CI/CD 配置文件，如 `.github/workflows/build.yml`。
    - 终端。在终端工具窗口中，您可以使用自定义输入生成 shell/命令。
- **自定义 AI 智能体**
    - 本地智能体：可执行 AI 智能体语言：DevIns。
    - 远程智能体：自定义 AI 智能体。您可以将自己的 AI 智能体集成到 AutoDev 中。
