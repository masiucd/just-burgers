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
  border: 2px solid red;
  font-size: 10px;
  margin: 1.5rem 0 5rem 0;

  .img-wrapper {
    border: 2px solid red;
    position: relative;
  }
  .name {
    position: absolute;
    background: ${props => props.theme.colors.illustrations.highlight};
    padding: 0.1em 1em;
    border-radius: ${props => props.theme.borderRadius};
    @media ${below.mobileS} {
      font-size: 2em;
      bottom: -25px;
      left: 0;
    }
    @media ${above.mobileS} {
      font-size: 3em;
    }
  }
  .about {
  }
`
