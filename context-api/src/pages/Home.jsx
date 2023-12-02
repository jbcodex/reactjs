import { useContext } from "react"
import { WordContext } from "../context/WordContext"

const Home = () => {
  const {httpConfig, name, setName, password, setPassword} = useContext(WordContext)

  const handleConfig = (e)=>{
    e.preventDefault()
    const data = {
      name,
      password
    }

    httpConfig(data, "POST")
    setName("")
    setPassword("")
  }
  return (
    <div>
      <form onSubmit={handleConfig}> 
        <label>
          <span>Nome</span>
          <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
        </label>
        <label>
          <span>Password</span>
          <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </label>
        <input type="submit" value="Cadastrar" />
      </form>
    </div>
  )
}

export default Home