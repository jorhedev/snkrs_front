import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [], // Tu lista de productos
    searchQuery: "", // Consulta de búsqueda del usuario
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setProducts, setSearchQuery } = productSlice.actions;

// Selector para obtener la consulta de búsqueda del usuario
export const selectSearchQuery = (state) => state.products.searchQuery;

// Selector para obtener la lista de productos filtrados según la consulta de búsqueda
export const selectFilteredProducts = (state) => {
  const { products, searchQuery } = state.products;

  // Filtrar los productos según la consulta de búsqueda
  return products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

export default productSlice.reducer;
