import { Link } from "react-router-dom"
import { HiMenu } from "react-icons/hi";
import { useAuthValue } from "../context/AuthContext";
import { useAuthentication } from "../hooks/useAuthentication";

const NavBar = () => {

  const { user } = useAuthValue()
  const {logout} = useAuthentication()
  return (
    <nav className="navbar">
      
      <p><HiMenu style={{fontSize:"26px", color:"#fff"}} /> <b>Cadastro de Alunos</b>&nbsp;{user && "| Olá "+user.displayName.split(" ")[0]} </p>
       <ul>
          {user && <li><Link to="/">Início</Link></li>}
         {user &&  <li><Link to="/register">Cadastro de usuários</Link></li>}
         
          {user && <li><Link onClick={logout}>Sair</Link></li>}
       </ul>
    </nav>
  )
}

export default NavBar