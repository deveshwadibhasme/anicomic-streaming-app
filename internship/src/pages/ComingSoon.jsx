import { motion } from "framer-motion";
import { FaRocket, FaClock, FaTools } from "react-icons/fa";
import AnimePoster from "../assets/anime-poster.png"; // Assuming you have an anime poster image

const ComingSoon = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${AnimePoster})` }}
    >
      <div className="absolute inset-0 bg-black opacity-90"></div>
      <motion.div
        className="relative z-10 text-center p-8 max-w-2xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-3xl md:text-7xl font-bold mb-4 font-subtitle tracking-wider"
          variants={itemVariants}
        >
          <span className="text-light-yellow">Coming</span> Soon!
        </motion.h1>
        <motion.p
          className="text-sm md:text-2xl mb-8 font-poppins"
          variants={itemVariants}
        >
          We're working hard to bring you something amazing. Stay tuned!
        </motion.p>

        <motion.div
          className="flex justify-center items-center space-x-8 mb-12"
          variants={itemVariants}
        >
          <motion.div
            className="flex flex-col items-center"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaRocket className="text-4xl md:text-5xl text-blue-400 mb-2" />
            <p className="text-sm md:text-lg font-semibold">Launching Soon</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaClock className="text-4xl md:text-5xl text-green-400 mb-2" />
            <p className="text-sm md:text-lg font-semibold">Stay Tuned</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaTools className="text-4xl md:text-5xl text-yellow-400 mb-2" />
            <p className="text-sm md:text-lg font-semibold">Under Development</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4"
          variants={itemVariants}
        >
          <motion.a
            href="mailto:info@anicomic.in"
            className="bg-vivid-red text-white px-6 py-3 rounded-full text-sm md:text-lg font-semibold hover:bg-red-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.a>
          <motion.a
            href="https://anicomic.in" // Replace with your main website link
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm md:text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Visit Our Main Website
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ComingSoon;