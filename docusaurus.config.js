// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// 왠 타입 오류가...?
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'jsqna',
  tagline: '생산성의 바탕이 되는 정확한 이해', // 슬로건을 의미함
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'seongbin9786', // Usually your GitHub org/user name.
  projectName: 'blog-docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // /docs 없이 곧장 / 임
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 기본 값은 아니지만 hideable 안 하면 타블렛 크기에서 안 사라지나봄
      // https://docusaurus.io/docs/sidebar#theme-configuration
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        }
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      // 아래는 탑 네비게이션 바 설정
      navbar: {
        title: 'jsqna',
        logo: {
          alt: 'jsqna Logo',
          src: 'img/jsqna-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar', // 그냥 sidebar config를 여러 개 두고 싶었나 본데?
            position: 'left',
            label: '문서',
          },
          {
            to: '/blog', 
            label: '회고', 
            position: 'left'
          },
          {
            href: 'https://github.com/seongbin9786',
            label: '프론트엔드 개발자 김성빈입니다',
            position: 'right',
          },
        ],
      },
      // Footer에 표시되는 링크를 직접 지정
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/seongbin9786',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Seongbin Kim. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
