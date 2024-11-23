"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import MainBtn from "../buttons/MainBtn";
import { Virtual } from "swiper/modules";
import { motion } from "framer-motion";
import "./reviwsSlider.scss";
import "swiper/css/virtual";
import "swiper/css";
import { FaStar } from "react-icons/fa";

const ReviwsSlider = () => {
  const slides = Array(10)
    .fill(null)
    .map((_, index) => (
      <>
        <SwiperSlide key={index} virtualIndex={index}>
          <div className="reviw">
            <div className="rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="reviwer">
              <h3>Reviewer Name</h3>
              <span>Posted on {new Date().toLocaleDateString()}</span>
            </div>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                consectetur, risus at elementum faucibus, mauris lacus
                consectetur velit, id dignissim neque nunc vitae velit.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </>
    ));
  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };

  return (
    <>
      <div className="reviwsSlider">
        <h2 className="sliderTitle">Reviws</h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, type: "tween" }}
          viewport={{ once: true, amount: 0.7 }}
          className="sliderContainer"
        >
          <Swiper
            modules={[Virtual]}
            breakpoints={breakpoints}
            virtual
            grabCursor={true}
          >
            {slides?.map((slideContent, index) => {
              return <>{slideContent}</>;
            })}
          </Swiper>
        </motion.div>
      </div>
    </>
  );
};

export default ReviwsSlider;
