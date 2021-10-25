import React from "react";
import "./BannergridSample.scss";
import BannerSlider from "./BannerSlider";

export default function BannerGridSample() {
  return (
    <div className='CardsComponent'>
      <div className='CardsComponent-CardLeft'>
        <div className='CardsComponent-CardLeft-TopContainer'>
          <img
            className='CardsComponent-CardLeft-TopContainer-Img'
            src='Images/download.jpg'
            alt='Snow'
          />
        </div>
      </div>
      <div className='CardsComponent-CardCenter'>
        <BannerSlider />
      </div>

      <div className='CardsComponent-CardRight'>
        <img
          className='CardsComponent-CardRight-Img'
          src='Images/download.jpg'
          alt='Snow'
        />
      </div>
      <div className='CardsComponent-CardBottomLeft'>
        <img
          className='CardsComponent-CardBottomLeft-ImgMain'
          src='Images/importance-of-nutrition.jpg'
          alt='importance-of-nutrition.jpg'
        />
      </div>
      <div className='CardsComponent-CardBottomRight'>
        <img
          className='CardsComponent-CardBottomRight-Img'
          src='Images/forticare-bg2.jpg'
          alt='forticare-bg2.jpg'
        />
      </div>
    </div>
  );
}
