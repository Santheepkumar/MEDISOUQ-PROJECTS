import React from "react";
import "./BannerMain.scss";

export default function BannerMain({ Name, Descrption, Price, Image }) {
  return (
    <div className='CardCenter'>
      <div className='CardCenter-ImageContainer'>
        <img
          className='Image'
          src='https://png.pngtree.com/background/20210711/original/pngtree-green-background-material-picture-picture-image_1131429.jpg'
          alt='Snow'
        />
      </div>
      <div className='CardCenter-Title'>
        <div className='CardCenter-Title-Left'>
          <button className='CardCenter-Title-Left-ButtonTop'>
            Best Sellers
          </button>
          <h1 className='CardCenter-Title-Left-Name'>{Name}</h1>
          <h2 className='CardCenter-Title-Left-Description'>
            {Descrption}
          </h2>

          <h4 className='CardCenter-Title-Left-Price'>{Price}</h4>
          <button className='CardCenter-Title-Left-BuyButton'>BUY NOW</button>
        </div>
      </div>
      <p className='CardCenter-Dot'>. . . .</p>
    </div>
  );
}
