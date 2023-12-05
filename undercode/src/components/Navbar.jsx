import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        Under<span>CODE</span> &gt;
      </NavLink>
      <ul className={styles.nav_links}>
        <li>
          <NavLink to="/" >Home</NavLink>
        </li>
        <li>
          <NavLink to="/register" className={({isActive}) =>(isActive ? styles.active : "")} >Cadastre-se</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={({isActive}) =>(isActive ? styles.active : "")}>Entrar</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({isActive}) =>(isActive ? styles.active : "")}>Sobre</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
