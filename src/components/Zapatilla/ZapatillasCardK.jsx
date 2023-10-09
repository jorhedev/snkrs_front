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
  console.log(fetchData)

  const results = useSelector((state) => state.results.results)
  const dispatch = useDispatch();
  console.log(results); 

  useEffect(() => {
    dispatch(fetchData())
  }, []);


  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/products")
  //     .then((response) => {
  //       if (Array.isArray(response.data.products)) {
  //         // Actualiza el estado con los datos de zapatillas obtenidos
  //         setZapatillasData(response.data.products);
  //       } else {
  //         console.error(
  //           "Los datos de zapatillas no son un arreglo válido:",
  //           response.data
  //         );
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error al obtener los datos de zapatillas:", error);
  //     });
  // }, []);
 

  // Cálculo del total de páginas
  const totalPages = Math.ceil(results.length / itemsPerPage);

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