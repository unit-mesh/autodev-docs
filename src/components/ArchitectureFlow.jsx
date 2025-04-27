import React from 'react';

export const ArchitectureFlow = ({ onClickSection }) => {
	// 定义颜色常量，与您原始代码中的颜色对应
	const colors = {
		purple700: "#6b5b95", // bg-purple-700
		slate100: "#f1f5f9",  // bg-slate-100
		orange500: "#f97316", // bg-orange-500
		green600: "#16a34a",  // bg-green-600
		purple400: "#c8b8db", // bg-purple-400
		pink500: "#ec4899",   // bg-pink-500
	};

	return (
		<div className="architecture-flow">
			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<svg
					width="100%"
					height="600"
					viewBox="0 0 1200 720"
					preserveAspectRatio="xMidYMid meet"
					style={{ overflow: "visible", maxWidth: "960px" }}
				>
					{/* 节点 */}
					{/* 顶部行 */}
					<g
						onClick={() => onClickSection('domain-language')}
						className="cursor-pointer"
					>
						<rect
							x="380"
							y="42"
							width="160"
							height="70"
							rx="4"
							fill={colors.purple700}
						/>
						<text x="460" y="77" textAnchor="middle" fill="white" fontSize="18" fontWeight="500">
							统一领域语言
						</text>
					</g>

					{/* 第二行 */}
					<g className="cursor-pointer">
						<rect
							x="67"
							y="172"
							width="140"
							height="60"
							rx="4"
							fill={colors.slate100}
						/>
						<text x="137" y="207" textAnchor="middle" fill="black" fontSize="18" fontWeight="500">
							问题/任务
						</text>
					</g>

					<g
						onClick={() => onClickSection('refined-question')}
						className="cursor-pointer"
					>
						<rect
							x="390"
							y="172"
							width="140"
							height="60"
							rx="4"
							fill={colors.slate100}
						/>
						<text x="460" y="207" textAnchor="middle" fill="black" fontSize="18" fontWeight="500">
							需求精炼
						</text>
					</g>

					<g
						onClick={() => onClickSection('planner')}
						className="cursor-pointer"
					>
						<rect
							x="713"
							y="172"
							width="140"
							height="60"
							rx="4"
							fill={colors.orange500}
						/>
						<text x="783" y="207" textAnchor="middle" fill="white" fontSize="18" fontWeight="500">
							智能任务规划
						</text>
					</g>

					<g className="cursor-pointer">
						<rect
							x="953"
							y="172"
							width="140"
							height="60"
							rx="4"
							fill={colors.green600}
						/>
						<text x="1023" y="207" textAnchor="middle" fill="white" fontSize="18" fontWeight="500">
							行动
						</text>
					</g>

					{/* 第三行 - 语义化命名约定 */}
					<g className="bullet-points">
						<text x="460" y="322" fontSize="16" fontWeight="400">
							• 文件名
						</text>
						<text x="460" y="350" fontSize="16" fontWeight="400">
							• 类名
						</text>
						<text x="460" y="378" fontSize="16" fontWeight="400">
							• 函数名
						</text>
					</g>

					{/* 第四行 */}
					<g className="cursor-pointer">
						<rect
							x="67"
							y="415"
							width="140"
							height="60"
							rx="4"
							fill={colors.slate100}
						/>
						<text x="137" y="450" textAnchor="middle" fill="black" fontSize="18" fontWeight="500">
							代码补全
						</text>
					</g>

					<g
						onClick={() => onClickSection('spec-practice')}
						className="cursor-pointer"
					>
						<rect
							x="267"
							y="415"
							width="140"
							height="60"
							rx="4"
							fill={colors.purple700}
						/>
						<text x="337" y="450" textAnchor="middle" fill="white" fontSize="18" fontWeight="500">
							团队编码规范
						</text>
					</g>

					<g
						onClick={() => onClickSection('semantic-code')}
						className="cursor-pointer"
					>
						<rect
							x="467"
							y="415"
							width="140"
							height="60"
							rx="4"
							fill={colors.purple400}
						/>
						<text x="537" y="450" textAnchor="middle" fill="black" fontSize="18" fontWeight="500">
							自文档化代码
						</text>
					</g>

					<g
						onClick={() => onClickSection('refactor-tool')}
						className="cursor-pointer"
					>
						<rect
							x="667"
							y="415"
							width="140"
							height="60"
							rx="4"
							fill={colors.green600}
						/>
						<text x="737" y="450" textAnchor="middle" fill="white" fontSize="18" fontWeight="500">
							面向生成的重构
						</text>
					</g>

					<g
						onClick={() => onClickSection('retrieval-tool')}
						className="cursor-pointer"
					>
						<rect
							x="867"
							y="415"
							width="140"
							height="60"
							rx="4"
							fill={colors.pink500}
						/>
						<text x="937" y="450" textAnchor="middle" fill="white" fontSize="18" fontWeight="500">
							智能代码检索
						</text>
					</g>

					{/* 底部行 */}
					<g className="cursor-pointer">
						<rect
							x="667"
							y="570"
							width="140"
							height="60"
							rx="4"
							fill={colors.purple400}
						/>
						<text x="737" y="605" textAnchor="middle" fill="black" fontSize="18" fontWeight="500">
							代码库
						</text>
					</g>

					{/* 箭头 */}
					{/* 顶部行连接 */}
					<g className="arrows">
						{/* 统一领域语言 到 需求精炼 */}
						<path d="M460 112 L460 172" stroke="black" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead)" />

						{/* 统一领域语言 到 智能任务规划 */}
						<path d="M540 77 L713 172" stroke="black" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead)" />

						{/* 问题/任务 到 需求精炼 */}
						<path d="M207 202 L390 202" stroke="black" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead)" />

						{/* 需求精炼 到 智能任务规划 */}
						<path d="M530 202 L713 202" stroke="black" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead)" />

						{/* 智能任务规划 到 行动 */}
						<path d="M853 202 L953 202" stroke="green" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead)" />

						{/* 代码补全 到 团队编码规范 */}
						<path d="M207 445 L267 445" stroke="black" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead)" />

						{/* 团队编码规范 到 自文档化代码 */}
						<path d="M407 445 L467 445" stroke="black" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead)" />

						{/* 智能任务规划 到 面向生成的重构 */}
						<path
							d="M783 232 C783 300 700 350 737 415"
							stroke="green"
							strokeWidth="1.5"
							fill="none"
							markerEnd="url(#arrowhead)"
						/>

						{/* 智能任务规划 到 智能代码检索 */}
						<path
							d="M783 232 C783 300 900 350 937 415"
							stroke="red"
							strokeWidth="1.5"
							fill="none"
							markerEnd="url(#arrowhead)"
						/>

						{/* 面向生成的重构 到 自文档化代码 */}
						<path d="M667 445 L607 445" stroke="green" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead)" />

						{/* 智能代码检索 到 代码库 */}
						<path
							d="M937 475 C937 520 800 550 737 570"
							stroke="red"
							strokeWidth="1.5"
							fill="none"
							markerEnd="url(#arrowhead)"
						/>

						<defs>
							<marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
								<polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
							</marker>
							<marker id="arrowhead-start" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
								<polygon points="10 0, 0 3.5, 10 7" fill="currentColor" />
							</marker>
						</defs>

						{/* 自文档化代码 与 代码库 的双向关系 */}
						<path
							d="M537 475 C537 520 700 550 737 570"
							stroke="black"
							strokeWidth="1.5"
							fill="none"
							markerEnd="url(#arrowhead)"
							markerStart="url(#arrowhead-start)"
						/>

						{/* 需求精炼 到 自文档化代码 */}
						<path d="M460 232 L460 415" stroke="black" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead)" />
					</g>

					{/* 图例 */}
					<g className="legend" transform="translate(50, 580)">
						<rect x="0" y="0" width="30" height="20" fill={colors.purple700} />
						<text x="40" y="15" fontSize="14">
							知识与规范
						</text>

						<rect x="0" y="30" width="30" height="20" fill={colors.orange500} />
						<text x="40" y="45" fontSize="14">
							智能规划
						</text>

						<rect x="0" y="60" width="30" height="20" fill={colors.pink500} />
						<text x="40" y="75" fontSize="14">
							辅助工具
						</text>

						<rect x="0" y="90" width="30" height="20" fill={colors.green600} />
						<text x="40" y="105" fontSize="14">
							实施行动
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
