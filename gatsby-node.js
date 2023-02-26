const path = require("path")
const blogTemplate = path.resolve(`./src/templates/blog-template.jsx`)

exports.createPages = async ({graphql, actions, reporter}) => {
    const {createPage} = actions 

    const result = await graphql(`
    query {
        allMdx {
          nodes {
            id
            frontmatter {
              slug
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    `)

    if (result.errors) {
        reporter.panicOnBuild('Error loading MDX results',  result.errors)
    }

    const posts = result.data.allMdx.nodes

    posts.forEach(node => {
        createPage({
            path: node.frontmatter.slug, 
            component: `${blogTemplate}?__contentFilePath=${node.internal.contentFilePath}`, 
            context: {id: node.id},
        })
    })
}