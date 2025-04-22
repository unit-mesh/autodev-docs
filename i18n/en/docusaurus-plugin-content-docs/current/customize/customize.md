---
layout: default
title: Customize Features
nav_order: 4
has_children: true
permalink: /customize
---

## 自定义模型

文档地址：[自定义模型](/customize/custom-llm-server)

如下示例，你可以在 AutoDev 中配置不同的模型类型，以在不同场景中使用：

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

## 自定义提示词 Action

文档地址：[自定义提示词 Action](/customize/custom-action)

1. `Settings` -> `Tools` -> `AutoDev` -> `Agentic Customize`，在自定义提示词 Action，填如下 JSON。
2. 通过鼠标右键菜单调用。

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

## 自定义团队 AI

文档地址：[自定义团队 AI](/customize/custom-team-ai)

1. 在项目的 `prompts` 目录下创建一个 `xx.vm` 文件，写入如下内容。
2. 通过 `Alt` + `Enter` 或者鼠标右键菜单调用。

```markdown
---
interaction: AppendCursorStream
---
你是一个资深的软件开发工程师，你擅长使用 TDD 的方式来开发软件，你现在需要帮助帮手开发人员做好 Tasking，以方便于编写测试用例。

- Tasking 产生的任务都是具有独立业务价值的，每完成一条，都可以独立交付、产生价值。
- 采用面向业务需求的 Tasking 采用业务语言描述任务列表，更有助于开发人员和业务人员对需求进行详细的沟通和确认。
- 采用 Given When Then 的书写格式，其中 When 中所代表系统行为。
- 要考虑业务场景覆盖率，尽可能考虑到边界条件

请严格按照以下的格式输出。

示例如下：

Question: 开发一个出租车计费功能，它的计算规则是这样的：不超过8公里时每公里收费0.8元，超过8公里则每公里加收50%长途费，停车等待时每分钟加收0.25元。
Answer: ###
${commentSymbol} Given 出租车行驶了5公里（8公里以内），未发生等待，When 计费，Then 收费4元
${commentSymbol} Given 出租车行驶了5公里（8公里以内），等待10分钟，When 计费，Then 收费6.5元
${commentSymbol} Given 出租车恰好行驶了8公里，未发生等待，When 计费，Then 收费6.4元
${commentSymbol} Given 出租车恰好行驶了8公里，等待10分钟，When 计费，Then 收费8.9元
###
Question: ${selection}
Answer: ###
```

## 提示词覆盖

文档地址：[提示词覆盖](/customize/prompt-override.md)

1. 在项目根目录下创建 `prompt/` 文件夹。
2. 创建提示词文件，文件名与 AutoDev 的提示词文件名一致。诸如于在 `practises` 目录下创建 `gen-commit-msg.vm` 文件。
3. 在 Git 提交面板上，选择 AutoDev 图标，就会根据你的提示词文件生成提交信息。

如下是一个示例：

```markdown
根据如下的内容，生成提交信息：

${context.diffContent}

必须使用中文。

# 请注意，如果您的提交信息不符合规范，将会被拒绝。
```

## 自定义测试模板

文档地址：[自定义测试模板](/customize/custom-test-template.md)

1. 在项目的 `prompts/templates` 目录下创建对应的测试模板文件。
    - Java 语言：`ControllerTest.java`、`ServiceTest.java`、`Test.java`
    - Kotlin 语言：`ControllerTest.kt`、`ServiceTest.kt`、`Test.kt`
2. 在生成测试文件时，将使用这些模板。

