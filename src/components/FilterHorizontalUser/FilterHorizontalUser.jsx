import React, { useEffect, useState } from "react";
import logo from "../../assets/Image/Logo.png";
import {
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setResults } from "../../redux/resultsMen"; // Asegúrate de importar la acción correcta
import { InputSelect, InputText } from "../Inputs";
import styles from "./FilterHorizontal.module.css";
import { fetchProducts, setProducts } from "../../redux/products";
import { useLocation } from "react-router-dom";
import {
  fetchBrands,
  fetchTypes,
  fetchSizes,
  fetchColors
} from "../../redux/filters";
import { GENDER } from "../../const";
import axiosInstance from "../../utils/axiosInstance";
import { fetchCountry } from "../../redux/country";


const initFilters = {
  sort: "",
  brand: "",
  type: "",
  size: "",
  color: "",
};

// eslint-disable-next-line react/prop-types
const FilterHorizontalUser = ({ onChangeFilter }) => {
  const { pathname } = useLocation();
  const [searchTerm, setSearchTerm] = useState('');

  const dispatch = useDispatch();
  const [pageGender, setPageGender] = useState(1);
  const products = useSelector(({ products }) => {
    return products.products;
  });


  const pages = useSelector(({ products }) => products.pages);


  const [selectedOptions, setSelectedOptions] = useState(
    // selectData.reduce((acc, data) => ({ ...acc, [data.stateKey]: "" }), {})
    initFilters
  );



  ////////////////////////////////////////////SELECTS
  const genders = GENDER;
  const [infoProduct, setInfoProduct] = useState(initFilters);
  const brands = useSelector(({ filters }) => filters.data.brands);
  const types = useSelector(({ filters }) => filters.data.types);
  const sizes = useSelector(({ filters }) => filters.data.sizes);
  const colors = useSelector(({ filters }) => filters.data.colors)

  const country = useSelector(({ country }) => { return country.country })


  useEffect(() => {
    dispatch(fetchBrands());
    dispatch(fetchTypes("shoes"));
    dispatch(fetchSizes("men"));
    dispatch(fetchColors());
    dispatch(fetchCountry())
  }, [dispatch]);


  const handleFilterChange = (key, value) => {
    const updatedOptions = { ...selectedOptions, [key]: value };
    setSelectedOptions(updatedOptions);
    onChangeFilter(updatedOptions); // Llama a onChangeFilter con las opciones actualizadas
    console.log(updatedOptions);
  };

  const handleSearch = () => {
    axiosInstance.get(`/products?brand=${searchTerm}`)
      .then(response => {
        const data = response; 
        dispatch(setProducts({ products: data.products, pages: data.pages })); 
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  };

  return (
    <div className={styles.filter}>

        <div className={styles.DataInputsProducts}>
          <span className={styles.KeyData}>ORDER A-Z</span>
          <select
            name="sort"
            style={{
              width: "160px",
              borderBottom: "5px solid black",
              borderInlineEnd: "2px solid black",
            }}
            value={selectedOptions.sort}
            onChange={(e) => handleFilterChange('sort', e.target.value)}
          >
            <option value="">Select option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className={styles.DataInputsProducts}>
          <span className={styles.KeyData}>ORDER EMAIL</span>
          <select
            name="brand"
            style={{
              width: "160px",
              borderBottom: "5px solid black",
              borderInlineEnd: "2px solid black",
            }}
            value={selectedOptions.brand}
            onChange={(e) => handleFilterChange('brand', e.target.value)}
          >
            <option value="">Select option</option>
            {brands.map((brand, index) => (
              <option key={index} value={brand}>
                {brand.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.DataInputsProducts}>
          <span className={styles.KeyData}>ORDER COUNTRY</span>
          <select
            name="type"
            style={{
              width: "160px",
              borderBottom: "5px solid black",
              borderInlineEnd: "2px solid black",
            }}
            value={selectedOptions.type}
            onChange={(e) => handleFilterChange('type', e.target.value)}
          >
            <option value="">Select option</option>
            {country.map((type, index) => (
              <option key={index} value={type}>
                {type.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.DataInputsProducts}>
          <span className={styles.KeyData}>ORDER STATUS</span>
          <select
            name="size"
            style={{
              width: "160px",
              borderBottom: "5px solid black",
              borderInlineEnd: "2px solid black",
            }}
            value={selectedOptions.size}
            onChange={(e) => handleFilterChange('size', e.target.value)}
          >
            <option value="">Select option</option>
            {sizes.map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        {/* <div className={styles.searchBar}>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div> */}
    </div>
  );
};

export default FilterHorizontalUser;