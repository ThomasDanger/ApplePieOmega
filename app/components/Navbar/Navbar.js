'use client'

import React from 'react'

import styles from './Navbar.module.css';

const Navbar = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className={styles.navbar}>

        <h1 style={{position:'absolute', top:'0.5rem', left:'1rem'}}>Apple Pie Omega.</h1>

        <ul className={styles.list}>
            <li className={styles.list_item}>
              <button onClick={() => scrollToSection('About')} style={styles.navItem}>
                <h1 className={styles.list_item}>About</h1>
                </button>
            </li>
            <li className={styles.list_item}>
              <button onClick={() => scrollToSection('Why Join')} style={styles.navItem}>
                <h1 className={styles.list_item}>Why Join?</h1>
                </button>
            </li>
            <li className={styles.list_item}>
              <button onClick={() => scrollToSection('Join')} style={styles.navItem}>
                <div className = {styles.bubble}>Join</div>
              </button>
            </li>
        </ul>
    </div>
  )
}

export default Navbar