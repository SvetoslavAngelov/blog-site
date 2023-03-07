/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Svetlo's Blog`,
    description: `Welcome to my blog site`,
    siteUrl: `https://www.svetlo.co.uk`,
    author: `Svetlo`
  },
  plugins: [
  "gatsby-plugin-mdx", "gatsby-plugin-styled-components",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "content",
      path: `${__dirname}/static/content`,
    },
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "content",
      path: `${__dirname}/static/images`,
    },
  }]
};