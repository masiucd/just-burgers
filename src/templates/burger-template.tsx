import { Layout } from "@components/layout"
import { Seo } from "@components/Seo"
import { graphql, PageProps } from "gatsby"
import React from "react"

import Item from "@components/item-template/Item"
interface BurgerDataProps {
  burger: Burger
}
interface PageContextProps {
  slug: string
}

const BurgerTemplate: React.FC<PageProps<
  BurgerDataProps,
  PageContextProps
>> = ({ data: { burger }, pageContext }) => {
  return (
    <>
      <Seo title="burger" />
      <Layout>
        <Item item={burger} />
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
