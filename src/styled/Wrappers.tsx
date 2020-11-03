import styled from "styled-components"

export const TwoColumnGrid = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`
interface ColumnProps {
  padding?: string
}

export const Column = styled.div<ColumnProps>`
  padding: ${({ padding }) => (padding ? padding : "1rem")};
`
