import * as React from "react"
import { Layout } from "@components/layout"
import { Seo } from "@components/Seo"
import { graphql, PageProps } from "gatsby"
import { Burgers } from "@components/food"
import { AppTitle } from "@components/elements"
import { BurgersGrid } from "@styled/Wrappers"
interface BurgersPageProps {
  burgers: {
    edges: NodeType<Burger>[]
  }
  sides: {
    edges: NodeType<Side>[]
  }
}

const BurgersPage: React.FC<PageProps<BurgersPageProps, {}>> = ({ data }) => {
  return (
    <>
      <Seo title="burgers" description="our burgers" />
      <Layout>
        <AppTitle title="Our menu" subTitle="pick and choice your favorite" />
        <BurgersGrid>
          {data.burgers.edges.map(burger => (
            <Burgers key={burger.node.id} burger={burger.node} />
          ))}
        </BurgersGrid>
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
    sides: allContentfulSides {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxHeight: 500, maxWidth: 500, quality: 90) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default BurgersPage
