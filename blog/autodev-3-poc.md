---
title: AutoDev 架构升级：多端（CLI/Desktop/Mobile）编程 Agent，欢迎一起参与演进
---

半年前，我在《AutoDev Next》那篇文章中介绍了 AutoDev 的下一代架构，其中一个核心方向就是：**多端支持**。
之后，一直在忙项目交付——从 AI 参与遗留系统现代化，到做 AI 辅助的软件工程培训。一直到国庆，才终于有整块时间继续推进 AutoDev
的演进。

这段时间里，我不断做 POC，验证不同技术模型的可行性，尝试新的交互与架构思路。直到最近，新的重构方向基本成型，并成功跑通了关键链路，也顺手
Vibe Coding 了一波。

TL;DR：代码：https://github.com/unit-mesh/auto-dev （似乎是目前国内最好的开源 AI 编程工具）

![](images/autodev-github.png)

欢迎来一起加入演进。

## 基于 KMP + Compose 的 AutoDev 多平台重构实践

新的 AutoDev 架构如下：

![新 AutoDev 架构](images/autodev-next-arch.png)

> PS：之所以叫重构，是我们在 AutoDev 上已经有大量的经验，尽管架构上是紧耦合的，但是利于 AI 阅读后重写，比如，我们的 DevIns 语言。
> 在这几个月里，我也尝试使用 Rust/TypeScript/Kotlin 来开发的 CLI，但是发现多数时间在写之前的重复性代码。所以，基于 KMP
> （Kotlin Multiplatform）是一个更合理的架构。

在新的架构里，MPP-Core 是我们的核心，基于 Kotlin 的 Multiplatform 技术，我们构建出了 JS 和 JVM 版本的两个核心接口和实现，基于
这两个实现。基于多平台的 Core + Compose UI，我们就可以构建出：

- 基于 JS 版本的 `@autodev/cli` 的 CLI （Command Line Interface）和 TUI （Terminal UI）版本
- 基于 JVM 版本的 AutoDev IDEA，AutoDev Desktop 和 AutoDev Android，以及未来的 AutoDev iOS

而为了在当前 AI Token 还不便宜、Agent grep 还不理想的情况下，我们还是构建了基于 TreeSitter 的 MPP-CodeGraph，通过树和图的方式
来节省上下文，近而节省企业的成本。Codex、Gemini CLI、Claude Code 都是 AI 厂商卖 token 的，自然可以不考虑那么多。

### CodeGraph：基于树和代码图的上下文压缩引擎

尽管 Gemini CLI 和 Claude Code 提供了近似无限上下文的能力，但是对于重构等一系列复杂问题的分析，它们依然非常不靠谱，而且非常贵。
所以，我们还是要引入 CodeGraph 来解决复杂问题下的代码搜索等问题。而 TreeSitter 是目标 “跨平台” 最好的方式之一，毕竟 wasm + binary
可以运行在各种平台上。

### AutoDev IDEA：核心能力即 MCP 能力

在新版本的 IDEA 里，MCP 已经是内置的能力，而我们还是预期 AutoDev 作为 MCP 服务端，来为其它的 Agent 提供服务。

### 为什么是 AutoDev Desktop 和 AutoDev Android ？

半年前，我一直在思考如果做一个新 AI IDE 我们是否需要语法高亮，是否需要代码跳转，AutoDev 是不是优势会越来越小。直到，最近的新版本的
Cursor 给出了一个答案，独立 UI 下的 Agents 模式。在简单的任务下，我们并不需要一直坐在电脑前面，比如我在 iPad 上用 VNC Viewer
来看电脑上的进度， 并可以一边看娃。

既然如此，Android 和 iOS 版本就更有意义了，你可以从踏上地铁、公交车的时候，就可以远程 Vibe Coding。然后到了公司，就可以美滋滋地去
~~吃个早饭~~（修 AI 的 bug）。

![](images/autodev-android.jpg)

毕竟，Android 上可不写不了代码。

## 用 Compose 重塑 AutoDev 的界面与交互

在几个月前，在和 @iptton 尝试使用 Intellij Compose 构建了一个新的 AutoDev IDE UI 之后，
我也尝试了在 2025.2 的版本 IDEA 上 Vibe Coding 了一个新的 UI。显然，与 Swing 相比，有大量语料的 Compose 表现得更加稳定和可靠，不会
像 Swing 报一堆错误。

![](images/autodev-desktop.png)

既然，我们有了更好的 Vibe Coding，那传统的 IDE 交互方式是不是就不需要了，非专业人士只需要一个聊天界面，以及可以实时预览和交互的
UI 就行了？

## MPP-Core：AutoDev 的跨平台核心引擎

如下是我们去年的 AutoDev 架构图，你可以看到在不同平台（JetBrains、VSCode）上的架构差异： 

![autodev-jetbrains-vscode.png](images/autodev-jetbrains-vscode.png)

而在今天来看，尽管架构发生了巨大的变化，一切都围绕着 Tool 和 Agent：

![Coding Agent](images/simple-coding-agents.png)

我们可以通过 Tool 接口和抽象很好地剥离平台间的差异，进而把各种能力都放在 core 上，进而更好地实现跨平台能力：

![AutoDev CLI](images/autodev-cli.png)

近而，我们就可以构建出如上图所示的 AutoDev CLI。

## 欢迎加入 AutoDev 的多端编程世界

作为一个刚完成 POC 的版本，我们依然有大量的工作要做。

如果你对 AI 编程、跨平台 Agent、或者像 AutoDev 这样前沿的多端架构感兴趣，无论你是开发者、研究者，还是想玩玩 Vibe Coding
的爱好者，都欢迎加入我们！

我们在 GitHub 上持续更新代码、分享实践经验，也期待你的反馈、PR、甚至新点子——让 AutoDev 的多平台之路走得更稳、更远。

