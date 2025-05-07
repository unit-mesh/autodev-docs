"use client"

import { useEffect, useState, useRef } from "react"
import {
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  FileText,
  GitBranch,
  MessageSquare,
  CheckSquare,
  Code2,
  Database,
  Server,
  Trello,
  BarChart,
  Layers,
  Workflow,
  Kanban,
  Clipboard,
  Cpu,
  Hammer,
  Bug,
  Rocket,
  Zap,
} from "lucide-react"
import { motion } from "framer-motion"
import { BrainCircuit } from "lucide-react"

const executionStates = [
  {
    step: 0,
    title: "AI驱动的软件开发知识导航",
    description: "AI如何提升软件工程中的知识连接",
    visual: {
      boxes: [
        {
          id: "knowledge-nav",
          label: "AI知识导航",
          x: 250,
          y: 150,
          width: 120,
          height: 100,
          color: "#dbeafe",
          icon: Workflow,
        },
      ],
      connections: [],
    },
    explanation: "",
  },
  {
    step: 1,
    title: "AI辅助需求分析",
    description: "",
    visual: {
      boxes: [
        {
          id: "jira",
          label: "Jira",
          x: 150,
          y: 100,
          width: 100,
          height: 80,
          color: "#dbeafe",
          icon: Trello,
        },
        {
          id: "confluence",
          label: "Confluence",
          x: 350,
          y: 100,
          width: 100,
          height: 80,
          color: "#bfdbfe",
          icon: FileText,
        },
        {
          id: "ai-requirements",
          label: "AI需求分析",
          x: 150,
          y: 220,
          width: 100,
          height: 80,
          color: "#93c5fd",
          icon: BrainCircuit,
        },
        {
          id: "requirements",
          label: "需求文档",
          x: 350,
          y: 220,
          width: 100,
          height: 80,
          color: "#60a5fa",
          icon: Clipboard,
        },
      ],
      connections: [
        { from: "jira", to: "ai-requirements", label: "输入" },
        { from: "confluence", to: "requirements", label: "存储" },
        { from: "ai-requirements", to: "requirements", label: "生成" },
        { from: "jira", to: "confluence", label: "集成" },
      ],
    },
    explanation: "",
  },
  {
    step: 2,
    title: "AI辅助设计",
    description: "",
    visual: {
      boxes: [
        {
          id: "lucidchart",
          label: "Lucidchart",
          x: 150,
          y: 100,
          width: 100,
          height: 80,
          color: "#dbeafe",
          icon: Layers,
        },
        {
          id: "figma",
          label: "Figma",
          x: 350,
          y: 100,
          width: 100,
          height: 80,
          color: "#bfdbfe",
          icon: Kanban,
        },
        {
          id: "ai-architecture",
          label: "AI架构建议",
          x: 150,
          y: 220,
          width: 100,
          height: 80,
          color: "#93c5fd",
          icon: BrainCircuit,
        },
        {
          id: "ai-ui-design",
          label: "AI UI生成",
          x: 350,
          y: 220,
          width: 100,
          height: 80,
          color: "#60a5fa",
          icon: BrainCircuit,
        },
      ],
      connections: [
        { from: "lucidchart", to: "ai-architecture", label: "使用" },
        { from: "figma", to: "ai-ui-design", label: "集成" },
        { from: "ai-architecture", to: "ai-ui-design", label: "协同" },
        { from: "requirements", to: "ai-architecture", label: "基于", style: "dashed" },
        { from: "ai-requirements", to: "ai-ui-design", label: "参考", style: "dashed" },
      ],
    },
    explanation: "",
  },
  {
    step: 3,
    title: "AI辅助开发",
    description: "",
    visual: {
      boxes: [
        {
          id: "github",
          label: "GitHub",
          x: 150,
          y: 100,
          width: 100,
          height: 80,
          color: "#dbeafe",
          icon: GitBranch,
        },
        {
          id: "vscode",
          label: "VS Code",
          x: 350,
          y: 100,
          width: 100,
          height: 80,
          color: "#bfdbfe",
          icon: Code2,
        },
        {
          id: "ai-coding",
          label: "AI代码生成",
          x: 150,
          y: 220,
          width: 100,
          height: 80,
          color: "#93c5fd",
          icon: BrainCircuit,
        },
        {
          id: "ai-documentation",
          label: "AI文档生成",
          x: 350,
          y: 220,
          width: 100,
          height: 80,
          color: "#60a5fa",
          icon: BrainCircuit,
        },
      ],
      connections: [
        { from: "github", to: "ai-coding", label: "集成" },
        { from: "vscode", to: "ai-coding", label: "使用" },
        { from: "vscode", to: "ai-documentation", label: "生成" },
        { from: "ai-architecture", to: "ai-coding", label: "指导", style: "dashed" },
        { from: "ai-ui-design", to: "ai-coding", label: "实现", style: "dashed" },
      ],
    },
    explanation: "",
  },
  {
    step: 4,
    title: "AI辅助测试",
    description: "",
    visual: {
      boxes: [
        {
          id: "jenkins",
          label: "Jenkins",
          x: 150,
          y: 100,
          width: 100,
          height: 80,
          color: "#dbeafe",
          icon: Cpu,
        },
        {
          id: "selenium",
          label: "Selenium",
          x: 350,
          y: 100,
          width: 100,
          height: 80,
          color: "#bfdbfe",
          icon: Hammer,
        },
        {
          id: "ai-test-gen",
          label: "AI测试生成",
          x: 150,
          y: 220,
          width: 100,
          height: 80,
          color: "#93c5fd",
          icon: BrainCircuit,
        },
        {
          id: "ai-bug-predict",
          label: "AI缺陷预测",
          x: 350,
          y: 220,
          width: 100,
          height: 80,
          color: "#60a5fa",
          icon: BrainCircuit,
        },
      ],
      connections: [
        { from: "jenkins", to: "ai-test-gen", label: "执行" },
        { from: "selenium", to: "ai-test-gen", label: "使用" },
        { from: "ai-test-gen", to: "ai-bug-predict", label: "输入" },
        { from: "ai-bug-predict", to: "jira", label: "创建", style: "dashed" },
        { from: "ai-coding", to: "ai-test-gen", label: "分析", style: "dashed" },
      ],
    },
    explanation: "",
  },
  {
    step: 5,
    title: "AI辅助部署",
    description: "",
    visual: {
      boxes: [
        {
          id: "docker",
          label: "Docker",
          x: 150,
          y: 100,
          width: 100,
          height: 80,
          color: "#dbeafe",
          icon: Database,
        },
        {
          id: "kubernetes",
          label: "Kubernetes",
          x: 350,
          y: 100,
          width: 100,
          height: 80,
          color: "#bfdbfe",
          icon: Server,
        },
        {
          id: "ai-deployment",
          label: "AI部署优化",
          x: 150,
          y: 220,
          width: 100,
          height: 80,
          color: "#93c5fd",
          icon: BrainCircuit,
        },
        {
          id: "ai-release-notes",
          label: "AI发布说明",
          x: 350,
          y: 220,
          width: 100,
          height: 80,
          color: "#60a5fa",
          icon: BrainCircuit,
        },
      ],
      connections: [
        { from: "docker", to: "ai-deployment", label: "配置" },
        { from: "kubernetes", to: "ai-deployment", label: "优化" },
        { from: "ai-coding", to: "docker", label: "打包", style: "dashed" },
        { from: "ai-bug-predict", to: "ai-release-notes", label: "输入", style: "dashed" },
        { from: "ai-release-notes", to: "confluence", label: "发布", style: "dashed" },
      ],
    },
    explanation: "",
  },
  {
    step: 6,
    title: "AI辅助维护",
    description: "",
    visual: {
      boxes: [
        {
          id: "grafana",
          label: "Grafana",
          x: 150,
          y: 100,
          width: 100,
          height: 80,
          color: "#dbeafe",
          icon: BarChart,
        },
        {
          id: "slack",
          label: "Slack",
          x: 350,
          y: 100,
          width: 100,
          height: 80,
          color: "#bfdbfe",
          icon: MessageSquare,
        },
        {
          id: "ai-monitoring",
          label: "AI异常检测",
          x: 150,
          y: 220,
          width: 100,
          height: 80,
          color: "#93c5fd",
          icon: BrainCircuit,
        },
        {
          id: "ai-incident",
          label: "AI事件分析",
          x: 350,
          y: 220,
          width: 100,
          height: 80,
          color: "#60a5fa",
          icon: BrainCircuit,
        },
      ],
      connections: [
        { from: "grafana", to: "ai-monitoring", label: "输入" },
        { from: "ai-monitoring", to: "ai-incident", label: "触发" },
        { from: "ai-incident", to: "slack", label: "通知" },
        { from: "ai-incident", to: "jira", label: "创建", style: "dashed" },
        { from: "ai-deployment", to: "ai-monitoring", label: "配置", style: "dashed" },
      ],
    },
    explanation: "",
  },
  {
    step: 7,
    title: "AI驱动的知识循环",
    description: "",
    visual: {
      boxes: [
        {
          id: "requirements-phase",
          label: "需求分析",
          x: 150,
          y: 50,
          width: 100,
          height: 70,
          color: "#dbeafe",
          icon: Clipboard,
        },
        {
          id: "design-phase",
          label: "设计",
          x: 300,
          y: 50,
          width: 100,
          height: 70,
          color: "#bfdbfe",
          icon: Layers,
        },
        {
          id: "development-phase",
          label: "开发",
          x: 450,
          y: 150,
          width: 100,
          height: 70,
          color: "#93c5fd",
          icon: Code2,
        },
        {
          id: "testing-phase",
          label: "测试",
          x: 450,
          y: 250,
          width: 100,
          height: 70,
          color: "#60a5fa",
          icon: Bug,
        },
        {
          id: "deployment-phase",
          label: "部署",
          x: 300,
          y: 350,
          width: 100,
          height: 70,
          color: "#3b82f6",
          icon: Rocket,
        },
        {
          id: "maintenance-phase",
          label: "维护",
          x: 150,
          y: 250,
          width: 100,
          height: 70,
          color: "#2563eb",
          icon: Hammer,
        },
        {
          id: "ai-knowledge-center",
          label: "AI知识中心",
          x: 300,
          y: 200,
          width: 100,
          height: 70,
          color: "#dbeafe",
          icon: BrainCircuit,
        },
      ],
      connections: [
        { from: "requirements-phase", to: "design-phase", label: "" },
        { from: "design-phase", to: "development-phase", label: "" },
        { from: "development-phase", to: "testing-phase", label: "" },
        { from: "testing-phase", to: "deployment-phase", label: "" },
        { from: "deployment-phase", to: "maintenance-phase", label: "" },
        { from: "maintenance-phase", to: "requirements-phase", label: "" },
        { from: "ai-knowledge-center", to: "requirements-phase", label: "" },
        { from: "ai-knowledge-center", to: "design-phase", label: "" },
        { from: "ai-knowledge-center", to: "development-phase", label: "" },
        { from: "ai-knowledge-center", to: "testing-phase", label: "" },
        { from: "ai-knowledge-center", to: "deployment-phase", label: "" },
        { from: "ai-knowledge-center", to: "maintenance-phase", label: "" },
      ],
    },
    explanation: "",
  },
  {
    step: 8,
    title: "AI知识导航的价值",
    description: "",
    visual: {
      boxes: [
        {
          id: "efficiency",
          label: "提高效率",
          x: 150,
          y: 100,
          width: 100,
          height: 80,
          color: "#dbeafe",
          icon: Zap,
        },
        {
          id: "quality",
          label: "提高质量",
          x: 350,
          y: 100,
          width: 100,
          height: 80,
          color: "#bfdbfe",
          icon: CheckSquare,
        },
        {
          id: "knowledge-extraction",
          label: "知识提取",
          x: 150,
          y: 220,
          width: 100,
          height: 80,
          color: "#93c5fd",
          icon: BrainCircuit,
        },
        {
          id: "knowledge-connection",
          label: "知识连接",
          x: 350,
          y: 220,
          width: 100,
          height: 80,
          color: "#60a5fa",
          icon: BrainCircuit,
        },
      ],
      connections: [
        { from: "efficiency", to: "quality", label: "" },
        { from: "quality", to: "knowledge-connection", label: "" },
        { from: "knowledge-connection", to: "knowledge-extraction", label: "" },
        { from: "knowledge-extraction", to: "efficiency", label: "" },
      ],
    },
    explanation: "",
  },
]

