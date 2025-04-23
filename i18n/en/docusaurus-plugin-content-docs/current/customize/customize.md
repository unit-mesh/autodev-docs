

---
layout: default
title: Customize Features
nav_order: 4
has_children: true
permalink: /customize
---

## Custom Models

Documentation: [Custom Models](/customize/custom-llm-server)

The following example shows how to configure different model types in AutoDev for various scenarios:

```json
[
  {
    "name": "GLM4-Plus",
    "url": "https://open.bigmodel.cn/api/paas/v4/chat/completions",
    "auth": {
      "type": "Bearer",
      "token": "sk-ii"
    },
    "requestFormat": "{ \"customFields\": {\"model\": \"glm-4-plus\", \"stream\": true}}",
    "responseFormat": "$.choices[0].delta.content",
    "modelType": "Others"
  },
  {
    "name": "DeepSeek R1",
    "url": "https://api.deepseek.com/chat/completions",
    "auth": {
      "type": "Bearer",
      "token": "sk-ii"
    },
    "requestFormat": "{ \"customFields\": {\"model\": \"deepseek-reasoner\", \"stream\": true}}",
    "responseFormat": "$.choices[0].delta.content",
    "modelType": "Plan"
  },
  {
    "name": "DS Completion",
    "url": "https://api.deepseek.com/beta/completions",
    "auth": {
      "type": "Bearer",
      "token": "sk-ii"
    },
    "requestFormat": "{ \"customFields\": {\"prompt\": \"$content\", \"model\": \"deepseek-chat\", \"max_tokens\": 128 }}",
    "responseFormat": "$.choices[0].delta.content",
    "modelType": "Completion"
  }
]
```

## Custom Prompt Actions

Documentation: [Custom Prompt Actions](/customize/custom-action)

1. Go to `Settings` -> `Tools` -> `AutoDev` -> `Agentic Customize`, then configure the following JSON for custom prompt actions.
2. Invoke via right-click context menu.

```json
{
  "prompts": [
    {
      "title": " Code complete",
      "autoInvoke": true,
      "matchRegex": ".*",
      "priority": 1,
      "template": "Code complete:\n${METHOD_INPUT_OUTPUT}\n${SPEC_controller}\n\n${SELECTION}"
    },
    {
      "title": " Translate to Kotlin",
      "autoInvoke": false,
      "matchRegex": ".*",
      "priority": 0,
      "template": "Translate the following code to Kotlin.\n${SIMILAR_CHUNK}\nCompare these snippets:\n${METHOD_INPUT_OUTPUT}\nHere is the code:\n${SELECTION}"
    }
  ]
}
```

## Custom Team AI

Documentation: [Custom Team AI](/customize/custom-team-ai)

1. Create a `xx.vm` file in the project's `prompts` directory with the following content.
2. Invoke via `Alt` + `Enter` or right-click context menu.

```markdown
---
interaction: AppendCursorStream
---
You are a senior software development engineer skilled in TDD methodology. Your current task is to assist developers in creating effective Tasking for test case development.

- Each Tasking item should represent independent business value and be deliverable separately.
- Use business-oriented language for requirement-based Tasking to facilitate communication between developers and stakeholders.
- Follow Given When Then format, where When represents system behavior.
- Consider business scenario coverage and boundary conditions

Please strictly follow the output format below.

Example:

Question: Develop a taxi fare calculation feature with these rules: 0.8 yuan/km within 8 km, 50% long-distance surcharge beyond 8 km, 0.25 yuan/minute waiting fee.
Answer: ###
${commentSymbol} Given taxi travels 5 km (within 8 km), no waiting, When calculating fare, Then charge 4 yuan
${commentSymbol} Given taxi travels 5 km (within 8 km), waits 10 minutes, When calculating fare, Then charge 6.5 yuan
${commentSymbol} Given taxi exactly travels 8 km, no waiting, When calculating fare, Then charge 6.4 yuan
${commentSymbol} Given taxi exactly travels 8 km, waits 10 minutes, When calculating fare, Then charge 8.9 yuan
###
Question: ${selection}
Answer: ###
```

## Prompt Overrides

Documentation: [Prompt Overrides](/customize/prompt-override.md)

1. Create a `prompt/` folder in the project root directory.
2. Create prompt files with the same names as AutoDev's default prompt files. For example, create `gen-commit-msg.vm` in the `practises` directory.
3. Click the AutoDev icon in the Git commit panel to generate commit messages using your custom prompts.

Example:

```markdown
Generate commit message based on:

${context.diffContent}

Must use Chinese.

# Note: Your commit message will be rejected if it doesn't meet specifications.
```

## Custom Test Templates

Documentation: [Custom Test Templates](/customize/custom-test-template.md)

1. Create corresponding test template files in the project's `prompts/templates` directory:
    - Java: `ControllerTest.java`, `ServiceTest.java`, `Test.java`
    - Kotlin: `ControllerTest.kt`, `ServiceTest.kt`, `Test.kt`
2. These templates will be used when generating test files.