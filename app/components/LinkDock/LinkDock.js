import React from 'react'
import Link from 'next'
import styles from './LinkDock.module.css'

const LinkDock = () => {
  return (
    <div className={styles.container}>

      <a href='https://www.instagram.com/apo.aez?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
      <div className={styles.button}>
        <ul className={styles.list}>
            <li className={styles.list_element}>
                <img className={styles.link_svg} src = './Instagram_Glyph_Black.svg'></img>
            </li>
            <li className={styles.list_element}>
                <h1 className={styles.text}>apo.aez</h1>
            </li>
        </ul>
        </div>
        </a>
    </div>
  )
}

export default LinkDock