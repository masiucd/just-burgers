import * as React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

interface SeoProps {
  title?: string
  description?: string
  image?: string
  article?: string
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

export const Seo: React.FC<SeoProps> = ({
  title,
  description,
  image = "",
  article,
}) => {
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
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      {siteMetadata.twitterUsername && (
        <meta name="twitter:creator" content={siteMetadata.twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  )
}
