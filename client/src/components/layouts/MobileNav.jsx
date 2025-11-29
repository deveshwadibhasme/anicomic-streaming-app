import React, { useEffect, useState } from "react";
import { getImage } from "../../utils/get-image";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/anicomic-logo.png";
import { FaAngleDoubleDown, FaBox, FaPlusCircle } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { FaCaretDown, FaCaretRight } from "react-icons/fa6";

const MobileNav = ({ display, handleMenu, setDisplay }) => {
  const navLink = [
    {
      title: "Home",
      link: "/",
      dropDown: false,
    },
    {
      title: "Showcase",
      link: false,
      dropDown: [
        { title: "Studio", link: "https://anicomic.vercel.app" },
        { title: "Character", link: "/character" },
        { title: "Comic", link: "/comic" },
        { title: "Podcast", link: "/podcast" },
        { title: "Live Action", link: "/live-action" },
      ],
    },
    {
      title: "Kraftor",
      link: false,
      dropDown: [
        { title: "Kraftor Service", link: "https://kraftor.in/services/" },
        { title: "Kraftor Team", link: "https://kraftor.in/team/" },
        { title: "Kraftor Contact", link: "https://kraftor.in/contact/" },
      ],
    },
    {
      title: "Internship",
      link: false,
      dropDown: [
        { title: "Internship", link: "https://internship.anicomic.in" },
        {
          title: "Intern Portel",
          link: "https://internship.anicomic.in/downloads",
        },
        { title: "Registration", link: "/not-available" },
      ],
    },
    {
      title: "Contact",
      link: "/contact-us",
      dropDown: false,
    },
    {
      title: "About",
      link: "/not-available",
      // dropDown: [
      //   { title: "Character", link: "/character" },
      //   { title: "Comic", link: "/comic" },
      // ],
    },
    {
      title: "Help",
      link: "/not-available",
      dropDown: false,
    },
  ];

  const [drop, setDrop] = useState({ drop: false, idx: "" });

  return (
    <AnimatePresence mode="wait">
      {display && (
        <motion.nav
          initial={{ y: -100, opacity: 0.4 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0.4 }}
          transition={{ ease: "easeIn" }}
          key="nav-bar"
          className="w-full fixed top-0 left-0 h-full bg-black/20 backdrop-blur-lg text-white flex flex-col justify-start pt-24 items-center gap-2 overflow-y-auto"
        >
          {navLink.map((nav, idx) => {
            return (
              <>
                <Link
                  key={idx}
                  to={nav.link || location.href}
                  onClick={() => {
                    setDrop({ drop: !drop.drop, idx: idx });
                    if (!nav.dropDown) setDisplay(!display);
                  }}
                  className="bg-red-800/50 transition-colors duration-300 text-center py-2 px-4  rounded-2xl text-bold text-lg max-w-80 flex items-center  gap-3 w-full upperacase  font-semibold"
                >
                  {nav.title}
                  {nav.dropDown && <FaCaretDown className="ml-auto" />}
                </Link>
                <div className="flex flex-col w-[40%] max-h-60 transition-all duration-150 h-auto">
                  {nav.dropDown &&
                    drop.drop &&
                    drop.idx === idx &&
                    nav.dropDown.map((drop, i) => {
                      return (
                        <motion.a
                          href={drop.link}
                          key={i}
                          initial={{ x: -40, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: -10, opacity: 0.4 }}
                          transition={{ ease: "easeIn", delay: 0.12 * i }}
                          className="bg-bright-red/40 w-full p-2 rounded-xl cursor-pointer my-1"
                          onClick={() => setDisplay(!display)}
                        >
                          <Link className="w-full min-w-full" to={drop.link}>
                            {drop?.title}
                          </Link>
                        </motion.a>
                      );
                    })}
                </div>
              </>
            );
          })}
          <span
            onClick={handleMenu}
            className="absolute top-10 right-5 rotate-45"
          >
            <FaPlusCircle className="text-xl" />
          </span>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
