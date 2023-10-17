/** @format */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { BsHeart } from "react-icons/bs";
import PropTypes from "prop-types";
import "./Detail.css";
import { addCartItemsById } from "../../redux/cartSlice";
import Swal from "sweetalert2";
import TopSales from "../TopSales/TopSales";
import BeMember from "../../components/BeMember/BeMember";

import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../components/Footer/Footer";
import InfoUser from "../InfoUser/InfoUser";
import { fetchColors, fetchSizes } from "../../redux/filters";
import { fetchDetail } from "../../redux/products";
import { ICONS } from "../../const";

const Detail = () => {
  // Obtén el parámetro de la URL que contiene el ID de la zapatilla
  const dispatch = useDispatch();
  const { id } = useParams();
  // const [zapatilla, setZapatilla] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null)
  const zapatilla = useSelector(({ products }) => products.detail)
  const colors = useSelector(({ filters }) => filters.data.colors)
  const sizes = useSelector(({ filters }) => filters.data.sizes)

  useEffect(() => {
    dispatch(fetchColors())
    dispatch(fetchDetail(id))
  }, [dispatch, id])
  // Función para manejar el clic en un botón de tamaño

  useEffect(() => {
    dispatch(fetchSizes(zapatilla.gender))
  }, [dispatch, zapatilla])

  const handleSizeClick = (size) => {
    console.log(size)
    const currentSize = size
    if (currentSize !== selectedSize) {
      return setSelectedSize(currentSize)
    }
    return setSelectedSize(null)
  };

  const handleColorClick = (color) => {
    const currentColor = color
    if (currentColor !== selectedColor) {
      return setSelectedColor(color)
    }
    return setSelectedColor(null)
  }

  if (zapatilla === null || sizes === null) {
    return <div>Cargando...</div>;
  }
  const addToCartHandler = () => {
    if (selectedSize === null || selectedColor === null) {
      if (selectedSize === null) {
        Swal.fire({
          icon: "warning",
          title: "Select one size",
          showConfirmButton: true,
          confirmButtonColor: "black",
        });
      }
      if (selectedColor === null) {
        Swal.fire({
          icon: "warning",
          title: "Select one color",
          showConfirmButton: true,
          confirmButtonColor: "black",
        });
      }
    } else {

      const isStock = zapatilla.stock.find(({ color, size }) => {
        return color.name == selectedColor && size == selectedSize;
      });

      if (!isStock) {
        Swal.fire({
          icon: "warning",
          title: "There is no product in stock",
          showConfirmButton: true,
          confirmButtonColor: "black",
        });
      } else {
        const shoeToAdd = {
          _id: zapatilla._id,
          price: zapatilla.price,
          color: isStock.color,
          size: isStock.size,
          gender: zapatilla.gender,
          image: zapatilla.image[0].src
        };
        console.log("MY SHOE", shoeToAdd);
        dispatch(addCartItemsById(shoeToAdd));
      }
    }
  };

  const settings = {
    dots: true, // Muestra los indicadores (puntitos)
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Cantidad de tarjetas visibles a la vez
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: false,
  };
  return (
    <>
      <div className="detail-container">
        <div className="product">
          <div className="imagenes">
            {/* Aquí puedes renderizar las imágenes de la zapatilla */}
            <div className="product-images">
              {/* Aquí puedes renderizar las imágenes de la zapatilla, excluyendo la primera */}
              {zapatilla?.image?.slice(1).map((image, index) => (
                <div className={`im${index + 1}`} key={index}>
                  <img
                    className={`img${index + 1}`}
                    src={image?.src}
                    alt={zapatilla?.model}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="product-main-image">
            <img src={zapatilla?.image?.[0].src} alt={zapatilla?.model} />
          </div>

          <div className="product-info">
            <div className="info">
              <h1 className="name">{zapatilla?.brand?.brand}</h1>
              <h2>{zapatilla?.model}</h2>
              <p className="type"> {zapatilla?.type}</p>
              <p className="price"> $ {zapatilla?.price}</p>
              <div className="SelectProps">
                <div className='SelectSize'>
                  <h2>Size (US)</h2>
                  <div className="size">
                    {sizes.map((size, index) => {
                      return (
                        <a
                          key={index}
                          href="#"
                          onClick={() => handleSizeClick(size)}
                          className={selectedSize === size ? "selected" : ""}
                        >{size}</a>
                      )
                    })}
                  </div>
                </div>
                <div className='SelectColors'>
                  <h2>Color </h2>
                  <div className="Colors">
                    {colors.map(({ name, html }, index) => {
                      return (
                        <a
                          key={index}
                          href="#"
                          onClick={() => handleColorClick(name)}
                          className={selectedColor === name ? "selected" : ""}
                        ><h3 title={name}>{ICONS.COLORS(html)}</h3></a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
            <p className="for">(**) For thin feet we recommend purchasing the lower size.</p>
            <div className="bo">
              <button className="boto" onClick={addToCartHandler}>
                ADD TO CART
              </button>

              <Link to="/user/favorites">
                <p className="heart">
                  <BsHeart />
                </p>
              </Link>
            </div>
          </div>
        </div>
        <InfoUser />
        <TopSales />
        <BeMember />
        <Footer />
      </div>
    </>
  );
};

Detail.propTypes = {
  zapatilla: PropTypes.shape({
    _id: PropTypes.number.isRequired,
    brand: PropTypes.object.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({ src: PropTypes.string.isRequired })
    ),
    model: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    color: PropTypes.array,
  }),
};

export default Detail;
