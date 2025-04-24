# 自定义本地智能体

AutoDev 的本地智能体是基于 DevIns 语言与 [Shire](https://shire.phodal.com/) 所构建的，其核心包含三部：

- Hobbit Hole：类似于 Front Matter，用于定义数据结构。
    - Pattern-Action：用于定义数据处理逻辑。
    - Condition Visible：用于定义可见性条件。
    - Output：用于定义输出。
    - Variable：用于定义过程变量。
- Template：用于定义 LLM 模板，基于 Velocity 模板引擎。
- Life Cycle：用于定义生命周期。
