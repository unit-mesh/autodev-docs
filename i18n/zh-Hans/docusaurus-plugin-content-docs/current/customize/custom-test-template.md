

---
layout: default
title: 自定义测试提示模板
parent: 功能定制
nav_order: 15
---

在`prompts/templates`目录下创建模板文件，例如：

- Java语言：`ControllerTest.java`、`ServiceTest.java`、`Test.java`
- Kotlin语言：`ControllerTest.kt`、`ServiceTest.kt`、`Test.kt`

生成测试文件时将使用这些模板。

示例：

```kotlin
// 对于Web环境测试应该使用带RANDOM_PORT的@SpringBootTest，否则测试会失败
// 测试类应使用@ExtendWith(SpringExtension::class)
// 例如：
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ExtendWith(SpringExtension::class)
class /* 此处应为{ControllerName} */ControllerTest {
    private lateinit var mockMvc: MockMvc

    // 其他需要mock的bean

    @BeforeEach
    fun setup() {
        mockMvc = MockMvcBuilders.standaloneSetup(/* {ControllerName} */Controller(/* 注入mock的bean */)).build()
    }

    // 测试方法
}
```