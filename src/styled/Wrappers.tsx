import styled from "styled-components"

export const TwoColumnGrid = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`
