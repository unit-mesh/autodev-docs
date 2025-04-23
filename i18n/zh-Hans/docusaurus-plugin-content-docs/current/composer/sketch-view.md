

---
layout: default
title: Composer Sketch View
parent: AutoDev Sketch/Composer
nav_order: 2
---

# AutoDev Composer - 草图视图

**AutoDev 草图**是 Shire 提供的 IDE 画布功能，旨在简化交互并提升开发者在 IDE 中的体验。该功能通过提供对源代码、补丁、UML 图和架构图等富文本内容的高级处理与渲染来实现这一目标。无论是单文件渲染操作还是多文件协作修复，草图功能都能提供强有力的支持。

### 代码草图

默认代码草图视图提供实时语法高亮的代码编辑器。

### **差异草图**

差异补丁草图提供差异内容处理功能。

![](https://shire.run/images/shire-sketch-diff.png)

您可以查看源文件、检查差异或直接应用更改，也可使用 AI 模型进行修复。

### **终端草图**

终端草图视图提供可编辑且可弹出的终端界面。

![](https://shire.run/images/shire-sketch-terminal.png)

支持终端交互操作，并支持弹出独立终端窗口。

### **Mermaid 草图**

Mermaid 草图提供流程图的实时预览与编辑能力，支持双向绑定，使图表创建简单直观。

- 所需插件地址: https://plugins.jetbrains.com/plugin/20146-mermaid
- 所需插件ID: com.intellij.mermaid

![](https://shire.run/images/shire-sketch-mermaid.png)

### **PlantUML 草图**

PlantUML 草图为 UML 图提供强大支持，通过双向绑定的代码编辑器实现各类 UML 图的便捷创建与修改。

- 所需插件地址: https://plugins.jetbrains.com/plugin/7017-plantuml-integration
- 所需插件ID: PlantUML integration

![](https://shire.run/images/shire-sketch-plantuml.png)

### **依赖项草图`*`**

内置安全漏洞依赖检查器        

- 所需插件地址: https://plugins.jetbrains.com/plugin/18337-package-checker
- 所需插件ID: org.jetbrains.security.package-checker

![](https://unitmesh.cc/auto-dev/sketch-security-dependency.png)

### **OpenAPI 草图`*`**

OpenAPI 草图提供双向代码-OpenAPI 同步编辑器，支持 OpenAPI 规范编辑

![](https://unitmesh.cc/auto-dev/sketch-openapi.png)

### **思维过程草图**

展示 AutoDev Planner 解决代码问题的规划路径                                                

![](https://unitmesh.cc/auto-dev/autodev-plan-sketch.png)

### **Markdown 预览草图**

Markdown 预览草图提供实时预览与编辑功能，仅用于渲染展示。