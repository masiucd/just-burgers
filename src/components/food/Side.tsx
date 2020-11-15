import React from "react"
import styled from "styled-components"
import GatsbyImage from "gatsby-image"
import { Link } from "gatsby"

interface SideProps {
  side: Side
}

const StyledSideItem = styled.div`
  box-shadow: ${({ theme }) => theme.shadow.elevations[3]};
  width: 100%;

  .ingredients {
    display: flex;
    flex-flow: column wrap;
    font-size: 10px;
    padding: 1em;
    p {
      font-size: 2em;
    }
    .ingredients-wrapper {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-evenly;
      span {
        border-bottom: 2px solid #333;
        font-size: 1.45em;
      }
    }
  }
  .img-wrapper-burger {
    position: relative;
    &:after {
      background: rgba(0, 0, 0, 0.25);
      content: "";
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }
`

interface BurgerItemHeadProps {
  isVeggie?: boolean
}
const SideItemHead = styled.div<BurgerItemHeadProps>`
  border-bottom: 2px solid ${({ theme }) => theme.colors.illustrations.stroke};
  display: flex;
  flex-flow: row wrap;
  font-size: 10px;
  justify-content: space-between;
  p {
    font-size: 1.8em;
    &:first-child {
      background: ${({ theme }) => theme.colors.illustrations.highlight};
      box-shadow: ${({ theme }) => theme.shadow.elevations[3]};
      padding: 0.1em;
    }
    &:last-child {
      background: ${({ theme, isVeggie }) =>
        isVeggie
          ? theme.colors.illustrations.highlight
          : theme.colors.illustrations.secondary};
      padding: 0.2em;
    }
  }
`

const Side: React.FC<SideProps> = ({ side }) => {
  return (
    <StyledSideItem>
      <div className="img-wrapper-burger">
        <GatsbyImage fluid={side.image.fluid} alt={`side-${side.slug} `} />
      </div>
      <Link to={`/side/${side.slug}`}>
        <SideItemHead isVeggie={side.vegetarian}>
          <p>{side.title}</p>
          <p>{side.price}$</p>
          <p> {side.vegetarian ? "🥗" : "🥩"}</p>
        </SideItemHead>
      </Link>

      <div className="ingredients">
        <p>Main ingredients</p>
        <div className="ingredients-wrapper">
          {side.ingredients?.ingredients.map(ingredient => (
            <span key={ingredient}>{ingredient}</span>
          ))}
        </div>
      </div>
    </StyledSideItem>
  )
}
export default Side
