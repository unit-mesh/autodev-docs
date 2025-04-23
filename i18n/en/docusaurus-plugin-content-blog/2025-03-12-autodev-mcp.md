

---
layout: default
title: AutoDev MCP
---

In the realm of Agentic Coding, tool usage (Tool Use/Function calling) presents a fascinating topic. Completing a software development task requires utilizing numerous tools, extending beyond the native capabilities of IDEs and their plugin ecosystems to include various external tools like Git, Docker, Kubernetes, Jenkins, etc. How to enable AI to be aware of more tools and their usage presents an intriguing challenge.

Therefore, I spent a day implementing relevant functionalities in AutoDev: establishing AutoDev as an MCP service that can be invoked by any Agent Tool, while also enabling AutoDev to function as an MCP client capable of calling any MCP service.

## Prelude 1: From Progressive AI Agent Solutions to AutoDev as MCP Service

Within the broader context of AI Agents, such as automated Computer Use scenarios, IDEs themselves become just another invokable Agent tool. Current AI Agent implementations demonstrate a progressive approach to Agent Tool usage - as developers familiar with E2E testing know, UI automation proves highly inefficient. This explains why we wrote minimal UI automation tests when developing AutoDev.

While our current AI Coding implementation centers around IDEs, another scenario exists where Agent Tools take precedence:
- Agents obtain requirements through browser manipulation
- Agents launch IDEs to write code
- Agents operate DevOps tools for deployment
- ...

Given that Agent Tool invocation appears to be an emerging trend towards 2025, why not position AutoDev as an MCP service? This would allow any Agent Tool (including Cursor, Cline, GitHub Copilot, etc.) to leverage AutoDev's services and access high-quality IDE context.

## Prelude 2: From MCP as Agent Tool Ecosystem to MCP Services as AutoDev Commands

Previously, AutoDev prioritized leveraging IDE ecosystems and its own plugin architecture to enhance AI-supported end-to-end development workflows. However, even with enriched plugin capabilities, we still require numerous Agent Tools.

### Agent Tools Define Baseline Capabilities for AI IDEs

Our analysis of various AI Coding tools reveals that VSCode-based AI Editors demonstrate remarkably similar tooling capabilities, which can be comprehensively charted. In contrast, IDE-based AI Coding plugins (like AutoDev and JetBrains Junie) offer more sophisticated capabilities including AST manipulation, debugging, and FQN lookups - typically providing around 20 core IDE capabilities compared to VSCode's dozen.

As AI Coding expands into requirements management, deployment, and operations, the corresponding tool ecosystem will inevitably grow more diverse.

### MCP Open Source Ecosystem Emerges

The Model Context Protocol (MCP), introduced by Anthropic (creators of Claude), provides standardized interfaces for LLM applications to access external information, tools, and resources. While AutoDev offers powerful customization capabilities like Custom Agents:

- Some tools remain unpredictable (e.g., internal corporate tools)
- MCP's tool ecosystem is rapidly maturing into a standard (despite regional variations)

Since Cursor and Cline adopted MCP, numerous open-source MCP implementations have formed a thriving overseas ecosystem.

## AutoDev x MCP: Bidirectional Empowerment

Building upon MCP-related plugins and the io.modelcontextprotocol ecosystem, we developed a bidirectional empowerment framework:

- AutoDev functions as an MCP server accessible to any Agent Tool
- AutoDev operates as an MCP client invoking any MCP service

This dual approach consolidates our MCP capabilities.

### AutoDev as MCP Server

Based on JetBrains' MCP implementation, we enable AutoDev's MCP server capability (Note: Requires MCP activation in configuration). Simple JSON configuration suffices, as shown in this Cline plugin example:

```json
{
  "mcpServers": {
    "AutoDev": {
      "command": "npx",
      "args": [
        "-y",
        "@jetbrains/mcp-proxy"
      ],
      "disabled": false,
      "autoApprove": []
    }
  }
}
```

The current version leverages official capabilities with some database enhancements, pending domestic MCP service availability for further expansion.

### AutoDev as MCP Client

Similarly, configure MCP services in AutoDev's Custom Agent page. Official MCP example:

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Volumes/source/ai/auto-dev"
      ]
    }
  }
}
```

The MCP service's tools then become available in AutoDev. DevIns conversion example:

     /list_directory
     ```json
     {
      "path": "/Volumes/source/ai/autocrud/docs/mcp"
     }
     ```

Through AutoDev's powerful DevIns Commands, users can now invoke any MCP service - including AI Agents.

## Additional Notes

Life is short, I have AI.

- Detailed documentation: https://ide.unitmesh.cc/mcp
- Download latest AutoDev (v2.0.0-rc.2): https://github.com/unit-mesh/auto-dev/releases/tag/v2.0.0-rc.2