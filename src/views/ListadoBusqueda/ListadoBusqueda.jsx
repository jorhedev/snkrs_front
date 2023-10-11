import React from "react";
import Cards from "../../components/Cards/Cards";
import Banner from "../../components/banner/banner";
import Footer from "../../components/Footer/Footer";
import BeMember from '../../components/BeMember/BeMember'
import { Link, useLocation } from "react-router-dom";
import zapa from '../../assets/Image/zapatillas.png'


import styles from "./Listado.module.css";

const ListadoBusqueda = () => {
  const { pathname } = useLocation()

  return (
    <>
      <div className={styles.containerList}>
        <Banner />

        <div className={styles.homediv}>
          <Link className={styles.homebtn} to={'/home'}><p><img src={zapa} alt="" width={30} /> Home</p></Link>
          <p className={styles.men}>{pathname.slice(1).toUpperCase()}</p>
        </div>
        <div className={styles.zapatilla}>
          <Cards />
        </div>
        <BeMember />
        <Footer />
      </div>
    </>
  );
};

export default ListadoBusqueda;
