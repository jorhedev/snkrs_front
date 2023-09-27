// cardsSlice.js

import { createSlice } from '@reduxjs/toolkit';
import zapatillasData from '../assets/zapatillas.json';

const initialState = {
  zapatillas: zapatillasData,
};

const cardsSlice = createSlice({
  name: 'zapatillas',
  initialState,
  reducers: {
    addCard: (state, action) => {
      // Agregar una nueva zapatilla
      state.zapatillas.push(action.payload);
    },
    removeCard: (state, action) => {
      // Eliminar una zapatilla por ID o algún otro criterio
      state.zapatillas = state.zapatillas.filter(zapatilla => zapatilla.id !== action.payload);
    },
  },
});

export const { addCard, removeCard } = cardsSlice.actions;

export default cardsSlice.reducer;
