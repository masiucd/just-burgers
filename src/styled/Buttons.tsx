import styled from "styled-components"

export const Button = styled.button`
  background: transparent;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadow.elevations[3]};
  color: ${({ theme }) => theme.colors.illustrations.stroke};
  cursor: pointer;
  font-size: 2em;
  margin: 0.5em auto;
  transition: ${props => props.theme.transition.quickTransition};
  &:hover {
    background: ${props => props.theme.colors.elements.button};
    box-shadow: ${({ theme }) => theme.shadow.elevations[4]};
  }
`
