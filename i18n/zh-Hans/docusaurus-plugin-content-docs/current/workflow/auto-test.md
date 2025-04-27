---
title: AutoTest
---

# 自动化测试设计

## 设计原则

创建规则：

- 若测试代码已存在且LLM返回包含import语句，AutoDev将替换所有代码
- 若测试代码已存在且LLM返回不包含import语句，AutoDev将在最后一个import语句后插入测试代码
- 若测试代码不存在，AutoDev将直接插入测试代码

运行规则：

- 若运行配置已存在，AutoDev将创建新的运行配置
- 若运行配置不存在，AutoDev将创建新的运行配置

更多细节请参考[AutoTestService](https://github.com/unit-mesh/auto-dev/blob/master/src/main/kotlin/cc/unitmesh/devti/provider/AutoTestService.kt)

## 测试提示模板

```markdown
    为以下Kotlin代码编写单元测试。
    
    您正在使用Spring MVC和Spring WebFlux构建RESTful API的项目中工作。
    - 测试方法名必须使用should_xx_xx格式，必须使用given-when-then结构
    - 测试文件应完整且可直接编译，无需额外操作
    - 确保每个测试仅关注单一用例以保持清晰可读
    - 不要使用@BeforeEach进行初始化，所有必要代码都应包含在单个测试方法中，不要编写参数化测试
    - 项目使用JUnit 5，需导入`org.junit.jupiter.api.Test`并使用@Test注解
    - 使用合适的Spring测试注解如@MockBean、@Autowired、@WebMvcTest、@DataJpaTest、@AutoConfigureTestDatabase、@AutoConfigureMockMvc、@SpringBootTest等
      参考模板示例：
    \```Kotlin
    // 必须使用@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
    @SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
    @ExtendWith(SpringExtension::class)
    class PluginControllerTest {
    
        private lateinit var mockMvc: MockMvc
    
        @BeforeEach
        fun setup() {
            // 可使用MockMvcBuilders.standaloneSetup()构建mockMvc
            mockMvc = MockMvcBuilders.standaloneSetup(PluginController()).build()
        }
    
        @Test
        fun shouldReturnPluginTypes() {
            mockMvc.perform(get("/api/plugin/type"))
                .andExpect(status().isOk)
                .andExpect(jsonPath("$[0]").value("DUBBO"))
        }
    }
    
    \```
    
    - Kotlin API版本：1.9
    
    // 相关类信息：
    // 'package: com.thoughtworks.archguard.evolution.domain.BadSmellSuite
    // class BadSmellSuite {
    //   id
    //   suiteName
    //   isDefault
    //   thresholds
    //   
    // }
    // 'package: com.thoughtworks.archguard.evolution.domain.BadSmellSuiteWithSelected
    // class BadSmellSuiteWithSelected {
    //   id
    //   suiteName
    //   isDefault
    //   isSelected
    //   thresholds
    //   
    // }
    // 'package: com.thoughtworks.archguard.evolution.domain.BadSmellThresholdService
    // '@Service
    // class BadSmellThresholdService {
    //   badSmellSuitRepository
    //   + fun getAllSuits(): List<BadSmellSuite>
    //   + fun getBadSmellSuiteWithSelectedInfoBySystemId(systemId: Long): List<BadSmellSuiteWithSelected>
    // }
    
    // 当前类信息：
    // 'package: com.thoughtworks.archguard.evolution.controller.EvolutionBadSmellController
    // '@RestController, @RequestMapping("/api/evolution")
    // class EvolutionBadSmellController {
    //   badSmellThresholdService
    //   + @GetMapping("/badsmell-thresholds")     fun getAllThresholds(): List<BadSmellSuite>
    //   + @GetMapping("/badsmell-thresholds/system/{systemId}")     fun getThresholdsBySystemId(@PathVariable("systemId") systemId: Long): List<BadSmellSuiteWithSelected>
    // }
    
    代码：
    // import com.thoughtworks.archguard.evolution.domain.BadSmellSuite
    // import com.thoughtworks.archguard.evolution.domain.BadSmellSuiteWithSelected
    // import com.thoughtworks.archguard.evolution.domain.BadSmellThresholdService
    // import org.springframework.web.bind.annotation.GetMapping
    // import org.springframework.web.bind.annotation.PathVariable
    // import org.springframework.web.bind.annotation.RequestMapping
    // import org.springframework.web.bind.annotation.RestController
    \```kotlin
    @RestController
    @RequestMapping("/api/evolution")
    class EvolutionBadSmellController(val badSmellThresholdService: BadSmellThresholdService) {
    
        @GetMapping("/badsmell-thresholds")
        fun getAllThresholds(): List<BadSmellSuite> {
            return badSmellThresholdService.getAllSuits()
        }
    
        @GetMapping("/badsmell-thresholds/system/{systemId}")
        fun getThresholdsBySystemId(@PathVariable("systemId") systemId: Long): List<BadSmellSuiteWithSelected> {
            return badSmellThresholdService.getBadSmellSuiteWithSelectedInfoBySystemId(systemId)
        }
    }
    \```
    
    请从import语句开始编写：
```

## 资源

### TestSpark

TestSpark目前支持两种测试生成策略：
- 基于LLM的测试生成（使用OpenAI和JetBrains内部AI Assistant平台）
- 基于本地搜索的测试生成（使用EvoSuite）

#### 方法一：LLM生成提示示例

GitHub: [TestSpark](https://github.com/JetBrains-Research/TestSpark/blob/development/src/main/resources/defaults/TestSpark.properties)

```vtl
为$NAME生成$LANGUAGE单元测试以实现100%行覆盖。
不要使用@Before和@After测试方法。
保持测试原子性。
所有测试应基于$TESTING_PLATFORM。
如需mock请使用$MOCKING_FRAMEWORK，但不要所有测试都使用mock。
测试方法命名遵循[MethodUnderTest][Scenario]Test模板，仅使用英文字母。
被测类源码：
$CODE
以下是被测类使用的方法和类的相关信息，请仅用于创建对象：
$METHODS
$POLYMORPHISM
$TEST_SAMPLE
```

#### 方法二：EvoSuite生成

[EvoSuite](https://www.evosuite.org/) 是一个能够自动生成带有Java断言测试的工具。
