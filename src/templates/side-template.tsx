import React from "react"
import { Seo } from "@components/Seo"
import { Layout } from "@components/layout"
import { graphql, PageProps } from "gatsby"
import {
  AnimatedInfo,
  ImageWrapper,
  Ingredients,
  ItemBody,
  ItemTitle,
  ItemWrapper,
  NamePrice,
} from "@styled/item-styles"
import GatsbyImage from "gatsby-image"
import { AnimatePresence } from "framer-motion"
import { useToggle } from "@hooks/useToggle"
import { infoVariants, ingredientsVariants } from "@styled/variants"
import Item from "@components/item-template/Item"

interface SideDataProps {
  side: Side
}

const SideTemplate: React.FC<PageProps<SideDataProps, {}>> = ({
  data: { side },
}) => {
  const { state: on, toggle } = useToggle()

  const { value: desc } = side.desc_.content[0].content[0]
  return (
    <>
      <Seo title={`side-${side.slug}`} />
      <Layout>
        <Item item={side} />
        {/* <ItemWrapper>
          <ImageWrapper>
            <GatsbyImage fluid={side.image?.fluid} alt={`side-${side.slug}`} />
          </ImageWrapper>
          <AnimatePresence>
            <ItemBody
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
                  <p> {side.title} </p>
                  <small>{side.price}$</small>
                </NamePrice>
                <AnimatedInfo
                  vegetarian={side.vegetarian}
                  initial="closed"
                  animate={on ? "open" : "closed"}
                  variants={infoVariants}
                  transition={{ duration: 0.6, damping: 8 }}
                >
                  <p> {desc} </p>
                  <p>
                    {side.vegetarian
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
                  {side.ingredients?.ingredients.map(ingredient => (
                    <li key={ingredient}>{ingredient}</li>
                  ))}
                </Ingredients>
              </div>
            </ItemBody>
          </AnimatePresence>
          <ItemTitle
            initial={{ opacity: 0, x: "1000%" }}
            animate={{ opacity: 1, x: "-50%" }}
            transition={{ damping: 6, duration: 0.25 }}
            onClick={toggle}
          >
            <h4>{side.title} ⬇ </h4>
          </ItemTitle>
        </ItemWrapper> */}
      </Layout>
    </>
  )
}

export const SIDE_QUERY = graphql`
  query($slug: String!) {
    side: contentfulSides(slug: { eq: $slug }) {
      id
      title
      price
      vegetarian
      slug
      ingredients {
        ingredients
      }
      image {
        fluid(quality: 100, maxWidth: 900, maxHeight: 650) {
          ...GatsbyContentfulFluid
        }
      }
      desc_ {
        id
        content {
          content {
            value
          }
        }
      }
    }
  }
`

export default SideTemplate
