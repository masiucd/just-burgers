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
import { useState } from "react"
import {
  filterListByIngredient,
  getIngredientList,
  renderList,
} from "../helpers"

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
  const [selectedIngredient, setSelectedIngredient] = useState<string>("")
  const { t } = useTextKey()
  const {
    burgers: { edges: burgersList },
    sides: { edges: sideList },
  } = data

  const ingredients = getIngredientList(burgersList, sideList)

  const handleSelectIngredient = (ingredient: string): void => {
    setSelectedIngredient(ingredient)
  }

  const filteredBurgers = filterListByIngredient(selectedIngredient)(
    burgersList
  ) as NodeType<Burger>[]

  const filteredSides = filterListByIngredient(selectedIngredient)(
    sideList
  ) as NodeType<Side>[]

  const whatBurgerListToRender = renderList(selectedIngredient)(
    burgersList,
    filteredBurgers
  ) as NodeType<Burger>[]

  const whatSideListToRender = renderList(selectedIngredient)(
    sideList,
    filteredSides
  ) as NodeType<Side>[]

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
        <Ingredients
          ingredients={ingredients}
          handleSelectIngredient={handleSelectIngredient}
        />
        <Heading>{t("ourBurgerTitle")}</Heading>
        <Grid>
          {whatBurgerListToRender.map((burger: NodeType<Burger>) => (
            <Burger key={burger.node.id} burger={burger.node} />
          ))}
        </Grid>
        <Heading>{t("ourSidesTitle")}</Heading>
        <Grid>
          {whatSideListToRender.map(side => (
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
            fluid(maxHeight: 1000, maxWidth: 1000, quality: 90) {
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
            fluid(maxHeight: 1000, maxWidth: 1000, quality: 90) {
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

// for (let { node } of burgersList) {
//   for (let i = 0; i < node.ingredients?.ingredients.length; i++) {
//     console.log(node.ingredients?.ingredients[i])
//     console.log(xs.includes(node.ingredients?.ingredients[i]))
//   }
// }
