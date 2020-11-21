import * as React from "react"
import { Layout } from "@components/layout"
import { Seo } from "@components/Seo"
import { graphql, PageProps } from "gatsby"
import { Burger, Side } from "@components/food"
import { AppTitle } from "@components/elements"
import { Grid } from "@styled/Wrappers"
import useTextKey from "@hooks/useTextKey"
import styled, { css } from "styled-components"
import { Ingredients } from "@components/order-page"

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

type ListType = NodeType<Burger>[] | NodeType<Side>[]
type ListItem = NodeType<Burger> | NodeType<Side>

const makeIngredientsList = (list: ListType) => {
  return (list as ListItem[]).map(
    (x: ListItem) => x.node.ingredients?.ingredients
  )
}

const uniqueList = (list: string[]): string[] =>
  list.filter((item, index) => list.indexOf(item) === index)

const getIngredientList = (
  burgers: NodeType<Burger>[],
  sides: NodeType<Side>[]
) => {
  const burgersIngredients = makeIngredientsList(burgers)
  const sideIngredients = makeIngredientsList(sides)

  const xs = [...burgersIngredients, ...sideIngredients].flat() as string[]

  return uniqueList(xs)
}

const MenuPage: React.FC<PageProps<BurgersPageProps, {}>> = ({ data }) => {
  const { t } = useTextKey()
  const {
    burgers: { edges: burgersList },
    sides: { edges: sideList },
  } = data

  const ingredients = getIngredientList(burgersList, sideList)

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
        <Ingredients ingredients={ingredients} />
        <Heading>{t("ourBurgerTitle")}</Heading>
        <Grid>
          {burgersList.map(burger => (
            <Burger key={burger.node.id} burger={burger.node} />
          ))}
        </Grid>
        <Heading>{t("ourSidesTitle")}</Heading>
        <Grid>
          {sideList.map(side => (
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
          vegetarian
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
  }
`

export default MenuPage
