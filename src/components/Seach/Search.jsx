import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchQuery, selectSearchQuery } from "../../redux/productSlice";
import {
  setBrand,
  setModel,
  selectFilteredProducts,
} from "../../redux/filtersSlice";
import PropTypes from "prop-types";
import logo from "../../assets/Image/Logo.png";
import styles from "./Search.module.css";

const Search = ({ products, onFilter, onSearchByModel }) => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(selectSearchQuery);
  const brandFilter = useSelector((state) => state.filters.brand);
  const modelFilter = useSelector((state) => state.filters.model);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    dispatch(setSearchQuery(query));

    // Dividir la consulta en partes para brand y model (puedes ajustar esto según tus datos)
    const queryParts = query.split(" ");
    const brandQuery = queryParts[0] || ""; // Suponemos que la primera palabra es para brand
    const modelQuery = queryParts.slice(1).join(" "); // El resto de palabras son para model

    // Utiliza las acciones de filtersSlice para establecer los filtros de Brand y Model
    dispatch(setBrand(brandQuery)); // Esto establecerá el filtro de Brand
    dispatch(setModel(modelQuery)); // Esto establecerá el filtro de Model

    // Filtra los productos según los filtros de Brand, Model y la consulta de búsqueda
    const filteredProducts = products.filter((product) => {
      const matchesBrand = !brandFilter || product.brand.toLowerCase().includes(brandFilter.toLowerCase());
      const matchesModel = !modelFilter || product.model.toLowerCase().includes(modelFilter.toLowerCase());
      const matchesQuery = product.name.toLowerCase().includes(query.toLowerCase());
      return matchesBrand && matchesModel && matchesQuery;
    });
    onFilter(filteredProducts);
  };

  // Filtrar productos por nombre que coincidan con la búsqueda
  const filteredByName = useSelector(selectFilteredProducts);

  // Estado local para el campo de búsqueda por modelo
  const [modelSearch, setModelSearch] = useState("");

  // Función para manejar la búsqueda por modelo
  const handleModelSearch = () => {
    // Llamar a la función proporcionada por HomeViews para buscar por modelo
    onSearchByModel(modelSearch);
  };

  return (
    <>
      <div className={styles.search__container}>
        <p className={styles.search__title}>
          Search section for the best products of all brands
        </p>
        <div className={styles.busca}>
          {/* <input
            className={styles.search__input}
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          /> */}
          <input
            className={styles.search__input}
            type="text"
            placeholder="Search by Model"
            value={modelSearch}
            onChange={(e) => setModelSearch(e.target.value)}
          />
          <button
            className={styles.search__button}
            onClick={handleModelSearch}
          >
            Search by Model
          </button>
        </div>
        <div className={styles.credits__container}>
          <p className="credits__text">
            You can find the best products of 2023 in:{" "}
            <a href="#" className={styles.credits__link}>
              <img src={logo} alt="logo" width={70} />
            </a>
          </p>
        </div>
      </div>

      {/* Render the filtered products */}
      <div className={styles.filteredProducts}>
        {filteredByName.map((product) => (
          <div key={product.id}>
            {/* Render your product information here */}
            <h3>{product.brand}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

Search.propTypes = {
  products: PropTypes.array.isRequired,
  onFilter: PropTypes.func.isRequired,
  onSearchByModel: PropTypes.func.isRequired, // Prop para manejar la búsqueda por modelo
};

export default Search;
