import React from "react"
import { render } from "../../../../test-utils/render"
import { fireEvent, screen } from "@testing-library/react"
import MenuAndOrder from "../MenuAndOrder"

describe("<MenuAndOrders/>", () => {
  test("should renders correctly and no dishes has been selected", () => {
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

    render(<MenuAndOrder burgers={burgers} sides={sides} />)

    screen.getAllByTestId("order-page-add-to-cart-button")
    screen.getByTestId("order-page-order-list-column")
    screen.getByTestId("order-page-dishes-list")

    expect(
      screen.getByTestId("order-page-no-orders-message")
    ).toBeInTheDocument()
  })
  test("When a dish has been selected ", () => {
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

    render(<MenuAndOrder burgers={burgers} sides={sides} />)

    const addToCartButton = screen.getAllByTestId(
      "order-page-add-to-cart-button"
    )
    screen.getByTestId("order-page-order-list-column")
    expect(screen.queryByTestId("order-page-OrderItem")).not.toBeInTheDocument()

    for (let btn of addToCartButton) {
      fireEvent.click(btn)
    }
    expect(screen.getByTestId("order-page-OrderItem")).toBeInTheDocument()
    expect(screen.getByTestId("order-page-OrderItem")).toHaveStyle({
      opacity: 0,
      transform: "translateX(100%) translateZ(0)",
    })
  })
})
