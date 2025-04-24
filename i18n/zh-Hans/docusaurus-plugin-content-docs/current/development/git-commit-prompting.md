---
layout: default
title: Git 提交规范
nav_order: 10
parent: 开发指南

---

Git 提交提示示例

    为给定的代码差异编写连贯且描述性的提交信息。
    确保同时包含"修改内容"和"修改原因"的信息。
    以不超过50个字符的简短祈使句开头。
    空一行后（如有必要）继续添加更详细的说明。
    详细说明应少于200个字符。
    
    示例：
    - fix(认证): 添加密码正则表达式模式
    - feat(存储): 新增测试用例
    - test(Java): 修复用户控制器的测试用例
    
    代码差异：
    
    ```diff
    modify file src/main/kotlin/cc/unitmesh/devti/prompting/VcsPrompting.kt
         private val defaultIgnoreFilePatterns: List<PathMatcher> = listOf(
             "**/*.md", "**/*.json", "**/*.jsonl", "**/*.txt", "**/*.xml", "**/*.yml", "**/*.yaml", "**/*.html",
             "**/*.log", "**/*.tmp", "**/*.temp", "**/*.bak", "**/*.swp",
    -         "**/*.svg",
    +        "**/*.svg",
         ).map {
             FileSystems.getDefault().getPathMatcher("glob:$it")
         }
             project: Project,
             ignoreFilePatterns: List<PathMatcher> = defaultIgnoreFilePatterns,
         ): String? {
    +        val changeText = project.service<DiffSimplifier>().simplify(selectList, ignoreFilePatterns)
    +
    +        if (changeText.isEmpty()) {
    +            return null
    +        }
    +
    +        val processedText = DiffSimplifier.postProcess(changeText)
             val writer = StringWriter()
             if (details.isNotEmpty()) {
                 details.forEach { writer.write(it.fullMessage + "\n\n") }
             }
    -        writer.write("Changes:\n\n")
    -        val changeText = project.service<DiffSimplifier>().simplify(selectList, ignoreFilePatterns)
    -
    -        if (changeText.isEmpty()) {
    -            return null
    -        }
    +        writer.write(
    +            """
    +            Changes:
    +            
    +            ```patch
    +            $processedText
    +            ```
    +            """.trimIndent()
    +        )
    -
    -
    -        writer.write("```patch\n\n")
    -        writer.write(DiffSimplifier.postProcess(changeText))
    -        writer.write("\n\n```\n\n")
    -
             return writer.toString()
         }
         fun hasChanges(): List<Change> {
    -        val changeListManager = ChangeListManagerImpl.getInstance(project)
    -        val changes = changeListManager.changeLists.flatMap {
    -            it.changes
    -        }
    -
    -        return changes
    +        val changeListManager = ChangeListManager.getInstance(project)
    +        return changeListManager.changeLists.flatMap { it.changes }
         }
     }
    ```
