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

export const BurgersGrid = styled.section`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
`

export const Grid = styled(BurgersGrid)`
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`
