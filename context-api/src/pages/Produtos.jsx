import { useContext } from "react"
import { WordContext } from "../context/WordContext.jsx"

const Produtos = () => {
  const {data} = useContext(WordContext)
  return (
    <>
     <ul>
     {data &&
        data.map((user)=>(
          <li key={user.id}>nome: {user.name}</li>
          ))}
     </ul>
    </>
  )
}

export default Produtos