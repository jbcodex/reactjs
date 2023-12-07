/* eslint-disable */
import { NavLink } from "react-router-dom";
import {
  FaSignInAlt,
  FaUserPlus,
  FaChartBar,
  FaPencilAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import { userAuthentication } from "../hooks/userAuthentication";
import { useAutValue } from "../context/AuthContext";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const {user} = useAutValue();
  const {logout} = userAuthentication()

  const checkName = user.displayName.split(" ")
  const firstName = checkName[0]
 
  

 

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        Under<span>CODE</span> &gt;
      </NavLink>
      <ul className={styles.nav_links}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        
        {!user && (
          <>
            
            <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Sobre
          </NavLink>
        </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                <FaUserPlus
                  style={{
                    color: "orange",
                    fontSize: "1em",
                    marginBottom: "-2px",
                  }}
                />{" "}
                Cadastre-se
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                <FaSignInAlt
                  style={{
                    color: "orange",
                    fontSize: ".9em",
                    marginBottom: "-2px",
                  }}
                />{" "}
                Login
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                <FaChartBar
                  style={{
                    color: "orange",
                    fontSize: ".9em",
                    marginBottom: "-2px",
                    marginRight: "2px",
                  }}
                />
                Dashboard
              </NavLink>
            </li>
            {user && <li style={{color:"#fff"}}> | Olá, {firstName}! </li>}
            <li>
              <NavLink
                to="/posts/create"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                <FaPencilAlt
                  style={{
                    color: "orange",
                    fontSize: ".8em",
                    marginBottom: "-2px",
                    marginRight: "3px",
                  }}
                />
                Criar Post
              </NavLink>
            </li>
            <li>
              <button style={{color:"#fff"}} onClick={logout}>
                <FaSignOutAlt
                  style={{
                    color: "orange",
                    fontSize: ".8em",
                    marginBottom: "-2px",
                    marginRight: "3px",
                  }}
                />
                Sair
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
