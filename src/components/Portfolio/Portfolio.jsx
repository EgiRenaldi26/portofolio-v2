import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import css from "../../img/SERTIFIKAT CSS.jpg";
import html from "../../img/SERTIFIKAT HTML.jpg";
import php from "../../img/php.jpeg";
import sql from "../../img/SERTIFIKAT SQL.png";
import hackerrank from "../../img/SERTIFIKAT HACKER RANK.jpg";
import kominfo from "../../img/SERTIFIKAT KOMINFO.jpg";
import mbs from "../../img/SERIFIKAT 2.png";
import hilo from "../../img/hilo.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>My Achivement</span>
      <span>...</span>

      {/* slider */}
      <Swiper
        spaceBetween={180}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={css} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={html} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={php} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sql} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hackerrank} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={kominfo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mbs} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hilo} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
