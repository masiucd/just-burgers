import { Layout } from "@components/layout"
import { Seo } from "@components/Seo"
import { graphql, PageProps } from "gatsby"
import React from "react"

interface ChefTemplateProps {}

const ChefTemplate: React.FC<PageProps<ChefTemplateProps>> = ({ data }) => {
  console.log(data)
  return (
    <>
      <Seo title="chef- and the name" description="chef bobby and the story" />
      <Layout>
        <h1>ChefsPage</h1>
        <p>hello</p>
      </Layout>
    </>
  )
}

export const CHEFS_TEMPLATE_QUERY = graphql`
  query($name: String!) {
    chef: contentfulChefs(name: { eq: $name }) {
      id
      name
      about
      image {
        fluid(quality: 100, maxWidth: 900, maxHeight: 650) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default ChefTemplate
