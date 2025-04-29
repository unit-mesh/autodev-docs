import { useState } from "react"
import { CheckCircle2 } from "lucide-react"

const implementationSteps = [
  {
    title: "建立领域语言",
    description: "构建统一的语言，使团队和 AI 都能理解的标准术语",
    tasks: [
      "识别核心业务概念和术语",
      "创建领域特定术语表（domain.csv）",
      "建立统一的命名规范和约定",
      "在 AutoDev Workspace 中维护术语表"
    ],
  },
  {
    title: "实施语义化代码",
    description: "重构代码以遵循语义化命名和自文档化原则",
    tasks: [
      "重构现有代码，使用完整的类名和方法名",
      "添加清晰的注释说明功能",
      "使用语义化的 API 路径",
      "实施构造函数注入依赖"
    ],
  },
  {
    title: "配置 AI 工具链",
    description: "设置 AI 驱动的工具用于代码生成、重构和检索",
    tasks: [
      "配置 AutoDev Planner 进行智能任务规划",
      "设置语义化代码检索工具",
      "实施自动化代码审查流程",
      "配置 Project Rule 控制代码生成"
    ],
  },
  {
    title: "建立验证体系",
    description: "通过自动化工具确保代码质量和系统可靠性",
    tasks: [
      "配置 Lint 和代码风格检查",
      "设置自动化测试流程",
      "实施静态和动态分析",
      "配置 Observer 模式监控构建和测试"
    ],
  },
  {
    title: "团队实践与培训",
    description: "确保团队理解和遵循 AI 友好架构原则",
    tasks: [
      "举办语义化编码实践研讨会",
      "创建团队编码规范文档",
      "建立代码检视标准",
      "实施小步迭代开发流程"
    ],
  },
]

export default function ImplementationGuide() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">AI 友好架构实施指南</h2>
        <p className="text-slate-600 text-center max-w-3xl mx-auto mb-12">在组织中实施 AI 友好型架构的分步骤方法</p>

        <div className="grid md:grid-cols-5 gap-4 mb-8">
          {implementationSteps.map((step, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeStep === index ? "bg-purple-700 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
              onClick={() => setActiveStep(index)}
            >
              步骤 {index + 1}
            </button>
          ))}
        </div>

        <div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-8 border border-slate-100"
        >
          <h3 className="text-2xl font-bold mb-4">{implementationSteps[activeStep].title}</h3>
          <p className="text-slate-600 mb-6">{implementationSteps[activeStep].description}</p>

          <div className="space-y-4">
            {implementationSteps[activeStep].tasks.map((task, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <p>{task}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="bg-purple-700 hover:bg-purple-800 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-colors">
            下载完整 AI 编程实施指南
          </button>
        </div>
      </div>
    </section>
  )
}
