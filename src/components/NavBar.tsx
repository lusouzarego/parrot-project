import React from "react";
import HomeUser from "./links/HomeUser";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <header>
      <img src="/img/logo colorido.png" alt="logo parrot" />
      <button>Olá usuário </button>
      <button>sair</button>
    </header>
  );
}

export default NavBar;
