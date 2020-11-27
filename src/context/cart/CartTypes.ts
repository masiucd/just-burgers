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
  payload: CartItem
}

interface UpdateCart {
  type: "UPDATE_CART"
  payload: CartItem[]
}
interface RemoveItemCompletely {
  type: "REMOVE_ITEM_COMPLETELY"
  payload: string // id
}

interface ClearCart {
  type: "CLEAR_CART"
}

interface CalculatePrice {
  type: "CALCULATE_PRICE"
}

export type Dispatch = (action: Action) => void

export type Action =
  | AddToCart
  | RemoveFromCart
  | SetStatus
  | CalculatePrice
  | RemoveItemCompletely
  | UpdateCart
  | ClearCart
