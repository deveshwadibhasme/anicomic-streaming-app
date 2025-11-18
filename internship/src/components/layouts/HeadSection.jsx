import { motion } from "framer-motion";

const HeadSection = ({ poster,title,highlighted,subtitle,paragraph,highlightedPara }) => {
  return (
    <>
      <motion.div
        className="w-full h-40 md:h-80 bg-cover bg-[90%] [filter: grayscale(40%) brightness(30%)] relative after:absolute after:inset-0 after:bg-black after:opacity-40"
        style={{ backgroundImage: `url(${poster})` }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      ></motion.div>
      <motion.div
        className="min-h-70 h-full max-w-4xl mx-auto text-center p-10 font-subtitle font tracking-wider font-medium"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h4
          className="text-lg md:text-3xl font "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title} <span className="text-vivid-red font">{highlighted}</span>
        </motion.h4>
        <motion.h2
          className="text-3xl md:text-5xl font"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {subtitle}.
        </motion.h2>
        <p className="text-lg font-normal my-10 font-poppins">
          {paragraph}{" "}
          <span className="text-light-yellow font-bold">
            {highlightedPara}.
          </span>
        </p>
      </motion.div>
    </>
  );
};

export default HeadSection;
