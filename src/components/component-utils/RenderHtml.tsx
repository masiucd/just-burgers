import React from "react"

interface RenderHtmlProps {
  className?: string
  text: string
}

const RenderHtml: React.FC<RenderHtmlProps> = ({
  text,
  className = "render-html",
}) => {
  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: text }} />
  )
}
export default RenderHtml
