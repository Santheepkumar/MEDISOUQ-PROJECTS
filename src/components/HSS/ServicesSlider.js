// Import Swiper React components
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "./ServicesSlider.scss";
import ServiceCard from "./ServiceCard";

import "swiper/swiper-bundle.css";

// swiper core styles
// import "swiper/css";

// modules styles
// import "swiper/css/navigation";
// import "swiper/css/pagination";

const PopularCategory = () => {
  SwiperCore.use([Navigation]);

  return (
    <div className='HSSMain'>
      <div className='HSSMain-HSS'>
        <div className='HSSMain-HSS-Top'>
          <h1 className='HSSMain-HSS-Top-Title'>Home Healthcare Services</h1>
          <div className='HSSMain-HSS-Top-Img'>
            <button className='HSSMain-HSS-Top-Img-Left'>
              <svg
                className='prev'
                xmlns='http://www.w3.org/2000/svg'
                width='31'
                height='20'
                viewBox='0 0 31 20'>
                <path
                  id='Left_arrow'
                  data-name='Left arrow'
                  class='cls-1'
                  d='M1456,2584h28a1,1,0,0,1,0,2h-28A1,1,0,0,1,1456,2584Zm7.32-8.71-9.03,9.03a0.983,0.983,0,1,0,1.39,1.39l9.03-9.03A0.983,0.983,0,1,0,1463.32,2575.29Zm-7.64,9,9.03,9.03a0.983,0.983,0,1,1-1.39,1.39l-9.03-9.03A0.983,0.983,0,1,1,1455.68,2584.29Z'
                  transform='translate(-1454 -2575)'
                />
              </svg>
            </button>
            <button className='next HSSMain-HSS-Top-Img-Right'>
              <svg
                className=''
                xmlns='http://www.w3.org/2000/svg'
                width='31'
                height='20'
                viewBox='0 0 31 20'>
                <path
                  id='Right_arrow'
                  data-name='Right arrow'
                  class='cls-1'
                  d='M1505,2584h28a1,1,0,0,1,0,2h-28A1,1,0,0,1,1505,2584Zm20.68-8.71,9.03,9.03a0.983,0.983,0,1,1-1.39,1.39l-9.03-9.03A0.983,0.983,0,1,1,1525.68,2575.29Zm7.64,9-9.03,9.03a0.983,0.983,0,1,0,1.39,1.39l9.03-9.03A0.983,0.983,0,1,0,1533.32,2584.29Z'
                  transform='translate(-1504 -2575)'
                />
              </svg>
            </button>
          </div>
        </div>

        <Swiper
          style={{}}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          spaceBetween={50}
          breakpoints={{
            1000: {
              slidesPerView: 3,
            },
            811: {
              slidesPerView: 2,
            },
            10: {
              slidesPerView: 1,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}>
          <SwiperSlide>
            <ServiceCard />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceCard />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PopularCategory;