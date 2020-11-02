import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import { below } from "../../styled"
import Logo from "./Logo"
import Nav from "./Nav"

interface HeaderProps {
  className: string
}

const HEADER_QUERY = graphql`
  {
    navData: site {
      siteMetadata {
        navigationLinks {
          name
          path
        }
      }
    }
  }
`

const Header: React.FC<HeaderProps> = ({ className }) => {
  const {
    navData: {
      siteMetadata: { navigationLinks },
    },
  } = useStaticQuery<NavQuery>(HEADER_QUERY)
  return (
    <header className={className}>
      <Link to="/" className="logo">
        <Logo />
      </Link>
      <Nav
        className="main-nav"
        navLinks={navigationLinks ? navigationLinks : []}
      />
    </header>
  )
}

export default styled(Header)`
  position: relative;
`
