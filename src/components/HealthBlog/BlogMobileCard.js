import React from "react";
import "./BlogMobileCard.scss";

export default function BlogMobileMain({ name, date, img, link }) {
  return (
    <div>
      <div className='CardContainer'>
        <div className='CardContainer-Card2'>
          <img className='CardContainer-Card2-Img' src={img} alt='' />
          <h1 className='CardContainer-Card2-Name'>{name}</h1>
          <div className='CardContainer-Card2-Titles'>
            <p className='CardContainer-Card2-Titles-Left'>{date}</p>
            <a className='CardContainer-Card2-Titles-Right' href='/'>
              {link}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
