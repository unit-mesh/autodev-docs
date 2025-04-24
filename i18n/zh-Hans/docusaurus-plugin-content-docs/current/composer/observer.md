---
layout: default
title: Sketch Observer
nav_order: 3
---

AutoDev Observer 是 AutoDev 中基于 AI 的诊断工具，旨在监控和分析软件开发过程中出现的问题，特别是构建失败和测试失败。它帮助开发人员识别根本原因，跟踪解决进度，并动态建议可能的修复方案。

当前 AutoDev Observer 已集成以下工具：

- TestAgentObserver。运行测试时监控测试过程，收集相关上下文
- BuiltTaskAgentObserver。处理构建失败场景（如 Gradle 构建失败）
- AddDependencyAgentObserver。当添加依赖失败时，尝试调用 AI 解决问题
