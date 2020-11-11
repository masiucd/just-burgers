import * as React from "react"
import { Layout } from "@components/layout"
import { Seo } from "@components/Seo"
import { graphql, PageProps } from "gatsby"
import { Burger } from "@components/food"
import { AppTitle } from "@components/elements"
import { Grid } from "@styled/Wrappers"
import useTextKey from "@hooks/useTextKey"
import { css } from "styled-components"
interface BurgersPageProps {
  burgers: {
    edges: NodeType<Burger>[]
  }
  sides: {
    edges: NodeType<Side>[]
  }
}

const cx = css`
  p {
    font-size: 20px;
  }
`

const BurgersPage: React.FC<PageProps<BurgersPageProps, {}>> = ({ data }) => {
  const { t } = useTextKey()
  return (
    <>
      <Seo title="burgers" description="our burgers" />
      <Layout>
        <AppTitle
          className="burgers-title"
          title="Our menu"
          subTitle="pick and choice your favorite"
          desc={t("ourBurgersDesc")}
          style={cx}
        />
        <Grid>
          {data.burgers.edges.map(burger => (
            <Burger key={burger.node.id} burger={burger.node} />
          ))}
        </Grid>
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
          slug
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
