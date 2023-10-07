import React from 'react'
import ZapatillaWomen from "../../components/ZapatillaW/ZapatillasCardW";
import Footer from "../../components/Footer/Footer";
import BeMember from '../../components/BeMember/BeMember'
import Banner from "../../components/banner/bannerWomen";

import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from "react-router-dom";


import styles from "./Listado.module.css";

const ListaBusqWomen = () => {
  return (
    <>
      <div className={styles.containerList}>
        <Banner />
        
        <div className={styles.homediv}>
        <Link className={styles.homebtn} to={'/home'}><p><AiOutlineArrowLeft/> Home</p></Link>
       <p className={styles.men}>Women</p>
        </div>
        <div className={styles.zapatilla}>
        <ZapatillaWomen />
        </div>
        <BeMember/>
        <Footer/>
      </div>
    </>
  );
};

export default ListaBusqWomen;
