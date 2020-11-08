import React from "react"
import { Column, Strong, TwoColumnGrid } from "../../styled"
import BurgersGallery from "./BurgersGallery"
import ChefsGallery from "./ChefsGallery"
import styled from "styled-components"
import useTextKey from "../../hooks/useTextKey"
import { RenderHtml } from "../componentUtils"

const GalleryWrapper = styled.div``
const Gallery = () => {
  const { t } = useTextKey()

  return (
    <GalleryWrapper>
      <TwoColumnGrid>
        <Column padding=".5rem">
          <Strong>The masters</Strong>
          <RenderHtml text={t("mastersCapture")} />
          <ChefsGallery />
        </Column>
        <Column padding=".5rem">
          <Strong>The burgers</Strong>
          <RenderHtml text={t("burgersCapture")} />
          <BurgersGallery />
        </Column>
      </TwoColumnGrid>
    </GalleryWrapper>
  )
}

export default Gallery
