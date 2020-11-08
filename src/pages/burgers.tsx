import * as React from "react"
import { Layout } from "@components/layout"
import { Seo } from "@components/Seo"
import { graphql, PageProps } from "gatsby"

interface BurgersPageProps {
  burgers: {
    edges: NodeType<Burger>[]
  }
}

const BurgersPage: React.FC<PageProps<BurgersPageProps, {}>> = ({ data }) => {
  return (
    <>
      <Seo title="burgers" description="our burgers" />
      <Layout>
        <h1>BurgersPage</h1>
      </Layout>
    </>
  )
}

export const BURGERS_QUERY = graphql`
  {
    burgers: allContentfulBurgers {
      edges {
        node {
          id
          name
          price
          image {
            fluid(maxHeight: 500, maxWidth: 500, quality: 90) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          ingredients {
            ingredients
          }
        }
      }
    }
  }
`

export default BurgersPage
