import React from "react"
import styled from "styled-components"

interface NavbarProps {
  className: string
}

const Nav = styled.nav``

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <Nav className="main-nav">
      <h1>Navbar here!!!</h1>
    </Nav>
  )
}
export default styled(Navbar)``
