import Skeleton from "./layouts/Skeleton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTelevision,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const TabSwitcher = () => {
  const tabs = [
    {
      link: "/live",
      icon: faTelevision,
      label: "Live",
    },
    {
      link: "/contact-us",
      icon: faPhone,
      label: "Contact Us",
    },
  ];

  const { pathname } = useLocation();

  return (
    <>
      {(
        <Skeleton
          width={"w-full"}
          height={"h-full"}
          borderRadius={"rounded-lg"}
        />
      ) && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="max-w-6xl 2xl  :max-w-7xl items-center w-full h-20 flex gap-4 justify-between mx-auto py-2 overflow-x-auto px-2"
        >
          <Link
            to={"/"}
            className={`w-30 h-10 shrink-0 gap-2 rounded-full text-white border-1 
          ${pathname === "/" ? "border-white" : "border-white/15"} 
          flex-center`}
          >
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </Link>
          <div className="flex gap-4">
          {tabs.map((tab, index) => (
            <Link
              to={tab.link}
              key={index}
              className={`h-10 gap-2 px-4 py-3 rounded-lg text-white/50 hover:text-white cursor-pointer border-1  
          ${pathname === `${tab.link}` ? "border-white" : "border-white/15"} 
          flex-center`}
            >
              <FontAwesomeIcon icon={tab.icon} />
              <span className="text-sm font-normal">{tab.label}</span>
            </Link>
          ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default TabSwitcher;
