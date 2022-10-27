import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="shadow-sm  bg-body rounded">
      <Link to="/feed">
        <img src="src\img\logo Nav.png" alt="logo parrot" />
      </Link>
      <nav>
        <label>
          Olá,{" "}
          <Link className="linkP" to="/perfil">
            nome
          </Link>
        </label>
        <button className="btn2">| sair</button>
      </nav>
    </header>
  );
}
