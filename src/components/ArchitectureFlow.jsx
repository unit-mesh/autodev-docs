import React, { useState } from 'react';

export const ArchitectureFlow = ({ onClickSection }) => {
	// 定义颜色常量，与您原始代码中的颜色对应
	const colors = {
		purple700: "#7e22ce", // bg-purple-700
		slate100: "#f1f5f9",  // bg-slate-100
		orange500: "#f97316", // bg-orange-500
		green600: "#16a34a",  // bg-green-600
		purple400: "#c084fc", // bg-purple-400
		pink500: "#ec4899",   // bg-pink-500
	};

	return (
		<div className="architecture-flow">
			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<svg
					width="1200"
					height="480"
					viewBox="200 130 1200 480"
					preserveAspectRatio="xMidYMid meet"
					style={{ overflow: "visible", maxWidth: "960px" }}
				>
					{/* 节点 */}
					{/* 顶部行 */}
					<g
						onClick={(e) => onClickSection('domain-language', e)}
						className="cursor-pointer"
					>
						<rect
							x="586"
							y="52"
							width="200"
							height="60"
							rx="4"
							fill={colors.purple700}
						/>
						<text x="686" y="80" textAnchor="middle" fill="white" fontSize="18" fontWeight="500">
							领域知识丰富上下文
						</text>
						<text x="686" y="100" textAnchor="middle" fill="white" fontSize="12" fontWeight="500">
							（研发知识工程）
						</text>
					</g>

					<g>
						<rect
							x="67"
							y="172"
							width="180"
							height="60"
							rx="4"
							fill={colors.slate100}
						/>
						<text x="157" y="207" textAnchor="middle" fill="black" fontSize="18" fontWeight="500">
							问题/任务
						</text>
					</g>

					<g
						onClick={(e) => onClickSection('refined-question', e)}
						className="cursor-pointer"
					>
						<rect
							x="590"
							y="172"
							width="180"
							height="60"
							rx="4"
							fill={colors.slate100}
						/>
						<text x="680" y="207" textAnchor="middle" fill="black" fontSize="18" fontWeight="500">
							问题精炼与意图定义
						</text>
					</g>

					<g
						onClick={(e) => onClickSection('planner', e)}
						className="cursor-pointer"
					>
						<rect
							x="1066"
							y="172"
							width="180"
							height="60"
							rx="4"
							fill={colors.orange500}
						/>
						<text x="1156" y="197" textAnchor="middle" fill="white" fontSize="18" fontWeight="500">
							知识导向任务规划
						</text>
						<text x="1156" y="217" textAnchor="middle" fill="white" fontSize="12" fontWeight="500">
							(基于知识与规范的内容生成)
						</text>
					</g>

					<g>
						<rect
							x="1340"
							y="172"
							width="180"
							height="60"
							rx="4"
							fill={colors.green600}
						/>
						<text x="1430" y="207" textAnchor="middle" fill="white" fontSize="18" fontWeight="500">
							Actions
						</text>
					</g>

					<g
						onClick={(e) => onClickSection('validation', e)}
						className="cursor-pointer"
						>
						<rect
							x="1340"
							y="415"
							width="180"
							height="60"
							rx="4"
							fill={colors.green600}
						/>
						<text x="1430" y="450" textAnchor="middle" fill="white" fontSize="18" fontWeight="500">
							验证优先开发(VFD)
						</text>
					</g>

					<g>
						<rect
							x="67"
							y="415"
							width="180"
							height="60"
							rx="4"
							fill={colors.slate100}
						/>
						<text x="157" y="450" textAnchor="middle" fill="black" fontSize="18" fontWeight="500">
							代码补全
						</text>
					</g>

					<g
						onClick={(e) => onClickSection('spec-practice', e)}
						className="cursor-pointer"
					>
						<rect
							x="330"
							y="415"
							width="180"
							height="60"
							rx="4"
							fill={colors.purple700}
						/>
						<text x="420" y="442" textAnchor="middle" fill="white" fontSize="18" fontWeight="500">
							团队编码规范
						</text>
						<text x="420" y="462" textAnchor="middle" fill="white" fontSize="12" fontWeight="500">
							（研发知识工程）
						</text>
					</g>

					<g
						onClick={(e) => onClickSection('semantic-code', e)}
						className="cursor-pointer"
					>
						<rect
							x="590"
							y="415"
							width="180"
							height="60"
							rx="4"
							fill={colors.purple400}
						/>
						<text x="680" y="442" textAnchor="middle" fill="white" fontSize="18" fontWeight="500">
							自文档化代码增强
						</text>
						<text x="680" y="462" textAnchor="middle" fill="white" fontSize="12" fontWeight="500">
							语义化表达
						</text>
					</g>

					<g
						onClick={(e) => onClickSection('refactor-tool', e)}
						className="cursor-pointer"
					>
						<rect
							x="850"
							y="415"
							width="180"
							height="60"
							rx="4"
							fill={colors.green600}
						/>
						<text x="940" y="450" textAnchor="middle" fill="white" fontSize="18" fontWeight="500">
							面向 AI 理解的重构
						</text>
					</g>

					<g
						onClick={(e) => onClickSection('retrieval-tool', e)}
						className="cursor-pointer"
					>
						<rect
							x="1110"
							y="415"
							width="180"
							height="60"
							rx="4"
							fill={colors.pink500}
						/>
						<text x="1200" y="452" textAnchor="middle" fill="white" fontSize="18" fontWeight="500">
							语义化代码检索
						</text>
					</g>

					{/* 底部行 */}
					<g>
						<rect
							x="850"
							y="570"
							width="180"
							height="60"
							rx="4"
							fill={colors.purple400}
						/>
						<text x="940" y="605" textAnchor="middle" fill="white" fontSize="18" fontWeight="500">
							代码库
						</text>
					</g>

					{/* 箭头 */}
					{/* 顶部行连接 */}
					<g className="arrows">
						{/* 统一领域语言 到 需求精炼 */}
						<path
							d="M686 112 C686 140 686 150 686 172"
							stroke="black"
							strokeWidth="2"
							fill="none"
							markerEnd="url(#arrowhead-black)"
							className="flow-path"
						/>

						{/* 统一领域语言 到 智能任务规划 */}
						<path
							d="M786 77 C900 100 1000 150 1066 172"
							stroke="black"
							strokeWidth="2"
							fill="none"
							markerEnd="url(#arrowhead-black)"
							className="flow-path"
						/>

						{/* 问题/任务 到 需求精炼 */}
						<path
							d="M247 202 C400 202 500 202 590 202"
							stroke="black"
							strokeWidth="2"
							fill="none"
							markerEnd="url(#arrowhead-black)"
							className="flow-path"
						/>

						{/* 需求精炼 到 智能任务规划 */}
						<path
							d="M770 202 C850 202 950 202 1066 202"
							stroke="black"
							strokeWidth="2"
							fill="none"
							markerEnd="url(#arrowhead-black)"
							className="flow-path"
						/>

						{/* 智能任务规划 到 Action */}
						<path
							d="M1246 202 C1280 202 1310 202 1340 202"
							stroke="green"
							strokeWidth="2"
							fill="none"
							markerEnd="url(#arrowhead-green)"
							className="flow-path"
						/>

						{/* Action 到 AI 代码自校验 */}
						<path
							d="M1430 232 C1430 300 1430 350 1430 415"
							stroke="green"
							strokeWidth="2"
							fill="none"
							className="flow-path"
						/>

						{/* 代码补全 到 团队编码规范 */}
						<path
							d="M247 445 C280 445 310 445 330 445"
							stroke="black"
							strokeWidth="2"
							fill="none"
							markerEnd="url(#arrowhead-black)"
							className="flow-path"
						/>

						{/* 团队编码规范 到 自文档化代码 */}
						<path
							d="M510 445 C540 445 570 445 590 445"
							stroke="black"
							strokeWidth="2"
							fill="none"
							markerEnd="url(#arrowhead-black)"
							className="flow-path"
						/>

						{/* 智能任务规划 到 面向生成的重构 */}
						<path
							d="M1156 232 C1156 300 1000 350 940 415"
							stroke="green"
							strokeWidth="2"
							fill="none"
							markerEnd="url(#arrowhead-green)"
							className="flow-path"
						/>

						{/* 智能任务规划 到 语义化代码检索 */}
						<path
							d="M1156 232 C1156 300 1200 350 1200 415"
							stroke="red"
							strokeWidth="2"
							fill="none"
							markerEnd="url(#arrowhead-red)"
							className="flow-path"
						/>

						{/* 面向生成的重构 到 自文档化代码 */}
						<path
							d="M850 445 C820 445 790 445 770 445"
							stroke="green"
							strokeWidth="2"
							fill="none"
							markerEnd="url(#arrowhead-green)"
							className="flow-path"
						/>

						{/* 语义化代码检索 到 代码库 */}
						<path
							d="M1200 475 C1200 520 1000 550 940 570"
							stroke="red"
							strokeWidth="2"
							fill="none"
							markerEnd="url(#arrowhead-red)"
							className="flow-path"
						/>

						<defs>
							{/* Black arrow */}
							<marker
								id="arrowhead-black"
								markerWidth="12"
								markerHeight="8"
								refX="10"
								refY="4"
								orient="auto"
							>
								<path
									d="M0,0 L10,4 L0,8 L2,4 Z"
									fill="black"
									className="arrow-head"
								/>
							</marker>
							{/* Green arrow */}
							<marker
								id="arrowhead-green"
								markerWidth="12"
								markerHeight="8"
								refX="10"
								refY="4"
								orient="auto"
							>
								<path
									d="M0,0 L10,4 L0,8 L2,4 Z"
									fill="#16a34a"
									className="arrow-head"
								/>
							</marker>
							{/* Red arrow */}
							<marker
								id="arrowhead-red"
								markerWidth="12"
								markerHeight="8"
								refX="10"
								refY="4"
								orient="auto"
							>
								<path
									d="M0,0 L10,4 L0,8 L2,4 Z"
									fill="#ec4899"
									className="arrow-head"
								/>
							</marker>
							{/* Start markers for bidirectional paths */}
							<marker
								id="arrowhead-start-black"
								markerWidth="12"
								markerHeight="8"
								refX="2"
								refY="4"
								orient="auto"
							>
								<path
									d="M10,0 L0,4 L10,8 L8,4 Z"
									fill="black"
									className="arrow-head"
								/>
							</marker>
						</defs>

						{/* 自文档化代码 与 代码库 的双向关系 */}
						<path
							d="M680 475 C680 520 800 550 940 570"
							stroke="black"
							strokeWidth="2"
							fill="none"
							markerEnd="url(#arrowhead-black)"
							markerStart="url(#arrowhead-start-black)"
							className="flow-path"
						/>

						{/* 需求精炼 到 自文档化代码 */}
						<path
							d="M680 232 C680 300 680 350 680 415"
							stroke="black"
							strokeWidth="2"
							fill="none"
							markerEnd="url(#arrowhead-black)"
							className="flow-path"
						/>
					</g>

					{/* 图例 */}
					<g className="legend" transform="translate(50, 580)">
						<rect x="0" y="0" width="30" height="20" fill={colors.purple700} />
						<text x="40" y="15" fontSize="14">
							Memory
						</text>
						<rect x="0" y="30" width="30" height="20" fill={colors.orange500} />
						<text x="40" y="45" fontSize="14">
							Planning
						</text>
						<rect x="0" y="60" width="30" height="20" fill={colors.pink500} />
						<text x="40" y="75" fontSize="14">
							Tool
						</text>
						<rect x="0" y="90" width="30" height="20" fill={colors.green600} />
						<text x="40" y="105" fontSize="14">
							Action
						</text>
					</g>

					{/* 箭头标记定义 */}
					<defs>
						<marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
							<polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
						</marker>
					</defs>
				</svg>
			</div>
		</div>
	);
};

export default ArchitectureFlow;
