import styled from "styled-components"
import { below } from "."
import { above } from "./media-query"

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
  @media ${below.mobileS} {
    display: flex;
    flex-flow: column wrap;
  }
  @media ${above.mobileS} {
    display: flex;
    flex-flow: column wrap;
  }
  @media ${above.tabletL} {
    display: grid;
    grid-template-columns: repeat(2, minmax(120px, 1fr));
  }
  @media ${above.laptop} {
    display: grid;
    grid-template-columns: repeat(3, minmax(120px, 1fr));
  }
`
