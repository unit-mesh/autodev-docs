---
layout: default
title: 遗留系统迁移
nav_order: 1
parent: 场景化功能
---

## AI辅助遗留系统迁移

基于我们在[《系统重构与迁移指南》](https://migration.ink/)中积累的经验，我们在AutoDev中开发了一系列AI能力，帮助开发者加速遗留系统改造：

- 辅助生成迁移测试所需的API数据
- 通过文档生成实现知识管理
- 基于注解文档创建活文档业务系统
- 面向对象式的遗留代码重构
- PL/SQL代码生成与Java代码迁移

## 从现有代码生成API测试数据

### 1. 生成API测试数据

支持语言：Java

示例截图：
![AutoDev活文档](https://unitmesh.cc/auto-dev/gen-test-data.png)

只需右键点击Java Controller代码，选择"Generate Test Data (APIs)"即可生成API测试数据。

### 2. 自定义提示集成

路径：`设置` -> `工具` -> `AutoDev` -> `自定义引擎提示`，添加自定义提示。示例：

```json
{
  "spec": {
  },
  "prompts": [
    {
      "title": "生成API测试用例",
      "autoInvoke": false,
      "matchRegex": ".*",
      "priority": 0,
      "template": "根据以下信息生成API测试用例：\n${METHOD_INPUT_OUTPUT}\n代码内容：\n${SELECTION}"
    }
  ],
  "documentations": []
}
```

## 注释与文档生成

选中对应代码后右键，选择`生成文档`即可生成说明文档。

## 使用[自定义活文档](/custom/living-documentation)生成动态文档

示例截图：
![AutoDev活文档](https://unitmesh.cc/auto-dev/autodev-living-doc.png)

配置路径：`设置` -> `工具` -> `AutoDev` -> `自定义引擎提示`，添加活文档自定义格式。示例：

```json
{
  "spec": {
  },
  "prompts": [
  ],
  "documentations": [
    {
      "title": "活文档",
      "prompt": "编写活文档。请按以下格式返回：",
      "start": "",
      "end": "",
      "type": "annotated",
      "example": {
        "question": "public BookMeetingRoomResponse bookMeetingRoom(@RequestBody BookMeetingRoomRequest request) {\n        MeetingRoom meetingRoom = meetingRoomService.bookMeetingRoom(request.getMeetingRoomId());\n        BookMeetingRoomResponse response = new BookMeetingRoomResponse();\n        BeanUtils.copyProperties(meetingRoom, response);\n        return response;\n    }",
        "answer": "    @ScenarioDescription(\n        given = \"存在ID为123的可用会议室\",\n        when = \"用户预定ID为123的会议室\",\n        then = \"预定响应应包含已预定会议室的详细信息\"\n    )"
      }
    }
  ]
}
```

## PL/SQL迁移支持

自1.5.5版本起，AutoDev已支持基础PL/SQL迁移功能：

1. 选中PL/SQL代码
2. 右键选择：
   - 生成实体
   - 生成测试用例
   - 生成Java代码

示例截图：
![SQL迁移](https://unitmesh.cc/auto-dev/autodev-sql-migration.png)
