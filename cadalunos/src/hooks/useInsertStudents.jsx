import { db } from '../firebase/config';
import { useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore'
export const useInsertStudents = (docCollection) => {
    const [ error, setError ] = useState(null)
    const insertStudent = async(student) => {
        try {
            const newStudent = {...student, insertedAt: Timestamp.now()}
            const insertStudent = await addDoc(
                collection(db, docCollection),
                newStudent
            )
        } catch (error) {
            let systemErrorMessage;
            if (error.message.includes("auth/email-already-in-use")) {
                systemErrorMessage = "Este e-mail já está em uso. Tente outro.";
              }else{
                systemErrorMessage = "Ocorreu um erro, tente mais tarde"
              }
              setError(systemErrorMessage)
        }
    }
    return{
        insertStudent,
        error
    }
}