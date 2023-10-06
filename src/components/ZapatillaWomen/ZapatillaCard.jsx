/** @format */

import PropTypes from "prop-types";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/zapatillasSlice";

import { setProductCategory, setProductType, setSize, setColor } from '../../redux/filtersSlice';

import logo from "../../assets/Image/Logo.png";
import styles from "./ZapatillaCard.module.css";

const ZapatillaCard = ({ zapatilla }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.zapatillas);
  const filters = useSelector((state) => state.filters);


  const isFavorite = favorites.some((favorite) => favorite.id === zapatilla.id);
  const [isLiked, setIsLiked] = useState(isFavorite);

  const toggleLike = () => {
    if (isLiked) {
      dispatch(removeFavorite(zapatilla));
    } else {
      dispatch(addFavorite(zapatilla));
    }
    setIsLiked(!isLiked);
  };
  
  
 

  return (
    <div className={`${styles.zapatilla} ${zapatilla.price < 90 ? styles.isPriceLessThan90 : ''}`} >
      <a onClick={toggleLike}>
        <span role="img" aria-label="Corazón">
          {isLiked ? "❤️" : "🤍"}
        </span>
      </a>
      <img src={zapatilla.image} alt={zapatilla.name} />
      <div className={styles.name}>
        <h2>{zapatilla.name}</h2>
        
        <div className={styles.price} >
          <p >$ {zapatilla.price}</p>
         
          <div></div>
      </div>
        </div>
        
      <p className={styles.type}>{zapatilla.type}</p>
      <p className={styles.circle}>
        🔴🟢🔵⚫️⚪️
        <img src={logo} alt="logo" width={70} />
      </p>
    </div>
  );
};

ZapatillaCard.propTypes = {
  zapatilla: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    size:PropTypes.number.isRequired,
    color: PropTypes.array,
  }).isRequired,
};

export default ZapatillaCard;
