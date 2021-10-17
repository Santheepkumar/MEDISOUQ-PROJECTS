import React from "react";
import "./BannergridSample.scss";
import BannerSlider from "./BannerSlider";

export default function BannerGridSample() {
  return (
    <div className='CardsComponent'>
      <div className='CardsComponent-CardLeft'>
        <div className='CardsComponent-CardLeft-TopContainer'>
          {/* <button className='CardsComponent-CardLeft-TopContainer-Button'>
            SALE
          </button> */}
          <img
            className='CardsComponent-CardLeft-TopContainer-Img'
            src='Images/download.jpg'
            alt='Snow'
          />
        </div>
        {/* <div className='CardsComponent-CardLeft-Titles'>
          <h1 className='CardsComponent-CardLeft-Titles-Name'>
            Mustela Moistrurising Baby Lotion 300 ML
          </h1>
          <div className='CardsComponent-CardLeft-Titles-Price'>
            <h1 className='CardsComponent-CardLeft-Titles-Price-Left'>
              AED 60.00
            </h1>
            <h1 className='CardsComponent-CardLeft-Titles-Price-Right'>
              AED 50.00
            </h1>
          </div>

          <button className='CardsComponent-CardLeft-Titles-Button'>
            BUY NOW
          </button>
        </div> */}
      </div>
      <BannerSlider />

      <div className='CardsComponent-CardRight'>
        <img
          className='CardsComponent-CardRight-Img'
          src='Images/download.jpg'
          alt='Snow'
        />
        <div className='CardsComponent-CardRight-TopContainer'>
          {/* <button className='CardsComponent-CardRight-TopContainer-Button'>
            NEW
          </button> */}
        </div>
        {/* <div className='CardsComponent-CardRight-Titles'>
          <h1 className='CardsComponent-CardRight-Titles-Name'>
            ORS Strawberry Soluble Tablets 12's
          </h1>
          <button className='CardsComponent-CardRight-Titles-Button'>
            BUY NOW
          </button>
        </div> */}
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
          src='images/forticare-bg2.jpg'
          alt='forticare-bg2.jpg'
        />
        <div className='CardsComponent-CardBottomRight-Main'>
          {/* <div className='CardsComponent-CardBottomRight-Main-Titles'>
            <h1>Stay In Charge With Forticate</h1>
            <p>41.75 AED</p>
            <button>BUYNOW</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
