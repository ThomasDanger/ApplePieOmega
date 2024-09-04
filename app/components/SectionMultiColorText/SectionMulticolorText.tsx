'use client'

import React from 'react'
import useScrollBackground from "../../hooks/useScrollBackground";

import styles from './SectionMultiColor.module.css';

const SectionMulticolorText: React.FC = () => {
    const { bgColor, textColor } = useScrollBackground();
  return (
    <div className={styles.container}>
        <h1 className={styles.text} style={{color: bgColor}}>We Make Volunteering Fun.</h1>
        </div>
  )
}

export default SectionMulticolorText