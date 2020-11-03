import React from "react"
import styled from "styled-components"
import GatsbyImage from "gatsby-image"
interface ChefItemProps {
  chef: Chef
}

// interface StyledChefItemProps{
//   img: any
// }
const StyledChefItem = styled.div``

const ChefItem: React.FC<ChefItemProps> = ({ chef }) => {
  return (
    <StyledChefItem>
      <GatsbyImage fluid={chef.image.fluid} alt={`person-${chef.name}`} />
      <p>{chef.name}</p>
    </StyledChefItem>
  )
}
export default ChefItem
