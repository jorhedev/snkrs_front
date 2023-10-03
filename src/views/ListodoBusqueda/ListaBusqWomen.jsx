import React from 'react'
import ZapatillaWomen from "../../components/ZapatillaKids/ZapatillasCardK";
import Banner from "../../components/banner/bannerWomen";
import Banner1 from "../../components/banner/banner1";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from "react-router-dom";
import logo from "../../assets/Image/Logo.png";

import styles from "./Listado.module.css";

const ListaBusqWomen = () => {
  return (
    <>
      <div className={styles.banner}>
        <Banner />
      </div>
      <div className={styles.homediv}>
        <Link className={styles.homebtn} to={'/home'}><p><AiOutlineArrowLeft/> Home</p></Link>
        <img src={logo} alt="logo" width={50} height={20} />
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
