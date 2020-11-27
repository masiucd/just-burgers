import { Layout } from "@components/layout"
import { Seo } from "@components/Seo"
import { graphql, PageProps } from "gatsby"
import { Chef as ChefComponent } from "@components/chefs"
import React from "react"
import useTextKey from "@hooks/useTextKey"
import { AppTitle } from "@components/elements"

interface ChefTemplateProps {
  chef: Chef
}

const ChefTemplate: React.FC<PageProps<ChefTemplateProps>> = ({
  data: { chef },
}) => {
  const { t } = useTextKey()
  return (
    <>
      <Seo title="chef- and the name" description="chef bobby and the story" />
      <Layout>
        <AppTitle
          className={`chef-${chef.name}-title`}
          title={t("singleChefPageTemplate") + " " + chef.name}
          subTitle="This is my story"
        />
        <ChefComponent chef={chef} className={`chef-${chef.name}`} />
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
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`

export default ChefTemplate
