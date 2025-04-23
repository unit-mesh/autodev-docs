---
title: AutoDev Bridge
---

In 2023, given the limited capabilities of models at that time, we designed a series of legacy system features in AutoDev. By 2025, through successive iterations of the autonomous programming agent AutoDev Sketch, we began exploring how to apply AI agents to legacy systems, which led to the conception of AutoDev Bridge.

## Why Can Large Language Models Perform Better?

Previously, our company Thoughtworks had accumulated extensive experience in this domain, including migration strategy design and safety net construction. However, regardless of the migration pattern used (Strangler, Rehabilitator, etc.), human intervention was always ultimately required. By 2025, an increasing number of AI agents have demonstrated capabilities for automated migration, prompting us to refine our open-source solution.

Why can large language models perform better in legacy system migration?

- **Designing reasonable path planning**. Typically prioritizing cost considerations, LLMs serve as excellent knowledge bases for cost assessment.
- **Generating architectural blueprints**. By analyzing directory structures, dependency information, and APIs, AI can outline preliminary architectural blueprints for existing systems.
- **Extracting business knowledge from code**. Through AST analysis and other methods, AI can interpret business logic in existing code and rewrite based on it.
- **Cross-language translation**. Unlike regular code generation, LLMs can effectively translate code into target languages within seconds to minutes.
- **Enhanced migration safety nets**. Generating automated tests to validate migration correctness enables precise regression testing (Note: Frontend implementations still have limitations).
- ......

Therefore, we only need to focus on two key considerations:

- How can AI better understand legacy systems with tool assistance?
- How to reduce migration risks?

## How Does AutoDev Bridge Accelerate Legacy System Migration?

Based on our understanding of legacy system migration, we designed the initial implementation of AutoDev Bridge, which primarily includes:

- LLM-generated migration plans (Following the "Explore-Sense-Respond" framework)
- Current architecture analysis based on C4 model (Using AI tool invocations)
- Business logic analysis combining AST and call chains (AI code comprehension)
- Migration test case generation
- AI-assisted code translation
- ......

Through tight integration with IDEs, AutoDev Bridge can obtain highly accurate development context to further reduce AI hallucinations.

### Explore-Sense-Respond: LLM-Generated Migration Plans

Historically, we categorized legacy system migration as a complex problem in the Cynefin framework - where outcomes cannot be predicted and must be discovered through practice. Drawing from Cynefin philosophy, we designed AutoDev Bridge's cognitive framework: Explore first, then Sense, then Respond. Since we expect models to have a blueprint (C4 model) before taking action, we divide the process into three phases:

- **Explore**: Obtain basic system information through initial tool invocations (directory structures, dependencies, etc.)
- **Sense**: Generate preliminary architectural blueprints and migration plans based on exploration results
- **Respond**: Validate migration plans, generate migration test cases, and produce migration code

Adapted for domestic model capabilities, this process would utilize V3 for exploration, R1 for plan design, and V3 for response.

### Architecture View-Oriented Tool Design

To help AI better understand system architectures, we designed a series of architecture view-oriented tools.

| Tool Name (name)   | Description (desc)                                                                 |
|--------------------|-----------------------------------------------------------------------------------|
| componentView      | List all UI components in the current project (React, Vue components, etc.)       |
| containerView      | List all modules in the current project                                           |
| webApiView         | List all Web APIs in the current project                                          |
| stylingView        | List all CSS/SCSS classes in the current project                                  |
| dir                | Get directory structure of current hierarchy                                      |
| history            | Retrieve historical commit information of current file                            |
| knowledge          | Analyze API call chains with default depth=2 (unmodifiable), i.e., Controller-to-Repository call chains |

Note: Current implementations show DeepSeek still struggles to fully comprehend C4 models, requiring further optimization.

### Business Knowledge Extraction and Comprehension

For business logic analysis, we primarily rely on API AST and call chain analysis. First obtain all APIs through `webApiView`, then retrieve API call chains via `knowledge`. Example:

```devin
/knowledge:GET#/api/blog/*
```

With Controller-to-Repository call chains, AI can effectively understand the business logic behind APIs.

Of course, this is a simplified example. In practice, AI needs to combine search tools to acquire additional context.

## Conclusion

As our research progresses, we will continue refining this solution to achieve better automated migration capabilities.

Follow our progress on GitHub: https://github.com/unit-mesh/auto-dev
