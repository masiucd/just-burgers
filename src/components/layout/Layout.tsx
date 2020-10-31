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

const Main = styled.main`
  margin: 0 auto;
  max-width: ${props => props.theme.size.maxWidth};
  border: 5px solid ${props => props.theme.colors.elements.bg};
  border-radius: ${({ theme }) => theme.borderRadius};
  position: relative;
  padding: 1em;
  height: 100%;
  background: ${props => props.theme.colors.elements.bg};
  &:after {
    content: "";
    border: 5px dashed ${props => props.theme.colors.illustrations.tertiary};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
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
  }
`

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  const data = useStaticQuery<BgQuery>(LAYOUT_QUERY)
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <Typography />
      <Page bg={data.file.publicURL}>
        <Main>
          <Header className="main-header" />
          {children}
        </Main>
      </Page>
    </ThemeProvider>
  )
}

export default Layout
