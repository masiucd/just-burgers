/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      burgers: allContentfulBurgers {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  const { edges: burgerData } = result.data.burgers

  burgerData.forEach(({ node }) => {
    const { slug } = node
    console.log(slug)
    createPage({
      path: `/burger/${slug}`,
      component: path.resolve(`./src/templates/burger-template.tsx`),
      context: {
        slug,
      },
    })
  })
}
