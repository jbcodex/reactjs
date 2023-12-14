/* eslint-disable */
import { useState } from "react"
import { useAuthentication } from "../../hooks/useAuthentication"
import styles from "./Login.module.css"
const login = () => {
    const { userLogin, error } = useAuthentication()
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const handleSubmit = async(e) =>{
        e.preventDefault()
        const data ={
            email,
            password
        }
        const response = await userLogin(data)
    }
    
  return (
    <>
        <div>
            <div className={styles.login}>
                <h1>Login</h1>
            <form onSubmit={handleSubmit}>
               <label>
                <span>Email:</span>
               <input type="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
               </label>
               <label>
                <span>Senha:</span>
               <input type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
               </label>
               <input className="btn" type="submit" value="FAZER LOGIN"/>
               {error && <p className="error">{error}</p> }
            </form>
      
            </div>
        </div>
    </>
  )
}

export default login