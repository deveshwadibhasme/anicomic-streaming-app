import { getImage } from "../utils/get-image";

const navLink = [
  {
    title: "Home",
    link: "/",
    dropDown: false,
  },
  {
    title: "Studio",
    link: false,
    dropDown: [
      { title: "Studio", link: "http://originals.anicomic.in/" },
      { title: "Character", link: "http://originals.anicomic.in/character" },
      { title: "Comic", link: "http://originals.anicomic.in/comic" },
      { title: "Podcast", link: "http://originals.anicomic.in/podcast" },
      { title: "Live Action", link: "http://originals.anicomic.in/live-action" },
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
      { title: "Internship", link: "/" },
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


// import k from 'https://internship.anicomic.in/image/7.png'
// import f from 'https://internship.anicomic.in/image/2.png'
// import w from 'https://internship.anicomic.in/image/4.png'
// import m from 'https://internship.anicomic.in/image/5.png'
// import c from 'https://internship.anicomic.in/image/1.png'
// import b from 'https://internship.anicomic.in/image/6.png'

const courses = [
  {
    id: "krayon",
    title: "Krayon",
    description:
      "Learn design fundamentals step by step. Build skills to create clean and professional visuals.",
    actions: {
      registration: '/registration',
      brochure: true
    },
    gradient: 'bg-gradient-to-r from-black/90 from-5% to-gradient-indigo',
    image: getImage('7.png')
  },
  {
    id: "forged3d",
    title: "Forged 3D",
    description:
      "Understand how 3D models and animation work. Start creating simple scenes in Blender Software.",
    actions: {
      registration: '/registration',
      brochure: true
    },
    gradient: 'bg-gradient-to-r from-black/90 from-5% to-gradient-brown',
    image: getImage('2.png')
  },
  {
    id: "theWebwar",
    title: "The Webwar",
    description:
      "From fundamentals and advance to fullstack concepts with live projects in modern web technologies.",
    actions: {
      registration: '/registration',
      brochure: true
    },
    gradient: 'bg-gradient-to-r from-black/90 from-5% to-gradient-green',
    image: getImage('4.png')
  },
  {
    id: "motionSpear",
    title: "Motion Spear",
    description:
      "Master high impact motion design, animation principles, transitions, and visual compositions.",
    actions: {
      registration: '/registration',
      brochure: true
    },
    gradient: 'bg-gradient-to-r from-black/90 from-5% to-gradient-brown',
    image: getImage('5.png')
  },
  {
    id: "codeMania",
    title: "Code Mania",
    description:
      "Programming basics, logic building, and core C/C++ concepts used in software and game development.",
    actions: {
      registration: '/registration',
      brochure: true
    },
    gradient: 'bg-gradient-to-r from-black/90 from-5% to-gradient-blue',
    image: getImage('1.png')
  },
  {
    id: "bladeCut",
    title: "Blade Cut",
    description:
      "Build strong editing skills, visual storytelling flow, and foundation-level VFX techniques for content creation.",
    actions: {
      registration: '/registration',
      brochure: true
    },
    gradient: 'bg-gradient-to-r from-black/90 from-5% to-vivid-red',
    image: getImage('6.png')
  }
];

export { courses, navLink }
