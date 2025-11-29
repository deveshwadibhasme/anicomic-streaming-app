import { motion } from "framer-motion";
import { getImage } from "../../utils/get-image";


const HeadSection = ({ poster,title,highlighted,subtitle,paragraph,highlightedPara }) => {
  return (
    <>
      <motion.div
        className="w-full h-35 sm:h-60 lg:h-80 bg-cover bg-center md:bg-[50%] [filter: grayscale(40%) brightness(30%)] relative after:absolute after:inset-0 after:bg-black after:opacity-40"
        style={{ backgroundImage: `url(${poster})` }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      ></motion.div>
      <motion.div
        className="min-h-40 md:min-h-70 h-full max-w-screeen mx-auto text-center p-10 font-subtitle bg-cover w-full font tracking-wider font-medium bg-blend-color-burn"
        style={{ backgroundImage: `url(${getImage('doodle-bg.png')})`}}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h4
          className="text-sm md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title} <span className="text-vivid-red text-sm md:text-xl">{highlighted}</span>
        </motion.h4>
        <motion.h2
          className="text-xl md:text-4xl font"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {subtitle}.
        </motion.h2>
        <p className="text-[12px] leading-4 md:leading-7 md:text-sm mx-auto max-w-xl font-normal mt-2 md:my-5 font-poppins tracking-wide">
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
