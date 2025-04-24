---
layout: default
title: 自定义大模型服务器
parent: 功能定制
nav_order: 14
permalink: /custom/llm-server
---

# 自定义大模型服务器

## 自定义大模型服务器示例

### DeepSeek AI 示例

- 自定义响应类型：SSE
- 自定义引擎服务器：https://api.deepseek.com/v1/chat/completions
- 请求体格式：
```json
{ "customFields": {"model": "deepseek-chat", "stream": true} }
```
- 响应格式：
```
$.choices[0].delta.content 
```

### 零一万物 示例

- 自定义响应类型：SSE
- 自定义引擎服务器：https://api.lingyiwangwu.com/v1/chat/completions
- 请求体格式：
```json
{ "customFields": {"model": "yi-34b-chat", "stream": true} }
```
- 响应格式：
```
$.choices[0].delta.content 
```

### ChatGLM 示例

更多细节请参考：[#90](https://github.com/unit-mesh/auto-dev/issues/90)

- 自定义响应类型：SSE
- 自定义引擎服务器：https://open.bigmodel.cn/api/paas/v4/chat/completions
- 请求体格式：
```json
{ "customFields": {"model": "glm-4", "stream": true} }
```
- 响应格式：
```
$.choices[0].delta.content 
```

### Moonshot AI 示例

- 自定义响应类型：SSE
- 自定义引擎服务器：https://api.moonshot.cn/v1/chat/completions
- 请求体格式：
```json
{ "customFields": {"model": "moonshot-v1-8k", "stream": true } }
```
- 响应格式：
```
$.choices[0].delta.content
```

## 自定义响应格式

我们使用 [JsonPath](https://github.com/json-path/JsonPath) 来解析响应，
目前仅提取第一个选项的响应消息。
如果您的响应格式如下：

```json
{
  "id": "chatcmpl-123",
  "object": "chat.completion.chunk",
  "created": 1677652288,
  "model": "gpt-3.5-turbo",
  "choices": [{
    "index": 0,
    "delta": {
      "content": "Hello"
    },
    "finish_reason": "stop"
  }]
}
```
您需要将`响应格式`设置为：

```text
$.choices[0].message.delta.content
```

## 自定义请求格式

仅支持类似OpenAI的请求参数格式
仅支持无需加密密钥的HTTP请求（如WebSocket）

### 自定义请求（请求头/请求体/消息键）

**重要提示：在本项目中，messageKey与OpenAI不兼容：messageKeys: `{ { "content": "content" } }`是必需的** *我们可能会在未来修复这个问题*

如果您的LLM服务器需要自定义请求格式，可以：

- 通过`customFields`添加请求体顶层字段
- 通过`customHeaders`添加自定义请求头
- 通过`messageKeys`自定义消息键（可选）

例如：

```json
{ "customFields": {"user": "12345", "model":"model-name", "stream": true},  "messageKeys": { "content": "content" }}
```

或包含自定义请求头：

```json
{
  "customHeaders": { "CustomHeader": "my-value" },
  "customFields": {"user": "12345", "model": "gpt-4"},
  "messageKeys": {"role": "role", "content": "message"}
}
```

生成的请求头将会是（原始头信息已省略）：

```http-request
POST https://your.server.com/path

CustomHeader: my-value
...(其他请求头)
```

请求体将会是：

```json
{
  "user": "12345",
  "model": "gpt-4",
  "messages": [
    {
      "role": "user",
      "message": "..."
    }
  ]
}
```
