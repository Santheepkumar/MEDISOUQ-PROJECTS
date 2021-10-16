// Import Swiper React components
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "./BlogMobileSlider.scss";
//import BlogCard from "./BlogCard";
import BlogMobileCard from "./BlogMobileCard";
import "swiper/swiper-bundle.css";

// swiper core styles
// import "swiper/css";

// modules styles
// import "swiper/css/navigation";
// import "swiper/css/pagination";

const BlogSlider = () => {
  SwiperCore.use([Navigation]);

  const CardMobileProps = {
    name: "What is a pcr test and why should you take one?",
    date: "jan, 9,11:45 am",
    link: " Read More",
    img: "https://image.shutterstock.com/image-vector/glade-forest-nature-landscape-3d-260nw-675639673.jpg",
  };
  return (
    <div className='HealthBlog'>
      <div class='HealthBlog-Top'>
        <h1 class='HealthBlog-Top-LeftName'>Health Blog</h1>
        <div class='HealthBlog-Top-RightContainer'>
          <h1 class='HealthBlog-Top-RightContainer-ViewAll'>ViewAll</h1>
          <div class='HealthBlog-Top-RightContainer-Arrow'>
            <svg
              class='Blogprev HealthBlog-Top-RightContainer-Arrow-ArrowLeft'
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
            <svg
              class='Blogprev HealthBlog-Top-RightContainer-Arrow-ArrowRight'
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
          </div>
        </div>
      </div>

      <Swiper
        style={{}}
        navigation={{
          prevEl: ".Blogprev",
          nextEl: ".Blognext",
        }}
        spaceBetween={50}
        breakpoints={{
          1000: {
            slidesPerView: 4,
          },
          811: {
            slidesPerView: 2,
          },
          10: {
            slidesPerView: 1,
          },
        }}
        // slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}>
        <SwiperSlide>
          <BlogMobileCard {...CardMobileProps} />
        </SwiperSlide>
        <SwiperSlide>
          <BlogMobileCard {...CardMobileProps} />
        </SwiperSlide>
        <SwiperSlide>
          <BlogMobileCard {...CardMobileProps} />
        </SwiperSlide>
        <SwiperSlide>
          <BlogMobileCard {...CardMobileProps} />
        </SwiperSlide>
        <SwiperSlide>
          <BlogMobileCard {...CardMobileProps} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BlogSlider;
