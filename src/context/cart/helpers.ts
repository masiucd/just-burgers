export const addItemToCart = (orders: CartItem[], cartItemToAdd: CartItem) => {
  const isThereCartItem = orders.find(
    cartItem => cartItem.id === cartItemToAdd.id
  )

  if (isThereCartItem) {
    return orders.map(item =>
      item.id === cartItemToAdd.id
        ? { ...item, quantity: item.quantity && item.quantity + 1 }
        : item
    )
  }

  return [...orders, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (
  orders: CartItem[],
  itemToRemove: CartItem
) => {
  const existingCarItem = orders.find(item => item.id === itemToRemove.id)

  if (existingCarItem?.quantity === 1) {
    return orders.filter(item => item.id !== itemToRemove.id)
  }
  return orders.map(item =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity && item.quantity - 1 }
      : item
  )
}
