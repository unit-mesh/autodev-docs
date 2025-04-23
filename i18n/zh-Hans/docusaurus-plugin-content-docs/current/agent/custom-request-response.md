

---
layout: default
title: 自定义请求/响应
parent: Agent
nav_order: 5
---

# 自定义请求/响应

自定义请求/响应功能类似于[自定义LLM服务器](/custom/llm-server)，通过在`connector`字段下定义请求和响应格式来实现。

```json
{
  "name": "内部 API 集成",
  "url": "http://127.0.0.1:8765/api/agent/api-market",
  "auth": {
    "type": "Bearer",
    "token": "eyJhbGci"
  },
  "connector": {
    "requestFormat": "{\"customFields\": {\"model\": \"yi-34b-chat\", \"stream\": true}}",
    "responseFormat": "$.choices[0].delta.content"
  },
  "responseAction": "Direct",
  "interactive": "ChatPanel"
}
```

## 高级示例

我们使用[JsonPath](https://github.com/json-path/JsonPath)来解析响应。如果需要从Coze API获取流式内容，可以使用`$[?(@.type == 'answer' && !(@.created_at))].content`进行内容过滤。

以下是请求和响应格式的示例：

```bash
event:conversation.message.delta
data:{"id":"7490890868547862564","conversation_id":"7490890868547682340","bot_id":"7490858512726458380","role":"assistant","type":"answer","content":"All","content_type":"text","chat_id":"7490890868547698724","section_id":"7490890868547682340"}

event:conversation.message.delta
data:{"id":"7490890868547862564","conversation_id":"7490890868547682340","bot_id":"7490858512726458380","role":"assistant","type":"answer","content":"Files","content_type":"text","chat_id":"7490890868547698724","section_id":"7490890868547682340"}

event:conversation.message.completed
data:{"id":"7490890868547862564","conversation_id":"7490890868547682340","bot_id":"7490858512726458380","role":"assistant","type":"answer","content":"listAllFiles","content_type":"text","chat_id":"7490890868547698724","section_id":"7490890868547682340","created_at":1744108946}

event:conversation.message.completed
data:{"id":"7490890877657923603","conversation_id":"7490890868547682340","bot_id":"7490858512726458380","role":"assistant","type":"verbose","content":"{\"msg_type\":\"generate_answer_finish\",\"data\":\"{\\\"finish_reason\\\":0,\\\"FinData\\\":\\\"\\\"}\",\"from_module\":null,\"from_unit\":null}","content_type":"text","chat_id":"7490890868547698724","section_id":"7490890868547682340","created_at":1744108948,"updated_at":1744108948}
```

解释说明：

1. `answer`类型表示需要获取的有效响应内容
2. `created_at`字段标记响应完成时间，在流式传输中需要过滤该字段
3. 使用`!(@.created_at)`条件表达式可以排除已完成的消息片段

（注：根据要求保留了所有技术术语的准确性，如JsonPath、Bearer认证等专业术语均采用业内通用译法，代码块和URL保持原样未作修改，同时确保了中文表达的流畅性。）