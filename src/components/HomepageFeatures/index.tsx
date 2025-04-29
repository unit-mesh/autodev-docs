import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Heading from "@theme/Heading";
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

type FeatureItem = {
  title: string;
  description: ReactNode;
  icon?: ReactNode;
  image: string;
};

function useFeatureList() {
  const { i18n: { currentLocale } } = useDocusaurusContext();
  const isEnglish = currentLocale === 'en';

  return [
    {
      title: isEnglish ? 'Intelligent Task Automation' : '智能任务自动化',
      description: isEnglish ? (
        <>
          Leverage AutoDev Planner with AI models to automatically plan and execute complex development tasks (coding, testing, building, etc.), supporting manual adjustments and simplifying workflows.
        </>
      ) : (
        <>
          结合强大的推理模型，AutoDev Planner 能自动规划与执行复杂的开发任务（编码、测试、构建等），支持手动调整，简化工作流程。
        </>
      ),
      icon: <div className={styles.featureIconBrain} />,
      image: '/img/features/planner-snapshot.png'
    },
    {
      title: isEnglish ? 'Highly Customizable Experience' : '高度定制化体验',
      description: isEnglish ? (
        <>
          Support for custom agents, private models, and prompt instructions, easily creating AutoDev workflows that meet the specific needs of individuals, teams, or enterprises to improve development efficiency.
        </>
      ) : (
        <>
          支持自定义智能体、私有模型及提示词指令，轻松打造满足个人、团队或企业特定需求的 AutoDev 工作流，提升开发效率。
        </>
      ),
      icon: <div className={styles.featureIconSettings} />,
      image: '/img/features/customization-snapshot.png'
    },
    {
      title: isEnglish ? 'R&D Context Awareness' : '研发知识上下文感知',
      description: isEnglish ? (
        <>
          Deep integration with IDE plugins and support for MCP protocol, providing rich and accurate project context for AI, significantly reducing AI hallucinations and ensuring more reliable results.
        </>
      ) : (
        <>
          深度整合研发工具链生态与 IDE 插件能力，并支持 MCP 协议，为 AI 提供丰富准确的项目上下文，显著减少 AI 幻觉，确保结果更可靠。
        </>
      ),
      icon: <div className={styles.featureIconCode} />,
      image: '/img/features/deveco-agent.png'
    },
  ];
}

