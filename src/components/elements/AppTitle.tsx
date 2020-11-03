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

      {subTitle && (
        <div
          className="subtitle"
          dangerouslySetInnerHTML={{ __html: subTitle }}
        />
      )}
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
