import React, { useState } from "react";
// import { slidesList } from "../slidesList/logements";
import arrowLeft from "../../assets/Images/arrow_back.png";
import arrowRight from "../../assets/Images/arrow_right.png";

const Slideshow = ({ slidesList }) => {
  //Declare state variables for the current index
  const [index, setIndex] = useState(0);
  const length = slidesList.length;
  const currentSlide = slidesList[index];
  //function to go to the previous index

  return (
    <div className="carousel">
      <img
        src={arrowLeft}
        alt="fleche location précédente"
        onClick={() => {
          index === 0 ? setIndex(slidesList.length - 1) : setIndex(index - 1);
        }}
        className="arrowLeft"
        key={slidesList.id}
        loading="lazy"
      />

      <img
        src={arrowRight}
        alt="fleche location suivante"
        onClick={() => {
          index === slidesList.length - 1 ? setIndex(0) : setIndex(index + 1);
        }}
        className="arrowRight"
        loading="lazy"
      />

      <img src={currentSlide} alt={currentSlide} loading="lazy" />
      <p>{index + 1 + "/" + length}</p>
    </div>
  );
};

export default Slideshow;
