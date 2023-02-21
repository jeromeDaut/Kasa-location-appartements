import React from "react";
import BannerImg from "../components/BannerImg";
import DropDown from "../components/DropDown";
import Footer from "../components/Footer";
import Logo from "../components/Header";
import { dropDownData } from "../data/dropDownDataAbout";

const DropDownList = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <DropDown key={index} title={item.title} paragraph={item.paragraph} />
      ))}
    </div>
  );
};

const About = () => {
  return (
    <div>
      <Logo />
      <main>
        <BannerImg />
        <DropDownList data={dropDownData} />
      </main>
      <Footer />
    </div>
  );
};

export default About;
