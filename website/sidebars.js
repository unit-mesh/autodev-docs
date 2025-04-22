module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'intro',
    },
    {
      type: 'category',
      label: 'Agent',
      items: [
        'agent/agent',
        'agent/agent-action',
        'agent/server-example',
        'agent/custom-ai-agent',
        'agent/custom-request-response',
        {
          type: 'category',
          label: 'Bridge',
          items: [
            'agent/bridge/bridge',
            'agent/bridge/bridge-tool'
          ]
        }
      ]
    },
    // 其他分类结构类似...
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/quick-start'
      ]
    }
  ]
};