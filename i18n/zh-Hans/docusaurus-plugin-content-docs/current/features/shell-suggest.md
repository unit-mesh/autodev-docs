---
layout: default
title: Shell建议
parent: 基础功能
nav_order: 12
permalink: /features/shell-suggest
---

## Shell建议

在终端中，我们提供了通过大型语言模型（LLM）生成Shell脚本的功能。

![Shell建议](https://unitmesh.cc/auto-dev/autodev-shell-suggest.png)

## 自定义配置

### 默认上下文

```kotlin
data class ShellSuggestContext(
    val question: String,
    val shellPath: String,
    val cwd: String,
    // 今天的日期，例如20240322
    val today: String = SimpleDateFormat("yyyyMMdd").format(Date()),
    // 操作系统名称
    val os: String = System.getProperty("os.name")
)
```

### 提示词输出示例
