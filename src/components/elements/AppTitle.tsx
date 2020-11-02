import React from "react"

interface AppTitleProps {
  title: string
  className: string
}

export const AppTitle: React.FC<AppTitleProps> = ({ title, className }) => {
  return <h1>{title}</h1>
}
