import React, { useEffect, useState } from "react";
import { getImage } from "../../utils/get-image";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/internship.jpg";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
import MobileNav from "./MobileNav";

const Header = () => {
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
        { title: "Character", link: "/character" },
        { title: "Comic", link: "/comic" },
        { title: "Podcast", link: "/podcast" },
        { title: "Live Action", link: "/live-action" },
      ],
    },
    {
      title: "Kraftor",
      link: "https://kraftor.in",
      dropDown: [
        { title: "Kraftor Service", link: "https://kraftor.in/services/" },
        { title: "Kraftor Team", link: "https://kraftor.in/team/" },
        { title: "Kraftor Contact", link: "https://kraftor.in/contact/" },
      ],
    },
    {
      title: "Internship",
      link: "https://internship.anicomic.in",
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

  const [title, setTitle] = useState();
  const [display, setDisplay] = useState();
  const handleMenu = () => {
    setDisplay(!display);
  };

  return (
    <header className="max-w-screen w-full sticky top-0 z-20 flex justify-between mx-auto bg-black md:bg-gradient-to-t from-0% to-black">
      <Link
        onClick={() => setTitle("Anicomic")}
        href="https://anicomic.in"
        to={"https://anicomic.in"}
        className="min-h-10 p-1 rounded-lg text-white flex items-center text-lg my-1"
      >
        <img src={logo} alt="logo" className="w-35  h-full object-cover " />
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
              className=" hover:text-red-700 font-semibold hidden md:block to-10% transition-colors duration-300 p-2 px-3"
            >
              {nav.title}
            </Link>
          );
        })}
        <MobileNav
          setDisplay={setDisplay}
          handleMenu={handleMenu}
          display={display}
        />
        <span onClick={handleMenu} className="block md:hidden ml-auto -mr-2">
          <FaBars className="text-2xl" />
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
    </header>
  );
};

export default Header;
