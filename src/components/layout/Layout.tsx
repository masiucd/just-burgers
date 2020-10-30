import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"
import { mainTheme, GlobalStyles } from "../../styled/theme"

interface LayoutProps {
  title?: string
}

const Main = styled.main`
  margin: 0 auto;
`

const layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <Main>{children}</Main>
    </ThemeProvider>
  )
}

layout.propTypes = {}

export default styled(layout)``
