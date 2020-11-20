import React from "react"
import { FormSubmit } from "@styled/FormElements"
import OrderFormElements from "./OrderFormElements"
import { FieldSet, Form, Legend, Wrapper } from "./Styles"
import MenuAndOrder from "./MenuAndOrder"

interface OrderFormProps {
  burgers: NodeType<Burger>[]
  sides: NodeType<Side>[]
}

const OrderForm: React.FC<OrderFormProps> = ({ burgers, sides }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <Wrapper>
      <MenuAndOrder burgers={burgers} sides={sides} />
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
