/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ZapatillaCardK from "./ZapatillaCardK"; // Importa el componente de ZapatillaCard
import Filter from "../Filter/Filter";
import { fetchData } from '../../redux/resultsMen';
import axios from "axios";
import styles from "./ZapatillaCard.module.css";


const ZapatillasCard = () => {
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const itemsPerPage = 9; // Cantidad de elementos por página

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData())
  }, []);

  // Cambia results por filteredResultsMen en el useSelector
  const results = useSelector((state) => state.results.results);

  // Filtra los resultados para mostrar solo los que tienen gender "male"
  // const filteredResultsMen = results.filter((zapatilla) =>
  //   zapatilla.stock[0]?.gender === "male"
  // );

  const filteredResultsMen = results;
  
  console.log(filteredResultsMen);


  // Calcula el total de páginas en función de los resultados filtrados
  const totalPages = Math.ceil(filteredResultsMen.length / itemsPerPage);

  // Función para generar los números de página
  const generatePageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  // Actualiza este efecto para escuchar cambios en results
  useEffect(() => {
    // Si la página actual es mayor que el número total de páginas después de filtrar, ajústala
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [filteredResultsMen, currentPage, totalPages]);


  return (
    <>
    
      <div className={styles.product}>
        <div className={styles.cards}>
          {results
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((zapatilla) => (
              <ZapatillaCardK key={zapatilla.id} zapatilla={zapatilla} />
            ))}
        </div>
        <Filter />
      </div>
      <div className={styles.pagination}>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`${styles.buttonpag} ${
            currentPage === 1 ? "" : styles.active
          }`}
        >
          Back
        </button>
        {generatePageNumbers().map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber)}
            className={`${styles.buttonpag} ${
              currentPage === pageNumber ? styles.active : ""
            }`}
          >
            {pageNumber}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage * itemsPerPage >= results.length}
          className={`${styles.buttonpag} ${
            currentPage * itemsPerPage >= results.length
              ? ""
              : styles.active
          }`}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default ZapatillasCard;