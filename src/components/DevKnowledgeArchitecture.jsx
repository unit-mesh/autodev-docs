import React from 'react'
import {
  Box,
  Database,
  Code,
  GitBranch,
  BarChart,
  FileText,
  Layers,
  Link as LinkIcon,
  Webhook,
  GitCommit,
  Network,
  Search,
  FileSearch,
  ExternalLink,
  Puzzle,
  Component,
  Users,
  MessageSquare,
  ArrowRight
} from 'lucide-react'

export const DevKnowledgeArchitecture = () => {
  return (
    <div>
      <div className="grid-3 mb-8">
        <div className="card">
          <div className="icon-circle bg-blue-600">
            <Database className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-2">开发工具数据源</h3>
          <p className="text-slate-600 mb-4">各类开发工具资源作为知识基础</p>

          <div className="bg-slate-100 p-4 rounded-lg">
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>代码仓库与版本历史</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>问题跟踪与项目管理</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>CI/CD 系统与监控平台</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>文档平台与服务目录</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="icon-circle bg-green-600">
            <Network className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-2">知识图谱</h3>
          <p className="text-slate-600 mb-4">关联数据与结构化信息</p>

          <div className="bg-slate-100 p-4 rounded-lg">
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>实体：代码、服务、团队、文档</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>关系：依赖、所有权、变更历史</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>语义索引：自然语言检索</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>上下文关联：跨系统信息链接</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="icon-circle bg-purple-600">
            <Users className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-2">开发者体验</h3>
          <p className="text-slate-600 mb-4">统一知识访问与交互</p>

          <div className="bg-slate-100 p-4 rounded-lg">
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>统一搜索：跨系统资源检索</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>AI 助手：基于全局上下文理解</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>可视化：关系图谱动态展示</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>上下文链接：相关资源智能推荐</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-center">知识流转与反馈循环</h3>

        <div className="relative flex justify-between items-center mb-4 px-12">
          <div className="flex flex-col items-center">
            <div className="icon-circle bg-blue-600 mb-2">
              <Code className="h-5 w-5 text-white" />
            </div>
            <div className="text-center text-sm font-medium">数据收集</div>
          </div>
          <ArrowRight className="text-blue-600" size={24} />
          <div className="flex flex-col items-center">
            <div className="icon-circle bg-green-600 mb-2">
              <Database className="h-5 w-5 text-white" />
            </div>
            <div className="text-center text-sm font-medium">知识处理</div>
          </div>
          <ArrowRight className="text-blue-600" size={24} />
          <div className="flex flex-col items-center">
            <div className="icon-circle bg-purple-600 mb-2">
              <Search className="h-5 w-5 text-white" />
            </div>
            <div className="text-center text-sm font-medium">知识访问</div>
          </div>
          <ArrowRight className="text-blue-600" size={24} />
          <div className="flex flex-col items-center">
            <div className="icon-circle bg-indigo-600 mb-2">
              <MessageSquare className="h-5 w-5 text-white" />
            </div>
            <div className="text-center text-sm font-medium">用户反馈</div>
          </div>
        </div>

        <div className="grid-2 mt-6">
          <div className="bg-white p-5 rounded-lg shadow">
            <h4 className="font-semibold mb-2 text-blue-700">集成平台</h4>
            <p className="text-slate-600 text-sm">
              作为内部开发平台(IDP)的插件或组件，与现有工具生态无缝集成，提供统一入口
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow">
            <h4 className="font-semibold mb-2 text-blue-700">AI 上下文增强</h4>
            <p className="text-slate-600 text-sm">
              为各种 AI 工具提供丰富的组织特定上下文，显著提升代码生成、问题解决和文档生成能力
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
