import React from "react"
import styled from "styled-components"
import GatsbyImage from "gatsby-image"
import { above, below } from "@styled/media-query"
import { Button } from "@styled/Buttons"
type DishType = Burger | Side
interface DishProps {
  dish: DishType
}

const DishStyles = styled.li`
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadow.elevations[4]};
  font-size: 10px;
  margin: 0.65em 0;

  width: 100%;
  p {
    font-size: 2em;
  }
  @media ${below.mobileS} {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    p {
      text-align: center;
    }
  }

  @media ${above.mobileL} {
    display: flex;
    p {
      font-size: 1.5em;
    }
    .dish-body {
      display: flex;
      flex-flow: column wrap;
      flex: 1;
      justify-content: center;
      align-items: center;
    }
  }
`
const Image = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius};
  position: relative;
  @media ${above.mobileL} {
    flex: 1;
  }
  &:after {
    background: rgba(0, 0, 0, 0.13);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`

const Dish: React.FC<DishProps> = ({ dish }) => {
  return (
    <DishStyles data-testid="order-page-dish-item">
      <Image>
        <GatsbyImage fluid={dish.image?.fluid} alt={`dish-${dish.slug}`} />
      </Image>
      <div className="dish-body">
        <p> {"name" in dish ? dish.name : dish.title} </p>
        <p> {dish.price}$ </p>
        <Button onClick={() => console.log("add to cart")}>
          {"name" in dish
            ? dish.name.slice(0, 8) + "..."
            : dish.title.slice(0, 8) + "..."}
        </Button>
      </div>
    </DishStyles>
  )
}
export default Dish
