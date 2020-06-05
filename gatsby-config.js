const path = require(`path`);

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `freddydumont's blog`,
    // Default title of the page
    siteTitleAlt: `freddydumont | Full stack web application development`,
    // Can be used for e.g. JSONLD
    siteHeadline: `freddydumont | Full stack web application development`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://freddydumont.com`,
    // Used for SEO
    siteDescription: `I'm a full stack web application developer helping teams and startups turn ideas into reality. Click to find out how I can help you grow your business!`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/dumont_digital_logo.png`,
    // Twitter Handle
    author: `@_freddydumont`,
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-advanced-sitemap',
    'gatsby-plugin-smoothscroll',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          components: `src/components`,
        },
      },
    },
    {
      // https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        tagsPath: '/blog/tags',
        feed: true,
        feedTitle: `freddydumont's blog`,
        navigation: [
          {
            title: `Home`,
            slug: `/`,
          },
          {
            title: `Blog`,
            slug: `/blog`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/_freddydumont`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `freddydumont's personal blog`,
        short_name: `freddydumont`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};

if (process.env.NODE_ENV === 'development') {
  module.exports.plugins.push({
    resolve: `@lekoarts/gatsby-theme-styleguide`,
    options: {
      basePath: `/style-guide`,
    },
  });
}
