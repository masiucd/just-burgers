import React from "react"
import { render } from "../../../../test-utils/render"
import { screen } from "@testing-library/react"
import Side from "../Side"

describe("<Burger/>", () => {
  test("should renders correctly and dish is for vegetarians", () => {
    const side = {
      id: "id",
      title: "name",
      slug: "name",
      price: 21,
      vegetarian: true,
      image: {
        fluid: { src: "src" },
      },
      ingredients: {
        ingredients: ["one", "tow"],
      },
    }

    render(<Side side={side} />)

    screen.getByTestId("food-styled-side-item")
    const imageWrapper = screen.getByTestId("food-side-image-wrapper")
    const sideLink = screen.getByTestId("food-side-link")
    screen.getByTestId("food-ingredients-wrapper-side")

    expect(imageWrapper.firstChild).toHaveStyle({
      position: "relative",
      overflow: "hidden",
    })
    expect(imageWrapper.firstChild?.firstChild).toHaveStyle({
      width: "100%",
    })

    expect(sideLink).toHaveAttribute("href", `/side/${side.title}`)

    screen.getByText(side.ingredients.ingredients[0])
    screen.getByText(side.ingredients.ingredients[1])

    screen.debug()
  })
})
