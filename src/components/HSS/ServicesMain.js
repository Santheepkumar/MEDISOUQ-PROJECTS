import React from "react";

export default function ServicesMain() {
  return (
    <div className="CardMain">
      <div className='CardMain-Card'>
        <img
          className='CardMain-Card-Img'
          src='./Images/download.jpeg'
          alt='Show'
        />
        <div className='CardMain-Card-Titles'>
          <h1 className='CardMain-Card-Titles-Name'>
            Antibody Test AT-Home
          </h1>
          <h1 className='CardMain-Card-Titles-Price'>
            Start From AED 1439
          </h1>
          <button className='CardMain-Card-Titles-Button'>
            KNOW MORE
          </button>
        </div>
      </div>
      <div className='CardMain-Card'>
        <img
          className='CardMain-Card-Img'
          src='./Images/download.jpeg'
          alt='Show'
        />
        <div className='CardMain-Card-Titles'>
          <h1 className='CardMain-Card-Titles-Name'>
            Antibody Test AT-Home
          </h1>
          <h1 className='CardMain-Card-Titles-Price'>
            Start From AED 1439
          </h1>
          <button className='CardMain-Card-Titles-Button'>
            KNOW MORE
          </button>
        </div>
      </div>
    </div>
  );
}
