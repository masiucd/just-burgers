import React from "react"
import { render } from "../../../../test-utils/render"
import { screen } from "@testing-library/react"
import OrderForm from "../OrderForm"

describe("<OrderForm/>", () => {
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
    const className = "className"
    render(<OrderForm className={className} burgers={burgers} sides={sides} />)

    const form = screen.getByTestId("order-page-order-form")
    expect(form.classList.contains(className))

    const nameFieldSet = screen.getByTestId("order-page-name-fieldset")
    expect(nameFieldSet.firstChild?.textContent).toBe("Name and email")

    screen.getByRole("textbox", { name: /name/i })
    screen.getByRole("textbox", { name: /email/i })

    screen.getByTestId("order-page-submit-button")

    screen.debug()
  })
})
