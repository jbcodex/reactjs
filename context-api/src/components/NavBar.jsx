import { NavLink } from "react-router-dom"
import "./Navbar.css"
const NavBar = () => {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/produtos">Produtos</NavLink>
        <NavLink to="/about">About</NavLink>
    </nav>
  )
}

export default NavBar