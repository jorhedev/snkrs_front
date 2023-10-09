import React, { useState } from "react";
import logo from "../../assets/Image/Logo.png";
import { BsFillArrowUpCircleFill, BsFillArrowDownCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setResults } from "../../redux/resultsMen"; // Asegúrate de importar la acción correcta

import styles from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();

  const selectData = [
    {
      title: "Sort by",
      stateKey: "sort",
      options: [
        "price_desc",
        "price_asc",
      ],
    },
    {
      title: "Brand",
      stateKey: "brand",
      options: ["adidas", "nike", "puma", "fila", "reebok", "converse"],
    },
    {
      title: "Type",
      stateKey: "type",
      options: [
        "BASKETBALL",
        "RUNNING",
        "HIKING & CLIMBING",
        "SOCCER",
        "CLIMBING",
        "CASUAL",
        "CLASSIC"
      ],
    },
    {
      title: "Size (US)",
      stateKey: "size",
      options: [
        "4",
        "6",
        "8",
        "10",
        "12",
        "4.5",
        "6.5",
        "8.5",
        "10.5",
        "12.5",
        "5",
        "7",
        "11",
        "13",
        "5.5",
        "7.5",
        "9.5",
        "11.5",
        "13.5",
        "9",
      ],
    },
    {
      title: "Colors",
      stateKey: "color",
      options: ["red", "green", "blue", "black", "white", "orange", "purple", "yellow", "brown"],
    },
  ];

  const [selectedOptions, setSelectedOptions] = useState(
    selectData.reduce((acc, data) => ({ ...acc, [data.stateKey]: "" }), {})
  );

  const handleSelectChange = (event, stateKey) => {
    const { value } = event.target;
    setSelectedOptions({
      ...selectedOptions,
      [stateKey]: value,
    });
  };

  const handleFilterSubmit = () => {
    // Construir un objeto para almacenar los parámetros de consulta seleccionados
    const queryParams = {};

    // Filtrar solo las selecciones no vacías
    Object.keys(selectedOptions).forEach((key) => {
      const value = selectedOptions[key];
      if (value) {
        queryParams[key] = value;
      }
    });

    // Realizar una solicitud GET al backend con los parámetros de consulta
    const queryString = new URLSearchParams(queryParams).toString();

    fetch(`http://localhost:3001/products?limit=1000&${queryString}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la solicitud.');
        }
        return response.json();
      })
      .then(data => {
        // Manejar los resultados filtrados aquí (por ejemplo, actualizar el estado de tu componente para mostrar los resultados)
        console.log(data.products);
        dispatch(setResults(data.products));

      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className={styles.filter}>
      <div className={styles.filter1}>
        <div className={styles.title}>
          <h3>Filter and Sort</h3>
          <a href="">Clear all</a>
        </div>
        <div className={styles.bar}></div>
        <img className={styles.img} src={logo} alt="logo" width={60} />

        {selectData.map((select, index) => (
          <div key={index} className={styles.selectContainer}>
            <label>{select.title}</label>
            <select
              className={styles.select}
              value={selectedOptions[select.stateKey]}
              onChange={(event) =>
                handleSelectChange(event, select.stateKey)
              }
            >
              <option value="">Select {select.title}</option>
              {select.options.map((option, optionIndex) => (
                <option key={optionIndex} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}

        <button onClick={handleFilterSubmit}>Filtrar</button>
      </div>
    </div>
  );
};

export default Filter;
