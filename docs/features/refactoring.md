---
layout: default
title: Refactoring
parent: Basic Features
nav_order: 11
permalink: /features/refactoring
---

In [#129](https://github.com/unit-mesh/auto-dev/issues/129), we provide more information for you to refactor code.

## Auto smell combination

It Will provide more information for you to refactor code. like:

- Highlighter issue in IntelliJ IDEA

For example:

```java
public BlogPost updateBlog(Long id, BlogPost blogDto) {
        String content = blogDto.getContent();
        return blogRepository.findById(id).map(blog -> {
            blog.setTitle(blogDto.getTitle());
            blog.setContent(blogDto.getContent());
            return blogRepository.save(blog);
        }).orElse(null);
    }

// relative static analysis result:
// - Variable 'content' is never used
```

## Naming Suggestions

In [#132](https://github.com/unit-mesh/auto-dev/issues/132), we provide basic functionality for renaming things.

1. enable suggestion: `Settings` -> `AutoDev` -> `AutoDev Coder` -> `Enable Rename suggestion`
2. select the variable you want to rename use `Shift` + `F6`

<img src="https://unitmesh.cc/auto-dev/autodev-rename.png" alt="Rename Functions" width="600px"/>

## Resource

In [How to Refactor this Code? An Exploratory Study on Developer-ChatGPT Refactoring Conversations](https://arxiv.org/abs/2402.06013) ,
talking about how to refactoring to better understand how developers identify areas for improvement in code
and how ChatGPT addresses developers' needs. 
