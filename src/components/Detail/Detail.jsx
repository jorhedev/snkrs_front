/** @format */

// Detail.js
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { BsHeart } from "react-icons/bs";
import PropTypes from "prop-types";
import axios from "axios";
import "./Detail.css";
import { addCartItemsById } from "../../redux/cartSlice";
import Swal from "sweetalert2";

import TopSales from "../TopSales/TopSales";
import BeMember from '../../components/BeMember/BeMember'

import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../../components/Footer/Footer'
import zapa from '../../assets/Image/zapatillas.png'

const Detail = () => {
  // Obtén el parámetro de la URL que contiene el ID de la zapatilla
  const dispatch = useDispatch();
  const { id } = useParams();
  const [zapatilla, setZapatilla] = useState(null);
  console.log(zapatilla);
  const [selectedSize, setSelectedSize] = useState(null);

  // Función para manejar el clic en un botón de tamaño
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  useEffect(() => {
    // Realiza una solicitud HTTP para obtener los detalles de la zapatilla
    axios
      .get(`http://localhost:3001/products/${id}`)
      .then((response) => {
        setZapatilla(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos de zapatilla:", error);
      });
  }, [id]);

  // Si la zapatilla no se encuentra, puedes mostrar un mensaje de carga o error.
  if (zapatilla === null) {
    return <div>Cargando...</div>;
  }
  const addToCartHandler = () => {
    if (selectedSize === null) {
      Swal.fire({
        icon: "warning",
        title: "Select a size",
        showConfirmButton: true,
        confirmButtonColor: "black",
      });
    } else {
      const shoeToAdd = {
        ...zapatilla,
        stock: zapatilla.stock.map(e => {
          const newStock = {
            ...e,
            size: selectedSize
          }
          return newStock
        })
      }
      console.log('MY SHOE', shoeToAdd)
      dispatch(addCartItemsById(shoeToAdd));
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
      {/* <div className="arrow">
        <Link className="homebtn" to={"/home"}>
          <p>
          <img src={zapa} alt="" width={30}/> Home
          </p>

        </Link>
      </div> */}

      <div className="detail-container">
        <div className="product">
         
          <div className="imagenes">
            {/* Aquí puedes renderizar las imágenes de la zapatilla */}
            <div className="product-images">
              {/* Aquí puedes renderizar las imágenes de la zapatilla, excluyendo la primera */}
              {zapatilla.image.slice(1).map((image, index) => (
                <div className={`im${index + 1}`} key={index}>
                  <img
                    className={`img${index + 1}`}
                    src={image.src}
                    alt={zapatilla.name}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="product-main-image">
            <img src={zapatilla?.image[0].src} alt={zapatilla.name} />
          </div>

          <div className="product-info">
            <div className="info">
              <h1 className="name">{zapatilla.brand}</h1>
              <h2>{zapatilla.model}</h2>
              <p className="type"> {zapatilla.type}</p>
              <p className="price"> $ {zapatilla.price}</p>
              <h2>Size (US)</h2>
              <div className="size">
                <a
                  href="#"
                  onClick={() => handleSizeClick("4")}
                  className={selectedSize === "4" ? "selected" : ""}
                >
                  4
                </a>
                <a
                  href="#"
                  onClick={() => handleSizeClick("4.5")}
                  className={selectedSize === "4.5" ? "selected" : ""}
                >
                  4.5
                </a>
                <a
                  href="#"
                  onClick={() => handleSizeClick("5")}
                  className={selectedSize === "5" ? "selected" : ""}
                >
                  5
                </a>
                <a
                  href="#"
                  onClick={() => handleSizeClick("5.5")}
                  className={selectedSize === "5.5" ? "selected" : ""}
                >
                  5.5
                </a>
                <a
                  href="#"
                  onClick={() => handleSizeClick("6")}
                  className={selectedSize === "6" ? "selected" : ""}
                >
                  6
                </a>
                <a
                  href="#"
                  onClick={() => handleSizeClick("6.5")}
                  className={selectedSize === "6.5" ? "selected" : ""}
                >
                  6.5
                </a>
                <a
                  href="#"
                  onClick={() => handleSizeClick("7")}
                  className={selectedSize === "7" ? "selected" : ""}
                >
                  7
                </a>
                <a
                  href="#"
                  onClick={() => handleSizeClick("7.5")}
                  className={selectedSize === "7.5" ? "selected" : ""}
                >
                  7.5
                </a>
                <a
                  href="#"
                  onClick={() => handleSizeClick("8")}
                  className={selectedSize === "8" ? "selected" : ""}
                >
                  8
                </a>
                <a
                  href="#"
                  onClick={() => handleSizeClick("8.5")}
                  className={selectedSize === "8.5" ? "selected" : ""}
                >
                  8.5
                </a>
                <a
                  href="#"
                  onClick={() => handleSizeClick("9")}
                  className={selectedSize === "9" ? "selected" : ""}
                >
                  9
                </a>
                <a
                  href="#"
                  onClick={() => handleSizeClick("9.5")}
                  className={selectedSize === "9.5" ? "selected" : ""}
                >
                  9.5
                </a>
                <a
                  href="#"
                  onClick={() => handleSizeClick("10")}
                  className={selectedSize === "10" ? "selected" : ""}
                >
                  10
                </a>
                <a
                  href="#"
                  onClick={() => handleSizeClick("10.5")}
                  className={selectedSize === "10.5" ? "selected" : ""}
                >
                  10.5
                </a>
                <a
                  href="#"
                  onClick={() => handleSizeClick("11")}
                  className={selectedSize === "11" ? "selected" : ""}
                >
                  11
                </a>
                <a
                  href="#"
                  onClick={() => handleSizeClick("11.5")}
                  className={selectedSize === "11.5" ? "selected" : ""}
                >
                  11.5
                </a>
                <a
                  href="#"
                  onClick={() => handleSizeClick("12")}
                  className={selectedSize === "12" ? "selected" : ""}
                >
                  12
                </a>

                <a
                  href="#"
                  onClick={() => handleSizeClick("12.5")}
                  className={selectedSize === "12.5" ? "selected" : ""}
                >
                  12.5
                </a>

                <a
                  href="#"
                  onClick={() => handleSizeClick("13")}
                  className={selectedSize === "13" ? "selected" : ""}
                >
                  13
                </a>

                <a
                  href="#"
                  onClick={() => handleSizeClick("13.5")}
                  className={selectedSize === "13.5" ? "selected" : ""}
                >
                  13.5
                </a>
              </div>
            </div>

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
    brand: PropTypes.string.isRequired,
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


const saleData = [
  {
    id: 1,
    name: "Yeezy",
    price: 75.99,
    type: "SPLV-350",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBOYtmOq07TgAM1UK_EsbPSnU9sxsVnmC0DwEZ6f7iJBC5ConFtqGQi5sqFINvs-Bzis&usqp=CAU",
    color: [],
    category: "ACCESSORIES",
    size: "4",
  },
  {
    id: 2,
    name: "Yeezy",
    price: 199.99,
    type: "SPLV-350",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBOYtmOq07TgAM1UK_EsbPSnU9sxsVnmC0DwEZ6f7iJBC5ConFtqGQi5sqFINvs-Bzis&usqp=CAU",
    color: [],
    category: "CLOTHES",
    size: "6",
  },
  {
    id: 3,
    name: "Yeezy",
    price: 199.99,
    type: "SPLV-350",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBOYtmOq07TgAM1UK_EsbPSnU9sxsVnmC0DwEZ6f7iJBC5ConFtqGQi5sqFINvs-Bzis&usqp=CAU",
    color: [],
    size: "4",
    category: "",
  },
  {
    id: 4,
    name: "Yeezy",
    price: 199.99,
    type: "SPLV-350",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBOYtmOq07TgAM1UK_EsbPSnU9sxsVnmC0DwEZ6f7iJBC5ConFtqGQi5sqFINvs-Bzis&usqp=CAU",
    color: [],
    size: "8",
    category: "",
  },
  {
    id: 5,
    name: "Yeezy",
    price: 199.99,
    type: "SPLV-350",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBOYtmOq07TgAM1UK_EsbPSnU9sxsVnmC0DwEZ6f7iJBC5ConFtqGQi5sqFINvs-Bzis&usqp=CAU",
    color: [],
    size: "6",
    category: "",
  },
  {
    id: 6,
    name: "Yeezy",
    price: 199.99,
    type: "SPLV-350",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBOYtmOq07TgAM1UK_EsbPSnU9sxsVnmC0DwEZ6f7iJBC5ConFtqGQi5sqFINvs-Bzis&usqp=CAU",
    color: [],
    size: "12",
    category: "",
  },
  {
    id: 7,
    name: "Yeezy",
    price: 199.99,
    type: "SPLV-350",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBOYtmOq07TgAM1UK_EsbPSnU9sxsVnmC0DwEZ6f7iJBC5ConFtqGQi5sqFINvs-Bzis&usqp=CAU",
    color: [],
    size: "9",
    category: ""
  },
  {
    id: 8,
    name: "Yeezy",
    price: 199.99,
    type: "SPLV-350",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBOYtmOq07TgAM1UK_EsbPSnU9sxsVnmC0DwEZ6f7iJBC5ConFtqGQi5sqFINvs-Bzis&usqp=CAU",
    color: [],
    size: "5.5",
    category: ""
  }
]
