import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCartItems } from "../../redux/cartSlice";
import styles from "./ShoppingCart.module.css";
import { MdClose } from "react-icons/md";
import { FaPlusCircle, FaMinusCircle, FaTrashAlt } from "react-icons/fa";
import { itemIncrement, itemDecrement, removeFromCart, clearCart } from "../../redux/cartSlice";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const ShoppingCart = () => {
  const MySwal = withReactContent(Swal);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  useEffect(() => {
    dispatch(getCartItems());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [showTable, setShowTable] = useState(true);
  const handleIncrease = (item) => {
    dispatch(itemIncrement({ id: item.id }));
  };

  const handleDecrease = (item) => {
    dispatch(itemDecrement({ id: item.id }));
  };
  const handleClearCart = () => {
    MySwal.fire({
      title: 'WARNING',
      text: '¿Are you sure to empty the cart?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(clearCart());
        setShowTable(false);
      }
    });
  };
  const handleRemove = (item) => {
    MySwal.fire({
      title: '¿WARNING?',
      text: `¿Are you sure to delete "${item.name}" the cart?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeFromCart({ id: item.id }));
        
        if (cartItems.length === 1) {
          setShowTable(false);
        }
      }
    });
  };
  return (
    <div className={styles.cartContainer}>
      <h2>Carrito de Compras</h2>
      {showTable ? ( 
        <div className={styles.tableContainer}>
        <table className={styles.cartTable}>
        <thead>
          <tr>
            <th></th>
            <th>Color</th>
            <th>Imagen</th>
            <th>Tipo</th>
            <th>Género</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems?.map((item) => (
            <tr key={item.id}>
              <td>
              <div className={styles.deleteButton} onClick={() => handleRemove(item)}>
                  <MdClose className={styles.icon} />
                </div>
              </td>
              <td>{item.color}</td>
              <td>
                <img src={item.image} alt={item.name} className={styles.itemImage} />
              </td>
              <td>{item.type}</td>
              <td>{item.gener}</td>
              <td className={styles.quantityCell}>
                  <div className={styles.quantityButton} onClick={() => handleDecrease(item)}>
                    <FaMinusCircle />
                  </div>
                  {item.quantity}
                  <div className={styles.quantityButton} onClick={() => handleIncrease(item)}>
                    <FaPlusCircle />
                  </div>
                </td>
              <td>${item.price}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td> 
            </tr>
          ))}
        </tbody>
        </table>
        </div>
      ) : (
       
        <p>El carrito está vacío</p>
      )}
      {showTable && cartItems.length > 0 && ( 
        <FaTrashAlt className={styles.trash} onClick={handleClearCart}/> 
      )}
      {showTable && cartItems.length > 0 && ( 
        <button className={styles.pay}>PAGAR</button>
      )}
    </div>
    
  );
};

export default ShoppingCart;