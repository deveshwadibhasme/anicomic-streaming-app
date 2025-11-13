import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import { Project } from "../components/layouts/Project";
import axios from "axios";

const Home = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    axios
      .get("/src/jsons/slides.json")
      .then((result) => setSlides(result.data))
      .catch((error) => {
        console.error("Fetching Error:", error);
      });
  }, []);

  return (
    <>
      <Carousel slides={slides} />
      <Project />
    </>
  );
};

export default Home;
