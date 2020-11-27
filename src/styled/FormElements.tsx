import styled from "styled-components"

export const FormGroup = styled.div`
  display: flex;
  flex-flow: column wrap;
  padding: 1.5em 1em;
`

export const FormInput = styled.input`
  border: 2px solid ${({ theme }) => theme.colors.illustrations.stroke};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadow.elevations[3]};
  font-size: 1.8em;
  outline: none;
  padding: 0.2em 0.5em;
  transition: ${({ theme }) => theme.transition.mainTransition};
  width: 100%;
  &:focus {
    border-color: ${({ theme }) => theme.colors.illustrations.highlight};
    box-shadow: ${({ theme }) => theme.shadow.elevations[4]};
    width: 98%;
  }
`

export const FormLabel = styled.label`
  span {
    display: inline-block;
    font-size: 2em;
    padding: 0.3em 0;
  }
`
interface FormSubmitProps {
  disabledStyle: boolean
}
export const FormSubmit = styled.button<FormSubmitProps>`
  background: ${({ disabledStyle, theme: { colors } }) =>
    disabledStyle
      ? colors.illustrations.stroke
      : colors.illustrations.tertiary};

  border: 2px solid ${({ theme }) => theme.colors.illustrations.stroke};

  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadow.elevations[3]};
  color: ${({ disabledStyle, theme: { colors } }) =>
    disabledStyle ? colors.illustrations.main : colors.illustrations.stroke};
  cursor: pointer;
  display: block;
  font-size: 2em;
  font-weight: 800;
  margin: 1.3em auto;
  outline: none;
  padding: 0.5em 0.8em;
  transition: ${({ theme }) => theme.transition.mainTransition};
  width: 80%;
  &:hover {
    background: ${({ theme: { colors } }) => colors.illustrations.stroke};
    box-shadow: ${({ theme }) => theme.shadow.elevations[4]};
    color: ${({ theme: { colors } }) => colors.illustrations.main};
    width: 79%;
  }
  &:active {
    position: relative;
    top: 6px;
  }
`
