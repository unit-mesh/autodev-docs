---
layout: default
title: 编排
nav_order: 3
parent: AI Agent 语言
---

# 编排

## DevIns 的自动响应

查看实现：
[DevInsProcessProcessor.kt](https://github.com/unit-mesh/auto-dev/blob/master/exts/devins-lang/src/main/kotlin/cc/unitmesh/devti/language/run/flow/DevInsProcessProcessor.kt)

在以下场景中，AutoDev 将自动执行操作：

### 方法：AI Agent 返回 `devin` 代码块

示例：

    ```devin
    Explain code /file:src/main/java/com/example/Controller.java
    ```

建议使用 `$command` 获取命令示例，并交由 LLM 处理。

### 方法：自动处理 DevIns 错误

当 DevIns 命令执行失败时，系统将调用 LLM 尝试修复。例如程序运行失败时：

    ```bash
    <DevInsError>: 文件未找到: src/test/
    
    --------------------
    
    进程已退出，退出代码 -1
    ```

在此情况下，AutoDev 将在聊天面板中处理后续操作。

### 方法：DevIns 注释标记

使用 DevIns 注释标记时，将运行后续脚本：

    ```devin
    [flow]:script/flow.devin
    ```

该功能仍处于实验阶段，未来可能会进行调整。

（注意：我们保持了所有代码块、URL链接和文件路径的原文不变，专业术语如"LLM"、"DevIns"等根据行业惯例保留英文，技术操作描述按照中文技术文档规范进行了本地化处理。）
