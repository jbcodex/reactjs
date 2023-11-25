import { useFetch } from "../hooks/useFetch";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const urlBase = "http://localhost:3000/users";
  const [name, setName] = useState("");
  const [ocupation, setOcupation] = useState("");
  
  const {data: u, httpConfig} = useFetch(urlBase)

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const usr = {
      name,
      ocupation
    }
   
    httpConfig(usr, "POST")
    setName("")
    setOcupation("")
  }

  return (
    <>
      <div className="userList">
        {u && u.map((user) => (
          <p key={user.id}>
            <b>Nome: </b>
            {user.name} <br />
            <b>Prof: </b>
            {user.ocupation}
          </p>
        ))}
      </div>
      <div className="cadUsers">
        <h4>Cadastro de usuários</h4>
        <form onSubmit={handleSubmit} autoComplete="off" >
          <label>
            <span>Nome:</span>
            <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} />
          </label>
          <label>
            <span>Profissão:</span>
            <input type="text" name="ocupation" value={ocupation} onChange={(e)=>setOcupation(e.target.value)} />
          </label>
          <input className="btn" type="submit" value="Cadastrar" />
        </form>
      </div>
    </>
  );
}

export default App;
