import React from 'react';
import Navbar from '../Navbar/Navbar';
import Logo from '../Logo/Logo';
import styles from './Footer.module.scss';
import facebook from '../../assets/images/icon-facebook.svg';
import twitter from '../../assets/images/icon-twitter.svg';
import pinterest from '../../assets/images/icon-pinterest.svg';
import instagram from '../../assets/images/icon-instagram.svg';

const Footer = () =>{

    return(
        <footer className={styles.Footer}>
            <div className={styles.Footer__wrapContent}>
                <div className={styles.brandNavbar}>
                    <div className={styles.logo}>
                        <Logo/>
                    </div>
                    <div >
                        <Navbar className={styles.footerNavbar}/>
                    </div>                  
                </div>
                <div className={styles.socialMedias}>
                    <ul className={styles.socialMedias__list}>
                        <li>
                            <img src={facebook}/>
                        </li>
                        <li>
                            <img src={twitter}/>
                        </li>
                        <li>
                            <img src={pinterest}/>
                        </li>
                        <li>
                            <img src={instagram}/>
                        </li>
                    </ul>
                    <p>&copy; 2021 Loopstudios. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;