import React from "react"
import styled from "styled-components"
import ChefItem from "./ChefItem"
import { below } from "@styled/media-query"

interface ChefsProps {
  chefsList: NodeType<Chef>[]
  className?: string
}

const Chefs: React.FC<ChefsProps> = ({
  chefsList,
  className = "chefs-list",
}) => {
  return (
    <ul className={className}>
      {chefsList.map(({ node }) => (
        <ChefItem key={node.id} chef={node} />
      ))}
    </ul>
  )
}
export default styled(Chefs)`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: none;
  /* @media ${below.mobileL} {
    padding: none;
  } */
`
