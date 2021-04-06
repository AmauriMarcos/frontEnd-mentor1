import React from 'react';
import styles from './CreationGrid.module.scss';
import earth from '../../../assets/images/desktop/image-deep-earth.jpg';
import curiosity from '../../../assets/images/desktop/image-curiosity.jpg';
import fisheye from '../../../assets/images/desktop/image-fisheye.jpg';
import night from '../../../assets/images/desktop/image-night-arcade.jpg';
import fromAbove from '../../../assets/images/desktop/image-from-above.jpg';
import soccerTeam from '../../../assets/images/desktop/image-soccer-team.jpg';
import grid from '../../../assets/images/desktop/image-grid.jpg';
import pocketBorealis from '../../../assets/images/desktop/image-pocket-borealis.jpg';

const imgArr = [{url:earth, title:'Deep Earth'}, {url: night, title: 'Night Arcade'}, {url: soccerTeam, title: 'Soccer Team VR'}, {url:grid, title: 'The grid'}, {url:fromAbove, title: 'From up above VR'}, {url: pocketBorealis, title: "Pocket Borealis"}, {url:curiosity, title:"The curiosity"}, {url:fisheye, title:"Make it fisheye"}];

const CreationGrid = () =>{

    return(
        <div className={styles.CreationGrid}>
            <div className={styles.CreationGrid__header}>
                <h2>Our Creations</h2>
                <button className={styles.button}>See all</button>
            </div>        
            <div className={styles.CreationGrid__grid}>
                {imgArr.map((nameImg) =>{
                    return (
                        <figure className={styles.ImgBox}>
                            <img src={nameImg.url}/>
                            <figcaption>{nameImg.title}</figcaption>
                            <div className={styles.layer}></div>
                        </figure>
                        
                    )
                })}
            </div>   
        </div>
    )
}

export default CreationGrid;