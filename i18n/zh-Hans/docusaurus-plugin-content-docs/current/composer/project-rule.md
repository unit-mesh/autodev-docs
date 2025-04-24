---
layout: default
title: Project Rule
nav_order: 3
---

# 项目规则

注：我们推荐优先使用[提示词覆盖](https://ide.unitmesh.cc/customize/prompt-override.html)来定制提示词，但若需要项目级规则，可以通过以下方式自定义提示词。

自@2.0.2版本起，AutoDev开始支持项目规则。项目规则是一组用于验证项目结构和配置的规则集合，相关规则文件存放在`prompts/rules`目录下。

## 项目规则示例

项目规则以Markdown文件形式存在，包含以下字段：

示例项目规则文件结构如下：

```bash
prompts/rules/
├── service.md
├── controller.md
├── repository.md
├── rpc.md
└── README.md  # 该文件会被默认始终加载！！
```

AutoDev将通过RuleInsCommand自动处理项目规则，您可以使用以下命令查看项目规则：

```devin
/rule:service
```
