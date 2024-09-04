import React from 'react'
import styles from './Card.module.css'

const Card = ({src, caption}) => {
  return (
    <div className={styles.container}>
        <ul className={styles.list}>
            <li className={styles.list_element}>
                <div className={styles.image_container}>
                    <img className={styles.image} src={src}></img>
                </div>
            </li>
            <li className={styles.list_element}>
                <div className={styles.text_container}>
                    <h1 className={styles.text}>{caption}</h1>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Card