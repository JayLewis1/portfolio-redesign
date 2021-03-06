module.exports = {
  siteMetadata: {
    title: `Jay Lewis`,
    description: `Design and development portfolio for the web.`,
    author: `Jay Lewis`,
    siteURL: `https://www.jaylewis.me/`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options : {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
       background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Cabin\:400`,
          `Cabin\:400i`,
          `Cabin\:500`,
          `Cabin\:600`,
          `Cabin\:700`,
          `Overpass`,
          `Overpass\:100`,
          `Overpass\:100i`,
          `Overpass\:200`,
          `Overpass\:200i`,
          `Overpass\:300`,
          `Overpass\:300i`,
          `Overpass\:400`,
          `Overpass\:400i`,
          `Overpass\:600`,
          `Overpass\:700`
        ],
        display: 'swap'
      }
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -20
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: '/images/icons/'
        }
      }
    },
    {
      resolve: `gatsby-plugin-react-redux`,
      options: {
        pathToCreateStoreModule: './src/state/store',
        serialize: {
          space: 0,
          isJSON: true,
          unsafe: false,
          ignoreFunction: true,
        },
        cleanupOnClient: true,
        windowKey: '__PRELOADED_STATE__',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
