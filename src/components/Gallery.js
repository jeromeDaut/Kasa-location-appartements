import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Gallery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/logements.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <section className="gallery">
      {data.map((item) => (
        <NavLink
          to={`/accommodation/${item.id}`}
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
