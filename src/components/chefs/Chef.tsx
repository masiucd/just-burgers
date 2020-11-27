import React from "react"
import GatsbyImage from "gatsby-image"
import styled from "styled-components"
import { above, below } from "@styled/media-query"

interface ChefProps {
  chef: Chef
  className: string
}

const Chef: React.FC<ChefProps> = ({ chef, className }) => {
  return (
    <section className={className}>
      <div className="img-wrapper">
        <GatsbyImage
          fluid={chef.image?.fluid}
          alt={`chef-${chef.name}-profile`}
        />
        <p className="name">{chef.name}</p>
      </div>
      <p className="about">{chef.about}</p>
    </section>
  )
}
export default styled(Chef)`
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 10px;
  margin: 1.5rem 0 5rem 0;
  .img-wrapper {
    border-radius: ${({ theme }) => theme.borderRadius};
    position: relative;
    &::after {
      background: rgba(66, 66, 66, 0.3);
      content: "";
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }
  .name {
    background: ${props => props.theme.colors.illustrations.highlight};
    border-radius: ${props => props.theme.borderRadius};
    padding: 0.1em 1em;
    position: absolute;
    @media ${below.mobileS} {
      font-size: 2em;
      bottom: -35px;
      left: 0;
    }
    @media ${above.mobileS} {
      font-size: 3em;
      bottom: -55px;
    }
  }
  .about {
    background: ${props => props.theme.colors.illustrations.highlight};
    border-radius: ${props => props.theme.borderRadius};
    box-shadow: ${({ theme }) => theme.shadow.elevations[3]};
    font-size: 1rem;
    margin-top: 3rem;
    max-width: 500px;
    padding: 2rem 1rem;
  }
`
