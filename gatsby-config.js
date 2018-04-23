require('dotenv').config()
module.exports = {
    siteMetadata: {
        title: `About : Half of Eight`
    },
    // pathPrefix: `/halfof8`,
    plugins: [
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
                color: `#5261ff`,
                // Disable the loading spinner.
                showSpinner: true
            }
        }
    ]
};
