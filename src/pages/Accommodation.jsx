import React from "react";
import DropDownList from "../components/DropDown";
import Footer from "../components/Footer";
import Logo from "../components/Header";
import InfoAccommadation from "../components/InfoAccommadation";
import Slideshow from "../components/Slideshow";

const Accommodation = () => {
  return (
    <>
      <Logo />

      <main>
        <Slideshow />
        <section>
          <InfoAccommadation />
        </section>
        <DropDownList />
      </main>
      <Footer />
    </>
  );
};

export default Accommodation;
