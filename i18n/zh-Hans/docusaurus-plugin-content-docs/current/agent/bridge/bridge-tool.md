---
layout: default
title: Bridge工具
parent: AutoDev Bridge模块
nav_order: 1
permalink: /bridge/bridge-tool
---

## AutoDev Bridge工具

| 工具名称 (name)   | 描述 (desc)                                                       | 示例 (example)                                                                                                                                                                    |
|---------------|-----------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| componentView | 列出当前项目的所有UI组件列表（如React、Vue组件）                                   | `<devin>`<br/>列出当前项目的所有UI组件列表，例如React、Vue组件<br/>`/componentView`<br/>`</devin>`                                                                                         |
| containerView | 列出当前项目的所有模块                                                     | `<devin>`<br/>列出当前项目的所有模块<br/>`/containerView`<br/>`</devin>`                                                                                                              |
| scc           | Scc 是一个快速精准的代码计数器，支持复杂度计算和COCOMO估算功能                           | `<devin>`<br/>Scc 是具备复杂度计算和COCOMO估算功能的快速精准代码计数器<br/>`/scc`<br/>`</devin>`                                                                                             |
| history       | 获取当前文件的历史提交信息                                                   | `<devin>`<br/>获取当前文件的历史提交信息<br/>`/history:package.json`<br/>`</devin>`                                                                                                  |
| knowledge     | 基于API调用链进行分析，默认深度depth=2（不可修改），即Controller到Repository的调用链路      | `<devin>`<br/>从API调用链进行分析，默认深度depth=2（不可修改），即Controller到Repository的调用链<br/>`/knowledge:GET#/api/blog/*` [注：此处*代表博客slug，等同于SpringMVC的@PathVariable]<br/>`</devin>` |
| database      | 数据库模式与查询工具                                                      | `<devin>`<br/>列出数据库数据结构<br/>`/database:schema`<br/>列出数据库所有表<br/>`/database:table`<br/>`</devin>`                                                                               |
| stylingView   | 列出当前项目的所有CSS、SCSS类                                              | `<devin>`<br/>列出当前项目的所有CSS、SCSS类<br/>`/stylingView`<br/>`</devin>`                                                                                                        |
| dependencies  | 获取当前项目的所有依赖项（支持Gradle、Maven、package.json）                       | `<devin>`<br/>获取当前项目的所有依赖项（Gradle、Maven、package.json）<br/>`/dependencies`<br/>`</devin>`                                                                                 |
| webApiView    | 列出当前项目的所有Web API                                                | `<devin>`<br/>列出当前项目的所有Web API<br/>`/webApiView`<br/>若返回无端点信息，需检查Endpoint插件是否安装<br/>`</devin>`                                                                     |

（注：表格中技术术语遵循以下翻译规范：
- Controller → 控制器
- Repository → 存储库
- COCOMO → COCOMO（保留原始名称）
- Slug → slug（保留原始术语）
- @PathVariable → @PathVariable（保留原始注解））
