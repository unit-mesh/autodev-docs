---
title: AI 友好的问题 Gemini
---

## **I. 引言：提示工程的兴起与挑战 (Introduction: The Rise and Challenges of Prompt Engineering)**

生成式人工智能（Generative AI），特别是大型语言模型（LLM）和图像生成模型，正以前所未有的速度渗透到个人生活和企业运营的各个层面 1。这些技术能够理解自然语言输入（称为“提示”，Prompt），并生成文本、图像、代码乃至更复杂的内容，展现出巨大的效率提升和创新潜力 1。用户只需通过日常语言提问，便可与 AI 进行交互，解决从信息检索到内容创作的各种问题 1。

然而，生成式 AI 的输出质量在很大程度上取决于输入提示的质量 3。模糊、宽泛或结构不良的提示往往导致 AI 生成通用、不相关甚至错误的“幻觉”式回应 4。为了充分释放 AI 的潜能，用户需要掌握有效提问的艺术与科学，这一领域被称为“提示工程”（Prompt Engineering）2。提示工程不仅是设计和开发提示的过程，更涵盖了理解 LLM 能力与局限性、优化交互策略以获得高质量、相关且可靠输出的系列技能 2。

本报告旨在深入探讨在生成式 AI 时代，人类如何向 AI 提出有效问题的核心要素、策略与最佳实践。通过分析构成有效提示的关键组成部分、针对不同任务的提问技巧、高级提示技术以及常见误区，本报告将为用户提供一套系统的指南，以期提升人与 AI 交互的效率和效果。

## **II. 有效 AI 提示的核心构成要素 (Core Components of an Effective AI Prompt)**

研究表明，一个精心设计的 AI 提示通常包含若干关键要素，这些要素共同作用，引导 AI 模型准确理解用户意图并生成符合期望的输出。虽然并非所有提示都需要包含全部要素，但理解并善用这些要素是提升提示效果的基础 10。

* **清晰度与具体性 (Clarity and Specificity):**
  * **重要性:** 这是有效提示的基石 9。模糊不清的指令是导致 AI 输出质量低下的首要原因之一 4。AI 并非具备读心术，它依赖于提示中明确、无歧义的语言来理解任务 7。具体性则要求提供足够的细节和约束，减少 AI 的解释空间，从而引导其产生更精确、更有针对性的回应 4。
  * **方法:** 使用直接、简洁的语言 17。避免使用行话或过于复杂的术语，除非目标受众或任务本身需要 14。明确指出期望 AI 执行的操作、涉及的主题、范围以及任何限制条件 13。
  * **示例:** 对比模糊提示“告诉我关于海洋的信息”与具体提示“概述世界主要海洋及其独特特征”9。另一个例子，将“写点关于气候变化的东西”改进为“写一篇 500 字的文章，讨论气候变化对沿海社区的影响”22。
  * **深层含义:** 清晰度和具体性直接关系到 AI 能否准确捕捉用户的核心需求。AI 模型基于模式匹配工作 24，清晰具体的指令提供了明确的模式供其遵循，减少了因理解偏差而产生的无效计算或生成。
* **上下文与背景信息 (Context and Background Information):**
  * **重要性:** AI 模型缺乏人类的常识和实时经验，它们的回应基于训练数据和当前提示 14。提供上下文信息，如同为 AI 的推理和生成过程设定了舞台，能够显著提升回应的相关性和准确性 5。
  * **方法:** 包含与任务相关的背景事实、数据、用户情况、先前对话摘要或特定文档来源 17。定义关键术语或概念 22。使用分隔符（如 \#\#\# 或 """）清晰地将指令与上下文信息分开 17。
  * **示例:** 无上下文的提示如“分析这份财务报告”，效果远不如包含上下文的提示：“根据随附的财务报告，分析公司过去五年的盈利能力”22。提供背景事实：“考虑到自前工业时代以来，全球温度上升了 1 摄氏度，请讨论海平面上升的潜在影响”22。
  * **深层含义:** 上下文信息为 AI 的生成提供了“锚点”，确保其输出不仅在内容上相关，而且在视角和适用性上也符合用户的具体情境。用户在提问时，应主动思考 AI 可能缺乏哪些特定场景信息，并通过上下文明确提供，以弥合 AI 通用知识与用户特定需求之间的鸿沟 18。
* **指令与任务定义 (Instruction and Task Definition):**
  * **重要性:** 提示的核心在于告知 AI 需要执行的具体动作或达成的目标 10。指令的模糊性会导致 AI 的努力方向错误，而清晰的指令则确保 AI 专注于预期的操作 3。
  * **方法:** 使用明确的行动动词，如“撰写”、“总结”、“创建”、“列出”、“分析”、“翻译”、“分类”等，来指定期望的操作 11。对于复杂的任务，应将其分解为更小、更简单的步骤（详见后续章节）7。
  * **示例:** “撰写项目符号列表，总结所附研究论文的主要发现”22。 “分析用户反馈以识别关键要点”26。
  * **深层含义:** 指令是驱动 AI 行动的引擎。动词的选择直接影响 AI 进行的处理类型（例如，“总结”侧重压缩信息，“分析”侧重识别关系，“创建”侧重生成新内容）。清晰、可操作的指令减少了 AI 推断用户意图的需要，从而降低了执行错误任务的风险。用户应仔细选择行动动词并清晰陈述目标，以确保 AI 的计算资源被导向正确的方向 22。
* **角色设定 (Persona/Role Assignment):**
  * **重要性:** 指示 AI 扮演特定的角色或身份（例如，专家、助手、特定人物），可以有效引导其回应的语气、风格、专业深度和视角 3。
  * **方法:** 在提示中明确赋予 AI 一个角色。例如，“假设你是一位经验丰富的营销顾问...”18，或“你是一位专门研究伯罗奔尼撒战争的资深历史学家...”40。
  * **示例:** “扮演网络安全专家的角色评估这段代码”40。 “你是一名医生。根据以下症状，诊断病人”11。
  * **深层含义:** LLM 的训练数据包含了由各种专业人士和角色撰写的大量文本 24。在提示中指定角色，相当于激活了模型中与该角色相关的知识、词汇和风格模式 4。这如同一个强大的上下文过滤器，引导 AI 采用合适的口吻、专业水平和视角来完成任务。用户可以通过战略性地分配角色，显著塑造输出内容的特性和相关性，使 AI 的行为更像一个特定领域的专家或助手 4。
* **格式要求 (Format Specification):**
  * **重要性:** 明确期望的输出结构（如列表、表格、代码块、JSON 对象、邮件格式等）对于确保 AI 生成的内容易于后续使用和程序化解析至关重要 4。
  * **方法:** 直接要求特定的输出格式（例如，“以项目符号列表形式呈现”，“生成 JSON 格式的数据”）。指定长度限制（例如，“不超过 500 字”，“三个段落”）。通过示例（少样本提示）清晰地展示期望的格式 17。
  * **示例:** “以项目符号列表形式总结...”17。 “输出应为包含以下列的表格格式：| 特征 | 工具 A | 工具 B |”18。 “期望格式：公司名称：\<逗号分隔的公司名称列表\> 人名：-| |- 特定主题：-| |- 一般主题：-| |-”17。
  * **深层含义:** AI 的输出结构可能多种多样 4。用户通常需要特定格式的输出，以便将其整合到文档、代码库或进行进一步分析 17。在提示中直接指定格式，可以节省用户后期重新格式化的时间和精力，同时也能约束 AI 的输出结构，可能有助于提高内容的连贯性。有研究甚至表明，在少样本提示中，格式示例可能是影响结果最重要的部分 46。因此，清晰定义所需的输出格式是实现提示实用性和效率的关键一环 17。
* **语气与风格 (Tone and Style):**
  * **重要性:** 控制 AI 回应的语调（例如，正式、非正式、幽默、严肃）和写作风格（例如，学术、对话式、营销文案风格）对于确保内容符合预期的沟通目的和目标受众至关重要 3。
  * **方法:** 使用描述性形容词来指定语气和风格（例如，“采用正式、专业的语气”，“以轻松、对话的方式写作”）10。提供风格示例（少样本提示），让 AI 模仿 17。
  * **示例:** “以友好且引人入胜的语气解释这个概念”19。 “为政府提案撰写，保持正式、精确的语气，避免创意性语言”13。
  * **深层含义:** 相同的信息可以用多种不同的语气和风格来传达 13。合适的语气取决于受众和沟通目的 4。若无明确指示，AI 可能采用通用或不匹配的语气。明确指定所需语气能确保输出与用户的沟通目标一致。用户应主动定义所需的语气和风格，以保证 AI 的回应能恰当地触达目标受众 13。

## **III. 因任制宜：不同任务的提示策略 (Tailoring Prompts to the Task: Strategies for Different Needs)**

