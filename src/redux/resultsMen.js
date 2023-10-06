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
    // Define acciones para ordenar la lista completa de resultados (state.results)
    sortAscendant: (state) => {
      state.results.sort((a, b) => {
        if (a.price && b.price) {
          return a.price.localeCompare(b.price);
        }
        return 0; // Otra acción adecuada en caso de error
      });
    },
    sortDescendant: (state) => {
      state.results.sort((a, b) => b.price.localeCompare(a.price));
    },
    // Define acciones para ordenar la lista filtrada (state.filteredResultsMen)
    sortFilteredAscendant: (state) => {
      state.filteredResultsMen.sort((a, b) => a.name.localeCompare(b.name));
    },
    sortFilteredDescendant: (state) => {
      state.filteredResultsMen.sort((a, b) => b.name.localeCompare(a.name));
    },
    // Define acciones para aplicar el filtro por marca
    filterByBrand: (state, action) => {
      const brandToFilter = action.payload;
      state.filteredResultsMen = state.results.filter(result => result.brand === brandToFilter);
    },
    // Puedes agregar más acciones de filtro y ordenamiento según tus necesidades...
  },
});

export const fetchData = () => async (dispatch) => {
  try {
    const { data } = await axios.get('http://localhost:3001/products');
    const rMen = data.products;
    dispatch(setResults(rMen));
    dispatch(setFilteredResultsMen(rMen)); // Inicialmente, los resultados filtrados son iguales a los resultados originales
  } catch (error) {
    console.error("Error:", error);
  }
};

// Exporta las acciones de ordenamiento y filtro
export const { setResults, setFilteredResultsMen, sortAscendant, sortDescendant, sortFilteredAscendant, sortFilteredDescendant, filterByBrand } = resultsMenSlice.actions;

export default resultsMenSlice.reducer;
