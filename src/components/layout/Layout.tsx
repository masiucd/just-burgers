import React, { ReactNode } from "react"
import styled, { ThemeProvider } from "styled-components"
import { mainTheme, GlobalStyles } from "../../styled/theme"

interface LayoutProps {
  title?: string
}

const Main = styled.main`
  margin: 0 auto;
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
      <Main>{children}</Main>
    </ThemeProvider>
  )
}

export default Layout
