import React from 'react'
import ZapatillaWomen from "../../components/ZapatillaKids/ZapatillasCardK";
import Banner from "../../components/banner/bannerKids";
import Banner1 from "../../components/banner/banner1";

import styles from "./Listado.module.css";

const ListaBusqWomen = () => {
  return (
    <>
      <div className={styles.banner}>
        <Banner />
      </div>
      <div className={styles.zapatilla}>
        <ZapatillaWomen />
      </div>
      <div className={styles.banner1}>
        <Banner1 />
      </div>
    </>
  );
};

export default ListaBusqWomen;
