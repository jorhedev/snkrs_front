// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getCartItems } from "../../redux/cartSlice";

// const ShoppingCart = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart.cartItems);
//   useEffect(() => {
//     dispatch(getCartItems());
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//   return (
//     <div>
//       <h2>Carrito de Compras</h2>
//       <ul>
//         {cartItems?.map((item) => (
//           <li key={item.id}>
//             {item.name} - ${item.size}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ShoppingCart;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCartItems } from "../../redux/cartSlice";
import styles from "./ShoppingCart.module.css"; // Importa el módulo CSS

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  useEffect(() => {
    dispatch(getCartItems());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <table className={styles.cartTable}>
        <thead>
          <tr>
            <th>Color</th>
            <th>Image</th>
            <th>Type</th>
            <th>Gener</th>
            <th>Stock</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {cartItems?.map((item) => (
            <tr key={item.id}>
              <td>{item.color}</td>
              <td>
                <img src={item.image} alt={item.name} className={styles.itemImage} />
              </td>
              <td>{item.type}</td>
              <td>{item.gener}</td>
              <td>{item.stock}</td>
              <td>{item.quantity}</td>
              <td>${item.price}</td>
              <td>${item.price * item.quantity}</td>
              <td>
                <button className={styles.deleteButton}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingCart;