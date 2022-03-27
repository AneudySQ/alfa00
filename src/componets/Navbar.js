import React, { useState } from 'react'
import logo from '../images/img/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Navbar = () => {

    //setting mobile nav
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    //cambio de color
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)


    //clset menu on click
    const closeMenu = () => setClick(false)

    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <nav className='navbar'>
                <Link to='/' className='logo'>
                    <img src={logo} alt='logo' />
                </Link>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to='/' onClick={closeMenu}>Tops</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/RestaurantList' onClick={closeMenu}>¡Cerca de ti!</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='#testimonials' onClick={closeMenu}>Iniciar Secion</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar