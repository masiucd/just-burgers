import { above } from "@styled/media-query"
import React from "react"
import styled from "styled-components"

interface IngredientsProps {
  ingredients: string[]
  handleSelectIngredient: (ingredient: string) => void
}

const Wrapper = styled.div`
  h3 {
    background: ${props => props.theme.colors.elements.headline};
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.shadow.elevations[3]};
    color: ${props => props.theme.colors.illustrations.main};
    display: block;
    font-size: 1.5em;
    margin: 1em auto;
    text-align: center;
    width: 100%;
    @media ${above.mobileM} {
      width: 10em;
      font-size: 2em;
    }
  }
`

const IngredientsList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  font-size: 10px;
  margin: 0 auto;
  max-width: 700px;
`
const IngredientsStyledItem = styled.li`
  button {
    background: ${({ theme }) => theme.colors.elements.button};
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius};
    color: ${({ theme }) => theme.colors.elements.headline};
    cursor: pointer;
    font-size: 1.6em;
    margin-bottom: 1em;
    margin-left: 0.3em;
    padding: 0.4em;
    transition: ${({ theme }) => theme.transition.quickTransition};
    &:hover {
      background: ${({ theme }) => theme.colors.elements.headline};
      box-shadow: ${({ theme }) => theme.shadow.elevations[3]};
      color: ${({ theme }) => theme.colors.elements.bg};
    }
  }
`

const Ingredients: React.FC<IngredientsProps> = ({
  ingredients,
  handleSelectIngredient,
}) => {
  return (
    <Wrapper>
      <h3>Filter by ingredients</h3>
      <IngredientsList>
        <IngredientsStyledItem>
          <button onClick={() => handleSelectIngredient("")}>All</button>
        </IngredientsStyledItem>
        {ingredients.map(item => (
          <IngredientsStyledItem key={item}>
            <button onClick={() => handleSelectIngredient(item)}>{item}</button>
          </IngredientsStyledItem>
        ))}
      </IngredientsList>
    </Wrapper>
  )
}
export default Ingredients
