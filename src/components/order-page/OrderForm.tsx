import React from "react"
import { FormSubmit } from "@styled/FormElements"
import OrderFormElements from "./OrderFormElements"
import { FieldSet, Form, Legend, TotalPrice, Wrapper } from "./Styles"
import MenuAndOrder from "./MenuAndOrder"
import { useCartState } from "../../context"

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
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const { cart } = useCartState()

  return (
    <Wrapper>
      <MenuAndOrder burgers={burgers} sides={sides} />

      <TotalPrice>
        <strong>Total Price </strong>{" "}
        <strong> {calculateTotalPrice(cart).toFixed(2)}$</strong>
      </TotalPrice>

      <Form data-testid="order-page-order-form" onChange={handleSubmit}>
        <FieldSet data-testid="order-page-name-fieldset">
          <Legend>Name and email</Legend>
          <OrderFormElements />
        </FieldSet>

        <FormSubmit data-testid="order-page-submit-button" type="submit">
          Order
        </FormSubmit>
      </Form>
    </Wrapper>
  )
}

export default OrderForm
