import React from "react"
import { render } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import { mainTheme } from "@styled/index"
import "@testing-library/jest-dom"
import { CartProvider } from "../src/context/index"

const AllTheProviders: React.FC = ({ children }) => {
  return (
    <CartProvider>
      <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
    </CartProvider>
  )
}

const customRender = (ui: React.ReactElement, options: any = {}) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from "@testing-library/react"

// override render method
export { customRender as render }
