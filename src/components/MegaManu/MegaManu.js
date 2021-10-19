import React from "react";
import "./MegaMenu.scss";

export default function MegaManu() {
  return (
    <div className='Body'>
      <div className='Body-MegaMenu'>
        <div className='Body-MegaMenu-Menu'>
          <h1 className='Body-MegaMenu-Menu-HeaderName'>Baby Nutriction</h1>
          <div className='Body-MegaMenu-Menu-LinkContainer'>
            <div className='Body-MegaMenu-Menu-LinkContainer' href='/'>
              Baby Medial Nutriction
            </div>
          </div>
        </div>
        <div className='Body-MegaMenu-Menu'>
          <h1 className='Body-MegaMenu-Menu-HeaderName'>Feeding & Nursing</h1>
          <div className='Body-MegaMenu-Menu-LinkContainer'>
            <div className='Body-MegaMenu-Menu-LinkContainer-Link' href='/'>
              Breast Feeding Aid
            </div>
            <div className='Body-MegaMenu-Menu-LinkContainer-Link' href='/'>
              Botties & Accessories
            </div>
            <div className='Body-MegaMenu-Menu-LinkContainer-Link' href='/'>
              Bottle Cleaning & Accessories
            </div>
            <div className='Body-MegaMenu-Menu-LinkContainer-Link' href='/'>
              Nipples & Teats
            </div>
            <div className='Body-MegaMenu-Menu-LinkContainer-Link' href='/'>
              Steriliser & Food Warner
            </div>
            <div className='Body-MegaMenu-Menu-LinkContainer-Link' href='/'>
              Baby & Kids Utensils
            </div>
            <div className='Body-MegaMenu-Menu-LinkContainer-Link' href='/'>
              Sippers & spout
            </div>
            <div className='Body-MegaMenu-Menu-LinkContainer-Link' href='/'>
              Teether & Spothers
            </div>
            <div className='Body-MegaMenu-Menu-LinkContainer-Link' href='/'>
              Pacifiers
            </div>
            <div className='Body-MegaMenu-Menu-LinkContainer-Link' href='/'>
              Slicon Bib
            </div>
            <div className='Body-MegaMenu-Menu-LinkContainer-Link' href='/'>
              Cups & Trains
            </div>
            <div className='Body-MegaMenu-Menu-LinkContainer-Link' href='/'>
              Gift Sets
            </div>
          </div>
        </div>
        <div className='Body-MegaMenu-Menu'>
          <h1 className='Body-MegaMenu-Menu-HeaderName'>Diapers & Wipers</h1>
          <div className='Body-MegaMenu-Menu-LinkContainer'>
            <div className='Body-MegaMenu-Menu-LinkContainer-Link' href='/'>
              Baby Diapers
            </div>
            <div className='Body-MegaMenu-Menu-LinkContainer-Link' href='/'>
              Diaper Rash Cream
            </div>
            <div className='Body-MegaMenu-Menu-LinkContainer-Link' href='/'>
              Diaper Bags
            </div>
            <div className='Body-MegaMenu-Menu-LinkContainer-Link' href='/'>
              Wipes
            </div>
            <div className='Body-MegaMenu-Menu-LinkContainer-Link' href='/'>
              Diaper Bags
            </div>
            <div className='Body-MegaMenu-Menu-LinkContainer-Link' href='/'>
              Potty Training
            </div>
          </div>
        </div>
        <div className='Body-MegaMenu-Menu'>
          <h1 className='Body-MegaMenu-Menu-HeaderName'>Both & Skin Care</h1>
          <div className='Body-MegaMenu-Menu-LinkContainer'>
            <div className='Body-MegaMenu-Menu-LinkContainer-Link' href='/'>
              Bath Gel, Soaps & Shampoo
            </div>
            <div className='Body-MegaMenu-Menu-LinkContainer-Link' href='/'>
              Cream & Lotion
            </div>
            <div className='Body-MegaMenu-Menu-LinkContainer-Link' href='/'>
              Powder
            </div>
            <div className='Body-MegaMenu-Menu-LinkContainer-Link' href='/'>
              Laundery Detergents & Soap
            </div>
            <div className='Body-MegaMenu-Menu-LinkContainer-Link' href='/'>
              Bath Tub And Acceries
            </div>
            <div className='Body-MegaMenu-Menu-LinkContainer-Link' href='/'>
              Grooming
            </div>
            <div className='Body-MegaMenu-Menu-LinkContainer-Link' href='/'>
              Sun Protection Oil
            </div>
          </div>
        </div>
        <div className='Body-MegaMenu-MainContainer'>
          <div className='Body-MegaMenu-MainContainer-Main1'>
            <img
              className='Body-MegaMenu-MainContainer-Main1-Img'
              src='data:image/jpeg;base64,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'
              alt='Snow'
            />
            <div className='Body-MegaMenu-MainContainer-Main1-Titles'>
              <h1 className='Body-MegaMenu-MainContainer-Main1-Titles-Name'>
                Medela
              </h1>
              <h1 className='Body-MegaMenu-MainContainer-Main1-Titles-Description'>
                Pump & Save
              </h1>
              <button className='Body-MegaMenu-MainContainer-Main1-Titles-Button'>
                BUY NOW
              </button>
            </div>
          </div>
          <div className='Body-MegaMenu-MainContainer-Main2'>
            <img
              className='Body-MegaMenu-MainContainer-Main2-Img'
              src='data:image/jpeg;base64,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'
              alt=''
            />
            <div className='Body-MegaMenu-MainContainer-Main2-Titles'>
              <h1 className='Body-MegaMenu-MainContainer-Main2-Titles-Name'>
                NutriniDrink
              </h1>
              <button className='Body-MegaMenu-MainContainer-Main2-Titles-Button'>
                BUY NOW
              </button>
            </div>
          </div>
          <div className='Body-MegaMenu-MainContainer-Main3'>
            <img
              className='Body-MegaMenu-MainContainer-Main3-Img'
              src='data:image/jpeg;base64,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'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
}
