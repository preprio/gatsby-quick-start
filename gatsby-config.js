/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Prepr Gatsby Quickstart`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Prepr",
        fieldName: "prepr",
        url: process.env.PREPR_GRAPHQL_URL,
      }
    }
  ],
}
