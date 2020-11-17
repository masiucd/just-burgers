import React from "react"
import styled from "styled-components"
import GatsbyImage from "gatsby-image"
import { Link } from "gatsby"

interface BurgerProps {
  burger: Burger
}

const BurgerItem = styled.div`
  box-shadow: ${({ theme }) => theme.shadow.elevations[3]};
  transition: ${({ theme }) => theme.transition.quickTransition};

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
  width: 100%;
  &:hover {
    box-shadow: ${props => props.theme.shadow.elevations[4]};
    transform: rotate(1deg);
  }
`

interface BurgerItemHeadProps {
  isVeggie?: boolean
}

const BurgerItemHead = styled.div<BurgerItemHeadProps>`
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

const Burger: React.FC<BurgerProps> = ({ burger }) => {
  return (
    <BurgerItem>
      <div className="img-wrapper-burger">
        <GatsbyImage fluid={burger.image.fluid} alt={`burger-${burger.slug}`} />
      </div>
      <Link to={`/burger/${burger.slug}`}>
        <BurgerItemHead isVeggie={burger.vegetarian}>
          <p>{burger.name}</p>
          <p>{burger.price}$</p>
          <p> {burger.vegetarian ? "🥗" : "🥩"}</p>
        </BurgerItemHead>
      </Link>

      <div className="ingredients">
        <p>Main ingredients</p>
        <div className="ingredients-wrapper">
          {burger.ingredients?.ingredients.map(ingredient => (
            <span key={ingredient}>{ingredient}</span>
          ))}
        </div>
      </div>
    </BurgerItem>
  )
}
export default Burger
