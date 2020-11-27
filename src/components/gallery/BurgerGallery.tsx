import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ImageItem from "./ImageItem"
import { BurgersGrid } from "@styled/Wrappers"

export const BURGERS_GALLERY_QUERY = graphql`
  {
    burgers: allContentfulBurgers(
      limit: 6
      sort: { fields: image___createdAt }
    ) {
      edges {
        node {
          id
          name
          slug
          image {
            fluid(maxHeight: 500, maxWidth: 500, quality: 90) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const BurgersGallery = () => {
  const {
    burgers: { edges },
  } = useStaticQuery<BurgersQuery>(BURGERS_GALLERY_QUERY)

  return (
    <BurgersGrid data-testid="gallery-burgers-grid">
      {edges.map(({ node }) => (
        <ImageItem key={node.id} item={node} />
      ))}
    </BurgersGrid>
  )
}

export default BurgersGallery
