import { above } from "@styled/media-query"
import styled from "styled-components"

const FieldSet = styled.fieldset`
  border: 2px solid ${({ theme }) => theme.colors.illustrations.stroke};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
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

const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  font-size: 10px;
  padding: 1em 2em;
`

const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  font-size: 10px;
  margin-top: 2em;
`

export { FieldSet, Form, Wrapper, MenuOrderWrapper, Legend }
