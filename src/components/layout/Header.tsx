import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Logo from "./Logo"
import Nav from "./Nav"

interface HeaderProps {
  className: string
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={className}>
      <Link to="/" className="logo">
        <Logo />
      </Link>
      <Nav className="main-nav" />
    </header>
  )
}

export default styled(Header)`
  position: relative;
  .logo {
    border: 2px solid red;
    display: block;
    height: 100%;
  }
`
