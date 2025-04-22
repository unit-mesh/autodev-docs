---
layout: default
title: Bridge Tools
parent: AutoDev Bridge
nav_order: 1
permalink: /bridge/bridge-tool
---

## AutoDev Bridge Tools 

| Tool name   | Description                                                       | Example                                                                                                                                                                    |
|---------------|-----------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| componentView | List all UI components of the current project, such as React and Vue components | `<devin>`<br/>List all UI Component List of current project, like React Vue components<br/>`/componentView`<br/>`</devin>`                                                         |
| containerView | List all modules of the current project                          | `<devin>`<br/>List all modules of current project<br/>`/containerView`<br/>`</devin>`                                                                                              |
| scc           | Scc is a very fast and accurate code counter with complexity calculations and COCOMO estimates | `<devin>`<br/>Scc is a very fast accurate code counter with complexity calculations and COCOMO estimates<br/>`/scc`<br/>`</devin>`                                                 |
| history       | Get the history commit information of the current file           | `<devin>`<br/>Get history commit message of current file<br/>`/history:package.json`<br/>`</devin>`                                                                                |
| knowledge     | Analyze from API call chain, default depth = 2 (cannot be modified), i.e., the call chain from Controller to Repository | `<devin>`<br/>Analyze from API call chain, default depth = 2 (cannot be modified), i.e., the call chain from Controller to Repository<br/>`/knowledge:GET#/api/blog/*` [Note: here * represents blog slug, equivalent to SpringMVC's @PathVariable]<br/>`</devin>` |
| database      | Database schema and query tool                                  | `<devin>`<br/>List the database structure<br/>`/database:schema`<br/>List all tables in the database<br/>`/database:table`<br/>`</devin>`                                                                                  |
| stylingView   | List all CSS and SCSS classes of the current project            | `<devin>`<br/>List all CSS, SCSS classes of current project<br/>`/stylingView`<br/>`</devin>`                                                                                      |
| dependencies  | Get all dependencies of the current project (Gradle, Maven, package.json) | `<devin>`<br/>Get all dependencies (Gradle, Maven, package.json) of current project<br/>`/dependencies`<br/>`</devin>`                                                             |
| webApiView    | List all Web APIs of the current project                        | `<devin>`<br/>List all web apis of current project<br/>`/webApiView`<br/>If return no endpoints, we need to check Endpoint plugin installed.<br/>`</devin>`                         |
