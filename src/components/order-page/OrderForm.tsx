import React from "react"
import styled from "styled-components"
import { FormSubmit } from "@styled/FormElements"
import OrderFormElements from "./OrderFormElements"
import { above } from "@styled/media-query"
import Dishes from "./Dishes"

interface OrderFormProps {
  className: string
  burgers: NodeType<Burger>[]
  sides: NodeType<Side>[]
}

const FieldSet = styled.fieldset`
  border: 2px solid ${({ theme }) => theme.colors.illustrations.stroke};
  border-radius: ${({ theme }) => theme.borderRadius};
`

const Legend = styled.legend`
  font-size: 2em;
`

const MenuOrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  fieldset {
    flex: 1 1 100%;
    margin: 0;
    max-height: 40rem;
    padding: 0;
    &.menu {
    }
  }

  @media ${above.tabletL} {
    flex-direction: row;
  }
`

const OrderForm: React.FC<OrderFormProps> = ({ className, burgers, sides }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <form
      className={className}
      data-testid="order-page-order-form"
      onChange={handleSubmit}
    >
      <FieldSet data-testid="order-page-name-fieldset">
        <Legend>Name and email</Legend>
        <OrderFormElements />
      </FieldSet>

      <MenuOrderWrapper>
        <FieldSet className="menu">
          <Legend>Menu</Legend>
          <Dishes burgers={burgers} sides={sides} />
        </FieldSet>

        <FieldSet className="order">
          <Legend>Order</Legend>
        </FieldSet>
      </MenuOrderWrapper>

      <FormSubmit data-testid="order-page-submit-button" type="submit">
        Order
      </FormSubmit>
    </form>
  )
}

export default styled(OrderForm)`
  display: flex;
  flex-flow: column wrap;
  font-size: 10px;
  padding: 1em 2em;
`
