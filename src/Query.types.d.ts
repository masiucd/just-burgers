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
  openHours: string
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

interface MapObject<T> {
  [key: string]: T
}

interface Chef {
  node: {
    name: string
    about: string
    image: {
      fluid: {
        src: string
      }
    }
  }
}

interface ChefsQuery {
  chefs: {
    edges: Chef[]
  }
}
