---
title: 本地智能体
---

# 本地智能体

AutoDev 的本地智能体是基于 DevIns 语言与 [Shire](https://shire.phodal.com/) 所构建的，其核心包含三部：

- Hobbit Hole：类似于 Front Matter，用于定义数据结构。
    - Pattern-Action：用于定义数据处理逻辑。
    - Condition Visible：用于定义可见性条件。
    - Output：用于定义输出。
    - Variable：用于定义过程变量。
- Template：用于定义 LLM 模板，基于 Velocity 模板引擎。
- Life Cycle：用于定义生命周期。

示例见：[Untitled .devin](https://github.com/unit-mesh/untitled/tree/master/.devin)

## 快速开始

1. 创建 `sample.devin`

```devin
Explain code /file:src/main/java/com/example/Controller.java
```

2. 点击运行

![AutoDev DevIns](https://unitmesh.cc/auto-dev/autodev-devins.png)

## 示例：获取远程规范，调用 AI 编写代码

在 variables 中，你可以通过 thread 函数获取远程的规范内容，并通过 jsonpath 函数提取出你需要的内容。

```devin
---
name: "Design Profobuf IDL"
actionLocation: ContextMenu
variables:
  "spec": /any/ { thread(".devin/shell/fetch-teamai-spec.sh") | jsonpath("$.[1].content") }
onStreamingEnd: { parseCode | saveFile | openFile }
---

Please based on the user's input and spec, generate the corresponding Proto file.

Spec is as follows:

$spec

The user's requirement is: $selection
```

对应的 fetch-teamai-spec.sh 示例：

```bash
curl https://tt.dts.plus/api/guideline
```

在上面的代码中，`$spec` 变量的内容为远程的规范内容。通过 `thread` 函数获取远程的规范内容，并通过 `jsonpath` 函数提取出你需要的内容。

```json
[
  {
    "id": 2,
    "title": "Protobuf API Spec",
    "category": {
      "subcategory": "api-design"
    },
    "content": "## 1. Data Model Specification\n\nThe data model defines the structure and data types of messages within the service. The following design specifications are recommended for Protobuf:\n\n```protobuf\n// Define message structure with fields using camelCase naming\nsyntax = \"proto3\";\n\npackage example.api.v1;\n\n// Fields of the message should include numbers and use neat, orderly numbering\n// Define the base message for user information\nmessage User {\n  int32 id = 1;                  // User ID\n  string username = 2;           // Username\n  string email = 3;              // Email\n  repeated string roles = 4;     // Roles, supports multiple roles\n}\n```\n\n## 2. Service Interface Specification\n\nService interfaces define the various API RPC methods using `service`. The interface definition should:\n\n- Follow CRUD operation naming conventions (e.g., `GetUser`, `CreateUser`, etc.).\n- Clearly define the input and output message structures.\n- Return results encapsulated in a separate message structure for better extensibility and error handling.\n\n```protobuf\n// Define user service\nservice UserService {\n  // Get user information\n  rpc GetUser (GetUserRequest) returns (UserResponse);\n\n  // Create user\n  rpc CreateUser (CreateUserRequest) returns (UserResponse);\n\n  // Delete user\n  rpc DeleteUser (DeleteUserRequest) returns (EmptyResponse);\n}\n```\n\n## 3. Request and Response Message Specification\n\nEach RPC method should define corresponding request and response messages. It is recommended to use the naming convention `MethodName + Request` and `MethodName + Response`, as shown below:\n\n```protobuf\n// Request messages\nmessage GetUserRequest {\n  int32 id = 1;  // User ID\n}\n\nmessage CreateUserRequest {\n  string username = 1;\n  string email = 2;\n  repeated string roles = 3;\n}\n\n// Response messages\nmessage UserResponse {\n  User user = 1;\n}\n\nmessage EmptyResponse {} // Represents an empty response\n```\n\n## 4. Error Handling Specification\n\nIt is recommended to use standard error codes or custom error messages to handle API exceptions. This can be implemented through extension fields. Here is a simple error response example:\n\n```protobuf\n// Error message\nmessage ErrorResponse {\n  int32 code = 1;        // Error code\n  string message = 2;    // Error description\n  string details = 3;    // Additional error information\n}\n```\n\n## 5. Version Control Specification\n\nTo ensure backward compatibility, the `package` in Protobuf files should include version numbers to support different client versions as the service evolves.\n\n```protobuf\npackage example.api.v1; // Specify version number in the package\n```\n\n## 6. Commenting and Documentation Specification\n\nEach field, message, and service should have comments for documentation generation and to help future developers understand how to use them. You can use `///` or `//` for single-line comments, or `/* ... */` for multi-line comments.\n\n```protobuf\n// User service, providing interfaces to get, create, and delete users\nservice UserService {\n  // Get user information\n  rpc GetUser (GetUserRequest) returns (UserResponse);\n}\n```\n\n## 7. Complete Example of a Protobuf File\n\n```protobuf\nsyntax = \"proto3\";\n\npackage example.api.v1;\n\n// User information message\nmessage User {\n  int32 id = 1;                  // User ID\n  string username = 2;           // Username\n  string email = 3;              // Email\n  repeated string roles = 4;     // Roles, supports multiple roles\n}\n\n// User service interface\nservice UserService {\n  // Get user information\n  rpc GetUser (GetUserRequest) returns (UserResponse);\n\n  // Create user\n  rpc CreateUser (CreateUserRequest) returns (UserResponse);\n\n  // Delete user\n  rpc DeleteUser (DeleteUserRequest) returns (EmptyResponse);\n}\n\n// Request and response messages\nmessage GetUserRequest {\n  int32 id = 1;\n}\n\nmessage CreateUserRequest {\n  string username = 1;\n  string email = 2;\n  repeated string roles = 3;\n}\n\nmessage UserResponse {\n  User user = 1;\n}\n\nmessage EmptyResponse {}\n\n// Error message\nmessage ErrorResponse {\n  int32 code = 1;\n  string message = 2;\n  string details = 3;\n}\n```",
    "status": "PUBLISHED"
  }
]
```

最后，在 onStreamingEnd，即执行完当前的 DevIns 之后，执行 parseCode、saveFile 和 openFile 三个 Processor，来处理当前的输出结果。

## 示例：获取 Jira ID，生成提交信息

其中的 actionLocation 用于定义当前 DevIns 的执行位置，CommitMenu 表示在提交信息编写页面执行。

```devin
---
name: "Commit message"
description: "生成提交信息"
interaction: AppendCursor
actionLocation: CommitMenu
variables:
  "story": /any/ { thread(".devin/shell/fetch-jira.sh") | jsonpath("$.data[*].Story") }
---

为给定的变更（Diff）编写一个连贯但具有描述性的代码提交信息。

- 确保包含修改了什么以及为什么。
- 以不超过 50 个字符的祈使句形式开头，使用 # 号带上需求编号。

现有的变更如下：

$currentChanges

请遵循常规提交规范，例如：

- fix(authentication): 修复密码正则表达式模式问题
- feat(storage): 添加对S3存储的支持
- test(java): 修复用户控制器的测试用例
- docs(architecture): 在主页添加架构图

我当前待完成的需求信息有：$story，请分析出适合的需求编号，以 # 加到提交信息中。

只返回提交信息，不使用 ``` 标记。
```

## 示例：多个 DevIns 编排示例

通过 afterStreaming 你可以在执行完当前的 DevIns 之后，执行下一个 DevIns。同时，可以把当前的变量以及 `$output` 传递给下一个
DevIns。
如下代码示例：

```devin
---
name: "设计数据库"
variables:
  "story": /any/ { thread(".devin/shell/github-issue.curl.sh") | jsonpath("$.body") }
afterStreaming: {
  case condition {
    default { execute("gen-sql.devin", $story, $output) }
  }
}
---

You are a professional Database Administrator.
According to the user's requirements, you should choose the best Tables for the user in List.

— User use database: $databaseInfo
- User tables: $tables

For example:

- Question(requirements): calculate the average trip length by subscriber type.  User tables: trips, users, subscriber_type *
- You should anwser: [trips, subscriber_type]

----

Here are the User requirements:

$story

Please choose the best Tables for the user, just return the table names in a list, no explain.
```

在 variable 中定义了一个变量 story，内容为 GitHub Issue 的正文内容。通过 `thread` 函数获取 issue 的正文内容，并通过
`jsonpath` 函数提取出正文内容。

