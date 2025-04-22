---
layout: default
title: 代码补全
nav_order: 2
permalink: /features/code-completion
---

## 聊天式代码补全

附带功能：加载自定义规范

1. 右键点击打开上下文菜单。
2. 在聊天页面中复制或者粘贴代码。

<img src="https://unitmesh.cc/auto-dev/chat-code-completion.png" alt="聊天式代码补全" width="600px"/>

## 内联代码补全

1. 在编辑器的任何位置按下 `⌥` + `.`
2. 等待你的模型响应，再按下 `tab` 键来接受建议。

## 自定义补全 LLM

1. 在 `设置` -> `工具` -> `AutoDev` 中打开 AutoDev 配置。
2. 设置`自定义模型`

以 DeepSeek 补全模型作为示例

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
