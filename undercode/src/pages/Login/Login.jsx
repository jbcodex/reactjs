import styles from "./Login.module.css"
const Login = () => {
  return (
    <div className={styles.login}>
      <h1>Faça login para acessar</h1>
        <form>
         <label>
          <span>Usuário: </span>
          <input type="text" name="user" />
         </label>
         <label>
          <span>Senha: </span>
          <input type="password" name="password" />
         </label>
         <input className="btn" type="submit" value="Entrar" />
        </form>

    </div>
  )
}

export default Login