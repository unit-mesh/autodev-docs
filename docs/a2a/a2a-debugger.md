---
layout: default
title: A2A Debugger
nav_order: 2
parent: MCP
permalink: /a2a/a2a-debugger
---

## AutoDev A2A debugger

create a file end with `.mcp.json` in your project root directory, and add the following content:

```json
{
  "a2aServers": {
    "remote-example": {
      "url": "http://localhost:9999"
    }
  }
}
```

Then, click show preview in File toolbar, you can see:

- A2A Server/Tool LIST
- A2A Model Configured
- A2A Chat input box
