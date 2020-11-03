import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import { above, below } from "../../styled"
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
      <Link to="/" className="logo-link">
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
  .logo-link {
    /* css hack to keep the same distance */
    border: 2px solid transparent;
    display: block;
    position: relative;
    .main-logo {
      left: 50%;
      position: absolute;
    }
    @media ${below.mobileS} {
      .main-logo {
        font-size: 4px;
        bottom: -70px;
      }
    }
    @media ${above.mobileS} {
      .main-logo {
        font-size: 4px;
        bottom: -71px;
      }
    }
    @media ${above.tablet} {
      .main-logo {
        bottom: -71px;
      }
    }
  }
`
