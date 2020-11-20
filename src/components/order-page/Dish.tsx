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
  border: 2px solid blue;
  font-size: 10px;
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
  border: 2px solid red;
  @media ${below.mobileS} {
    display: flex;
    justify-content: center;
  }
  @media ${above.mobileL} {
    flex: 1;
  }
`

const Dish: React.FC<DishProps> = ({ dish }) => {
  return (
    <DishStyles data-testid="order-page-dish-item">
      <Image>
        <GatsbyImage fixed={dish.image?.fixed} alt={`dish-${dish.slug}`} />
      </Image>
      <div className="dish-body">
        <p> {"name" in dish ? dish.name : dish.title} </p>
        <p> {dish.price}$ </p>
        <Button>
          {"name" in dish
            ? dish.name.slice(0, 8) + "..."
            : dish.title.slice(0, 8) + "..."}
        </Button>
      </div>
    </DishStyles>
  )
}
export default Dish
