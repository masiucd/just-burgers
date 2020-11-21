export interface CartState {
  cart: CartItem[]
  status: Status
}

interface AddToCart {
  type: "ADD_TO_CART"
  payload: CartItem
}

interface SetStatus {
  type: "SET_STATUS"
  payload: Status
}

interface RemoveFromCart {
  type: "REMOVE_FROM_CART"
  payload: string // id
}

export type Dispatch = (action: Action) => void

export type Action = AddToCart | RemoveFromCart | SetStatus
