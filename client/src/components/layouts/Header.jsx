import React, { useEffect, useState } from "react";
import { getImage } from "../../utils/get-image";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/anicomic-logo.png";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
import MobileNav from "./MobileNav";

const Header = () => {
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

  const [title, setTitle] = useState();
  const [display,setDisplay] = useState()
  const handleMenu = () =>{
    setDisplay(!display)
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-screen w-full sticky top-0 z-20 flex justify-between mx-auto bg-gradient-to-t from-0% to-black"
    >
      <Link
        onClick={() => setTitle("Anicomic")}
        href="https://anicomic.in"
        to={"https://anicomic.in"}
        className="w-48 min-h-18 p-1 rounded-lg text-white flex gap-1 items-center text-lg"
      >
        <img src={logo} alt="logo" className="w-15 h-full object-cover " />
        <span className="font-logo uppercase">{title || "Anicomic"}</span>
      </Link>

      <nav className="min-w-1/3 w-max text-white flex justify-between ml-auto items-center gap-2 mr-5">
        {navLink.map((nav, i) => {
          return (
            <Link
              onClick={() =>
                setTitle(nav.title === "Career" ? "Internship" : nav.title)
              }
              key={i}
              to={nav.link}
              className=" hover:text-red-700 hidden md:block to-10% transition-colors duration-300 p-2 px-3"
            >
              {nav.title}
            </Link>
          );
        })}
        <MobileNav handleMenu={handleMenu} display={display} setTitle={setTitle} setDisplay={setDisplay} />
        <span onClick={handleMenu} className="block md:hidden ml-auto">
          <FaBars className="text-4xl" />
        </span>
      </nav>

      {/* <div className="flex justify-between items-center min-w-25 w-fit">
        <Link
          to={"/contact"}
          className="px-1 md:px-3 py-px md:py-1 text-sm font-semibold md:text-sm rounded-lg bg-btn text-white outline-none flex-center uppercase hover:scale-105 transition-transform duration-100 cursor-pointer"
        >
          Sign In
        </Link>
      </div> */}
    </motion.header>
  );
};

export default Header;
