module.exports = {
    pathPrefix: '/',
    siteMetadata: {
        title: `MenuTube`,
        description: `Catch YouTube into your macOS menu bar!`,
        author: `@gatsbyjs`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                display: `minimal-ui`,
                icon: `src/images/logo-icon.png` // This path is relative to the root of the site.
            }
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                // Add any options here
            }
        },
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`
            }
        }
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ]
};
