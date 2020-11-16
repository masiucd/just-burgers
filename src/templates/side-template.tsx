import React from "react"
import { Seo } from "@components/Seo"
import { Layout } from "@components/layout"
import { graphql, PageProps } from "gatsby"
import styled from "styled-components"
import { above } from "@styled/media-query"
import { ImageWrapper } from "@styled/burger-styles"
import GatsbyImage from "gatsby-image"

interface SideDataProps {
  side: Side
}

const StyledSideItem = styled.section`
  border-radius: ${({ theme }) => theme.borderRadius};
  height: 100%;
  position: relative;
  width: 100%;
  @media ${above.tablet} {
    min-width: 520px;
  }
  @media ${above.tabletL} {
    min-width: 700px;
  }
  @media ${above.laptop} {
    min-width: 900px;
  }
`

const SideTemplate: React.FC<PageProps<SideDataProps, {}>> = ({
  data: { side },
}) => {
  return (
    <>
      <Seo title="side" />
      <Layout>
        <StyledSideItem>
          <ImageWrapper>
            <GatsbyImage fluid={side.image?.fluid} alt={`side-${side.slug}`} />
          </ImageWrapper>
          <h1>{side.title}</h1>
        </StyledSideItem>
      </Layout>
    </>
  )
}

export const SIDE_QUERY = graphql`
  query($slug: String!) {
    side: contentfulSides(slug: { eq: $slug }) {
      id
      title
      price
      vegetarian
      slug
      ingredients {
        ingredients
      }
      image {
        fluid(quality: 100, maxWidth: 900, maxHeight: 650) {
          ...GatsbyContentfulFluid
        }
      }
      desc_ {
        id
        content {
          content {
            value
          }
        }
      }
    }
  }
`

export default SideTemplate
