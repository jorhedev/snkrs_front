import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";
import Banner from "../../components/banner/banner";
import Footer from "../../components/Footer/Footer";
import BeMember from '../../components/BeMember/BeMember'
import { Link, useLocation } from "react-router-dom";
import zapa from '../../assets/Image/zapatillas.png'


import styles from "./Genders.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/products";
import Paginated from "../../components/Paginated/Paginated";


const Genders = () => {
    const { pathname } = useLocation()
    const dispatch = useDispatch()
    const [pageGender, setPageGender] = useState(1)
    const products = useSelector(({ products }) => {
        return products.products
    })
    console.log("🚀 ~ file: Genders.jsx:21 ~ Genders ~ products:", products)

    const pages = useSelector(({ products }) => products.pages)

    useEffect(() => {
        dispatch(fetchProducts({ gender: pathname.slice(1), page: pageGender }))
    }, [dispatch, pathname, pageGender])

    const handlerChangePage = (page) => {
        setPageGender(page)
    }

    return (
        <div className={styles.containerList}>
            <Banner />

            <div className={styles.homediv}>
            </div>
            <div className={styles.zapatilla}>
                <Cards products={products} />
                <Paginated
                    currentPage={pages.currentPage}
                    totalPages={pages.totalPages}
                    onChangePage={handlerChangePage}
                />
            </div>
            <BeMember />
            <Footer />
        </div>
    )
}
export default Genders;