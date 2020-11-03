import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { mainTheme, GlobalStyles, Typography } from "../../styled/theme"
import { graphql, useStaticQuery } from "gatsby"
import Header from "./Header"
import { below } from "../../styled"

interface LayoutProps {
  title?: string
}

interface PageProps {
  bg: string
}
const Page = styled.div<PageProps>`
  align-items: center;
  background-image: ${props => `url(${props.bg})`};
  display: flex;
  justify-content: center;
  margin: 0 auto;
  min-height: 110vh;
`

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
  margin: 0 auto;
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
`

const LAYOUT_QUERY = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
    file(relativePath: { eq: "burger.svg" }) {
      publicURL
    }
    stripes: file(relativePath: { eq: "clouds.svg" }) {
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
