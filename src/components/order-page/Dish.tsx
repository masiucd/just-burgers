import React from "react"
import styled from "styled-components"
import GatsbyImage from "gatsby-image"
type DishType = Burger | Side
interface DishProps {
  dish: DishType
}

const DishStyles = styled.section`
  font-size: 10px;
  p {
    font-size: 2em;
  }
`
const Image = styled.div`
  /*  */
`

const Dish: React.FC<DishProps> = ({ dish }) => {
  return (
    <DishStyles>
      <Image>
        <GatsbyImage fluid={dish.image?.fluid} alt={`dish-${dish.slug}`} />
      </Image>
      <p> {"name" in dish ? dish.name : dish.title} </p>
    </DishStyles>
  )
}
export default Dish
