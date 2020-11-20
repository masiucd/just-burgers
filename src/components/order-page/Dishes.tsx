import React from "react"
import styled from "styled-components"
import Dish from "./Dish"

interface DishesProps {
  burgers: NodeType<Burger>[]
  sides: NodeType<Side>[]
}

const StyledDishes = styled.ul`
  /*  */
`

const renderBurgers = (burgers: NodeType<Burger>[]) =>
  burgers.map(d => <Dish key={d.node.id} dish={d.node} />)

const renderSides = (sides: NodeType<Side>[]) =>
  sides.map(d => <Dish key={d.node.id} dish={d.node} />)

const Dishes: React.FC<DishesProps> = ({ burgers, sides }) => {
  return (
    <StyledDishes data-testid="order-page-dishes-list">
      {renderBurgers(burgers)}
      {renderSides(sides)}
    </StyledDishes>
  )
}
export default Dishes