function Feature({title, description, icon, image, index}: FeatureItem & { index: number }) {
  return (
    <div className="col col--4">
      <div className={styles.featureCardVertical}>
        <img src={image} alt={title} className={styles.featureImageVertical} />
        <div className={styles.featureContentVertical}>
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

function QuickLinks() {
  const { i18n: { currentLocale } } = useDocusaurusContext();
  const isEnglish = currentLocale === 'en';

  const links = isEnglish ? [
    { title: 'Installation Guide', description: 'Quickly set up AutoDev in your environment', link: '/quick-start' },
    { title: 'AI Programmer', description: 'Explore AutoDev Sketch automatic coding', link: '/composer' },
    { title: 'Customization', description: 'Learn how to customize AutoDev for your specific needs', link: '/customize' },
    { title: 'Agents', description: 'Build personal, team agents, integrate company agents', link: '/agent' },
  ] : [
    { title: '安装指南', description: '快速在您的环境中设置 AutoDev', link: '/quick-start' },
    { title: 'AI 程序员', description: '探索 AutoDev Sketch 自动编码', link: '/composer' },
    { title: '定制化', description: '学习如何根据您的特定需求自定义 AutoDev', link: '/customize' },
    { title: '智能体', description: '构建个人、团队 Agent，集成公司 Agent', link: '/agent' },
  ];

  return (
    <section className={styles.quickLinks}>
      <div className="container">
        <div className="text--center margin-bottom--xl">
          <Heading as="h2">{isEnglish ? 'Quick Start' : '快速开始'}</Heading>
          <p>{isEnglish ? 'Explore our documentation to learn more about AutoDev' : '探索我们的文档，了解更多关于 AutoDev 的信息'}</p>
        </div>
        <div className="row">
          {links.map((item, idx) => (
            <div key={idx} className="col col--3">
              <Link to={item.link} className={styles.quickLinkCard}>
                <Heading as="h3">{item.title}</Heading>
                <p>{item.description}</p>
                <div className={styles.quickLinkArrow}>→</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonTable() {
  const { i18n: { currentLocale } } = useDocusaurusContext();
  const isEnglish = currentLocale === 'en';

  return (
    <section className={styles.comparisonSection}>
      <div className="container">
        <div className="text--center margin-bottom--xl">
          <Heading as="h2">{isEnglish ? 'AutoDev vs Traditional AI Coding Assistants' : 'AutoDev 与传统 AI 编码助手的对比'}</Heading>
          <p>{isEnglish ? 'Learn how AutoDev stands out from traditional AI coding assistants' : '了解 AutoDev 如何从传统 AI 编码助手中脱颖而出'}</p>
        </div>
        <div className={styles.tableWrapper}>
          <table className={styles.comparisonTable}>
            <thead>
            <tr>
              <th className={styles.featureCell}>{isEnglish ? 'Feature' : '功能'}</th>
              <th>{isEnglish ? 'Traditional AI Assistants' : '传统 AI 助手'}</th>
              <th className={styles.advantageCell}>AutoDev</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td className={styles.featureCell}>{isEnglish ? 'Main Function' : '主要功能'}</td>
              <td>{isEnglish ? 'Code suggestions and completions' : '代码建议和补全'}</td>
              <td className={styles.advantageCell}>{isEnglish ? 'Autonomous planning and execution of complex development tasks' : '自主规划和执行复杂开发任务'}</td>
            </tr>
            <tr>
              <td className={styles.featureCell}>{isEnglish ? 'Code Modification' : '代码修改'}</td>
              <td>{isEnglish ? 'Suggest code snippets' : '建议代码片段'}</td>
              <td className={styles.advantageCell}>{isEnglish ? 'Autonomously edit, refactor, and improve existing code' : '自主编辑、重构和改进现有代码'}</td>
            </tr>
            <tr>
              <td className={styles.featureCell}>{isEnglish ? 'Build & Execute' : '构建与执行'}</td>
              <td>
                <div className={styles.disadvantage}>
                  <span className={styles.xIcon}>✕</span>
                  <span>{isEnglish ? 'Limited or none' : '有限或无'}</span>
                </div>
              </td>
              <td className={styles.advantageCell}>
                <div className={styles.advantage}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>{isEnglish ? 'Build and execute code in a safe environment' : '在安全环境中构建和执行代码'}</span>
                </div>
              </td>
            </tr>
            <tr>
              <td className={styles.featureCell}>{isEnglish ? 'Testing' : '测试'}</td>
              <td>
                <div className={styles.disadvantage}>
                  <span className={styles.xIcon}>✕</span>
                  <span>{isEnglish ? 'Limited test generation' : '有限的测试生成'}</span>
                </div>
              </td>
              <td className={styles.advantageCell}>
                <div className={styles.advantage}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>{isEnglish ? 'Create and run comprehensive tests' : '创建并运行全面的测试'}</span>
                </div>
              </td>
            </tr>
            <tr>
              <td className={styles.featureCell}>{isEnglish ? 'Git Operations' : 'Git 操作'}</td>
              <td>
                <div className={styles.disadvantage}>
                  <span className={styles.xIcon}>✕</span>
                  <span>{isEnglish ? 'None' : '无'}</span>
                </div>
              </td>
              <td className={styles.advantageCell}>
                <div className={styles.advantage}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>{isEnglish ? 'Manage branches, commits, and PRs' : '管理分支、提交和 PR'}</span>
                </div>
              </td>
            </tr>
            <tr>
              <td className={styles.featureCell}>{isEnglish ? 'Workflow Complexity' : '工作流复杂性'}</td>
              <td>{isEnglish ? 'Simple, isolated tasks' : '简单、孤立的任务'}</td>
              <td className={styles.advantageCell}>{isEnglish ? 'End-to-end complex development workflows' : '端到端复杂开发工作流'}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Community() {
  const { i18n: { currentLocale } } = useDocusaurusContext();
  const isEnglish = currentLocale === 'en';

  const resources = isEnglish ? [
    { title: 'GitHub', description: 'Star our repository, report issues, and contribute to the codebase', link: 'https://github.com/unit-mesh/auto-dev', icon: <div className={styles.communityIconGithub} /> },
    { title: 'Research Paper', description: 'Read our academic paper on arXiv to learn about the research behind AutoDev', link: '', icon: <div className={styles.communityIconPaper} /> },
    { title: 'WeChat Group', description: 'Join our WeChat community to connect with other developers and get support (Add phodal02 as friend, note: AutoDev)', link: '', icon: <div className={styles.communityIconDiscord} /> },
  ] : [
    { title: 'GitHub', description: '为我们的仓库加星标，报告问题，并为代码库做出贡献', link: 'https://github.com/unit-mesh/auto-dev', icon: <div className={styles.communityIconGithub} /> },
    { title: '研究论文', description: '阅读我们在 arXiv 上的学术论文，了解 AutoDev 背后的研究', link: '', icon: <div className={styles.communityIconPaper} /> },
    { title: '微信群', description: '加入我们的 Wechat 社区，与其他开发者交流并获取支持（添加 phodal02 为好友，注明：AutoDev）', link: '', icon: <div className={styles.communityIconDiscord} /> },
  ];

  return (
    <section className={styles.communitySection}>
      <div className="container">
        <div className="text--center margin-bottom--xl">
          <Heading as="h2">{isEnglish ? 'Join Our Community' : '加入我们的社区'}</Heading>
          <p>{isEnglish ? 'Connect with other developers and contribute to AutoDev' : '与其他开发者联系并为 AutoDev 做出贡献'}</p>
        </div>
        <div className="row">
          {resources.map((item, idx) => (
            <div key={idx} className="col col--4">
              <Link to={item.link} className={styles.communityCard}>
                {item.icon && <div className={styles.communityCardIcon}>{item.icon}</div>}
                <Heading as="h3">{item.title}</Heading>
                <p>{item.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AIFriendlyArchitecture() {
  const { i18n: { currentLocale } } = useDocusaurusContext();
  const isEnglish = currentLocale === 'en';

  return (
    <section className={styles.architectureSection}>
      <div className="container">
        <div className={styles.architectureHeader}>
          <Heading as="h2" className={styles.architectureTitle}>
            {isEnglish ? 'AI-Friendly Architecture' : 'AI 友好架构'}
          </Heading>
          <p>{isEnglish ? 'A four-tier approach to effective AI collaboration in development' : '一个面向高效 AI 协作开发的方法'}</p>
        </div>

        <div className={styles.architectureTiers}>
          <div className={`${styles.tier} ${styles.tier1}`}>
            <div className={styles.tierNumber}>1</div>
            <div className={styles.tierContent}>
              <Heading as="h3">{isEnglish ? 'Foundational Knowledge & Structure' : '基础规范与知识结构层'}</Heading>
              <p>
                {isEnglish
                  ? 'Creates clear domain models and well-structured code that both humans and AI can understand. This layer focuses on meaningful naming, self-documenting code, and knowledge engineering to build a solid foundation for AI collaboration.'
                  : '构建清晰的领域模型和结构良好的代码，使人类和AI都能理解。关注有意义的命名、自文档化代码和知识工程，为AI协作奠定坚实基础。'}
              </p>
            </div>
          </div>

          <div className={`${styles.tier} ${styles.tier2}`}>
            <div className={styles.tierNumber}>2</div>
            <div className={styles.tierContent}>
              <Heading as="h3">{isEnglish ? 'Contextualized Interaction' : '交互情境化层'}</Heading>
              <p>
                {isEnglish
                  ? 'Enhances AI understanding by providing rich, relevant context at key interaction points. Uses techniques like RAG and Tool Memory to inject project-specific knowledge, precise requirements, and historical information when needed.'
                  : '在关键交互点为AI提供丰富、相关的上下文信息，增强其理解能力。通过 RAG 和 Tool Memory等技术，在需要时注入项目特定知识、精确需求和历史信息。'}
              </p>
            </div>
          </div>

          <div className={`${styles.tier} ${styles.tier3}`}>
            <div className={styles.tierNumber}>3</div>
            <div className={styles.tierContent}>
              <Heading as="h3">{isEnglish ? 'Guided Generation & Validation' : '引导生成与验证层'}</Heading>
              <p>
                {isEnglish
                  ? 'Enables AI to generate high-quality code based on layers 1 and 2, while enforcing rigorous Validation-First Development (VFD). Combines automated tests, static analysis, and human review to ensure reliability and security.'
                  : 'AI 基于前两层生成高质量代码，同时强制执行严格的验证优先开发(VFD)流程。结合自动化测试、静态分析和人工审查，确保可靠性和安全性。'}
              </p>
            </div>
          </div>

          <div className={`${styles.tier} ${styles.tier4}`}>
            <div className={styles.tierNumber}>4</div>
            <div className={styles.tierContent}>
              <Heading as="h3">{isEnglish ? 'Continuous Improvement Feedback Loop' : '持续改进反馈层'}</Heading>
              <p>
                {isEnglish
                  ? 'Validation results feed back to optimize prompts, update knowledge bases, and trigger code improvements. This closed-loop ensures AI assistance evolves with your project and team.'
                  : '将验证结果反馈用于优化提示词、更新知识库和触发代码改进。这种闭环确保AI辅助能力随着项目和团队一起演进。'}
              </p>
            </div>
          </div>
        </div>

        <div className={styles.architectureLearnMore}>
          <Link to="/ai-friendly">
            {isEnglish ? 'Learn More About AI-Friendly Architecture' : '了解更多 AI 友好架构'}
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m17.25 8.75-5.5 5.5-5.5-5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomepageFeatures(): ReactNode {
  const featureList = useFeatureList();

  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {featureList.map((props, idx) => (
              <Feature key={idx} {...props} index={idx} />
            ))}
          </div>
        </div>
      </section>
      <AIFriendlyArchitecture />
      <QuickLinks />
      <ComparisonTable />
      <Community />
    </>
  );
}

