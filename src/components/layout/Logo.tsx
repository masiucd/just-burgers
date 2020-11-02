import React from "react"
import styled from "styled-components"
import { below } from "../../styled"
import stripes from "../../images/stripes.svg"

const LogoStyles = styled.div`
  /* width: 20rem;
  height: 10rem; */

  font-size: 6px;
  font-size: clamp(1px, 0.65vw, 8px);
  width: 30em;
  height: 30em;
  margin: 0 auto;
  background: white url(${stripes});
  background-size: 150em;
  border: 2px solid white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  position: absolute;
  left: 50%;
  bottom: -30%;
  transform: translate(-50%, -50%);
  z-index: 3;
  display: flex;
  flex-flow: row wrap;
  .inner {
    margin: 1em;
    flex: 1;
    background: white;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
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

  @media ${below.mobileL} {
    bottom: 20%;
    width: 90%;
  }
`

const Logo = () => {
  return (
    <LogoStyles>
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
