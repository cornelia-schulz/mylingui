import React from 'react';
import { Trans } from '@lingui/macro';
import logo from '../images/logo.svg';
import fb from '../images/fb.png';
import twitter from '../images/twitter.png';
import instagram from '../images/instagram.png';

function Footer(props) {
    return(
        <footer>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                <button><Trans>About Us</Trans></button>
                <button><Trans>What We Do</Trans></button>
                <button><Trans>FAQ</Trans></button>
                <button><Trans>Career</Trans></button>
                <button><Trans>Blog</Trans></button>
                <button><Trans>Contact Us</Trans></button>
            </p>
            <img src={fb} className="social" alt="Facebook icon" />
            <img src={instagram} className="social" alt="Instagram icon" />
            <img src={twitter} className="social" alt="Twitter icon" />
            <p><Trans>&copy; 2018 Huddle Copyright</Trans></p>
        </footer>
    )
}

export default Footer