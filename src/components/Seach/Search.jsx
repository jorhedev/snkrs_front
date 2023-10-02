import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSearchQuery,
  selectSearchQuery,
  selectFilteredProducts,
} from "../../redux/productSlice";
import PropTypes from "prop-types";
import logo from "../../assets/Image/Logo.png";
import styles from "./Search.module.css";

const Search = ({ products, onFilter }) => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(selectSearchQuery);
  console.log(searchQuery)

  const handleSearchChange = (e) => {
    const query = e.target.value;
    dispatch(setSearchQuery(query));
    // Filtra los productos en función de la consulta de búsqueda y llama a la función onFilter
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    onFilter(filteredProducts);
  };


  // Filtrar productos por nombre que coincidan con la búsqueda
  const filteredByName = useSelector(selectFilteredProducts);
 console.log(filteredByName)
  return (
    <>
      <div className={styles.search__container}>
        <p className={styles.search__title}>
          Search section for the best products of all brands
        </p>
        <div className={styles.busca}>
          <input
            className={styles.search__input}
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
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
            <h3>{product.name}</h3>
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
};

export default Search;
