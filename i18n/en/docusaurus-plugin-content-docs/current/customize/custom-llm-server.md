---
layout: default
title: Custom LLM Server
parent: Customize Features
nav_order: 14
permalink: /custom/llm-server
---

# Custom LLM Server

## Custom LLM Server Example

### DeepSeek AI Examples

- Custom Response Type: SSE
- Custom Engine Server: https://api.deepseek.com/v1/chat/completions
- Request body format:
```json
{ "customFields": {"model": "deepseek-chat", "stream": true} }
```
- Response format: 
```
$.choices[0].delta.content 
```

### Lingyiwanwu Examples

- Custom Response Type: SSE
- Custom Engine Server: https://api.lingyiwangwu.com/v1/chat/completions
- Request body format:
```json
{ "customFields": {"model": "yi-34b-chat", "stream": true} }
```
- Response format: 
```
$.choices[0].delta.content 
```

### ChatGLM Examples

More details see: [#90](https://github.com/unit-mesh/auto-dev/issues/90)

- Custom Response Type: SSE
- Custom Engine Server: https://open.bigmodel.cn/api/paas/v4/chat/completions
- Request body format:
```json
{ "customFields": {"model": "glm-4", "stream": true} }
```
- Response format: 
```
$.choices[0].delta.content 
```

### Moonshot AI Examples

- Custom Response Type: SSE
- Custom Engine Server: https://api.moonshot.cn/v1/chat/completions
- Request body format:
```json
{ "customFields": {"model": "moonshot-v1-8k", "stream": true } }
```
- Response format:
```
$.choices[0].delta.content
```

## Custom Response Format

We use [JsonPath](https://github.com/json-path/JsonPath) to parse responses.
Currently we only extract the first choice and the response message content.
If your response follows this format:

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
You should set the `response format` to:

```text
$.choices[0].message.delta.content
```

## Custom Request Format

Only supports request parameters similar to OpenAI's specification.
Only supports HTTP requests that don't require encryption keys (e.g., websocket is not supported).

### Custom Request (header/body/message-keys)

**IMPORTANT: In this project, messageKey is not fully compatible with OpenAI: The `messageKeys: { { "content": "content" } }` configuration is REQUIRED** *This might be improved in future versions.*

If your LLM server requires custom request formatting, you can:

- Add top-level fields to the request body via `customFields`
- Add custom headers via `customHeaders` 
- Customize message keys via `messageKeys` (optional)

Example:

```json
{ "customFields": {"user": "12345", "model":"model-name", "stream": true},  "messageKeys": { "content": "content" }}
```

Example with custom headers:

```json
{
  "customHeaders": { "CustomHeader": "my-value" },
  "customFields": {"user": "12345", "model": "gpt-4"},
  "messageKeys": {"role": "role", "content": "message"}
}
```

The request header will be (original headers omitted):

```http-request
POST https://your.server.com/path

CustomHeader: my-value
...(other headers)
```

The request body will be formatted as:

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
