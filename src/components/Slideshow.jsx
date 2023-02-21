import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { data } from "../data/logements";
import arrowLeft from "../assets/Images/arrow_back.png";
import arrowRight from "../assets/Images/arrow_right.png";

const Slideshow = () => {
  //Declare state variables for the current index
  const [index, setIndex] = useState(0);
  const length = data.length;
  //function to go to the previous index
  const CoverPrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex); //Set new index,looping to the end
  };

  //function to go to the next index
  const CoverNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <div className="carousel">
      <NavLink to={/accommodation/ + data[index].id}>
        <img
          src={arrowLeft}
          alt="fleche location précédente"
          onClick={CoverPrevious}
          className="arrowLeft"
          key={data.id}
        />
      </NavLink>

      <NavLink to={/accommodation/ + data[index].id}>
        <img
          src={arrowRight}
          alt="fleche location suivante"
          onClick={CoverNext}
          className="arrowRight"
        />
      </NavLink>

      <img key={data[index].id} src={data[index].cover} alt={data.title} />
      <p>{index + 1 + "/" + length}</p>
    </div>
  );
};

export default Slideshow;
