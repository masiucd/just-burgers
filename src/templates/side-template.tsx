import React from "react"
import { Seo } from "@components/Seo"
import { Layout } from "@components/layout"
import { graphql, PageProps } from "gatsby"
import Item from "@components/item-template/Item"

interface SideDataProps {
  side: Side
}

const SideTemplate: React.FC<PageProps<SideDataProps, {}>> = ({
  data: { side },
}) => {
  return (
    <>
      <Seo title={`side-${side.slug}`} />
      <Layout>
        <Item item={side} />
      </Layout>
    </>
  )
}

export const SIDE_QUERY = graphql`
  query($slug: String!) {
    side: contentfulSides(slug: { eq: $slug }) {
      id
      title
      price
      vegetarian
      slug
      ingredients {
        ingredients
      }
      image {
        fluid(quality: 100, maxWidth: 900, maxHeight: 650) {
          ...GatsbyContentfulFluid
        }
      }
      desc_ {
        id
        content {
          content {
            value
          }
        }
      }
    }
  }
`

export default SideTemplate
