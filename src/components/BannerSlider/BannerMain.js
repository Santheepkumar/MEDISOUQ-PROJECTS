import React from "react";
import "./bannermain.scss";

export default function BannerMain({
  Name,
  Descrption,
  Price,
  BackGroundImage,
}) {
  return (
    <div className='CardCenter'>
      <img className='CardCenter-Img' src={BackGroundImage} alt='Snow' />
      <div className='CardCenter-Title'>
        <div className='CardCenter-Title-Left'>
          <button className='CardCenter-Title-Left-ButtonTop'>
            Best Sellers
          </button>
          <h1 className='CardCenter-Title-Left-Name'> {Name}</h1>
          <h2 className='CardCenter-Title-Left-Description'>{Descrption}</h2>

          <h4 className='CardCenter-Title-Left-Price'>{Price}</h4>
          <button className='CardCenter-Title-Left-BuyButton'>BUY NOW</button>
        </div>
      </div>
    </div>
  );
}
