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
  padding: 1em;
  li {
    z-index: 2;
  }
  a {
    color: ${({ theme }) => theme.colors.elements.paragraph};
    font-size: 1.4em;
    display: inline-block;
    transition: ${({ theme }) => theme.transition.mainTransition};
    &:hover {
      color: ${({ theme }) => theme.colors.elements.button};
    }
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
  position: relative;
`
