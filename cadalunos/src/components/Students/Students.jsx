import styles from "./Students.module.css"
import { Link } from "react-router-dom"
import { useGetStudents } from "../../hooks/useGetStudents"

const Students = () => {
  const {students, studentsNumber} = useGetStudents("students")
 
 
  return (
    <div className={styles.students}>
    <div className={styles.headerStudens}>
      <span>Aluno</span><span>Turma</span>
    </div>
    <ul>
    {students && students.map((stud) =>(
        <Link key={stud.id}><li><p>{stud.studentName}</p><p>{stud.studentGroup}</p></li></Link>
      ))}
    </ul>
  </div>
  )
}

export default Students