提示工程并非一成不变的公式化过程；不同的任务类型需要采用不同的提问策略才能获得最佳结果 2。理解任务目标并相应地调整提示方法是高效利用生成式 AI 的关键。

* **信息检索 (Information Retrieval):**
  * **目标:** 从 AI 的知识库中获取特定的事实、定义或数据。
  * **策略:** 核心在于精确性。应提出非常具体、清晰的问题，如同数据库查询 13。包含足够的上下文信息（如时间、地点、特定条件）来缩小搜索范围，避免歧义 4。避免使用开放式或引导创意的问题 13。
  * **示例:** 获取特定日期：“阿波罗 11 号任务在哪一年登陆月球？”13。限定地理范围：“马萨诸塞州剑bridge市哈佛园步行距离内最好的餐厅是哪家？”（避免与英国剑桥混淆）4。获取具体原因：“气候变化的主要原因是什么？”21。
  * **考量:** 此类任务旨在提取特定的事实信息 21。由于 LLM 可能产生“幻觉”或提供看似合理但不准确的信息 6，高度具体的问题能限制 AI 的发挥空间，迫使其检索目标信息，从而降低错误或无关输出的风险。因此，寻求事实答案的用户应将提示构建为精确的问题，而非开放式请求 4。
* **文本摘要 (Summarization):**
  * **目标:** 将较长的文本内容（如文章、报告、对话）压缩成包含核心信息的简短版本。
  * **策略:** 需要在简洁性和忠实原文之间取得平衡。提示应明确指定所需的摘要类型（例如，执行摘要、要点列表、段落式概述）、期望的长度（字数、段落数）、目标受众（高管、技术团队、普通读者）以及摘要的侧重点（关键发现、战略意义、行动项）17。指示 AI 关注原文的特定章节或主题 44。提供需要摘要的原文或其引用/链接 17。
  * **示例:** 指定格式和内容：“将所附研究论文的主要发现总结为项目符号列表”22。指定受众和焦点：“为高管团队创建一份摘要，侧重于最新销售报告的关键发现及其对下一季度战略的意义”10。指定长度和关注点：“将这篇市场分析报告总结为 3-5 段，重点关注关键发现、战略意义和建议行动，并突出显示同比业绩指标”44。追求极致简洁：“将此文档总结成我可以在一分钟内阅读完的内容”45。
  * **考量:** 摘要任务的核心在于信息压缩和关键点提取 21。哪些信息是“关键”取决于摘要的受众和用途 44。一份面向高管的摘要与面向技术团队的摘要在内容选择和表述上会有显著差异。因此，有效的摘要提示必须清晰定义任务参数，包括长度、格式、受众和焦点，以指导 AI 恰当地筛选和优先排序信息 13。
* **创意写作 (Creative Writing):**
  * **目标:** 生成新颖的文本内容，如故事、诗歌、剧本、广告文案、邮件草稿等。
  * **策略:** 平衡约束与自由是关键。使用开放式的问题或指令来激发 AI 的创造力 13。提供足够的“种子”信息，设定场景、角色、情节要点、所需风格（幽默、悬疑、浪漫等）和语气 18。提供风格相似的文本示例（少样本提示）或提及模仿特定作者/作品 23。可以尝试角色扮演或与 AI 进行互动式、协作式写作 43。调整模型参数（如 temperature，温度）可以增加生成结果的多样性和创意性（较高的温度通常更具创意，但也可能更随机）17。
  * **示例:** 设定主题和风格：“写一个关于龙的创意故事。这个故事要有趣并且带点讽刺意味”38。激发想象力：“想象你是一颗刚从枪中射出并击中树木的子弹。描述你的旅程，从被射出的那一刻到击中目标的那一刻”47。结合风格模仿：“写一首关于 OpenAI 的简短励志诗，重点关注最近的 DALL-E 产品发布，风格模仿 某位著名诗人 17。
  * **考量:** 创意写作旨在生成新颖、富有想象力的内容 6。AI 基于其训练数据中的模式进行创作 24。过于严格的提示会限制 AI 组合这些模式产生新意，而过于开放的提示则可能导致输出平庸 4。有效的创意提示应提供足够的结构（如主题、角色、情节框架、风格）来引导方向，但又留出空间让 AI 的“创造力”（即模式的新颖组合）得以发挥。指定语气和风格尤为重要 18。用户应提供创意的核心，定义美学边界，然后让 AI 在此范围内探索。通常需要通过迭代和微调提示来达到满意效果 38。
* **分析与推理 (Analysis and Reasoning):**
  * **目标:** 让 AI 执行逻辑推导、比较分析、因果解释、问题解决等需要思维过程的任务。
  * **策略:** 提供清晰、准确的背景数据和事实基础 18。明确定义分析的目标、需要考虑的维度或比较的方面 44。对于复杂推理，应采用高级提示技术，如思维链（Chain-of-Thought, CoT）或思维树（Tree-of-Thoughts, ToT），引导 AI 展示并遵循逐步的逻辑过程 18。将复杂问题分解为一系列更简单的子问题进行提问 7。
  * **示例:** 基于数据分析：“根据随附的财务报告，分析公司过去五年的盈利能力”22。引导逐步推理：“请逐步解释为什么电动汽车是未来，并列出三个关键点”38。使用 CoT 触发短语：“让我们一步步思考...”36。结合数据和洞察要求：“分析这份 Q4 销售数据。不要只罗列数字；请提供见解，例如我们本季度业绩出色的原因”38。
  * **考量:** 复杂的推理任务常常超出 LLM 一步到位的处理能力 36。将问题分解成小的、连续的步骤，模拟了人类的推理方式，并允许模型将计算资源集中在每一步上 36。像 CoT 或任务分解这样的提示技术，通过引导 LLM 生成中间推理步骤，显著提高了其在复杂算术、常识和符号推理任务上的表现 18。ToT 通过探索多条路径进一步增强了这一点 49。因此，对于分析或推理类任务，用户应采用这些高级技巧，而不是期望 AI 直接解决复杂问题 18。
* **代码生成 (Code Generation):**
  * **目标:** 生成新的代码片段、补全现有代码、解释代码逻辑、调试代码或翻译不同编程语言间的代码。
  * **策略:** 极其注重精确性。清晰描述所需代码的功能、预期的输入输出、使用的编程语言、依赖的库或框架 24。提供必要的上下文，如现有代码片段或目标运行环境。使用“引导词”（leading words），如在 Python 代码开头提示 import，或在 SQL 查询前提示 SELECT，以引导模型使用特定语言或模式 17。要求 AI 对生成的代码进行解释或添加注释。如果可能，提供输入输出示例或期望的代码片段（少样本提示）43。将复杂的编码任务分解成更小的功能模块进行提示 17。
  * **示例:** 指定语言和功能：“编写一个简单的 python 函数，该函数 1\. 要求我输入英里数 2\. 将英里转换为公里”17。代码补全：“让生成式 AI 完成整段代码，或者提供建议以补全现有代码的未完成语句”59。结合角色进行代码审查：“作为一名网络安全专家，评估这段代码的安全性”40。
  * **考量:** 代码必须语法正确且逻辑严谨才能运行 24。对功能或约束的模糊描述会导致生成错误或低效的代码。可能还需要遵循特定的库版本或编码规范。有效的代码生成提示必须像详细的技术规范一样，高度具体地说明编程语言、库、功能、输入/输出及任何限制。提供示例或使用引导词有助于 AI 遵循正确的语法和结构 17。对于大型项目，任务分解是必要的 43。用户应提供所有必要的技术细节，以确保 AI 产出可用且合适的代码 17。

## **IV. 高级提示技术：提升交互效果 (Advanced Prompting Techniques: Elevating Your Interaction)**

除了掌握基础的提示要素和针对特定任务的策略外，运用一系列高级提示技术能够进一步提升与生成式 AI 交互的深度和效果，尤其是在处理复杂任务和优化输出质量方面 2。

