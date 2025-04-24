---
layout: default
title: 自定义 Sketch
nav_order: 1
---

## 自定义 Sketch

遵循[提示词覆盖](/customize/prompt-override)指南，您可以自定义AI Composer。在`prompt/code`目录中，
您可以创建名为[`sketch.vm`](https://github.com/unit-mesh/auto-dev/blob/master/core/src/main/resources/genius/zh/code/sketch.vm) 
的文件来覆盖默认的composer提示词。

## 使用Ripgrep搜索

由于我们尚未实现全文搜索功能，您可以使用`RipgrepSearch`在项目中搜索文件。可以通过Homebrew安装：

```bash
brew install ripgrep
```

安装完成后即可在AutoDev Composer中使用该功能。
