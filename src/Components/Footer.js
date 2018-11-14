import React from 'react';
import { Trans } from '@lingui/macro';
import logo from '../images/logo-white.svg';
import fb from '../images/fb.png';
import twitter from '../images/twitter.png';
import instagram from '../images/instagram.png';

function Footer(props) {
    return(
        <footer>
            <div className='left'>
                <img src={logo} className="footer-logo" alt="logo" /><br/>
                <img src={fb} className="social" alt="Facebook icon" />
                <img src={instagram} className="social" alt="Instagram icon" />
                <img src={twitter} className="social" alt="Twitter icon" />
            </div>
            
            <div className='right'>
                <button className='footerlink'><Trans>About Us</Trans></button>
                <button className='footerlink'><Trans>What We Do</Trans></button>
                <button className='footerlink'><Trans>FAQ</Trans></button>
                <button className='footerlink'><Trans>Career</Trans></button>
                <button className='footerlink'><Trans>Blog</Trans></button>
                <button className='footerlink'><Trans>Contact Us</Trans></button>
                <p><Trans>&copy; 2018 Huddle Copyright</Trans></p>
            </div>
            
            
        </footer>
    )
}

export default Footer