* **少样本提示 (Few-Shot Prompting: Using Examples):**
  * **原理:** 这是一种强大的技术，通过在提示中包含一个或多个具体的输入/输出示例（“样本”），来向 AI 展示期望的行为模式、输出格式或风格 4。这与“零样本提示”（Zero-Shot Prompting，即不提供示例，仅给出指令）相对 17。
  * **应用场景:** 当需要 AI 遵循特定的格式（如 JSON、表格、特定结构的文本）17、模仿某种写作风格或语气 18、执行需要精确模式匹配的任务（如数据提取、分类）17 或理解复杂指令时 11，少样本提示非常有效。
  * **关键考量:** 研究表明，示例的格式和结构对结果的影响可能比示例答案的正确性本身更重要 46。同时，示例中包含的标签（如果是分类任务）应能代表真实的标签分布 46。提供示例的数量（通常 1 个称为 One-Shot，多个称为 Few-Shot）应根据任务的复杂度来调整 11。
  * **示例:**
    * **翻译示例:** Q: I like apples. A: Me gustan las manzanas. Q: I enjoy walking. A: \[AI 应继续生成\]11。
    * **关键词提取示例:** Text 1:... Keywords 1:... \#\# Text 2:... Keywords 2:... \#\# Text 3: Keywords 3: \[AI 应继续生成\]17。
    * **风格演示示例:** 示例 1 (幽默): “这位政治人物的言语很平淡，可以治愈失眠。” 示例 2 (正式): “这位政要发表了内涵丰富且引人入胜的演讲。” 提示：“写一个句子来描述这个搞笑达人的单口相声表演。”23。
  * **价值分析:** LLM 通过识别模式来学习 24。示例为模型提供了关于期望的输入-输出关系、格式或风格的具体模式。相比仅仅用语言描述要求，向 AI 展示你想要什么（通过示例）通常更有效，特别是对于涉及特定结构、细微风格或隐含规则的任务。AI 可以从示例中推断出潜在的模式。因此，当期望的输出具有难以描述但易于展示的特定结构或风格时，用户应优先考虑使用少样本提示。示例的质量和格式一致性至关重要 46。通常建议先尝试零样本提示，如果效果不佳再引入少量样本 17。
* **思维链提示 (Chain-of-Thought (CoT) Prompting):**
  * **原理:** CoT 是一种旨在提升大型语言模型复杂推理能力的技术。它通过引导模型生成一系列中间的、连贯的推理步骤（即“思维链”），模拟人类解决问题时的思考过程，最终得出答案 18。这种引导通常通过在提示中提供包含思维链的少样本示例，或者使用简单的指令性短语（如“让我们一步步思考 / Let's think step-by-step”）来实现 19。
  * **优势:** CoT 能够将复杂问题分解为可管理的小步骤，显著提高模型在算术推理、常识推理和符号推理等任务上的准确性 54。同时，生成的思维链为模型的推理过程提供了一个可解释的窗口，有助于理解和调试模型的行为 38。
  * **局限性:** CoT 的效果通常只在足够大的语言模型（如参数量达到千亿级别）上才显著体现，对于较小模型可能效果不佳甚至产生负面影响 54。此外，CoT 并不保证生成的推理步骤一定是正确或符合逻辑的 54。
  * **示例:** 解决数学应用题时，提示中包含的示例不仅给出最终答案，还展示了解题步骤，如：“罗杰开始有 5 个球。2 罐各有 3 个网球是 6 个网球。5 \+ 6 \= 11。答案是 11。”54。使用零样本 CoT 指令：“让我们一步步思考这个问题...”49。
  * **价值分析:** LLM 在直接面对需要多步推理的复杂任务时常常失败 54。人类解决此类问题时会将其顺序分解 54。通过提示让 LLM 显式地生成这些中间步骤（思维链），迫使模型进行分解，并将计算资源分配给每个步骤，从而模拟了一个更稳健的推理过程 54。CoT 对于需要逻辑演绎或计算超出简单信息检索或文本生成的任务来说，是一项关键技术。它解锁了大型模型中涌现出的推理能力 54。
* **思维树提示 (Tree-of-Thoughts (ToT) Prompting):**
  * **原理:** ToT 是 CoT 的一种泛化和扩展。它允许 AI 在解决问题的过程中，探索和评估多个并行的推理路径或“想法分支”，形成一个“思维树”结构，并从中选择最有希望达到最终解决方案的路径 34。
  * **机制:** ToT 框架通常包含两个关键步骤：1) **思想生成 (Propose):** 在树的某个节点（代表一个部分解决方案或中间状态），模型被提示生成多个可能的下一步“想法”或推理步骤。2) **思想评估 (Evaluate):** 模型（或外部机制）评估这些生成的想法的价值或可行性，判断它们引导向最终解决方案的可能性（例如，评估为“确定/可能/不可能”）50。这个过程与搜索算法（如广度优先搜索 BFS 或深度优先搜索 DFS）相结合，以系统地探索树结构，允许模型进行前瞻性思考和在必要时进行回溯 50。
  * **优势:** 相比于 CoT 的单一线性路径，ToT 通过探索多条路径，在解决需要规划、探索或策略性前瞻的复杂问题时表现出更强的鲁棒性和更高的成功率 38。它增强了 AI 的决策能力和问题解决能力。
  * **局限性:** ToT 的计算成本较高，因为它需要生成和评估更多的中间步骤 50。同时，存在潜在的“过拟合”风险，即模型可能过度专注于某个分支而忽略全局最优解 50。实现和有效引导 ToT 过程也相对复杂 50。
  * **示例:** 解决“24 点游戏”（用四个数字通过加减乘除得到 24）是一个典型的 ToT 应用场景，模型需要探索不同的运算组合 51。在创意写作任务中，ToT 可用于生成和评估多个故事线或段落计划 53。在战略规划问题中，ToT 可以探索和分析不同策略选项的优缺点 49。一个简化的 ToT 提示示例可能是：“想象有三位不同的专家正在回答这个问题。所有专家都会写下他们思考的第一步，然后分享给小组。然后所有专家继续下一步，以此类推。如果任何专家在任何时候意识到自己错了，他们就会离开。问题是...”51。
  * **价值分析:** CoT 遵循单一推理路径，如果早期步骤出错则难以纠正 51。复杂问题往往存在多条有效解决路径或需要探索替代方案。ToT 通过允许模型在每个阶段生成多个潜在的“想法”或下一步骤来解决这个问题，从而创建分支 50。模型随后评估这些分支，修剪掉不太有希望的，并进一步探索更好的选项，这模仿了人类在解决问题时涉及探索和比较的更审慎的方法 50。因此，对于解决方案路径不明确或需要探索和比较多种可能性的任务，ToT 提供了更强的鲁棒性和问题解决能力，尽管计算成本更高 50。
* **任务分解 (Task Decomposition):**
  * **原理:** 这是一种基础且广泛适用的策略，指将一个大型、复杂或多方面的任务，主动分解成一系列更小、更具体、更易于管理的子任务。这些子任务可以独立处理，也可以按逻辑顺序依次处理 7。
  * **优势:** 分解任务可以显著提高 AI 输出的准确性、相关性和完整性 33。它使得用户能够对每个步骤进行更精细的控制和指导，便于在过程中发现并纠正错误 33。同时，它有助于克服 AI 模型在处理超长输入或极端复杂指令时的限制 7。
  * **方法:**
    * **序贯处理 (Sequential Processing):** 当子任务之间存在依赖关系时，按顺序执行。前一个子任务的输出作为后一个子任务的输入或上下文 34。
    * **并行处理 (Parallel Processing):** 当子任务相对独立时，可以同时或分别对它们进行提问，最后再将结果整合起来 34。
    * **分层分解 (Hierarchical Decomposition):** 可能包含一个初始的规划阶段，先确定子任务结构，然后再逐一执行 34。
  * **示例:**
    * **撰写长篇报告:** 先让 AI 生成报告大纲，然后针对大纲中的每个章节分别提问，要求 AI 撰写详细内容 13。
    * **复杂数据分析:** 第一步，要求 AI 清洗和预处理数据；第二步，要求 AI 对处理后的数据进行特定分析；第三步，要求 AI 将分析结果可视化或生成摘要报告 35。
    * **构建复杂图表（如 ASCII 树状图）:** 第一步，向 AI 展示期望的图表样式和规则；第二步，要求 AI 仅生成图表的根节点和第一层分支；第三步，基于已生成的部分，要求 AI 扩展下一层级，依此类推 33。
  * **价值分析:** AI 模型在处理过长输入或一次性处理高度复杂、多步骤的任务时存在局限性，准确性可能会下降 7。将任务分解为更小的逻辑单元，减轻了 AI 在单个提示中需要处理的复杂性 33。这使用户能为每个子任务提供更集中的指令，并在进入下一步之前审查和修正每个阶段的输出，从而获得更准确、更可控的最终结果 33。因此，对于任何看起来对于单个提示来说过于庞大或复杂的任务，将其分解为顺序或并行的子提示是一种极其有效的策略，可以提高质量和可管理性 7。
