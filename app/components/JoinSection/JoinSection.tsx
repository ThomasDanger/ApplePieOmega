'use client'

import React from 'react'


import useScrollBackground from "../../hooks/useScrollBackground";

import styles from './JoinSection.module.css'

const JoinSection: React.FC = () => {
    const { bgColor, textColor } = useScrollBackground();
  return (
    <div className={styles.container}>
        <div className={styles.container_entry}>
            <div className={styles.text_container}>
                <h1 className={styles.title}>Join.</h1>
                <h2 className={styles.subheading}>Joining Our Chapter</h2>
                <br></br>

                <div className={styles.body_container}>
                    <p className={styles.body}>To <span style={{fontWeight:'bold', color:bgColor}}>join our chapter</span>, 
                    all you need to do is <span style={{fontWeight:'bold', color:bgColor}}>get inducted</span> as a pledge and complete 
                    <span style={{fontWeight:'bold', color:bgColor}}> pledge requirements</span>.
                    </p>
                    <br></br>
                    <h3 className={styles.body}>Pledge requirements include:</h3>
                    <ul className={styles.list}>
                        <li className={styles.list_element}>
                            <h3 className={styles.body}>Complete <span style={{fontWeight:'bold', color:bgColor}}>15 service hours</span></h3>
                        </li>
                        <li>
                            <h3 className={styles.body}>Attend Meetings</h3>
                        </li>
                        <li>
                            <h3 className={styles.body}>Complete <span style={{fontWeight:'bold', color:bgColor}}>pledge fundraising, service, and fellowship events</span></h3>
                        </li>
                        <li>
                            <h3 className={styles.body}>Pay dues*</h3>
                        </li>
                    </ul>

                    <br/>

                    <div>
                        * Dues are $100 for both pledges and active members. Dues go towards the national fraternity, 
                        chapter fellowship events, and chapter service events. Pledges attend retreat at no added cost.
                    </div>

                    <br/>

                </div>
                
            </div>

            <div className={styles.graphics_container}>
                <img className={styles.image} src='/apple_pie_omega_photos/PledgesHammock.PNG'/>
            </div>

        </div>

        <a href='https://l.instagram.com/?u=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2F13jwxVOtqI25JR2Z4f4-FQ1ofXcUSurCEy_gcOwQUFSc%2Fviewform%3Fedit_requested%3Dtrue%26pli%3D1&e=AT2sZt04tmA1qWzazA7A6BHza7Jw_N1MTOimqsWeWbCHQXWAD_bwrkd7l02LCo-QzYFpwFG2L_VeKKp1LUg8H5IYlamxPlxumEi_Dg'>
            <div className={styles.button}>
                <h1 style={{fontSize: '28px', fontWeight:'bold', textAlign:'center'}}>Sign Our Interest Form!</h1>
            </div>
        </a>

        <br/>

        <h1 style={{textAlign: 'center'}}>Our members are incredibly excited to volunteer with you, and consequently would not do anything to make you reconsider joining. We abide by a strict no-hazing policy. If you encounter any hazing, notify the executive team immediately.</h1>

    </div>
  )
}

export default JoinSection