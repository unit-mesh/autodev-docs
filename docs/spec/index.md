---
layout: default
title: Spec Driven Development
nav_order: 7
has_children: true
permalink: /spec-driven
---

在 issue [#452](https://github.com/unit-mesh/auto-dev/issues/452), AutoDev 现已集成两个强大的 AI 功能，实现结构化、可重复的开发工作流：

1. **GitHub Spec-Kit** - 规范驱动开发工具包，通过优先关注规范来帮助构建软件
2. **Anthropic Claude Skills** - 通过可发现、可重用的技能模块实现动态代理能力

这两个集成允许 AI 代理利用预定义的工作流、模板和最佳实践，提供一致的高质量结果。


### 快速开始：Spec-Kit

1. **在项目中初始化 SpecKit：**

```bash
# 使用 specify CLI（推荐）
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git
specify init my-project --ai copilot
```

2. **或手动创建命令文件：**

```bash
mkdir -p .github/prompts
# 添加你的 speckit.*.prompt.md 文件
```

3. **在 AutoDev 中使用：**

```devin
/speckit.constitution 创建项目原则
```

### 快速开始：Claude Skills

1. **创建技能目录：**

```bash
mkdir -p my-custom-skill
```

2. **创建 SKILL.md：**

```markdown
---
name: my-custom-skill
description: 做一些很棒的事情
---

# 我的自定义技能

## 指令
[你的指令在这里]
```

3. **在 AutoDev 中使用：**

```devin
/skill.my-custom-skill 做一些很棒的事情
```


## 资源

- **GitHub Spec-Kit**：https://github.com/github/spec-kit
- **Anthropic Claude Skills**：https://github.com/anthropics/skills
- **规范驱动开发指南**：https://github.com/github/spec-kit/blob/main/spec-driven.md
