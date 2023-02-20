import React from "react";
import BannerImg from "../components/BannerImg";
import DropDown from "../components/DropDown";
import Footer from "../components/Footer";
import Logo from "../components/Header";

const About = () => {
  return (
    <div>
      <Logo />
      <main>
        <BannerImg />
        <DropDown />
      </main>
      <Footer />
    </div>
  );
};

export default About;
