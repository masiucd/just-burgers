import React from "react"
import { CartState, Dispatch, Action } from "./CartTypes"

const initialState: CartState = {
  cart: [],
  status: "DEFAULT",
}

const CartStateContext = React.createContext<CartState | undefined>(undefined)
const CartDispatchContext = React.createContext<Dispatch | undefined>(undefined)

function reducer(state: CartState = initialState, action: Action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
      }
    case "SET_STATUS":
      return {
        ...state,
        status: action.payload,
      }
    default: {
      throw new Error(`Unable to resolve action type`)
    }
  }
}

const CartProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  )
}

const useCartState = () => {
  const context = React.useContext(CartStateContext)
  if (!context) {
    throw new Error("CartSateContext must be used with in a Cart  provider!")
  }
  return context
}
const useCartDispath = () => {
  const context = React.useContext(CartDispatchContext)
  if (!context) {
    throw new Error("CartDispatchContext must be used with in a Cartprovider!")
  }
  return context
}

export { CartProvider, useCartDispath, useCartState }
