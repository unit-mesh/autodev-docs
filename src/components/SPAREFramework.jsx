import React, { useState } from 'react';
import {
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
  ArrowRight,
  HistoryIcon,
  CompassIcon,
  BrainIcon,
  Zap,
  Activity,
  Shield,
  Workflow,
  Target,
  Heart,
  Code2,
  Server,
  AlertTriangle,
  Lightbulb,
  CheckCircle,
  Eye,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  Star
} from 'lucide-react';

export const SPAREFramework = () => {
  const [expandedPillar, setExpandedPillar] = useState(null);

  const togglePillar = (pillar) => {
    if (expandedPillar === pillar) {
      setExpandedPillar(null);
    } else {
      setExpandedPillar(pillar);
    }
  };

  return (
    <div className="spare-framework">
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h3 className="text-2xl font-bold mb-3 text-center text-blue-800">战略性AI驱动研发卓越 (SPARE) 框架</h3>
        <p className="text-center text-slate-600 mb-6">
          全面评估AI增强型研发效能与体验的度量框架，关注真实价值、开发者体验、代码质量与负责任AI实践
        </p>
        
        {/* 四大支柱/维度卡片 */}
        <div className="mb-6 space-y-4"> {/* 修改：移除 grid-4，使用 space-y-4 来分隔纵向和横向组 */}
          {/* 纵向支柱 A, B, C */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> {/* 新增：包裹纵向支柱的 div */}
            {/* 支柱A */}
            <div 
              className={`card cursor-pointer transition-all ${expandedPillar === 'A' ? 'border-blue-500 shadow-lg' : 'hover:border-blue-300'}`}
              onClick={() => togglePillar('A')}
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center">
                  <div className="icon-circle bg-blue-600 mr-3">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-blue-800">纵向支柱A</h4>
                </div>
                {expandedPillar === 'A' ? <ChevronUp className="h-5 w-5 text-blue-500" /> : <ChevronDown className="h-5 w-5 text-slate-400" />}
              </div>
              <h5 className="text-lg font-medium mb-2">AI赋能与价值实现</h5>
              <p className="text-slate-600 mb-2">评估AI对研发效率、生产力和创新的切实贡献</p>
              
              {expandedPillar === 'A' && (
                <div className="mt-4 bg-white p-4 rounded-lg border border-blue-100">
                  <h6 className="font-semibold mb-2 text-blue-700">核心指标类别</h6>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      <span><strong>AI采纳与信任度：</strong>工具使用率、建议接受率、开发者AI信任度</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      <span><strong>AI驱动的效率与生产力：</strong>任务周期时间缩短、重复性工作减少</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      <span><strong>AI对创新的贡献：</strong>AI建议的新颖解决方案、AI改进的创新速度</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      <span><strong>AI辅助质量：</strong>AI输出相关性、连贯性、内容真实性</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            
            {/* 支柱B */}
            <div 
              className={`card cursor-pointer transition-all ${expandedPillar === 'B' ? 'border-green-500 shadow-lg' : 'hover:border-green-300'}`}
              onClick={() => togglePillar('B')}
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center">
                  <div className="icon-circle bg-green-600 mr-3">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-green-800">纵向支柱B</h4>
                </div>
                {expandedPillar === 'B' ? <ChevronUp className="h-5 w-5 text-green-500" /> : <ChevronDown className="h-5 w-5 text-slate-400" />}
              </div>
              <h5 className="text-lg font-medium mb-2">协同式开发者体验与心流</h5>
              <p className="text-slate-600 mb-2">创建促进开发者福祉、高效工作流与心流状态的环境</p>
              
              {expandedPillar === 'B' && (
                <div className="mt-4 bg-white p-4 rounded-lg border border-green-100">
                  <h6 className="font-semibold mb-2 text-green-700">核心指标类别</h6>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span><strong>开发者福祉与敬业度：</strong>满意度、净推荐值、认知负荷、倦怠信号</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span><strong>工作流顺畅度与效率：</strong>变更前置时间、部署频率、心流效率</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span><strong>AI协作与技能演进：</strong>AI工具融入度、AI技能提升、协作质量</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            
            {/* 支柱C */}
            <div 
              className={`card cursor-pointer transition-all ${expandedPillar === 'C' ? 'border-purple-500 shadow-lg' : 'hover:border-purple-300'}`}
              onClick={() => togglePillar('C')}
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center">
                  <div className="icon-circle bg-purple-600 mr-3">
                    <Code2 className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-purple-800">纵向支柱C</h4>
                </div>
                {expandedPillar === 'C' ? <ChevronUp className="h-5 w-5 text-purple-500" /> : <ChevronDown className="h-5 w-5 text-slate-400" />}
              </div>
              <h5 className="text-lg font-medium mb-2">智能化代码质量与系统韧性</h5>
              <p className="text-slate-600 mb-2">确保AI辅助开发产出高质量、安全且具韧性的软件系统</p>
              
              {expandedPillar === 'C' && (
                <div className="mt-4 bg-white p-4 rounded-lg border border-purple-100">
                  <h6 className="font-semibold mb-2 text-purple-700">核心指标类别</h6>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                      <span><strong>AI影响下的代码完整性：</strong>代码流失率、缺陷密度、测试覆盖率</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                      <span><strong>系统稳定性与性能：</strong>变更失败率、MTTR、系统可用性</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                      <span><strong>主动技术债务管理：</strong>技术债务比率、代码健康度、重构成本</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div> {/* 新增：结束包裹纵向支柱的 div */}
          
          {/* 横向支柱D */}
          <div 
            className={`card cursor-pointer transition-all ${expandedPillar === 'D' ? 'border-amber-500 shadow-lg' : 'hover:border-amber-300'}`}
            onClick={() => togglePillar('D')}
          >
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center">
                <div className="icon-circle bg-amber-600 mr-3">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-amber-800">横向支柱D</h4>
              </div>
              {expandedPillar === 'D' ? <ChevronUp className="h-5 w-5 text-amber-500" /> : <ChevronDown className="h-5 w-5 text-slate-400" />}
            </div>
            <h5 className="text-lg font-medium mb-2">负责任AI与风险治理</h5>
            <p className="text-slate-600 mb-2">确保以合乎道德、安全、透明的方式开发和部署研发AI</p>
            
            {expandedPillar === 'D' && (
              <div className="mt-4 bg-white p-4 rounded-lg border border-amber-100">
                <h6 className="font-semibold mb-2 text-amber-700">核心指标类别</h6>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>伦理AI与公平性：</strong>偏见检测、公平性指标、可解释性评分</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>安全性与合规性：</strong>AI引入漏洞识别、数据隐私遵守、版权保护</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>AI模型鲁棒性：</strong>幻觉率、输出一致性、对抗性攻击防御</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        
        {/* 与业务成果关联 */}
        <div className="bg-white p-5 rounded-lg shadow mb-6">
          <h4 className="text-xl font-semibold mb-3 text-center text-blue-700">与业务成果关联</h4>
          <p className="text-slate-600 mb-4 text-center">SPARE框架指标与核心业务目标的直接关联</p>
          
          <div className="grid-3 gap-4">
            <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
              <div className="flex items-center mb-2">
                <Target className="h-5 w-5 text-blue-600 mr-2" />
                <h5 className="font-semibold text-blue-700">更快的上市时间</h5>
              </div>
              <p className="text-sm text-slate-600">由支柱A (AI辅助任务周期时间) 和支柱B (变更前置时间、部署频率) 共同促进</p>
            </div>
            
            <div className="p-4 rounded-lg bg-green-50 border border-green-100">
              <div className="flex items-center mb-2">
                <Star className="h-5 w-5 text-green-600 mr-2" />
                <h5 className="font-semibold text-green-700">改进的产品质量</h5>
              </div>
              <p className="text-sm text-slate-600">由支柱C (缺陷密度、变更失败率) 和维度D (AI代码漏洞识别) 共同保障</p>
            </div>
            
            <div className="p-4 rounded-lg bg-purple-50 border border-purple-100">
              <div className="flex items-center mb-2">
                <Lightbulb className="h-5 w-5 text-purple-600 mr-2" />
                <h5 className="font-semibold text-purple-700">提升的创新能力</h5>
              </div>
              <p className="text-sm text-slate-600">由支柱A (AI建议的新颖功能) 和支柱B (释放开发者创新时间) 共同驱动</p>
            </div>
          </div>
        </div>
        
        {/* 实施路线图 */}
        <div className="bg-white p-5 rounded-lg shadow">
          <h4 className="text-xl font-semibold mb-3 text-center text-blue-700">实施路线图</h4>
          
          <div className="flex items-stretch space-x-4 mb-4">
            <div className="flex-1 p-3 rounded-lg bg-blue-50 border border-blue-100">
              <h5 className="font-semibold text-blue-700 mb-2 flex items-center">
                <div className="h-6 w-6 rounded-full bg-blue-600 text-white flex items-center justify-center mr-2 text-sm font-bold">1</div>
                奠定基础
              </h5>
              <ul className="text-sm text-slate-600 space-y-1">
                <li className="flex items-start">
                  <ArrowRight className="h-3.5 w-3.5 text-blue-500 mr-1 mt-1 flex-shrink-0" />
                  <span>选择试点团队/项目</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-3.5 w-3.5 text-blue-500 mr-1 mt-1 flex-shrink-0" />
                  <span>确定核心指标集</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-3.5 w-3.5 text-blue-500 mr-1 mt-1 flex-shrink-0" />
                  <span>建立基线测量值</span>
                </li>
              </ul>
            </div>
            
            <div className="flex-1 p-3 rounded-lg bg-green-50 border border-green-100">
              <h5 className="font-semibold text-green-700 mb-2 flex items-center">
                <div className="h-6 w-6 rounded-full bg-green-600 text-white flex items-center justify-center mr-2 text-sm font-bold">2</div>
                扩展与工具化
              </h5>
              <ul className="text-sm text-slate-600 space-y-1">
                <li className="flex items-start">
                  <ArrowRight className="h-3.5 w-3.5 text-green-500 mr-1 mt-1 flex-shrink-0" />
                  <span>扩展至更多团队</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-3.5 w-3.5 text-green-500 mr-1 mt-1 flex-shrink-0" />
                  <span>实施自动化数据收集</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-3.5 w-3.5 text-green-500 mr-1 mt-1 flex-shrink-0" />
                  <span>拓展更多复杂指标</span>
                </li>
              </ul>
            </div>
            
            <div className="flex-1 p-3 rounded-lg bg-purple-50 border border-purple-100">
              <h5 className="font-semibold text-purple-700 mb-2 flex items-center">
                <div className="h-6 w-6 rounded-full bg-purple-600 text-white flex items-center justify-center mr-2 text-sm font-bold">3</div>
                优化与整合
              </h5>
              <ul className="text-sm text-slate-600 space-y-1">
                <li className="flex items-start">
                  <ArrowRight className="h-3.5 w-3.5 text-purple-500 mr-1 mt-1 flex-shrink-0" />
                  <span>优化指标与分析</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-3.5 w-3.5 text-purple-500 mr-1 mt-1 flex-shrink-0" />
                  <span>整合至研发规划</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-3.5 w-3.5 text-purple-500 mr-1 mt-1 flex-shrink-0" />
                  <span>开发可视化仪表板</span>
                </li>
              </ul>
            </div>
          </div>
          
          <p className="text-center text-slate-500 text-sm italic">
            框架实施应视为持续旅程，不断优化与调整，以适应组织需求和AI技术演进
          </p>
        </div>
      </div>
    </div>
  );
};

export default SPAREFramework;
