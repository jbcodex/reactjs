import { Link } from "react-router-dom"
import { HiMenu } from "react-icons/hi";
import { useAuthValue } from "../context/AuthContext";
import { useAuthentication } from "../hooks/useAuthentication";
import { IoLogOut, IoSearchSharp } from "react-icons/io5";

const NavBar = () => {

  const { user } = useAuthValue()
  const {logout} = useAuthentication()
  return (
    <nav className="navbar">
      
        <span><HiMenu style={{fontSize:"26px", color:"#fff"}} /> <h3><b style={{color:"yellow"}}>Escola Técnica Felícia Rangel</b></h3><p>&nbsp;{user && " Olá "+user.displayName.split(" ")[0]}</p> </span>
        {user && (
            <div className="search">
            <form className="searchForm">
               <input className="searchInput" type="text" name="student" placeholder="Busque por aluno ou turma"  required/> <button className="btnSearch"><IoSearchSharp/></button>
           </form>
          </div>
        )}
       <ul>
          {user && <li><Link to="/">Início</Link></li>}
          {user &&  <li><Link to="/register">Cadastro de usuários</Link></li>}
          {user && <li><Link onClick={logout}>Sair<IoLogOut style={{margin:"0 0 -3px 2px"}}/></Link></li>}
       </ul>
       
    </nav>
  )
}

export default NavBar