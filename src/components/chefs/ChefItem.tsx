import React from "react"
import styled from "styled-components"
import GatsbyImage from "gatsby-image"
import { above, below } from "@styled/media-query"
interface ChefItemProps {
  chef: Chef
}

const StyledChefItem = styled.li`
  border: 2px solid blueviolet;
  width: 15rem;
  @media ${above.mobileL} {
    width: 100%;
  }
  @media ${below.mobileS} {
    background: red;
    width: 11.2rem;
  }
`

const ImageWrapper = styled.div`
  border: 2px solid red;

  width: 100%;
`

const ChefItem: React.FC<ChefItemProps> = ({ chef }) => {
  return (
    <StyledChefItem>
      <ImageWrapper>
        <GatsbyImage fluid={chef.image?.fluid} alt={`chef-${chef.name}`} />
      </ImageWrapper>
      <p>{chef.name}</p>
    </StyledChefItem>
  )
}
export default ChefItem
