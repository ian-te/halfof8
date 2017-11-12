module.exports = {
    siteMetadata: {
        title: `halfof8`
    },
    // pathPrefix: `/halfof8`,
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sharp`,
        "gatsby-plugin-catch-links",
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.spaceId,
                accessToken: process.env.accessToken
            }
        }
    ]
};
