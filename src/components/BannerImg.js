import React from "react";
import img from "../assets/images/banner.png";
const BannerImg = () => {
  return (
    <div className="banner">
      <img src={img} alt="Banner_image" />
    </div>
  );
};

export default BannerImg;
