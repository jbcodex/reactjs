/* eslint-disable */
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { useState } from "react"
export const useRegister = ()=>{
    const [error, setError] = useState("")
    const auth = getAuth()
    const userCreate = async(data)=>{
        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            await updateProfile(user, {
                displayName: data.displayName, 
            })
            return user;
        } catch (error) {
            let systemErrorMessage;
            if(error.message.includes("Password")){
                systemErrorMessage = "As senhas precisam conter no mínimo 6 caracteres";
            }else if(error.message.includes("email-already")){
                systemErrorMessage = "E-mail já cadastrado";
            }else{
                systemErrorMessage = "Ocorreu um erro"
            }
            setError(systemErrorMessage)
        }
       
    }
    return{
        userCreate,
        error
    }

}