import { Link } from "react-router-dom"
import { HiMenu } from "react-icons/hi";
import { useAuthValue } from "../context/AuthContext";
import { useAuthentication } from "../hooks/useAuthentication";

const NavBar = () => {

  const { user } = useAuthValue()
  const {logout} = useAuthentication()
  return (
    <nav className="navbar">
      
        <span><HiMenu style={{fontSize:"26px", color:"#fff"}} /> <h3><b style={{color:"yellow"}}>Escola Técnica Felícia Rangel</b></h3><p>&nbsp;{user && " Olá "+user.displayName.split(" ")[0]}</p> </span>
       <ul>
          {user && <li><Link to="/">Início</Link></li>}
          {user &&  <li><Link to="/register">Cadastro de usuários</Link></li>}
          {user && <li><Link onClick={logout}>Sair</Link></li>}
       </ul>
    </nav>
  )
}

export default NavBar