import React from 'react';
import styles from './banner.module.css';
import { useLocation } from 'react-router-dom';

const banner = {
  women: styles.bannerWomen,
  men: styles.bannerMen,
  kids: styles.bannerKids,
}

const Banner = () => {
  const { pathname } = useLocation();

  return (
    <div className={banner[pathname.slice(1)]}>
      <h1 className={styles.banerTitle}>{pathname.slice(1).toUpperCase()}</h1>
    </div>
  );
};

export default Banner;
