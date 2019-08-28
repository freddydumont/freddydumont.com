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
    {
      resolve: '@narative/gatsby-theme-novela',
      options: {
        contentPosts: 'content/posts',
        contentAuthors: 'content/authors',
        basePath: '/',
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
  ],
};
