import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import { Project } from "../components/layouts/Project";
import axios from "axios";
import { slides } from "../jsons/json";
import RecruitingCta from "../components/layouts/RecruitingCta";

const Home = () => {
  const [slide, setSlides] = useState([]);

  useEffect(() => {
    axios
      .get("/src/jsons/slides.json")
      .then((result) => {
        if (Array.isArray(result.data) && result.data.length > 0) {
          setSlides(result.data);
        }
        setSlides(slides);
      })
      .catch((error) => {
        console.error("Fetching Error:", error);
        setSlides(slides)
      });
  }, []);

  return (
    <>
      <Carousel slides={slide} />
      <Project />
      <RecruitingCta /> 
    </>
  );
};

export default Home;
