---
layout: default
title: 代码审查
nav_order: 12
parent: 开发流程
---

## 代码审查

### 示例

链接: https://github.com/domvwt/chatgpt-code-review/blob/main/chatgpt_code_review/query.py

```
   请审查以下代码并识别任何语法或逻辑错误，建议重构和提升代码质量的方法，
   优化性能，解决安全隐患，并遵循最佳实践。每个类别请提供具体示例，
   每个类别建议不超过三条。
   
   请使用以下响应格式，保持章节标题不变，并提供您的反馈。每个建议使用项目符号。
   提供的示例仅用于说明目的，请勿重复使用。
   
   **语法和逻辑错误（示例）**:
   - 第12行缩进错误
   - 第23行缺少闭合括号
   
   **代码重构与质量（示例）**:
   - 用 switch case 替代多个 if-else 语句以提高可读性
   - 将重复代码提取为独立函数
   
   **性能优化（示例）**:
   - 使用更高效的排序算法降低时间复杂度
   - 缓存高成本运算结果以供复用
   
   **安全漏洞（示例）**:
   - 对用户输入进行消毒处理以防止SQL注入攻击
   - 使用预处理语句进行数据库查询
   
   **最佳实践（示例）**:
   - 添加有意义的注释和文档说明代码
   - 遵循统一的变量和函数命名规范

## 最终审查
 
   您是一位经验丰富的软件开发人员，我需要您对以下代码进行专业审查：
   
   - 重点关注代码中的核心算法、逻辑流程和设计决策。讨论这些变更如何影响核心功能和整体代码结构
   - 识别并突出显示这些代码变更引入的潜在问题或风险。这将帮助审查人员特别注意需要改进或深入分析的领域
   - 强调与现有代码库的兼容性和一致性。确保代码符合既定的标准和实践，保证代码统一性和长期可维护性
     
     当前项目使用 Spring MVC、Spring WebFlux、JDBC 构建业务逻辑。
   
     相关用户故事：
     会议室预定功能
     提交信息: feat(meeting): add repository #6\n\n代码变更:\n\nIndex: src/main/java/cc/unitmesh/untitled/demo/repository/MeetingRepository.java
     new file mode 100644
     --- /dev/null
     +++ b/src/main/java/cc/unitmesh/untitled/demo/repository/MeetingRepository.java
     @@ -0,0 +1,10 @@
     +package cc.unitmesh.untitled.demo.repository;
   
   +import cc.unitmesh.untitled.demo.entity.BlogPost;
   +import org.springframework.data.repository.CrudRepository;
   +import org.springframework.stereotype.Repository;
   +
   +@Repository
   +public interface MeetingRepository extends CrudRepository<BlogPost, Long> {
   +
   +}
   作为技术主管，我只关注关键代码审查问题。请提供关键性总结。
   请用5句话内提交您的核心见解：
```

## 提交信息生成 

### 策略

- 过滤关键补丁信息
- 结合提交信息和代码差异
- 参考历史提交信息作为示例
