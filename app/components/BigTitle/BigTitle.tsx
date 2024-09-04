'use client'

import React from 'react'
import useScrollBackground from "../../hooks/useScrollBackground";
import LinkDock from "../LinkDock/LinkDock";

import SectionMulticolorText from '../SectionMultiColorText/SectionMulticolorText';


import styles from './BigTitle.module.css'

const BigTitle: React.FC = () => {
  const { bgColor, textColor } = useScrollBackground();
  return (
    <div className={styles.container} style={{backgroundColor: bgColor}}>

      <h1 className={styles.title}>Apple Pie Omega.</h1>
      <img className={styles.applepie} src='./ApplePieLogo_.svg'></img>
      <div className={styles.linkdock_div_}>
        <div className={styles.linkdock_div}>
          <LinkDock/>
        </div>
      </div>
      <div className={styles.subheading_container}>
        <p className={styles.subheading}>A digital posterboard created by the members of Alpha Phi Omega - Alpha Epsilon Zeta.</p>
      </div>
      {/* Other content */}
      </div>

  );
};

/*
      <div className={styles.container}>
          <h1 className={styles.text}>Apple Pie Omega</h1>
      <div/>
*/

export default BigTitle