* **其他实用技巧 (Other Useful Techniques):**
  * **提示链 (Prompt Chaining):** 这与任务分解中的序贯处理密切相关，指的是将多个提示连接起来，其中后续提示明确地建立在先前提示的输出或对话历史之上，形成一个连贯的多步骤工作流或对话 13。例如，先问一个问题，然后根据 AI 的回答提出追问或要求进一步阐述。
  * **使用分隔符/标签 (Using Delimiters/Tags):** 为了提高提示的结构清晰度，特别是在包含多个组成部分（如指令、上下文、示例、输入数据）时，使用明确的分隔符（如 \#\#\# 或 """）或结构化标签（如 XML 标签 \<instruction\>, \<context\>, \<example\>）来区分提示的不同部分，有助于 AI 准确解析 17。
  * **预填充回应 (Prefilling Responses):** 在提示的末尾提供期望回应的开头部分（例如，写完问题后，另起一行写上 "A:" 或 "Response:"），可以引导 AI 遵循特定的回答格式或模式继续生成 37。
  * **迭代优化 (Iterative Refinement):** 强调提示工程是一个动态的、反复试验的过程 7。很少能一次就得到完美的提示。用户应该准备好根据 AI 的初步回应，不断地修改措辞、增删信息、调整结构或尝试不同的技术，直至获得满意的结果。
  * **肯定式指令 (Positive Framing):** 指导 AI 去“做什么”，而不是“不要做什么”17。例如，与其说“不要使用被动语态”，不如说“请使用主动语态”。这通常能让 AI 更清晰地理解目标。

## **V. 驾驭不同 AI 模型：语言模型 vs. 图像生成器 (Navigating Different AI Landscapes: LLMs vs. Image Generators)**

生成式 AI 的范畴并非铁板一块。不同类型的模型，如主要处理文本的大型语言模型（LLM）和专注于视觉内容创建的图像生成模型，其工作原理、能力侧重以及对提示的响应方式存在显著差异 24。因此，针对不同模型优化提示策略至关重要。

* **大型语言模型 (LLM) 提示要点 (Prompting Large Language Models (LLMs)):**
  * **核心能力:** LLM 的核心在于理解、生成、转换和推理基于文本的信息 1。它们擅长回答问题、总结文本、撰写文章、生成代码、进行对话等任务。
  * **关键提示要素:** 对于 LLM，提示的有效性高度依赖于前述的核心要素：清晰具体的指令、充足的上下文、明确的任务定义、合适的角色设定、期望的输出格式以及恰当的语气风格（详见第二节）。逻辑结构和分步指导对于复杂任务尤为重要。
  * **高级技巧应用:** 思维链（CoT）、思维树（ToT）和任务分解等高级技术对于提升 LLM 在复杂文本处理、分析和推理任务上的表现效果显著 33。
  * **典型应用示例:** 总结研究报告 44，起草商务邮件 13，生成 Python 函数 17，解释量子计算概念 22，回答关于历史事件的问题 40。
* **图像生成模型提示技巧 (Prompting Image Generation Models):**
  * **核心能力:** 图像生成模型的核心任务是将文本描述（提示）转化为视觉图像 24。
  * **关键提示要素:** 图像提示更侧重于视觉元素的描述：
    * **主体 (Subject):** 清晰描述图像的核心内容，如“一只金毛猎犬”、“一座未来城市”、“一个穿着宇航服的猫”31。
    * **描述 (Description):** 添加关于主体的细节，如动作（“正在奔跑”）、状态（“睡着了”）、环境（“在雪山之巅”）、氛围（“神秘的”、“宁静的”）、与其他元素的交互等 31。
    * **风格/媒介 (Style/Medium):** 这是图像提示中极为重要的部分。需要指定期望的艺术风格（如“印象派”、“赛博朋克”、“水墨画”、“照片写实主义”）、模仿特定艺术家（“梵高风格”、“宫崎骏风格”）、使用的媒介（“油画”、“水彩”、“3D 渲染”、“铅笔素描”）31。
    * **构图/光照/色彩 (Composition/Lighting/Color):** 描述画面布局和视角（“特写镜头”、“广角”、“低角度拍摄”）、光照效果（“电影感光照”、“黄金时刻”、“柔和的阴影”）、色彩方案（“暖色调”、“单色”、“霓虹灯色彩”）31。
    * **质量/细节词 (Quality/Detail Keywords):** 常用的词语包括“高度详细 (highly detailed)”、“逼真 (photorealistic)”、“超现实 (hyperrealistic)”、“辛烷值渲染 (octane render)”、“虚幻引擎 (unreal engine)”、“4k”、“8k”等，用以提升图像的视觉质量和细节感。
  * **平台特定功能与参数:** 不同的图像生成平台提供了额外的控制方式：
    * **Midjourney:** 以其独特的艺术风格著称。用户可以通过参数控制，如 \--ar 指定宽高比（例如 \--ar 16:9 表示宽屏），--stylize 或 \--s 控制艺术化程度（数值越高越风格化），--chaos 增加结果的多样性和随机性 63。较新版本（如 V6）对自然语言描述的理解更好 65。
    * **DALL-E:** 擅长处理创意性、概念性的提示，能较好地理解复杂的场景描述，并在图像中生成连贯的文字 63。可以通过 gen\_id 参数在后续生成中保持风格的一致性 67。
    * **Stable Diffusion:** 作为开源模型，提供了极高的灵活性和定制化能力。用户可以调整“采样步数 (sampling steps)”和“CFG scale (Classifier-Free Guidance Scale)”等参数来影响生成过程 63。其强大的社区支持提供了大量的自定义模型和工具 64。Stable Diffusion 对“负面提示”的支持尤为突出 63。
  * **负面提示 (Negative Prompts):**
    * **作用:** 这是图像生成中常用且重要的技术，用于明确告知 AI *不*希望在生成的图像中看到哪些元素、特征、风格或缺陷 68。例如，排除模糊不清的细节、解剖学错误（如多余的手指）、不想要的物体（如水印、文字）、特定的艺术风格（如生成写实照片时排除“卡通”风格）等。
    * **方法:** 大多数支持负面提示的平台（如 Stable Diffusion 的界面）会提供一个专门的输入框。用户在此框中列出要避免的关键词或短语 68。有些工具可能使用特定语法，如 Layer AI 中用方括号 \[word\] 表示负面提示 71。
    * **常用负面提示词:** ugly, blurry, deformed, bad anatomy, extra limbs, extra fingers, text, watermark, signature, username, low quality, normal quality, worst quality, jpeg artifacts, cartoon, 3d, render, painting, sketch, monochrome, disfigured, mutated, fused fingers, poorly drawn hands, poorly drawn face, out of frame, cropped 等等，具体选择取决于要避免的问题 69。
    * **最佳实践:** 从一组通用的、旨在提高基础质量的负面提示（如 worst quality, low quality, blurry）开始 69。根据生成结果中出现的不想要的内容，有针对性地添加具体的负面提示词 69。避免在负面提示中堆砌过多不相关的词语 68。将负面提示与精确的正面提示结合使用效果最佳 68。可以尝试调整负面提示词的权重（如果平台支持）以进行微调 69。同样需要迭代测试，一次只调整一个负面提示词，观察其效果 68。
  * **示例:**
    * **正面提示:** “一座栖息在山顶上的古老维多利亚式宅邸，笼罩在浓雾之中，具有戏剧性的光照效果和细节丰富的建筑，采用柔和的色调”63。
    * **正面提示:** “概念艺术南瓜，数字艺术品，插画风格，哑光绘画，高度详细”；**负面提示:** “\[恐怖, 脸\]”（用于避免生成万圣节鬼脸南瓜）71。
    * **正面提示:** “一个女孩在踢足球”；**负面提示:** “模糊, 变形, 多余肢体, 画质差” (通用质量提升)。
  * **对比分析:** 图像提示本质上是描述性的、视觉化的，侧重于与外观、风格和构图相关的名词和形容词。而 LLM 提示则更常关注动词、逻辑结构和信息内容。负面提示在图像生成中的重要性和发展程度远超其在 LLM 中的应用。LLM 主要通过肯定式指令来规避不想要的内容，而图像生成则广泛依赖负面提示来精确控制视觉输出。CoT/ToT 等侧重逻辑推理的技术对图像生成本身直接应用较少，尽管它们可能被用来辅助生成复杂的图像提示文本。用户在不同类型的模型间切换时，必须显著调整其提问风格：对图像使用丰富的视觉描述语言，对文本使用结构化、逻辑清晰的指令 24。
* **语言模型与图像生成模型提示技术对比 (Comparison Table: Prompting Techniques for LLMs vs. Image Generators)**  
  为了更清晰地展示两类模型在提示策略上的差异，下表进行了总结：

| 特征 (Feature)                | 大型语言模型 (LLM) Prompting  | 图像生成模型 (Image Gen) Prompting                |
|:----------------------------|:------------------------|:--------------------------------------------|
| **主要目标 (Goal)**             | 生成/理解/转换文本、推理、执行指令 19   | 将文本描述转化为视觉图像 24                             |
| **核心元素 (Core Elements)**    | 指令、上下文、角色、格式、语气 10      | 主体、描述、风格、媒介、构图、光照、色彩 31                     |
| **关键技能 (Key Skills)**       | 逻辑构建、清晰表达、上下文提供 13      | 视觉描述能力、艺术/摄影术语知识 24                         |
| **示例作用 (Role of Examples)** | 演示格式、风格、复杂任务模式 17       | 主要用于风格迁移或特定对象生成 (较少用于基本提示)                  |
| **高级技巧 (Adv. Techniques)**  | CoT, ToT, 任务分解 33       | 参数调整 (e.g., \--ar, \--stylize), 权重, 图像参考 63 |
| **负面提示 (Negative Prompts)** | 较少使用，主要通过肯定式指令实现 17     | 非常重要，用于排除缺陷、风格、对象 68                        |
| **迭代方式 (Iteration)**        | 修改提示文本、调整指令、增加上下文/示例 19 | 修改描述词、调整参数、使用负面提示、图像编辑 31                   |

