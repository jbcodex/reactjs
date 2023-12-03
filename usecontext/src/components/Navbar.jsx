import { NavLink } from "react-router-dom"
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
    </nav>
  )
}

export default Navbar