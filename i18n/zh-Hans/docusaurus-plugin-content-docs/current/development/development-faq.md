---
layout: default
title: 开发常见问题解答
nav_order: 999
parent: 开发
---

## EDT 与 ReadAction 问题

> 在ReadAction下的同步执行：/usr/local/bin/git -c credential.helper= -c core

解决方案示例如下：

```kotlin
/**
 * 参考[com.intellij.execution.process.OSProcessHandler.checkEdtAndReadAction]，我们应该采用这种方式处理，
 * 另一个示例可查看[git4idea.GitPushUtil.findOrPushRemoteBranch]
 */
val future = CompletableFuture<List<GitCommit>>()
val task = object : Task.Backgroundable(project, "xx", false) {
    override fun run(indicator: ProgressIndicator) {
        // 长时间操作
        future.complete(/* 提交列表 */)
    }
}

ProgressManager.getInstance()
    .runProcessWithProgressAsynchronously(task, BackgroundableProcessIndicator(task))

runBlockingCancellable {
    val commits = future.await()
    // 后续处理
}
```

## API 兼容性方案

https://github.com/JetBrains/aws-toolkit-jetbrains/tree/ccee3307fe58ad48f93cd780d4378c336ee20548/jetbrains-core

```kotlin
// 版权 2021 Amazon.com, Inc. 或其关联公司。保留所有权利。
// SPDX-License-Identifier: Apache-2.0
package software.aws.toolkits.jetbrains.core.docker.compatability

typealias DockerFileAddOrCopyCommand = com.intellij.docker.dockerFile.parser.psi.DockerFileAddOrCopyCommand
typealias DockerFileCmdCommand = com.intellij.docker.dockerFile.parser.psi.DockerFileCmdCommand
typealias DockerFileExposeCommand = com.intellij.docker.dockerFile.parser.psi.DockerFileExposeCommand
typealias DockerFileFromCommand = com.intellij.docker.dockerFile.parser.psi.DockerFileFromCommand
typealias DockerFileWorkdirCommand = com.intellij.docker.dockerFile.parser.psi.DockerFileWorkdirCommand
```

## java.lang.Throwable: 必须在进度指示器下执行：com.intellij.openapi.progress.EmptyProgressIndicator@6c3fd0d8，但当前进程运行在空指示器下。请参考示例：ProgressManager.runProcess()

```kotlin
 val future = CompletableFuture<String>()
val task = object : Task.Backgroundable(project, "加载中", false) {
    override fun run(indicator: ProgressIndicator) {
        // collectApis 指向你的长时间操作
        future.complete(this.collectApis(project, endpointsProviderList))
    }
}

ProgressManager.getInstance()
    .runProcessWithProgressAsynchronously(task, BackgroundableProcessIndicator(task))

return future.get()
```
