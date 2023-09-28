import React from "react";
import ZapatillasCard from "../../components/ZapatillaCard/ZapatillasCard";
import Banner from "../../components/banner/banner";
import Footer from "../../components/Footer/Footer";
import BeMember from '../../components/BeMember/BeMember'

import styles from "./Listado.module.css";

const ListadoBusqueda = () => {
  return (
    <>
      <div className={styles.containerList}>
        <Banner />
        <div className={styles.zapatilla}>
        <ZapatillasCard />
        </div>
        <BeMember/>
        <Footer/>
      </div>
    </>
  );
};

export default ListadoBusqueda;
