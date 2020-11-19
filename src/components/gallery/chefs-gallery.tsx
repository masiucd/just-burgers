import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import ImageItem from "./ImageItem"

const CHEFS_QUERY = graphql`
  {
    chefs: allContentfulChefs {
      edges {
        node {
          id
          name
          about
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

const ChefsGrid = styled.section`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
`

const ChefsGallery = () => {
  const data = useStaticQuery<ChefsQuery>(CHEFS_QUERY)
  const { edges } = data.chefs

  return (
    <ChefsGrid>
      {edges.map(({ node }) => (
        <ImageItem key={node.id} item={node} />
      ))}
    </ChefsGrid>
  )
}
export default ChefsGallery
