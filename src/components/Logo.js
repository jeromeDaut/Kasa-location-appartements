import React from "react";
import logo from "../assets/Images/LOGO.png";
import Navigation from "./Navigation";

const Logo = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo de kaza" />
      <Navigation />
    </header>
  );
};

export default Logo;
