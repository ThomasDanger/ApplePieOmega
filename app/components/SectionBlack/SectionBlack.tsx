'use client'

import React from 'react'
import styles from './SectionBlack.module.css'

import useScrollBackground from "../../hooks/useScrollBackground";

const SectionBlack: React.FC = () => {
    const { bgColor, textColor } = useScrollBackground();
  return (
    <div className={styles.container}>

        <div className={styles.text_container}>
            <h1 className={styles.title}>About.</h1>
            <h2 className={styles.subheading}>Alpha Phi Omega</h2>
            <br></br>

            <div className={styles.body_container}>
                <p className={styles.body}>We are the UT Dallas chapter of the <span style={{fontWeight:'bold', color:bgColor}}>Alpha Phi Omega </span> National Service 
                    Fraternity. 
                </p>
                <br></br>
                <p className={styles.body}>We are an <span style={{fontWeight:'bold', color:bgColor}}>all-inclusive </span> 
                    and secular organization. As such, we do not limit membership to any gender, religion, major, etc. </p>
                <br></br>
                <h3 className={styles.body}>We are committed to the three tenets:</h3>
                <ul className={styles.list}>
                    <li className={styles.list_element}>
                        <h3 className={styles.body}>Be a <span style={{fontWeight:'bold', color:bgColor}}>Leader</span></h3>
                    </li>
                    <li className={styles.list_element}>
                        <h3 className={styles.body}>Be a <span style={{fontWeight:'bold', color:bgColor}}>Friend</span></h3>
                    </li>
                    <li className={styles.list_element}>
                        <h3 className={styles.body}>Be of <span style={{fontWeight:'bold', color:bgColor}}>Service</span></h3>
                    </li>
                </ul>
            </div>
        </div>
        <div className={styles.graphics_container}>
            <img src='./Logos/Apo-Logo.png' className={styles.graphic}></img>
        </div>

    </div>
  )
}

export default SectionBlack