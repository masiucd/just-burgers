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
    createPage({
      path: `/burger/${slug}`,
      component: path.resolve(`./src/templates/burger-template.tsx`),
      context: {
        slug,
      },
    })
  })
}
