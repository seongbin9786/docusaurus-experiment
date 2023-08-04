/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // 문서에 따라 사이드바 내용을 생성해주는데 안 쓸 이유가 업다.
  // 이름이 sidebarId가 되는데, 사실 무슨 이름을 쓰든 상관 없는 거 같다?
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  // sidebar를 수동 설정하고 싶으면 그렇게 해도 됨
  // 아, 이게 category 별 slug 지정을 할 수가 없네?
  // tutorialSidebar: [
  //   'intro',
  //   {
  //     type: 'category',
  //     label: 'Tutorial',
  //     items: ['tutorial-basics/create-a-document'],
  //   },
  // ],
};

module.exports = sidebars;
