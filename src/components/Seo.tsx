import * as React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

interface SeoProps {
  title?: string
  description?: string
  image?: string
}

const SEO_QUERY = graphql`
  {
    SEO: site {
      siteMetadata {
        title
        description
        twitterUsername
        titleTemplate
        siteUrl
        image
      }
    }
  }
`

export const Seo: React.FC<SeoProps> = ({ title, description, image }) => {
  const {
    SEO: { siteMetadata },
  } = useStaticQuery<SeoQuery>(SEO_QUERY)

  const { pathname } = useLocation()

  const seo = {
    title: title || siteMetadata.title,
    description: description || siteMetadata.description,
    image: `${siteMetadata.siteUrl}${image || siteMetadata.image}`,
    url: `${siteMetadata.siteUrl}${pathname}`,
  }
  return (
    <Helmet title={seo.title} titleTemplate={siteMetadata.titleTemplate}>
      <html lang="en" />
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content={seo.description} />

      <meta name="image" content={seo.image} />
      <meta property="og:description" content={seo.description} />

      <meta property="og:image" content={seo.image || "/logo.svg"} />
      <meta property="og:title" content={seo.title} key="ogtitle" />
      <meta property="og:site_name" content={seo.title} key="ogsitename" />
      <meta property="og:description" content={seo.description} key="ogdesc" />

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:creator" content={siteMetadata.twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  )
}
