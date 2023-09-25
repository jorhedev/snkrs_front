// rootReducer.js
import { combineReducers } from 'redux';
import zapatillasReducer from './zapatillasSlice';

const rootReducer = combineReducers({
  zapatillas: zapatillasReducer,
});

export default rootReducer;
