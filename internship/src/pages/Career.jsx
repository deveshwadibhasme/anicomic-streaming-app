import AnimePoster from "../assets/anime-poster.png";
import { motion } from "framer-motion";
import { courses } from "../jsons/json";
import paper from "../assets/white-paper.png";

import {
  FaBookOpen,
  FaFileAlt,
  FaUserGraduate,
  FaFolderOpen,
} from "react-icons/fa";

import ContactUs from "./ContactUs";
import HeadSection from "../components/layouts/HeadSection";
import ProgramSlider from "../components/layouts/ProgramSlider";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const items = [
  {
    icon: <FaBookOpen className="text-yellow-400 text-5xl mb-4 mx-auto" />,
    title: "COURSE",
    highlight: "BROCHURE",
    link: "/",
  },
  {
    icon: <FaFileAlt className="text-yellow-400 text-5xl mb-4 mx-auto" />,
    title: "DOCUMENTS",
    highlight: "DOWNLOAD",
    link: "/downloads",
  },
  {
    icon: <FaUserGraduate className="text-yellow-400 text-5xl mb-4 mx-auto" />,
    title: "TOPPER",
    highlight: "CANDIDATES",
    link: "/",
  },
  {
    icon: <FaFolderOpen className="text-yellow-400 text-5xl mb-4 mx-auto" />,
    title: "DIGITAL",
    highlight: "RESOURCES",
    link: "/",
  },
];

const Career = () => {

   useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },[]);

  return (
    <section className="w-full min-h-screen mx-auto  text-white overflow-hidden">
      
      <HeadSection
        poster={AnimePoster}
        title={"We are"}
        highlighted={"RECRUITING"}
        subtitle={"creative & awesome people"}
        paragraph={`Join our Internship Program and fast-track your growth...!
          We’re onboarding smart, creative learners ready to upskill,
          collaborate, and build real-world projects with`}
        highlightedPara={"Anicomic International"}
      />

      <motion.div
        className="min-h-screen hidden md:block max-w-screen p-3 md:p-10 text-black bg-white"
        // style={{ backgroundImage: ` url(${paper})` }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-3xl font-subtitle font tracking-wider font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          Our Learning{" "}
          <span className="text-vivid-indigo font-bold uppercase">Programs</span>
        </motion.h1>
        <motion.p
          className="text-[10px] md:text-sm font-medium my-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          Short, practical courses designed to help you learn fast, build real
          skills, and grow with hands-on experience.
        </motion.p>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 mx-auto max-w-screen-xl gap-y-5 gap-x-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          {courses.map((course, idx) => {
            const x = idx % 2 === 0 ? -10 : 10;
            return (
              <motion.div
                initial={{ x: x }}
                whileInView={{ x: 0 }}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.4 }}
                viewport={{ amount: 0.4 }}
                key={course.id}
                className="max-w-80 min-h-30 md:min-h-60 h-55 md:h-full grid grid-rows-2 rounded-2xl overflow-hidden border mx-auto md:mx-auto ring-1 ring-offset-vivid-red shadow-vivid-indigo"
              >
                <img src={course.image} className="row-span-0 bg-red-50 h-full w-full" alt="" />
                <div
                  className={`p-2 grid grid-cols-0 min-h-28 md:min-h-40 ${course.gradient}`}
                >
                  <h3 className="row-span-0 font-bold text-light-yellow text-xs md:text-lg">
                    {course.title}
                  </h3>
                  <p className="row-span-0 text-white font-light text-[8px] md:text-sm">
                    {course.description}
                  </p>
                  <div className="row-span-0 ml-auto">
                    {Object.entries(course.actions).map(([key,value],idx) => (
                      <Link
                      to={value}
                        key={key}
                        className={`p-1 text-[8px] -mt-4 border-1 inline-block md:text-[12px] font-semibold rounded-xl  ml-1 capitalize ${idx === 0 ? 'bg-white text-black ': 'bg-transparent text-white'}`}
                      >
                        {key}
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      <ProgramSlider />

      <motion.div
        className="text-center py-4 bg-black text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="textsm md:text-2xl font-subtitle font tracking-wider font-medium mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Our new <span className="text-bright-red">INTERNSPACE</span>
        </motion.h2>

        <motion.p
          className="max-w-3xl w-full mx-auto text-gray-300 mb-12 px-3 font-poppins text-[10px] md:text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          One space where interns can access brochures, topper's highlights,
          updates, certificates, and offer letters and more, all organized for
          smooth and easy use.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 items-center mx-auto max-w-lg md:max-w-3xl w-full p-2 justify-center md:gap-x-5 gap-y-5">
          {items.map((item, idx) => {
            const delay = 0.2 + idx * 0.1;
            return (
              <Link
                key={idx}
                to={item.link}
                className="max-w-40 md:max-w-60 mx-auto min-h-30 border border-white rounded-xl p-3 hover:-translate-y-2 transition duration-200 w-full text-center"
              >
                <span className="mx-auto text-xs">{item.icon}</span>
                <h3 className="text-sm md:text-lg font-semibold text-center flex flex-col items-center justify-center">
                  <span>{item.title}</span>
                  <span className="text-yellow-400 text-sm lg:text-xl font-subtitle font tracking-wider font-medium">
                    {item.highlight}
                  </span>
                </h3>
              </Link>
            );
          })}
        </div>
      </motion.div>

      {/* <ContactUs /> */}
    </section>
  );
};

export default Career;
