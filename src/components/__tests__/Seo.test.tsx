import React from "react"
import { render } from "../../../test-utils/render"
import { Seo } from "@components/seo"
import * as Gatsby from "gatsby"
import * as reachRouter from "@reach/router"

beforeEach(() => {
  jest.clearAllMocks()
})

jest
  .spyOn(reachRouter, "useLocation")
  .mockImplementation(() => ({ pathname: "/" }))

// const useLocation = jest
//   .spyOn(reachRouter, "useLocation")
//   .mockReturnValue({ pathname: "/menu" })

const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery")
useStaticQuery.mockImplementation(() => ({
  SEO: {
    siteMetadata: {
      title: "title",
      description: "description",
      twitterUsername: " description",
      titleTemplate: "titleTemplate",
      siteUrl: "siteUrl",
      image: "image",
    },
  },
}))

describe("<Seo/>", () => {
  test("should renders correctly", () => {
    const title = "title"
    const desc = "desc"
    const image = "image"
    render(<Seo title={title} description={desc} image={image} />)
  })
})
