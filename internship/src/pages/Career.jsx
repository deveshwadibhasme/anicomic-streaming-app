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

import ContactUs from './ContactUs'

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
  return (
    <section className="w-full min-h-screen mx-auto mt-30 md:mt-18 text-white overflow-hidden">
      <motion.div
        className="w-full h-90 bg-cover bg-[50%] [filter: grayscale(40%) brightness(30%)] relative after:absolute after:inset-0 after:bg-black after:opacity-40"
        style={{ backgroundImage: `url(${AnimePoster})` }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      ></motion.div>
      <motion.div
        className="min-h-70 h-full max-w-4xl mx-auto text-center p-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h4
          className="text-lg md:text-3xl font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          We are <span className="text-vivid-red font-bold">RECRUITING</span>
        </motion.h4>
        <motion.h2
          className="text-3xl md:text-5xl font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          creative & awesome people
        </motion.h2>
        <p className="text-lg font-normal my-10">
          Join our Internship Program and fast-track your growth...! <br />
          We’re onboarding smart, creative learners ready to upskill,
          collaborate, and build real-world projects with{" "}
          <span className="text-light-yellow font-bold">
            Anicomic International
          </span>
          .
        </p>
      </motion.div>
      <motion.div
        className="min-h-screen max-w-screen p-10 text-black bg-cover"
        style={{ backgroundImage: ` url(${paper})` }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1
          className="font-bold text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Our Learning{" "}
          <span className="text-vivid-indigo font-bold">Programs</span>
        </motion.h1>
        <motion.p
          className="text-lg font-medium my-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Short, practical courses designed to help you learn fast, build real
          skills, and grow with hands-on experience.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 mx-auto max-w-screen-xl gap-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {courses.map((course) => {
            return (
              <div
                key={course.id}
                className="max-w-80 min-h-50 h-full grid grid-rows-2 rounded-2xl overflow-hidden border ml-auto md:mx-auto"
              >
                <img src="/" className="row-span-0 bg-red-50" alt="" />
                <div
                  className={`p-3 grid grid-rows-0 min-h-40 ${course.gradient}`}
                >
                  <h3 className="row-span-0 font-bold text-light-yellow">
                    {course.title}
                  </h3>
                  <p className="row-span-0 text-white font-light text-sm">
                    {course.description}
                  </p>
                  <div className="row-span-0 ml-auto">
                    {Object.keys(course.actions).map((btn) => (
                      <button
                        key={btn}
                        className="p-1 text-sm font-semibold rounded-xl ml-2 text-black capitalize bg-white"
                      >
                        {btn}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
      <motion.div
        className="text-center py-16 bg-black text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Our new <span className="text-bright-red">INTERNSPACE</span>
        </motion.h2>

        <motion.p
          className="max-w-4xl mx-auto text-gray-300 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          One space where interns can access brochures, topper's highlights,
          updates, certificates, and offer letters and more, all organized for
          smooth and easy use.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-6">
          {items.map((item, idx) => {
            const delay = 0.2 + idx * 0.1; // Staggered delay for each item
            return (
              <motion.a
                key={idx}
                href={item.link}
                className="max-w-60 border border-white rounded-xl p-8 hover:-translate-y-2 transition duration-200 w-full text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.5,
                  delay: delay,
                  ease: "easeOut",
                }}
              >
                <span className="mx-auto">{item.icon}</span>
                <h3 className="text-lg font-semibold">
                  {item.title}{" "}
                  <span className="text-yellow-400 text-xl font-normal font-logo">
                    {item.highlight}
                  </span>
                </h3>
              </motion.a>
            );
          })}
        </div>
      </motion.div>

      {/* <ContactUs /> */}
    </section>
  );
};

export default Career;
