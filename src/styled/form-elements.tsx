import styled from "styled-components"

export const FormGroup = styled.div`
  border: 2px solid red;
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

export const FormSubmit = styled.button`
  background: ${({ theme: { colors } }) => colors.illustrations.main};
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(
      50%,
      ${({ theme: { colors } }) => colors.illustrations.highlight}
    ),
    color-stop(50%, ${({ theme: { colors } }) => colors.illustrations.tertiary})
  );
  background-image: linear-gradient(
    to right,
    ${({ theme: { colors } }) => colors.illustrations.highlight} 50%,
    ${({ theme: { colors } }) => colors.illustrations.tertiary} 50%
  );
  background-position: 0;
  background-size: 200%;
  border: 2px solid ${({ theme }) => theme.colors.illustrations.stroke};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadow.elevations[3]};
  color: ${({ theme: { colors } }) => colors.illustrations.stroke};
  cursor: pointer;
  display: block;
  font-size: 1.8em;
  margin: 1.3em auto;
  outline: none;
  padding: 0.2em 0.5em;
  transition: ${({ theme }) => theme.transition.mainTransition};
  width: 100%;
  &:hover {
    background-position: -100%;
    box-shadow: ${({ theme }) => theme.shadow.elevations[4]};
  }
  &:active {
    position: relative;
    top: 6px;
  }
`
