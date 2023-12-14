import { useState, useEffect } from "react";
import { useRegister } from "../../hooks/useRegister";
import styles from "./Register.module.css"

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPaswword] = useState("")
  const [ error, setError ] = useState("")
  const { userCreate, error: authError } = useRegister();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      displayName,
      email,
      password,
    };

    if(password != confirmPassword){
        setError("As senhas não conferem")
        return
    }
    const response = await userCreate(data);
  };

  useEffect(()=>{
    if(authError){
        setError(authError)
    }
  }, [authError])


  return (
    <div className={styles.register}>
      <h1>Cadastro de usuários</h1>
     <div className={styles.form}>
     <form onSubmit={handleSubmit}>
        <label>
          <span>Nome</span>
          <input
            type="text"
            name="displayname"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
        <label>
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <span>Confirm Password</span>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPaswword(e.target.value)}
          />
        </label>
        <input className="btn" type="submit" value="CADASTRAR USUÁRIO" />
        {error && <p className="error">{error}</p>}
      </form>
   
     </div>
    </div>
  );
};

export default Register;
