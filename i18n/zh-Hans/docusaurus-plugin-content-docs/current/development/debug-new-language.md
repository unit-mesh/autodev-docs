---
layout: default
title: 调试新语言支持
nav_order: 2
parent: 开发指南
---

在JetBrains的IDE中，某些语言的支持不够完善，有些语言甚至完全没有官方支持。

- 支持完善的语言会有专属IDE，例如Go语言有GoLand
- 支持不足的语言缺乏IDE支持，例如CLion中的Rust支持（RustRover出现之前）

因此我们需要为这些语言配置插件支持

## 调试配置

调试时，我们直接使用`.idea/runConfigurations`目录下的运行配置，可以通过复制现有配置进行修改。

这是一个[RustRust.xml]的配置示例：

```xml
<component name="ProjectRunConfigurationManager">
  <configuration default="false" name="Run Rust" type="GradleRunConfiguration" factoryName="Gradle">
    <ExternalSystemSettings>
      <option name="executionName" />
      <option name="externalProjectPath" value="$PROJECT_DIR$" />
      <option name="externalSystemIdString" value="GRADLE" />
      <option name="scriptParameters" value="-PbaseIDE=idea -Plang=rust" />
      <option name="taskDescriptions">
        <list />
      </option>
      <option name="taskNames">
        <list>
          <option value=":plugin:runIde" />
        </list>
      </option>
      <option name="vmOptions" value="" />
    </ExternalSystemSettings>
    <GradleScriptDebugEnabled>false</GradleScriptDebugEnabled>
    <method v="2" />
  </configuration>
</component>
```

我们通过`scriptParameters`参数向gradle脚本传递`baseIDE`和`lang`参数：

```bash
./gradlew :plugin:runIde -PbaseIDE=idea -Plang=rust
```

## Gradle配置

在Gradle脚本（build.gradle.kts）中可以进行插件配置：

```kotlin
project(":plugin") {
    apply {
        plugin("org.jetbrains.changelog")
    }

    version = prop("pluginVersion") + "-$platformVersion"

    intellij {
        pluginName.set(basePluginArchiveName)
        val pluginList: MutableList<String> = mutableListOf("Git4Idea")
        when (lang) {
            "idea" -> {
                pluginList += javaPlugins
            }
            "python" -> {
                pluginList += pycharmPlugins
            }
            "go" -> {
                pluginList += listOf("org.jetbrains.plugins.go")
            }
            "rust" -> {
                pluginList += rustPlugins
            }
        }

        plugins.set(pluginList)
    }
  
    // ...
}
```

在`rustPlugins`中可以看到Rust语言所需的插件列表：

```kotlin
val rustPlugins = listOf(
    prop("rustPlugin"),
    "org.toml.lang"
)
```

`prop("rustPlugin")`定义在`gradle.properties`文件中，该配置会根据不同IDE版本加载对应插件版本：

- gradle-222.properties
- gradle-233.properties

在`gradle-222.properties`中定义Rust插件版本：

```properties
rustPlugin=org.rust.lang:0.4.185.5086-222
```

在`gradle-233.properties`中定义Rust插件版本：

```properties
rustPlugin=com.jetbrains.rust:233.21799.284
```

## Rust调试配置

Rust开发的注意事项：

由于JetBrains的策略调整，Rust IDE插件有两个不同版本：

- **低于233版本：已弃用的Rust插件**
  - 最新版本查看：https://plugins.jetbrains.com/plugin/8182--deprecated-rust
  - 配置参数：rustPlugin=org.rust.lang:0.4.185.5086-222
- **233及以上版本：官方Rust插件**
  - 最新版本查看：https://plugins.jetbrains.com/plugin/22407-rust/versions
  - 配置参数：rustPlugin=com.jetbrains.rust:233.21799.284
