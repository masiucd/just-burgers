import { graphql, useStaticQuery } from "gatsby"
import React from "react"

interface ChefsGalleryProps {}

const CHEFS_QUERY = graphql`
  {
    chefs: allContentfulChefs {
      edges {
        node {
          name
          about
          image {
            fluid(maxHeight: 10, maxWidth: 10, quality: 10) {
              src
            }
          }
        }
      }
    }
  }
`

const ChefsGallery: React.FC<ChefsGalleryProps> = ({}) => {
  const data = useStaticQuery<ChefsQuery>(CHEFS_QUERY)
  console.log(data.chefs.edges[0].node.name)
  return <h1>chefs</h1>
}
export default ChefsGallery
