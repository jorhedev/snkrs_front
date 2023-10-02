/** @format */

import React, { useState } from "react";
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

const itemsPerPage = 9;

const HomeViews = () => {
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const [filteredProducts, setFilteredProducts] = useState(DataZapatilla);
  const [showNotFoundMessage, setShowNotFoundMessage] = useState(false);

  // Calcula el índice del primer y último elemento en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Filtra los elementos que deben mostrarse en la página actual
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Calcula el número total de páginas
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Función para cambiar de página
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Función para actualizar los productos filtrados
  const handleFilterProducts = (filteredProducts) => {
    setFilteredProducts(filteredProducts);
    setCurrentPage(1); // Volver a la primera página cuando cambian los filtros
    // Mostrar el mensaje si no se encuentran resultados
    setShowNotFoundMessage(filteredProducts.length === 0);
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
              <p>You can find the best brands and we will deliver them to your home.</p>
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
              We have all the models you are looking for and prices to suit you.
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

      <Link to={'/card'} className={styles.cards}>
        {currentItems.map((zapa) => (
          <div className={styles.containe} key={zapa.id}>
            {/* Renderiza los detalles de los productos aquí */}
            <div className={styles.card} key={zapa.id}>
              <img src={zapa.image} alt={zapa.name} />
              <h3 className={styles.data}>{zapa.name}</h3>
              <div className={styles.type}>
                <span className={styles.letra}>{zapa.type}</span>
                <br />
                <img src={logo} alt="logo" width={70} />
              </div>
            </div>
          </div>
        ))}
      </Link>

      <div className={styles.pagination}>
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className={`${styles.pageButton} ${
            currentPage === 1 ? styles.disabled : ""
          }`}
        >
          Back
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`${styles.pageButton} ${
              currentPage === index + 1 ? styles.activePage : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`${styles.pageButton} ${
            currentPage === totalPages ? styles.disabled : ""
          }`}
        >
          Next
        </button>
      </div>

      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>Featured</h1>
          <Home />
        </div>

        <div>
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
