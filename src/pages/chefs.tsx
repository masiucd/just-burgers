import * as React from "react"
import { Layout } from "@components/layout"
import { Seo } from "@components/Seo"
import { graphql, PageProps } from "gatsby"
import { Chefs } from "@components/chefs"
import { AppTitle } from "@components/elements"
import useTextKey from "@hooks/useTextKey"

interface ChefsPageData {
  chefs: {
    edges: NodeType<Chef>[]
  }
}

const ChefsPage: React.FC<PageProps<ChefsPageData>> = ({ data }) => {
  const { edges: chefsList } = data.chefs
  const { t } = useTextKey()
  return (
    <>
      <Seo
        title="chefs"
        description="out masters that creates the top burgers"
      />
      <Layout>
        <AppTitle className="chefs-title-page" title={t("chefsPageTitle")} />
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
            fluid(maxWidth: 1000, maxHeight: 1000, quality: 90) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ChefsPage
