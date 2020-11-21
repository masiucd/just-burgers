import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { above, below } from "@styled/index"
import { useCartDispath } from "../../context"

interface OrderItemProps {
  item: CartItem
  className: string
}

const calculatePrise = (item: CartItem) =>
  (Number(item.price) * Number(item.quantity)).toFixed(2)

const OrderItem: React.FC<OrderItemProps> = ({ item, className }) => {
  const dispatch = useCartDispath()

  return (
    <motion.li
      className={className}
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="name-title">
        <p>{"name" in item ? item.name : item.title}</p>
      </div>
      <div className="info">
        <p>{calculatePrise(item)}$</p>
        <p>
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_CART", payload: item })
            }
          >
            &#x02190;
          </button>
          {item.quantity}
          <button
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
          >
            &#x02192;
          </button>
        </p>
        <button
          className="remove-button"
          onClick={() =>
            dispatch({ type: "REMOVE_ITEM_COMPLETELY", payload: item.id })
          }
        >
          X
        </button>
      </div>
    </motion.li>
  )
}
export default styled(OrderItem)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.illustrations.stroke};
  display: flex;
  font-size: 10px;
  padding: 0;
  p {
    font-size: 2em;
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
    display: inline;
    outline: none;
  }
  position: relative;

  @media ${below.mobileS} {
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    .info {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
    }
    p {
      font-size: 1.4em;
    }
  }

  @media ${above.mobileM} {
    .name-title,
    .info {
      flex: 1;
    }
    .info {
      text-align: right;
    }
  }
  @media ${above.mobileL} {
    .name-title,
    .info {
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: space-between;
    }
  }
  @media ${above.tablet} {
    .name-title,
    .info {
      padding: 1em;
    }
    .info {
      justify-content: space-evenly;
    }
  }
  .remove-button {
  }
`
