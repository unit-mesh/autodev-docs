

---
layout: default
title: 代码交互式对话
parent: 基础功能
nav_order: 4
permalink: /features/chat-width-code
---

1. 选中代码片段并右键打开上下文菜单（AutoDev 聊天）
2. 选择 AI 操作

<img src="https://unitmesh.cc/auto-dev/chat-with-code.png" alt="代码聊天补全" width="600px"/>

## 普通聊天

1. 点击右侧工具栏的 AutoDev 打开面板
2. 在输入框中输入问题，按 `Shift` + `Enter` 提交

<img src="https://unitmesh.cc/auto-dev/normal-chat.png" alt="普通聊天界面" width="600px"/>

## 解释此代码

## 重构此代码

在 [#129](https://github.com/unit-mesh/auto-dev/issues/129) 中，我们提供了更完善的重构信息支持。

## 基于此代码对话

## 生成单元测试

## 生成测试数据（API）

支持语言：Java

1. 右键点击函数/方法并选择 `Generate test data (APIs)`

AutoDev 将分析输入输出数据结构：

```java
@ApiOperation(value = "Create a new blog")
@PostMapping("/")
public BlogPost createBlog(@RequestBody CreateBlogRequest request) {
    CreateBlogResponse response = new CreateBlogResponse();
    BlogPost blogPost = new BlogPost();
    BeanUtils.copyProperties(request, blogPost);
    BlogPost createdBlog = blogService.createBlog(blogPost);
    BeanUtils.copyProperties(createdBlog, response);
    return createdBlog;
}
```

转换为 UML 结构：

```plantuml
//输入类: 
class CreateBlogRequest {
  title: String
  content: String
  User: User
}

class User {
  id: Long
  name: String
}

//输出类: 
class BlogPost {
  id: Long
  title: String
  content: String
  author: String
}
```

AI 将生成：

```json
{
  "title": "Sample Blog",
  "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "User": {
    "id": 1,
    "name": "John Doe"
  }
}
```