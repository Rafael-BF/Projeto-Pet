import React from "react";
import Userfront from "@userfront/react";
import { LogoutButton } from "./autentica/Autenticacao";
import { Link } from "react-router-dom";
import "./css/Menu.css";

Userfront.init("qbjqg94n");

const Menu = () => {
  return (
    <nav>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="logo" />
        </Link>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1>
            AP<span className="highlight">PET</span>
          </h1>
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/SecaoResumo">Apresentação</Link>
        </li>
        <li>
          <Link to="/Mensagens">Contato</Link>
        </li>
        {!Userfront.accessToken() && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/cadastro">Cadastro</Link>
            </li>
          </>
        )}
        {Userfront.accessToken() && (
          <>
            <li>
              <Link to="/Medidas">Registros</Link>
            </li>
            <li>
              <Link to="/Admin">Administração</Link>
            </li>
            <li>
              <Link to="/logout">
                <LogoutButton />
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Menu;
