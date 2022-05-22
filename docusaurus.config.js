// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NVDB API Skriv',
  tagline: 'NVDB API Skriv eksponerer et sett med REST-baserte endepunkter for registrering og vedlikehold av data i Nasjonal vegdatabank (NVDB). Sammen med NVDB API Les utgjør disse endepunktene en komplett tjenesteportefølje for utviklere av fagsystemer som har behov for integrasjon med NVDB. APIene og NVDB eies og forvaltes av Statens vegvesen.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

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
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        language: "no",
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '  NVDB API Skriv',
        logo: {
          alt: 'Statens vegvesen logo',
          src: 'img/statens-vegvesen-logo-header.svg',
        },
        items: [
          {
            to: '/docs/introduksjon/Oversikt',
            position: 'left',
            label: 'Dokumentasjon',
          },
          {to: '/blog', label: 'Innlegg', position: 'left'},
          {href: 'https://github.com/nvdb-vegdata/endringslogg/blob/master/APISKRIVV3.md', label: 'Endringslogg', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Informasjon',
            items: [
              {
                label: 'Dokumentasjon',
                to: '/docs/introduksjon/Oversikt',
              },
              {
                label: 'Innlegg',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Kontakt oss',
            items: [
              {
                label: 'Support',
                href: 'mailto:nvdb@vegvesen.no',
              },
              {
                label: 'Gitter',
                href: 'https://gitter.im/nvdb-vegdata/api-skriv-v3',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/nvdbapi',
              },
            ],
          },
          {
            title: 'Statens vegvesen',
            items: [
              {
                label: 'Om organisasjonen',
                href: 'https://www.vegvesen.no/om-oss/om-organisasjonen/',
              },
              {
                label: 'Org.nr.: 971 032 081',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Alle rettigheter forbeholdt.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;


