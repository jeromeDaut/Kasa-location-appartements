import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { data } from "../data/logements";
import arrowLeft from "../assets/Images/arrow_back.png";
import arrowRight from "../assets/Images/arrow_right.png";

const Carousel = () => {
  //Declare state variables for the current indes and route
  const [index, setIndex] = useState(0);
  const [route, setRoute] = useState(`/accommodation/${data.id}`);
  const length = data.length;
  //function to go to the previous index
  const CoverPrevious = () => {
    const newIndex = index - 1;
    const newRoute = `/accommodation/${
      data[newIndex < 0 ? length - 1 : newIndex].id
    }`;

    setIndex(newIndex < 0 ? length - 1 : newIndex); //Set new index,looping to the end
    setRoute(newRoute); //Set the new route
  };

  //function to go to the next index
  const CoverNext = () => {
    const newIndex = index + 1;
    const newRoute = `/accommodation/${
      data[newIndex >= length ? 0 : newIndex].id
    }`;
    setIndex(newIndex >= length ? 0 : newIndex);
    setRoute(newRoute);
  };

  return (
    <div className="carousel">
      <NavLink to={route}>
        <img
          src={arrowLeft}
          alt="fleche location précédente"
          onClick={CoverPrevious}
          className="arrowLeft"
          key={data.id}
        />
      </NavLink>

      <NavLink to={route}>
        <img
          src={arrowRight}
          alt="fleche location suivante"
          onClick={CoverNext}
          className="arrowRight"
        />
      </NavLink>
      <img src={data[index].cover} alt={data.title} />
      <p>{index + 1 + "/" + data.length}</p>
    </div>
  );
};

export default Carousel;
