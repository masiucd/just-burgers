import React from "react"
import { render } from "../../../../test-utils/render"
import ChefItem from "../chef-item"
import { fireEvent, screen } from "@testing-library/react"
import "@testing-library/dom"

describe("<ChefItem/>", () => {
  const chef = {
    id: "id",
    name: "name",
    about: "about",
    image: {
      fluid: { src: "src" },
    },
  }
  test("should renders correctly", async () => {
    render(<ChefItem chef={chef} />)

    const imageWrapper = await screen.findByTestId("gallery-chef-img-wrapper")
    expect(imageWrapper.firstChild).toHaveStyle({
      overflow: "hidden",
      position: "relative",
    })

    const image = document.querySelector("img[src=src]")
    expect(image?.getAttribute("src")).toBe(chef.image.fluid.src)
    expect(image).toHaveStyle({
      position: "absolute",
      top: "0px",
      left: "0px",
      width: "100%",
      height: "100%",
      "object-fit": "cover",
      "object-position": "center",
      opacity: 0,
      transition: "opacity 500ms",
    })

    // TODO: TEST when image will have another style
  })
})
