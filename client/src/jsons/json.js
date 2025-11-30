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
      { title: "Studio", link: "/" },
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
        link: "https://internship.anicomic.in/downloads",
      },
      {
        title: "Registration",
        link: "https://internship.anicomic.in/registration",
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

const projectList = [
    {
        "title":"Inside my Heart",
        "category":"Podcast",
        "language":["Hindi"],
        "poster":"https://originals.anicomic.in/images/imh-poster.png"
    },
    {
        "title":"Arabian Knights",
        "category":"Series",
        "language":["English","Hindi"],
        "poster":"https://originals.anicomic.in/images/arabian-poster.png"
    },
    {
        "title":"The Nightmare",
        "category":"Podcast",
        "language":["Hindi"],
        "poster":"https://originals.anicomic.in/images/nightmare.png"
    },
    {
        "title":"The Unknown",
        "category":"Comic",
        "language":["English"],
        "poster":"https://originals.anicomic.in/images/unknown.png"
    },
    {
        "title":"The Unknown Origins",
        "category":"Movies",
        "language":["English","Hindi"],
        "poster":"https://originals.anicomic.in/images/unorigin-poster.png"
    }
]

import image1 from "../assets/nightmare-bg.png";
import image2 from "../assets/inside-poster.jpg";

const slides = [
  {
    "presentBy": "Anicomic Orignal Podcast",
    "title": "Nightmare",
    "ageLimit": "A / 18+",
    "language": ["Hindi"],
    "category": ["Horror", "Thriller", "Suspense", "Crime"],
    "description": "Hayat’s peaceful life shatters when a brutal murder and ghostly visions pull her into a terrifying mystery. What begins as a strange night turns into the haunting start of death itself.",
    "image": image1
  },
  {
    "presentBy": "Anicomic Orignal Podcast",
    "title": "Inside My Heart",
    "ageLimit": "A / 18+",
    "language": ["English", "Hindi"],
    "category": ["Romance", "Thriller", "HeartFull"],
    "description": "Hayat’s peaceful life shatters when a brutal murder and ghostly visions pull her into a terrifying mystery. What begins as a strange night turns into the haunting start of death itself.",
    "image": image2
  }
]

const courses = [
  {
    id: "krayon",
    title: "Krayon",
    description:
      "Learn design fundamentals step by step. Build skills to create clean and professional visuals.",
    actions: {
      registration: true,
      brochure: true
    },
    gradient: 'bg-gradient-to-r from-black/90 from-5% to-gradient-indigo'
  },
  {
    id: "forged3d",
    title: "Forged 3D",
    description:
      "Understand how 3D models and animation work. Start creating simple scenes in Blender Software.",
    actions: {
      registration: true,
      brochure: true
    },
    gradient: 'bg-gradient-to-r from-black/90 from-5% to-gradient-green'
  },
  {
    id: "theWebwar",
    title: "The Webwar",
    description:
      "From fundamentals and advance to fullstack concepts with live projects in modern web technologies.",
    actions: {
      registration: true,
      brochure: true
    },
    gradient: 'bg-gradient-to-r from-black/90 from-5% to-gradient-green'
  },
  {
    id: "motionSpear",
    title: "Motion Spear",
    description:
      "Master high impact motion design, animation principles, transitions, and visual compositions.",
    actions: {
      registration: true,
      brochure: true
    },
    gradient: 'bg-gradient-to-r from-black/90 from-5% to-gradient-brown'
  },
  {
    id: "codeMania",
    title: "Code Mania",
    description:
      "Programming basics, logic building, and core C/C++ concepts used in software and game development.",
    actions: {
      registration: true,
      brochure: true
    },
    gradient: 'bg-gradient-to-r from-black/90 from-5% to-gradient-blue'
  },
  {
    id: "bladeCut",
    title: "Blade Cut",
    description:
      "Build strong editing skills, visual storytelling flow, and foundation-level VFX techniques for content creation.",
    actions: {
      registration: true,
      brochure: true
    },
    gradient: 'bg-gradient-to-r from-black/90 from-5% to-vivid-red'
  }
];

export { slides, projectList, courses, navLink }
