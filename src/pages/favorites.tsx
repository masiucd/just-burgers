import * as React from "react"
import { Layout } from "../components/layout"
import { Seo } from "@components/seo"

const FavoritePage = () => {
  return (
    <>
      <Seo
        title="favorite"
        description="what is your favorite burger? Pick and choose"
      />
      <Layout>
        <h3>FavoritePage</h3>
        <h4>Out blog page</h4>
      </Layout>
    </>
  )
}

export default FavoritePage
