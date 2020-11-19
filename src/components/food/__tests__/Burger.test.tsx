import React from "react"
import { render, screen } from "../../../../test-utils/render"
import Burger from "../burger"

describe("<Burger/>", () => {
  test("should renders correctly and dish is for vegetarians", () => {
    const burger = {
      id: "id",
      name: "name",
      price: 21,
      slug: "name",
      vegetarian: true,
      desc: {
        desc: "desc",
      },
    }

    render(<Burger burger={burger} />)

    screen.getByTestId("food-img-wrapper-burger")
    screen.getByTestId("food-burger-item-head")

    expect(screen.getByTestId("food-burger-item-head-name")).toHaveTextContent(
      burger.name
    )

    expect(screen.getByTestId("food-burger-item-head-price")).toHaveTextContent(
      "21$"
    )

    expect(screen.getByTestId("food-burger-item-vegetarian")).toHaveTextContent(
      "🥗"
    )
  })
  test("when dish is NOT vegetarian", () => {
    const burger = {
      id: "id",
      name: "name",
      price: 21,
      slug: "name",
      vegetarian: false,
      desc: {
        desc: "desc",
      },
    }

    render(<Burger burger={burger} />)
    expect(screen.getByTestId("food-burger-item-vegetarian")).toHaveTextContent(
      "🥩"
    )
  })
})
