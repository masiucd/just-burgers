import React from "react"
import styled from "styled-components"
import GatsbyImage from "gatsby-image"
import { above, below } from "@styled/media-query"
import { motion } from "framer-motion"
import { useToggle } from "@hooks/useToggle"
import { Link } from "gatsby"

interface ChefItemProps {
  chef: Chef
}

const StyledChefItem = styled.li`
  position: relative;
  width: 15rem;
  @media ${above.mobileL} {
    width: 100%;
  }
  @media ${below.mobileS} {
    width: 11.2rem;
  }
  .name {
    background: ${({ theme }) => theme.colors.illustrations.secondary};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 0.2em 0.75em;
    position: absolute;
    right: -8px;
    top: -65px;
    z-index: 2;
    @media ${below.mobileS} {
      top: -30px;
      font-size: 1em;
    }
    @media ${above.mobileS} {
      font-size: 1em;
      top: -30px;
    }
    @media ${above.mobileL} {
      font-size: 1.3em;
      top: -35px;
    }
    @media ${above.tablet} {
      font-size: 1.5em;
      top: -45px;
    }
  }
  .about {
    background: rgba(255, 84, 112, 0.7);
    border: 2px solid ${({ theme }) => theme.colors.illustrations.stroke};
    border-radius: ${({ theme }) => theme.borderRadius};
    bottom: -75px;
    color: ${props => props.theme.colors.illustrations.main};
    font-size: 15px;
    left: 0;
    position: absolute;
    @media ${below.mobileS} {
      font-size: 12px;
    }
  }
  @media ${below.mobileS} {
    font-size: 12px;
    margin-bottom: 4rem;
  }

  @media ${below.laptop} {
    &:nth-child(5) {
      margin-bottom: 5rem;
    }
    &:last-child {
      margin-bottom: 5rem;
    }
  }
  @media ${above.mobileS} {
    &:last-child {
      margin-bottom: 5rem;
    }
  }
  @media ${above.laptop} {
    &:nth-child(5) {
      margin-bottom: 5rem;
    }
  }
`

const ImageWrapper = styled(Link)`
  border: 2px solid ${({ theme }) => theme.colors.illustrations.stroke};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme: { shadow } }) => shadow.elevations[5]};
  cursor: pointer;
  display: block;
  width: 100%;
`

const ChefItem: React.FC<ChefItemProps> = ({ chef }) => {
  const {
    state: showInfo,
    setStateToFalse: hide,
    setStateToTrue: show,
  } = useToggle()
  const variants = {
    show: { opacity: 1, x: 0 },
    hide: { opacity: 0, x: "-100%" },
  }
  return (
    <StyledChefItem onMouseEnter={show} onMouseLeave={hide}>
      <ImageWrapper to={`/chef/${chef.name.toLowerCase()}`}>
        <GatsbyImage fluid={chef.image?.fluid} alt={`chef-${chef.name}`} />
      </ImageWrapper>
      <p className="name">{chef.name}</p>
      <motion.p
        className="about"
        initial="hide"
        animate={showInfo ? "show" : "hide"}
        variants={variants}
        transition={{ duration: 0.2, damping: 4 }}
      >
        {chef.about}
      </motion.p>
    </StyledChefItem>
  )
}
export default ChefItem
