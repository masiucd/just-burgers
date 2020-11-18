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

interface LayoutQuery {
  site: {
    siteMetadata: SiteMetadata
  }

  stripes: {
    publicURL: string
  }
  burgerBg: {
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
  vegetarian?: boolean
  desc?: {
    desc: string
  }
  image?: {
    fluid: MapObject<any>
    fixed: MapObject<any>
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

interface TextKeyMap {
  [key: string]: string
}

type TextKey<T> = {
  readonly [key in keyof T]: T[key]
}

interface Content {
  content: { value: string }[]
}

interface Side {
  id: string
  title: string
  slug: string
  price: number
  vegetarian: boolean
  desc_: {
    content: Content[]
  }
  ingredients?: {
    ingredients: string[]
  }
  image: {
    fluid: MapObject<any>
  }
}
