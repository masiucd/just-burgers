import React from "react"
import { render, screen } from "@testing-library/react"
import { css } from "styled-components"
import { AppTitle } from "@components/elements"
describe("<AppTitle/>", () => {
  test("should renders correctly with the given props ", () => {
    const props = {
      title: "title",
      subTitle: "subtitle",
      desc: "desc",
      className: "className",
    }

    const style = css`
      div {
        background: red;
      }
    `
    render(
      <AppTitle
        title={props.title}
        className={props.className}
        desc={props.desc}
        style={style}
      />
    )
    screen.debug()
  })
})
