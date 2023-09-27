// filtersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sortBy: null,
  productCategory: null,
  productType: null,
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
    setProductCategory: (state, action) => {
      state.productCategory = action.payload;
    },
    setProductType: (state, action) => {
      state.productType = action.payload;
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
  setProductCategory,
  setProductType,
  setSize,
  setColor,
} = filtersSlice.actions;

export default filtersSlice.reducer;
