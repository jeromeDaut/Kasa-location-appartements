import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Gallery = () => {
  // Defining a state variable named data and initializing it with an empty array
  const [data, setData] = useState([]);
  // Fetching data from logements.json file and setting the state variable data with it
  useEffect(() => {
    fetch('/logements.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

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
