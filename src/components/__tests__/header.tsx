import * as React from "react"
import * as renderer from "react-test-renderer"

import Header from "../header"

describe("Header", () => {
  test("renders correctly", () => {
    const tree = renderer.create(<Header siteTitle="Default Starter" />)

    // expect(tree).toMatchSnapshot()
  })
})
