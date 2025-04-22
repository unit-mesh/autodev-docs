# Batch AI Action

We use Team Prompts to provide a way to batch process files in the project. The default 
Team Prompts path is `prompts/`, which is the `prompts/` directory located in the project's root directory.

Through the `batchFileRegex` configuration, you can specify the file to be processed in batch.

**Scenes**: When you need to batch process files in the project, such as refactoring, formatting, etc.

- Vue2 to Vue3 migration
- Refactor the user's code
- Comments for all code

**Entry point**: `Right-click` on the project -> `AutoDev AI AutoAction` -> `Batch AI Action`

## Batch AI Action (Chinese Example Translated)

Key points：`batchFileRegex` is used to match batch files, `codeOnly: true` only puts the pure code part into the file，`interaction: ReplaceCurrentFile`
 is used to replace the current filee.

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

## Batch AI Action (English Example)

Key points: `batchFileRegex` is used to match batch files, `codeOnly: true` only puts the pure code part into the file,
`interaction: ReplaceCurrentFile` is used to replace the current file.

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

