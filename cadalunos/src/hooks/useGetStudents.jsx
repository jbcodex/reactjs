import {
  collection,
  query,
  orderBy,
  onSnapshot,
  QuerySnapshot,
  where,
} from "firebase/firestore";
import { db } from "../firebase/config";
import { useState, useEffect } from "react";
export const useGetStudents = (docCollection, id) => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");
  const [cancelled, setCancelled] = useState(false)

  const CheckCancel = ()=>{
    if(cancelled){
        return
    }
  }


  useEffect(() => {
    CheckCancel()
    const loadStudents = async () => {
      try {
        let q;
        const collectionRef = await collection(db, docCollection);
        q = await query(collectionRef, orderBy("insertedAt", "desc"));
        await onSnapshot(q, (QuerySnapshot) => {
          const studentsData = QuerySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setStudents(studentsData);
        
        });
      } catch (error) {
        setError(error.message);
        console.log(error);
      }
    };
    loadStudents();
  }, [docCollection, id]);

  return {
    students,
    error,
   
  };
};


