import { FormGroup, FormInput, FormLabel } from "@styled/FormElements"
import React from "react"
import styled from "styled-components"

const OrderFormElementsWrapper = styled.div``

const OrderFormElements: React.FC = () => {
  return (
    <OrderFormElementsWrapper>
      <FormGroup>
        <FormLabel htmlFor="name">
          <span>Name</span>
        </FormLabel>
        <FormInput type="text" id="name" placeholder="name" />
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="email">
          <span>Email</span>
        </FormLabel>
        <FormInput type="email" id="email" placeholder="email" />
      </FormGroup>
    </OrderFormElementsWrapper>
  )
}
export default OrderFormElements
