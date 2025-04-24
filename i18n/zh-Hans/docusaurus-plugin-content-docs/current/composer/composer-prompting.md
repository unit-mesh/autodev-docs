---
layout: default
title: AutoDev Composer提示机制
nav_order: 3
---

# AutoDev Composer提示机制

我们为 AutoDev Composer 设计的提示机制包含以下要素：

- 项目上下文：包括使用的库、框架和编程语言
- DSL（领域特定语言）：使用 [DevIns DSL](/devins) 构建版本功能工具
- CoT（思维链）：虽然功能工具有效，但我们认为 DSL 对 AI 和人类都更易理解

根据用户需求，我们会将其分析并执行为 DSL 指令，例如：

```devin
/database:schema
/symbol:com.example.blog.Blog
```

AutoDev 将调用对应的 `DatabaseInsCommand`、`SymbolInsCommand` 命令收集数据并返回给用户。

**项目上下文**

以下是项目上下文的典型示例：

```markdown
- 用户操作系统版本：Mac OS X 15.2 x86_64
- 工作空间绝对路径：/Users/phodal/IdeaProjects/untitled
- 当前工作空间使用 Gradle Java JDK_11
- 用户 shell 环境：/bin/bash
- 工作空间上下文：项目使用 MariaDB 11.5.2-MariaDB，正在使用 Spring Boot 2.7.10、Spring MVC、JDBC 构建 RESTful API
- 当前时间：2025-01-21 16:20:42
```

当用户连接数据库时，我们会利用这些上下文信息辅助连接。同时通过分析项目上下文来帮助生成代码。

**DSL 领域特定语言**

以下是我们发送给大语言模型学习的 DevIns DSL 示例：

    <devin>
    /commit
    ```markdown
    遵循约定式提交规范，示例：feat: 新增 'graphiteWidth' 选项
    ```
    
    </devin>

当启用 `AutoSketchMode` 时，以下只读命令将自动执行：

```kotlin
val READ_COMMANDS = setOf(
    BuiltinCommand.DIR,
    BuiltinCommand.LOCAL_SEARCH,
    BuiltinCommand.FILE,
    BuiltinCommand.REV,
    BuiltinCommand.STRUCTURE,
    BuiltinCommand.SYMBOL,
    BuiltinCommand.DATABASE
)
```

**思维链（CoT）**

以下是 CoT 的典型工作流程示例：
    
```markdown
    <用户问题>
    您正在帮助用户创建基于 Python 的照片存储应用。已创建 routes.py 和 main.js 文件，并更新了 main.html 文件。
    </用户问题>
    <回答步骤1>
    // 在此步骤中，您需要分析上下文信息是否充足。如不足，应调用 DevIn 工具获取上下文
    // 例如：
    为了帮助创建基于 Python 的照片存储应用，我需要更多了解代码库信息。将生成工具调用代码来获取必要上下文，请执行以下命令：
    <devin>
    /dir:src
    /localSearch:photo
    </devin>
    // 如果上下文仍不充足，应要求用户提供更多信息
    </回答步骤1>
    <用户步骤1响应>
    // 等待用户发送工具执行结果
    </用户步骤1响应>
    <回答步骤2>
    // 在此步骤中，首先解释解决方案，然后使用 DevIn 语言调用工具实现
    
    # 步骤1. 创建 `routes.py`
    已创建 `routes.py` 来定义 `/upload` 和 `/query` 端点，并添加 `/` 作为 `main.html` 的端点
    
    # 步骤2. 创建 `main.js`
    已创建专用 `main.js` 存储前端交互代码，定义显示窗口和按钮的 UI 元素，并为按钮创建事件监听器
    
    # 步骤3. 更新 `index.html`
    将所有 JavaScript 代码移至 `main.js` 并在 `index.html` 中导入。代码分离可提高组织性、可读性、可维护性和复用性
    
    # 步骤4. 运行测试验证
    现在将启动 Flask 服务器并运行应用。生成 IntelliJ IDEA 的 `.http` 测试代码，您可以通过网站尝试上传和搜索照片来验证功能
    
    # 变更总结
    通过创建 `routes.py` 和 `main.js`，实现了照片应用交互功能。用户现可使用自然语言查询上传和搜索照片，同时优化了代码组织结构。运行应用进行测试，如遇问题或需新增功能请告知！
    
    // 使用 DevIn 语言进行编码。需要创建或修改文件时使用对应命令
    <devin>
    /write:src/main/route.py // 仅当文件不存在时创建
    ```python
    // 路由代码
    // from flask import Flask
    /`/`/`
    </devin>
```

通过这种方式，我们可以使用 DevIn 语言帮助用户生成所需代码。
