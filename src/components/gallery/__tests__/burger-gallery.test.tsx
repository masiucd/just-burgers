import React from "react"
import { render, screen } from "../../../../test-utils/render"
import BurgersGallery from "../burger-gallery"
import * as Gatsby from "gatsby"

beforeEach(() => {
  jest.clearAllMocks()
})

const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery")
useStaticQuery.mockImplementation(() => ({
  burgers: {
    edges: [
      {
        node: {
          id: "id",
          name: "name",
          price: 99,
          slug: "slug",
          vegetarian: true,
          desc: { desc: "desc" },
          image: { fluid: { src: "src" } },
          ingredients: {
            ingredients: ["one", "two"],
          },
        },
      },
    ],
  },
}))

describe("<BurgerGallery/>", () => {
  test("should renders correctly", () => {
    render(<BurgersGallery />)

    screen.getByTestId("gallery-burgers-grid")
    screen.getByTestId("gallery-image-item")
    screen.getByTestId("gallery-image-item-gatsby-image")
  })
})
