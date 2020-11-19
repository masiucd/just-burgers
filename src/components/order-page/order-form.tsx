import React from "react"
import styled from "styled-components"
import { FormSubmit } from "@styled/form-elements"
import OrderFormElements from "./order-form-elements"
import { above } from "@styled/media-query"
import Dishes from "./dishes"

interface OrderFormProps {
  className: string
  burgers: NodeType<Burger>[]
  sides: NodeType<Side>[]
}

const FieldSet = styled.fieldset`
  background: red;
  border: 2px solid ${({ theme }) => theme.colors.illustrations.stroke};
  border-radius: ${({ theme }) => theme.borderRadius};

  /* @media ${above.mobileS} {
    &.name-email,
    &.menu,
    &.order {
      background-color: blue;
    } */
    /* width: 13rem; */
    /* width: 100%; */
  /* } */
`

const Legend = styled.legend`
  font-size: 2em;
`

const MenuOrderWrapper = styled.div`
  display: flex;
  flex-direction: column;

  fieldset {
    flex: 1 1 100%;
    max-height: 40rem;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  @media ${above.tabletL} {
    flex-direction: row;
  }
`

const OrderForm: React.FC<OrderFormProps> = ({ className, burgers, sides }) => {
  return (
    <form className={className}>
      <FieldSet className="name-email">
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

      <FormSubmit type="submit">Order</FormSubmit>
    </form>
  )
}

export default styled(OrderForm)`
  display: flex;
  flex-flow: column wrap;
  font-size: 10px;
`
