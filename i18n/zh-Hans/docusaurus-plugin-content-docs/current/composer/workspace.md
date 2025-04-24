---
layout: default
title: Sketch 工作区
nav_order: 3
permalink: /workspace
---

# Sketch 工作区

## 工作区词典

工作区词典是领域特定术语和短语的集合，用于增强AI模型对特定使用场景上下文的理解能力。

![](https://unitmesh.cc/auto-dev/workspace-enhance.png)

我们使用 `prompts/domain.csv` 文件来定义工作区词典。

### 生成工作区词典

我们创建了名为 `DomainDictGenerateAction` 的AnAction来生成工作区词典，该操作设置在 `ProjectViewToolbar` 工具栏中。

点击该按钮后，将在项目根目录下生成 `prompts/domain.csv` 文件。

### 在AutoDev输入中使用

当使用AutoDev输入时，可以点击 `Enhance` 按钮来应用工作区词典，该功能会自动将领域词汇添加到输入内容中。

## 工作区文件

工作区文件是指在AutoDev输入环节发送给AI模型的相关文件。使用AutoDev输入时，可以点击 `Files` 按钮选择需要发送给AI模型的文件。

![](https://unitmesh.cc/auto-dev/workspace-files.png)

## 工作区规则

参见[项目规则](/composer/project-rule)

![](https://unitmesh.cc/auto-dev/workspace-rule.png)

## Planner工作区

该工作区用于管理AI修改的文件、新增文件、删除文件等变更操作。

![](https://unitmesh.cc/auto-dev/workspace-changes.png)
