import React from "react";
import img from "../assets/images/logo.png";
import Navigation from "./Navigation";

const Logo = () => {
  return (
    <header className="logo">
      <img src={img} alt="Logo de kaza" />
      <Navigation />
    </header>
  );
};

export default Logo;
