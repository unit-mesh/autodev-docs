

---
layout: default
title: 单元驱动
nav_order: 2
parent: 设计模式
permalink: /patterns/unit-driven
---

> "单元驱动AI生成"是一种强调针对特定单元或模块使用人工智能（AI）生成技术来满足特定需求或目标的方法或概念。在此语境中，单元可以指软件开发中的各种模块，例如功能块、类块、测试方法、SQL片段、代码片段，甚至用户需求等。

该方法的核心理念是将整个系统或应用程序拆分为小型独立单元，然后利用AI技术为每个单元生成相应的代码、脚本、查询或其他必要实现。这种方法有助于提高开发效率，减少重复性工作，并确保每个单元在整个系统中能够独立且一致地运行。

具体而言，单元驱动AI生成可能涉及使用自然语言处理（NLP）技术解析用户需求并生成相应代码片段，或是通过学习和推理为特定编程语言、数据库查询语言等生成对应的单元实现。这种方法的优势在于能够灵活适应不同需求和环境，同时提升开发速度和质量。

## 单元驱动示例

### AutoSQL

参见 [AutoSQL](https://github.com/unit-mesh/auto-dev/tree/master/exts/database/src/main/kotlin/cc/unitmesh/database/flow)

### AutoPage

参见 [AutoPage](https://github.com/unit-mesh/auto-dev/tree/master/javascript/src/main/kotlin/cc/unitmesh/ide/javascript/flow)

### AutoArkUI

参见 [AutoArkUI](https://github.com/unit-mesh/auto-dev/tree/master/exts/ext-harmonyos/src/main/kotlin/cc/unitmesh/harmonyos/actions/auto)