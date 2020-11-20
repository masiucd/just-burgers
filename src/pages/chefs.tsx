import * as React from "react"
import { Layout } from "@components/layout"
import { Seo } from "@components/Seo"

const ChefsPage = () => {
  return (
    <>
      <Seo
        title="chefs"
        description="out masters that creates the top burgers"
      />
      <Layout>
        <h1>ChefsPage</h1>
      </Layout>
    </>
  )
}

export default ChefsPage
