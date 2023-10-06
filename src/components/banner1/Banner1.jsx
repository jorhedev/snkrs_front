import React from 'react';

import styles from './Banner1.module.css'
import banner from '../../assets/zapa.json'

const Banner1 = () => {
    return (
        <div className={styles.slider}>
          <h1 className={styles.titulo}>The brands we work with</h1>
          <div className={styles.slideTrack}>
            {banner.map((bannerItem, index) => (
              <div className={styles.slide} key={index}>
                <img
                  src={bannerItem.img}
                  alt={`Banner ${index + 1}`}
                  className={styles.bannerImage}
                />
              </div>
            ))}
          </div>
        </div>
      );
      
};

export default Banner1;