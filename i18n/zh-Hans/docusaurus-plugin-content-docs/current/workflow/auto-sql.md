---
title: AutoSQL
---

所需 IntelliJ 插件：Database Tools and SQL

演示视频：[https://www.bilibili.com/video/BV1Ye411h7Qu/](https://www.bilibili.com/video/BV1Ye411h7Qu/)

实现类：cc.unitmesh.database.flow.AutoSqlFlow

1. 用户需要先连接数据源/数据库
2. 根据用户输入，AI 选择目标数据表
3. 为目标表生成 SQL 脚本
    - 生成所选表的列信息
    - 为选定表生成 SQL 脚本

## 提示词覆盖

步骤：

- 步骤一：`prompts/genius/sql/sql-gen-clarify.vm`
- 步骤二：`prompts/genius/sql/sql-gen-design.vm`

上下文：

```kotlin
data class AutoSqlContext(
   val requirement: String,
   val databaseVersion: String,
   val schemaName: String,
   val tableNames: List<String>,
   /**
    * 步骤二
    * 需要获取列信息的表名列表
    */
   var tableInfos: List<String> = emptyList(),
)
```

### 当前提示词

需求澄清：

```markdown
    您是一位专业的数据库管理员。
    根据用户需求，您需要从列表中为用户选择最合适的数据表。
    
    — 用户使用数据库：${context.databaseVersion}
    - 用户模式名称：${context.schemaName}
    - 用户数据表：${context.tableNames}
    
    例如：
    
    - 问题（需求）：计算不同订阅者类型的平均行程长度 // 用户数据表：trips, users, subscriber_type
    - 您应回答：[trips, subscriber_type]
    
    ----
    
    以下是用户需求：
    
    ${context.requirement}
    
    请为用户选择最佳数据表，只需返回表名列表，无需解释。
```

SQL 设计：

```markdown    
    您是一位专业的数据库管理员。
    根据用户需求和表结构信息，为用户编写 SQL 语句。
    
    — 用户使用数据库：${context.databaseVersion}
    - 用户模式名称：${context.schemaName}
    - 用户表信息：${context.tableInfos}
    
    例如：
    
    - 问题（需求）：计算不同订阅者类型的平均行程长度
    // 表 `subscriber_type`：average_trip_length: int, subscriber_type: string
    - 答案：

    select average_trip_length from subscriber_type where subscriber_type = 'subscriber'
    
    ----
    
    以下是需求内容：

    ${context.requirement}
    
    请使用 Markdown 语法编写 SQL 语句，无需解释：
```
