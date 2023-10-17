import React, { useEffect, useState } from "react";
import logo from "../../assets/Image/Logo.png";
import { BsFillArrowUpCircleFill, BsFillArrowDownCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setResults } from "../../redux/resultsMen"; // Asegúrate de importar la acción correcta

import styles from "./Filter.module.css";
import { fetchProducts, setProducts } from "../../redux/products";
import { useLocation } from "react-router-dom";
import { fetchSizes } from "../../redux/filters";

const initFilters ={
  sort: "",
  brand: "",
  type: "",
  size: "",
  color:""
}

// eslint-disable-next-line react/prop-types
const Filter = ({path, onChangeFilter}) => {
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  const [pageGender, setPageGender] = useState(1)
  const products = useSelector(({ products }) => {
      return products.products
  })



  useEffect(()=>{
    setSelectedOptions(initFilters)
  },[path])

  const pages = useSelector(({ products }) => products.pages)

  const sizes = useSelector(({filters}) => filters.sizes)

  useEffect (() =>{
    dispatch(fetchSizes("men"))
  },[dispatch])

  const [selectedOptions, setSelectedOptions] = useState(
    // selectData.reduce((acc, data) => ({ ...acc, [data.stateKey]: "" }), {})
    initFilters
  );

  const handleSelectChange = (event, stateKey) => {

    const queryParams = {};
    const { value } = event.target;
    // JSON.stringify(color)

    const currentSelect = {
      ...selectedOptions,
      [stateKey]: value,
    }

    setSelectedOptions(currentSelect);

    console.log("selected", selectedOptions);

    Object.keys(currentSelect).forEach((key) => {
      const value = currentSelect[key];
      if (value) {
        queryParams[key] = value;
      }

    })

    onChangeFilter(queryParams)
  };

  // const handleReset = () => {
  //   const queryParams = {};

  //   dispatch(fetchProducts(queryParams))
    
  // };

  // const handleFilterSubmit = () => {
  //   // Construir un objeto para almacenar los parámetros de consulta seleccionados
  //   const queryParams = {};

  //   // Filtrar solo las selecciones no vacías
  //   Object.keys(selectedOptions).forEach((key) => {
  //     const value = selectedOptions[key];
  //     if (value) {
  //       queryParams[key] = value;
  //     }
  //   });

  //   // const queryString = new URLSearchParams(queryParams).toString();


  //   dispatch(fetchProducts({ gender: pathname.slice(1), page: pageGender, ...queryParams}))


  // };

  return (
    <div className={styles.filter}>
      <div className={styles.filter1}>
        <div className={styles.title}>
          <h3>Filter and Sort</h3>
          {/* <a onClick={handleReset} >Clear all</a> */}
        </div>
        <div className={styles.bar}></div>
        <img className={styles.img} src={logo} alt="logo" width={60} />

        {selectData.map((select, index) => (
          <div key={index} className={styles.selectContainer}>
            <label>{select.title}</label>
            <div className={styles.dropdown}>
            <select
              className={styles.select}
              value={selectedOptions[select?.stateKey]}
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
          </div>
        ))}

        {/* <button onClick={handleFilterSubmit}>Filtrar</button> */}
      </div>
    </div>
  );
};

export default Filter;


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