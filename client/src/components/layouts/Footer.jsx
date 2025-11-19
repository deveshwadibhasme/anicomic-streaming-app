import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGlobe,
  FaEnvelope,
} from "react-icons/fa";
import Logo from "../../assets/icons/anicomic.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-5 px-8 md:px-16 flex flex-col">
      <img src={Logo} alt="Anicomic Studio Logo" className="w-40 md:w-44" />

      <div className="flex gap-10 max-w-screen-xl w-full justify-between md:mt-10 flex-wrap">
        <div className="max-w-lg w-full">
          <p className="text-gray-300 text-sm md:text-lg leading-relaxed mb-6">
            <b>Anicomic Studio </b>is a creative hub where stories turn into comics,
            movies, podcasts, and animated worlds. We believe in imagination,
            innovation, and bringing fresh narratives to life.
          </p>

          <h5 className="text-sm block mb-2 font-bold">For More Contact Us</h5>
          <div className="flex gap-2 md:text-2xl">
            <FaPhoneAlt className="cursor-pointer bg-[#c1ff72] p-1 rounded-full text-2xl text-black hover:text-red-400" />
            <FaMapMarkerAlt className="cursor-pointer bg-light-yellow p-1 rounded-full text-2xl text-black hover:text-red-400" />
            <FaGlobe className="cursor-pointer bg-[#38b6ff] p-1 rounded-full text-2xl text-black hover:text-red-400" />
            <FaEnvelope className="cursor-pointer bg-[#ff6d81] p-1 rounded-full text-2xl text-black hover:text-red-400" />
          </div>
        </div>

        <div className="hidden md:block">
          <h3 className="font-semibold text-lg mb-4">Social Media</h3>
          <div className="flex flex-col space-y-2 text-gray-300">
            <Link to="/instagram">Instagram</Link>
            <Link to="/youtube">YouTube</Link>
            <Link to="/twitter">Twitter (X)</Link>
            <Link to="/facebook">Facebook</Link>
            <Link to="/fandom">Fandom</Link>
          </div>
        </div>

        <div className="hidden md:block">
          <h3 className="font-semibold text-lg mb-4">Quick Link</h3>
          <div className="flex flex-col space-y-2 text-gray-300">
            <Link to="/">Home</Link>
            <Link to="/showcase">Showcase</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/help">Help & FAQ</Link>
          </div>
        </div>

        <div className="hidden md:block">
          <h3 className="font-semibold text-lg mb-4">Projects</h3>
          <div className="flex flex-col space-y-2 text-gray-300">
            <Link to="/project/nightmare">Nightmare</Link>
            <Link to="/project/inside-my-heart">Inside my heart</Link>
            <Link to="/project/arabian-knights">Arabian Knights</Link>
            <Link to="/project/the-unknown">The Unknown</Link>
            <Link to="/project/aniplay-headshot">Aniplay! Headshot</Link>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-12 border-t border-gray-700 pt-2 text-sm">
        © {year} Anicomic Studio. All Rights Reserved.
      </div>
    </footer>
  );
}