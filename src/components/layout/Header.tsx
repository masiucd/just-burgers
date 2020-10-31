import React from "react"
import styled from "styled-components"
import Navbar from "./Navbar"

interface HeaderProps {
  className: string
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={className}>
      <Navbar className="main-nav" />
    </header>
  )
}
export default styled(Header)``
