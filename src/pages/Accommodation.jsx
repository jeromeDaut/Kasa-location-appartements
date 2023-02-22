import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import DropDown from "../components/DropDown";
import InfoAccommadation from "../components/InfoAccommadation";
// import Rating from "../components/Rating";
import Slideshow from "../components/Slideshow";

const Accommodation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const location = useLocation();
  const data = location.state;

  let logement = null;
  let title = null;
  let tags = null;
  let logLocation = null;
  let rating = null;
  let description = null;
  let equipments = null;
  let slides = [];
  let name = null;
  let picture = null;
  console.log(rating);
  try {
    logement = data.logement;

    title = logement.title;
    tags = logement.tags;
    logLocation = logement.location;
    description = logement.description;

    rating = logement.rating;
    console.log(rating);

    name = logement.host.name;
    picture = logement.host.picture;

    equipments = logement.equipments.map((equi, index) => (
      <li key={index}>{equi}</li>
    ));
    slides = logement.pictures;
  } catch (error) {
    console.log("no state");
  }
  return (
    <main>
      <Slideshow slidesList={slides} />

      <InfoAccommadation
        title={title}
        tags={tags}
        location={logLocation}
        rating={rating}
        name={name}
        picture={picture}
      />
      {/* <Rating /> */}

      <section className="dropDownAccommodation">
        <DropDown
          key="0"
          title="description"
          content={description}
          isList={false}
        />
        <DropDown
          key="1"
          title="equipements"
          content={equipments}
          isList={true}
        />
      </section>
    </main>
  );
};

export default Accommodation;
