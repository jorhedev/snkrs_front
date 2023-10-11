import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    searchQuery: "",
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

export const selectSearchQuery = (state) => state.products.searchQuery;

export const selectFilteredProducts = (state) => {
  const { products, searchQuery } = state.products;

  return products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

export default productSlice.reducer;
