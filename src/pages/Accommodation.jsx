import React from "react";
import Carousel from "../components/Carousel";
import DropDown from "../components/DropDown";
import Logo from "../components/Header";

const Accommodation = () => {
  return (
    <>
      <Logo />

      <main>
        <Carousel />
        <DropDown />
      </main>
    </>
  );
};

export default Accommodation;
