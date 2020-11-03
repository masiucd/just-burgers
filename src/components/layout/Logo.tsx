import React from "react"
import styled from "styled-components"
import { above, below } from "../../styled"
import clouds from "../../images/clouds.svg"

const LogoStyles = styled.div`
  background: white url(${clouds});
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
  width: 30em;
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
      color: ${props => props.theme.colors.illustrations.highlight};
      text-shadow: 2px 2px rgba(0, 0, 0, 0.05);
      font-size: 3.2em;
    }
    h1 {
      font-size: 5em;

      .just {
        display: block;
        width: 100%;
        text-align: center;
        .letter {
          margin: 0 0.1em;
          display: inline-block;
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
        text-shadow: 2px 2px rgba(0, 0, 0, 0.05);
      }
    }
  }
`

const Logo = () => {
  return (
    <LogoStyles className="main-logo">
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
