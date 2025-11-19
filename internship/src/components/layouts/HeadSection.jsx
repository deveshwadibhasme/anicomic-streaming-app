import { motion } from "framer-motion";
import doodle from '../../assets/doodle-bg.png'

const HeadSection = ({ poster,title,highlighted,subtitle,paragraph,highlightedPara }) => {
  return (
    <>
      <motion.div
        className="w-full h-35 md:h-80 bg-cover bg-bottom md:bg-[60%] [filter: grayscale(40%) brightness(30%)] relative after:absolute after:inset-0 after:bg-black after:opacity-40"
        style={{ backgroundImage: `url(${poster})` }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      ></motion.div>
      <motion.div
        className="min-h-70 h-full max-w-screeen mx-auto text-center p-10 font-subtitle bg-cover w-full font tracking-wider font-medium bg-blend-color-burn"
        style={{ backgroundImage: `url(${doodle})`}}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h4
          className="text-sm md:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title} <span className="text-vivid-red text-sm md:text-2xl">{highlighted}</span>
        </motion.h4>
        <motion.h2
          className="text-xl md:text-5xl font"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {subtitle}.
        </motion.h2>
        <p className="text-[12px] leading-4 md:leading-7 md:text-lg font-normal my-4 md:my-5 font-poppins tracking-wide">
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
