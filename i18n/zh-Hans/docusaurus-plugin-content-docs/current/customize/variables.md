---
layout: default
title: 变量
parent: 自定义
nav_order: 20
permalink: /customize/variables

---

# 变量

## 英文版本

- selection: 用于获取当前选中的文本
- commentSymbol: 用于获取当前语言的注释符号，例如：`//`、`#`、`--`、`/* */` 等
- beforeCursor: 用于获取当前光标前的文本
- afterCursor: 用于获取当前光标后的文本
- language: 用于获取当前文件的语言，例如：`kotlin`、`java`、`python`、`javascript` 等
- fileName: 用于获取当前文件的文件名
- filePath: 用于获取当前文件的文件路径
- methodName: 用于获取当前方法的方法名
- frameworkContext: 用于获取当前文件的框架上下文，例如：`spring`、`junit`、`mockito` 等
- all: 用于获取所有变量（自 @1.8.6 版本起）

## 中文版本

- selection: 用于获取当前选中的文本
- commentSymbol: 用于获取当前语言的注释符号，例如：`//`、`#`、`--`、`/* */` 等
- beforeCursor: 用于获取当前光标前的文本
- afterCursor: 用于获取当前光标后的文本
- language: 用于获取当前文件的语言，例如：`kotlin`、`java`、`python`、`javascript` 等
- fileName: 用于获取当前文件的文件名
- filePath: 用于获取当前文件的文件路径
- methodName: 用于获取当前方法的方法名
- frameworkContext: 用于获取当前文件的框架上下文，例如：`spring`、`junit`、`mockito` 等
- all: 用于获取所有变量（自 @1.8.6 版本起）

# 方法

使用 `@context.methodName()` 调用方法

```kotlin
interface TeamContextProvider {
    /**
     * 检索与给定测试名称关联的目标文件代码
     *
     * @param methodName 测试名称
     * @return 目标文件的代码字符串
     */
    fun underTestFileCode(methodName: String): String

    /**
     * 检索与给定测试名称关联的目标方法代码
     *
     * @param methodName 需要检索目标方法代码的测试名称
     * @return 目标方法的代码字符串
     */
    fun underTestMethodCode(methodName: String): String

    /**
     * 返回相似代码块列表
     *
     * 本方法根据特定条件检索相似代码块列表，代码块以字符串形式表示
     *
     * @return 相似代码块字符串列表
     */
    fun similarChunks(): String

    /**
     * 返回当前方法的相关代码
     *
     * 本方法检索与当前方法关联的相关代码，该代码可用于理解方法的上下文或依赖关系
     *
     * @return 相关代码字符串
     */
    fun relatedCode(): String
}
```