\*\*表格价值说明:\*\* 用户查询明确要求比较针对不同模型的提问技巧。此表格提供了一个简洁、结构化的对比，突出了两类模型在目标、核心要素、所需技能、高级技术应用、负面提示重要性以及迭代方式上的关键差异。这有助于用户快速理解并根据所使用的 AI 类型调整其提问策略，直接回应了查询的核心需求，提升了报告的实用价值。

## **VI. 常见误区与规避方法 (Common Pitfalls and How to Avoid Them)**

尽管掌握了有效的提示要素和技巧，用户在与生成式 AI 交互的实践中仍可能遇到各种问题，导致结果不理想。识别这些常见的误区并了解规避方法，对于持续优化人机交互至关重要 5。

* **模糊性与缺乏具体性 (Ambiguity and Lack of Specificity):**
  * **问题表现:** 提出的提示过于宽泛、笼统或含义不清，没有明确指出期望 AI 关注的具体方面或达成的具体目标 4。例如，仅仅询问“如何改进我的业务？”7。
  * **导致后果:** AI 只能进行猜测，往往给出非常通用、缺乏针对性、甚至偏离主题的回答，对用户几乎没有实际价值，浪费时间和计算资源 5。
  * **规避方法:** 始终追求精确性。使用明确的语言，清晰定义任务目标、范围和期望的输出细节 7。
* **上下文不足 (Insufficient Context):**
  * **问题表现:** 提示中未能提供足够的背景信息，如用户的具体情况、任务的前提条件、相关的先前信息或约束条件 5。
  * **导致后果:** AI 缺乏必要的场景理解，只能依赖其通用的训练数据进行回应，导致答案可能不准确、不适用或与用户实际情况脱节 5。例如，在没有提供公司背景的情况下询问产品改进建议 16。
  * **规避方法:** 在提示中包含所有相关的背景信息、目标受众特征、环境约束以及任何有助于 AI 理解具体情境的细节 16。
* **指令过于复杂或冗长 (Overly Complex or Verbose Instructions):**
  * **问题表现:** 在单个提示中试图包含过多的问题、要求或细节，使得提示变得冗长且难以解析 5。例如，一个提示同时询问 CRM 类型、优劣比较、选择标准、定价和替代方案 7。
  * **导致后果:** AI 模型可能会感到困惑，无法准确理解所有指令，可能遗漏部分要求，或者给出结构混乱、不连贯的回应 5。
  * **规避方法:** 遵循任务分解原则。将复杂的大任务拆分成一系列更小、更单一焦点的子提示，逐一进行提问 5。保持每个提示简洁明了 9。
* **忽视 AI 的能力边界与局限性 (Ignoring AI Capabilities and Limitations):**
  * **问题表现:** 对 AI 提出超出其能力范围的要求，例如询问实时发生的事件信息（AI 训练数据有截止日期）、要求其表达主观意见或情感、预测遥远的未来，或者期望它能像人类一样进行无懈可击的常识推理或理解微妙的语境 5。
  * **导致后果:** AI 可能会“一本正经地胡说八道”（产生“幻觉”），提供过时、不准确甚至完全捏造的信息 5。
  * **规避方法:** 了解所使用的 AI 模型的基本原理和局限性（例如，训练数据的时效性、不具备真正意识或理解力）。将提示聚焦于 AI 擅长的任务，如信息总结、复杂概念解释、模式识别、内容生成等 5。对于 AI 生成的关键信息，务必进行人工的事实核查和验证 4。
* **缺乏迭代与优化意识 (Not Iterating or Refining):**
  * **问题表现:** 在第一次尝试提示后，如果结果不理想，用户便轻易放弃，而不尝试修改提示、追问或从不同角度重新提问 5。
  * **导致后果:** 错失了通过逐步调整和优化提示来获得更好结果的机会，未能充分挖掘 AI 的潜力 20。
  * **规避方法:** 将提示工程视为一个持续的对话和实验过程 14。将 AI 的初步回应视为反馈，据此调整提示的措辞、增加或减少细节、改变提问方式或尝试不同的提示技术，直至达到满意效果 7。
* **无效使用否定指令 (Ineffective Use of Negative Instructions):**
  * **问题表现:** 对于 LLM，过度依赖否定指令（告诉 AI 不要什么）而不是清晰地说明要做什么 17。对于图像生成，负面提示使用不当，如包含太多无关词语、权重设置不合理或未能针对性解决问题 68。
  * **导致后果:** LLM 可能仍然会生成不希望出现的内容，因为肯定性指令通常更有效 17。图像生成的效果可能因为无效的负面提示而未得到改善，甚至变差 68。
  * **规避方法:** 与 LLM 交互时，优先使用肯定性框架来描述期望的输出 17。在图像生成中使用负面提示时，遵循其特定的最佳实践，确保其简洁、相关并有针对性 68。
* **安全与隐私风险意识不足 (Insufficient Awareness of Security and Privacy Risks):**
  * **问题表现:** 在与公开或第三方 AI 服务交互时，用户在提示中无意或不慎输入了敏感信息，如公司内部数据、客户信息、个人身份信息（PII）、商业秘密等 7。
  * **导致后果:** 这些数据可能被服务提供商用于模型训练，存在数据泄露的风险，或者违反数据保护法规（如 GDPR）和公司政策 7。
  * **规避方法:** 建立严格的规则，绝对避免在提示中包含任何敏感或机密信息 7。如果需要讨论涉及敏感数据的场景，应使用脱敏的、假设性的例子来代替。了解并遵守组织关于使用 AI 工具的数据安全和隐私政策 29。

**内在关联:** 许多常见的提示错误源于用户未能准确把握与 AI 交互的本质。一方面，用户可能将 AI 过度拟人化，期望它能像人一样理解模糊指令或无需上下文就能领会意图（导致模糊性和上下文不足）。另一方面，用户也可能将其视为简单的执行工具，期望一次性完美输出，而忽略了迭代优化和 AI 自身局限性的重要性。安全问题则是一个经常被忽视但至关重要的实践层面。避免这些陷阱需要一种平衡的心态：既要进行精确、细致的沟通（明确性、上下文、分解任务），又要保持迭代实验的精神，并对 AI 的能力和风险有清醒的认识（了解局限、批判性评估、注意安全）7。

## **VII. 最佳实践：打造高质量 AI 问题 (Best Practices: Crafting Effective AI Questions)**

基于对有效提示要素、不同任务策略、高级技术及常见误区的分析，可以总结出一套旨在最大化生成式 AI 效用的最佳实践指南。遵循这些原则有助于用户系统性地构建高质量问题，从而获得更可靠、更相关、更有价值的 AI 回应。

* **综合指南与清单 (Synthesized Checklist/Guidelines):**
  * **1\. 明确目标与任务 (Define Goal & Task):** 在开始提问前，清晰地定义你希望 AI 完成的具体任务是什么，以及你期望达到的最终目标 22。目标越明确，提示就越有方向。
  * **2\. 力求清晰与具体 (Be Clear & Specific):** 使用精确、无歧义的语言。包含所有必要的细节、参数、约束条件和范围限定 17。细节程度应与任务复杂度相匹配。
  * **3\. 提供充足上下文 (Provide Context):** 给予 AI 理解任务背景所需的所有相关信息，包括场景、先前知识、数据来源、目标受众等 18。
  * **4\. 结构化提示内容 (Structure the Prompt):** 合理组织提示的各个部分。将核心指令放在开头通常更有效 17。使用分隔符（如 \#\#\#, """）或标签（如 XML）来区分指令、上下文、示例和输入数据，提高可读性 17。
  * **5\. 设定角色与视角 (Assign Persona/Role):** 如果需要特定的口吻、专业水平或视角，明确指示 AI 扮演相应的角色 4。
  * **6\. 指定格式与风格 (Specify Format & Tone):** 明确要求输出的格式（列表、表格、JSON、邮件等）和长度，以及期望的语气（正式、友好、幽默等）和风格（学术、对话式等）17。
  * **7\. 善用示例（少样本）(Use Examples \- Few-Shot):** 当描述复杂格式、风格或任务模式困难时，提供一到多个具体的输入/输出示例来指导 AI 17。
  * **8\. 采用肯定式指令 (Use Positive Framing):** 尽量告诉 AI 要“做什么”，而不是“不要做什么”，尤其对于 LLM 17。
  * **9\. 分解复杂任务 (Decompose Complex Tasks):** 将大型或多步骤的任务分解为更小、更易于管理的子任务，然后逐步或并行地提问 7。
  * **10\. 拥抱迭代与优化 (Iterate & Refine):** 将提示工程视为一个实验过程。准备好根据 AI 的回应进行多次调整和改进，直至获得满意结果 7。
  * **11\. 了解并适应模型 (Know Your Model):** 考虑你正在使用的具体 AI 模型（如 GPT-4, Claude, Midjourney V6, Stable Diffusion）的特性、优势和局限性 5。尽可能使用最新、能力最强的模型版本 17。
  * **12\. 注意数据安全 (Be Secure & Mind Privacy):** 绝对避免在提示中输入任何敏感、机密或个人身份信息 7。
