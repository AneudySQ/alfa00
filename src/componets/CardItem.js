import React from 'react'
import { Link } from 'react-router-dom'

function Carditem() {
  return (
    <>
        <li className='cards__item'>
            <Link
            className='cards__item__link'>
                <figure className='cards__item__pic_wrap'>
                    <img src="" alt="AneudySandana" className='cards__item__img'/>
                </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__item__tex' />
                </div>
            </Link>
        </li>
    </>
  )
}

export default Carditem