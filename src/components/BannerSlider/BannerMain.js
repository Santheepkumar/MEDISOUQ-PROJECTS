import React from "react";
import "./BannerMain.scss";

export default function BannerMain({ Name, Descrption, Price, Image }) {
  return (
    <div href='https://www.google.co.in' className='CardsComponent-CardCenter'>
      <div className='CardsComponent-CardCenter-ImageContainer'>
        <img
          className='Image'
          src='https://png.pngtree.com/background/20210711/original/pngtree-green-background-material-picture-picture-image_1131429.jpg'
          alt='Snow'
        />
      </div>
      <div className='CardsComponent-CardCenter-Title'>
        <div className='CardsComponent-CardCenter-Title-Left'>
          <button className='CardsComponent-CardCenter-Title-Left-ButtonTop'>
            Best Sellers
          </button>
          <h1 className='CardsComponent-CardCenter-Title-Left-Name'>{Name}</h1>
          <h2 className='CardsComponent-CardCenter-Title-Left-Description'>
            {Descrption}
          </h2>

          <h4 className='CardsComponent-CardCenter-Title-Left-Price'>
            {Price}
          </h4>
          <button className='CardsComponent-CardCenter-Title-Left-BuyButton'>
            BUY NOW
          </button>
        </div>
      </div>
      <p className='CardsComponent-CardCenter-Dot'>. . . .</p>
    </div>
  );
}
