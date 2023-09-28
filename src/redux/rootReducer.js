// rootReducer.js
import { combineReducers } from 'redux';
import zapatillasReducer from './zapatillasSlice';
import cartSlice from './cartSlice';
import filtersSlice from './filtersSlice';

const rootReducer = combineReducers({
  zapatillas: zapatillasReducer,
  cart: cartSlice,
  filters: filtersSlice
});

export default rootReducer;
