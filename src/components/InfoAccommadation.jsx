import React from "react";
import { data } from "../data/logements";

const InfoAccommadation = () => {
  // const [index, setIndex] = useState(0);
  return (
    <section>
      {data.map((item) => (
        <div className="info" key={item.id}>
          <h3 className="info__title">{item.title}</h3>
          <p className="info__location">{item.location}</p>
          <div className="info__tags">
            {item.tags.map((tag) => (
              <span key={tag} className="info__tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default InfoAccommadation;
