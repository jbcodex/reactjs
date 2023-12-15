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
import { FaUser, FaPhone } from "react-icons/fa";
import { MdGroups, MdLocationOn } from "react-icons/md";
import {  IoTimeSharp, IoMail, IoWoman, IoManSharp } from "react-icons/io5";


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
        <span>Total de alunos: {students.length}</span>
      </div>
      
      <ul>
      {students && students.map((stud) =>(
          <Link onClick={()=>setIdStudent(stud.id)} key={stud.id}><li><p><FaUser style={{color:"#iii"}}/>&nbsp;{stud.studentName}</p><p>Turma: {stud.studentGroup}</p></li></Link>
        ))}
      </ul>
    </div>
    <div className={styles.perfilStudent}>
      {!dataStudent && <p>Selecione um aluno</p> }
     {dataStudent && (
      <div>
         <div className={styles.headerStudens}>
          <span>Detalhes do Aluno</span>
          <div className={styles.actions}>
            <Link style={{padding:"4px", backgroundColor:"green", color:"#fff", borderRadius:"3px"}}><FiEdit/>&nbsp;Editar</Link>
            <Link style={{padding:"4px", backgroundColor:"rgb(179, 41, 41)", color:"#fff", borderRadius:"3px"}}><RiDeleteBin6Line/>&nbsp;Excluir</Link>
          </div>
        </div>
          <div className={styles.sudentDetail}>
          <h3><FaUser style={{color:"#069"}}/>&nbsp;{dataStudent.studentName}</h3>
          <p><IoTimeSharp style={{color:"#069"}}/><span>{dataStudent.ageStudent} anos</span></p>
          <p><IoMail style={{color:"#069"}}/><span>{dataStudent.studentEmail}</span></p>
          <p><FaPhone style={{color:"#069"}}/><span>{dataStudent.studentPhone}</span></p>
          <p><MdGroups style={{color:"#069"}}/><span>{dataStudent.studentGroup}</span></p>
          <hr style={{ backgroundColor: '#ddd', height: '.5px', border: 'none', marginBottom:"5px" }} />
          <h4>Filiação</h4>
          <p><IoWoman style={{color:"#069"}}/><span>{dataStudent.motherName}</span></p>
          <p><IoManSharp style={{color:"#069"}}/><span>{dataStudent.fatherName}</span></p>
          <hr style={{ backgroundColor: '#ddd', height: '.5px', border: 'none', marginBottom:"5px" }} />
          <h4>Localização</h4>
          <p><MdLocationOn style={{color:"#069"}}/><span>{dataStudent.studentAddress}</span></p>
          </div>
        
         
          
        </div>
     )}
    </div>
    </div>
   </>

    
    
  )
}

export default Students