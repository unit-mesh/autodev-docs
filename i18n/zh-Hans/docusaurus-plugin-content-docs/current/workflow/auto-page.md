---
title: AutoPage
---

所需插件：JavaScript

演示视频：[https://www.bilibili.com/video/BV1Ye411h7Qu/](https://www.bilibili.com/video/BV1Ye411h7Qu/)

实现类：[cc.unitmesh.database.flow.AutoPageFlow]

## 设计流程

前端开发通用流程：

- 获取路由
- 获取组件
- 获取设计系统组件
- 远程调用示例
- 状态管理示例

## 提示覆盖

步骤：

- 步骤1：`prompts/genius/page/page-gen-clarify.vm`
- 步骤2：`prompts/genius/page/page-gen-design.vm`

上下文：

```kotlin
data class AutoPageContext(
    val requirement: String,
    var pages: List<String>,
    val pageNames: List<String>,
    var components: List<String>,
    val componentNames: List<String>,
    val routes: List<String>,
    val frameworks: List<String> = listOf("React"),
    val language: String = "JavaScript",
)
```

### 当前提示

需求澄清：

```
    您是一名专业的前端开发工程师。
    根据用户需求，您需要从列表中为用户选择最佳组件。

    - 框架：${context.frameworks}
    - 语言：${context.language}
    - 用户组件：${context.componentNames}, ${context.pageNames}
    
    示例：
    
    - 问题（需求）：构建用户信息填写表单
    - 应返回：[输入框, 下拉选择, 单选按钮, 复选框, 按钮, 表单]
    
    ----
    
    用户需求：
    
    ```markdown
    ${context.requirement}
    ```
    
    请选择最适合的组件名称，仅返回列表形式，无需解释。
```

设计实现：

```markdown
    您是一名专业的前端开发工程师。
    根据用户需求和组件信息，编写对应的组件代码。
    
    - 框架：${context.frameworks}
    - 语言：${context.language}
    - 用户组件信息：${context.components}
    
    示例：
    
    - 问题（需求）：构建用户信息填写表单
      // 组件名称：表单, 属性：{ fields: [{name: '姓名', type: 'text'}, {name: '年龄', type: 'number'}] }
      // 组件名称：输入框, 属性：{ name: '姓名', type: 'text' }
      // 组件名称：输入框, 属性：{ name: '年龄', type: 'number' }
    - 答案：
    <Form>
        <Input name="姓名" type="text" />
        <Input name="年龄" type="number" />
    </Form>
    
    ----
    
    当前需求：
    
    ${context.requirement}
    
    请使用Markdown语法编写代码，无需解释：
```

## 自动页面生成原理 

前端通用流程：

1. 功能引导
2. 请求转换/数据验证、IO处理
3. 进程间通信/远程调用
4. 输出转换/渲染
