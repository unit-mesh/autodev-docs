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
    title: '智能体规划复杂任务',
    description: (
      <>
        AutoDev Planner 可以借助强大的推理模型能力，自主规划并执行包括文件编辑、代码检索、构建、执行、测试和版本控制在内的复杂软件工程任务链。
      </>
    ),
  },
  {
    title: '全面的上下文感知',
    description: (
      <>
        AutoDev 能为 AI 提供完整的项目上下文——文件、编译器输出、构建/测试日志、静态分析结果等——以便 AI 进行更好的决策。
      </>
    ),
  },
  {
    title: '自定义提升生产力',
    description: (
      <>
        您可以在 AutoDev 自定义模型、自定义提示词和自定义代码生成器等，并通过构建自己的 AutoDev 分支，来提升生产力。
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
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
