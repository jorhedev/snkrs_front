// store.js
import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './filtersSlice';
import zapatillasReducer from './zapatillasSlice';
import userReducer from './user';
import productReducer from "./productSlice";

const store = configureStore({
  reducer: {
    zapatillas: zapatillasReducer,
    filters: filtersReducer,
    user: userReducer,
    products: productReducer,
  }
});

export default store;
