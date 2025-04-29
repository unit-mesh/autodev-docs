const sidebars = {
	tutorialSidebar: [
		'intro',
		'quick-start',
		{
			type: 'category',
			label: 'Basic Features',
			items: [
				'features/features',
				'features/auto-test',
				'features/chat-with-code',
				'features/code-completion',
				'features/devops',
				'features/fix-error',
				'features/generate-documentation',
				'features/inline-chat',
				'features/refactoring',
				'features/shell-suggest',
				'features/use-ai-in-editor',
				'features/works-with-git',
				'features/works-with-review',
			],
		},
		{
			type: 'category',
			label: 'Agentic Coding',
			items: [
				'composer/composer',
				'composer/planner',
				'composer/sketch-view',
				'composer/project-rule',
				'composer/observer',
				'composer/workspace',
				'composer/composer-prompting',
				'composer/custom-ai-composer',
				{
					type: 'category',
					label: 'Bridge',
					items: [
						'agent/bridge/bridge',
						'agent/bridge/bridge-tool',
					]
				}
			],
		},
		{
			type: 'category',
			label: 'Scenes',
			items: [
				'scenes/domain-driven-design',
				'scenes/harmony-os',
				'scenes/legacy-migration',
				'scenes/scenes',
				'scenes/tdd',
				'scenes/tech-writing',
			],
		},
		{
			type: 'category',
			label: 'Workflow',
			items: [
				'workflow/workflow',
				'workflow/auto-page',
				'workflow/auto-sql',
				'workflow/auto-test',
			],
		},
		'troubleshooting',
		'usecases'
	],
	customizeSidebar: [
		'customize/customize',
		'customize/custom-llm-server',
		{
			type: 'category',
			label: 'Personalization',
			items: [
				'customize/custom-living-documentation',
				'customize/custom-action',
				'customize/variables',
			],
		},
		'customize/prompt-override',
		{
			type: 'category',
			label: 'Team Prompts',
			items: [
				'customize/team-prompts',
				'customize/batch-ai-action',
				'customize/custom-quick-action',
			],
		},
		{
			type: 'category',
			label: 'Testing Prompting',
			items: [
				'customize/custom-test-template',
				'customize/custom-ext-context-agent',
			],
		},
	],
	developmentSidebar: [
		'development/development',
		'development/development-faq',
		'development/compatible-strategy',
		{
			type: 'category',
			label: 'New Language',
			items: [
				'development/custom-language',
				'development/debug-new-language',
				'development/dev-new-language',
			],
		},
		{
			type: 'category',
			label: 'Prompting',
			items: [
				'development/prompt-strategy',
				'development/code-review-prompting',
				'development/git-commit-prompting',
				'development/refactoring-prompt',
			],
		},
		{
			type: 'category',
			label: 'Patterns',
			items: [
				'development/patterns/patterns',
				'development/patterns/executable-unit-validation',
				'development/patterns/by-example',
				'development/patterns/task-driven',
				'development/patterns/unit-driven',
			],
		},
		'development/agentic-testcase',
		'devins/development',
	],
	agenticSidebar: [
		'agent/index',
		{
			type: 'category',
			label: 'Remote Agents',
			items: [
				'agent/remote',
				'agent/agent-action',
				'agent/custom-ai-agent',
				'agent/custom-request-response',
				'agent/server-example',
			],
		},
		{
			type: 'category',
			label: 'Local Agents',
			items: [
				'local-agent/index',
				'local-agent/builtin-variable',
				'local-agent/custom-variable',
				'local-agent/env',
				'local-agent/foreign-function',
				'local-agent/hobbit-hole',
				'local-agent/template',
				'local-agent/toolchain-function',
				'local-agent/toolchain-variable',
				'local-agent/when',
			],
		},
		{
			type: 'category',
			label: 'MCP',
			items: [
				'mcp/index',
				'mcp/development',
				'mcp/mcp-client',
				'mcp/mcp-debugger',
				'mcp/mcp-server',
			],
		},
		{
			type: 'category',
			label: 'AI Agent Language',
			items: [
				'devins/devins',
				'devins/quick-start',
				'devins/orchestration',
				'devins/devins-language',
			],
		},
	],
	friendlySidebar: [
		'ai-friendly/index',
		'ai-friendly/ai-friendly-codebase',
		{
			type: 'category',
			label: 'AI-Friendly Question',
			items: [
				'ai-friendly/ai-friendly-question-chatgpt',
				'ai-friendly/ai-friendly-question-gemini',
			],
		}
	]
}

export default sidebars
