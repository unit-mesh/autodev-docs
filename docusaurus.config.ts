// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AutoDev - Tailor Your AI Coding Experience',
  tagline: 'Personalize your coding journey with adaptive AI agents.',
  favicon: 'img/favicon.ico',
  url: 'https://ide.unitmesh.cc',
  baseUrl: '/',
  trailingSlash: false,
  organizationName: 'unit-mesh',
  projectName: 'auto-dev',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['en', 'zh-Hans'],
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
        label: 'English',
        path: 'en',
      },
      'zh-Hans': {
        htmlLang: 'zh-CN',
        label: '简体中文',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/unit-mesh/auto-dev/tree/master/docs/',
        },
        blog: {
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
              'https://github.com/unit-mesh/autodev-docs/tree/master/docs/',
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
        navbar: {
          title: 'AutoDev',
          logo: {
            alt: 'AutoDev Logo',
            src: 'img/logo.svg',
          },
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'tutorialSidebar',
              position: 'left',
              label: 'Docs',
            },
            {
              type: 'docSidebar',
              sidebarId: 'customizeSidebar',
              position: 'left',
              label: 'Customize',
            },
            {
              type: 'docSidebar',
              sidebarId: 'agenticSidebar',
              position: 'left',
              label: 'Agent',
            },
            {
              type: 'docSidebar',
              sidebarId: 'friendlySidebar',
              position: 'left',
              label: 'AI Friendly',
            },
            {
              to: '/blog',
              label: 'Blog',
              position: 'left',
            },
            {
              type: 'docSidebar',
              sidebarId: 'developmentSidebar',
              position: 'left',
              label: 'Development',
            },
            {
              type: 'localeDropdown',
              position: 'right',
            },
            {
              href: 'https://github.com/unit-mesh/auto-dev',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Docs',
              items: [
                {
                  label: 'Tutorial',
                  to: '/intro',
                },
              ],
            },
            {
              title: 'Blog',
              items: [
                {
                  label: 'Blog',
                  to: '/blog',
                },
              ],
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'GitHub',
                  href: 'https://github.com/unit-mesh/auto-dev',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Unit Mesh. Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          additionalLanguages: ['java', 'javascript', 'kotlin', 'python', 'bash'],
          darkTheme: darkCodeTheme,
        },
      }),
};

module.exports = config;

