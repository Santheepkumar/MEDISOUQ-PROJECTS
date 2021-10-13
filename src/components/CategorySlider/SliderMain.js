import React from "react";
import "./SliderMain.scss";
export default function SliderMain() {
  return (
    <div className='CardMain'>
      <div className='CardMain-Card'>
        <img
          className='CardMain-Card-Img'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD9ilOkSVAo5L3ldzmNyfAT9yTCpFa6H_xag&usqp=CAU'
          alt='Show'
        />
        <h1 className='CardMain-Card-Name'>Personal Care</h1>
      </div>
      <div className='CardMain-Card'>
        <img
          className='CardMain-Card-Img'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD9ilOkSVAo5L3ldzmNyfAT9yTCpFa6H_xag&usqp=CAU'
          alt='Show'
        />
        <h1 className='CardMain-Card-Name'>Bady Care</h1>
      </div>
      <div className='CardMain-Card'>
        <img
          className='CardMain-Card-Img'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD9ilOkSVAo5L3ldzmNyfAT9yTCpFa6H_xag&usqp=CAU'
          alt='Show'
        />
        <h1 className='CardMain-Card-Name'>Nutrition</h1>
      </div>
      <div className='CardMain-Card'>
        <img
          className='CardMain-Card-Img'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD9ilOkSVAo5L3ldzmNyfAT9yTCpFa6H_xag&usqp=CAU'
          alt='Show'
        />
        <h1 className='CardMain-Card-Name'>Healthcare Devices</h1>
      </div>
    </div>
  );
}
