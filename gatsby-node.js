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
      sides: allContentfulSides {
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
  const { edges: sidesData } = result.data.sides

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

  sidesData.forEach(({ node }) => {
    const { slug } = node
    createPage({
      path: `/side/${slug}`,
      component: path.resolve(`./src/templates/side-template.tsx`),
      context: {
        slug,
      },
    })
  })
}
