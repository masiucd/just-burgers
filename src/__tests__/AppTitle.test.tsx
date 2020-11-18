import React from "react"
import { screen } from "@testing-library/react"
import { css } from "styled-components"
import { AppTitle } from "@components/elements"
import { render } from "../../test-utils/render"

describe("<AppTitle/>", () => {
  test("should renders correctly with the given props ", () => {
    const props = {
      title: "title",
      subTitle: "subtitle",
      desc: "desc",
      className: "className",
    }

    const style = css`
      section {
        background: red;
      }
    `
    render(
      <AppTitle
        title={props.title}
        subTitle={props.subTitle}
        className={props.className}
        desc={props.desc}
        style={style}
      />
    )

    const titleElementWrapper = screen.getByTestId("main-app-title")

    expect(screen.getByText(props.title)).toBeInTheDocument()
    expect(screen.getByText(props.subTitle)).toBeInTheDocument()
    expect(screen.getByText(props.desc)).toBeInTheDocument()
    expect(titleElementWrapper).toBeInTheDocument()
    expect(titleElementWrapper).toHaveClass(props.className)
    expect(titleElementWrapper).toHaveStyle({ background: "red;" })
  })
})
