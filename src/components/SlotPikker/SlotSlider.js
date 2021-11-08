import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "./SlotSlider.scss";

import "react-datepicker/dist/react-datepicker.css";

import "swiper/swiper-bundle.css";

export default function SlotSlider() {
  SwiperCore.use([Navigation]);

  return (
    <div className='SlotSlider'>
      <div className='SlotSlider-DateMain'>
        <p className='SlotSlider-DateMain-Title'> Select Date Of Service</p>
        <DateMain />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='SlotSlider-SlotSliderMain-DateMain-Svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
          />
        </svg>
      </div>
      <div className='SlotSlider-SlotSliderMain'>
        <p className='SlotSlider-SlotSliderMain-Title'>
          Select Time Of Service
        </p>
        <div className='SlotSlider-SlotSliderMain-ImgContainer'>
          <button className='prev'>
            <svg
              className='SlotSlider-SlotSliderMain-ImgContainer-Svg'
              xmlns='http://www.w3.org/2000/svg'
              width='31'
              height='20'
              stroke=''
              fill='#456999'
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
          <button className='next'>
            <svg
              className='SlotSlider-SlotSliderMain-ImgContainer-Svg'
              xmlns='http://www.w3.org/2000/svg'
              width='31'
              height='20'
              fill='#456999'
              stroke=''
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
          <DateSlider />
        </SwiperSlide>
        <SwiperSlide>
          <DateSlider />
        </SwiperSlide>
        <SwiperSlide>
          <DateSlider />
        </SwiperSlide>
        <SwiperSlide>
          <DateSlider />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

function DateSlider() {
  return (
    <div>
      <div className='DateSlider'>23/10/2002</div>
    </div>
  );
}

const DateMain = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};
