---
title: AutoDev Remote 
slug: autodev-remote
nav_order: 4
parent: AutoDev MPP
---

AutoDev Remote 模式是将 AutoDev 作为远程服务来运行。其核心功能是：

- 提供 AutoDev 服务端，可以被任何客户端调用

需要从 release 页面下载 server.jar 然后在本地运行。在运行之前需要配置好模型。

启动日志示例：

```
16:02:55.745 [main] INFO  io.ktor.server.Application - Autoreload is disabled because the development mode is off.
16:02:55.797 [main] INFO  io.ktor.server.Application - Application started in 0.13 seconds.
16:02:55.871 [DefaultDispatcher-worker-1] INFO  io.ktor.server.Application - Responding at http://0.0.0.0:8080
```