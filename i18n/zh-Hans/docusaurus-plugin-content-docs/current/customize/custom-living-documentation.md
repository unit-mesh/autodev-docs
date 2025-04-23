---
layout: default
title: 自定义文档
parent: 功能定制
nav_order: 12
permalink: /custom/living-documentation

---

# 自定义文档

## 动态文档示例

转到：`设置` -> `工具` -> `AutoDev` -> `自定义引擎提示`，添加您自己的提示词。

```json
{
  "spec": {
  },
  "prompts": [
  ],
  "documentations": [
    {
      "title": "动态文档",
      "prompt": "编写动态文档。按如下的格式返回：",
      "start": "",
      "end": "",
      "type": "annotated",
      "example": {
        "question": "public BookMeetingRoomResponse bookMeetingRoom(@RequestBody BookMeetingRoomRequest request) {\n        MeetingRoom meetingRoom = meetingRoomService.bookMeetingRoom(request.getMeetingRoomId());\n        BookMeetingRoomResponse response = new BookMeetingRoomResponse();\n        BeanUtils.copyProperties(meetingRoom, response);\n        return response;\n    }",
        "answer": "    @ScenarioDescription(\n        given = \"there is a meeting room available with ID 123\",\n        when = \"a user books the meeting room with ID 123\",\n        then = \"the booking response should contain the details of the booked meeting room\"\n    )"
      }
    }
  ]
}
```

**输出结果**

```java
@ScenarioDescription(
        given = "存在ID为123的可用会议室",
        when = "用户预订ID为123的会议室",
        then = "预订响应应包含已预订会议室的详细信息"
)
public BookMeetingRoomResponse bookMeetingRoom(@RequestBody BookMeetingRoomRequest request) {
    MeetingRoom meetingRoom = meetingRoomService.bookMeetingRoom(request.getMeetingRoomId());
    BookMeetingRoomResponse response = new BookMeetingRoomResponse();
    BeanUtils.copyProperties(meetingRoom, response);
    return response;
}
```

## 常规示例

```json
{
  "documentations": [
    {
      "title": "生成Java方法级注释",
      "prompt": "生成JavaDoc方法级注释，只返回方法注释。\n要求：1. 需明确说明方法用法 2. 只返回方法注释，使用/**开头\n\n",
      "start": "",
      "end": "",
      "type": "normal",
      "example": {
        "question": "    public void addEdge(int a, int b) {\n        graph.get(a).add(b);\n        graph.get(b).add(a); // Assuming an undirected graph\n    }",
        "answer": "    /**\n     * 向图中添加一条边。\n     *\n     * <pre>\n     *    {@code\n     *        Calculate graph = new Calculate(5); // 创建一个具有5个节点的图\n     *        graph.addEdge(0, 1); // 在节点0和节点1之间添加边\n     *        // 假定这是一个无向图，因此边(0,1)和边(1,0)都会被添加\n     *    }\n     * </pre>\n     *\n     * @param a 节点A的索引\n     * @param b 节点B的索引\n     *          两个节点都应在添加边之前先添加到图中\n     */\n"
      }
    }
  ]
}
```

**输出结果**

```java
    /**
     * 向图中添加一条边。
     *
     * <pre>
     *    {@code
     *        Calculate graph = new Calculate(5); // 创建一个具有5个节点的图
     *        graph.addEdge(0, 1); // 在节点0和节点1之间添加边
     *        // 假定这是一个无向图，因此边(0,1)和边(1,0)都会被添加
     *    }
     * </pre>
     *
     * @param a 节点A的索引
     * @param b 节点B的索引
     *          两个节点都应在添加边之前先添加到图中
     */
```
