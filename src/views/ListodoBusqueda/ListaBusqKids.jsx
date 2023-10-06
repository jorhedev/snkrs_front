import React from 'react'
import ZapatillaWomen from "../../components/ZapatillaKids/ZapatillasCardK";
import Footer from "../../components/Footer/Footer";
import BeMember from '../../components/BeMember/BeMember'
import Banner from "../../components/banner/bannerWomen";
import Banner1 from "../../components/banner/banner1";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from "react-router-dom";
import logo from "../../assets/Image/Logo.png";

import styles from "./Listado.module.css";

const ListaBusqWomen = () => {
  return (
    <>
      <div className={styles.containerList}>
        <Banner />
        
        <div className={styles.homediv}>
        <Link className={styles.homebtn} to={'/home'}><p><AiOutlineArrowLeft/> Home</p></Link>
       <p className={styles.men}>MEN</p>
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
