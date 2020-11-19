import React from "react"
import styled from "styled-components"
import GatsbyImage from "gatsby-image"
import { above } from "@styled/media-query"
type DishType = Burger | Side
interface DishProps {
  dish: DishType
}

const DishStyles = styled.li`
  border: 2px solid red;
  font-size: 10px;
  margin: 0.65em auto;
  width: 36em;
  p {
    font-size: 2em;
  }
  @media ${above.tabletL} {
    width: 90%;
  }
`
const Image = styled.div`
  border: 2px solid red;
  /* display: flex;
  justify-content: center; */
  width: 100%;
`

const Dish: React.FC<DishProps> = ({ dish }) => {
  return (
    <DishStyles>
      <Image>
        <GatsbyImage fixed={dish.image?.fixed} alt={`dish-${dish.slug}`} />
      </Image>
      <p> {"name" in dish ? dish.name : dish.title} </p>
    </DishStyles>
  )
}
export default Dish
