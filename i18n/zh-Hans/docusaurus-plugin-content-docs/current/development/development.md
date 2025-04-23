---
layout: default
title: 开发指南
nav_order: 10
has_children: true
permalink: /development
---

# 开发指南

1. `git clone https://github.com/unit-mesh/auto-dev/`
2. 使用 IntelliJ IDEA 打开项目
3. `./gradlew runIde`

关键概念：

- 工作流程设计：[DevFlowProvider](src/main/kotlin/cc/unitmesh/devti/provider/DevFlowProvider.kt)
- 提示策略设计：[PromptStrategyAdvisor](src/main/kotlin/cc/unitmesh/devti/provider/PromptStrategy.kt)

### 发布流程

1. 修改[gradle.properties](gradle.properties)中的pluginVersion
2. 创建git标签 `version`
3. 执行`./gradlew publishPlugin`
