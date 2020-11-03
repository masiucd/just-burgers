import * as React from "react"
import { graphql, PageProps } from "gatsby"
import { AppTitle } from "../components/elements"
import { Layout } from "../components/layout"
import { Seo } from "../components/Seo"
import { css } from "styled-components"
import { Column, Strong, TwoColumnGrid } from "../styled"
import { ChefsGallery } from "../components/chefs"

interface HomePageQuery {
  siteData: { siteMetadata: SiteMetadata }
}

const HomePage: React.FC<PageProps<HomePageQuery, {}>> = ({ data }) => {
  const {
    siteData: { siteMetadata },
  } = data
  return (
    <>
      <Seo title="home" />
      <Layout>
        <AppTitle
          className="Home-page-title"
          style={cx}
          title={
            siteMetadata.description ? siteMetadata.description : "Just burgers"
          }
          subTitle={siteMetadata.openHours ? siteMetadata.openHours : ""}
        />
        <TwoColumnGrid>
          <Column padding=".5rem">
            <Strong>The masters</Strong>
            <ChefsGallery />
          </Column>
          <Column padding=".5rem">
            <Strong>The burgers</Strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              dolorem consequatur nostrum accusamus temporibus voluptate
              sapiente, exercitationem, itaque, quibusdam blanditiis veritatis
              quidem reprehenderit atque necessitatibus autem quae possimus
              earum neque? lorem500 lorem500 lorem500 lorem500 lorem500
            </p>
          </Column>
        </TwoColumnGrid>
      </Layout>
    </>
  )
}
export const HOME_PAGE_QUERY = graphql`
  {
    siteData: site {
      siteMetadata {
        description
        openHours
      }
    }
    file(relativePath: { eq: "light-icon.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`

export default HomePage

const cx = css`
  text-align: center;
`
