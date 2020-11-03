import React from "react"
import styled, { FlattenInterpolation } from "styled-components"
interface AppTitleProps {
  title: string
  subTitle?: string
  className: string
  style?: FlattenInterpolation<Record<string, any>>
}

const AppTitle: React.FC<AppTitleProps> = ({
  title,
  subTitle,
  className,
  style,
}) => {
  return (
    <section className={className}>
      <h2>{title}</h2>
      {subTitle && <h4>{subTitle}</h4>}
    </section>
  )
}

export default styled(AppTitle)`
  ${({ style }) => (style ? style : null)}
`
