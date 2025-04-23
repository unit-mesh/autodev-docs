

---
layout: default
title: 提示覆盖
parent: 功能定制
nav_order: 15
---

提示覆盖 ([#54](https://github.com/unit-mesh/auto-dev/issues/54)) 允许使用自定义提示词替换 AutoDev 的默认提示词。

## 使用方法

在项目根目录下创建名为 `prompt/` 的文件夹，然后根据支持的操作类型创建对应的提示词文件。

例如：创建文件 `prompts/sql/sql-gen-clarify.vm` 将会覆盖 AutoSQL/GenSQL 的澄清提示词

## 支持的操作类型

```bash
├── cicd
│   └── generate-github-action.vm
├── code
│   ├── api-test-gen.vm
│   ├── code-gen.vm
│   ├── bridge.vm
│   ├── sketch.vm
│   ├── plan.vm
│   ├── plan-reviewer.vm
│   ├── repair-diff.vm
│   └── test-gen.vm
├── error
│   └── fix-error.vm
├── harmonyos
│   ├── arkui-clarify.vm
│   └── arkui-design.vm
├── page
│   ├── page-gen-clarify.vm
│   └── page-gen-design.vm
├── practises
│   ├── code-review.vm
│   ├── gen-commit-msg.vm
│   ├── refactoring.vm
│   ├── release-note.vm
│   └── shell-suggest.vm
├── quick
│   └── quick-action.vm
├── sql
│   ├── sql-gen-clarify.vm
│   └── sql-gen-design.vm
└── sre
    └── generate-dockerfile.vm
```

系统内置的提示词文件位于 `src/main/resources/genius/` 目录，自定义时请保持变量名称与原始文件一致（可参考这些文件进行修改）。

完整目录结构参考：https://github.com/unit-mesh/auto-dev/tree/master/core/src/main/resources/genius