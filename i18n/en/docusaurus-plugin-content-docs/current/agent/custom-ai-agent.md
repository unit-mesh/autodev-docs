---
layout: default
title: Custom AI Agent Quickstart
parent: Agent
nav_order: 3
---

AutoDev@1.7.0

Since AutoDev@1.7.0 version, we support custom AI agent, you can integrate your own AI agent into AutoDev.

<img src="https://unitmesh.cc/auto-dev/custom-agent-popup.png" alt="Custom AI Agent Dropdown" width="600px"/>

## Custom AI Agent

1. open AutoDev Config in `Settings` -> `Tools` -> `AutoDev`, select `Custom Agent`.
2. click `Enable Custom Agent`
3. fill JSON format config in `Custom Agent Config` textarea.
4. Apply and OK.
5. Click `x` and Close AutoDev panel and click `NewChat` in the AutoDev tool window.

### Custom Agent Examples

Demo:

```json
[
  {
    "name": "Internal API Integration",
    "description": "Communication interfaces between different systems or components in an organization or project.",
    "url": "http://127.0.0.1:8765/api/agent/api-market",
    "responseAction": "Direct"
  },
  {
    "name": "Component Library Query",
    "description": "Retrieve specific UI components from the component library for use in the application being developed.",
    "url": "http://127.0.0.1:8765/api/agent/component-list",
    "responseAction": "TextChunk"
  },
  {
    "name": "Page Generation",
    "description": "Generate pages based on components and state using the React framework.",
    "url": "http://127.0.0.1:8765/api/agent/ux",
    "auth": {
      "type": "Bearer",
      "token": "eyJhbGci"
    },
    "responseAction": "WebView"
  },
  {
    "name": "DevInInsert",
    "description": "Update, and specify a 20 second timeout",
    "url": "http://127.0.0.1:8765/api/agent/devins-sample",
    "responseAction": "DevIns",
    "defaultTimeout": 20
  }
]
```

#### Dif Example

```json
{
    "name": "DifyAI",
    "description": "Dify Example",
    "url": "https://api.dify.ai/v1/completion-messages",
    "auth": {
      "type": "Bearer",
      "token": "app-abcd"
    },
    "connector": {
      "requestFormat": "{\"fields\": {\"inputs\": {\"feature\": \"$content\"}, \"response_mode\": \"streaming\", \"user\": \"phodal\" }}",
      "responseFormat": "$.answer"
    },
    "responseAction": "Stream"
}
```

#### Coze Example


```json
[
  {
    "name": "CozeAI",
    "description": "Coze Example",
    "url": "https://api.coze.cn/v3/chat",
    "auth": {
      "type": "Bearer",
      "token": "xxx"
    },
    "connector": {
      "requestFormat": "{\"fields\":{\"stream\": true, \"user_id\": \"user\",\"bot_id\": \"749xxx\",\"additional_messages\": [{\"role\": \"user\", \"content_type\":\"text\", \"content\": \"$content\" }]}}",
      "responseFormat": "$[?(@.type == 'answer' && !(@.created_at))].content"
    },
    "responseAction": "Stream"
  }
]
```

### responseAction

```kotlin
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
```

### interactive

```kotlin
enum class InteractionType {
    ChatPanel,
    AppendCursor,
    AppendCursorStream,
    OutputFile,
    ReplaceSelection,
    ReplaceCurrentFile,
    ;
}
```
