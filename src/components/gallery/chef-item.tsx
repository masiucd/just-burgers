import React from "react"
import styled from "styled-components"
import GatsbyImage from "gatsby-image"

interface ChefItemProps {
  chef: Chef
}

const StyledChefItem = styled.div`
  .chef-img {
    font-size: 10px;
    position: relative;
    picture {
      box-shadow: ${({ theme }) => theme.shadow.elevations[4]};
      img {
        border: 1px solid ${({ theme }) => theme.colors.elements.headline};
        border-radius: ${({ theme }) => theme.borderRadius};
      }
      &::after {
        background: rgba(0, 0, 0, 0.2);
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
      }
    }
    strong {
      color: ${({ theme }) => theme.colors.illustrations.main};
      font-size: 2.5em;
      left: 50%;
      opacity: 0;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      transition: ${({ theme }) => theme.transition.mainTransition};
    }
    &:hover {
      strong {
        opacity: 1;
      }
    }
  }
`

const ChefItem: React.FC<ChefItemProps> = ({ chef }) => {
  return (
    <StyledChefItem>
      <div className="chef-img" data-testid="gallery-chef-img-wrapper">
        <GatsbyImage fluid={chef.image.fluid} alt={`person-${chef.name}`} />
        <strong>{chef.name}</strong>
      </div>
    </StyledChefItem>
  )
}
export default ChefItem
