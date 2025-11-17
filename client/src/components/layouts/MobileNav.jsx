import React, { useEffect, useState } from "react";
import { getImage } from "../../utils/get-image";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/anicomic-logo.png";
import { FaBox, FaPlusCircle } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const MobileNav = ({ display, handleMenu, setTitle }) => {
  const navLink = [
    {
      title: "Showcase",
      link: "/",
    },
    {
      title: "Kraftor",
      link: "https://kraftor.in",
    },
    {
      title: "Career",
      link: "https://internship.anicomic.in",
    },
    {
      title: "Contact",
      link: "/contact-us",
    },
    {
      title: "About",
      link: "/",
    },
    {
      title: "Help",
      link: "/",
    },
  ];

  return (
    <AnimatePresence mode="wait">
      {display && (
        <motion.nav
          initial={{ y: -100, opacity: 0.4 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0.4 }}
          transition={{ ease: "easeIn" }}
          key="nav-bar"
          className="w-full fixed top-0 left-0 h-full bg-amber-50/90 text-white flex flex-col justify-center items-center gap-4"
        >
          {navLink.map((nav, i) => {
            return (
              <Link
                onClick={() =>
                  setTitle(nav.title === "Career" ? "Internship" : nav.title)
                }
                key={i}
                to={nav.link}
                className=" hover:text-red-700 bg-gradient-red transition-colors duration-300 text-center py-2 px-20  rounded-2xl text-bold text-lg"
              >
                {nav.title}
              </Link>
            );
          })}
          <span onClick={handleMenu} className="absolute top-10 right-5 rotate-45">
            <FaPlusCircle className="text-5xl text-gradient-red" />
          </span>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
