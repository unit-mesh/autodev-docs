---
layout: default
title: DevIns 快速入门
nav_order: 1
parent: AI 智能体语言
---

## 快速入门

1. 首先创建新文件，例如 `sample.devin`，内容如下：

```devin
Explain code /file:src/main/java/com/example/Controller.java
```

2. 使用 `AutoDev` 插件运行文件，即可查看 AI 的响应结果。

截图

![AutoDev DevIns](https://unitmesh.cc/auto-dev/autodev-devins.png)

## 基础命令 (BuiltinCommand.kt)

- `/file`: 读取文件内容，格式：`/file:<文件路径>`，示例：`/file:src/main/java/com/example/Controller.java`
- `/write`: 写入文件内容，格式：`文件#L1-L12`，示例：`src/main/java/com/example/Controller.java#L1-L12`
- `/rev`: 通过 Git 版本号读取变更
- `/run`: 运行代码（特别适用于测试文件，这是运行代码的最佳方式）
- `/patch`: 应用补丁到文件
- `/commit`: 提交变更到 Git
- `/symbol`: 通过符号获取子元素（例如通过包名获取类），格式：`java.lang.String#length`，示例：`<包名>.<类名>#<方法名>`
- `/shell`: 执行 shell 命令或脚本，例如 `ls`, `pwd` 等
- `/browse`: 浏览网页，例如 `https://ide.unitmesh.cc`
- `/refactor`: 代码重构（如重命名、删除、移动等）（自 @1.8.6 起支持）（目前仅支持 Java）
- `/file-func`: 读取文件名，支持正则表达式，示例：`/file-func:regex(".*\.txt")`
- `/structure`: 通过 AST/PSI 获取文件结构，示例：`/structure:cc.unitmesh.devti.language.psi`
- `/dir`: 以树状结构列出文件和目录，示例：`/dir:src`
- `/database`: 读取数据库内容，示例：`/database:query\n```sql\nSELECT * FROM table\n````
- `/localSearch`: 在指定范围（当前仅支持项目）内搜索文本，返回匹配行前后各5行，示例：`/localSearch:project\n```\nselect * from blog\n````
- `/related`: 通过 AST（抽象语法树）获取当前文件相关代码，示例：`/related:cc.unitmesh.devti.language.psi`
- `/open`: 在编辑器中打开文件，示例：`/open:.github/dependabot.yml`
- `/ripgrepSearch`: 使用 ripgrep 在项目中搜索文本，示例：`/ripgrepSearch:.*AutoDev.*`

### 文件命令

基于 [#143](https://github.com/unit-mesh/auto-dev/issues/143)，我们保持"/"作为跨平台（macOS/Windows/Unix）的`File.separator`路径分隔符。

读取文件内容：

    Explain code /file:src/main/java/com/example/Controller.java

将调用 LLM 进行处理。

### 写入命令

写入内容到文件：

    /write:src/main/java/com/example/Controller.java#L1-L12
    ```java
    public class Controller {
        public void method() {
            System.out.println("Hello, World!");
        }
    }
    ```

### 版本命令

通过 Git 版本号读取变更：

    Explain code /rev:HEAD~1

将调用 LLM 进行处理。

### 运行命令

运行文件：

    /run:src/main/java/com/example/Controller.java

PS：当前仅支持测试文件，因为单元测试是运行代码的最佳方式。

### 符号命令

通过符号获取子元素（例如通过包名获取类）：

    /symbol:cc.unitmesh.untitled.demo

输出结果：

    ```java
    cc.unitmesh.untitled.demo.MathHelper
    cc.unitmesh.untitled.demo.DemoApplication
    cc.unitmesh.untitled.demo.MathHelperTest
    cc.unitmesh.untitled.demo.DemoApplicationTests
    ```

获取方法将返回代码：

    /symbol:cc.unitmesh.untitled.demo.MathHelper.calculateInsurance

输出结果：

    ```java
    public static double calculateInsurance(double income) {
        if (income <= 10000) {
            return income * 0.365;
        } else {
            return income * 0.365 + 1000;
        }
    }
    ```

### 浏览命令

浏览网页：

    /browse:https://ide.unitmesh.cc

将返回网页正文内容。

### 重构命令

代码重构：

    /refactor:rename /symbol:cc.unitmesh.untitled.demo.MathHelper.calculateInsurance to calculateInsuranceTax

将在本地执行操作。

### 结构命令

通过 AST/PSI 提供文件结构：

    /structure:root.go

```
// /Volumes/source/modernizing/coca/cmd/root.go
           root.go
             output: io.Writer
             rootCmd
             NewRootCmd(out io.Writer) *cobra.Command
             BsCmdConfig
               Path: string
             bsCmdConfig: BsCmdConfig
             badsmellCmd
             isSmellHaveSize(key string) bool
             init()
             ApiCmdConfig
               Path: string
               DependencePath: string
               ShowCount: bool
               RemovePackageNames: string
               AggregateApi: string
               ForceUpdate: bool
               Sort: bool
```
