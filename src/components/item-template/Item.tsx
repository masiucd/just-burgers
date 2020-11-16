import { useToggle } from "@hooks/useToggle"
import {
  AnimatedInfo,
  ImageWrapper,
  Ingredients,
  ItemBody,
  ItemTitle,
  ItemWrapper,
  NamePrice,
} from "@styled/item-styles"
import { infoVariants, ingredientsVariants } from "@styled/variants"
import { AnimatePresence } from "framer-motion"
import GatsbyImage from "gatsby-image"
import React from "react"

type SideBurgerOreDrink = Side | Burger
interface ItemProps {
  item: SideBurgerOreDrink
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const { state: on, toggle } = useToggle()

  let description
  if ("desc_" in item) {
    const { value: desc } = item.desc_.content[0].content[0]
    description = desc
  }

  return (
    <ItemWrapper>
      <ImageWrapper>
        <GatsbyImage
          fluid={item.image?.fluid}
          alt={`${
            "title" in item ? `side-${item.slug}` : `burger-${item.slug}`
          }`}
        />
      </ImageWrapper>
      <AnimatePresence>
        <ItemBody
          key="burger-body"
          initial={{ opacity: 0 }}
          animate={
            on ? { opacity: 1, transition: { duration: 0.3 } } : { opacity: 0 }
          }
          exit={{ opacity: 0 }}
        >
          <div className="column-flex-column">
            <NamePrice>
              <p> {"title" in item ? item.title : item.name} </p>
              <small>{item.price}$</small>
            </NamePrice>
            <AnimatedInfo
              vegetarian={item.vegetarian}
              initial="closed"
              animate={on ? "open" : "closed"}
              variants={infoVariants}
              transition={{ duration: 0.6, damping: 8 }}
            >
              <p> {"desc_" in item ? description : item.desc?.desc} </p>
              <p>
                {item.vegetarian
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
              {item.ingredients?.ingredients.map(ingredient => (
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
        <h4>{"title" in item ? item.title : item.name} ⬇ </h4>
      </ItemTitle>
    </ItemWrapper>
  )
}
export default Item
