// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import filtersReducer from './filtersSlice';

const store = configureStore({
  reducer: rootReducer,
  filters: filtersReducer,
});

export default store;
