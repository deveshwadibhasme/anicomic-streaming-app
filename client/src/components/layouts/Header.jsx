import React from "react";
import { getImage } from "../../utils/get-image";
import { Link } from "react-router-dom";

const Header = () => {
  const navLink = [
    {
      title: "Showcase",
      link: "/showcase",
    },
    {
      title: "Career",
      link: "/career",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Contact",
      link: "/contact",
    },
    {
      title: "Help",
      link: "/help",
    },
  ];

  return (
    <header className="max-w-screen w-full fixed top-0 left-1/2 -translate-x-1/2 z-20 flex flex-col md:flex-row justify-between mx-auto bg-gradient-to-t from-0% to-black">
      <div className="w-48 min-h-18 p-1 rounded-lg text-white flex gap-1 items-center text-lg font-bold">
        <img
          src={getImage("/icons/anicomic-logo.png")}
          alt="logo"
          className="w-15 h-full object-cover"
        />
        <span className="font-logo">Anicomic</span>
      </div>

      <nav className="min-w-1/2 w-max text-white flex justify-between ml-auto items-center gap-2 mr-5">
        {navLink.map((nav, i) => {
          return (
            <Link
              key={i}
              to={nav.link}
              className="bg-gradient-to-t from-white hover:from-red-700 to-10% transition-colors duration-300 p-2 px-3"
            >
              {nav.title}
            </Link>
          );
        })}
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