* **实验与持续学习的重要性 (Importance of Experimentation and Continuous Learning):**
  * 提示工程本质上是一门实践性很强的学科，其精髓在于动手尝试和经验积累，而非仅仅依赖理论知识 18。AI 模型和提示技术本身也在快速发展和演进 1。
  * 对于同一任务，并不存在一个放之四海而皆准的“完美”提示。最佳提示往往取决于具体的模型版本、任务的细微差别，甚至 AI 生成过程中的随机性。因此，用户必须采取实验性的方法，将提示构建视为一个包含假设（设计提示）、测试（生成结果）、评估（审查输出）和改进（修改提示）的循环过程 20。
  * 鼓励用户大胆尝试不同的措辞、结构、参数设置和高级技术组合 20。记录和分享成功的提示（例如，建立个人或团队的提示库）对于知识积累和效率提升非常有价值 3。有效的生成式 AI 应用需要持续的学习和适应，用户应将提示视为一项需要通过实践和实验来磨练的技能，并对新技术和模型能力保持关注 2。
* **批判性评估 AI 输出 (Critically Evaluating AI Output):**
  * 生成式 AI 是强大的辅助工具，但绝非绝对可靠的信息来源或决策者。AI 模型可能会生成听起来十分可信但实际上是错误、带有偏见或完全捏造的内容（即“幻觉”）4。这是其基于统计模式预测而非真正理解或实时知识检索的工作方式所固有的特性 6。
  * 因此，对 AI 的输出进行严格的审查、事实核查和编辑是不可或缺的步骤，尤其是在用于重要决策、对外发布或依赖其准确性的场景中 4。完全依赖 AI 输出而不加验证会带来巨大的风险。
  * 人类的专业知识、判断力和批判性思维在验证、修正和完善 AI 生成内容方面仍然扮演着核心角色 25。用户必须将 AI 的输出视为初稿或起点，运用自身的专业知识和判断力对其进行评估、纠正和润色，然后才能采纳或发布 4。保持批判性思维，对 AI 的能力和局限性有现实的认识，是负责任地使用这项技术的关键。

## **VIII. 结论：提示工程塑造人机交互的未来 (Conclusion: The Future of Human-AI Interaction through Prompting)**

本报告系统地分析了在生成式人工智能时代，如何通过有效的提问（即提示工程）来优化人机交互。研究表明，高质量的 AI 输出并非偶然，而是精心设计提示的结果。其核心在于遵循一系列关键原则：**清晰具体地阐述任务与目标，提供充足的上下文信息，根据任务类型（信息检索、摘要、创意、分析、编码等）选用合适的策略，并明确指定期望的格式、语气与风格。**

进一步地，**高级提示技术**，如利用示例进行少样本学习、引导逐步推理的思维链（CoT）与思维树（ToT）、以及将复杂问题化繁为简的任务分解，为应对更具挑战性的任务提供了强大的工具集。同时，认识到**不同 AI 模型（如 LLM 与图像生成器）的特性差异**，并相应调整提示策略（例如，对图像生成器使用丰富的视觉描述和负面提示），对于跨模态应用至关重要。

然而，仅仅掌握技术要素并不足够。用户还需**警惕常见的误区**，如模糊性、上下文缺失、指令过载、忽视 AI 局限性以及数据安全隐患，并采取相应的规避措施。**最佳实践**强调将提示工程视为一个**持续实验、迭代优化和学习**的过程，并始终保持对 AI 输出的**批判性评估**，结合人类的专业知识进行验证与完善。

提示工程不仅仅是一项技术技能，它正在成为一种**核心的数字素养** 75。随着生成式 AI 技术的不断发展和普及 1，掌握与 AI 高效沟通的能力，将成为个人和组织提升生产力、驱动创新和在未来竞争中保持优势的关键 1。未来的人机交互将更加依赖于人类提出好问题的能力，而提示工程正是连接人类意图与 AI 强大生成能力的桥梁。持续实践、学习和探索有效的提问方法，将使用户能够更充分地利用生成式 AI 这一变革性技术，塑造更智能、更高效的人机协作新范式。

#### **Works cited**

