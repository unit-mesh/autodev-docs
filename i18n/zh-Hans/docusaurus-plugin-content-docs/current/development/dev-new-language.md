

---
layout: default
title: 开发新语言支持
nav_order: 2
parent: 开发指南

---

若您希望为 AutoDev 开发新的编程语言支持，请遵循本指南操作。

1. 在[JetBrains插件市场](https://plugins.jetbrains.com/)查找相关语言插件
2. 在AutoDev中创建新语言插件模块
    - 在`build.gradle.kts`中配置依赖项
    - 在`settings.gradle.kts`中设置依赖项
    - 在`newlang/src/main/resources/cc.unitmesh.<新语言>.xml`路径下创建插件模块文件
    - 在`plugin/src/main/plugin.xml`中声明插件模块
3. 实现插件模块功能

## AutoDev 扩展点

### 代码数据结构上下文提供者

> 代码数据结构将提供代码的层次化信息，包括文件、类、方法、变量等元素。这些信息将被用于测试生成、代码补全、重构等功能。

最初我们采用[Chapi](https://github.com/phodal/chapi)进行代码解析，但其性能较慢。后来发现JetBrains IDE已内置优秀的数据结构实现，因此我们基于JetBrains的设计方案进行了重构。

```xml
<extensions defaultExtensionNs="cc.unitmesh">
   <fileContextBuilder language="Rust"
                       implementationClass="cc.unitmesh.rust.context.RustFileContextBuilder"/>
   <classContextBuilder language="Rust"
                        implementationClass="cc.unitmesh.rust.context.RustClassContextBuilder"/>
   <methodContextBuilder language="Rust"
                         implementationClass="cc.unitmesh.rust.context.RustMethodContextBuilder"/>
   <variableContextBuilder language="Rust"
                           implementationClass="cc.unitmesh.rust.context.RustVariableContextBuilder"/>
</extensions>
```

### 聊天上下文提供者

> 聊天上下文提供者将收集语言版本、编译器版本、框架信息等上下文数据。

与代码数据结构类似，我们遵循JetBrains的设计规范。同一语言可配置多个上下文提供者。

```xml
<chatContextProvider implementation="cc.unitmesh.rust.provider.RustVersionContextProvider"/>
<chatContextProvider implementation="cc.unitmesh.rust.provider.RustCompilerContextProvider"/>
```

### 测试上下文提供者

> 测试上下文提供者负责收集测试生成所需的上下文信息，并与代码修改器协同生成测试代码。

```xml
<testContextProvider language="Rust" implementation="cc.unitmesh.rust.provider.RustTestService"/>

<codeModifier language="Rust" implementationClass="cc.unitmesh.rust.provider.RustCodeModifier"/>
```

### 实时文档

> 实时文档功能将为用户提供动态文档支持，并具备注释生成能力。

```xml
<livingDocumentationProvider language="Rust" implementation="cc.unitmesh.rust.provider.RustLivingDocumentationProvider"/>
```

### API测试数据构建器

> API测试数据构建器负责生成API测试相关数据及测试代码。

```xml
<testDataBuilder language="kotlin"
             implementationClass="cc.unitmesh.kotlin.provider.KotlinTestDataBuilder"/>
```

### 上下文提示器

> 上下文提示器负责定义界面显示和请求时的上下文提示规则。

```xml
<contextPrompter
          language="kotlin"
          implementation="cc.unitmesh.kotlin.provider.KotlinContextPrompter"/>
```

### 自定义提示提供者

> 自定义提示提供者用于实现用户特定的提示功能。

```xml
<customPromptProvider
        language="kotlin"
        implementationClass="cc.unitmesh.kotlin.provider.KotlinCustomPromptProvider"/>
```