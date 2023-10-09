/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ZapatillaCard from "./ZapatillaCard";
import Filter from "../Filter/Filter";
import axios from "axios";
import styles from "./ZapatillaCard.module.css";

import { fetchData } from "../../redux/resultsMen"; // Asegúrate de importar la acción fetchData

const ZapatillasCardK = () => {
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const itemsPerPage = 9; // Cantidad de elementos por página

  const filteredResults = useSelector((state) => state.results.results); // Obtén los resultados filtrados desde el estado de Redux
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  console.log(filteredResults);

  // Cálculo del total de páginas
  const totalPages = Math.ceil(filteredResults.length / itemsPerPage);

  // Función para generar los números de página
  const generatePageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <>
      <div className={styles.product}>
        <div className={styles.cards}>
          {filteredResults
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((zapatilla) => (
              <ZapatillaCard key={zapatilla.id} zapatilla={zapatilla} />
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
          disabled={currentPage * itemsPerPage >= filteredResults.length}
          className={`${styles.buttonpag} ${
            currentPage * itemsPerPage >= filteredResults.length
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

export default ZapatillasCardK;
