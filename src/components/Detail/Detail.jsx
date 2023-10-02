import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsHeart } from "react-icons/bs";
import PropTypes from "prop-types";
import axios from "axios";
import "./Detail.css";

const Detail = () => {
  // Obtén el parámetro de la URL que contiene el ID de la zapatilla
  const { id } = useParams();
  const [zapatilla, setZapatilla] = useState(null);
  console.log(zapatilla)

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


  return (
    <div className="detail-container">
      <div className="imagenes">
        <div className="product-images">
          {/* Aquí puedes renderizar las imágenes de la zapatilla */}
          {zapatilla.image.map((image, index) => (
            <div className={`im${index + 1}`} key={index}>
              <img className={`img${index + 1}`} src={image.src} alt={zapatilla.name} />
            </div>
          ))}
        </div>
        <div className="product-main-image">
          {/* Aquí puedes renderizar la imagen principal más grande */}
          <img src={zapatilla?.image[0].src} alt={zapatilla.name} />
        </div>
      </div>
      <div className="product-info">
        <div className="info">
          <h1 className="name">{zapatilla.brand}</h1>
          <h1>{zapatilla.model}</h1>
          <p className="type"> {zapatilla.type}</p>
          <p className="price"> $ {zapatilla.price}</p>
        </div>
        <div className="add">
          <h1>Size (US)</h1>
          <div className="size">
            {/* Renderiza las opciones de tamaño aquí */}
          </div>
          <div className="botones">
            <div className="btn">
              <button>ADD TO CART</button>
            </div>
            <p className="heart">
              <BsHeart />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Detail.propTypes = {
  zapatilla: PropTypes.shape({
    id: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.shape({ src: PropTypes.string.isRequired })),
    model: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    color: PropTypes.array,
  }),
};

export default Detail;
