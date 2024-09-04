'use client'


import React, { useState } from 'react';
import styles from './Slideshow.module.css';

interface Slide {
  imageUrl: string;
  caption: string;
}

interface SlideshowProps {
  slides: Slide[];
}

const Slideshow: React.FC<SlideshowProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.slideshow}>
      <div className={styles.slide}>
        <div className={styles.img_container}>
            <img src={slides[currentIndex].imageUrl} alt="slide" />
        </div>
        <div className={styles.caption}>{slides[currentIndex].caption}</div>
      </div>
      <button className={styles.prev} onClick={goToPrevious}>
        <div>
        &#10094;
        </div>
      </button>
      <button className={styles.next} onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Slideshow;
