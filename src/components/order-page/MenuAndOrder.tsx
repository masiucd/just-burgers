import React from "react"
import Dishes from "./Dishes"
import Orders from "./Orders"
import { FieldSet, Legend, MenuOrderWrapper } from "./Styles"

interface MenuAndOrderProps {
  burgers: NodeType<Burger>[]
  sides: NodeType<Side>[]
}

const MenuAndOrder: React.FC<MenuAndOrderProps> = ({ burgers, sides }) => {
  return (
    <MenuOrderWrapper>
      <FieldSet className="menu">
        <Legend>Menu</Legend>
        <Dishes burgers={burgers} sides={sides} />
      </FieldSet>

      <FieldSet className="order">
        <Legend>Order</Legend>
        <Orders />
      </FieldSet>
    </MenuOrderWrapper>
  )
}
export default MenuAndOrder
