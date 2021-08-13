const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'TigaTeam',
  tagline: 'A technical open source team',
  url: 'https://tigateam.org',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'tigateam', // Usually your GitHub org/user name.
  projectName: 'tigateam-website', // Usually your repo name.
  // i18n
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
      "zh-Hans": {
        label: '简体中文',
        direction: 'ltr',
      },
    },
  },
  themeConfig: {
    navbar: {
      title: 'TigaTeam',
      logo: {
        alt: 'TigaTeam Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        // {
        //   to: '/collaboration-specification',
        //   label: 'Collaboration-Specification',
        //   position: 'right'
        // },
        {
          type: 'doc',
          docId: 'about',
          position: 'right',
          label: 'Docs',
        },
        { to: '/blog', label: 'Blog', position: 'right' },
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsAfter: [
            // { to: 'https://github.com/tigateam/tigago-website/issues/4', label: 'Help Translate', }, //Can add custom pages
          ],
        },
        {
          href: 'https://github.com/tigateam',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Team Project',
          items: [
            {
              label: 'Tiga CLI',
              to: 'https://github.com/tigateam/tiga-cli',
            },
            {
              label: 'Tigago',
              to: 'https://github.com/tigateam/tigago',
            },
            {
              label: 'Tigaui',
              to: 'https://github.com/tigateam/tigaui',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Gitter',
              href: 'https://gitter.im/tigateam/community',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'tigago-demo',
              href: 'https://github.com/tigateam/tigago-demo',
            }
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'TigaTeam Homepage',
              href: 'https://github.com/tigateam',
            },
            {
              label: 'Misitebao‘s Blog',
              to: 'https://blog.misitebao.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TigaTeam, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/tigateam/tigateam-website/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/tigateam/tigateam-website/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
