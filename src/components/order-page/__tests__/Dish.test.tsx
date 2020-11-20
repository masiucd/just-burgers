import React from "react"
import { render } from "../../../../test-utils/render"
import { screen } from "@testing-library/react"
import Dish from "../Dish"

describe("<Dish/>", () => {
  test("when renders burger dish ", () => {
    const burger = {
      id: "id",
      name: "name",
      slug: "name",
      price: 21,
      vegetarian: true,
      image: {
        fluid: { src: "src" },
        fixed: { src: "src" },
      },
      ingredients: {
        ingredients: ["one", "tow"],
      },
    }

    render(<Dish dish={burger} />)

    screen.getByTestId("order-page-dish-item")
    screen.getByText(burger.name)
  })
  test("when renders side dish ", () => {
    const side = {
      id: "id",
      title: "name",
      slug: "name",
      price: 21,
      vegetarian: true,
      image: {
        fluid: { src: "src" },
        fixed: { src: "src" },
      },
      ingredients: {
        ingredients: ["one", "tow"],
      },
    }

    render(<Dish dish={side} />)

    screen.getByTestId("order-page-dish-item")
    screen.getByText(side.title)
  })
})
