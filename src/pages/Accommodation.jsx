import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import DropDown from "../components/dropdown/DropDown";
import InfoAccommadation from "../components/infoAccommodation/InfoAccommadation";
import Slideshow from "../components/slideShow/Slideshow";

const Accommodation = () => {
  // Scroll to the top of the page on component
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  // Get the current location and parameters from the URL using hooks
  const location = useLocation();
  const params = useParams();
  // Check if there is data in the location state, otherwise find the accommodation with the matching ID
  const data = location.state ?? {logement : location.find((logements) =>logements.id === params.id)};

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
  
  try {
    logement = data.logement;

    title = logement.title;
    tags = logement.tags;
    logLocation = logement.location;
    description = logement.description;
    slides = logement.pictures;
    rating = logement.rating;
    name = logement.host.name;
    picture = logement.host.picture;

    // Map over the equipments and create a list of li elements
    equipments = logement.equipments.map((equi, index) => (
      <li key={index}>{equi}</li>
      ));

  } catch (error) {
    window.location.href = "/Erreur"
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
          title="Description"
          content={description}
          isList={false}
          open ={true}
        />
        <DropDown
          key="1"
          title="Équipements"
          content={equipments}
          isList={true}
          open={true}
        />
      </section>
    </main>
  );
};

export default Accommodation;
