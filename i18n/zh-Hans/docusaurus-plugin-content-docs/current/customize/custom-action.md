

---
layout: default
title: 自定义动作
parent: 功能定制
nav_order: 10
permalink: /custom/action
---

# 自定义动作

您可以通过`设置`->`工具`->`AutoDev`来自定义您的提示模板

```json
{
  "spec": {
    "controller": "- 在Controller中使用BeanUtils.copyProperties进行DTO到Entity的转换\n- 避免使用Autowired\n- 使用Swagger注解说明API含义\n- Controller方法应捕获并处理业务异常，而不是抛出系统异常",
    "service": "- Service层应使用构造器注入或setter注入；避免使用@Autowired注解",
    "entity": "- 实体类应使用JPA注解进行数据库映射\n- 实体类名应与对应数据库表名匹配。实体类应使用注解标记主键和表名，例如：@Id、@GeneratedValue、@Table等",
    "repository": "- Repository接口应继承JpaRepository接口以继承基础CRUD操作",
    "ddl": "- 字段应添加NOT NULL约束以确保数据完整性"
  },
  "prompts": [
    {
      "title": "代码补全",
      "autoInvoke": true,
      "matchRegex": ".*",
      "priority": 1,
      "template": "代码补全：\n${METHOD_INPUT_OUTPUT}\n${SPEC_controller}\n\n${SELECTION}"
    },
    {
      "title": "转换为Kotlin",
      "autoInvoke": false,
      "matchRegex": ".*",
      "priority": 0,
      "template": "将以下代码转换为Kotlin\n${SIMILAR_CHUNK}\n对比代码片段：\n${METHOD_INPUT_OUTPUT}\n以下是代码：\n${SELECTION}"
    }
  ]
}
```

- title: 动作名称
- autoInvoke: 执行动作时是否自动调用
- matchRegex: TODO()
- priority: 动作优先级，数值越高优先级越高（建议范围0~1000）
- template: 动作模板，可使用`${SPEC_controller}`插入规范说明，`${SELECTION}`插入选中代码
- selectedRegex (自@1.8.3版本起，来自[#174](https://github.com/unit-mesh/auto-dev/pull/174)): 匹配选中代码的正则表达式

## 变量说明

上下文变量：

- `${SELECTION}`: 选中的代码片段
- `${SIMILAR_CHUNK}`: 相似代码块
- `${METHOD_INPUT_OUTPUT}`: 方法输入输出说明

规范变量：

- `${SPEC_*}`: 从配置的`spec`部分加载规范，例如`${SPEC_controller}`会加载配置中的`spec.controller`

### 模板示例

配置：

```json
{
  "title": "\uD83C\uDF10\uD83C\uDF10 转换为Kotlin",
  "autoInvoke": false,
  "matchRegex": ".*",
  "priority": 0,
  "template": "将以下代码转换为Kotlin。相似代码块：${SIMILAR_CHUNK} 对比代码片段：${METHOD_INPUT_OUTPUT}\n \n${SELECTION}"
}
```

输出示例：

```
将以下代码转换为Kotlin。相似代码块： // 对比来自java/cc/unitmesh/untitled/demo/controller/CommentController.java的代码片段：
// public class CommentController {
// 对比来自java/cc/unitmesh/untitled/demo/DemoApplication.java的代码片段：
// public class DemoApplication {
// 对比来自java/cc/unitmesh/untitled/demo/controller/AdvertiseController.java的代码片段：
// public class AdvertiseController {
// 对比来自java/cc/unitmesh/untitled/demo/dto/BookMeetingRoomRequest.java的代码片段：
// public class BookMeetingRoomRequest {
// 对比来自java/cc/unitmesh/untitled/demo/entity/MeetingRoom.java的代码片段：
// public class MeetingRoom {
// 对比来自java/cc/unitmesh/untitled/demo/controller/BlogController.java的代码片段：
//     @ApiOperation(value = "Create a new blog")
// 对比来自java/cc/unitmesh/untitled/demo/controller/BlogControllerTest.java的代码片段：
// class BlogControllerTest {
// 对比来自java/cc/unitmesh/untitled/demo/DemoApplicationTests.java的代码片段：
// class DemoApplicationTests {
// 对比来自java/cc/unitmesh/untitled/demo/service/BlogService.java的代码片段：
// public class BlogService {
// 对比来自java/cc/unitmesh/untitled/demo/dto/CreateBlogRequest.java的代码片段：
// public class CreateBlogRequest {
// 对比来自java/cc/unitmesh/untitled/demo/controller/BlogCategoryController.java的代码片段：
// public class BlogCategoryController {
// 对比来自java/cc/unitmesh/untitled/demo/dto/MeetingRoomDetailsResponse.java的代码片段：
// public class MeetingRoomDetailsResponse { 对比代码片段： //  class CreateBlogRequest {
//    title
//    content
//    
//  }//  class BlogPost {
//    id
//    title
//    content
//    author
//    + public BlogPost(String title, String content, String author)
//    + public BlogPost()
//    + public Long getId()
//    + public String getTitle()
//    + public void setTitle(String title)
//    + public String getContent()
//    + public void setContent(String content)
//    + public String getAuthor()
//    + public void setAuthor(String author)
//  }

```Java
// 创建博客
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
```