// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import filtersReducer from './filtersSlice';
import cardsReducer from './cardsSlice';

const store = configureStore({
  reducer: rootReducer,
  filters: filtersReducer,
  cards: cardsReducer,
});

export default store;
