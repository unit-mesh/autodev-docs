---
layout: default
title: DevOps
parent: 基础功能
nav_order: 10
permalink: /features/devops
---

1. 点击菜单栏新建（或在左侧项目名称处右键）-> SRE Genius（DevOps）

<img src="https://unitmesh.cc/auto-dev/ci-cd.png" alt="AutoDevChat" width="600px"/>

## 生成GitHub Actions

该功能将生成构建系统信息和模板文件，并通过模板引擎渲染生成提示

实现代码：[GenerateGitHubActionsAction](https://github.com/unit-mesh/auto-dev/blob/master/src/main/kotlin/cc/unitmesh/genius/actions/GenerateGitHubActionsAction.kt)

```kotlin
val githubActions = BuildSystemProvider.guess(project);
val templateRender = TemplateRender("genius/cicd")
templateRender.context = DevOpsContext.from(githubActions)
val template = templateRender.getTemplate("generate-github-action.vm")
```

## 生成Dockerfile

该功能将生成构建系统信息和模板文件，并通过模板引擎渲染生成提示

实现代码：[GenerateDockerfileAction](https://github.com/unit-mesh/auto-dev/blob/master/src/main/kotlin/cc/unitmesh/genius/actions/GenerateDockerfileAction.kt)

```kotlin
val dockerContexts = BuildSystemProvider.guess(project)
val templateRender = TemplateRender("genius/sre")
templateRender.context = DevOpsContext.from(dockerContexts)
val template = templateRender.getTemplate("generate-dockerfile.vm")
```
