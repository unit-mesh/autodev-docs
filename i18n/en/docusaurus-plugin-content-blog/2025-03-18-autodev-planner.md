---
layout: default
title: AutoDev Planner
---

Recently, we've implemented a new feature in AutoDev: AutoDev Planner, a coding task planning functionality built on the DeepSeek R1 reasoning model. Of course, besides DeepSeek R1, you can also use other models.

In AutoDev Planner, AI will generate a task plan for subsequent coding based on your input and collected context. This coding plan can then be used with other instruction-following models like DeepSeek V3 to generate code, edit code, etc.

## Insight 1: Visibility of AI Coding Task Progress

When designing AI coding agents, an interesting consideration is how users perceive coding task progress - whether they should explicitly see the progress or implicitly sense it.

### Copilot Workspace: Early Explicit AI Tasks

Last year, I experimented with GitHub Copilot Workspace for frontend development. After trying dozens of small requirements (even simple i18n translations), its performance didn't meet expectations, likely limited by GPT-4's capabilities. However, Copilot Workspace's approach remains valuable:

- Brainstorm. Conduct brainstorming for user tasks
- Task. Convert tasks into editable plans
- Execute. Execute plans to generate code Pull Requests
- PR. Submit changes as Pull Requests

Users can explicitly observe AI's thinking, editing, and execution processes, though it doesn't dynamically adjust plans (based on 2024 understanding).

### Cursor: Implicit Task Automation with Retries

The popular AI coding tool Cursor provides excellent AI Editor experience:
- Automatically collects IDE context
- Edits code
- Automatically fixes lint issues and retries on errors
- ...

While users can vaguely understand AI operations through text, frequent retries quickly obscure the process.

### JetBrains Junie: Dynamic AI Task Planning

The latest AI coding tool JetBrains Junie offers dynamic task planning:
- Analyzes problems and generates task plans
- Executes tasks step-by-step with contextual awareness
- Dynamically adjusts plans during execution

Users can observe continuous plan adjustments until task completion or termination.

## Insight 2: The Potential of Reasoning Models in Task Planning

As we know, 2024's reasoning models ("deep-thinking models") have expanded possibilities. Through experiments in AutoDev Sketch (similar to Cursor Composer's auto-coding agent), we found DeepSeek R1 outperforms other domestic models in tool invocation (based on DevIns instructions) with same context. Compared to DeepSeek V3, R1 utilizes more tools.

Ideally, we should use R1 for initial tool dialogue and secondary task planning, but its slower speed (equivalent to extra API calls) remains a constraint. However, R1's advantages remain evident, and we believe others share similar experiences.

Of course, large-scale experiments haven't been conducted due to the significant effort required to build comprehensive test datasets.

## AutoDev Planner: Task Planning for Agent Programming

Based on these insights, we developed the new anthropomorphic feature: AutoDev Planner to enhance Sketch's task planning capabilities. Core features include:

- **Visible Task Planning**: Track progress through Pin and Planner ToolWindow
- **Dynamic Planning**: AI adjusts plans contextually (model-dependent)
- **Manual Task Execution**: Users can manually execute pending tasks
- **Plan Review**: Manual model invocation for plan review (automatic review avoided due to token costs)

The core concept remains simple: invoke models to generate plans and display interactions.

### Key Point 1: Reasoning Model-Based Planning

Since reasoning models differ from regular models in prompt understanding and instruction following, we redesigned prompts for R1 compatibility.

After initial context collection and reasoning model configuration, R1 generates task plans containing: tasks, steps, and progress status. These plans are then displayed to users.

### Key Point 2: Interactive Task Planning

Unlike other AI coding tools, we emphasize task planning as critical interaction:
- **Status Display**:
    - Completed tasks marked
    - Manual execution for pending tasks
- **Pin**: Pin tasks to IDE locations
- **File Interaction**: Click filenames in tasks to open files
- **Editing**: Pause and adjust unsuitable plans
- **Review**: Manual plan review invocation

Visualizing tasks enhances AI coding experience - the original intention of AutoDev Planner.

## Conclusion

AutoDev Planner is a reasoning model-based task planning feature that helps users better understand AI coding progress and adjust plans. While still imperfect, we welcome issues and PRs on GitHub.

Download the latest version: https://github.com/unit-mesh/auto-dev/releases
