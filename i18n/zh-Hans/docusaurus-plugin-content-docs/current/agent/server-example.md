---
layout: default
title: AI 智能体服务端
parent: 智能体
nav_order: 6
---

AI 智能体服务端用于与 AI 智能体进行通信，负责向智能体发送请求并接收其响应。

## 服务端

### 服务端 API 示例

参见 [example/custom_agent](https://github.com/unit-mesh/auto-dev/tree/master/example/custom_agent)

### `ResponseAction` 响应动作

- ResponseAction.Direct 应返回 "SSE\<String>" 格式
- ResponseAction.TextChunk 应返回 "JSON" 格式
- ResponseAction.WebView 应返回 "HTML" 代码

## 请求体

与聊天 API 格式一致

```json
{
  "messages": [
    {
      "role": "user",
      "content": "你好，我想预订从杭州到上海的航班。"
    }
  ]
}
```
