// store.js
import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './filters';
import cartReducer from './cartSlice'
import productsReducer from './products';
import resultsMenReducer from './resultsMen'
import recordReducer from "./recordSlice"
import countryReducer from './country';
import favoritesReducer from './favorites';
import authReducer from './auth';
import userReducer from './user';
import reviewReducer from './reviewSlice';
import newsletterReducer from "./newsletterSlice";
const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    filters: filtersReducer,
    auth: authReducer,
    user: userReducer,
    cart: cartReducer,
    products: productsReducer,
    results: resultsMenReducer,
    record: recordReducer,
    country: countryReducer,

 
    reviews: reviewReducer,
    newsletter: newsletterReducer,
}
  
});

export default store;
