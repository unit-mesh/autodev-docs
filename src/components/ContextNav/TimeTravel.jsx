'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Pause, Play, 
  // 导入所有需要的图标组件
  BarChart,
  BrainCircuit,
  Bug,
  CheckSquare,
  Clipboard,
  Code2,
  Cpu,
  Database,
  FileText,
  GitBranch,
  Hammer,
  Kanban,
  Layers,
  MessageSquare,
  Rocket,
  Server,
  Trello,
  Workflow,
  Zap,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { executionStates } from '@site/src/components/ContextNav/ExecutionStates'

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

  // 创建一个图标映射对象，用于根据名称渲染对应的图标
  const iconMap = {
    BarChart,
    BrainCircuit,
    Bug,
    CheckSquare,
    Clipboard,
    Code2,
    Cpu,
    Database,
    FileText,
    GitBranch,
    Hammer,
    Kanban,
    Layers,
    MessageSquare,
    Rocket,
    Server,
    Trello,
    Workflow,
    Zap,
  }

  // 渲染图标的辅助函数
  const renderIcon = (iconComponent, props = {}) => {
    if (!iconComponent) return null;
    const IconComponent = iconComponent;
    return <IconComponent {...props} />;
  }

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
    <div className="card relative">
      {/* 顶部控制条 */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 mb-4">
        <div className="flex items-center space-x-3">
          <button
            className="h-10 w-10 rounded hover:bg-gray-100"
            onClick={stepBackward}
            disabled={currentStep === 0 || isAnimating}
            style={{opacity: (currentStep === 0 || isAnimating) ? 0.5 : 1}}
          >
            <ChevronLeft className="h-5 w-5 mx-auto" />
          </button>
          <button
            className={`h-10 w-10 rounded inline-flex items-center justify-center ${isPlaying ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'}`}
            onClick={togglePlayPause}
            disabled={isAnimating && currentStep === totalSteps}
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </button>
          <button
            className="h-10 w-10 rounded hover:bg-gray-100"
            onClick={stepForward}
            disabled={currentStep === totalSteps || isAnimating}
            style={{opacity: (currentStep === totalSteps || isAnimating) ? 0.5 : 1}}
          >
            <ChevronRight className="h-5 w-5 mx-auto" />
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <label className="text-sm text-gray-600">速度：</label>
          <select
            value={playbackSpeed}
            onChange={(e) => setPlaybackSpeed(Number(e.target.value))}
            className="border rounded p-1 text-sm"
          >
            <option value={3000}>1×</option>
            <option value={2000}>1.5×</option>
            <option value={1000}>2×</option>
          </select>
        </div>
      </div>

      <div className="relative w-full h-[550px] perspective-1000 overflow-hidden mb-6 slide-container">
        <AnimatePresence initial={true} custom={direction}>
          {executionStates.map((state, idx) => {
            const offset = idx - currentStep;
            const isVisible = Math.abs(offset) <= 2;
            
            if (!isVisible) return null;
            
            return (
              <motion.div
                key={idx}
                custom={direction}
                initial={{
                  x: `calc(-50% + ${direction >= 0 ? 600 : -600}px)`,
                  rotateY: direction >= 0 ? 45 : -45,
                  opacity: 0,
                  scale: 0.8,
                  zIndex: offset === 0 ? 20 : 10
                }}
                animate={{
                  x: `calc(-50% + ${offset * 80}px)`, // 增加间距
                  rotateY: offset * 15, // 增强旋转角度
                  opacity: offset === 0 ? 1 : 0.6,
                  scale: offset === 0 ? 1 : 0.85,
                  zIndex: offset === 0 ? 20 : 10
                }}
                exit={{
                  x: `calc(-50% + ${direction >= 0 ? -600 : 600}px)`,
                  rotateY: direction >= 0 ? -45 : 45,
                  opacity: 0,
                  scale: 0.8,
                  zIndex: offset === 0 ? 20 : 10
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
                className="preserve-3d absolute top-0 left-1/2 slide-width h-[550px] bg-white rounded-lg shadow-2xl"
                style={{
                  cursor: offset !== 0 && !isAnimating ? 'pointer' : 'default',
                  border: '1px solid rgba(0,0,0,0.1)',
                  boxShadow: offset === 0 
                    ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 15px rgba(0, 0, 0, 0.1)' 
                    : '0 15px 30px -5px rgba(0, 0, 0, 0.2)'
                }}
                onClick={() => {
                  if (offset !== 0 && !isAnimating) {
                    setCurrentStep(idx);
                  }
                }}
              >
                <div className="p-6 h-full flex flex-col overflow-hidden">
                  <h2 className="text-xl font-semibold mb-4 text-center">{state.title}</h2>
                  
                  {state.description && (
                    <p className="text-gray-600 mb-4 text-center">{state.description}</p>
                  )}
                  
                  {/* 可视化区域 - 增加高度使其填充空间 */}
                  <div className="flex-1 relative bg-gray-50 rounded-lg border border-gray-200 p-4 overflow-hidden">
                    {/* 使用实际的状态数据而不是简单指示器 */}
                    <svg width="100%" height="100%" className="overflow-visible">
                      {/* 先渲染连接线 */}
                      {state.visual && state.visual.connections && state.visual.connections.map((conn, connIdx) => {
                        const fromBox = state.visual.boxes.find(b => b.id === conn.from);
                        const toBox = state.visual.boxes.find(b => b.id === conn.to);
                        if (!fromBox || !toBox) return null;
                        
                        const fromX = fromBox.x + (fromBox.width || 100) / 2;
                        const fromY = fromBox.y + (fromBox.height || 60) / 2;
                        const toX = toBox.x + (toBox.width || 100) / 2;
                        const toY = toBox.y + (toBox.height || 60) / 2;
                        
                        return (
                          <g key={`conn-${connIdx}-slide-${idx}`}>
                            <line
                              x1={fromX}
                              y1={fromY}
                              x2={toX}
                              y2={toY}
                              stroke="#94a3b8"
                              strokeWidth="2"
                              strokeDasharray={conn.style === 'dashed' ? "5,5" : ""}
                            />
                            {conn.label && (
                              <text
                                x={(fromX + toX) / 2}
                                y={(fromY + toY) / 2}
                                dy="-5"
                                textAnchor="middle"
                                fill="#64748b"
                                fontSize="12"
                              >
                                {conn.label}
                              </text>
                            )}
                          </g>
                        );
                      })}
                      
                      {/* 渲染框和图标 */}
                      {state.visual && state.visual.boxes && state.visual.boxes.map((box) => (
                        <g key={`box-${box.id}-slide-${idx}`}>
                          <rect
                            x={box.x}
                            y={box.y}
                            width={box.width || 100}
                            height={box.height || 60}
                            rx="8"
                            fill={box.color || "#f3f4f6"}
                            stroke="#cbd5e1"
                            strokeWidth="2"
                          />
                          {box.icon && (
                            <foreignObject
                              x={box.x + (box.width || 100)/2 - 12}
                              y={box.y + 10}
                              width="24"
                              height="24"
                            >
                              <div className="flex justify-center">
                                {renderIcon(box.icon, { className: "h-5 w-5 text-gray-700" })}
                              </div>
                            </foreignObject>
                          )}
                          <text
                            x={box.x + (box.width || 100)/2}
                            y={box.y + (box.height || 60)/2 + (box.icon ? 10 : 0)}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill="#1f2937"
                            fontSize="14"
                            fontWeight="500"
                          >
                            {box.label}
                          </text>
                        </g>
                      ))}
                    </svg>
                  </div>
                  
                  {state.explanation && (
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg text-sm text-gray-700">
                      {state.explanation}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* 缩略图导航栏 */}
      <div 
        ref={scrollContainerRef} 
        className="flex overflow-x-auto space-x-2 p-4 bg-gray-100 rounded-lg mb-4 mx-4"
        style={{ scrollbarWidth: 'thin' }} // For Firefox
      >
        {executionStates.map((state, index) => (
          <button
            key={`thumb-${index}`}
            data-thumbnail // Used by useEffect to scroll into view
            onClick={() => {
              setCurrentStep(index);
              if (isPlaying) setIsPlaying(false);
            }}
            className={`p-2 rounded-md text-xs shrink-0 transition-all duration-200 ease-in-out
                        ${currentStep === index 
                          ? 'bg-blue-600 text-white shadow-lg transform scale-105' 
                          : 'bg-white text-gray-700 hover:bg-gray-200 hover:shadow-md'}`}
            title={state.title}
          >
            <div className="w-28 h-20 flex flex-col items-center justify-center border border-gray-300 rounded-md overflow-hidden">
              <span className="block truncate w-full text-center px-1 font-medium">{state.title}</span>
              <span className={`mt-1 text-xxs ${currentStep === index ? 'text-blue-200' : 'text-gray-500'}`}>
                步骤 {index + 1}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* 进度条 */}
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-4 mx-4">
        <div
          className="h-full bg-blue-600 transition-all duration-300"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
      </div>
    </div>
  );
}

