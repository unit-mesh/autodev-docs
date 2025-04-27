

# 批量 AI 操作

我们使用团队提示词（Team Prompts）来提供项目中批量处理文件的方法。默认的团队提示词路径是 `prompts/`，即位于项目根目录下的 `prompts/` 目录。

通过 `batchFileRegex` 配置，您可以指定需要批量处理的文件。

**适用场景**：当您需要批量处理项目中的文件时，例如重构、格式化等操作
- Vue2 到 Vue3 的迁移
- 重构用户的代码
- 为所有代码添加注释

**入口**：在项目上 `右键点击` -> `AutoDev AI 自动操作` -> `批量 AI 操作`

## 批量 AI 操作（中文示例）

核心配置：`batchFileRegex` 用于匹配批量文件，`codeOnly: true` 表示仅保留纯代码部分，`interaction: ReplaceCurrentFile` 用于替换当前文件

```markdown
---
interaction: ReplaceCurrentFile
batchFileRegex: "**/*.ts"
codeOnly: true
---

重构用户的代码。要求：

- 请在一个代码块返回重构完的所有代码，方便直接复制粘贴。
- 请不要添加额外的代码，只修改用户的代码。

${all}
```

## 批量 AI 操作（英文示例）

关键配置：`batchFileRegex` 用于匹配批量文件，`codeOnly: true` 表示仅保留纯代码部分，`interaction: ReplaceCurrentFile` 用于替换当前文件

```markdown
---
interaction: ReplaceCurrentFile
batchFileRegex: "**/*.ts"
codeOnly: true
---

Refactor the user's code. Requirements:

- Please return all the refactored code in one code block, so that it can be copied and pasted directly.
- Please do not add extra code, only modify the user's code.

${all}
```
