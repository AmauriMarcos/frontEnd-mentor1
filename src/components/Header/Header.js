import React from 'react';
import Navbar from  '../Navbar/Navbar';
import styles from './Header.module.scss';
import Logo from '../../components/Logo/Logo';

const Hero = () =>{

    return(
        <header className={styles.Header}>
            <div className={styles.Header__brandNavbar}>
                <Logo/>
                <Navbar/>
            </div>          
            <div className={styles.Header__hero} >
                <h1>Immersive <br></br> Experiences  <br></br>That Deliver</h1>
            </div>
        </header>
    )
}

export default Hero;