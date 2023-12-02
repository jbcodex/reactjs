import { useContext } from "react"
import { WordContext } from "../context/WordContext"
const About = () => {
  const {data} = useContext(WordContext)
  return (
      <>
            <ul>
           {data && 
             data.map((usr)=>(
              <li key={usr.id}>Password: {usr.password}</li>
             ))}
        </ul>
      </>
      )
}

export default About

