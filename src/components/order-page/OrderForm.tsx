import React from "react"
import styled from "styled-components"
import { FormSubmit } from "@styled/form-elements"
import OrderFormElements from "./OrderFormElements"
import { above, below } from "@styled/media-query"

interface OrderFormProps {
  className: string
}

const FieldSet = styled.fieldset``

const Legend = styled.legend`
  font-size: 2em;
`

const MenuOrderWrapper = styled.div`
  display: flex;
  flex-direction: column;

  fieldset {
    flex: 1 1 100%;
  }

  @media ${above.tablet} {
    flex-direction: row;
  }
`

const OrderForm: React.FC<OrderFormProps> = ({ className }) => {
  return (
    <form className={className}>
      <FieldSet>
        <Legend>Name and email</Legend>
        <OrderFormElements />
      </FieldSet>

      <MenuOrderWrapper>
        <FieldSet>
          <Legend>Menu</Legend>
        </FieldSet>

        <FieldSet>
          <Legend>Order</Legend>
        </FieldSet>
      </MenuOrderWrapper>

      <FormSubmit type="submit">Order</FormSubmit>
    </form>
  )
}

export default styled(OrderForm)`
  border: 2px solid red;
  display: flex;
  flex-flow: column wrap;
  font-size: 10px;
  padding: 1em 2em;
`
