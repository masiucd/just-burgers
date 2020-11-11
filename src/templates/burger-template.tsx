import { Layout } from "@components/layout"
import { Seo } from "@components/Seo"
import { graphql, PageProps } from "gatsby"
import React from "react"
import GatsbyImage from "gatsby-image"
import styled from "styled-components"
import { above } from "@styled/mediaQuery"
interface BurgerDataProps {
  burger: Burger
}
interface PageContextProps {
  slug: string
}

const BurgerItem = styled.section`
  border: 2px solid red;
  border-radius: ${({ theme }) => theme.borderRadius};
  height: 100%;
  width: 100%;
`

const ImageWrapper = styled.div``
const BurgerBody = styled.div`
  background: ${({ theme }) => theme.colors.elements.bg};
  font-size: 10px;
  padding: 1em 3em;
  position: relative;
  p {
    font-size: 2em;
  }
  small {
    font-size: 1.8em;
    opacity: 0.7;
  }
  .name-price {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  .animated-info {
    border: 2px solid red;
    display: flex;
    flex-flow: column wrap;
    font-size: 10px;
    transition: ${({ theme: { transition } }) => transition.mainTransition};
    p {
      display: inline-block;
      padding: 0.125em;
      &:nth-child(2) {
        background: ${({ theme }) => theme.colors.illustrations.tertiary};
        box-shadow: ${({ theme }) => theme.shadow.elevations[2]};
        @media ${above.mobileL} {
          width: 20em;
        }
      }
    }
  }
  .ingredients {
    display: flex;
    justify-content: space-evenly;
    padding: 0;
    li {
      font-size: 1.6em;
      margin: 0 0.3em;
      position: relative;
      transition: ${({ theme: { transition } }) => transition.mainTransition};
      &:after {
        content: "";
        position: absolute;
        transition: ${({ theme: { transition } }) => transition.mainTransition};
        width: 0;
        height: 3px;
        background: ${({ theme: { colors } }) =>
          colors.illustrations.highlight};
        bottom: 0;
        left: 0;
      }
      &:hover {
        text-shadow: 1px 1px 1px #333;
        &:after {
          width: 100%;
        }
      }
    }
  }
`

const BurgerTemplate: React.FC<PageProps<
  BurgerDataProps,
  PageContextProps
>> = ({ data: { burger }, pageContext }) => {
  return (
    <>
      <Seo title="burger" />
      <Layout>
        <BurgerItem>
          <ImageWrapper>
            <GatsbyImage
              fluid={burger.image?.fluid}
              alt={`burger-${burger.slug}`}
            />
          </ImageWrapper>
          <BurgerBody>
            <div className="name-price">
              <p> {burger.name} </p>
              <small>{burger.price}$</small>
            </div>
            <div className="animated-info">
              <p> {burger.desc?.desc} </p>
              <p>
                {burger.vegetarian
                  ? "for the green lovers 🥗 "
                  : "for the meet lovers 🥩"}{" "}
              </p>
              <ul className="ingredients">
                {burger.ingredients?.ingredients.map(ingredient => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </BurgerBody>
        </BurgerItem>
      </Layout>
    </>
  )
}

export const BURGER_TEMPLATE_QUERY = graphql`
  query($slug: String!) {
    burger: contentfulBurgers(slug: { eq: $slug }) {
      id
      name
      price
      vegetarian
      slug
      desc {
        desc
      }
      ingredients {
        ingredients
      }
      image {
        fluid(quality: 100, maxWidth: 900, maxHeight: 650) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default BurgerTemplate
// maxHeight: 500, maxWidth: 500, quality: 90

// # fixed(quality: 100, width: 600, height: 500) {
//   #   ...GatsbyContentfulFixed
//   # }
