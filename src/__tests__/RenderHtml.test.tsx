import React from "react"
import { screen } from "@testing-library/react"
import { render } from "../../test-utils/render"
import { RenderHtml } from "@components/component-utils"

describe("<RenderHtml/>", () => {
  test("should renders correctly", () => {
    const dataTestId = "dataTestId"
    const text = `<h1 data-testid=${dataTestId} >Hello World</h1>`
    render(<RenderHtml dataTestId={dataTestId} text={text} />)
    expect(screen.getByTestId(dataTestId)).toBeInTheDocument()
    expect(screen.getByTestId(dataTestId)).toHaveTextContent(/hello world/i)
  })
})
