import React from "react";
import { NavLink } from "react-router-dom";
import { data } from "../data/logements";

const Gallery = () => {
  return (
    <section className="gallery">
      {data.map((item, index) => (
        <NavLink
          to={/accommodation/ + item.id}
          state={{ logement: data[index] }}
          className="card"
          key={item.id}
        >
          <img src={item.cover} alt={item.title} />
          <h3>{item.title}</h3>
        </NavLink>
      ))}
    </section>
  );
};

export default Gallery;
