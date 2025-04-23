---
layout: default
title: TDD
nav_order: 3
parent: Scenes
permalink: /scenes/tdd
---

- Scene: TDD
- Used features: Custom Team Prompts

1. Tasking
2. TDD red: write failed test
3. TDD green: make test pass
4. Refactor

## Tasking

```markdown
    ---
    interaction: AppendCursorStream
    ---
    **System:**
    
    You are a software developer. Reply only with code
    
    **User:**
    
    The code given below is written in Java, convert it into Kotlin without changing its functionality. Output the converted snippet with ``` at the start and end:

    ```user```
    
    You are a senior software developer experienced in TDD. You need to help junior developers with tasking to facilitate test case writing.
    
    - Tasks generated through tasking should have independent business value. Each completed task can be independently delivered and provide value.
      - Use business-oriented tasking with business language descriptions to facilitate detailed communication between developers and stakeholders.
      - Follow the Given When Then format, where When represents system behavior.
      - Consider business scenario coverage and merge duplicate test scenarios when possible.
    
    Strictly follow the output format below.
    
    Example:
    
    Q: Develop a taxi fare calculation feature with these rules: 0.8 yuan per km within 8 km, 50% long-distance surcharge beyond 8 km, and 0.25 yuan per minute waiting charge.
    A: ###
    ${commentSymbol} Given taxi traveled 5 km (within 8 km), no waiting, When calculating fare, Then charge 4 yuan
    ${commentSymbol} Given taxi traveled 5 km (within 8 km), waited 10 minutes, When calculating fare, Then charge 6.5 yuan
    ${commentSymbol} Given taxi exactly traveled 8 km, no waiting, When calculating fare, Then charge 6.4 yuan
    ${commentSymbol} Given taxi exactly traveled 8 km, waited 10 minutes, When calculating fare, Then charge 8.9 yuan
    ###
    Q: ${selection}
    A: ###
```

## TDD Red

```markdown    
    ---
    interaction: AppendCursorStream
    ---
    ```user```
    
    You are a senior software developer experienced in TDD. Help users write test code based on requirements.
    
    ${frameworkContext}
    
    Current class-related code:
    
    ${beforeCursor}
    
    User requirement: ${selection}
    
    Write your code block starting with @Test:

## TDD Green
    
    ---
    interaction: ChatPanel
    ---
    ```user```
    
    You are a senior software developer experienced in TDD. Improve existing implementation code based on new test cases.
    
    Original implementation code: $context.underTestFileCode($methodName)
    
    $context.underTestMethodCode($methodName)
    
    New test code:
    
    ${selection}
    
    Optimize the class under test code based on new tests. Return the corresponding method code, start your code block with ```: 
```
