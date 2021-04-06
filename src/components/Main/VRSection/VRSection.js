import React from 'react';
import styles from './VRSection.module.scss';
import vrImg from '../../../assets/images/desktop/image-interactive.jpg';

const VRSection = () =>{

    return(
        <div className={styles.VRSection}>
            <div className={styles.VRSection__boxImg}>
                <img className={styles.image} src={vrImg}/>
            </div>          
            <div className={styles.VRSection__boxText}>
                <h2>The leader in <br></br> interactive vr</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
        </div>
    )
}

export default VRSection;