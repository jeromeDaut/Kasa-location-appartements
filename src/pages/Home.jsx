import React from "react";
import BannerImg from "../components/BannerImg";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Logo from "../components/Header";

const Home = () => {
  return (
    <>
      <Logo />
      <main>
        <BannerImg />
        <Gallery />
      </main>
      <Footer />
    </>
  );
};

export default Home;
