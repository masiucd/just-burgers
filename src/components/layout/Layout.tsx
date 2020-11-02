import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { mainTheme, GlobalStyles, Typography } from "../../styled/theme"
import { graphql, useStaticQuery } from "gatsby"
import Header from "./Header"

interface LayoutProps {
  title?: string
}

interface PageProps {
  bg: string
}
const Page = styled.div<PageProps>`
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${props => `url(${props.bg})`};
`

interface MainProps {
  stripes: string
}
const Main = styled.main<MainProps>`
  background: white ${props => `url(${props.stripes})`};
  background-size: 50em;
  margin: 0 auto;
  max-width: ${props => props.theme.size.maxWidthPage};
  border-radius: ${({ theme }) => theme.borderRadius};
  position: relative;
  padding: 1em;
  height: 100%;
  box-shadow: ${({ theme }) => theme.shadow.elevations[3]};
  border: 2px solid ${({ theme }) => theme.colors.illustrations.main};
`

const App = styled.div`
  background: ${({ theme }) => theme.colors.elements.bg};
  width: 100%;
  height: 100%;
  padding: 1em;
`

const LAYOUT_QUERY = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
    file(relativePath: { eq: "bg-img.svg" }) {
      publicURL
    }
    stripes: file(relativePath: { eq: "stripes.svg" }) {
      publicURL
    }
  }
`

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  const data = useStaticQuery<BgQuery>(LAYOUT_QUERY)

  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <Typography />
      <Page bg={data.file.publicURL}>
        <Main stripes={data.stripes.publicURL}>
          <App>
            <Header className="main-header" />
            {children}
          </App>
        </Main>
      </Page>
    </ThemeProvider>
  )
}

export default Layout
