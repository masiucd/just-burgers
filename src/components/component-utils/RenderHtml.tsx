import React from "react"

interface RenderHtmlProps {
  className?: string
  text: string
  dataTestId?: string
}

const RenderHtml: React.FC<RenderHtmlProps> = ({
  text,
  className = "render-html",
  dataTestId = "render-html-component",
}) => {
  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: text }} />
  )
}
export default RenderHtml
