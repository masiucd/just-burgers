import * as React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

interface SeoProps {
  title: string
  description: string
  image?: string
  article: string
}

export const Seo: React.FC<SeoProps> = ({
  title,
  description,
  image = "",
  article,
}) => {
  const { pathname } = useLocation()
  // const { site } = useStaticQuery(query)
  // const seo = {
  //   title: title || defaultTitle,
  //   description: description || defaultDescription,
  //   image: `${siteUrl}${image || defaultImage}`,
  //   url: `${siteUrl}${pathname}`,
  // }
  return (
    <Helmet>
      <h1>hello</h1>
    </Helmet>
  )
}
