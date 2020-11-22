import React from "react"
import styled from "styled-components"
import OrderItem from "./OrderItem"
import { useCartState } from "../../context"
import { useLocalStorage } from "@hooks/useLocalStorage"

const CartList = styled.ul`
  height: 100%;
  overflow-y: scroll;
  padding: 0;
`

const Orders = () => {
  const { cart } = useCartState()

  return (
    <CartList data-testid="order-page-order-list-column">
      {cart.length > 0 ? (
        cart.map((item: CartItem) => (
          <OrderItem
            dataTestId="order-page-OrderItem"
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
        <h4 data-testid="order-page-no-orders-message">No orders chosen</h4>
      )}
    </CartList>
  )
}
export default Orders
