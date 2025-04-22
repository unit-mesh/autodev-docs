import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Heading from "@theme/Heading";
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  description: ReactNode;
  icon?: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '智能体规划复杂任务',
    description: (
      <>
        AutoDev Planner 可以借助强大的推理模型能力，自主规划并执行包括文件编辑、代码检索、构建、执行、测试和版本控制在内的复杂软件工程任务链。
      </>
    ),
    icon: <div className={styles.featureIconBrain} />
  },
  {
    title: '全面的上下文感知',
    description: (
      <>
        AutoDev 能为 AI 提供完整的项目上下文——文件、编译器输出、构建/测试日志、静态分析结果等——以便 AI 进行更好的决策。
      </>
    ),
    icon: <div className={styles.featureIconCode} />
  },
  {
    title: '自定义提升生产力',
    description: (
      <>
        您可以在 AutoDev 自定义模型、自定义提示词和自定义代码生成器等，并通过构建自己的 AutoDev 分支，来提升生产力。
      </>
    ),
    icon: <div className={styles.featureIconSettings} />
  },
];

function Feature({title, description, icon}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        {icon && <div className={styles.featureIcon}>{icon}</div>}
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

// Quick links section
function QuickLinks() {
  const links = [
    { title: '安装指南', description: '快速在您的环境中设置 AutoDev', link: '/quick-start' },
    { title: 'AI 程序员', description: '探索 AutoDev Sketch 自动编码', link: '/composer' },
    { title: '定制化', description: '学习如何根据您的特定需求自定义 AutoDev', link: '/customize' },
    { title: '智能体语言', description: '了解 AI 程序员背后的智能体工具', link: '/devins/quick-start' },
  ];

  return (
    <section className={styles.quickLinks}>
      <div className="container">
        <div className="text--center margin-bottom--xl">
          <Heading as="h2">快速开始</Heading>
          <p>探索我们的文档，了解更多关于 AutoDev 的信息</p>
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
  return (
    <section className={styles.comparisonSection}>
      <div className="container">
        <div className="text--center margin-bottom--xl">
          <Heading as="h2">AutoDev 与传统 AI 编码助手的对比</Heading>
          <p>了解 AutoDev 如何从传统 AI 编码助手中脱颖而出</p>
        </div>
        <div className={styles.tableWrapper}>
          <table className={styles.comparisonTable}>
            <thead>
            <tr>
              <th className={styles.featureCell}>功能</th>
              <th>传统 AI 助手</th>
              <th className={styles.advantageCell}>AutoDev</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td className={styles.featureCell}>主要功能</td>
              <td>代码建议和补全</td>
              <td className={styles.advantageCell}>自主规划和执行复杂开发任务</td>
            </tr>
            <tr>
              <td className={styles.featureCell}>代码修改</td>
              <td>建议代码片段</td>
              <td className={styles.advantageCell}>自主编辑、重构和改进现有代码</td>
            </tr>
            <tr>
              <td className={styles.featureCell}>构建与执行</td>
              <td>
                <div className={styles.disadvantage}>
                  <span className={styles.xIcon}>✕</span>
                  <span>有限或无</span>
                </div>
              </td>
              <td className={styles.advantageCell}>
                <div className={styles.advantage}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>在安全环境中构建和执行代码</span>
                </div>
              </td>
            </tr>
            <tr>
              <td className={styles.featureCell}>测试</td>
              <td>
                <div className={styles.disadvantage}>
                  <span className={styles.xIcon}>✕</span>
                  <span>有限的测试生成</span>
                </div>
              </td>
              <td className={styles.advantageCell}>
                <div className={styles.advantage}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>创建并运行全面的测试</span>
                </div>
              </td>
            </tr>
            <tr>
              <td className={styles.featureCell}>Git 操作</td>
              <td>
                <div className={styles.disadvantage}>
                  <span className={styles.xIcon}>✕</span>
                  <span>无</span>
                </div>
              </td>
              <td className={styles.advantageCell}>
                <div className={styles.advantage}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>管理分支、提交和 PR</span>
                </div>
              </td>
            </tr>
            <tr>
              <td className={styles.featureCell}>工作流复杂性</td>
              <td>简单、孤立的任务</td>
              <td className={styles.advantageCell}>端到端复杂开发工作流</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// Community section
function Community() {
  const resources = [
    { title: 'GitHub', description: '为我们的仓库加星标，报告问题，并为代码库做出贡献', link: 'https://github.com/username/autodev', icon: <div className={styles.communityIconGithub} /> },
    { title: '研究论文', description: '阅读我们在 arXiv 上的学术论文，了解 AutoDev 背后的研究', link: '', icon: <div className={styles.communityIconPaper} /> },
    { title: '微信群', description: '加入我们的 Wechat 社区，与其他开发者交流并获取支持（添加 phodal02 为好友，注明：AutoDev）', link: '', icon: <div className={styles.communityIconDiscord} /> },
  ];

  return (
    <section className={styles.communitySection}>
      <div className="container">
        <div className="text--center margin-bottom--xl">
          <Heading as="h2">加入我们的社区</Heading>
          <p>与其他开发者联系并为 AutoDev 做出贡献</p>
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

export default function HomepageFeatures(): ReactNode {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <QuickLinks />
      <ComparisonTable />
      <Community />
    </>
  );
}

