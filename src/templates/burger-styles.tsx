import { above, below } from "@styled/mediaQuery"
import { motion } from "framer-motion"
import styled from "styled-components"

export const BurgerItem = styled.section`
  border-radius: ${({ theme }) => theme.borderRadius};
  height: 100%;
  position: relative;
  width: 100%;
  @media ${above.tablet} {
    min-width: 520px;
  }
  @media ${above.tabletL} {
    min-width: 700px;
  }
  @media ${above.laptop} {
    min-width: 900px;
  }
`

interface ImageWrapperProps {
  on: boolean
}
export const ImageWrapper = styled.div<ImageWrapperProps>`
  border: 1px solid ${({ on }) => on && "green"};
  position: relative;
`

export const BurgerBody = styled.div`
  background: ${({ theme }) => theme.colors.elements.bg};
  border: 2px solid blue;
  display: flex;
  flex-flow: column wrap;
  font-size: 10px;
  padding: 0;
  position: relative;
  @media ${above.tabletL} {
    flex-flow: row wrap;
  }

  p {
    font-size: 2em;
  }
  small {
    font-size: 1.8em;
    opacity: 0.7;
  }
  .column-flex-column {
    flex: 1;
    flex-basis: 50%;
    @media ${below.mobileS} {
      flex-flow: column wrap;
      width: 100%;
    }
  }
  .column-flex-row {
    flex: 1;
    flex-basis: 50%;
    @media ${below.mobileS} {
      width: 100%;
    }
  }
`

export const NamePrice = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.colors.elements.bg};
  display: flex;
  justify-content: space-between;
`

export const AnimatedInfo = styled(motion.div)`
  background: ${({ theme }) => theme.colors.elements.bg};
  display: flex;
  flex-flow: column wrap;
  font-size: 10px;
  transition: ${({ theme: { transition } }) => transition.mainTransition};
  width: 100%;
  p {
    display: inline-block;
    padding: 0.125em;
    &:nth-child(2) {
      background: ${({ theme }) => theme.colors.illustrations.tertiary};
      box-shadow: ${({ theme }) => theme.shadow.elevations[2]};
      @media ${above.mobileL} {
        width: 12em;
      }
    }
  }
  @media ${below.mobileS} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    width: 100%;
  }
`

export const Ingredients = styled.ul`
  align-items: center;

  display: flex;
  height: 100%;
  justify-content: space-evenly;
  padding: 0;
  li {
    font-size: 1.8em;
    margin: 0 0.3em;
    position: relative;
    transition: ${({ theme: { transition } }) => transition.mainTransition};
    &:after {
      background: ${({ theme: { colors } }) => colors.illustrations.highlight};
      bottom: 0;
      content: "";
      height: 3px;
      left: 0;
      position: absolute;
      transition: ${({ theme: { transition } }) => transition.mainTransition};
      width: 0;
    }
    &:hover {
      text-shadow: 1px 1px 1px #333;
      &:after {
        width: 100%;
      }
    }
  }
  @media ${below.mobileS} {
    width: 100%;
    font-size: 0.75em;
    li {
      margin: 0 0.15em;
    }
  }
`
