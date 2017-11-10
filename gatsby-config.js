module.exports = {
    siteMetadata: {
        title: `halfof8`
    },
    // pathPrefix: `/halfof8`,
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sharp`,
        'gatsby-plugin-catch-links',
        {
          resolve: 'gatsby-transformer-remark',
          options: {
            plugins: [] // just in case those previously mentioned remark plugins sound cool :)
          }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages`,
                name: "pages"
            }
        }
    ]
};
