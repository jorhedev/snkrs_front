import React from 'react'
import Cards from "../../components/Cards/Cards";
import Footer from "../../components/Footer/Footer";
import BeMember from '../../components/BeMember/BeMember'
import Banner from "../../components/banner/bannerWomen";
import { Link } from "react-router-dom";
import zapa from '../../assets/Image/zapatillas.png'
import { AiOutlineArrowLeft } from 'react-icons/ai';

import styles from "./Listado.module.css";
import { useSelector } from 'react-redux';

const ListaBusqWomen = () => {
  const results = useSelector((state) => state.results.results);

  return (
    <>
      <div className={styles.containerList}>
        <Banner />

        <div className={styles.homediv}>
          <Link className={styles.homebtn} to={'/home'}><p><AiOutlineArrowLeft /> Home</p></Link>
          <p className={styles.men}>Women</p>
        </div>
        <div className={styles.zapatilla}>
          <Cards results={results} />
        </div>
        <BeMember />
        <Footer />
      </div>
    </>
  );
};

export default ListaBusqWomen;
