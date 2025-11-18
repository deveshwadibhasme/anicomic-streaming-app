import { motion } from "framer-motion";
import AnimePoster from "../assets/anime-city.png";
import { useState } from "react";
import HeadSection from "../components/layouts/HeadSection";
import FilteredSearch from "../components/FilteredSearch";
import { FaDownload } from "react-icons/fa";

const Download = () => {
  const [data, setData] = useState();

  return (
    <section className="w-full min-h-screen mx-auto mt-2 text-white overflow-hidden">
      <HeadSection
        poster={AnimePoster}
        title={"Here you can"}
        highlighted={"DOWNLOAD"}
        subtitle={"certificate & offer letter"}
        paragraph={`Access your certificate and offer letter effortlessly…!
        Simply select your internship, choose your batch, and pick your deck — your documents will be ready for`}
        highlightedPara={"download instantly"}
      />

      <FilteredSearch setData={setData} />

      {data && data.length > 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-x-auto max-w-6xl mx-auto p-4 bg-white rounded-lg shadow-lg"
        >
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-white/20">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-bold text-vivid-indigo uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-sm font-bold text-vivid-indigo  uppercase tracking-wider"
                >
                  Roll No
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-sm font-bold text-vivid-indigo  uppercase tracking-wider"
                >
                  Certificate
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-sm font-bold text-vivid-indigo  uppercase tracking-wider"
                >
                  Offer Letter
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-700">
              {data.map((item, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.2 }}
                  className="hover:bg-black/20"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-bright-red">
                    {item.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-bright-red">
                    {item.rollNo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-400 hover:text-blue-300">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <FaDownload className="mr-1" /> Download
                      </a>
                    ) : (
                      <span className="text-gray-500">#</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-400 hover:text-blue-300">
                    {item.linkTwo ? (
                      <a
                        href={item.linkTwo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <FaDownload className="mr-1" /> Download
                      </a>
                    ) : (
                      <span className="text-gray-500">#</span>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      ) : (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-gray-400 text-lg"
        >
          Please select a batch to view intern data.
        </motion.p>
      )}
    </section>
  );
};

export default Download;
