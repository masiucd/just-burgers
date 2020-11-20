import { above, below } from "@styled/media-query"
import { motion } from "framer-motion"
import styled from "styled-components"

export const ItemWrapper = styled.section`
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

export const ImageWrapper = styled.div`
  box-shadow: 0 0 3px #333;
  height: 100%;
  position: relative;
  transition: 200ms ease-in-out box-shadow;
  width: 100%;
  z-index: 2;
  &:hover {
    box-shadow: 0 0 12px #333;
  }
  &:after {
    background: rgba(0, 0, 0, 0.27);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`

export const ItemBody = styled(motion.div)`
  background: ${({ theme }) => theme.colors.elements.bg};
  display: flex;
  flex-flow: column wrap;
  font-size: 10px;
  padding: 0;
  position: relative;
  p {
    font-size: 2em;
  }
  @media ${above.tabletL} {
    flex-flow: row wrap;
    padding: 1em 3em;
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

  small {
    font-size: 1.8em;
    opacity: 0.7;
    @media ${above.tablet} {
      position: absolute;
      top: 3rem;
      right: 2rem;
    }
  }
  @media ${above.tablet} {
    p {
      font-size: 3em;
      border-bottom: 2px solid
        ${({ theme }) => theme.colors.illustrations.stroke};
    }
  }
`

interface AnimatedInfoProps {
  vegetarian?: boolean
}
export const AnimatedInfo = styled(motion.div)<AnimatedInfoProps>`
  background: ${({ theme }) => theme.colors.elements.bg};
  display: flex;
  flex-flow: column wrap;
  font-size: 10px;
  width: 100%;
  p {
    display: inline-block;
    padding: 0.125em;
    width: 10em;
    &:nth-child(2) {
      background: ${({ theme, vegetarian }) =>
        vegetarian
          ? theme.colors.illustrations.tertiary
          : theme.colors.illustrations.secondary};

      box-shadow: ${({ theme }) => theme.shadow.elevations[2]};
      @media ${above.mobileL} {
        width: 12em;
      }
      @media ${below.mobileS} {
        font-size: 1.5em;
        margin-right: auto;
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

export const Ingredients = styled(motion.ul)`
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
        @media ${above.tabletL} {
          width: 40%;
        }
      }
    }
  }
  @media ${above.tabletL} {
    li {
      flex: 1 1 100%;
      width: 5em;
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

export const ItemTitle = styled(motion.div)`
  cursor: pointer;
  font-size: 10px;
  left: 50%;
  padding: 5em 2em;
  position: absolute;
  top: 0;
  transform: translate(-50%, -50%);
  transition: ${({ theme: { transition } }) => transition.quickTransition};
  z-index: 3;
  h4 {
    box-shadow: 2px 2px 0 0 ${({ theme }) => theme.colors.illustrations.main};
    color: ${({ theme }) => theme.colors.illustrations.main};
    font-size: 2.2em;
    transition: ${({ theme: { transition } }) => transition.quickTransition};
    @media ${above.tablet} {
      font-size: 6em;
    }
    &:hover {
      box-shadow: 2px 2px 0 0
        ${({ theme }) => theme.colors.illustrations.secondary};
      color: ${({ theme }) => theme.colors.illustrations.secondary};
    }
  }
  &:hover {
    font-size: 10.2px;
    top: 1.5%;
  }

  @media ${above.mobileL} {
    top: 20%;
    h4 {
      font-size: 4em;
    }
    &:hover {
      top: 21.5%;
    }
  }
`
