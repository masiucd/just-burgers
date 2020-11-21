import React from "react"
import styled from "styled-components"

interface OrderItemProps {
  item: CartItem
  className: string
}

const OrderItem: React.FC<OrderItemProps> = ({ item, className }) => {
  return (
    <li className={className}>
      <p>{"name" in item ? item.name : item.title}</p>
      <p>{item.price}$</p>
    </li>
  )
}
export default styled(OrderItem)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.illustrations.stroke};
  font-size: 10px;
  p {
    font-size: 2em;
  }
  padding: 0;
`
