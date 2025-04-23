

---
layout: default
title: AutoDev Bridge
nav_order: 2
has_children: true
parent: Agent
permalink: /bridge
---

视频演示（哔哩哔哩）- 中文：[观看视频](https://www.bilibili.com/video/BV1RwRNYEE1A/)

# AutoDev Bridge - 遗留代码迁移

所需工具:

- [SCC](https://github.com/boyter/scc)

所需插件:

- [OpenRewrite](https://plugins.jetbrains.com/plugin/23814-openrewrite) (Intellij IDEA Ultimate)
- [Endpoints](https://plugins.jetbrains.com/plugin/16890-endpoints) (Intellij IDEA Ultimate)

### 自定义桥接

遵循[提示词覆盖](/customize/prompt-override)，可以自定义AI Composer。在`prompt/code`目录中，
您可以创建名为`bridge.vm`的文件来覆盖composer提示词。

### 自定义推理模型

参考[新配置（2.0.0-beta.4+）](/quick-start#new-config-200-beta4)

### Docker 

#### Colima 

[Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?](https://github.com/abiosoft/colima/blob/main/docs/FAQ.md#cannot-connect-to-the-docker-daemon-at-unixvarrundockersock-is-the-docker-daemon-running)

```bash
export COLIMA_HOME=$HOME/.colima
export DOCKER_HOST="unix://${COLIMA_HOME}/default/docker.sock"
sudo ln -sf $COLIMA_HOME/default/docker.sock /var/run/docker.sock
```

##### 常见问题

```
Deploying '<unknown> Dockerfile: ../../../../shire.Dockerfile'…
ERROR: BuildKit is enabled but the buildx component is missing or broken.
Install the buildx component to build images with BuildKit:
https://docs.docker.com/go/buildx/
Failed to deploy '<unknown> Dockerfile: ../../../../shire.Dockerfile': Image build failed with exit code 1.
```

参考：https://github.com/abiosoft/colima/discussions/273

```bash
brew install docker-buildx
docker buildx install
```