import * as React from "react"
import { Layout } from "@components/layout"
import { Seo } from "@components/Seo"
import { graphql, PageProps } from "gatsby"
import { Chefs } from "@components/chefs"

interface ChefsPageData {
  chefs: {
    edges: NodeType<Chef>[]
  }
}

const ChefsPage: React.FC<PageProps<ChefsPageData>> = ({ data }) => {
  const { edges: chefsList } = data.chefs

  return (
    <>
      <Seo
        title="chefs"
        description="out masters that creates the top burgers"
      />
      <Layout>
        <h1>ChefsPage</h1>
        <Chefs className="chefs-chefs-list" chefsList={chefsList} />
      </Layout>
    </>
  )
}

export const CHEFS_QUERY = graphql`
  {
    chefs: allContentfulChefs {
      edges {
        node {
          id
          name
          about
          image {
<<<<<<< HEAD
            fluid(maxWidth: 1000, maxHeight: 1000, quality: 90) {
=======
            fluid(maxWidth: 1200, maxHeight: 1200, quality: 90) {
>>>>>>> working on chef page
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ChefsPage
