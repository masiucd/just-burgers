import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import ImageItem from "./ImageItem"

interface BurgersGalleryProps {}

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

const BurgersGrid = styled.section`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
`

const BurgersGallery: React.FC<BurgersGalleryProps> = ({}) => {
  const {
    burgers: { edges },
  } = useStaticQuery<BurgersQuery>(BURGERS_GALLERY_QUERY)

  return (
    <BurgersGrid>
      {edges.map(({ node }) => (
        <ImageItem key={node.id} item={node} />
      ))}
    </BurgersGrid>
  )
}

export default BurgersGallery
