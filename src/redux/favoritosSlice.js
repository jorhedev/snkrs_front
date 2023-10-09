// En tu archivo favoritosSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Definir una acción asincrónica para cargar los favoritos desde el servidor
export const fetchFavorites = createAsyncThunk('favorites/fetchFavorites', async () => {
  const response = await axios.get('http://localhost:3001/favorites');
  return response.data;
});

export const addFavorite = createAsyncThunk('favorites/addFavorite', async (newFavorite) => {
  const response = await axios.post('http://localhost:3001/favorites', newFavorite);
  return response.data;
});

export const removeFavorite = createAsyncThunk('favorites/removeFavorite', async (favoriteId) => {
  await axios.delete(`http://localhost:3001/favorites/${favoriteId}`);
  return favoriteId;
});

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        // Actualizar el estado con los favoritos cargados desde el servidor
        return action.payload;
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        // Agregar un nuevo favorito al estado después de crearlo en el servidor
        state.push(action.payload);
      })
      .addCase(removeFavorite.fulfilled, (state, action) => {
        // Eliminar un favorito por su ID del estado después de eliminarlo en el servidor
        return state.filter((favorite) => favorite.id !== action.payload);
      });
  },
});

export default favoritosSlice.reducer;
