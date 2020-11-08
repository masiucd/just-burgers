import React from "react"
import styled from "styled-components"
import { RenderHtml } from "../../componentUtils"

interface FooterProps {
  className: string
  title: string
}

const Footer: React.FC<FooterProps> = ({ className, title }) => {
  let transformedTitle = title
    .split(" ")
    .map(n => `<small>${n}</small> `)
    .join(" ")

  return (
    <footer className={className}>
      <h3>
        <span>&copy;</span>
        <RenderHtml text={transformedTitle} />

        <span>{new Date().getFullYear()}</span>
      </h3>
    </footer>
  )
}
export default styled(Footer)`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 1rem 2rem;
  h3 {
    font-size: 20px;
    display: flex;
    align-items: center;
    span {
      font-size: 1.5em;
      margin: 0 0.5rem;
    }
  }
  small {
    font-size: 1.5em;

    &:last-child {
      background: ${({ theme }) => theme.colors.illustrations.highlight};
      padding: 0.1em;
    }
  }
`
