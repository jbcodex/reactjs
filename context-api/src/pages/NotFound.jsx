import { useContext } from "react";
import { WordContext } from "../context/WordContext";
const NotFound = () => {
  const {nome} = useContext(WordContext)
  return (
    <div>
        <h1>404</h1>
        <p>Página não encontrada</p>
        <p>Usuário: {nome}</p>
    </div>
  )
}

export default NotFound