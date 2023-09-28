import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getCart: (state, action) => {
      state.cartItems = state.cartItems.length > 0 ? state.cartItems: [{
        id:1,
        name: 'cart',
        size: 1,
      }];
    },
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cartItems.filter(item => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const getCartItems = () => async (dispatch) => {
  try {
    dispatch(getCart());
      // const response = await axios.get(`${URL_FINDHOTEL}/cart/`, );
      // dispatch(getCart(response.data)); // Llama a la acción setCountries con los nombres de los países
  } catch (error) {
      // Manejo de errores si es necesario
  }
};

export const addCartItemsById = (item) => async (dispatch) => {
  try {
      // const response = await axios.post(`${URL_FINDHOTEL}/cart/${item.id}`, );
      dispatch(addToCart(item)); // Llama a la acción setCountries con los nombres de los países
  } catch (error) {
      // Manejo de errores si es necesario
  }

};
export const removeCartItemsById = (item) => async (dispatch) => {
  try {
      // const response = await axios.delete(`${URL_FINDHOTEL}/cart/${item.id}`, );
      dispatch(removeFromCart(item)); // Llama a la acción setCountries con los nombres de los países
  } catch (error) {
      // Manejo de errores si es necesario
  }
};

export const clearCartCartItemsById = () => async (dispatch) => {
  try {
      // const response = await axios.put(`${URL_FINDHOTEL}/cart/`, );
      dispatch(clearCart()); // Llama a la acción setCountries con los nombres de los países
  } catch (error) {
      // Manejo de errores si es necesario
  }
};
export const { getCart, addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;