1. 指南, accessed April 27, 2025, [https://googlecloud.blob.core.chinacloudapi.cn/resource/File/executive-guide-getting-started-with-generative-ai-zh-cn.pdf](https://googlecloud.blob.core.chinacloudapi.cn/resource/File/executive-guide-getting-started-with-generative-ai-zh-cn.pdf)
2. Prompt Engineering Guide, accessed April 27, 2025, [https://www.promptingguide.ai/](https://www.promptingguide.ai/)
3. 为什么人工智能需要掌握提示 \- Astera Software, accessed April 27, 2025, [https://www.astera.com/zh-CN/type/blog/ai-prompts/](https://www.astera.com/zh-CN/type/blog/ai-prompts/)
4. Getting started with prompts for text-based Generative AI tools | Harvard University Information Technology, accessed April 27, 2025, [https://www.huit.harvard.edu/news/ai-prompts](https://www.huit.harvard.edu/news/ai-prompts)
5. 6 Common AI Prompt Writing Pitfalls & How to Avoid Them \- ChatAI, accessed April 27, 2025, [https://chatai.com/6-common-ai-prompt-writing-pitfalls-how-to-avoid-them/](https://chatai.com/6-common-ai-prompt-writing-pitfalls-how-to-avoid-them/)
6. 了解生成式AI \- Google Workspace 学习中心, accessed April 27, 2025, [https://support.google.com/a/users/answer/13954172?hl=zh-Hans](https://support.google.com/a/users/answer/13954172?hl=zh-Hans)
7. 5 Common AI Prompting Mistakes and How to Avoid Them \- Act\! CRM, accessed April 27, 2025, [https://www.act.com/blog/ai-prompt-mistakes-to-avoid-how-to-get-the-best-results-from-your-ai-tool/](https://www.act.com/blog/ai-prompt-mistakes-to-avoid-how-to-get-the-best-results-from-your-ai-tool/)
8. Avoid Common Mistakes in AI Prompt Engineering with AI Literacy \- UMU, accessed April 27, 2025, [https://blog.umu.com/2025/01/24/Avoid-Common-Mistakes-in-AI-Prompt-Engineering-with-AI-Literacy/](https://blog.umu.com/2025/01/24/Avoid-Common-Mistakes-in-AI-Prompt-Engineering-with-AI-Literacy/)
9. AI Prompting Best Practices \- Codecademy, accessed April 27, 2025, [https://www.codecademy.com/article/ai-prompting-best-practices](https://www.codecademy.com/article/ai-prompting-best-practices)
10. How to write effective AI prompts | Help center \- Formaloo, accessed April 27, 2025, [https://help.formaloo.com/en/articles/9797669-how-to-write-effective-ai-prompts](https://help.formaloo.com/en/articles/9797669-how-to-write-effective-ai-prompts)
11. Understanding Prompt Structure: Key Parts of a Prompt, accessed April 27, 2025, [https://learnprompting.org/docs/basics/prompt\_structure](https://learnprompting.org/docs/basics/prompt_structure)
12. Elements of a Prompt | Prompt Engineering Guide, accessed April 27, 2025, [https://www.promptingguide.ai/introduction/elements](https://www.promptingguide.ai/introduction/elements)
13. Creating Effective Prompts: Best Practices, Prompt Engineering, and How to Get the Most Out of Your LLM \- VisibleThread, accessed April 27, 2025, [https://www.visiblethread.com/blog/creating-effective-prompts-best-practices-prompt-engineering-and-how-to-get-the-most-out-of-your-llm/](https://www.visiblethread.com/blog/creating-effective-prompts-best-practices-prompt-engineering-and-how-to-get-the-most-out-of-your-llm/)
14. The five biggest mistakes people make when prompting an AI \- ZDNet, accessed April 27, 2025, [https://www.zdnet.com/article/the-five-biggest-mistakes-people-make-when-prompting-an-ai/](https://www.zdnet.com/article/the-five-biggest-mistakes-people-make-when-prompting-an-ai/)
15. Common Mistakes in Prompt Engineering with Examples \- The Customer Centroid, accessed April 27, 2025, [https://www.mxmoritz.com/article/common-mistakes-in-prompt-engineering](https://www.mxmoritz.com/article/common-mistakes-in-prompt-engineering)
16. The Anatomy of an Effective AI Prompt & Common Pitfalls \- Launch Consulting, accessed April 27, 2025, [https://www.launchconsulting.com/posts/crafting-the-perfect-ai-prompts-the-anatomy-of-an-effective-ai-prompt-common-pitfalls](https://www.launchconsulting.com/posts/crafting-the-perfect-ai-prompts-the-anatomy-of-an-effective-ai-prompt-common-pitfalls)
17. Best practices for prompt engineering with the OpenAI API | OpenAI ..., accessed April 27, 2025, [https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-the-openai-api](https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-the-openai-api)
18. Prompt Engineering Best Practices: Tips, Tricks, and Tools ..., accessed April 27, 2025, [https://www.digitalocean.com/resources/articles/prompt-engineering-best-practices](https://www.digitalocean.com/resources/articles/prompt-engineering-best-practices)
19. Prompt engineering best practices for ChatGPT \- OpenAI Help Center, accessed April 27, 2025, [https://help.openai.com/en/articles/10032626-prompt-engineering-best-practices-for-chatgpt](https://help.openai.com/en/articles/10032626-prompt-engineering-best-practices-for-chatgpt)
20. The ultimate guide to writing effective AI prompts \- Work Life by Atlassian, accessed April 27, 2025, [https://www.atlassian.com/blog/artificial-intelligence/ultimate-guide-writing-ai-prompts](https://www.atlassian.com/blog/artificial-intelligence/ultimate-guide-writing-ai-prompts)
21. Tips for AI Prompts: Expert Tips And Examples \- New Horizons \- Blog, accessed April 27, 2025, [https://www.newhorizons.com/resources/blog/tips-for-ai-prompts](https://www.newhorizons.com/resources/blog/tips-for-ai-prompts)
22. Prompt Engineering for AI Guide | Google Cloud, accessed April 27, 2025, [https://cloud.google.com/discover/what-is-prompt-engineering](https://cloud.google.com/discover/what-is-prompt-engineering)
23. AI 的提示工程指南| Google Cloud, accessed April 27, 2025, [https://cloud.google.com/discover/what-is-prompt-engineering?hl=zh-CN](https://cloud.google.com/discover/what-is-prompt-engineering?hl=zh-CN)
24. 什么是提示工程 \- IBM, accessed April 27, 2025, [https://www.ibm.com/cn-zh/think/topics/prompt-engineering](https://www.ibm.com/cn-zh/think/topics/prompt-engineering)
25. Avoiding common pitfalls when using generative AI to write and summarize risk intelligence, accessed April 27, 2025, [https://blog.factal.com/2024/09/avoiding-common-pitfalls-when-using-generative-ai-to-write-and-summarize-risk-intelligence/](https://blog.factal.com/2024/09/avoiding-common-pitfalls-when-using-generative-ai-to-write-and-summarize-risk-intelligence/)
26. The Perfect Prompt: 6 Essential Components for Creating Effective AI Prompts \- DocsBot AI, accessed April 27, 2025, [https://docsbot.ai/article/the-perfect-prompt-6-essential-components-for-creating-effective-ai-prompts](https://docsbot.ai/article/the-perfect-prompt-6-essential-components-for-creating-effective-ai-prompts)
27. Effective Prompts for AI: The Essentials \- MIT Sloan Teaching & Learning Technologies, accessed April 27, 2025, [https://mitsloanedtech.mit.edu/ai/basics/effective-prompts/](https://mitsloanedtech.mit.edu/ai/basics/effective-prompts/)
28. The Ultimate Guide to Writing AI Prompts: Examples & Best Practices \- Kipwise, accessed April 27, 2025, [https://kipwise.com/blog/ai-prompts](https://kipwise.com/blog/ai-prompts)
29. Common gen AI pitfalls to avoid | Google Workspace Blog, accessed April 27, 2025, [https://workspace.google.com/blog/ai-and-machine-learning/4-common-gen-ai-pitfalls-avoid](https://workspace.google.com/blog/ai-and-machine-learning/4-common-gen-ai-pitfalls-avoid)
30. 文生文Prompt指南 \- 阿里云文档, accessed April 27, 2025, [https://help.aliyun.com/zh/model-studio/use-cases/prompt-engineering-guide](https://help.aliyun.com/zh/model-studio/use-cases/prompt-engineering-guide)
31. How to Write the Best AI Prompts: 7 Key Elements \- RebelMouse, accessed April 27, 2025, [https://www.rebelmouse.com/ai-writing-prompts](https://www.rebelmouse.com/ai-writing-prompts)
32. 什么是提示链？ \- IBM, accessed April 27, 2025, [https://www.ibm.com/cn-zh/think/topics/prompt-chaining](https://www.ibm.com/cn-zh/think/topics/prompt-chaining)
33. Task decomposition and complex tree diagrams \- Idratherbewriting.com, accessed April 27, 2025, [https://idratherbewriting.com/ai/prompt-engineering-task-decomposition.html](https://idratherbewriting.com/ai/prompt-engineering-task-decomposition.html)
34. Break Down Your Prompts for Better AI Results, accessed April 27, 2025, [https://relevanceai.com/prompt-engineering/break-down-your-prompts-for-better-ai-results](https://relevanceai.com/prompt-engineering/break-down-your-prompts-for-better-ai-results)
35. AI Prompting (6/10): Task Decomposition — Methods and Techniques Everyone Should Know : r/PromptEngineering \- Reddit, accessed April 27, 2025, [https://www.reddit.com/r/PromptEngineering/comments/1ii6z8x/ai\_prompting\_610\_task\_decomposition\_methods\_and/](https://www.reddit.com/r/PromptEngineering/comments/1ii6z8x/ai_prompting_610_task_decomposition_methods_and/)
36. Advanced Decomposition Techniques for Improved Prompting in LLMs, accessed April 27, 2025, [https://learnprompting.org/docs/advanced/decomposition/introduction](https://learnprompting.org/docs/advanced/decomposition/introduction)
37. Prompt engineering overview \- Anthropic, accessed April 27, 2025, [https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
38. The Ultimate Fucking Guide to Prompt Engineering : r/PromptEngineering \- Reddit, accessed April 27, 2025, [https://www.reddit.com/r/PromptEngineering/comments/1j8m0rs/the\_ultimate\_fucking\_guide\_to\_prompt\_engineering/](https://www.reddit.com/r/PromptEngineering/comments/1j8m0rs/the_ultimate_fucking_guide_to_prompt_engineering/)
39. Discover the key elements to create excellent AI prompts : r/ChatGPT \- Reddit, accessed April 27, 2025, [https://www.reddit.com/r/ChatGPT/comments/14c5x3r/discover\_the\_key\_elements\_to\_create\_excellent\_ai/](https://www.reddit.com/r/ChatGPT/comments/14c5x3r/discover_the_key_elements_to_create_excellent_ai/)
40. 关于生成式AI 大型语言模型(LLM) 提示词模式的建议 \- Red Hat, accessed April 27, 2025, [https://www.redhat.com/zh/blog/tips-for-gen-ai-prompts](https://www.redhat.com/zh/blog/tips-for-gen-ai-prompts)
41. 角色提示 \- Learn Prompting, accessed April 27, 2025, [https://learnprompting.org/zh-Hans/docs/basics/roles](https://learnprompting.org/zh-Hans/docs/basics/roles)
42. 如何编写有效的AI 提示音- Plus, accessed April 27, 2025, [https://plusai.com/zh/blog/how-to-write-an-effective-ai-prompt](https://plusai.com/zh/blog/how-to-write-an-effective-ai-prompt)
43. Prompt engineering: techniques for effective AI prompting \- Hostinger, accessed April 27, 2025, [https://www.hostinger.com/tutorials/ai-prompt-engineering](https://www.hostinger.com/tutorials/ai-prompt-engineering)
44. Mastering AI Prompts for Summarizing Reports \- Quadratic, accessed April 27, 2025, [https://www.quadratichq.com/blog/mastering-ai-prompts-for-summarizing-reports](https://www.quadratichq.com/blog/mastering-ai-prompts-for-summarizing-reports)
45. 9 Powerful Prompts to Get the Best AI Summaries with AskDocs, accessed April 27, 2025, [https://www.askdocs.com/blog/powerful-summaries-prompts](https://www.askdocs.com/blog/powerful-summaries-prompts)
46. 提示的关键要素, accessed April 27, 2025, [https://learnprompting.org/zh-Hans/docs/intermediate/whats\_in\_a\_prompt](https://learnprompting.org/zh-Hans/docs/intermediate/whats_in_a_prompt)
47. 如何编写AI 提示：撰写有效AI 提示的指南 \- Coursebox.ai, accessed April 27, 2025, [https://www.coursebox.ai/zh/blog/ru-he-bian-xie-ren-gong-zhi-neng-ti-shi](https://www.coursebox.ai/zh/blog/ru-he-bian-xie-ren-gong-zhi-neng-ti-shi)
48. Examples of Prompts | Prompt Engineering Guide, accessed April 27, 2025, [https://www.promptingguide.ai/introduction/examples](https://www.promptingguide.ai/introduction/examples)
49. Advanced Prompt Engineering Techniques \- saasguru, accessed April 27, 2025, [https://www.saasguru.co/advanced-prompt-engineering-techniques/](https://www.saasguru.co/advanced-prompt-engineering-techniques/)
50. Tree of Thoughts Prompting (ToT) \- Humanloop, accessed April 27, 2025, [https://humanloop.com/blog/tree-of-thoughts-prompting](https://humanloop.com/blog/tree-of-thoughts-prompting)
51. Tree of Thoughts (ToT) | Prompt Engineering Guide, accessed April 27, 2025, [https://www.promptingguide.ai/techniques/tot](https://www.promptingguide.ai/techniques/tot)
52. A Guide to Prompt Engineering: From Zero Shot to Chain of Thought \- E2E Networks, accessed April 27, 2025, [https://www.e2enetworks.com/blog/a-guide-to-prompt-engineering-from-zero-shot-to-chain-of-thought](https://www.e2enetworks.com/blog/a-guide-to-prompt-engineering-from-zero-shot-to-chain-of-thought)
53. Tree of Thoughts (ToT): Enhancing Problem-Solving in LLMs \- Learn Prompting, accessed April 27, 2025, [https://learnprompting.org/docs/advanced/decomposition/tree\_of\_thoughts](https://learnprompting.org/docs/advanced/decomposition/tree_of_thoughts)
54. arxiv.org, accessed April 27, 2025, [https://arxiv.org/pdf/2201.11903](https://arxiv.org/pdf/2201.11903)
55. What is Chain of Thoughts (CoT)? \- IBM, accessed April 27, 2025, [https://www.ibm.com/think/topics/chain-of-thoughts](https://www.ibm.com/think/topics/chain-of-thoughts)
56. Chain-of-Thought Prompting Elicits Reasoning in Large Language Models \- arXiv, accessed April 27, 2025, [https://arxiv.org/abs/2201.11903](https://arxiv.org/abs/2201.11903)
57. Chain-of-Thought Prompting Elicits Reasoning in Large Language Models \- Summary, accessed April 27, 2025, [https://portkey.ai/blog/chain-of-thought-prompting-elicits-reasoning-in-large-language-models-summary](https://portkey.ai/blog/chain-of-thought-prompting-elicits-reasoning-in-large-language-models-summary)
58. \[2408.14511\] Unveiling the Statistical Foundations of Chain-of-Thought Prompting Methods, accessed April 27, 2025, [https://arxiv.org/abs/2408.14511](https://arxiv.org/abs/2408.14511)
59. 生成式AI：CEO必读指南 \- 麦肯锡, accessed April 27, 2025, [https://www.mckinsey.com.cn/wp-content/uploads/2023/07/What-every-CEO-should-know-about-generative-AI-CN.pdf](https://www.mckinsey.com.cn/wp-content/uploads/2023/07/What-every-CEO-should-know-about-generative-AI-CN.pdf)
60. Awesome list of Prompt Engineering techniques, guides & tutorials \- Reddit, accessed April 27, 2025, [https://www.reddit.com/r/PromptEngineering/comments/141fwmi/awesome\_list\_of\_prompt\_engineering\_techniques/](https://www.reddit.com/r/PromptEngineering/comments/141fwmi/awesome_list_of_prompt_engineering_techniques/)
61. A Guide to Crafting Effective Prompts for Diverse Applications \- OpenAI Developer Forum, accessed April 27, 2025, [https://community.openai.com/t/a-guide-to-crafting-effective-prompts-for-diverse-applications/493914](https://community.openai.com/t/a-guide-to-crafting-effective-prompts-for-diverse-applications/493914)
62. 从Workiva 生成式人工智能获得有用回复的技巧– 支持中心, accessed April 27, 2025, [https://support.workiva.com/hc/zh-cn/articles/19173586555412-%E4%BB%8E-Workiva-%E7%94%9F%E6%88%90%E5%BC%8F%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E8%8E%B7%E5%BE%97%E6%9C%89%E7%94%A8%E5%9B%9E%E5%A4%8D%E7%9A%84%E6%8A%80%E5%B7%A7](https://support.workiva.com/hc/zh-cn/articles/19173586555412-%E4%BB%8E-Workiva-%E7%94%9F%E6%88%90%E5%BC%8F%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E8%8E%B7%E5%BE%97%E6%9C%89%E7%94%A8%E5%9B%9E%E5%A4%8D%E7%9A%84%E6%8A%80%E5%B7%A7)
63. Understanding AI Image Generation: Models, Tools, and Techniques \- DigitalOcean, accessed April 27, 2025, [https://www.digitalocean.com/community/tutorials/understanding-ai-image-generation-models-tools-and-techniques](https://www.digitalocean.com/community/tutorials/understanding-ai-image-generation-models-tools-and-techniques)
64. AI-Generated Art: Midjourney, DALL·E 3, Stable Diffusion \- Perplexity, accessed April 27, 2025, [https://www.perplexity.ai/page/ai-generated-art-midjourney-da-mbAUYd4HQ3G7xXYTTfWHFg](https://www.perplexity.ai/page/ai-generated-art-midjourney-da-mbAUYd4HQ3G7xXYTTfWHFg)
65. How to write AI image prompts \- From basic to pro \[2024\] \- Let's Enhance, accessed April 27, 2025, [https://letsenhance.io/blog/article/ai-text-prompt-guide/](https://letsenhance.io/blog/article/ai-text-prompt-guide/)
66. The Ultimate Guide to AI Prompt Engineering \[2024\] \- V7 Labs, accessed April 27, 2025, [https://www.v7labs.com/blog/prompt-engineering-guide](https://www.v7labs.com/blog/prompt-engineering-guide)
67. Prompt to make exactly same image but different pose \- OpenAI Developer Forum, accessed April 27, 2025, [https://community.openai.com/t/prompt-to-make-exactly-same-image-but-different-pose/597498](https://community.openai.com/t/prompt-to-make-exactly-same-image-but-different-pose/597498)
68. How to Use AI Negative Prompts for Better Outputs (+Examples), accessed April 27, 2025, [https://clickup.com/blog/ai-negative-prompt-examples/](https://clickup.com/blog/ai-negative-prompt-examples/)
69. 180+ Best Stable Diffusion Negative Prompts with Examples, accessed April 27, 2025, [https://www.aiarty.com/stable-diffusion-prompts/stable-diffusion-negative-prompt.htm](https://www.aiarty.com/stable-diffusion-prompts/stable-diffusion-negative-prompt.htm)
70. Guide to Negative Prompts in Stable Diffusion \- Getimg.ai, accessed April 27, 2025, [https://getimg.ai/guides/guide-to-negative-prompts-in-stable-diffusion](https://getimg.ai/guides/guide-to-negative-prompts-in-stable-diffusion)
71. How to Write Negative Prompts | Layer AI | Documentation & Guides, accessed April 27, 2025, [https://help.layer.ai/en/articles/8120630-how-to-write-negative-prompts](https://help.layer.ai/en/articles/8120630-how-to-write-negative-prompts)
72. 4 common pitfalls of Gen AI strategy and how to avoid them \- Board of Innovation, accessed April 27, 2025, [https://www.boardofinnovation.com/blog/4-common-pitfalls-of-gen-ai-strategy-and-how-to-avoid-them/](https://www.boardofinnovation.com/blog/4-common-pitfalls-of-gen-ai-strategy-and-how-to-avoid-them/)
73. 4 Mistakes That Will Ruin Your Generative AI Implementation \- Neoteric, accessed April 27, 2025, [https://neoteric.eu/blog/4-mistakes-that-will-ruin-your-generative-ai-implementation/](https://neoteric.eu/blog/4-mistakes-that-will-ruin-your-generative-ai-implementation/)
74. 五大关键要素解锁生成式AI全新机遇 \- awsstatic.com, accessed April 27, 2025, [https://d1.awsstatic.com/whitepapers/unlocking-new-opportunities-for-generative-idc.pdf](https://d1.awsstatic.com/whitepapers/unlocking-new-opportunities-for-generative-idc.pdf)
75. 人工智能素养：提出背景、概念界定与构成要素 \- 赛尔教育, accessed April 27, 2025, [https://www.cerschool.edu.cn/newsinfo/7634607.html](https://www.cerschool.edu.cn/newsinfo/7634607.html)
