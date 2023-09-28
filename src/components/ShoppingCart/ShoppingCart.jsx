import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCartItems } from "../../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  useEffect(() => {
    dispatch(getCartItems());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {cartItems?.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.size}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
