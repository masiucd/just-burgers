import React from "react"
import styled from "styled-components"

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

const Dish: React.FC<DishProps> = ({ dish }) => {
  return (
    <DishStyles>
      <p> {"name" in dish ? dish.name : dish.title} </p>
    </DishStyles>
  )
}
export default Dish
