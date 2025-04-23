---
layout: default
title: Code Completion
nav_order: 2
permalink: /features/code-completion
---

## Chat-style Code Completion

Additional feature: Loading custom specifications

1. Right-click to open the context menu.
2. Copy or paste code in the chat page.

<img src="https://unitmesh.cc/auto-dev/chat-code-completion.png" alt="Chat-style Code Completion" width="600px"/>

## Inline Code Completion

1. Press `⌥` + `.` anywhere in the editor
2. Wait for your model response, then press `tab` to accept suggestions

## Custom Completion LLM

1. Open AutoDev configuration in `Settings` -> `Tools` -> `AutoDev`
2. Set up `Custom Model`

Example configuration for DeepSeek completion model:

```json
[
  {
    "name": "DS Completion",
    "url": "https://api.deepseek.com/beta/completions",
    "auth": {
      "type": "Bearer",
      "token": "sk-ii"
    },
    "requestFormat": "{ \"customFields\": {\"prompt\": \"$content\", \"model\": \"deepseek-chat\", \"max_tokens\": 128 }}",
    "responseFormat": "$.choices[0].delta.content",
    "modelType": "Completion"
  }
]
```
