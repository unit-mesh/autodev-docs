import {
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
	Zap
} from 'lucide-react'

export const executionStates = [
	{
		step: 0,
		title: 'AI辅助需求分析',
		description: '',
		visual: {
			boxes: [
				{
					id: 'jira',
					label: 'Jira',
					x: 150,
					y: 100,
					width: 100,
					height: 80,
					color: '#dcfce7', // Light Green
					icon: Trello,
				},
				{
					id: 'confluence',
					label: 'Confluence',
					x: 350,
					y: 100,
					width: 100,
					height: 80,
					color: '#bbf7d0', // Medium Green
					icon: FileText,
				},
				{
					id: 'ai-requirements',
					label: 'AI需求分析',
					x: 150,
					y: 220,
					width: 100,
					height: 80,
					color: '#dbeafe', // Light Blue (AI)
					icon: BrainCircuit,
				},
				{
					id: 'requirements',
					label: '需求文档',
					x: 350,
					y: 220,
					width: 100,
					height: 80,
					color: '#93c5fd', // Dark Blue (Output)
					icon: Clipboard,
				},
			],
			connections: [
				{ from: 'jira', to: 'ai-requirements', label: '输入' },
				{ from: 'confluence', to: 'requirements', label: '存储' },
				{ from: 'ai-requirements', to: 'requirements', label: '生成' },
				{ from: 'jira', to: 'confluence', label: '集成' },
			],
		},
		explanation: '',
	},
	{
		step: 1,
		title: 'AI辅助设计',
		description: '',
		visual: {
			boxes: [
				{
					id: 'lucidchart',
					label: 'Lucidchart',
					x: 150,
					y: 100,
					width: 100,
					height: 80,
					color: '#dcfce7', // Light Green
					icon: Layers,
				},
				{
					id: 'figma',
					label: 'Figma',
					x: 350,
					y: 100,
					width: 100,
					height: 80,
					color: '#bbf7d0', // Medium Green
					icon: Kanban,
				},
				{
					id: 'ai-architecture',
					label: 'AI架构建议',
					x: 150,
					y: 220,
					width: 100,
					height: 80,
					color: '#dbeafe', // Light Blue (AI)
					icon: BrainCircuit,
				},
				{
					id: 'ai-ui-design',
					label: 'AI UI生成',
					x: 350,
					y: 220,
					width: 100,
					height: 80,
					color: '#bfdbfe', // Medium Blue (AI)
					icon: BrainCircuit,
				},
			],
			connections: [
				{ from: 'lucidchart', to: 'ai-architecture', label: '使用' },
				{ from: 'figma', to: 'ai-ui-design', label: '集成' },
				{ from: 'ai-architecture', to: 'ai-ui-design', label: '协同' },
				{ from: 'requirements', to: 'ai-architecture', label: '基于', style: 'dashed' },
				{ from: 'ai-requirements', to: 'ai-ui-design', label: '参考', style: 'dashed' },
			],
		},
		explanation: '',
	},
	{
		step: 2,
		title: 'AI辅助开发',
		description: '',
		visual: {
			boxes: [
				{
					id: 'github',
					label: 'GitHub',
					x: 150,
					y: 100,
					width: 100,
					height: 80,
					color: '#ede9fe', // Light Purple
					icon: GitBranch,
				},
				{
					id: 'vscode',
					label: 'VS Code',
					x: 350,
					y: 100,
					width: 100,
					height: 80,
					color: '#ddd6fe', // Medium Purple
					icon: Code2,
				},
				{
					id: 'ai-coding',
					label: 'AI代码生成',
					x: 150,
					y: 220,
					width: 100,
					height: 80,
					color: '#dbeafe', // Light Blue (AI)
					icon: BrainCircuit,
				},
				{
					id: 'ai-documentation',
					label: 'AI文档生成',
					x: 350,
					y: 220,
					width: 100,
					height: 80,
					color: '#bfdbfe', // Medium Blue (AI)
					icon: BrainCircuit,
				},
			],
			connections: [
				{ from: 'github', to: 'ai-coding', label: '集成' },
				{ from: 'vscode', to: 'ai-coding', label: '使用' },
				{ from: 'vscode', to: 'ai-documentation', label: '生成' },
				{ from: 'ai-architecture', to: 'ai-coding', label: '指导', style: 'dashed' },
				{ from: 'ai-ui-design', to: 'ai-coding', label: '实现', style: 'dashed' },
			],
		},
		explanation: '',
	},
	{
		step: 3,
		title: 'AI辅助测试',
		description: '',
		visual: {
			boxes: [
				{
					id: 'jenkins',
					label: 'Jenkins',
					x: 150,
					y: 100,
					width: 100,
					height: 80,
					color: '#ede9fe', // Light Purple
					icon: Cpu,
				},
				{
					id: 'selenium',
					label: 'Selenium',
					x: 350,
					y: 100,
					width: 100,
					height: 80,
					color: '#ddd6fe', // Medium Purple
					icon: Hammer,
				},
				{
					id: 'ai-test-gen',
					label: 'AI测试生成',
					x: 150,
					y: 220,
					width: 100,
					height: 80,
					color: '#dbeafe', // Light Blue (AI)
					icon: BrainCircuit,
				},
				{
					id: 'ai-bug-predict',
					label: 'AI缺陷预测',
					x: 350,
					y: 220,
					width: 100,
					height: 80,
					color: '#bfdbfe', // Medium Blue (AI)
					icon: BrainCircuit,
				},
			],
			connections: [
				{ from: 'jenkins', to: 'ai-test-gen', label: '执行' },
				{ from: 'selenium', to: 'ai-test-gen', label: '使用' },
				{ from: 'ai-test-gen', to: 'ai-bug-predict', label: '输入' },
				{ from: 'ai-bug-predict', to: 'jira', label: '创建', style: 'dashed' },
				{ from: 'ai-coding', to: 'ai-test-gen', label: '分析', style: 'dashed' },
			],
		},
		explanation: '',
	},
	{
		step: 4,
		title: 'AI辅助部署',
		description: '',
		visual: {
			boxes: [
				{
					id: 'docker',
					label: 'Docker',
					x: 150,
					y: 100,
					width: 100,
					height: 80,
					color: '#ffedd5', // Light Orange
					icon: Database,
				},
				{
					id: 'kubernetes',
					label: 'Kubernetes',
					x: 350,
					y: 100,
					width: 100,
					height: 80,
					color: '#fed7aa', // Medium Orange
					icon: Server,
				},
				{
					id: 'ai-deployment',
					label: 'AI部署优化',
					x: 150,
					y: 220,
					width: 100,
					height: 80,
					color: '#dbeafe', // Light Blue (AI)
					icon: BrainCircuit,
				},
				{
					id: 'ai-release-notes',
					label: 'AI发布说明',
					x: 350,
					y: 220,
					width: 100,
					height: 80,
					color: '#bfdbfe', // Medium Blue (AI)
					icon: BrainCircuit,
				},
			],
			connections: [
				{ from: 'docker', to: 'ai-deployment', label: '配置' },
				{ from: 'kubernetes', to: 'ai-deployment', label: '优化' },
				{ from: 'ai-coding', to: 'docker', label: '打包', style: 'dashed' },
				{ from: 'ai-bug-predict', to: 'ai-release-notes', label: '输入', style: 'dashed' },
				{ from: 'ai-release-notes', to: 'confluence', label: '发布', style: 'dashed' },
			],
		},
		explanation: '',
	},
	{
		step: 5,
		title: 'AI辅助维护',
		description: '',
		visual: {
			boxes: [
				{
					id: 'grafana',
					label: 'Grafana',
					x: 150,
					y: 100,
					width: 100,
					height: 80,
					color: '#ffedd5', // Light Orange
					icon: BarChart,
				},
				{
					id: 'slack',
					label: 'Slack',
					x: 350,
					y: 100,
					width: 100,
					height: 80,
					color: '#fed7aa', // Medium Orange
					icon: MessageSquare,
				},
				{
					id: 'ai-monitoring',
					label: 'AI异常检测',
					x: 150,
					y: 220,
					width: 100,
					height: 80,
					color: '#dbeafe', // Light Blue (AI)
					icon: BrainCircuit,
				},
				{
					id: 'ai-incident',
					label: 'AI事件分析',
					x: 350,
					y: 220,
					width: 100,
					height: 80,
					color: '#bfdbfe', // Medium Blue (AI)
					icon: BrainCircuit,
				},
			],
			connections: [
				{ from: 'grafana', to: 'ai-monitoring', label: '输入' },
				{ from: 'ai-monitoring', to: 'ai-incident', label: '触发' },
				{ from: 'ai-incident', to: 'slack', label: '通知' },
				{ from: 'ai-incident', to: 'jira', label: '创建', style: 'dashed' },
				{ from: 'ai-deployment', to: 'ai-monitoring', label: '配置', style: 'dashed' },
			],
		},
		explanation: '',
	},
	{
		step: 6,
		title: 'AI驱动的知识循环',
		description: '',
		visual: {
			boxes: [
				{
					id: 'requirements-phase',
					label: '需求分析',
					x: 150,
					y: 50,
					width: 100,
					height: 70,
					color: '#dcfce7', // Light Green
					icon: Clipboard,
				},
				{
					id: 'design-phase',
					label: '设计',
					x: 300,
					y: 50,
					width: 100,
					height: 70,
					color: '#bbf7d0', // Medium Green
					icon: Layers,
				},
				{
					id: 'development-phase',
					label: '开发',
					x: 450,
					y: 150,
					width: 100,
					height: 70,
					color: '#ede9fe', // Light Purple
					icon: Code2,
				},
				{
					id: 'testing-phase',
					label: '测试',
					x: 450,
					y: 250,
					width: 100,
					height: 70,
					color: '#ddd6fe', // Medium Purple
					icon: Bug,
				},
				{
					id: 'deployment-phase',
					label: '部署',
					x: 300,
					y: 350,
					width: 100,
					height: 70,
					color: '#ffedd5', // Light Orange
					icon: Rocket,
				},
				{
					id: 'maintenance-phase',
					label: '维护',
					x: 150,
					y: 250,
					width: 100,
					height: 70,
					color: '#fed7aa', // Medium Orange
					icon: Hammer,
				},
				{
					id: 'ai-knowledge-center',
					label: 'AI知识中心',
					x: 300,
					y: 200,
					width: 100,
					height: 70,
					color: '#dbeafe', // Light Blue (Central AI)
					icon: BrainCircuit,
				},
			],
			connections: [
				{ from: 'requirements-phase', to: 'design-phase', label: '' },
				{ from: 'design-phase', to: 'development-phase', label: '' },
				{ from: 'development-phase', to: 'testing-phase', label: '' },
				{ from: 'testing-phase', to: 'deployment-phase', label: '' },
				{ from: 'deployment-phase', to: 'maintenance-phase', label: '' },
				{ from: 'maintenance-phase', to: 'requirements-phase', label: '' },
				{ from: 'ai-knowledge-center', to: 'requirements-phase', label: '' },
				{ from: 'ai-knowledge-center', to: 'design-phase', label: '' },
				{ from: 'ai-knowledge-center', to: 'development-phase', label: '' },
				{ from: 'ai-knowledge-center', to: 'testing-phase', label: '' },
				{ from: 'ai-knowledge-center', to: 'deployment-phase', label: '' },
				{ from: 'ai-knowledge-center', to: 'maintenance-phase', label: '' },
			],
		},
		explanation: '',
	},
]
