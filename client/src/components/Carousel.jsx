import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import image from "../assets/nightmare-bg.png";

const Carousel = ({ slides }) => {
  return (
    <motion.section
      initial={{ y: 30, opacity: 0.2 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-screen min-h-40"
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="rounded-lg shadow-lg text-white w-screen h-screen"
      >
        {slides.length > 0 &&
          slides.map((data, index) => (
            <SwiperSlide
              className="w-screen h-screen relative mr-0"
              style={{ marginRight: 0 }}
              key={index}
            >
              <div className="absolute flex flex-col pl-5 justify-center text-center md:text-left items-center md:items-start z-10 text-white min-h-60 h-full max-w-4xl w-full bg-gradient-to-r from-black to-80%">
                <div className="present-by uppercase font-serif mb-2 text-sm">
                  {data.presentBy}
                </div>
                <div className="title font-bold font-logo uppercase text-6xl">
                  {data.title}
                </div>
                <div className="basic-info text-sm md:text-lg my-2 flex gap-4 border-1 w-fit px-2">
                  <span className="age-limit">{data.ageLimit}</span>
                  <span className="lang">{data.language.join(", ")}</span>
                  <span className="catagory">{data.category.join(", ")}</span>
                </div>
                <div className="descrption max-w-xl">{data.description}</div>
                <a className="link-to my-3 p-2 bg-bright-red w-fit">
                  Listen Now on Spotify
                </a>
              </div>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="h-screen w-full rounded-lg"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </motion.section>
  );
};

export default Carousel;
