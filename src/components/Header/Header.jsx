import React from 'react';
import { NavLink } from 'react-router-dom';
import DesktopKasaLogo from '../../assets/DesktopKasaLogo.png';
import './Header.scss';
 
function Header() {
    return (
        <header className="header">
        <img src={DesktopKasaLogo} alt="logo Kasa" className="header__logo" />
        <nav className="header_nav">
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/apropos">À propos</NavLink>
        </nav>
        </header>
    )
}

export default Header