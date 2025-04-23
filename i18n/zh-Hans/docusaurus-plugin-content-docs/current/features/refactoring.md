

---
layout: default
title: 代码重构
parent: 基础功能
nav_order: 11
permalink: /features/refactoring
---

在[#129](https://github.com/unit-mesh/auto-dev/issues/129)中，我们提供了更多辅助代码重构的信息。

## 自动异味检测组合

该功能将为代码重构提供更多分析信息，例如：

- IntelliJ IDEA 中的高亮问题

示例：

```java
public BlogPost updateBlog(Long id, BlogPost blogDto) {
        String content = blogDto.getContent();
        return blogRepository.findById(id).map(blog -> {
            blog.setTitle(blogDto.getTitle());
            blog.setContent(blogDto.getContent());
            return blogRepository.save(blog);
        }).orElse(null);
    }

// 相关静态分析结果：
// - 变量 'content' 从未被使用
```

## 后续步骤建议

我们提供最常见的代码重构建议，执行重构操作后您将看到以下建议：

```
intentions.refactor.readability=请使用简洁且有意义的变量、函数和类名，以提高代码可读性。
intentions.refactor.usability=请确保正确的缩进和格式，以增强代码结构和可读性。
intentions.refactor.performance=请优化算法和数据结构以提高代码性能。
intentions.refactor.maintainability=请将冗长复杂的函数重构为更小、更易管理的单元，以提高代码可维护性。
intentions.refactor.flexibility=请将系统设计得灵活且易于适应需求变化。
intentions.refactor.reusability=请设计和实现可复用的组件或模块，以减少重复并提高开发效率。
intentions.refactor.accessibility=请考虑无障碍需求，设计可供所有用户使用的系统。
```

## 命名建议

在[#132](https://github.com/unit-mesh/auto-dev/issues/132)中，我们提供了基础的重命名功能：

1. 启用建议：`设置` -> `AutoDev` -> `AutoDev Coder` -> `启用重命名建议`
2. 使用 `Shift` + `F6` 选择要重命名的变量

<img src="https://unitmesh.cc/auto-dev/autodev-rename.png" alt="重命名功能" width="600px"/>

## 相关资源

在论文[《如何重构这段代码？开发者与ChatGPT重构对话的探索性研究》](https://arxiv.org/abs/2402.06013)（How to Refactor this Code? An Exploratory Study on Developer-ChatGPT Refactoring Conversations）中，
探讨了如何通过重构来更好地理解开发者如何识别代码改进点，以及ChatGPT如何满足开发者的需求。