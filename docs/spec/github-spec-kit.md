---
layout: default
title: Github Spec Kit
nav_order: 2
parent: Spec Driven Development
permalink: /spec/github-spec-kit
---

## GitHub Spec-Kit 集成

### 什么是 Spec-Kit？

[GitHub Spec-Kit](https://github.com/github/spec-kit) 是一个开源工具包，支持**规范驱动开发** - 一种规范可执行、直接生成工作实现的方法论。

**核心理念：**
- 规范在代码之前定义"做什么"
- 使用护栏和组织原则创建丰富的规范
- 多步骤细化而非一次性代码生成
- 充分利用高级 AI 模型能力

### AutoDev 如何集成 Spec-Kit

AutoDev 自动从项目的 `.github/prompts/` 目录发现并加载 SpecKit 命令，使其可作为 DevIns 命令使用。

**发现过程：**

1. AutoDev 扫描 `.github/prompts/` 查找匹配 `speckit.*.prompt.md` 的文件
2. 每个文件成为一个命令：`/speckit.<子命令>`
3. 解析命令的 YAML 前置元数据和模板内容
4. 在 DevIns 编辑器中提供完整的智能提示支持

**文件结构：**

```
your-project/
└── .github/
    └── prompts/
        ├── speckit.constitution.prompt.md
        ├── speckit.specify.prompt.md
        ├── speckit.plan.prompt.md
        ├── speckit.tasks.prompt.md
        └── speckit.implement.prompt.md
```

### 可用的 SpecKit 命令

#### 核心工作流命令

1. **`/speckit.constitution`** - 建立项目原则
    - 创建或更新项目治理原则
    - 定义开发指南和标准
    - 设置质量、测试和性能要求

2. **`/speckit.specify`** - 定义需求
    - 创建功能规范
    - 定义用户故事和需求
    - 关注"做什么"和"为什么"，而非技术栈

3. **`/speckit.plan`** - 创建实施计划
    - 生成技术实施细节
    - 指定技术栈和架构
    - 创建详细的组件分解

4. **`/speckit.tasks`** - 生成任务分解
    - 创建可执行的任务列表
    - 按依赖关系排序任务
    - 标记并行执行机会

5. **`/speckit.implement`** - 执行实施
    - 按顺序执行所有任务
    - 如果指定则遵循 TDD 方法
    - 提供进度更新

#### 质量与验证命令

6. **`/speckit.clarify`** - 澄清需求
    - 结构化提问工作流
    - 基于覆盖率的澄清
    - 在规范中记录答案

7. **`/speckit.analyze`** - 分析一致性
    - 跨工件一致性检查
    - 覆盖率分析
    - 差距识别

8. **`/speckit.checklist`** - 生成质量检查清单
    - 创建验证检查清单
    - 确保完整性和清晰度
    - "英语的单元测试"

### 模板变量与前置元数据

SpecKit 命令支持 YAML 前置元数据以实现高级模板功能：

```markdown
---
variables:
  - name: project_name
    type: string
    description: 项目名称
  - name: tech_stack
    type: file
    path: .github/tech-stack.md
---

# ${project_name} 的实施计划

使用技术栈：
${tech_stack}

用户需求：
$ARGUMENTS
```

**支持的变量类型：**
- `string` - 简单字符串值
- `file` - 从文件路径加载内容
- `project` - 项目级元数据

**内置变量：**
- `$ARGUMENTS` - 用户提供的命令参数
- `${project.name}` - 当前项目名称
- `${project.basePath}` - 项目根目录

### 示例：完整的规范驱动工作流

```devin
# 步骤 1：建立原则
/speckit.constitution 创建关注以下方面的原则：
- 代码质量和可维护性
- 全面测试（单元、集成、端到端）
- 用户体验一致性
- 性能要求（< 100ms 响应时间）

# 步骤 2：定义要构建的内容
/speckit.specify 构建一个相册应用，具有以下功能：
- 按日期自动组织照片
- 支持拖放重新组织
- 以瓷砖式界面显示照片
- 相册之间永不嵌套
- 每个相册显示 5-15 张照片

# 步骤 3：澄清需求
/speckit.clarify

# 步骤 4：创建技术计划
/speckit.plan 使用：
- React 18 with TypeScript
- Vite 作为构建工具
- SQLite 用于本地元数据存储
- 最少的外部依赖

# 步骤 5：生成任务
/speckit.tasks

# 步骤 6：实施
/speckit.implement
```