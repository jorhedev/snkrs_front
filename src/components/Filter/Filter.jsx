import React, { useState } from "react";
import logo from "../../assets/Image/Logo.png";
import {
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByBrand,
  sortAscendant,
  sortDescendant,
} from "../../redux/resultsMen";

import styles from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();

  const dropdownData = [
    {
      title: "Sort by",
      stateKey: "sortBy",
      options: [
        "PRICE (LOWEST TO HIGHEST)",
        "NEWS",
        "BEST SELLERS",
        "PRICE (HIGHEST TO LOWEST)",
      ],
    },
    {
      title: "Brand",
      stateKey: "brand",
      options: ["ACCESSORIES", "CLOTHES", "SHOES"],
    },
    {
      title: "Model",
      stateKey: "model",
      options: [
        "BASKETBALL",
        "RUNNING",
        "HIKING & CLIMBING",
        "SOCCER",
        "CLIMBING",
        "CASUAL",
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
      options: ["🔴", "🟢", "🔵", "⚫️", "⚪️", "🟠", "🟣", "🟡", "🟤"],
    },
  ];

  const [isOpen, setIsOpen] = useState(Array(dropdownData.length).fill(false));
  const [selectedOptions, setSelectedOptions] = useState(
    dropdownData.map(() => null)
  );
  const [iconoArriba, setIconoArriba] = useState(
    Array(dropdownData.length).fill(true)
  );

  const toggleDropdown = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);

    const newIconoArriba = [...iconoArriba];
    newIconoArriba[index] = !newIconoArriba[index];
    setIconoArriba(newIconoArriba);
  };

  const handleOptionClick = (index, option) => {
    const { stateKey } = dropdownData[index];

    switch (stateKey) {
      case "sortBy":
        switch (option) {
          case "PRICE (LOWEST TO HIGHEST)":
            // Llama a la acción de Redux para ordenar por precio ascendente
            dispatch(sortAscendant());
            break;
          // case "NEWS":
          //   // Llama a la acción de Redux para ordenar por noticias
          //   dispatch(sortTopCategory());
          //   break;
          // case "BEST SELLERS":
          //   // Llama a la acción de Redux para ordenar por los más vendidos
          //   dispatch(sortLowCategory());
          //   break;
          case "PRICE (HIGHEST TO LOWEST)":
            // Llama a la acción de Redux para ordenar por precio descendente
            dispatch(sortDescendant());
            break;
          default:
            break;
        }
        break;
      case "brand":
        // Llama a la acción de Redux para filtrar por marca
        dispatch(filterByBrand(option));
        break;
      // Agrega más casos para otros filtros y acciones de ordenamiento si es necesario...
      default:
        break;
    }

    setIsOpen(Array(dropdownData.length).fill(false));
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

        {dropdownData.map((dropdown, index) => (
          <div key={index} className={styles.dropdown}>
            <div className={styles.sort}>
              <h4>{dropdown.title}</h4>
              <button
                className={styles.dropbtn}
                onClick={() => toggleDropdown(index)}
              >
                {iconoArriba[index] ? (
                  <BsFillArrowDownCircleFill />
                ) : (
                  <BsFillArrowUpCircleFill />
                )}
              </button>
            </div>
            <div className={styles.punto}></div>
            {isOpen[index] && (
              <div className={styles.dropdowncont}>
                {dropdown.options.map((option, optionIndex) => (
                  <a
                    key={optionIndex}
                    href="#"
                    onClick={() => handleOptionClick(index, option)}
                  >
                    {option}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
