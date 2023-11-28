
import "./NavBar.css"
import {NavLink } from "react-router-dom"
const NavBar = () => {
  return (
    <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/panel"}>Panel</NavLink>
        <NavLink to={"/about"}>About</NavLink>
    </nav>
  )
}

export default NavBar