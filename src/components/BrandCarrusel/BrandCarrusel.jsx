import React, { useEffect, useState } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from "./BrandCarrusel.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrands, setBrand } from "../../redux/filters";
import { Link } from "react-router-dom";

const BrandCarrusel = () => {
  const dispatch = useDispatch()
  const brands = useSelector(({ filters }) => filters.detail.brands)
  console.log("🚀 ~ file: BrandCarrusel.jsx:10 ~ BrandCarrusel ~ brands:", brands)

  useEffect(() => {
    dispatch(fetchBrands())
  }, [dispatch])

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

  const handlerSelectBrands = () => {
    dispatch(setBrand())
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>OUR BRANDS</h1>

      <div className={styles.carouselContainer}>
        <Slider {...settings}>
          {brands.map((brand) => (
            <div className={styles.cardContainer} key={brand._id}>
              <Link to={'/home'} onClick={handlerSelectBrands}>
                <div className={styles.cardPromo}>
                  <div className={styles.cardPromoImage}>
                    <img
                      src={brand?.image?.src}
                      alt={brand?.brand}
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default BrandCarrusel;

// import adidas from "../../assets/Brands/01.png";
// import nike from "../../assets/Brands/02.png";
// import puma from "../../assets/Brands/03.png";
// import fila from "../../assets/Brands/04.png";
// import reebok from "../../assets/Brands/05.png";
// import under from "../../assets/Brands/06.png";


// const BrandData = [
//   {
//     id: 1,
//     name: 'Adidas',
//     image: adidas
//   },
//   {
//     id: 2,
//     name: 'Nike',
//     image: nike
//   },
//   {
//     id: 3,
//     name: 'Puma',
//     image: puma
//   },
//   {
//     id: 4,
//     name: 'Fila',
//     image: fila
//   },
//   {
//     id: 1,
//     name: 'Reebok',
//     image: reebok
//   },
//   {
//     id: 1,
//     name: 'Under Armour',
//     image: under
//   },

// ]