import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/anicomic.png";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
import MobileNav from "./MobileNav";
import { FaCaretDown } from "react-icons/fa6";

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
        { title: "Studio", link: "https://anicomic.vercel.app/" },
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
        { title: "Service", link: "https://kraftor.in/services/" },
        { title: "Team", link: "https://kraftor.in/team/" },
        { title: "Contact", link: "https://kraftor.in/contact/" },
      ],
    },
    {
      title: "Internship",
      link: false,
      dropDown: [
        { title: "Internship", link: "https://internship.anicomic.in" },
        {
          title: "Intern Portal",
          link: "/downloads",
        },
        {
          title: "Registration",
          link: "/registration",
        },
      ],
    },
    {
      title: "Career",
      link: "/not-available",
      // dropDown: [
      //   { title: "Internship", link: "/" },
      //   {
      //     title: "Intern Portal",
      //     link: "/downloads",
      //   },
      //   { title: "Registration", link: "/registration" },
      // ],
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

  const [display, setDisplay] = useState();
  const handleMenu = () => {
    setDisplay(!display);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <header className="max-w-screen w-full sticky top-0 z-20 flex justify-between mx-auto bg-black md:bg-gradient-to-t from-0% to-black">
      <Link
        href="https://anicomic.in"
        to={"https://anicomic.in"}
        className="min-h-10 p-1 rounded-lg text-white flex items-center text-lg my-1 mx-3"
      >
        <img src={logo} alt="logo" className="w-35 h-13 object-cover " />
      </Link>

      <nav className="min-w-1/3 w-max text-white flex justify-between ml-auto items-center gap-2 mr-5 z-10">
        {navLink.map((nav, idx) => {
          return (
            <>
              {nav.link ? (
                <Link
                  key={idx}
                  to={nav.link || location.href}
                  className="transition-colors group duration-300 text-center text-semibold gap-1 relative items-center text-sm max-w-80 w-full font-bold px-2 hidden md:flex"
                >
                  {nav.title}
                  {nav.dropDown && <FaCaretDown className="ml-auto" />}
                </Link>
              ) : (
                <div
                  key={idx}
                  className="transition-colors group duration-300 text-center text-semibold gap-1 relative items-center text-sm max-w-80 w-full font-bold px-2 cursor-pointer hidden md:flex"
                >
                  {nav.title}
                  {nav.dropDown && <FaCaretDown className="ml-auto" />}
                  <div key={idx} className="flex flex-col w-[150%] transition-all duration-150 h-0 overflow-hidden absolute top-5 py-2 pt-4 group-hover:h-auto left-auto bg-black/40 gap-1">
                    {nav.dropDown &&
                      nav.dropDown.map((drop, i) => {
                        return (
                          <motion.div
                            href={drop.link}
                            key={i}
                            initial={{ x: -40, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            exit={{ x: -10, opacity: 0.4 }}
                            transition={{ ease: "easeIn", delay: 0.12 * i }}
                            className="w-full p-2 cursor-pointer my-1 text-left hover:bg-bright-red/40"
                          >
                            <Link className="w-full min-w-full" to={drop.link}>
                              {drop?.title}
                            </Link>
                          </motion.div>
                        );
                      })}
                  </div>
                </div>
              )}
            </>
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
