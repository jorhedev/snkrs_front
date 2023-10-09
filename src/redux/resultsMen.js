import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  results: [], // Almacena todos los resultados originales
  filteredResultsMen: [], // Almacena los resultados filtrados
  order: 'all',
};

export const resultsMenSlice = createSlice({
  name: "results",
  initialState,
  reducers: {
    setResults: (state, action) => {
      state.results = action.payload; // Actualiza el estado con los resultados originales.
    },
    setFilteredResultsMen: (state, action) => {
      state.filteredResultsMen = action.payload; // Actualiza el estado con los resultados filtrados.
    },
    
  },
});
export const fetchData = () => async (dispatch) => {
  try {

    const { data } = await axios.get('http://localhost:3001/products?limit=1000');
    const rMen = data.products;
    dispatch(setResults(rMen));
    dispatch(setFilteredResultsMen([...rMen])); // Configura filteredResultsMen como una copia de rMen
    console.log(rMen);
  } catch (error) {
    console.error("Error:", error);
  }
};

// Exporta las acciones de ordenamiento y filtro
export const { setResults, setFilteredResultsMen } = resultsMenSlice.actions;

export default resultsMenSlice.reducer;





