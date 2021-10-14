import React from "react";
import "./ProductCategoryCard.scss";
export default function ProductCategoryCard({ name }) {
  return (
    <div className='CardCategory'>
      <div href='https://www.google.co.in' className='CardMain-Card'>
        <img
          className='CardCategory-Card-Img'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD9ilOkSVAo5L3ldzmNyfAT9yTCpFa6H_xag&usqp=CAU'
          alt='Show'
        />
        <h1 className='CardCategory-Card-Name'>{name}</h1>
      </div>
    </div>
  );
}
