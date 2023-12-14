import styles from "./Students.module.css"
import { Link } from "react-router-dom"
import { useGetStudents } from "../../hooks/useGetStudents"
import { useEffect, useState } from "react"
import { db } from "../../firebase/config"
import { getDoc, doc } from "firebase/firestore"
import { CheckCancel } from "../../hooks/CheckCancel"

//Icons
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { FaUser } from "react-icons/fa";

const Students = () => {
  const {checkIfIsCancelled} = CheckCancel()
  
  const {students} = useGetStudents("students")
  const [ idStudent, setIdStudent ] = useState("")
  const [dataStudent, setDataStudent] = useState("")


  useEffect(()=>{
    if(idStudent){
      checkIfIsCancelled()
      try {
        const loadStudent = async() =>{
          const docRef = await doc(db, "students", idStudent)
          const docSnap = await getDoc(docRef)
          setDataStudent(docSnap.data())
        }
        loadStudent()
      } catch (error) {
        console.log(error)
      }
    }
  }, [idStudent])
 
 
  return (
   <>
   <div className={styles.contentStudents}>
    <div className={styles.students}>
      <div className={styles.headerStudens}>
        <span>Aluno</span><span>Turma</span>
      </div>
      <p style={{backgroundColor:"#069", boxSizing:"border-box", color:"#fff", padding:"5px"}}>Total de alunos: {students.length}</p>
      <ul>
      {students && students.map((stud) =>(
          <Link onClick={()=>setIdStudent(stud.id)} key={stud.id}><li><p>{stud.studentName}</p><p>{stud.studentGroup}</p></li></Link>
        ))}
      </ul>
    </div>
    <div className={styles.perfilStudent}>
     {dataStudent && (
      <div>
         <div className={styles.headerStudens}>
          <span>Perfil do aluno</span><FiEdit/><RiDeleteBin6Line/>
        </div>
          <h3><FaUser style={{color:"#ccc"}}/>&nbsp;{dataStudent.studentName}</h3>
          <p>Idade: {dataStudent.ageStudent}</p>
          <p>E-mail: {dataStudent.studentEmail}</p>
          <p>Turma: {dataStudent.studentGroup}</p>
          <hr style={{ backgroundColor: '#ddd', height: '.5px', border: 'none' }} />
          
        </div>
     )}
    </div>
    </div>
   </>

    
    
  )
}

export default Students