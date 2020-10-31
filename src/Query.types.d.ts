interface SiteMetadata {
  title: string
  description?: string
  twitterUsername?: string
  titleTemplate?: string
  siteUrl?: string
  image?: string
}

interface BgQuery {
  site: {
    siteMetadata: SiteMetadata
  }
  file: {
    publicURL: string
  }
}

interface SeoQuery {
  SEO: { siteMetadata: SiteMetadata }
}
