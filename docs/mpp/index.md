---
title: AutoDev MPP 
slug: autodev-multiplatform
---

AutoDev MPP 是 AutoDev 的多平台版本，它基于 Kotlin 的 Multiplatform 技术，可以运行在 JVM、JS、Native 等多个平台之上。

- 远程 AI Agent 支持 🌐
- 新增 CLI 应用
- 新增 TUI 应用
- 新增 Desktop 应用
- 新增 Android 应用
- 重构 IDEA 插件（TODO）

## Renderer

![](/img/next/renderer_architecture.svg))

统一了所有平台的渲染器接口规范，确保跨平台一致性。

**统一接口:**
- **Kotlin**: `CodingAgentRenderer` (mpp-core/commonMain)
- **TypeScript**: `JsCodingAgentRenderer` (从 Kotlin 导出)
- **基类**: `BaseRenderer` (Kotlin/TypeScript 双实现)

**渲染器实现:**
| 渲染器 | 平台 | 继承关系 | 状态 |
|--------|------|---------|------|
| **CliRenderer** | Node.js CLI | extends BaseRenderer | ✅ 已统一 |
| **ServerRenderer** | mpp-server | extends BaseRenderer | ✅ 已统一 |
| **TuiRenderer** | React/Ink TUI | implements Interface | ✅ 特殊架构 |
| **ComposeRenderer** | Desktop/Android | extends BaseRenderer | ✅ 已统一 |

