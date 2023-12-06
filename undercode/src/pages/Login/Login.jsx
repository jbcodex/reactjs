import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/userAuthentication";
import { FaLock, FaUser } from "react-icons/fa";
import styles from "./Login.module.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const {
    login,
    error: authError,
    loading,
    success,
    
  } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const user = {
      email,
      password,
    };
    const response = await login(user);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);


  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <p>Entre para criar postagens!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Usuário: </span>
          <FaUser
            style={{
              position:"absolute",
              top:"265px",
              right:"35%",
              color: "#aaa",
              fontSize: "1em",
              marginBottom: "-2px",
              marginRight: "5px",
              cursor:"pointer",
              backgroundColor:"transparent"
            }}
            
          />
          <input
            type="text"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha: </span>
          <FaLock
            style={{
              position:"absolute",
              top:"345px",
              right:"35%",
              color: "#aaa",
              fontSize: "1em",
              marginBottom: "-2px",
              marginRight: "5px",
              cursor:"pointer",
              backgroundColor:"transparent"
            }}
            
          />
          <input
            type="password"
            name="password"
            placeholder="senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {!loading && <button className="btn">Entrar</button>}
        {loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}

      </form>
      {error && <p className={styles.errorLogin}>{error}</p>}
      {success && <p className="sucess">Cadastro realizado com sucesso</p>}
    </div>
  );
};

export default Login;
