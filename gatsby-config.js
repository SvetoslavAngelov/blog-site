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
  plugins: ["gatsby-plugin-mdx", 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, 
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "blog",
      path: `${__dirname}/static/content/`,
    },
  }]
};