import React from "react";
import { useLocation } from "react-router-dom";
import imgHome from "../assets/Images/Banner.png";
import imgAbout from "../assets/Images/aboutImg.png";

const BannerImg = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const showTitle = isHomePage;

  return (
    <div className="bannerHome">
      <div className=" bannerHome__overlay">
        <img src={isHomePage ? imgHome : imgAbout} alt="Banner_image" />
      </div>
      {showTitle && (
        <h1 className="mainTitle">
          Chez vous,
          <br className="br" /> partout et ailleurs
        </h1>
      )}
    </div>
  );
};

export default BannerImg;
