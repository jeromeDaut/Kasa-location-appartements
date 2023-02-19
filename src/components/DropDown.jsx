import React from "react";
import { data } from "../data/logements";

const Collapsible = () => {
  return (
    <section className="dropDown">
      {data.map((item) => (
        <div key={item.id} className="dropDown__container">
          <button className="dropDown__container--btn">{item.title}</button>
          <article className="dropDown__container--article">
            <p>{item.description}</p>
          </article>
        </div>
      ))}
    </section>
  );
};

export default Collapsible;
