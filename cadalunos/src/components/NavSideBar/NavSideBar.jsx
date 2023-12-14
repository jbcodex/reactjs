import styles from "./NavSideBar.module.css";
import { Link } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { MdInsertChartOutlined } from "react-icons/md";

const NavSideBar = () => {
  return (
    <div className={styles.homeMenu}>
        <ul>
          <li><IoMdAddCircle style={{color:"#fff", fontSize:"12px"}} /><Link to="/student-register">Novo Aluno</Link></li>
          <li><FaUser  style={{color:"#fff", fontSize:"12px"}}/><Link to="/">Alunos</Link></li>
          <li><MdInsertChartOutlined  style={{color:"#fff", fontSize:"12px"}}/><Link>Turmas</Link></li>
        </ul>
      </div>
  )
}

export default NavSideBar