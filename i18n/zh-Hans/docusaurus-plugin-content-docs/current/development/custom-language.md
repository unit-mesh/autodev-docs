---
layout: default
title: 自定义语言
parent: 开发指南
nav_order: 11
permalink: /custom/language
---

# 自定义语言

## 增强语言支持

我们参考了JetBrains AI Assistant的多语言支持实现，并结合AutoDev的设计原则设计了一系列扩展点。

我们参考了IntelliJ Rust插件的多目标支持实现，并结合设计进行了整合。

要为新语言添加支持，您需要：

1. 在`settings.gradle.kts`中创建新模块，例如：`webstorm`、`pycharm`等
2. 在新模块的`build.gradle.kts`中进行配置
3. 在IntelliJ IDEA中同步Gradle
4. 在`resources/META-INF`目录下创建XML文件（如`cc.unitmesh.pycharm.xml`），并将其导入到`plugin/src/main/resources/META-INF/plugin.xml`
5. 创建扩展点

Gradle配置示例：

```kotlin
project(":pycharm") {
    intellij {
        version.set(pycharmVersion)
        plugins.set(pycharmPlugins)
    }
    dependencies {
        implementation(project(":"))
    }
}
```

### 扩展点

JetBrains AI Assistant扩展点：

```xml
<extensionPoints>
    <extensionPoint qualifiedName="cc.unitmesh.fileContextBuilder"
                    beanClass="com.intellij.lang.LanguageExtensionPoint" dynamic="true">
        <with attribute="implementationClass" 
              implements="cc.unitmesh.devti.context.builder.FileContextBuilder"/>
    </extensionPoint>

    <extensionPoint qualifiedName="cc.unitmesh.classContextBuilder"
                    beanClass="com.intellij.lang.LanguageExtensionPoint" dynamic="true">
        <with attribute="implementationClass"
              implements="cc.unitmesh.devti.context.builder.ClassContextBuilder"/>
    </extensionPoint>

    <extensionPoint qualifiedName="cc.unitmesh.methodContextBuilder"
                    beanClass="com.intellij.lang.LanguageExtensionPoint" dynamic="true">
        <with attribute="implementationClass"
              implements="cc.unitmesh.devti.context.builder.MethodContextBuilder"/>
    </extensionPoint>

    <extensionPoint qualifiedName="cc.unitmesh.variableContextBuilder"
                    beanClass="com.intellij.lang.LanguageExtensionPoint" dynamic="true">
        <with attribute="implementationClass"
              implements="cc.unitmesh.devti.context.builder.VariableContextBuilder"/>
    </extensionPoint>
</extensionPoints>
```

AutoDev扩展点：

```xml
<extensionPoints>
    <extensionPoint qualifiedName="cc.unitmesh.contextPrompter"
                    interface="cc.unitmesh.devti.provider.ContextPrompter"
                    dynamic="true"/>
</extensionPoints>
```

#### Java/IDEA 示例

```xml
<extensions defaultExtensionNs="cc.unitmesh">
    <!-- 语言支持 -->
    <classContextBuilder language="JAVA"
                         implementationClass="cc.unitmesh.ide.idea.context.JavaClassContextBuilder"/>

    <methodContextBuilder language="JAVA"
                          implementationClass="cc.unitmesh.ide.idea.context.JavaMethodContextBuilder"/>

    <fileContextBuilder language="JAVA"
                        implementationClass="cc.unitmesh.ide.idea.context.JavaFileContextBuilder"/>

    <variableContextBuilder language="JAVA"
                            implementationClass="cc.unitmesh.ide.idea.context.JavaVariableContextBuilder"/>

    <!-- 技术栈绑定 -->
    <extensionPoint qualifiedName="cc.unitmesh.contextPrompter"
                    interface="cc.unitmesh.devti.provider.ContextPrompter"
                    dynamic="true"/>
  
    <extensionPoint qualifiedName="cc.unitmesh.testContextProvider"
                    interface="cc.unitmesh.devti.provider.WriteTestService"
                    dynamic="true"/>
  
    <extensionPoint qualifiedName="cc.unitmesh.chatContextProvider"
                    interface="cc.unitmesh.devti.provider.context.ChatContextProvider"
                    dynamic="true"/>
</extensions>
```
