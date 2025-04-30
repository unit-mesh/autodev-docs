import React from 'react'

export const PlatformEngFlow = ({ onClickSection }) => {
  const colors = {
    // 主要节点颜色
    blue600: "#2563eb",
    green600: "#16a34a",
    purple600: "#9333ea",
    orange600: "#ea580c",
    indigo600: "#4f46e5",

    // 黄金路径颜色
    gold500: "#eab308",
    gold300: "#fcd34d",
    gold100: "#fef9c3",

    // 其他辅助颜色
    gray200: "#e5e7eb",
    white: "#ffffff",
    black: "#000000"
  };

  return (
    <div className="platform-flow relative">
      <svg
        width="1200"
        height="600"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid meet"
        style={{ overflow: "visible", maxWidth: "100%" }}
        className="mx-auto"
      >
        {/* 背景网格 */}
        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M 50 0 L 0 0 0 50" fill="none" stroke={colors.gray200} strokeWidth="0.5" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* 黄金路径底层 */}
        <path
          d="M 100 300
             C 150 300, 200 200, 300 200
             L 500 200
             C 600 200, 600 300, 600 400
             L 600 500
             C 700 500, 800 500, 900 400
             C 950 350, 950 250, 800 200
             C 700 150, 300 250, 100 300"
          fill="none"
          stroke={colors.gold300}
          strokeWidth="50"
          strokeOpacity="0.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="golden-path-base"
        />

        {/* 黄金路径 */}
        <path
          d="M 100 300
             C 150 300, 200 200, 300 200
             L 500 200
             C 600 200, 600 300, 600 400
             L 600 500
             C 700 500, 800 500, 900 400
             C 950 350, 950 250, 800 200
             C 700 150, 300 250, 100 300"
          fill="none"
          stroke={colors.gold500}
          strokeWidth="12"
          strokeDasharray="20 8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="golden-path"
        />

        {/* === 主要节点 === */}
        {/* 平台 API 层 */}
        <g
          onClick={() => onClickSection('platform-api')}
          className="cursor-pointer hover:opacity-90 transition-all"
          transform="translate(100, 300)"
        >
          <rect
            width="200"
            height="80"
            rx="8"
            fill={colors.white}
            stroke={colors.blue600}
            strokeWidth="3"
          />
          <text x="100" y="40" textAnchor="middle" fontSize="18" fontWeight="bold" fill={colors.blue600}>
            平台 API 层
          </text>
          <text x="100" y="65" textAnchor="middle" fontSize="14" fill={colors.blue600}>
            标准化服务接口
          </text>
        </g>

        {/* 知识管理引擎 */}
        <g
          onClick={() => onClickSection('knowledge-hub')}
          className="cursor-pointer hover:opacity-90 transition-all"
          transform="translate(300, 150)"
        >
          <rect
            width="200"
            height="80"
            rx="8"
            fill={colors.white}
            stroke={colors.green600}
            strokeWidth="3"
          />
          <text x="100" y="40" textAnchor="middle" fontSize="18" fontWeight="bold" fill={colors.green600}>
            知识管理引擎
          </text>
          <text x="100" y="65" textAnchor="middle" fontSize="14" fill={colors.green600}>
            团队智能知识中枢
          </text>
        </g>

        {/* 开发者工作台 */}
        <g
          onClick={() => onClickSection('dev-workbench')}
          className="cursor-pointer hover:opacity-90 transition-all"
          transform="translate(600, 400)"
        >
          <rect
            width="200"
            height="80"
            rx="8"
            fill={colors.white}
            stroke={colors.purple600}
            strokeWidth="3"
          />
          <text x="100" y="40" textAnchor="middle" fontSize="18" fontWeight="bold" fill={colors.purple600}>
            开发者工作台
          </text>
          <text x="100" y="65" textAnchor="middle" fontSize="14" fill={colors.purple600}>
            AI 增强的模板化开发
          </text>
        </g>

        {/* 低代码构建器 */}
        <g
          onClick={() => onClickSection('low-code')}
          className="cursor-pointer hover:opacity-90 transition-all"
          transform="translate(800, 200)"
        >
          <rect
            width="200"
            height="80"
            rx="8"
            fill={colors.white}
            stroke={colors.orange600}
            strokeWidth="3"
          />
          <text x="100" y="40" textAnchor="middle" fontSize="18" fontWeight="bold" fill={colors.orange600}>
            低代码构建器
          </text>
          <text x="100" y="65" textAnchor="middle" fontSize="14" fill={colors.orange600}>
            快速应用搭建
          </text>
        </g>

        {/* 治理与监控中枢 */}
        <g
          onClick={() => onClickSection('governance')}
          className="cursor-pointer hover:opacity-90 transition-all"
          transform="translate(900, 400)"
        >
          <rect
            width="200"
            height="80"
            rx="8"
            fill={colors.white}
            stroke={colors.indigo600}
            strokeWidth="3"
          />
          <text x="100" y="40" textAnchor="middle" fontSize="18" fontWeight="bold" fill={colors.indigo600}>
            治理与监控中枢
          </text>
          <text x="100" y="65" textAnchor="middle" fontSize="14" fill={colors.indigo600}>
            AI 代理与资源编排
          </text>
        </g>

        {/* === 连接箭头 === */}
        {/* API -> 知识管理 */}
        <path
          d="M 200 300 C 200 250, 250 190, 300 190"
          fill="none"
          stroke={colors.blue600}
          strokeWidth="2"
          markerEnd="url(#arrow-blue)"
        />

        {/* API -> 开发者工作台 */}
        <path
          d="M 300 340 C 400 370, 500 440, 600 440"
          fill="none"
          stroke={colors.blue600}
          strokeWidth="2"
          markerEnd="url(#arrow-blue)"
        />

        {/* 知识管理 -> 低代码 */}
        <path
          d="M 500 190 L 800 220"
          fill="none"
          stroke={colors.green600}
          strokeWidth="2"
          markerEnd="url(#arrow-green)"
        />

        {/* 知识管理 -> 开发者工作台 */}
        <path
          d="M 400 230 C 400 300, 500 400, 600 430"
          fill="none"
          stroke={colors.green600}
          strokeWidth="2"
          markerEnd="url(#arrow-green)"
        />

        {/* 开发者工作台 -> 治理中枢 */}
        <path
          d="M 800 440 L 900 440"
          fill="none"
          stroke={colors.purple600}
          strokeWidth="2"
          markerEnd="url(#arrow-purple)"
        />

        {/* 低代码 -> 治理中枢 */}
        <path
          d="M 900 280 C 950 320, 950 380, 950 400"
          fill="none"
          stroke={colors.orange600}
          strokeWidth="2"
          markerEnd="url(#arrow-orange)"
        />

        {/* 治理中枢 -> API (闭环) */}
        <path
          d="M 900 450 C 700 550, 300 500, 200 380"
          fill="none"
          stroke={colors.indigo600}
          strokeWidth="2"
          strokeDasharray="5 3"
          markerEnd="url(#arrow-indigo)"
        />

        <defs>
          <marker
            id="arrow-blue"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill={colors.blue600} />
          </marker>

          <marker
            id="arrow-green"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill={colors.green600} />
          </marker>

          <marker
            id="arrow-purple"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill={colors.purple600} />
          </marker>

          <marker
            id="arrow-orange"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill={colors.orange600} />
          </marker>

          <marker
            id="arrow-indigo"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill={colors.indigo600} />
          </marker>
        </defs>
      </svg>
    </div>
  );
};

export default PlatformEngFlow;
