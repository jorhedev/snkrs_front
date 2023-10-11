
import React, { useState, useEffect } from "react";

import logo from "../../assets/Image/Logo.png";
import Search from "../../components/Seach/Search";

import {FaStar,  FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Filter from "../Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, setResults } from "../../redux/resultsMen";
import { addFavorite, removeFavorite } from "../../redux/zapatillasSlice";
import styles from "./Cards.module.css";
const itemsPerPage = 9;

const Cards = () => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [showNotFoundMessage, setShowNotFoundMessage] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isLiked, setIsLiked] = useState({});
    const [modelSearchResults, setModelSearchResults] = useState([]); // Nuevo estado para resultados de búsqueda por modelo
  
    useEffect(() => {
      dispatch(fetchData());
  
      // Cargar productos favoritos desde el almacenamiento local al cargar la página
      const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || {};
      setIsLiked(savedFavorites);
    }, [dispatch]);
  
    // Declare results here after fetching data from Redux
    const results = useSelector((state) => state.results.results);
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
    const currentItems = results.slice(indexOfFirstItem, indexOfLastItem);
  
    const totalPages = Math.ceil(results.length / itemsPerPage);
  
    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    const handleFilterProducts = (searchQuery) => {
      const filteredResults = results.filter((zapa) =>
        zapa.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
  
      setFilteredProducts(filteredResults);
      setCurrentPage(1);
      setShowNotFoundMessage(filteredResults.length === 0);
    };
  
    const handleLikeClick = (zapa) => {
      // Actualizar el estado local de favoritos
      const updatedIsLiked = { ...isLiked };
      if (updatedIsLiked[zapa._id]) {
        // Si ya está en favoritos, quítalo
        dispatch(removeFavorite(zapa));
        delete updatedIsLiked[zapa._id];
      } else {
        // Si no está en favoritos, agrégalo
        dispatch(addFavorite(zapa));
        updatedIsLiked[zapa._id] = true;
      }
  
      // Guardar productos favoritos en el almacenamiento local
      localStorage.setItem("favorites", JSON.stringify(updatedIsLiked));
  
      // Actualizar el estado del botón "favorito" para esta zapatilla
      setIsLiked(updatedIsLiked);
    };
  
    const handleNextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const handlePrevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
  return (
    <>
    <div className={styles.product}>
    <div className={styles.cards}>
        {currentItems.map((zapa) => (
          <Link
            to={`/detail/${zapa._id}`}
            className={styles.containe}
            key={zapa._id}
            style={{ textDecoration: "none" }}
          >
            <div className={styles.card} key={zapa._id}>
              <img src={zapa?.image[0]?.src} alt={zapa.name} />

              <div className={styles.name}>
                <h2>{zapa?.brand}</h2>
                <div className={styles.price}>
                  <p>$ {zapa?.price}</p>
                  <div></div>
                </div>
              </div>

              <div className={styles.type}>
                <span className={styles.letra}>{zapa.model}</span>
               
                <p>{zapa.type}</p>
                <br />
              </div>
              <div className={styles.circle}>

              <Link className={styles.start}>
              <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStarHalfAlt/>
              </Link>
                <img src={logo} alt="logo" width={70} />
              </div>

              <button
                className={`${styles.likeButton} ${
                  isLiked[zapa._id] ? styles.liked : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLikeClick(zapa);
                }}
              >
                <span role="img" aria-label="Corazón">
                  {isLiked[zapa._id] ? "❤️" : "🤍"}
                </span>
              </button>
            </div>
          </Link>
        ))}
      </div>
      <Filter />

    </div>
     
      <div className={styles.pagination}>
        <ul className={styles.paginationList}>
          <li
            className={`${styles.pageButton} ${
              currentPage === 1 ? styles.disabled : ""
            }`}
            onClick={handlePrevPage}
          >
            Back
          </li>
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              key={index}
              className={`${styles.pageButton} ${
                currentPage === index + 1 ? styles.activePage : ""
              }`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </li>
          ))}
          <li
            className={`${styles.pageButton} ${
              currentPage === totalPages ? styles.disabled : ""
            }`}
            onClick={handleNextPage}
          >
            Next
          </li>
        </ul>
      </div>
    </>
  );
};

export default Cards;
