import React from "react"
import styled from "styled-components"
import GatsbyImage from "gatsby-image"

interface BurgersProps {
  burger: Burger
}

const BurgerItem = styled.div`
  box-shadow: ${({ theme }) => theme.shadow.elevations[3]};

  .body {
  }

  .ingredients {
    background: red;
    display: flex;
    flex-flow: column wrap;
  }
`

const Burgers: React.FC<BurgersProps> = ({ burger }) => {
  return (
    <BurgerItem>
      <GatsbyImage fluid={burger.image.fluid} alt={`burget-${burger.name}`} />
      <div className="body">
        <p>{burger.name}</p>
        <p>{burger.price}$</p>
      </div>
      <div className="ingredients">
        <p>Main ingredients</p>
        {burger.ingredients?.ingredients.map(x => (
          <span key={x}>{x}</span>
        ))}
      </div>
    </BurgerItem>
  )
}
export default Burgers
