import React, { useRef } from "react"; // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../../../assets/images/slider/slide1.jpg";
import slider2 from "../../../assets/images/slider/slide2.jpg";
import slider3 from "../../../assets/images/slider/slide3.jpg";
import slider4 from "../../../assets/images/slider/slide4.jpg";
import "./Banner.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import BannerContent from "./BannerContent";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
            <BannerContent image={slider1}></BannerContent>
          </SwiperSlide>
          <SwiperSlide>
            <BannerContent image={slider3}></BannerContent>
          </SwiperSlide>
          <SwiperSlide>
            <BannerContent image={slider2}></BannerContent>
          </SwiperSlide>
          <SwiperSlide>
            <BannerContent image={slider4}></BannerContent>
          </SwiperSlide>

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </>
    </>
  );
};

export default Banner;
