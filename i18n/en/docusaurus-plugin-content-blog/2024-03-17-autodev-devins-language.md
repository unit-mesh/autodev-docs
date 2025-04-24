---
layout: default
title: Agent Language - DevIns
nav_order: 9
---

In the previous version, we built AutoDev's custom Agent functionality, allowing users to create their own intelligent agents through custom capabilities to provide intelligent assistance for software development tasks.  
In this version, we are introducing a new AI Agent language: DevIns (Development Instruction). DevIns enables users to describe software development tasks more efficiently while automatically processing content returned from AI Agents.

Introduction paragraph text here.

<!-- truncate -->

For example: `/write:README.md\n```\n# Hello, World!```\n"` will be translated and executed by AutoDev, writing `# Hello, World!` to the `README.md` file. Additionally, this version of DevIns can execute patches, commit code, and run tests.

Note: It was originally named DevIn, but after the Devin AI project released its demo video, we renamed it to DevIns.

## Why DevIns?

In the AutoDev project, we achieve intelligent assistance for software development tasks through **context-aware building** and **custom capabilities**, such as automated test generation/execution and UI auto-generation. As we developed more agents in AutoDev, we observed that all interactions with the model occurred through **instruction text**. Users interact with agents via instruction text, and agents return content to operate editors or IDEs.

For instance, in AutoDev's custom prompts, we can use: `Explain selected code: $selection` to have AI interpret the selected code, where "Explain" functions as an instruction.

This led us to consider: Can we interact with agents using **natural language**? Users could describe requirements in natural language, while models could return corresponding instruction text to operate editors/IDEs, thereby automating software development assistance.

## What is DevIns Language?

> DevIns is an interactive language bridging natural language and instruction text, where natural language describes development tasks and instruction text interacts with agents/IDEs.

Simply put, DevIns is an interactive, compilable, and executable textual language. You can use DevIns to describe software development tasks (e.g., code analysis, code generation, test execution), then run it. The DevIns compiler will generate corresponding instruction text based on your commands, send it to agents, and execute operations on editors/IDEs based on returned results.

You can describe requirements in natural language:

```devin
Explain code /file:src/main/java/com/example/Controller.java
```

AutoDev will then combine context and compile it into instruction text, reading the `src/main/java/com/example/Controller.java` file contents.

### DevIns Agent Commands

Beyond basic file reading, code modification, and custom variables, DevIns supports more commands like writing files, running tests, and committing code. Predefined commands enable operations such as:

- `/write` manipulates code with path information
- `/run` executes corresponding tests
- `/patch` applies patches based on AI responses  
- `/commit` submits code

Example generation content:

    /write:src/main/java/com/example/Controller.java#L1-L5
    ```java
    public class Controller {
        public void method() {
            System.out.println("Hello, World!");
        }
    }
    ```

Details: [https://ide.unitmesh.cc/devins](https://ide.unitmesh.cc/devins)

Don't worry about command complexity - our extensive IDE development experience enables DevIns to provide "extremely" powerful interactive capabilities: intelligent completion and hints.

### Using DevIns in IDE

After installing AutoDev 1.7.2 plugin, create a `hello.devins` file to start writing DevIns commands, then click Run. As shown:

![AutoDev DevIns](https://unitmesh.cc/auto-dev/autodev-devins.png)

It's that simple.

## Why the Name DevIns?

When designing this language weeks ago, we intended the name as "AutoDev Input Language" (DevIn). We found no similar projects during initial searches. However, as we approached release, the Devin AI project's demo video went viral on social media.

WTF????

Given the similarity, we renamed it to DevIns (Development Instruction). Renaming involved significant code changes, documentation updates (though minimal), and adjustments for JetBrains marketplace/repositories. Due to JetBrains review mechanisms, the default file extension remains `.devin` (not yet changed to `.devins`) - we simply couldn't make all the changes.

## Next Steps

In upcoming versions, we plan to:

1. Enhance DevIns language-agent interaction (Jupyter Notebook-style?)
2. Develop more agents leveraging AutoDev's custom Agent capabilities
3. Design richer DevIns commands for broader AI-powered development tasks
4. Build cross-platform DevIns compiler

We welcome community contributions and suggestions.

`
