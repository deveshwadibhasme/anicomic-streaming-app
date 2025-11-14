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
      <img src={Logo} alt="Anicomic Studio Logo" className="w-44 mb-4" />

      <div className="flex gap-10 max-w-screen-xl w-full justify-between mt-10 flex-wrap">
        <div className="max-w-lg w-full">
          <p className="text-gray-300 leading-relaxed mb-6">
            Anicomic Studio is a creative hub where stories turn into comics,
            movies, podcasts, and animated worlds. We believe in imagination,
            innovation, and bringing fresh narratives to life.
          </p>

          <div className="flex gap-4 text-2xl">
            <FaPhoneAlt className="cursor-pointer hover:text-red-400" />
            <FaMapMarkerAlt className="cursor-pointer hover:text-red-400" />
            <FaGlobe className="cursor-pointer hover:text-red-400" />
            <FaEnvelope className="cursor-pointer hover:text-red-400" />
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Social Media</h3>
          <div className="flex flex-col space-y-2 text-gray-300">
            <Link to="/instagram">Instagram</Link>
            <Link to="/youtube">YouTube</Link>
            <Link to="/twitter">Twitter (X)</Link>
            <Link to="/facebook">Facebook</Link>
            <Link to="/fandom">Fandom</Link>
          </div>
        </div>

        <div>
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

        <div>
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

      <div className="text-center text-gray-400 mt-12 border-t border-gray-700 pt-6">
        © {year} Anicomic Studio. All Rights Reserved.
      </div>
    </footer>
  );
}
