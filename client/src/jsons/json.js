

const projectList = [
    {
        "title": "Inside my Heart",
        "category": "Podcast",
        "language": ["Hindi"],
        "poster": ""
    },
    {
        "title": "The Unknown Origins",
        "category": "Movies",
        "language": ["English", "Hindi"],
        "poster": ""
    },
    {
        "title": "Arabian Knights",
        "category": "Series",
        "language": ["English", "Hindi"],
        "poster": ""
    },
    {
        "title": "The Unknown",
        "category": "Comic",
        "language": ["English"],
        "poster": ""
    },
    {
        "title": "The Nightmare",
        "category": "Podcast",
        "language": ["Hindi"],
        "poster": ""
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
        "category": ["Horror", "Thriller"],
        "description": "Hayat’s peaceful life shatters when a brutal murder and ghostly visions pull her into a terrifying mystery. What begins as a strange night turns into the haunting start of death itself.",
        "image": image2
    }
]

export { slides, projectList }
