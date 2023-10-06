import React, { useState } from "react";
import logo from "../../assets/Image/Logo.png";
import { BsFillArrowUpCircleFill, BsFillArrowDownCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import {
  setSortBy,
  setBrand,
  setModel,
  setSize,
  setColor,
} from '../../redux/filtersSlice';

import styles from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

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
        "4", "6", "8", "10", "12", "4.5", "6.5", "8.5", "10.5", "12.5",
        "5", "7", "11", "13", "5.5", "7.5", "9.5", "11.5", "13.5", "9",
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
  const [iconoArriba, setIconoArriba] = useState(Array(dropdownData.length).fill(true));

  const toggleDropdown = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);

    const newIconoArriba = [...iconoArriba];
    newIconoArriba[index] = !newIconoArriba[index];
    setIconoArriba(newIconoArriba);
  };

  const handleOptionClick = (index, option) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = option;
    setSelectedOptions(newSelectedOptions);

    const { stateKey } = dropdownData[index];
    switch (stateKey) {
      case "sortBy":
        dispatch(setSortBy(option));
        break;
      case "brand":
        dispatch(setBrand(option));
        break;
      case "model":
        dispatch(setModel(option));
        break;
      case "size":
        dispatch(setSize(option));
        break;
      case "color":
        dispatch(setColor(option));
        break;
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
              <button className={styles.dropbtn} onClick={() => toggleDropdown(index)}>
                {iconoArriba[index] ? <BsFillArrowDownCircleFill /> : <BsFillArrowUpCircleFill />}
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
