import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { data } from "../data/logements";
import arrowLeft from "../assets/Images/arrow_back.png";
import arrowRight from "../assets/Images/arrow_right.png";

const Carousel = () => {
  //
  const [index, setIndex] = useState(0);
  const [route, setRoute] = useState(/accommodation/ + data.id);
  const length = data.length;

  const CoverPrevious = () => {
    const newIndex = index - 1;
    const newRoute = `/accommodation/${
      data[newIndex < 0 ? length - 1 : newIndex].id
    }`;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
    setRoute(newRoute);
  };
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
    </div>
  );
};

export default Carousel;
