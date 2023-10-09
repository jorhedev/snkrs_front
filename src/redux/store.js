// store.js
import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './filtersSlice';
import zapatillasReducer from './zapatillasSlice';
import userReducer from './user';
import cartReducer from './cartSlice'
import productReducer from './productSlice';
import resultsMenReducer from './resultsMen'
import recordReducer from "./recordSlice"
import countryReducer from './country';
import favoritosReducer, { fetchFavorites, addFavorite, removeFavorite } from './favoritosSlice';

const store = configureStore({
  reducer: {
    zapatillas: zapatillasReducer,
    filters: filtersReducer,
    user: userReducer,
    cart: cartReducer,
    products: productReducer,
    results: resultsMenReducer,
    record: recordReducer,
    country: countryReducer,
    favoritos: favoritosReducer,
  }
});
// Cargar los favoritos al inicializar la aplicación
store.dispatch(fetchFavorites());

export default store;
