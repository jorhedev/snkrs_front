/** @format */

import React, { useState, useEffect } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../../../../redux/zapatillasSlice";
import styles from "./Favorites.module.css";
import axios from "axios"; // Importa Axios
import logo from "../../../../assets/Image/Logo.png";

const Favorites = () => {
  const dispatch = useDispatch();
  const zapatillas = useSelector((state) => state.zapatillas);

  const [favoritas, setFavoritas] = useState([]);

  const agregarFavorita = (item) => {
    dispatch(addFavorite(item));
    setFavoritas([...favoritas, item]);
  };

  const eliminarFavorita = (item) => {
    dispatch(removeFavorite(item));
    setFavoritas(favoritas.filter((zapatilla) => zapatilla.id !== item.id));
  };

  useEffect(() => {
    // Utiliza Axios para obtener los datos de la API
    axios
      .get("http://localhost:3001/products")
      .then((response) => {
        if (Array.isArray(response.data.products)) {
          // Actualiza el estado con los datos de zapatillas obtenidos
          setFavoritas(response.data.products);
        } else {
          console.error(
            "Los datos de zapatillas no son un arreglo válido:",
            response.data
          );
        }
      })
      .catch((error) => {
        console.error("Error al obtener los datos de zapatillas:", error);
      });
  }, []); // Asegúrate de agregar "axios" como dependencia

  return (
    <>
      <div className={styles.home}>
        <Link className={styles.homebtn} to={"/home"}>
          <p>
            <AiOutlineArrowLeft /> Home
          </p>
        </Link>
      </div>

      <div className={styles.fa}>
        {zapatillas.map((item) => (
          <Link
            to={`/detail/${item._id}`}
            className={styles.containe}
            key={item._id}
          >
            {/* Renderiza los detalles de los productos aquí */}
            <div className={styles.card} key={item._id}>
              <img src={item?.image[0].src} alt={item.name} />

              <div className={styles.name}>


                <h2>{item?.brand}</h2>
                <div className={styles.price}>
                  <p>$ {item?.price}</p>

                  <div></div>
                </div>
              </div>

              <div className={styles.type}>
                <span className={styles.letra}>{item.model}</span>
                <p>{item.type}</p>
                <br />
              </div>

              <div className={styles.boton}>
                <button
                  className={styles.btn}
                  onClick={() => eliminarFavorita(item)}
                >
                  Delete
                </button>
                <button
                  className={styles.btn}
                  onClick={() => eliminarFavorita(item)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Favorites;
