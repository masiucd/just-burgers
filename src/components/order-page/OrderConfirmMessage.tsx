import { useCartDispath } from "../../context/cart/CartProvider"
import useTextKey from "@hooks/useTextKey"
import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"

interface OrderConfirmMessageProps {
  cart: CartItem[]
  on: boolean
  toggleOn: () => void
}

const OrderMessageWrapper = styled(motion.div)`
  align-items: center;
  background-color: rgba(66, 66, 66, 0.3);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`

const MessageBody = styled.section`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.illustrations.main};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.illustrations.stroke};
  display: flex;
  flex-flow: column wrap;
  font-size: 10px;
  justify-content: center;
  min-height: 45em;
  position: relative;
  width: 45em;
  strong {
    border-bottom: 2px solid ${({ theme }) => theme.colors.illustrations.stroke};
    font-size: 3em;
  }
  ul {
    display: flex;
    flex-direction: column;
    font-size: 10px;
    padding: 0;
    li {
      font-size: 1.8em;
      margin: 0.5rem 0;
      span {
        margin-left: 0.5em;
        &:last-child {
          border-bottom: 2px solid black;
        }
      }
    }
  }
`

const CloseButtton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 1rem;
  top: 1rem;
  span {
    font-size: 2rem;
  }
`

const OrderConfirmMessage: React.FC<OrderConfirmMessageProps> = ({
  cart,
  on,
  toggleOn,
}) => {
  const variants = {
    show: { opacity: 1, x: 0 },
    hide: { opacity: 0, x: "100%" },
  }
  const { t } = useTextKey()
  const dispatch = useCartDispath()

  const handleClick = (): void => {
    dispatch({ type: "CLEAR_CART" })
    toggleOn()
  }

  return (
    <OrderMessageWrapper
      initial="hide"
      animate={on ? "show" : "hide"}
      variants={variants}
      transition={{ damping: 6, delay: 0.3 }}
    >
      <MessageBody>
        <strong>{t("confirmMessageModal")}</strong>
        <ul>
          {cart.length > 0 &&
            cart.map(cart => (
              <li key={cart.id}>
                {"name" in cart ? cart.name : cart.title}
                <span>{cart.price}$</span>
                <span>{cart.quantity}</span>
              </li>
            ))}
        </ul>
        <CloseButtton onClick={handleClick}>
          <span>&#x292B;</span>
        </CloseButtton>
      </MessageBody>
    </OrderMessageWrapper>
  )
}
export default OrderConfirmMessage
