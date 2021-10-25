// Import Swiper React Components
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import BannerMain from "./BannerMain";
import "swiper/swiper-bundle.css";

// swiper core styles
// import "swiper/css";

// modules styles
// import "swiper/css/navigation";
// import "swiper/css/pagination";

const BannerSlider = () => {
  SwiperCore.use([Navigation]);

  const bannerProps = {
    Name: "Anaphase+",
    Descrption: " Shampooing complement antichute",
    Price: "145.00 AED",
    Image:
      "https://images.pexels.com/photos/3041110/pexels-photo-3041110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  };

  return (
    <div className='CardsCenter'>
      {/* <button className='prev'>Prev</button>
      <button className='next'>Next</button> */}

      <Swiper
        style={{
          width: "100%",
        }}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}>
        <SwiperSlide>
          <BannerMain {...bannerProps} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerMain {...bannerProps} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerMain {...bannerProps} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
