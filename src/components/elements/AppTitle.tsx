import { RenderHtml } from "@components/componentUtils"
import React from "react"
import styled, { FlattenSimpleInterpolation } from "styled-components"
interface AppTitleProps {
  title: string
  subTitle?: string
  desc?: string
  className: string
  style?: FlattenSimpleInterpolation
}

const AppTitle: React.FC<AppTitleProps> = ({
  title,
  subTitle,
  desc,
  className,
  style = null,
}) => {
  return (
    <section className={className}>
      <h2>{title}</h2>

      {subTitle && <RenderHtml className="subtitle" text={subTitle} />}
      {desc && <RenderHtml className="descText" text={desc} />}
    </section>
  )
}

export default styled(AppTitle)`
  ${({ style }) => (style ? style : null)}
  font-size: 10px;
  padding: 2em;
  h2 {
    font-size: 5em;
  }
  .subtitle {
    font-size: 3em;
    span {
      background: ${props => props.theme.colors.illustrations.highlight};
      box-shadow: ${props => props.theme.shadow.elevations[2]};
      color: ${props => props.theme.colors.illustrations.main};
      padding: 0.2em;
    }
  }
`
