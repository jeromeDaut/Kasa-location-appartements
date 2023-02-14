import React from "react";
import BannerHome from "../components/BannerHome";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Logo from "../components/Logo";

const Home = () => {
  return (
    <div>
      <Logo />
      <BannerHome />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
