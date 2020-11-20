import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { mainTheme, GlobalStyles, Typography } from "@styled/index"
import { graphql, useStaticQuery } from "gatsby"
import Header from "./Header"
import { below } from "@styled/media-query"
import Footer from "./Footer"

interface LayoutProps {
  title?: string
}

interface MainProps {
  stripes: string
}
const Main = styled.main<MainProps>`
  background: white ${props => `url(${props.stripes})`};
  background-size: 2em;
  border: 2px solid ${({ theme }) => theme.colors.illustrations.main};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadow.elevations[3]};
  height: 100%;
  margin: 5rem auto;
  max-width: ${props => props.theme.size.maxWidthPage};
  padding: 1em;
  position: relative;
  @media ${below.laptop} {
    margin-top: 8rem;
  }
`

const App = styled.div`
  background: ${({ theme }) => theme.colors.elements.bg};
  height: 100%;
  padding: 1em;
  width: 100%;
  margin: 0 auto;
`

const LAYOUT_QUERY = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }

    stripes: file(relativePath: { eq: "clouds.svg" }) {
      publicURL
    }
    burgerBg: file(relativePath: { eq: "burger.svg" }) {
      publicURL
    }
  }
`

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const data = useStaticQuery<LayoutQuery>(LAYOUT_QUERY)
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles bgImage={data.burgerBg.publicURL} />

      <Typography />

      <Main stripes={data.stripes.publicURL}>
        <App>
          <Header className="main-header" />
          {children}
          <Footer
            className="main-footer"
            title={data.site.siteMetadata.title || ""}
          />
        </App>
      </Main>
    </ThemeProvider>
  )
}

export default Layout
