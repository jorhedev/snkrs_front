// store.js
import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './filtersSlice';
import zapatillasReducer from './zapatillasSlice';
import cartReducer from './cartSlice'
import productReducer from './productSlice';
import resultsMenReducer from './resultsMen'
import recordReducer from "./recordSlice"
import countryReducer from './country';
import authReducer from './auth';
import userReducer from './user';

const store = configureStore({
  reducer: {
    zapatillas: zapatillasReducer,
    filters: filtersReducer,
    auth: authReducer,
    user: userReducer,
    cart: cartReducer,
    products: productReducer,
    results: resultsMenReducer,
    record: recordReducer,
    country: countryReducer
  }
});

export default store;
