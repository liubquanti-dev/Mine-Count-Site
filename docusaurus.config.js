import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'Mine Count',
  tagline: 'Безкоштовний публічний Minecraft сервер',
  favicon: 'img/favicon.png',

  url: 'https://mcount.liubquanti.click',
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
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Mine Count',
        logo: {
          alt: 'Mine Count Logo',
          src: 'img/logo-small.png',
          href: '/',
        },
        items: [
          {
            to: 'https://mcountwiki.liubquanti.click/',
            position: 'left',
            label: 'Вікі',
            target: '_self',
          },
          {
            to: 'https://mcountwiki.liubquanti.click/blog/',
            target: '_self',
            label: 'Блог',
            position: 'left'
          },
          {
            to: 'https://mcountmap.liubquanti.click/',
            target: '_self',
            label: 'Мапа',
            position: 'left'
          },
          {
						href: 'https://stats.uptimerobot.com/NowpAIVNnk',
						className: 'navbar-item-uptimerobot',
						position: 'right',
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
                to: 'https://mcountwiki.liubquanti.click/',
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
                to: 'https://mcountwiki.liubquanti.click/blog/',
              },
              {
                label: 'GitHub',
                to: 'https://github.com/liubquanti-dev/Mine-Count-Site',
              },
            ],
          },
          {
            title: 'Інші сервери',
            items: [

              {
                label: 'Terraria',
                to: 'https://jbrave.fun',
              },
              {
                label: 'Rust',
                to: 'https://fhawk.fun',
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
