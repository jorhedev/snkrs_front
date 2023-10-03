/** @format */

import PropTypes from "prop-types";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/zapatillasSlice";
import { addCard, removeCard } from "../../redux/cardsSlice";
import { NavLink } from "react-router-dom";
import Swal from 'sweetalert2';
import { addCartItemsById } from "../../redux/cartSlice";

import {
  setProductCategory,
  setProductType,
  setSize,
  setColor,
} from "../../redux/filtersSlice";

import logo from "../../assets/Image/Logo.png";
import styles from "./ZapatillaCard.module.css";

const ZapatillaCard = ({ zapatilla }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.zapatillas);
  const card = useSelector((state) => state.cards);
  const filters = useSelector((state) => state.filters);

  console.log(favorites);

  const isFavorite = favorites.some((favorite) => favorite.id === zapatilla.id);
  const [isLiked, setIsLiked] = useState(isFavorite);

  // const isCard = card.some((car) => car.id === zapatilla.id)
  // const [isCardZ, setCardZ] = useState(isCard)
  // console.log(setCardZ)

  const toggleLike = () => {
    if (isLiked) {
      dispatch(removeFavorite(zapatilla));
    } else {
      dispatch(addFavorite(zapatilla));
    }
    setIsLiked(!isLiked);
  };
  const addToCartHandler = () => {
    dispatch(addCartItemsById(zapatilla));
    Swal.fire({
      icon: 'success',
      title: 'Producto Agregado al Carrito',
      showConfirmButton: false,
      timer: 1500, 
    });
  };
  return (
    <>
      
      <div
      className={`${styles.zapatilla} ${
        zapatilla.price < 90 ? styles.isPriceLessThan90 : ""
      }`}
    >
      
      

      <img src={zapatilla?.image[0]?.src} alt={zapatilla.brand} />
      
     
      <div className={styles.name}>
        <h2>{zapatilla.brand}</h2>
        <div className={styles.price}>
          <p>$ {zapatilla.price}</p>

          <div></div>
        </div>
      </div>

      <p className={styles.type}>{zapatilla.model}</p>
      <p className={styles.type}>{zapatilla.type}</p>
      <p className={styles.circle}>
        🔴🟢🔵⚫️⚪️
        <img src={logo} alt="logo" width={70} />
      </p>
    <button onClick={addToCartHandler}>Agregar al carrito</button>
    </div>
    </>
    
  );
};

ZapatillaCard.propTypes = {
  zapatilla: PropTypes.shape({
    id: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    color: PropTypes.array,
  }).isRequired,
};

export default ZapatillaCard;
