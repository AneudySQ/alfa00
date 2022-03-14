import React from 'react'
import { Link } from 'react-router-dom'

function Carditem() {
  return (
    <>
        <li className='cards__item'>
            <Link className='cards__item__link'>
               <fugure className="cards__item__pic-wrap">
                <img src='' alt='' className='cards__item__img'/>
                </fugure> 
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>
                        
                    </h5>
                </div>
            </Link>
        </li>

    </>
    )
}

export default Carditem