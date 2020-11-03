import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

interface NavProps {
  className: string
  navLinks: Navigation[]
}

const NavList = styled.ul`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 1em;
  li {
  }
  a {
    color: ${({ theme }) => theme.colors.elements.paragraph};
    display: inline-block;
    font-size: 1.4em;
    position: relative;
    transition: ${({ theme }) => theme.transition.mainTransition};
    &::after {
      content: "";
      height: 2px;
      width: 0;
      background: ${({ theme }) => theme.colors.illustrations.secondary};
      position: absolute;
      bottom: 0;
      left: 0;
      transition: ${({ theme }) => theme.transition.quickTransition};
    }
    &:hover {
      color: ${({ theme }) => theme.colors.elements.button};
      &::after {
        width: 100%;
      }
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
              <Link activeStyle={{ color: "#e45858" }} to={`/${path}`}>
                {name}{" "}
              </Link>
            </li>
          ))}
      </NavList>
    </nav>
  )
}

export default styled(Nav)`
  position: relative;
`
