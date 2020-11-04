import React from "react"
import { Column, Strong, TwoColumnGrid } from "../../styled"
import BurgersGallery from "./BurgersGallery"
import ChefsGallery from "./ChefsGallery"
import styled from "styled-components"

const GalleryWrapper = styled.div``
const Gallery = () => {
  return (
    <GalleryWrapper>
      <TwoColumnGrid>
        <Column padding=".5rem">
          <Strong>The masters</Strong>
          <p>
            Our famous chefs that putting all the love into the Burgers that
            make a huge difference compared to a regular burger. Some say, the
            best team in the world, they are called the Vipers!
          </p>
          <ChefsGallery />
        </Column>
        <Column padding=".5rem">
          <Strong>The burgers</Strong>
          <p>
            And this is the art our top chefs are producing, Burgers with high
            quality and a lot of love. All from vegetarian lovers to meat
            lovers, pick your favorite ore to make your custom order!
          </p>
          <BurgersGallery />
        </Column>
      </TwoColumnGrid>
    </GalleryWrapper>
  )
}

export default Gallery
