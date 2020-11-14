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
  BurgerTitle,
  ImageWrapper,
  Ingredients,
  NamePrice,
} from "./burger-styles"
import { AnimatePresence } from "framer-motion"
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
  const { state: on, toggle } = useToggle()

  const infoVariants = {
    open: { opacity: 1, x: 0, height: "auto" },
    closed: { opacity: 0, x: "-100%", height: 0 },
  }
  const ingredientsVariants = {
    open: { opacity: 1, x: 0, height: "100%" },
    closed: { opacity: 0, x: "100%", height: 0 },
  }
  return (
    <>
      <Seo title="burger" />
      <Layout>
        <BurgerItem>
          <ImageWrapper>
            <GatsbyImage
              fluid={burger.image?.fluid}
              alt={`burger-${burger.slug}`}
            />
          </ImageWrapper>
          <AnimatePresence>
            <BurgerBody
              key="burger-body"
              initial={{ opacity: 0 }}
              animate={
                on
                  ? { opacity: 1, transition: { duration: 0.3 } }
                  : { opacity: 0 }
              }
              exit={{ opacity: 0 }}
            >
              <div className="column-flex-column">
                <NamePrice>
                  <p> {burger.name} </p>
                  <small>{burger.price}$</small>
                </NamePrice>
                <AnimatedInfo
                  vegetarian={burger.vegetarian}
                  initial="closed"
                  animate={on ? "open" : "closed"}
                  variants={infoVariants}
                  transition={{ duration: 0.6, damping: 8 }}
                >
                  <p> {burger.desc?.desc} </p>
                  <p>
                    {burger.vegetarian
                      ? "for the green lovers 🥗 "
                      : "for the meet lovers 🥩"}{" "}
                  </p>
                </AnimatedInfo>
              </div>
              <div className="column-flex-row">
                <Ingredients
                  initial="closed"
                  animate={on ? "open" : "closed"}
                  variants={ingredientsVariants}
                  transition={{ duration: 0.6, damping: 8 }}
                >
                  {burger.ingredients?.ingredients.map(ingredient => (
                    <li key={ingredient}>{ingredient}</li>
                  ))}
                </Ingredients>
              </div>
            </BurgerBody>
          </AnimatePresence>
          <BurgerTitle
            initial={{ opacity: 0, x: "1000%" }}
            animate={{ opacity: 1, x: "-50%" }}
            transition={{ damping: 6, duration: 0.25 }}
            onClick={toggle}
          >
            <h4>{burger.name} ⬇ </h4>
          </BurgerTitle>
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
