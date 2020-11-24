import { Layout } from "@components/layout"
import { Seo } from "@components/Seo"
import React from "react"

interface ChefTemplate {}

const ChefTemplate: React.FC<ChefTemplate> = ({}) => {
  return (
    <>
      <Seo title="chef- and the name" description="chef bobby and the story" />
      <Layout>
        <h1>ChefsPage</h1>
      </Layout>
    </>
  )
}
export default ChefTemplate
