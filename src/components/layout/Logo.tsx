import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

interface LogoStylesProps {
  logoImage: string
}

const LogoStyles = styled.div<LogoStylesProps>`
  background: white
    ${props => (props.logoImage ? `url(${props.logoImage})` : "")};
  background-size: 2em;
  border: 2px solid ${props => props.theme.colors.illustrations.main};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-flow: row wrap;
  font-size: 6px;
  font-size: clamp(1px, 0.65vw, 8px);
  height: 30em;
  margin: 0 auto;
  transform: translate(-50%, -50%);
  width: 40em;
  z-index: 3;

  .inner {
    align-items: center;
    background: ${props => props.theme.colors.illustrations.main};
    display: flex;
    flex: 1;
    flex-flow: column wrap;
    justify-content: center;
    margin: 1em;
    .est {
      color: ${props => props.theme.colors.illustrations.secondary};
      text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.15);
      font-size: 2.2em;
      display: inline-block;
      padding: 0.1em 1.3em;
      transform: translateY(-60%);
    }
    h1 {
      font-size: 8em;

      .just {
        display: block;
        width: 100%;
        text-align: center;
        transform: scale(2.4);
        display: block;
        text-shadow: 0.18em 0.18em 0 rgba(0, 0, 0, 0.05);
        perspective: 100px;
        .letter {
          margin: 0 0.1em;
          display: inline-block;
          transition: ${props => props.theme.transition.mainTransition};
          z-index: 1;
          font-size: 0.9em;
          transform: scale(1);
          color: ${({ theme }) => theme.colors.illustrations.secondary};
          &:hover {
            transform: rotate(0);
          }
        }
        .j {
          transform: rotate(-32deg);
        }
        .u {
          transform: rotate(12deg);
        }
        .s {
          transform: rotate(-12deg);
        }
        .t {
          transform: rotate(-22deg);
        }
      }
      .burgers {
        display: inline-block;
        text-shadow: 2px 2px rgba(0, 0, 0, 0.05);
        transform: translateY(30%);
      }
    }
  }
`

const LOGO_QUERY = graphql`
  {
    logoImage: file(relativePath: { eq: "clouds.svg" }) {
      publicURL
    }
  }
`

const Logo = () => {
  const data = useStaticQuery<LogoQuery>(LOGO_QUERY)

  return (
    <LogoStyles className="main-logo" logoImage={data.logoImage.publicURL}>
      <div className="inner">
        <span className="est">EST 1999</span>
        <h1>
          <span className="just">
            <span className="letter j">j</span>
            <span className="letter u">u</span>
            <span className="letter s">s</span>
            <span className="letter t">t</span>
          </span>
          <span className="burgers">Burgers</span>
        </h1>
      </div>
    </LogoStyles>
  )
}

export default Logo
