---
title: Agentic Coding
---

## AI 辅助研发下的生态全景

目标：与研发生态上下游平台能力打通，便捷操作

- 如上游的需求、任务管理、中间件与云等设施申请/配置、API开放平台等；
- 如下游的CI/CD、Testing平台、Ops/Monitoring等；
- 多渠道打造 chat 入口，让互动更灵活

示例：

“请从开放API平台查询关于获取用户kyc信息对应的接口”
“请基于上述第二个接口生成调用代码”


![AI 辅助研发组织的技术蓝图](/img/ai4se-landscape.png)

- 本地插件自带：IDE 提供基于代码事实信息。
- 云端智能体：结合 DevOps、知识库等提供统一能力。
- AutoDev 本地智能体 1：通过 MCP 方案，提供本地智能体的能力。
- AutoDev 本地智能体 2：通过 DevIns，让你的一句话就变成智能体。

## 路径 1：多端智能体

![AutoDev Agents](/img/autodev-agents.png)

### 云端智能体

通过云端智能体，提供统一的能力（文档: [AutoDev MCP](/agent/remote)

示例：

1. 提供平台工具让团队更低门槛地参与自定义，自定义能力可以进一步集合在企业 Market 中
2. IDE 端从 Market 中获取自定义能力，个性化形成自己的 Chat 助手
3. 企业 Market 可以提供分享、社区评论、贡献与使用度排名等运营举措以提升活跃度

### 本地智能体

1. 通过 MCP 方案，提供本地智能体的能力（文档: [AutoDev MCP](/mvp/)
2. 通过 DevIns，让你的一句话就变成智能体（文档: [自定义本地智能体](/local-agent))

