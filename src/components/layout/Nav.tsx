import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

interface NavProps {
  className: string
  navLinks: Navigation[]
}

const NavList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #000;
  padding: 1em;
  li {
    z-index: 2;
  }
  a {
    color: ${({ theme }) => theme.colors.elements.paragraph};
    font-size: 1.4em;
  }
`

const Nav: React.FC<NavProps> = ({ className, navLinks }) => {
  return (
    <nav className={className}>
      <NavList>
        {navLinks &&
          navLinks.map(({ name, path }) => (
            <li key={name}>
              <Link to={`/${path}`}>{name} </Link>
            </li>
          ))}
      </NavList>
    </nav>
  )
}

export default styled(Nav)`
  border: 2px solid red;
  position: relative;
`
