/** @format */

import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Newsletter/Newsletter";
import BeMember from "../../components/BeMember/BeMember";
import Banner1 from "../../components/banner1/Banner1";
import styles from "./HomeViews.module.css";
import Home from "../../components/Home/Home";
import DataZapatilla from "../../assets/zapatillas.json";
import logo from "../../assets/Image/Logo.png";
import Search from "../../components/Seach/Search";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/resultsMen";
import { addFavorite, removeFavorite } from "../../redux/zapatillasSlice";

const itemsPerPage = 9;

const HomeViews = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [showNotFoundMessage, setShowNotFoundMessage] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLiked, setIsLiked] = useState({});

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
      <div className={styles.carrusel}>
        <Carousel>
          <Carousel.Item>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/fd756a55198943.597a8e48aa0b4.gif"
              alt=""
            />
            <Carousel.Caption>
              <img className={styles.logo} src={logo} alt="logo" width={70} />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://media.tenor.com/_1Q1UOlJ3_QAAAAd/adidas-shoe.gif"
              alt=""
            />
            <Carousel.Caption>
              <img className={styles.logo} src={logo} alt="logo" width={70} />
              <p>
                You can find the best brands and we will deliver them to your
                home.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://3dprint.com/wp-content/uploads/2021/04/4DFWD_360_BG_HIGHRES.gif"
              alt=""
            />
            <Carousel.Caption>
              <img className={styles.logo} src={logo} alt="logo" width={70} />
              <p>
                We have all the models you are looking for and prices to suit
                you.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <Search products={DataZapatilla} onFilter={handleFilterProducts} />

      {showNotFoundMessage && (
        <div className={styles.notFoundMessage}>
          <h1>Sneaker not found.</h1>
        </div>
      )}

      <div className={styles.cards}>
        {currentItems.map((zapa) => (
          <Link
            to={`/detail/${zapa._id}`}
            className={styles.containe}
            key={zapa._id}
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
              <img src={logo} alt={zapa.name} width={50} />

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

      <div className={styles.container}>
        <h1 className={styles.title}>Featured</h1>
        <div className={styles.homer}>
          <Home />
        </div>

        <div>
          <Banner1 />
        </div>
        <BeMember />

        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default HomeViews;
