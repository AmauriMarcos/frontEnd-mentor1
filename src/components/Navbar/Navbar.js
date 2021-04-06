import React from 'react';
import styles from './Navbar.module.scss';

const Navbar = () =>{
    return(
        <nav className={styles.Navbar}>
            <ul className={styles.Navbar__list}>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Careers</a>
                </li>
                <li>
                    <a href="#">Events</a>
                </li>
                <li>
                    <a href="#">Products</a>
                </li>
                <li>
                    <a href="#">Support</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;