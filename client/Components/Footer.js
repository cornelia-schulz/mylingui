import React from 'react';
import { Trans } from '@lingui/macro';

function Footer(props) {
    return(
        <footer>
            <div className='left'>
                <img src="/images/logo-white.svg" className="footer-logo" alt="logo" /><br/>
                <img src="/images/fb.png" className="social" alt="Facebook icon" />
                <img src="/images/instagram.png" className="social" alt="Instagram icon" />
                <img src="/images/twitter.png" className="social" alt="Twitter icon" />
            </div>
            
            <div className='right'>
                <button className='footerlink'><Trans>About Us</Trans></button>
                <button className='footerlink'><Trans>What We Do</Trans></button>
                <button className='footerlink'><Trans>FAQ</Trans></button>
                <button className='footerlink'><Trans>Career</Trans></button>
                <button className='footerlink'><Trans>Blog</Trans></button>
                <button className='footerlink'><Trans>Contact Us</Trans></button>
                <p className='copyright'><Trans>&copy; 2018 Huddle Copyright</Trans></p>
            </div>
            
            
        </footer>
    )
}

export default Footer