import { useAuthentication } from "../../hooks/userAuthentication";
import styles from "./Register.module.css";
import { useState, useEffect } from "react";

const Register = () => {
  const [displayname, setDisplayname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading, sucess } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const user = {
      displayname,
      email,
      password,
    };

    if (password != confirmPassword) {
      setError("As senhas não conferem!");
      return;
    }

    const response = await createUser(user);

    // if (response.ok) {
    //   setDisplayname("");
    //   setEmail("");
    //   setPassword("");
    //   setConfirmPassword("");
    // }
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className={styles.formRegister}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie uma conta e compartilhe seus conhecimentos</p>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayname"
            required
            placeholder="Nome de usuário"
            value={displayname}
            onChange={(e) => setDisplayname(e.target.value)}
          />
        </label>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <span>Confirme a senha:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        {!loading && <button className="btn">Cadastrar</button>}
        {loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}

        {error && <p className="error">{error}</p>}
        {sucess && <p className="sucess">Cadastro realizado com sucesso</p>}
      </form>
    </div>
  );
};

export default Register;
