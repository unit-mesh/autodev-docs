---
layout: default
title: Bridge Tools
parent: AutoDev Bridge
nav_order: 1
permalink: /bridge/bridge-tool
---

## AutoDev Bridge Tools

| Tool Name (name) | Description (desc)                                                                 | Example (example)                                                                                                                                                                |
|------------------|-----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| componentView    | List all UI components of the current project, such as React and Vue components   | `<devin>`<br/>List all UI Component List of current project, like React Vue components<br/>`/componentView`<br/>`</devin>`                                                         |
| containerView    | List all modules of the current project                                           | `<devin>`<br/>List all modules of current project<br/>`/containerView`<br/>`</devin>`                                                                                              |
| scc              | Scc is a very fast and accurate code counter with complexity calculations and COCOMO estimation | `<devin>`<br/>Scc is a very fast accurate code counter with complexity calculations and COCOMO estimates<br/>`/scc`<br/>`</devin>`                                                 |
| history          | Get historical commit information for the current file                            | `<devin>`<br/>Get history commit message of current file<br/>`/history:package.json`<br/>`</devin>`                                                                                |
| knowledge        | Analyze through API call chains, default depth = 2 (fixed), i.e., Controller to Repository call chain | `<devin>`<br/>Analyze through API call chains, default depth = 2 (fixed), i.e., Controller to Repository call chain<br/>`/knowledge:GET#/api/blog/*` [Note: * represents blog slug, equivalent to SpringMVC's @PathVariable]<br/>`</devin>` |
| database         | Database schema and query tools                                                   | `<devin>`<br/>List database schema<br/>`/database:schema`<br/>List all tables in the database<br/>`/database:table`<br/>`</devin>`                                                                                  |
| stylingView      | List all CSS/SCSS classes of the current project                                  | `<devin>`<br/>List all CSS, SCSS classes of current project<br/>`/stylingView`<br/>`</devin>`                                                                                      |
| dependencies     | Get all dependencies of the current project (Gradle, Maven, package.json)         | `<devin>`<br/>Get all dependencies (Gradle, Maven, package.json) of current project<br/>`/dependencies`<br/>`</devin>`                                                             |
| webApiView       | List all Web APIs of the current project                                          | `<devin>`<br/>List all web apis of current project<br/>`/webApiView`<br/>If return no endpoints, we need to check Endpoint plugin installed.<br/>`</devin>`                         |
