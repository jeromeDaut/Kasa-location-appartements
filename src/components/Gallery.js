import axios from "axios";
import React, { useEffect } from "react";

const Gallery = () => {
  // axios
  useEffect(() => {
    axios.get("/logements.json").then((res) => console.log(res.data));
  }, []);

  return <div className="gallery"></div>;
};

export default Gallery;
