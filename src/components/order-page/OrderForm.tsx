import React from "react"
import { FormSubmit } from "@styled/FormElements"
import OrderFormElements from "./OrderFormElements"
import { FieldSet, Form, Legend, TotalPrice, Wrapper } from "./Styles"
import MenuAndOrder from "./MenuAndOrder"
import { useCartState } from "../../context"
import { useToggle } from "@hooks/useToggle"
import OrderConfirmMessage from "./OrderConfirmMessage"

interface OrderFormProps {
  burgers: NodeType<Burger>[]
  sides: NodeType<Side>[]
}

const calculateTotalPrice = (orders: CartItem[]) =>
  orders.reduce(
    (quantity, { quantity: qty = 1, price = 1 }) => quantity + qty * price,
    0
  )

const OrderForm: React.FC<OrderFormProps> = ({ burgers, sides }) => {
  const { state, toggle } = useToggle()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    toggle()
  }

  const { cart } = useCartState()

  return (
    <Wrapper>
      <MenuAndOrder burgers={burgers} sides={sides} />

      <TotalPrice>
        <strong>Total Price </strong>{" "}
        <strong> {calculateTotalPrice(cart).toFixed(2)}$</strong>
      </TotalPrice>

      <Form data-testid="order-page-order-form" onSubmit={handleSubmit}>
        <FieldSet data-testid="order-page-name-fieldset">
          <Legend>Name and email</Legend>
          <OrderFormElements />
        </FieldSet>

        <FormSubmit
          data-testid="order-page-submit-button"
          type="submit"
          disabled={cart.length === 0}
          disabledStyle={cart.length === 0}
        >
          {cart.length > 0 ? "Order 😎" : "Add some goodies 🍔"}
        </FormSubmit>
      </Form>
      <OrderConfirmMessage cart={cart} on={state} toggleOn={toggle} />
    </Wrapper>
  )
}

export default OrderForm
