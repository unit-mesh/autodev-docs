---
layout: default
title: 自定义扩展上下文智能体
parent: 功能定制
nav_order: 16
permalink: /custom/extension-context-agent
---

# 自定义扩展上下文智能体

针对 [#195](https://github.com/unit-mesh/auto-dev/issues/195) 需求，我们引入了扩展上下文智能体的概念。该功能允许您自定义扩展的上下文环境。

## @autodev.ext-context.test

使用示例：

```json
{
    "name": "@autodev.ext-context.test",
    "description": "AutoTest",
    "url": "http://127.0.0.1:8765/api/agent/auto-test",
    "responseAction": "Direct"
}
```

（注：根据规则要求，代码块内容、链接URL等未做任何修改，仅翻译了外围说明文本。专业术语如"extension context agent"译为"扩展上下文智能体"，"responseAction"保持原样未翻译。）
