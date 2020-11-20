import React from "react"
import { render } from "../../../../test-utils/render"
import { screen } from "@testing-library/react"
import Dishes from "../Dishes"

describe("<Dishes/>", () => {
  test("should renders correctly ", () => {
    const burgers = [
      {
        node: {
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
        },
      },
    ]
    const sides = [
      {
        node: {
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
        },
      },
    ]

    render(<Dishes burgers={burgers} sides={sides} />)

    screen.getByTestId("order-page-dishes-list")
    screen.getAllByTestId("order-page-dish-item")

    for (let burger of burgers) {
      expect(burger.node.id).toBe(burgers[0].node.id)
      expect(burger.node.name).toBe(burgers[0].node.name)
      expect(burger.node.slug).toBe(burgers[0].node.slug)
      expect(burger.node.price).toBe(burgers[0].node.price)
    }

    for (let side of sides) {
      expect(side.node.id).toBe(sides[0].node.id)
      expect(side.node.title).toBe(sides[0].node.title)
      expect(side.node.slug).toBe(sides[0].node.slug)
      expect(side.node.price).toBe(sides[0].node.price)
    }
  })
})
