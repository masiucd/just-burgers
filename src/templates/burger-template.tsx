import { Layout } from "@components/layout"
import { Seo } from "@components/Seo"
import { graphql, PageProps } from "gatsby"
import React from "react"
import GatsbyImage from "gatsby-image"
import { useToggle } from "@hooks/useToggle"
import {
  AnimatedInfo,
  BurgerBody,
  BurgerItem,
  ImageWrapper,
  Ingredients,
  NamePrice,
} from "./burger-styles"
interface BurgerDataProps {
  burger: Burger
}
interface PageContextProps {
  slug: string
}

const BurgerTemplate: React.FC<PageProps<
  BurgerDataProps,
  PageContextProps
>> = ({ data: { burger }, pageContext }) => {
  const { state, toggle, setStateToFalse, setStateToTrue } = useToggle()
  return (
    <>
      <Seo title="burger" />
      <Layout>
        <BurgerItem>
          <ImageWrapper on={state}>
            <GatsbyImage
              fluid={burger.image?.fluid}
              alt={`burger-${burger.slug}`}
            />
          </ImageWrapper>
          <BurgerBody>
            <div className="column-flex-column">
              <NamePrice>
                <p> {burger.name} </p>
                <small>{burger.price}$</small>
              </NamePrice>
              <AnimatedInfo>
                <p> {burger.desc?.desc} </p>
                <p>
                  {burger.vegetarian
                    ? "for the green lovers 🥗 "
                    : "for the meet lovers 🥩"}{" "}
                </p>
              </AnimatedInfo>
            </div>
            <div className="column-flex-row">
              <Ingredients>
                {burger.ingredients?.ingredients.map(ingredient => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </Ingredients>
            </div>
          </BurgerBody>
        </BurgerItem>
      </Layout>
    </>
  )
}

export const BURGER_TEMPLATE_QUERY = graphql`
  query($slug: String!) {
    burger: contentfulBurgers(slug: { eq: $slug }) {
      id
      name
      price
      vegetarian
      slug
      desc {
        desc
      }
      ingredients {
        ingredients
      }
      image {
        fluid(quality: 100, maxWidth: 900, maxHeight: 650) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default BurgerTemplate
// maxHeight: 500, maxWidth: 500, quality: 90

// # fixed(quality: 100, width: 600, height: 500) {
//   #   ...GatsbyContentfulFixed
//   # }
