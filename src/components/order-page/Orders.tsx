import { useCartState } from "@context/index"
import React from "react"
import styled from "styled-components"
import OrderItem from "./OrderItem"

const CartList = styled.ul`
  overflow: hidden;
`

const Orders = () => {
  const { cart } = useCartState()

  return (
    <CartList>
      {cart.length > 0 ? (
        cart.map(item => (
          <OrderItem
            key={item.id}
            item={item}
            className={
              "name" in item
                ? `cart-item-${item.name}`
                : `cart-item-${item.title}`
            }
          />
        ))
      ) : (
        <h4>No orders chosen</h4>
      )}
    </CartList>
  )
}
export default Orders
