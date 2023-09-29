/** @format */

// Detail.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { BsHeart } from 'react-icons/bs';
import PropTypes from "prop-types";
import "./Detail.css";
import { addCartItemsById } from "../../redux/cartSlice";
import Swal from 'sweetalert2';

const Detail = () => {
  // Obtén el parámetro de la URL que contiene el ID de la zapatilla
  const dispatch = useDispatch();
  const { id } = useParams();

  // Obtén el estado de Redux con las zapatillas
  const zapatilla = useSelector((state) => {
    const zapatillas = state.zapatillas || []; // Asegúrate de que el slice se llame 'zapatillas'
    return zapatillas.find((z) => z.id === parseInt(id, 10));
  });

  // Si la zapatilla no se encuentra, puedes mostrar un mensaje de error o redirigir a una página de error.
  if (!zapatilla) {
    return <div>Zapatilla no encontrada.</div>;
  }
  const addToCartHandler = () => {
    dispatch(addCartItemsById(zapatilla));
    Swal.fire({
      icon: 'success',
      title: 'Producto Agregado al Carrito',
      showConfirmButton: false,
      timer: 1500, 
    });
  };
  return (
    <div className="detail-container">
      <div className="imagenes">
        <div className="product-images">
          {/* Aquí puedes renderizar las tres fotos una encima de la otra */}
          <div className="im1">
            <img className="img1" src={zapatilla.image} alt={zapatilla.name} />
          </div>
          <div className="im2">
            <img className="img2" src={zapatilla.image} alt={zapatilla.name} />
          </div>
          <div className="im3">
            <img className="img3" src={zapatilla.image} alt={zapatilla.name} />
          </div>
        </div>
        <div className="product-main-image">
          {/* Aquí puedes renderizar la imagen principal más grande */}
          <img src={zapatilla.image} alt={zapatilla.name} />
        </div>
      </div>
      <div className="product-info">
        <div className="info">
          <h1 className="name">ADIDAS ORIGINALS</h1>
          <h1>{zapatilla.name}</h1>
          <p className="type"> {zapatilla.type}</p>
          <p className="price"> $ {zapatilla.price}</p>
        </div>
        <div className="add">
          <h1>Size (US)</h1>
          <div className="size">
            <a href="#">4</a>
            <a href="#">6</a>
            <a href="#">8</a>
            <a href="#">10</a>
            <a href="#">12</a>
            <a href="#">4.5</a>
            <a href="#">6.5</a>
            <a href="#">8.5</a>
            <a href="#">10.5</a>
            <a href="#">12.5</a>
            <a href="#">5</a>
            <a href="#">7</a>
            <a href="#">11</a>
            <a href="#">13</a>
            <a href="#">5.5</a>
            <a href="#">7.5</a>
            <a href="#">9.5</a>
            <a href="#">11.5</a>
            <a href="#">13.5</a>
            <a href="#">9</a>
          </div>
          <div className="botones">

          <div className="btn">
            <button onClick={addToCartHandler}>ADD TO CART</button>
          </div>
                <p className="heart"><BsHeart/></p>
          </div>
        </div>
      </div>
    </div>
  );
};

Detail.propTypes = {
  zapatilla: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    color: PropTypes.array,
  }),
};

export default Detail;
