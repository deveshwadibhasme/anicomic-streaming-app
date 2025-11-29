import lampMan from "../../assets/lamp-man.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const RecruitingCta = () => {
  return (
    <div
      style={{ backgroundImage: `url(${lampMan})` }}
      className="bg-contain bg-right bg-no-repeat max-w-screen min-h-80 md:min-h-screen md:h-full w-full z-10"
    >
      <motion.div
        initial={{ opacity: 0.2 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        className="bg-gradient-to-r from-30% md:from-60% from-black to-80% md:to-90% w-full h-full max-w-screen min-h-90 md:min-h-screen flex items-center justify-center gap-5 flex-col pl-2 md:pl-20"
      >
        <motion.h1
          initial={{ opacity: 0.2, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="font-title text-white text-3xl md:text-4xl max-w-xl mr-auto"
        >
          We are
          <br /> <span className="text-bright-red">RECRUITING</span> creative &
          awesome people
        </motion.h1>
        <motion.p
          initial={{ opacity: 0.2, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="text-sm text-white mr-auto max-w-2xl"
        >
          We’d love to hear from you! Click below on Career and share your
          resume. Don’t forget to tell us a little about yourself—we want to get
          to know you.
        </motion.p>
        <div className="w-1/2 min-h-20 flex items-center mr-auto gap-3">
          <Link
            className="max-w-30 md:text-lg md:min-h-10 text-center py-1 md:pt-1.5 text-sm font-bold bg-light-yellow hover:bg-light-yellow/60 hover:text-white rounded-2xl w-full"
            to={"/not-available"}
          >
            Career
          </Link>
          <Link
            className="max-w-30 md:text-lg md:min-h-10 text-center py-1 md:pt-1.5 text-sm font-bold bg-light-yellow hover:bg-light-yellow/60 hover:text-white rounded-2xl w-full"
            to={"https://internship.anicomic.in"}
          >
            Internship
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default RecruitingCta;
