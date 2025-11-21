import { motion } from "framer-motion";
import { courses } from "../../jsons/json";
import { Link } from "react-router-dom";

const ProgramSlider = () => {
  return (
    <motion.div
      className="min-h-auto block md:hidden max-w-screen p-3 md:p-10 text-black bg-white"
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
        <span className="text-vivid-indigo font-bold">Programs</span>
      </motion.h1>
      <motion.p
        className="text-[12px] font-medium my-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        Short, practical courses designed to help you learn fast, build real
        skills, and grow with hands-on experience.
      </motion.p>
      <motion.div
        className="flex flex-shrink-0 mx-auto max-w-screen-xl w-full gap-y-5 gap-x-3 overflow-x-auto"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        {courses.map((course, idx) => {
        //   const x = idx % 2 === 0 ? -10 : 10;
          return (
            <motion.div
              initial={{ y: -10 }}
              whileInView={{ y: 0 }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4 }}
              viewport={{ amount: 0.4 }}
              key={course.id}
              className="max-w-45 flex-shrink-0 min-h-30 md:min-h-60 h-55 md:h-full grid grid-rows-2 rounded-2xl overflow-hidden border mx-auto md:mx-auto ring-1 ring-offset-vivid-red shadow-vivid-indigo"
            >
              <img
                src={course.image}
                className="row-span-0 bg-red-50 h-full w-full"
                alt=""
              />
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
                  {Object.entries(course.actions).map(([key,value], idx) => (
                    <Link
                    to={value}
                      key={key}
                      className={`p-1 text-[8px] -mt-4 border-1 inline-block md:text-[12px] font-semibold rounded-xl  ml-1 capitalize ${
                        idx === 0
                          ? "bg-white text-black "
                          : "bg-transparent text-white"
                      }`}
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
  );
};

export default ProgramSlider;
