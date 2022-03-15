import React from 'react';
import './Cards.css';
import Carditem from './Carditem';

function Cards() {
  return (
    <div className='cards'>
        <h1>
            Check out these EPIC Destinations!
        </h1>
             <div className='cards_container'>
                 <div className='cards__wrapper'>
                     <ul className='cards_items'>
                          <Carditem />
                      </ul>
                 </div>
             </div>
    </div>
  );
}

export default Cards; 