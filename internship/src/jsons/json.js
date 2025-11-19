import k from '../assets/7.png'
import f from '../assets/2.png'
import w from '../assets/4.png'
import m from '../assets/5.png'
import c from '../assets/1.png'
import b from '../assets/6.png'

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
    gradient: 'bg-gradient-to-r from-black/90 from-5% to-gradient-indigo',
    image:k
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
    gradient: 'bg-gradient-to-r from-black/90 from-5% to-gradient-brown',
    image:f
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
    gradient: 'bg-gradient-to-r from-black/90 from-5% to-gradient-green',
    image:w
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
    gradient: 'bg-gradient-to-r from-black/90 from-5% to-gradient-brown',
    image:m
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
    gradient: 'bg-gradient-to-r from-black/90 from-5% to-gradient-blue',
    image:c
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
    gradient: 'bg-gradient-to-r from-black/90 from-5% to-vivid-red',
    image:b
  }
];

export { courses}
