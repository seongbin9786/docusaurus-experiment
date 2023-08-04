import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      // siteConfig.title = 현재 보고 있는 페이지의 제목
      // 실제 title = {여기title} | {docusaurus.config의title} 로 표시됨
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />">
        <p>정말 신기하게도 Next처럼 pages 밑에 파일만 만들어도 페이지가 생긴다.</p>
    </Layout>
  );
}
