'use client'

import React from 'react'

import useScrollBackground from "../../hooks/useScrollBackground";
import styles from './SectionMulticolor.module.css'
import Slideshow from '../Slideshow/Slideshow.tsx';

import Card from '../Card/Card.js'

const SectionMulticolor: React.FC = () => {
    const { bgColor, textColor } = useScrollBackground();
  return (
    <div className={styles.container} style={{backgroundColor: bgColor}}>
        <h1 className={styles.section_title}>Why Join?</h1>


        <div className={styles.bubble}>
            <h1 className={styles.subtitle} style={{fontSize: '32px', fontWeight: 'bold', padding:'0 1rem'}}>Fun Volunteer Events</h1>
            <h2 className={styles.body}>By joining <span style={{fontWeight: 'bold', color:bgColor}}>APO</span>, you will be able to attend <span style={{fontWeight: 'bold', color:bgColor}}>
                fun volunteering events</span> in the DFW area with your <span style={{fontWeight: 'bold', color:bgColor}}>fellow brothers</span> such as:</h2>
            <br/>
            <div style={{display: 'flex', justifyContent:'center'}}>
                <ul className={styles.card_list}>
                    <li style={{margin: '1rem 1rem', display:'flex', justifyContent:'center'}}>
                        <Card src='/APO_Photos/PBF_Personal.PNG' caption='Plano Balloon Festival'/>
                    </li>
                    <li style={{margin: '1rem 1rem', display:'flex', justifyContent:'center'}}>
                        <Card src='/APO_Photos/StateFairPersonal.PNG' caption='Texas State Fair'/>
                    </li>
                    <li style={{margin: '1rem 1rem', display:'flex', justifyContent:'center'}}>
                        <Card src='/apple_pie_omega_photos/ServiceGarrettAndAdam.jpeg' caption='APO-organized service events'/>
                    </li>
                </ul>
            </div>
        </div>

        <br/>

        <div className={styles.bubble}>
            <h1 className={styles.subtitle}  style={{fontSize: '32px', fontWeight: 'bold', padding:'0 1rem'}}>Make New Friends</h1>
            <h2 className={styles.body}>Volunteering is a great way to make <span style={{fontWeight: 'bold', color:bgColor}}>new friends</span>! Especially when  
            you can <span style={{fontWeight: 'bold', color:bgColor}}>volunteer with 20+ familiar faces</span>!</h2>
            <br/>
            <h2 className={styles.body}>On top of regular volunteer opportunities, we organize <span style={{fontWeight: 'bold', color:bgColor}}>fun events </span> 
            to foster <span style={{fontWeight: 'bold', color:bgColor}}>good brotherhood</span> including:</h2>
            <br/>
            <div>
                <ul className={styles.card_list} style={{display: 'flex', justifyContent: 'center'}}>
                    <li style={{margin: '1rem 1rem', display:'flex', justifyContent:'center'}}>
                        <Card src='/APO_Photos/jackbox.gif' caption='Videogame Tournaments'/>
                    </li>
                    <li style={{margin: '1rem 1rem', display:'flex', justifyContent:'center'}}>
                        <Card src='/apple_pie_omega_photos/StarGazingRetreat.jpg' caption='Stargazing'/>
                    </li>
                    <li style={{margin: '1rem 1rem', display:'flex', justifyContent:'center'}}>
                        <Card src='/apple_pie_omega_photos/SpringRetreatGroupDay.PNG' caption='APO Retreat'/>
                    </li>
                </ul>
            </div>
        </div>

        <br/>

        <div className={styles.bubble}>
            <h1 className={styles.subtitle}  style={{fontSize: '32px', fontWeight: 'bold', padding:'0 1rem'}}>Improve Leadership Skills</h1>
            <h2 className={styles.body}>With <span style={{fontWeight: 'bold', color:bgColor}}>APO LEADS</span>, a five-course program created by APO, you can harness 
            your <span style={{fontWeight: 'bold', color:bgColor}}>leadership skills</span> and explore 
            your <span style={{fontWeight: 'bold', color:bgColor}}>leadership potential</span>.</h2>
            <div style={{padding:'1rem', display:'flex', justifyContent:'center'}}>
                <div style={{display:'flex', justifyContent:'center',width: '30%'}}>
                    <img src='/Logos/APO-Leads.png'></img>
                </div>
            </div>
        </div>

        <br/>
        

    </div>
  )
}

export default SectionMulticolor