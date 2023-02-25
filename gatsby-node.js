const path = require("path")
const postTemplate = path.resolve(`./src/templates/post.jsx`)

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
            component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`, 
            context: {id: node.id},
        })
    })
}