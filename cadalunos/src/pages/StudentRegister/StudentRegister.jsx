import styles from "./StudentRegister.module.css"
import NavSideBar from "../../components/NavSideBar/NavSideBar"
import { useInsertStudents } from "../../hooks/useInsertStudents"
import { useState } from "react"

const StudentRegister = () => {
    const { insertStudent, error } = useInsertStudents("students")

    const [studentName, setStudentName] = useState("")
    const [ ageStudent, setAgeStudent ] = useState(null)
    const [studentEmail, setStudentEmail] = useState("")
    const [studentPhone, setStudentPhone] = useState("")
    const [studentGroup, setStudentGroup] = useState("")
    const [fatherName, setFatherName] = useState("")
    const [motherName, setMotherName] = useState("")
    const [studentAddress, setStudentAddress] = useState("")

    const handleSubmit = async(e) =>{
        e.preventDefault()
        const student = {
            studentName,
            ageStudent,
            studentEmail,
            studentPhone,
            studentGroup,
            fatherName,
            motherName, 
            studentAddress
        }
        insertStudent(student)
    }

  return (
    <div className={styles.contentRegisterStudent}>
        <NavSideBar />
        <div className={styles.form}>
            <h1>Cadastro de alunos</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input type="text" name="studentName" value={studentName} onChange={(e)=>setStudentName(e.target.value)} required/>
                </label>
                <label>
                    <span>Idade:</span>
                    <input type="text" name="ageStudent" value={ageStudent} onChange={(e)=>setAgeStudent(e.target.value)} required/>
                </label>
                <label>
                    <span>E-mail:</span>
                    <input type="email" name="studentEmail" value={studentEmail} onChange={(e)=>setStudentEmail(e.target.value)} required/>
                </label>
                <label>
                    <span>Celular</span>
                    <input type="text" name="studentPhone" value={studentPhone} onChange={(e)=>setStudentPhone(e.target.value)} required/>
                </label>
                <label>
                    <span>Turma</span>
                    <input type="text" name="studentGroup" value={studentGroup} onChange={(e)=>setStudentGroup(e.target.value)} required/>
                </label>
                <label>
                    <span>Nome do Pai</span>
                    <input type="text" name="fatherName" value={fatherName} onChange={(e)=>setFatherName(e.target.value)} required/>
                </label>
                <label>
                    <span>Nome da Mãe</span>
                    <input type="text" name="motherName" value={motherName} onChange={(e)=>setMotherName(e.target.value)} required/>
                </label>
                <label>
                    <span>Endereço</span>
                    <input type="text" name="studentAddress" value={studentAddress} onChange={(e)=>setStudentAddress(e.target.value)} required/>
                </label>
                <input className="btn" type="submit" value="CADASTRAR ALUNO" />
                {error && <p className="error">{error}</p> }
            </form>
        </div>
        
    </div>
  )
}

export default StudentRegister