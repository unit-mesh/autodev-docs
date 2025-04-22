import type {ReactNode} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Heading from "@theme/Heading";

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '生成完整工程',
    description: (
      <>
        只需简单描述需求，AI 代理即可自动生成完整的、可直接运行的代码库，包括前端、后端、数据库和部署配置。
      </>
    ),
  },
  {
    title: '安全开发，尽在掌控',
    description: (
      <>
        所有操作都在隔离的 Docker 容器内运行，提供安全的沙盒环境。定义细粒度的护栏和权限，精确控制代理可执行的操作，确保代码完整性和用户隐私。
      </>
    ),
  },
  {
    title: '全面的上下文感知',
    description: (
      <>
        为 AI 代理提供完整的项目上下文——文件、编译器输出、构建/测试日志、静态分析结果以及一个专用工具库。这使其能够做出明智决策并有效执行任务。
      </>
    ),
  },
  {
    title: '多智能体协作编排',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
