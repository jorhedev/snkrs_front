
import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import logo from "../../assets/Image/Logo.png";
import Search from "../../components/Seach/Search";

import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Filter from "../Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, setResults } from "../../redux/resultsMen";
import favorites, { addFavorites, fetchFavorites, removeFavorites } from "../../redux/favorites"
import styles from "./Cards.module.css";
import { NotLogin } from "../Alerts";
const itemsPerPage = 9;

const Cards = ({ results }) => {
    console.log("🚀 ~ file: Cards.jsx:18 ~ Cards ~ results:", results)
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [isLiked, setIsLiked] = useState({});
    const login = useSelector(({ auth }) => !auth.status)
    const favorites = useSelector(({ favorites }) => favorites.favorites)

    useEffect(() => {
        dispatch(fetchData());
        dispatch(fetchFavorites())
        // Cargar productos favoritos desde el almacenamiento local al cargar la página
        const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || {};
        setIsLiked(savedFavorites);
    }, [dispatch]);

    // Declare results here after fetching data from Redux

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = results.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(results.length / itemsPerPage);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleFilterProducts = (searchQuery) => {
        const filteredResults = results.filter((zapa) =>
            zapa.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setCurrentPage(1);
    };

    const handleLikeClick = (zapa) => {
        if (login) {
            if (favorites.includes(zapa._id)) {
                dispatch(removeFavorites(zapa._id));
            } else {
                dispatch(addFavorites(zapa._id));
            }
        } else {
            NotLogin()
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <>
            <div className={styles.product}>
                <div className={styles.cards}>
                    {currentItems.map((zapa) => (
                        <Link
                            to={`/detail/${zapa._id}`}
                            className={styles.containe}
                            key={zapa._id}
                            style={{ textDecoration: "none" }}
                        >
                            <div className={styles.card} key={zapa._id}>
                                <img src={zapa?.image[0]?.src} alt={zapa.name} />

                                <div className={styles.name}>
                                    <h2>{zapa?.brand}</h2>
                                    <div className={styles.price}>
                                        <p>$ {zapa?.price}</p>
                                        <div></div>
                                    </div>
                                </div>

                                <div className={styles.type}>
                                    <span className={styles.letra}>{zapa.model}</span>

                                    <p>{zapa.type}</p>
                                    <br />
                                </div>
                                <div className={styles.circle}>

                                    <Link className={styles.start}>
                                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />
                                    </Link>
                                    <img src={logo} alt="logo" width={70} />
                                </div>

                                <button
                                    className={`${styles.likeButton} ${isLiked[zapa._id] ? styles.liked : ""
                                        }`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleLikeClick(zapa);
                                    }}
                                >
                                    <span role="img" aria-label="Corazón">
                                        {favorites.includes(zapa._id) ? "❤️" : "🤍"}
                                    </span>
                                </button>
                            </div>
                        </Link>
                    ))}
                </div>
                <Filter />

            </div>

            <div className={styles.pagination}>
                <ul className={styles.paginationList}>
                    <li
                        className={`${styles.pageButton} ${currentPage === 1 ? styles.disabled : ""
                            }`}
                        onClick={handlePrevPage}
                    >
                        Back
                    </li>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <li
                            key={index}
                            className={`${styles.pageButton} ${currentPage === index + 1 ? styles.activePage : ""
                                }`}
                            onClick={() => paginate(index + 1)}
                        >
                            {index + 1}
                        </li>
                    ))}
                    <li
                        className={`${styles.pageButton} ${currentPage === totalPages ? styles.disabled : ""
                            }`}
                        onClick={handleNextPage}
                    >
                        Next
                    </li>
                </ul>
            </div>
        </>
    );
};

Cards.propTypes = {
    results: PropTypes.array
}

export default Cards;
