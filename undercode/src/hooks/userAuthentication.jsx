/* eslint-disable no-unused-vars */
import { db } from "../firebase/config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import { useState, useEffect } from "react";
export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [success, setSuccess] = useState(null);

  

  //cleanup
  //deal with memory leak
  const [cancelled, setCancelled] = useState(false);
  const auth = getAuth();

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  const createUser = async (data) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);
  

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, {
        displayName: data.displayName,
      });

     

      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);

     
      return user;

    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);
      let systemErrorMessage;
      if (error.message.includes("Password")) {
        systemErrorMessage =
          "As senhas precisam conter pelo menos 6 caracteres";
      } else if (error.message.includes("email-already")) {
        systemErrorMessage = "E-mail já cadastrado";
      } else {
        systemErrorMessage = "Ocorreu um erro!";
      }

      setLoading(false);
      setError(systemErrorMessage);
    }
  };

  const logout = ()=>{
    checkIfIsCancelled()
    signOut(auth)
  }

  const login = async(data)=>{
    checkIfIsCancelled()
    setLoading(true)
    setError(false)
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password)
    } catch (error) {
      let systemErrorMessage
      if(error.message.includes("auth/invalid-credential")){
        systemErrorMessage = "Dados inválidos"
      }else{
        systemErrorMessage = "Ocorreu um erro"
      }
      setError(systemErrorMessage)
      setLoading(false)
    }
  }

  useEffect(() => {
    return () => {
      setCancelled(true);
    };
  }, []);

  return {
    auth,
    createUser,
    error,
    loading,
    success,
    logout,
    login
   
  };
};
