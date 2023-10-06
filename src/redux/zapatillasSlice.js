// zapatillasSlice.js
import { createSlice } from '@reduxjs/toolkit';

const zapatillasSlice = createSlice({
  name: 'zapatillas',
  initialState: [],
  reducers: {
    addFavorite: (state, action) => {
      state.push(action.payload);
    },
    removeFavorite: (state, action) => {
      return state.filter((zapatilla) => zapatilla.id !== action.payload.id);
    },
  },
});
console.log(zapatillasSlice)

export const { addFavorite, removeFavorite } = zapatillasSlice.actions;

export default zapatillasSlice.reducer;
