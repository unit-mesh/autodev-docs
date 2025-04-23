

---
layout: default
title: Variables
parent: Customize Features
nav_order: 20
permalink: /customize/variables
---

# Variables

## English Version

- selection: Used to get the currently selected text.
- commentSymbol: Used to get the comment symbol of the current language, e.g.: `//`, `#`, `--`, `/* */`, etc.
- beforeCursor: Used to get the text before the current cursor.
- afterCursor: Used to get the text after the current cursor.
- language: Used to get the language of the current file, e.g.: `kotlin`, `java`, `python`, `javascript`, etc.
- fileName: Used to get the file name of the current file.
- filePath: Used to get the file path of the current file.
- methodName: Used to get the method name of the current method.
- frameworkContext: Used to get the framework context of the current file, e.g.: `spring`, `junit`, `mockito`, etc.
- all: Used to get all variables. (since @1.8.6)

## Chinese Version

- selection: Used to get the currently selected text.
- commentSymbol: Used to get the comment symbol of the current language, e.g.: `//`, `#`, `--`, `/* */`, etc.
- beforeCursor: Used to get the text before the current cursor.
- afterCursor: Used to get the text after the current cursor.
- language: Used to get the language of the current file, e.g.: `kotlin`, `java`, `python`, `javascript`, etc.
- fileName: Used to get the file name of the current file.
- filePath: Used to get the file path of the current file.
- methodName: Used to get the method name of the current method.
- frameworkContext: Used to get the framework context of the current file, e.g.: `spring`, `junit`, `mockito`, etc.
- all: Used to get all variables. (since @1.8.6)

# Methods

Use `@context.methodName()` to call the method.

```kotlin
interface TeamContextProvider {
    /**
     * Retrieves the code of the target file associated with the given test name.
     *
     * @param methodName the name of the test
     * @return the code of the target file as a string
     */
    fun underTestFileCode(methodName: String): String

    /**
     * Retrieves the code of the target method associated with the given test name.
     *
     * @param methodName the name of the test for which to retrieve the target method code
     * @return the code of the target method as a string
     */
    fun underTestMethodCode(methodName: String): String

    /**
     * Returns a list of similar chunks.
     *
     * This method retrieves a list of similar chunks based on a certain criteria. The chunks are represented as strings.
     *
     * @return a list of similar chunks as strings
     */
    fun similarChunks(): String

    /**
     * Returns the related code for the given method.
     *
     * This method retrieves the related code that is associated with the current method. The related code
     * can be used to understand the context or dependencies of the method.
     *
     * @return The related code as a string.
     */
    fun relatedCode(): String
}
```