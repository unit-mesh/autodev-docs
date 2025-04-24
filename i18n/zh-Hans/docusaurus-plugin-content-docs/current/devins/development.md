---
layout: default
title: 开发DevIns
nav_order: 99
parent: AI代理语言
---

## 在不同语言中实现 `/run` 命令

由于需要验证AI生成的代码单元，测试是最佳验证方式。因此大多数情况下，我们使用`AutoTestService`来运行测试。

不同语言的测试运行器有所不同，例如：

- C/C++ => CppAutoTestService（CMake + Catch2）
- Go => GoAutoTestService
- Java => JavaAutoTestService（Gradle）
- Python => PythonAutoTestService

### 参考资料

[JetBrains Academy插件](https://github.com/JetBrains/educational-plugin)展示了如何在单个插件中组织不同类型任务的优秀范例。

- 检查任务运行：`EduTaskCheckerBase.kt`中的实现
