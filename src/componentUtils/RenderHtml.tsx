import React from "react"

interface RenderHtmlProps {
  text: string
}

const RenderHtml: React.FC<RenderHtmlProps> = ({ text }) => {
  return <div dangerouslySetInnerHTML={{ __html: text }} />
}
export default RenderHtml
