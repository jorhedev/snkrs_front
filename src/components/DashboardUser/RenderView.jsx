import React, { useState } from 'react';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import styles from "./RenderView.module.css"
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/zapatillasSlice';

// eslint-disable-next-line react/prop-types
const RenderView = ({ selectedView }) => {

  const dispatch = useDispatch();
  const zapatillas = useSelector((state) => state.zapatillas); // Suponiendo que 'zapatillas' es el nombre del slice en tu store

  // Estado local para almacenar zapatillas favoritas
  const [favoritas, setFavoritas] = useState([]);

  // Función para agregar una zapatilla como favorita
  const agregarFavorita = (item) => {
    dispatch(addFavorite(item)); // Llamando a la acción para agregarla al estado global
    setFavoritas([...favoritas, item]); // Actualizando el estado local
  };

  const eliminarFavorita = (item) => {
    dispatch(removeFavorite(item)); // Llamando a la acción para eliminarla del estado global
    setFavoritas(favoritas.filter((zapatilla) => zapatilla.id !== item.id)); // Actualizando el estado local
  };

  switch (selectedView) {
    case 'profile':
      return (
        <div>
          <h1>This is profile</h1>
        </div>
      );
    case 'favorites':
      return (
        <div  className={styles.cartContainer}>
          <h1>Favorite</h1>
          <Link className={styles.homebtn} to={'/home'}><p><AiOutlineArrowLeft/> Home</p></Link>
        <table className={styles.cartTable}>
        <thead>
          <tr>
            <th></th>
            
            <th>Image</th>
            <th>Type</th>
            <th>Gender</th>
           
            <th>Price</th>
            <th></th>
            <th></th>
           
          </tr>
        </thead>
        <tbody>
          {zapatillas.map((item) => (
            <tr key={item.id}>
              <td></td>
              <td>
                <img src={item.image} alt={item.name} className={styles.itemImage} />
              </td>
              <td>{item.type}</td>
              <td>{item.gender}</td>
              <td>{item.price}</td>
              <td></td>
              <td>
                
               
                  <button className={styles.btn} onClick={() => eliminarFavorita(item)}>Delete</button>
               
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
      );
    case 'shopping':
      return (
        <div>
          <ShoppingCart/>
        </div>
      );
    case 'record':
      return (
        <div>
          <h1>this is record</h1>
        </div>
      );
    default:
      return null;
  }
};

export default RenderView;