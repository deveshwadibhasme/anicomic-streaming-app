import { useEffect, useState } from "react";
import axios from "axios";
import { projectList } from "../../jsons/json";
import { motion } from "framer-motion";

export const Project = () => {
  const [projectData, setProjectData] = useState(projectList);

  useEffect(() => {
    axios
      .get("/src/jsons/project-list.json")
      .then((result) => {
        if (Array.isArray(result.data) && result.data.length > 0) {
          setProjectData(result.data);
        } else {
          setProjectData(projectList);
        }
      })
      .catch((error) => {
        console.error("Fetching Error:", error);
        setProjectData(projectList);
      });
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="m-5 mx-auto"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8}}
        className="text-white font-bold text-3xl uppercase m-2"
      >
        Featured Projects
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-screen-xl min-h-80 m-2 w-full overflow-x-auto flex items-center gap-4 justify-start p-10 "
      >
        {projectData.map((project) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              key={project.title}
              className="min-h-80 max-w-50 w-full grid grid-rows-3 text-white flex-shrink-0 overflow-hidden"
            >
              <img
                src={project.poster || "/"}
                className="h-full w-full row-span-4 object-cover border-1 border-red-400"
                alt=""
              />
              <h6 className="row-span-0 p-2 font-bold">{project.title}</h6>
              <div className="row-span-1 text-xs text-gray-300">
                <span className="px-1">{project.category} |</span>
                <span className="">{project.language?.join(", ")}</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
};
