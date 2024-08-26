import React from 'react';
import { NavLink } from 'react-router-dom'
import DesktopKasaLogo from '../../assets/DesktopKasaLogo.png';
import './Header.scss';


function Header() {
    return (
        <div className="header">
            <NavLink to='/'><img src={DesktopKasaLogo} alt="logo Kasa" className="header_logo" /></NavLink>
            <nav className='page_links'>
            <NavLink className={(nav) => (nav.isActive ? 'nav-active' : '')} to='/'>Accueil</NavLink>
            <NavLink className={(nav) => (nav.isActive ? 'nav-active' : '')} to='/Apropos'>A Propos</NavLink>
            </nav>
        </div>
    )
}

export default Header