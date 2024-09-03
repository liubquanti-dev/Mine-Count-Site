import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'Mine Count',
  tagline: 'Безкоштовний публічний Minecraft сервер',
  favicon: 'img/favicon.png',

  url: 'https://mcount.fun',
  baseUrl: '/',

  organizationName: 'White-Heart-Dev',
  projectName: 'mine-count-site',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'uk',
    locales: ['uk'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    ({
      image: 'img/logo-background.png',
      navbar: {
        title: 'Mine Count',
        logo: {
          alt: 'Mine Count Logo',
          src: 'img/logo-small.png',
          href: '/',
        },
        items: [
          {
            to: 'https://wiki.mcount.fun/',
            position: 'left',
            label: 'Вікі',
            target: '_self',
          },
          {
            to: 'https://wiki.mcount.fun/blog/',
            target: '_self',
            label: 'Блог',
            position: 'left'
          },
          {
            to: 'https://map.mcount.fun/',
            target: '_self',
            label: 'Мапа',
            position: 'left'
          },
          {
						href: 'https://github.com/liubquanti-dev/Mine-Count-Site',
						className: 'navbar-item-github',
						position: 'right',
					},
					{
						href: 'https://discord.gg/TYs8FjvzFf',
						className: 'navbar-item-discord',
						position: 'right',
					},
					{
						type: 'localeDropdown',
						position: 'right',
					}
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Інформація',
            items: [
              {
                label: 'Вікі',
                to: 'https://wiki.mcount.fun/',
              },
            ],
          },
          {
            title: 'Спільнота',
            items: [
              {
                label: 'Discord',
                to: 'https://discord.gg/TYs8FjvzFf',
              },
              {
                label: 'Steam',
                to: 'https://steamcommunity.com/groups/dglade',
              },
            ],
          },
          {
            title: 'Більше',
            items: [
              {
                label: 'Блог',
                to: 'https://wiki.mcount.fun/blog/',
              },
              {
                label: 'GitHub',
                to: 'https://github.com/liubquanti-dev/Mine-Count-Site',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LIUBQUANTUM GROUP.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
