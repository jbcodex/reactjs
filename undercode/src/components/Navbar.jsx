import { NavLink } from "react-router-dom";
import { FaSignInAlt, FaUser, FaUserPlus } from "react-icons/fa";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        Under<span>CODE</span> &gt;
      </NavLink>
      <ul className={styles.nav_links}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({isActive}) =>(isActive ? styles.active : "")}>Sobre</NavLink>
        </li>
        <li style={{color: "#fff"}}>|</li>
        <li>
          <NavLink to="/register" className={({isActive}) =>(isActive ? styles.active : "")} ><FaUserPlus style={{ color: "orange", fontSize: "1em", marginBottom: "-2px" }} /> Cadastre-se</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={({isActive}) =>(isActive ? styles.active : "")} ><FaUser style={{ color: "orange", fontSize: ".9em", marginBottom: "-2px"  }} /> Entrar</NavLink>
        </li>
      
      </ul>
    </nav>
  );
};

export default Navbar;
