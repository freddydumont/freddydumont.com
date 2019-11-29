const path = require(`path`);

// get colors from tag_colors into purgecss whitelist
const colors = require('./src/data/tag_colors.json');

// currentColors are 2 classNames separated by a space
const whitelist = Object.values(colors).reduce(
  (whitelistedColors, currentColors) => [
    ...whitelistedColors,
    ...currentColors.split(' '),
  ],
  []
);

module.exports = {
  siteMetadata: {
    title: `freddydumont's personal blog`,
    name: `freddydumont`,
    siteUrl: `https://freddydumont.com`,
    description: `freddydumont's blog about modern full stack web app development using tech like JavasScript, React, GraphQL and Gatsby.`,
    hero: {
      heading: `Interested in modern web application development? Keep reading.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/_freddydumont`,
      },
      {
        name: `github`,
        url: `https://github.com/freddydumont`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/freddydumont/`,
      },
    ],
  },
  plugins: [
    'gatsby-plugin-advanced-sitemap',
    'gatsby-plugin-smoothscroll',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`),
      },
    },
    {
      resolve: '@narative/gatsby-theme-novela',
      options: {
        contentPosts: 'content/posts',
        contentAuthors: 'content/authors',
        basePath: '/blog/',
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
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
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        whitelist,
      },
    },
  ],
};
