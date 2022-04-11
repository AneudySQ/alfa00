import React, { useState } from 'react'
import logo from '../images/img/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink,  } from 'react-router-dom';



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


    const closeMenu = () => setClick(false)

    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <nav className='navbar'>
                <NavLink to='/'
                    className='logo'>
                    <img src={logo} alt='logo' />
                </NavLink >
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <NavLink to='/' style={({ isActive }) => ({ color: isActive ? ' #ff5733 ' : '' })}
                            onClick={closeMenu}>Tops</NavLink >
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/GrildList'
                            style={({ isActive }) => ({ color: isActive ? ' #ff5733 ' : '' })}
                            onClick={closeMenu}>¡Cerca de ti!</NavLink >
                    </li>
                    
                    <li className='nav-item'>
                        <NavLink to='/ModalLogin'
                            style={({ isActive }) => ({ color: isActive ? ' #ff5733 ' : '' })}
                            onClick={closeMenu}>ModalLogin</NavLink >
                    </li>

                    <li className='nav-item'>
                        <NavLink to='/Admin'
                            style={({ isActive }) => ({ color: isActive ? ' #ff5733 ' : '' })}
                            onClick={closeMenu}>Admin</NavLink >
                    </li>

                    <li className='nav-item'>
                        <NavLink to='/'
                            style={({ isActive }) => ({ color: isActive ? ' #ff5733 ' : '' })}
                            onClick={closeMenu}></NavLink >
                    </li>

                    
                    </ul>
            </nav>
        </div>
    )
}

export default Navbar