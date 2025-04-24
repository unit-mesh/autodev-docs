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
		'troubleshooting',
		{
			type: 'category',
			label: 'Usecases',
			items: [
				'usecases/usecases'
			],
		},
	],
	customizeSidebar: [
		'customize/customize',
		'customize/batch-ai-action',
		'customize/custom-action',
		'customize/custom-ext-contenxt-agent',
		'customize/custom-living-documentation',
		'customize/custom-llm-server',
		'customize/custom-quick-action',
		'customize/custom-test-template',
		'customize/prompt-override',
		'customize/team-prompts',
		'customize/variables',
	],
	developmentSidebar: [
		'development/agentic-testcase',
		'development/code-review-prompting',
		'development/compatible-strategy',
		'development/custom-language',
		'development/debug-new-language',
		'development/dev-new-language',
		'development/development',
		'development/development-faq',
		'development/git-commit-prompting',
		'development/prompt-strategy',
		'development/refactoring-prompt',
		'devins/development',
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
	],
	agenticSidebar: [
		{
			type: 'category',
			label: 'Custom Remote Agent',
			items: [
				'agent/agent',
				'agent/agent-action',
				'agent/custom-ai-agent',
				'agent/custom-request-response',
				'agent/server-example',
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
	]
}

export default sidebars
