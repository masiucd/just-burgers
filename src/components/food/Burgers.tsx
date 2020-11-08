import React from "react"

interface BurgersProps {
  burger: Burger
}

const Burgers: React.FC<BurgersProps> = ({ burger }) => {
  return <h1>{burger.name}</h1>
}
export default Burgers
