import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '기본 원리',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        비중 있게 사용하는 기술들을 이해해서 커스터마이징 및 디버깅 시간을 줄입니다.
      </>
    ),
  },
  {
    title: '정확한 구현',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        단위 기능들에 대한 정상 동작과 예외 상황에 대한 테스트 케이스를 작성합니다. 테스트를 자동화해 회귀를 방지합니다.
      </>
    ),
  },
  {
    title: '최소 책임 설계',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        단위 기능 별로 책임을 나누어서 최대한 조립하듯 코드를 작성합니다.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
