import React, { useEffect, useState } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from "./BrandCarrusel.module.css";

const BrandCarrusel = () => {

    const settings = {
        dots: false, // Muestra los indicadores (puntitos)
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5, // Cantidad de tarjetas visibles a la vez
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
      };


    return(
        <div className={styles.container}>
        <h1 className={styles.title}>OUR BRANDS</h1>
  
        <div className={styles.carouselContainer}>
          <Slider {...settings}>
            {BrandData.map((d) => (
              <div className={styles.cardContainer} key={d.id}>
              <div className={styles.cardPromo} key={d.id}>
                  <div className={styles.cardPromoImage}>
                  <img
                    src={d.image}
                    alt={d.name}
                  />
                </div>
              </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    )
}

export default BrandCarrusel;

import adidas from "../../assets/Brands/01.png";
import nike from "../../assets/Brands/02.png";
import puma from "../../assets/Brands/03.png";
import fila from "../../assets/Brands/04.png";
import reebok from "../../assets/Brands/05.png";
import under from "../../assets/Brands/06.png";


const BrandData = [
    {
        id: 1,
        name: 'Adidas',
        image: adidas
    },
    {
        id: 2,
        name: 'Nike',
        image: nike
    },
    {
        id: 3,
        name: 'Puma',
        image: puma
    },
    {
        id: 4,
        name: 'Fila',
        image: fila
    },
    {
        id: 1,
        name: 'Reebok',
        image: reebok
    },
    {
        id: 1,
        name: 'Under Armour',
        image: under
    },
    
]