// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Piano With Sabina',
  tagline: ' ',
  favicon: 'img/pianoiconweb.png',

  // Set the production url of your site here
    url: 'https://baky0905.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'baky0905', // Usually your GitHub org/user name.
    projectName: 'piano-lessons', // Usually your repo name.
    trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        // //   editUrl:
        // //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:

    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({ metadata: [{name: 'keywords', content: 'piano, blog, piano lessons, music, sabina alivodic, pianoundervisning, pianotimer'}],
          colorMode: {
              defaultMode: 'dark',
              disableSwitch: true,
              respectPrefersColorScheme: false,
          },
      // Replace with your project's social card
          image: 'img/piano.png',
      navbar: {
        title: 'Piano With Sabina',
        logo: {
          alt: 'My Site Logo',
          src: 'img/pianoiconweb.png',
        },
        items: [
        //   {
        //     type: 'doc',
        //     docId: 'intro',
        //     position: 'left',
        //     label: 'Book a lesson',
        //   },
            { to: '/booking', label: 'Book a lesson', position: 'left' },
            // { to: '/blog', label: 'Journal', position: 'left' },
            { to: '/about', label: 'About', position: 'right' },
            { to: '/contact', label: 'Contact', position: 'right' },
          {
            href: "https://github.com/facebook/docusaurus",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
            },
        //   {
        //     href: "https://twitter.com",
        //     position: "right",
        //     className: "header-twitter-link",
        //     "aria-label": "Twitter",
        //     },
          {
            href: "https://www.youtube.com/@sabinaalivodic/featured",
            position: "right",
            className: "header-youtube-link",
            "aria-label": "Youtube",
            },
          {
            href: "https://www.instagram.com/bibirii/",
            position: "right",
            className: "header-instagram-link",
            "aria-label": "Instagram",
            },
          {
            href: "https://soundcloud.com/sabinaasa ",
            position: "right",
            className: "header-soundcloud-link",
            "aria-label": "Soundcloud",
            },
        ],
      },
      footer: {
        style: 'light',
    //       links: [
    //          {

    //     items: [
    //       {
    //         html: `
    //             <div  class="col-sm-12" align="right">
    //             <div>  PIANOUNDERVISNING SABINA ALIVODIC  </div>
    //             <div>ORG. NR: 925820636</div>
    //             <div>Maridalsveien 175, 0469 Oslo</div>
    //             <div>post@pianosabina.com </span></div>
    //             </div>
    //           `,
    //       },
    //     ],
    //   },
    //     ],
        copyright: ` <div  class="col-sm-12" align="center">
                <div>  PIANOUNDERVISNING SABINA ALIVODIC  </div>
                <div>ORG. NR: 925820636</div>
                <div>Maridalsveien 175, 0469 Oslo</div>
                <div>post@pianosabina.com</span></div>
                <br>
                </div> Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus by Kristijan Bakaric`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
