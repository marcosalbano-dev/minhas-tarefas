import { useState } from "react";
import './home.css';
import { Link } from "react-router-dom";

export default function Home() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return (
    <div className="home-container">
      <h1>Lista de Tarefas</h1>
      <span>Gerencie sua agenda de forma fácil.</span>

      <form className="form">
        <input 
          type="text"
          placeholder="Digite seu email..."
          value={email}
          onChange={ (e) => e.target.setEmail }
        />
        <input 
        autoComplete={false}
          type="password"
          placeholder="*********"
          value={password}
          onChange={ (e) => e.target.setPassword }
        />
        <button type="submit" >Acessar</button>
      </form>
      <Link to="/register">
        Não possui uma conta? Cadastre-se.
      </Link>
    </div>
  );
}
  
  