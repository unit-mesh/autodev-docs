---
sidebar_position: 2
title: Custom AI Agent Response Action
---

## Response Action

```kotlin title="CustomAgentResponseAction.kt"
enum class CustomAgentResponseAction {
    /**
     * Direct display result
     */
    Direct,

    /**
     * Stream response
     */
    Stream,

    /**
     * Text splitting result
     */
    TextChunk,

    /**
     * Display result in WebView
     */
    WebView,

    /**
     * Handle by DevIns language compile and run in code block.
     * @since: AutoDev@1.8.2
     */
    DevIns
}