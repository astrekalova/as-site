/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allPrismicBlogpost {
        edges {
          node {
            id
            uid
            data {
              title {
                text
              }
              date
              content {
                raw {
                  text
                }
              }
            }
          }
        }
      }
    }
  `)

  const postTemplate = path.resolve("src/templates/post.jsx")
  const postListTemplate = path.resolve("src/templates/postList.jsx")

  pages.data.allPrismicBlogpost.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.uid}`,
      component: postTemplate,
      context: {
        uid: edge.node.uid,
      },
    })
  });

  createPage({
    path: `/blog`,
    component: postListTemplate,
    context: {
      edges: pages.data.allPrismicBlogpost.edges
    },
  })
}