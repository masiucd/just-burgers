import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { mainTheme, GlobalStyles } from "../../styled/theme"
import { graphql } from "gatsby"

interface LayoutProps {
  title?: string
}

const Page = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Main = styled.main`
  margin: 0 auto;
  max-width: ${props => props.theme.size.maxWidth};
  /* TODO: Delete */
  border: 5px solid ${props => props.theme.colors.elements.bg};
  border-radius: ${({ theme }) => theme.borderRadius};
  position: relative;
  padding: 1em;
  height: 100%;
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

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400&display=swap"
          rel="stylesheet"
        />
        {title}
      </title>
      <Page>
        <Main>{children}</Main>
      </Page>
    </ThemeProvider>
  )
}

export default Layout
