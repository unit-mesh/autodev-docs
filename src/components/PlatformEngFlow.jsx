import React from 'react'
import { CloudCog, Code, Cpu, Database, LayoutGrid, Workflow } from 'lucide-react'

export const PlatformEngFlow = ({ onClickSection }) => {
	return (
		<div className="platform-flow-placeholder bg-slate-100 p-8 rounded-lg text-center border-2 border-dashed border-slate-300">
			<div className="grid grid-cols-5 gap-4">
				<div onClick={() => onClickSection('standard-api')} className="flow-item bg-blue-100 p-4 rounded-lg cursor-pointer hover:bg-blue-200">
					<Cpu className="h-8 w-8 mx-auto mb-2 text-blue-600" />
					<p className="font-medium">标准化平台 API</p>
				</div>
				<div onClick={() => onClickSection('knowledge-hub')} className="flow-item bg-green-100 p-4 rounded-lg cursor-pointer hover:bg-green-200">
					<Database className="h-8 w-8 mx-auto mb-2 text-green-600" />
					<p className="font-medium">知识中枢与团队 AI</p>
				</div>
				<div onClick={() => onClickSection('ai-templates')} className="flow-item bg-purple-100 p-4 rounded-lg cursor-pointer hover:bg-purple-200">
					<Code className="h-8 w-8 mx-auto mb-2 text-purple-600" />
					<p className="font-medium">AI 赋能的模板应用</p>
				</div>
				<div onClick={() => onClickSection('low-code')} className="flow-item bg-orange-100 p-4 rounded-lg cursor-pointer hover:bg-orange-200">
					<LayoutGrid className="h-8 w-8 mx-auto mb-2 text-orange-600" />
					<p className="font-medium">低代码系统</p>
				</div>
				<div onClick={() => onClickSection('idp-governance')} className="flow-item bg-indigo-100 p-4 rounded-lg cursor-pointer hover:bg-indigo-200">
					<CloudCog className="h-8 w-8 mx-auto mb-2 text-indigo-600" />
					<p className="font-medium">IDP 作为 AI 代理治理中枢</p>
				</div>
			</div>
			<div className="mt-4 flex justify-center">
				<Workflow className="h-10 w-10 text-slate-500" />
			</div>
		</div>
	);
};

export default PlatformEngFlow;
