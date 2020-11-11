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

interface NodeType<T> {
  node: T
}
interface Chef {
  id: string
  name: string
  about: string
  image: {
    fluid: MapObject<any>
  }
}

interface Burger {
  id: string
  name: string
  price?: number
  slug?: string
  desc?: {
    desc: string
  }
  image: {
    fluid: MapObject<any>
  }
  ingredients?: {
    ingredients: string[]
  }
}

interface ChefsQuery {
  chefs: {
    edges: NodeType<Chef>[]
  }
}

interface BurgersQuery {
  burgers: {
    edges: NodeType<Burger>[]
  }
}

// type TextKeyType = "mastersCapture" | "burgersCapture"
interface TextKeyMap {
  mastersCapture: string
  burgersCapture: string
  ourBurgersDesc: string
}
type TextKey<T> = {
  readonly [key in keyof T]: T[key]
}

interface Side {
  id: string
  title: string
  price: number
  image: {
    fluid: MapObject<any>
  }
}
