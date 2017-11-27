module.exports = {
    siteMetadata: {
        title: `halfof8`
    },
    // pathPrefix: `/halfof8`,
    plugins: [
        {
            resolve: `gatsby-plugin-favicon`,
            options: {
                logo:'./src/img/favicon_192x192.png',
            }
        },
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.spaceId,
                accessToken: process.env.accessToken
            }
        },
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                // Setting a color is optional.
                color: `#F0A`,
                // Disable the loading spinner.
                showSpinner: true
            }
        }
    ]
};
