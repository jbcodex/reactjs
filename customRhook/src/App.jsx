import "./App.css";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

function App() {
  const url = "http://localhost:3000/users";
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [ocupation, setOcupation] = useState("");

  
  const { data: usr, httpConfig } = useFetch(url);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      name,
      age,
      ocupation
    };
    httpConfig(user, "POST");
    setName("")
    setAge("")
    setOcupation("")
  };

  return (
    <>
      <div className="userList">
        {usr &&
          usr.map((user) => (
            <p key={user.id}>
              <b>NOME:</b> {user.name} <br />
              <b>IDADE:</b> {user.age} <br />
              <b>PROFISSÃO:</b> {user.ocupation}{" "}
            </p>
          ))}
      </div>
      <div className="cadUser">
        <form onSubmit={handleSubmit} autoComplete="off">
          <label>
            <span>Nome</span>
            <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} />
          </label>
          <label>
            <span>Idade:</span>
            <input type="number" name="age" value={age} onChange={(e)=>setAge(e.target.value)}  />
          </label>
          <label>
            <span>Profissão:</span>
            <input type="text" name="ocupation" value={ocupation} onChange={(e)=>setOcupation(e.target.value)}  />
          </label>
          <input className="btn" type="submit" value="Cadastrar Usuário" />
        </form>
      </div>
    </>
  );
}

export default App;
