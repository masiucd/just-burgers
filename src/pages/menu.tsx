import * as React from "react"
import { Layout } from "@components/layout"
import { Seo } from "@components/Seo"
import { graphql, PageProps } from "gatsby"
import { Burger, Side } from "@components/food"
import { AppTitle } from "@components/elements"
import { Grid } from "@styled/Wrappers"
import useTextKey from "@hooks/useTextKey"
import styled, { css } from "styled-components"

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
  h2,
  .subtitle,
  .descText {
    text-align: center;
  }
`

const Heading = styled.h3`
  border-bottom: 2px solid
    ${({ theme }) => theme.colors.illustrations.highlight};
  display: inline-block;
  margin: 0.5rem 0;
  padding: 0.125rem 0;
`

const MenuPage: React.FC<PageProps<BurgersPageProps, {}>> = ({ data }) => {
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
        <Heading>{t("ourBurgerTitle")}</Heading>
        <Grid>
          {data.burgers.edges.map(burger => (
            <Burger key={burger.node.id} burger={burger.node} />
          ))}
        </Grid>
        <Heading>{t("ourSidesTitle")}</Heading>
        <Grid>
          {data.sides.edges.map(side => (
            <Side key={side.node.id} side={side.node} />
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
          vegetarian
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

export default MenuPage
