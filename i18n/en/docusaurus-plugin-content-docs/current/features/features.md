

---
layout: default
title: Features
nav_order: 3
has_children: true
permalink: /features
---

<p align="center">
  <img src="/img/autodev-overview.svg" width="100%" height="100%"  alt="Overview" />
</p>

## Features

- **Agent-Driven**
    - Sketch - Agent-driven coding workflow.
    - Bridge - Agent-driven refactoring for legacy code.
    - MCP
- **Auto-Dev Modes**
    - AutoSQL (requires database plugin). Context-aware SQL generation.
    - AutoPage (React). Context-aware web page generation.
    - AutoTest. Create unit test intentions, automatically run unit tests and attempt to fix test failures.
    - AutoDoc. Automatic documentation generation.
- **Copilot Mode**
    - AutoDev will help you find errors, explain code, track exceptions, generate commits, etc.
    - Contextual Patterns. Based on your code context (e.g., Controller, Service `import`), AutoDev will suggest optimal code.
    - Relevant Code. Based on recent file changes, AutoDev will compute similar code blocks to generate optimal code.
- **Chat with AI**. Chat with selected code while maintaining code context awareness.
- **Customization**.
    - Custom specification for prompts. E.g., Controller, Service, Repository, Model, etc.
    - Custom intent actions. You can add your own intent actions.
    - Custom LLM Server. Configure custom LLM servers in `Settings` -> `Tools` -> `AutoDev`.
    - Custom Living Documentation. Define your own living documentation like comments.
    - Team AI. Customize team prompts in codebase and distribute to your team.
    - Prompt Overrides. Override AutoDev's prompts within your codebase.
- **SDLC**
    - VCS. Generate/improve commit messages, release notes, etc.
    - Code Review. Generate code review content.
    - Smart Refactoring. AI-based renaming, code smell refactoring, refactoring suggestions, etc.
    - Dockerfile. Generate Dockerfile based on your project.
    - CI/CD Configuration. Generate CI/CD config files for build tools like `.github/workflows/build.yml`.
    - Terminal. In terminal tool window, generate shell/commands using custom inputs.
- **Custom AI Agents**
    - Local Agent: Executable AI agent language: DevIns.
    - Remote Agent: Custom AI agents. Integrate your own AI agents with AutoDev.