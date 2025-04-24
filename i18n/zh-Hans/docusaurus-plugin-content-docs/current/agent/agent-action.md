---
layout: default
title: 自定义AI智能体响应动作
parent: 智能体
nav_order: 2
---

## 响应动作

```kotlin
enum class CustomAgentResponseAction {
    /**
     * 直接显示结果
     */
    Direct,

    /**
     * 流式响应
     */
    Stream,

    /**
     * 文本分块结果
     */
    TextChunk,

    /**
     * 在WebView中显示结果
     */
    WebView,

    /**
     * 通过DevIns语言处理并在代码块中运行
     * @since: AutoDev@1.8.2
     */
    DevIns
}
```

### Direct

> 直接在聊天窗口呈现结果

<img src="https://unitmesh.cc/auto-dev/custom-agent-example.png" alt="自定义AI智能体下拉菜单" width="600px"/>

### TextChunk

> 在AutoDev输入框中显示结果以便持续处理

<img src="https://unitmesh.cc/auto-dev/custom-agent-text-chunk.png" alt="自定义AI智能体文本分块" width="600px"/>

### WebView

> 在WebView中显示结果进行前端渲染

<img src="https://unitmesh.cc/auto-dev/custom-agent-webview.png" alt="自定义AI智能体WebView" width="600px"/>

### DevIns

AutoDev@1.8.2

> DevIns响应动作将处理DevIns语言的响应

参考以下示例：

    /write:HelloWorld.java#L1-L12
    
    ```java
    public class HelloWorld {
        public static void main(String[] args) {
            System.out.println("Hello, World!");
        }
    }
    ```

DevIns响应内容与自定义智能体响应内容不同。在自定义智能体响应中，代码内容需包含在\`\`\`DevIns代码块内。
