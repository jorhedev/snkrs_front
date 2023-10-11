/** @format */

import React, { useState, useEffect } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../../../../redux/zapatillasSlice";
import styles from "./Favorites.module.css";
import axios from "axios"; // Importa Axios
import DashBoard from "../../DashBoard.module.css";
import logo from "../../../../assets/Image/Logo.png";
import zapa from "../../../../assets/Image/zapatillas.png";
import Swal from "sweetalert2"; // Importa SweetAlert2

const Favorites = () => {
  const dispatch = useDispatch();
  const zapatillas = useSelector((state) => state.zapatillas);
  const [isLiked, setIsLiked] = useState({});
  const [favoritas, setFavoritas] = useState([]);

  const agregarFavorita = (item) => {
    dispatch(addFavorite(item));
    setFavoritas([...favoritas, item]);
  };

  const eliminarFavorita = (item) => {
    // Elimina el artículo de favoritos y actualiza el estado
    dispatch(removeFavorite(item));

    // Elimina el artículo del objeto isLiked
    const updatedIsLiked = { ...isLiked };
    delete updatedIsLiked[item._id];
    setIsLiked(updatedIsLiked);

    // Actualiza la lista de favoritas después de eliminar una
    const updatedFavoritas = favoritas.filter(
      (zapatilla) => zapatilla._id !== item._id
    );
    setFavoritas(updatedFavoritas);

    // Actualiza el localStorage con la lista de favoritas actualizada
    localStorage.setItem("favorites", JSON.stringify(updatedFavoritas));
  };

  // Función para mostrar la alerta de confirmación
  const showDeleteConfirmation = (item) => {
    Swal.fire({
      title: "WARNING",
      text: "¿Are you sure to delete this item from favorites?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        // Si el usuario confirma, elimina la tarjeta
        eliminarFavorita(item);
      }
    });
  };
  const toggleLike = (item) => {
    const updatedIsLiked = { ...isLiked };
    if (zapatillas.includes(item)) {
      eliminarFavorita(item);
      delete updatedIsLiked[zapa._id];
    } else {
      agregarFavorita(item);
      updatedIsLiked[zapa._id] = true;
    }
    localStorage.setItem("favorites", JSON.stringify(updatedIsLiked));
    setIsLiked(updatedIsLiked);
  };

  useEffect((id) => {
    // Utiliza Axios para obtener los datos de la API
    axios
      .get(`http://localhost:3001/favorites/${id}`)
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
    <div className={DashBoard.DashBoardContainer}>
      {/* <div className={styles.home}>
        <Link className={styles.homebtn} to={"/home"}>
          <p>
            <img src={zapa} alt="" width={30} /> Home
          </p>
        </Link>
      </div> */}

      <div className={styles.fa}>
        {zapatillas.map((item) => (
          <NavLink
            to={`/detail/${item._id}`}
            className={styles.containe}
            key={item._id}
            style={{ textDecoration: "none" }}
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
              <button
                className={`${styles.likeButton} ${
                  isLiked[item._id] ? styles.liked : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();

                  // Llama a eliminarFavorita para eliminar el artículo si está en favoritos, o agregarlo si no lo está
                  toggleLike(item);
                }}
              >
                <span role="img" aria-label="Corazón">
                  {isLiked[item._id] ? "🤍" : "❤️"}
                </span>
              </button>
              
                <p className={styles.circle}>
                  🔴🟢🔵⚫️⚪️
                  <img src={logo} alt="logo" width={70} />
                </p>
            
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
