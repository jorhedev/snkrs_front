// filtersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sortBy: null,
  brand: null,
  model: null,
  size: null,
  color: null,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setBrand: (state, action) => {
      state.brand = action.payload;
    },
    setModel: (state, action) => {
      state.model = action.payload;
    },
    setSize: (state, action) => {
      state.size = action.payload;
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const {
  setSortBy,
  setBrand,
  setModel,
  setSize,
  setColor,
} = filtersSlice.actions;

// Selector para obtener productos filtrados según los filtros
export const selectFilteredProducts = (state) => {
  const { brand, model } = state.filters;
  const { products } = state.products;

  // Filtrar los productos según brand y model
  const filteredProducts = products.filter((product) =>
    (!brand || product.brand.toLowerCase().includes(brand.toLowerCase())) &&
    (!model || product.model.toLowerCase().includes(model.toLowerCase()))
  );

  return filteredProducts;
};


export default filtersSlice.reducer;
