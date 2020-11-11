import { Layout } from "@components/layout"
import { Seo } from "@components/Seo"
import { graphql, PageProps } from "gatsby"
import React from "react"
import GatsbyImage from "gatsby-image"

interface BurgerDataProps {
  burger: Burger
}
interface PageContextProps {}

const BurgerTemplate: React.FC<PageProps<
  BurgerDataProps,
  PageContextProps
>> = ({ data, pageContext }) => {
  console.log(data.burger.desc?.desc)
  return (
    <>
      <Seo title="burger" />
      <Layout>
        <h1>Hello Burger BurgerTemplate </h1>
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
      desc {
        desc
      }
      ingredients {
        ingredients
      }
      image {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`

export default BurgerTemplate
// maxHeight: 500, maxWidth: 500, quality: 90
