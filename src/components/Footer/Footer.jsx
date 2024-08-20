import React from 'react';
import footerkasalogo from '../../assets/FooterKasaLogo.png';
import './Footer.scss';

function Footer() {
    return(
        <footer className='page_footer'>
            <img src={footerkasalogo} alt='footer_kasa' className='footerLogo' />
            <p className='footer_text'>© 2020 Kasa. All rights reserved</p>  
        </footer>
    )
}

export default Footer