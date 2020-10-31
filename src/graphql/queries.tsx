import { graphql } from "gatsby"

export const BG_QUERY = graphql`
  {
    file(relativePath: { eq: "bg.svg" }) {
      publicURL
    }
  }
`
