import GatsbyImage from "gatsby-image"
import React from "react"
import styled from "styled-components"

interface ImageItemProps {
  item: Chef | Burger
}

const StyledImageItem = styled.div`
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

const ImageItem: React.FC<ImageItemProps> = ({ item }) => {
  return (
    <StyledImageItem data-testid="gallery-image-item">
      <div className="chef-img" data-testid="gallery-image-item-gatsby-image">
        <GatsbyImage
          fluid={item.image ? item.image.fluid : ""}
          alt={`image-item-${item.name}`}
        />
        <strong>{item.name}</strong>
      </div>
    </StyledImageItem>
  )
}
export default ImageItem
