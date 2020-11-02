import React from "react"
import styled from "styled-components"

const LogoStyles = styled.div`
  border: 2px solid red;
  width: 20rem;
  height: 10rem;
  margin: 0 auto;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.elements.bg};
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translate(-50%, -50%);
  z-index: 3;
  .inner {
    border: 2px solid red;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    .est {
      color: ${props => props.theme.colors.illustrations.highlight};
    }
    h1 {
      font-size: 2rem;
    }
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
