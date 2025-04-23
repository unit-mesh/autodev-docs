

---
layout: default
title: 兼容性策略
nav_order: 3
parent: 开发指南
---

在 JetBrains 的 IDE 生态中，需要注意 API 可能会发生变更，导致插件与新版本 IDE 出现兼容性问题。为此，需要为插件配置兼容性策略。

AutoDev 采用以下兼容策略：

1. **前沿 API 支持：** 支持 233 至 241 及更高版本，这些版本代表 JetBrains 开始进行 AI 插件开发的 IDE 平台

2. **稳定 API 支持：** 兼容 222 至 232 版本，这些版本在企业环境中广泛使用并确保稳定性

通过采用这些策略，我们致力于提升插件对不同 JetBrains IDE 版本的兼容性，兼顾前沿开发环境和企业级稳定环境的需求。

## Gradle 兼容性配置

为确保插件适配不同 IDE 版本，可以在 Gradle 配置文件中进行设置（如 `gradle.properties`）:

```properties
# 支持的平台版本：222, 233
platformVersion=233
```

通过指定平台版本，可以确保插件与目标 IDE 版本保持兼容。

### 平台版本配置

根据不同的平台版本，可以通过 `gradle-{version}.properties` 文件进行配置。例如在 `gradle-222.properties` 中：

```properties
pluginSinceBuild=222.*
pluginUntilBuild=232.*
```

### Gradle 源集配置

也可以在 Gradle 源集（sourceSets）中进行配置，例如在 `build.gradle.kts` 中配置 `src/main/{version}/kotlin`：

```kotlin
allprojects {
    // ...
    sourceSets {
        main {
            java.srcDirs("src/gen")
            resources.srcDirs("src/$platformVersion/main/resources")
        }
        test {
            resources.srcDirs("src/$platformVersion/test/resources")
        }
    }
    kotlin {
        sourceSets {
            main {
                kotlin.srcDirs("src/$platformVersion/main/kotlin")
            }
            test {
                kotlin.srcDirs("src/$platformVersion/test/kotlin")
            }
        }
    }
    // ...
}
```

通过 Gradle 源集的配置方式，可以确保插件适配不同 IDE 版本，同时满足前沿开发需求和企业级稳定环境的双重需求。