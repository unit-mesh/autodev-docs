

---
layout: default
title: 示例模式
nav_order: 1
parent: 设计模式
permalink: /patterns/by-example
---

> 根据当前用户习惯，查找示例内容作为上下文生成生成式AI的输入

## Git提交信息示例

实现步骤：

1. 检索当前项目的版本控制系统（VCS）日志提供程序
2. 获取当前分支和用户
3. 根据用户或分支筛选日志
4. 收集示例提交信息

### 代码实现

```kotlin
private fun findExampleCommitMessages(project: Project): String? {
    val logProviders = VcsProjectLog.getLogProviders(project)
    logProviders.entries.firstOrNull() ?: return null

    val logProvider = entry.value
    val branch = logProvider.getCurrentBranch(entry.key) ?: return null
    val user = logProvider.getCurrentUser(entry.key)

    val logFilter = if (user != null) {
        VcsLogFilterObject.collection(VcsLogFilterObject.fromUser(user, setOf()))
    } else {
        VcsLogFilterObject.collection(VcsLogFilterObject.fromBranch(branch))
    }

    return collectExamples(logProvider, entry.key, logFilter)
}
```

### 模板示例

    为给定的diff编写一个连贯且描述性的提交信息
    - 确保同时包含"改变了什么"和"为什么改变"的信息
    - 以不超过50个字符的祈使句开头
    - 然后空一行继续更详细的说明（如果需要）
    - 详细说明应少于200个字符
    
    遵循Conventional Commits规范，示例：
    - fix(authentication): 修复密码正则表达式大小写问题
    - feat(storage): 增加S3存储支持
    - test(java): 修复用户控制器测试用例
    - docs(docs): 在首页添加架构图
    
    #if( $context.historyExamples.length() > 0 )
    历史示例：
    $context.historyExamples
    #end
    
    Diff：
    
    ```diff
    ${context.diffContent}

## 代码示例：测试代码样本

参考语言实现：`JavaTestContextProvider`、`KotlinTestContextProvider`

步骤：

1. 检索当前项目的被测试代码
2. 根据被测试代码查找模板：`Controller`、`Service`、默认测试等
   - Kotlin：`ControllerTest.kt`、`ServiceTest.kt`、`Test.kt`
   - Java：`ControllerTest.java`、`ServiceTest.java`、`Test.java`
3. 基于模板生成测试代码

## 文档示例

DOC TODO