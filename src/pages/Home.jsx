import React from "react";
import BannerHome from "../components/BannerHome";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Logo from "../components/Header";

const Home = () => {
  return (
    <>
      <Logo />
      <main>
        <BannerHome />
        <Gallery />
      </main>
      <Footer />
    </>
  );
};

export default Home;
