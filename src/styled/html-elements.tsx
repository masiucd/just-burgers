import styled, { DefaultTheme, ThemedCssFunction } from "styled-components"

interface StrongProps {
  strongStyles?: ThemedCssFunction<DefaultTheme>
}

export const Strong = styled.strong<StrongProps>`
  background: ${({ theme }) => theme.colors.illustrations.tertiary};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadow.elevations[2]};
  color: ${({ theme }) => theme.colors.illustrations.stroke};
  display: inline-block;
  font-size: 2.3em;
  margin-bottom: 1rem;
  padding: 0.1em 0.5em;
`
