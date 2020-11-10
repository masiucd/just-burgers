import { Layout } from "@components/layout"
import { Seo } from "@components/Seo"
import React from "react"

interface BurgerTemplateProps {}

const BurgerTemplate: React.FC<BurgerTemplateProps> = ({}) => {
  return (
    <>
      <Seo title="burger" />
      <Layout>
        <h1>Hello Burger BurgerTemplate </h1>
      </Layout>
    </>
  )
}
export default BurgerTemplate
