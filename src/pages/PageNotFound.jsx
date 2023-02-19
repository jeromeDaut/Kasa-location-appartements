import React from "react";
import Logo from "../components/Header";
import { NavLink } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div>
      <Logo />
      <div className="error">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <NavLink to="/">Retourner sur la page d'accueil</NavLink>
      </div>
    </div>
  );
};

export default PageNotFound;
