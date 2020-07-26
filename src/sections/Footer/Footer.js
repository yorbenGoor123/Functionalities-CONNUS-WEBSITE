import React from 'react';
import style from './Footer.module.css';
import facebook from '../../assets/socials/facebook.svg';
import instagram from '../../assets/socials/instagram.svg';
import linkedin from '../../assets/socials/linkedin.svg';

const Footer = () => {
    return (
        <footer className={style.footer}>
            <p className={style.privacyPolicy}>Privacy policy</p>
            <ul className={style.socials}>
                <li className={style.socialsItem}><img className={style.socialsImage} src={facebook} alt="facebook"></img></li>
                <li className={style.socialsItem}><img className={style.socialsImage} src={instagram} alt="instagram"></img></li>
                <li className={style.socialsItem}><img className={style.socialsImage} src={linkedin} alt="linkedin"></img></li>
            </ul>
        </footer>
    );
};

export default Footer;