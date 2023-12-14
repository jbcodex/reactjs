/* eslint-disable */
import { useState } from "react";
import { db } from "../firebase/config";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"
export const useAuthentication = ()=>{
    const [ error, setError ] = useState(null)
    const auth = getAuth()
    const userLogin = async(data)=>{
        try {
            await signInWithEmailAndPassword(auth, data.email, data.password)
        } catch (error) {
            let systemErrorMessage;
            if(error.message.includes("auth/invalid-credential")){
                systemErrorMessage = "Dados incorretos";
            }else if(error.message.includes("auth/user-disabled")){
                systemErrorMessage = "Conta temporariamente desativada"
            }else{
                systemErrorMessage = "Ocorreu um erro, tente mais tarde!"
            }   
            setError(systemErrorMessage)
        }
    }

    const logout = ()=>{
        signOut(auth)
    }

    return{
        userLogin,
        auth,
        error,
        logout
    }
}

