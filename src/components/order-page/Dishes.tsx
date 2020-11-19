import React from "react"
import styled from "styled-components"
import Dish from "./dish"

interface DishesProps {
  burgers: NodeType<Burger>[]
  sides: NodeType<Side>[]
}

const StyledDishes = styled.ul`
  margin: 0;
  padding: 0;
`

const renderBurgers = (burgers: NodeType<Burger>[]) =>
  burgers.map(d => <Dish key={d.node.id} dish={d.node} />)

const renderSides = (sides: NodeType<Side>[]) =>
  sides.map(d => <Dish key={d.node.id} dish={d.node} />)

const Dishes: React.FC<DishesProps> = ({ burgers, sides }) => {
  return (
    <StyledDishes>
      {renderBurgers(burgers)}
      {renderSides(sides)}
    </StyledDishes>
  )
}
export default Dishes
