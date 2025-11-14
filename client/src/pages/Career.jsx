import AnimePoster from "../assets/anime-poster.png";
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
  },
  {
    icon: <FaFileAlt className="text-yellow-400 text-5xl mb-4 mx-auto" />,
    title: "DOCUMENTS",
    highlight: "DOWNLOAD",
  },
  {
    icon: <FaUserGraduate className="text-yellow-400 text-5xl mb-4 mx-auto" />,
    title: "TOPPER",
    highlight: "CANDIDATES",
  },
  {
    icon: <FaFolderOpen className="text-yellow-400 text-5xl mb-4 mx-auto" />,
    title: "DIGITAL",
    highlight: "RESOURCES",
  },
];

const Career = () => {
  return (
    <section className="w-full min-h-screen mx-auto mt-30 md:mt-18 text-white">
      <div
        className="w-full h-90 bg-cover bg-[50%] [filter: grayscale(40%) brightness(30%)]"
        style={{ backgroundImage: `url(${AnimePoster})` }}
      ></div>
      <div className="min-h-70 h-full max-w-4xl mx-auto text-center p-10">
        <h4 className="text-lg md:text-3xl font-semibold">
          We are <span className="text-vivid-red font-bold">RECRUITING</span>
        </h4>
        <h2 className="text-3xl md:text-5xl font-semibold">
          creative & awesome people
        </h2>
        <p className="text-lg font-normal my-10">
          Join our Internship Program and fast-track your growth...! <br />
          We’re onboarding smart, creative learners ready to upskill,
          collaborate, and build real-world projects with{" "}
          <span className="text-light-yellow font-bold">
            Anicomic International
          </span>
          .
        </p>
      </div>
      <div
        className="min-h-screen max-w-screen p-10 text-black bg-cover"
        style={{ backgroundImage: ` url(${paper})` }}
      >
        <h1 className="font-bold text-4xl">
          Our Learning{" "}
          <span className="text-vivid-indigo font-bold">Programs</span>
        </h1>
        <p className="text-lg font-medium my-5">
          Short, practical courses designed to help you learn fast, build real
          skills, and grow with hands-on experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 mx-auto max-w-screen-xl gap-2">
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
        </div>
      </div>
      <div className="text-center py-16 bg-black text-white">
        <h2 className="text-3xl font-bold mb-4">
          Our new <span className="text-bright-red">INTERNSPACE</span>
        </h2>

        <p className="max-w-4xl mx-auto text-gray-300 mb-12">
          One space where interns can access brochures, topper's highlights,
          updates, certificates, and offer letters and more, all organized for
          smooth and easy use.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="max-w-60 border border-white rounded-xl p-8 hover:-translate-y-2 transition duration-200 w-full"
            >
              <span className="mx-auto">{item.icon}</span>
              <h3 className="text-lg font-semibold">
                {item.title}{" "}
                <span className="text-yellow-400 text-2xl font-normal font-logo">
                  {item.highlight}
                </span>
              </h3>
            </div>
          ))}
        </div>
      </div>

      <ContactUs />
    </section>
  );
};

export default Career;
