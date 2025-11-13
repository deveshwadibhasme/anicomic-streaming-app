import { useEffect, useState } from "react";
import axios from "axios";
import { projectList } from "../../jsons/json";

export const Project = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    axios
      .get("/src/jsons/project-list.json")
      .then((result) => {
        if (result) {
          setProjectData(result.data);
        }
        setProjectData(projectList);
      })
      .catch((error) => {
        console.error("Fetching Error:", error);
      });
  }, []);

  return (
    <section className="m-5 mx-auto">
      <h1 className="text-white font-bold text-3xl uppercase m-2">
        Featured Projects
      </h1>
      <div className="max-w-screen-xl min-h-80 m-2 w-full overflow-x-auto flex items-center gap-2 justify-start p-10 ">
        {projectData.map((project) => {
          return (
            <div
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
            </div>
          );
        })}
      </div>
    </section>
  );
};
