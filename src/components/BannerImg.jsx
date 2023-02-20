import React from "react";
import img from "../assets/Images/Banner.png";
const BannerImg = () => {
  return (
    <div className="bannerHome bannerHome__overlay">
      <img src={img} alt="Banner_image" />
      <h1 className="mainTitle">Chez vous, partout et ailleurs</h1>
    </div>
  );
};

export default BannerImg;
