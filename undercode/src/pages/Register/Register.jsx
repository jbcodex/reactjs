import styles from "./Register.module.css";
import { useState, useEffect } from "react";

const Register = () => {
  return (
    <div>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe seus conhecimentos</p>
      <form>
        <label>
            <span>Nome:</span>
            <input type="text" name="displayname" required placeholder="Nome de usuário" />
        </label>
        <label>
            <span>E-mail:</span>
            <input type="email" name="email" required placeholder="E-mail" />
        </label>
        <label>
            <span>Password:</span>
            <input type="password" name="password" required placeholder="Senha" />
        </label>
        <label>
            <span>Confirm Password:</span>
            <input type="password" name="confirmPassword" required placeholder="Confirme sua senha" />
        </label>
        <button className="btn">Cadastrar</button>
      </form>
    </div>
  );
};

export default Register;
