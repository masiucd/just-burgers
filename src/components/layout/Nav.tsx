import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Logo from "./Logo"

interface NavProps {
  className: string
}

const NavList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #000;
  padding: 1em;

  a {
    color: ${({ theme }) => theme.colors.elements.paragraph};
    font-size: 1.4em;
    position: relative;
    z-index: 1;
    display: block;
  }
`

const Nav: React.FC<NavProps> = ({ className }) => {
  return (
    <nav className={className}>
      <NavList>
        <li>
          <Link to="/favorites">Your favorites</Link>
        </li>
        <li>
          <Link to="/burgers">Burgers</Link>
        </li>

        {/* <li>
          <Link to="/">
            <Logo />
          </Link>
        </li> */}

        <li>
          <Link to="/chefs">Chefs</Link>
        </li>
        <li>
          <Link to="/orders">Orders</Link>
        </li>
      </NavList>
    </nav>
  )
}

export default styled(Nav)`
  border: 2px solid red;
  position: relative;
`
