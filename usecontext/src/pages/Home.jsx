import { useDataContext } from "../hooks/useDataContext"
const Home = () => {
  const context = useDataContext()
  const {color, dispatch} = context
  return (
   <>
     <h1 style={{color}}>Recebendo a cor {color == "red" ? "Vermelho" : "Verde"}</h1>
     <button onClick={()=>dispatch({color : "RED"})}>Vermelho</button>
     <button onClick={()=>dispatch({color : "GREEN"})}>Verde</button>
   </>
  )
}

export default Home