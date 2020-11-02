interface Navigation {
  name: string
  path: string
}
interface SiteMetadata {
  title?: string
  description?: string
  twitterUsername?: string
  titleTemplate?: string
  siteUrl?: string
  image?: string
  navigationLinks?: Navigation[]
}

interface BgQuery {
  site: {
    siteMetadata: SiteMetadata
  }
  file: {
    publicURL: string
  }
  stripes: {
    publicURL: string
  }
}

interface SeoQuery {
  SEO: { siteMetadata: SiteMetadata }
}

interface NavQuery {
  navData: { siteMetadata: SiteMetadata }
}