// Helper function to get a unique list of all box IDs across all states
const getAllBoxIds = () => {
  const allIds = new Set()
  executionStates.forEach((state) => {
    state.visual.boxes.forEach((box) => {
      allIds.add(box.id)
    })
  })
  return Array.from(allIds)
}

const getAllConnectionIds = () => {
  const allIds = new Set()
  executionStates.forEach((state) => {
    state.visual.connections.forEach((conn) => {
      allIds.add(`${conn.from}-${conn.to}`)
    })
  })
  return Array.from(allIds)
}

export default function TimeTravel() {
  const [currentStep, setCurrentStep] = useState(0)
  const [previousStep, setPreviousStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [playbackSpeed, setPlaybackSpeed] = useState(3000) // ms between steps
  const [isAnimating, setIsAnimating] = useState(false)
  const timerRef = useRef(null)
  const scrollContainerRef = useRef(null)

  const currentState = executionStates[currentStep]
  const totalSteps = executionStates.length - 1
  const allBoxIds = getAllBoxIds()
  const allConnectionIds = getAllConnectionIds()

  // Track direction of animation for proper transitions
  const [direction, setDirection] = useState(0) // 0: initial, 1: forward, -1: backward

  useEffect(() => {
    if (currentStep > previousStep) {
      setDirection(1)
    } else if (currentStep < previousStep) {
      setDirection(-1)
    }
    setPreviousStep(currentStep)

    // Set animating state to true when step changes
    setIsAnimating(true)
    const timer = setTimeout(() => {
      setIsAnimating(false)
    }, 600) // Animation duration + small buffer

    return () => clearTimeout(timer)
  }, [currentStep, previousStep])

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= totalSteps) {
            setIsPlaying(false)
            return totalSteps
          }
          return prev + 1
        })
      }, playbackSpeed)
    } else if (timerRef.current) {
      clearInterval(timerRef.current)
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPlaying, totalSteps, playbackSpeed])

  useEffect(() => {
    // Scroll the thumbnail into view when currentStep changes
    if (scrollContainerRef.current) {
      const thumbnails = scrollContainerRef.current.querySelectorAll("[data-thumbnail]")
      if (thumbnails[currentStep]) {
        thumbnails[currentStep].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        })
      }
    }
  }, [currentStep])

  const togglePlayPause = () => {
    if (currentStep >= totalSteps && !isPlaying) {
      setCurrentStep(0)
      setIsPlaying(true)
    } else {
      setIsPlaying(!isPlaying)
    }
  }

  const stepForward = () => {
    if (currentStep < totalSteps && !isAnimating) {
      setCurrentStep(currentStep + 1)
    }
    if (isPlaying) setIsPlaying(false)
  }

  const stepBackward = () => {
    if (currentStep > 0 && !isAnimating) {
      setCurrentStep(currentStep - 1)
    }
    if (isPlaying) setIsPlaying(false)
  }

  // Find a box by ID in the current state, or return a default if not found
  const findBox = (id) => {
    return (
      currentState.visual.boxes.find((box) => box.id === id) || {
        id,
        label: "",
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        color: "transparent",
        icon: null,
      }
    )
  }

  // Check if a connection exists in the current state
  const hasConnection = (fromId, toId) => {
    return currentState.visual.connections.some((conn) => conn.from === fromId && conn.to === toId)
  }

  // Get connection details if it exists
  const getConnection = (fromId, toId) => {
    return currentState.visual.connections.find((conn) => conn.from === fromId && conn.to === toId)
  }

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
      {/* Main visualization */}
      <div className="p-6 flex flex-col items-center">
        <motion.h2
          key={`title-${currentStep}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="text-xl font-semibold mb-2"
        >
          {currentState.title}
        </motion.h2>

        {currentState.description && (
          <motion.p
            key={`desc-${currentStep}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-gray-600 mb-6"
          >
            {currentState.description}
          </motion.p>
        )}

        {/* Visual representation */}
        <div className="relative w-full h-[400px] bg-gray-50 rounded-lg border border-gray-200 mb-6 overflow-hidden">
          <svg width="100%" height="100%" className="overflow-visible">
            {/* Draw connections with animations */}
            {allConnectionIds.map((connId) => {
              const [fromId, toId] = connId.split("-")
              const connection = getConnection(fromId, toId)
              const exists = hasConnection(fromId, toId)

              if (!exists) return null

              const fromBox = findBox(fromId)
              const toBox = findBox(toId)

              const fromX = fromBox.x + fromBox.width / 2
              const fromY = fromBox.y + fromBox.height / 2
              const toX = toBox.x + toBox.width / 2
              const toY = toBox.y + toBox.height / 2

              return (
                <motion.g
                  key={`conn-${connId}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: exists ? 1 : 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <defs>
                    <marker
                      id={`arrowhead-${connId}`}
                      markerWidth="10"
                      markerHeight="7"
                      refX="9"
                      refY="3.5"
                      orient="auto"
                    >
                      <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
                    </marker>
                  </defs>
                  <motion.line
                    x1={fromX}
                    y1={fromY}
                    x2={toX}
                    y2={toY}
                    stroke="#94a3b8"
                    strokeWidth="2"
                    strokeDasharray={connection?.style === "dashed" ? "5,5" : "none"}
                    markerEnd={`url(#arrowhead-${connId})`}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                  {connection?.label && (
                    <motion.text
                      x={(fromX + toX) / 2}
                      y={(fromY + toY) / 2 - 10}
                      textAnchor="middle"
                      fill="#64748b"
                      fontSize="12"
                      fontWeight="500"
                      className="bg-white px-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                    >
                      {connection.label}
                    </motion.text>
                  )}
                </motion.g>
              )
            })}

            {/* Draw boxes with animations */}
            {allBoxIds.map((boxId) => {
              const box = findBox(boxId)
              const exists = currentState.visual.boxes.some((b) => b.id === boxId)
              const IconComponent = box.icon

              if (!exists) return null

              return (
                <motion.g
                  key={`box-${boxId}`}
                  initial={{
                    opacity: 0,
                    scale: direction >= 0 ? 0.8 : 1.2,
                  }}
                  animate={{
                    opacity: exists ? 1 : 0,
                    scale: 1,
                    x: 0,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: direction >= 0 ? 1.2 : 0.8,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    duration: 0.5,
                  }}
                >
                  <motion.rect
                    x={box.x}
                    y={box.y}
                    width={box.width}
                    height={box.height}
                    rx="8"
                    fill={box.color}
                    stroke="#cbd5e1"
                    strokeWidth="2"
                    initial={{ fill: "#e5e7eb" }}
                    animate={{
                      fill: box.color,
                      x: box.x,
                      y: box.y,
                      width: box.width,
                      height: box.height,
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  <foreignObject x={box.x} y={box.y} width={box.width} height={box.height}>
                    <div className="w-full h-full flex flex-col items-center justify-center text-center p-2 text-gray-800">
                      {IconComponent && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                          className="mb-1"
                        >
                          <IconComponent className="h-5 w-5 text-gray-600" />
                        </motion.div>
                      )}
                      <motion.div
                        className="font-medium text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        {box.label}
                      </motion.div>
                    </div>
                  </foreignObject>
                </motion.g>
              )
            })}
          </svg>
        </div>

        {currentState.explanation && (
          <motion.div
            key={`explanation-${currentStep}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-gray-50 p-4 rounded-lg border border-gray-200 w-full mb-6"
          >
            <p className="text-gray-700 leading-relaxed">{currentState.explanation}</p>
          </motion.div>
        )}

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <button
            className="h-10 w-10 rounded-md border border-gray-300 inline-flex items-center justify-center text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={stepBackward}
            disabled={currentStep === 0 || isAnimating}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            className={`h-10 w-10 rounded-md inline-flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed ${isPlaying ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'}`}
            onClick={togglePlayPause}
            disabled={isAnimating && currentStep === totalSteps}
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </button>
          <button
            className="h-10 w-10 rounded-md border border-gray-300 inline-flex items-center justify-center text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={stepForward}
            disabled={currentStep === totalSteps || isAnimating}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Gallery view at bottom */}
      <div className="border-t border-gray-200 bg-gray-50 p-4">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-2 gap-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
        >
          {executionStates.map((state, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <div
                data-thumbnail
                className={`flex-shrink-0 w-24 h-24 cursor-pointer transition-all duration-200 bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden ${
                  currentStep === idx ? "ring-2 ring-blue-500 scale-105 shadow-md" : "hover:ring-1 hover:ring-gray-300"
                }`}
                onClick={() => {
                  if (!isAnimating) {
                    setCurrentStep(idx)
                    if (isPlaying) setIsPlaying(false)
                  }
                }}
              >
                <div className="w-full h-full p-2 flex flex-col items-center justify-center text-center">
                  <div className="text-xs font-medium text-gray-700 mb-1">步骤 {idx + 1}</div>
                  <div className="w-full h-12 bg-gray-100 rounded flex items-center justify-center">
                    {state.title.substring(0, 6)}...
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

