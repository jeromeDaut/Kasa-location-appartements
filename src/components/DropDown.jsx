import React, { useState } from "react";
import arrowUp from "../assets/Images/arrow_up.png";
import arrowDown from "../assets/Images/arrow_down.png";

const DropDown = ({ title, content, isList = false }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className="dropDown">
      <div className="dropDown__header" onClick={toggleOpen}>
        <h3 className="dropDown__title">{title}</h3>
        {isOpen ? (
          <img src={arrowUp} alt="fermé" />
        ) : (
          <img src={arrowDown} alt="ouvert" />
        )}
      </div>
      {/* {isOpen && <p className="dropDown__content">{paragraph}</p>} */}
      {isList === true
        ? isOpen && <ul className="dropDown__content">{content}</ul>
        : isOpen && <p className="dropDown__content">{content}</p>}
    </article>
  );
};

export default DropDown;
