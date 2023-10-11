// filtersSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../utils/axiosInstance';

const initialState = {
   sortBy: null,
   brand: null,
   model: null,
   size: null,
   color: null,
   data: {
      brands: [],
      types: [],
      categories: [],
      colors: [],
      sizes: [],
   }
};

const filters = createSlice({
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
      setDataBrands: ({ data }, action) => {
         data.brands = action.payload;
      },
      setDataCategories: ({ data }, action) => {
         data.categories = action.payload;
      },
      setDataTypes: ({ data }, action) => {
         data.types = action.payload;
      },
      setDataSizes: ({ data }, action) => {
         data.sizes = action.payload;
      },
      setDataColors: ({ data }, action) => {
         data.colors = action.payload;
      },

   },
});

export const fetchBrands = () => async (dispatch) => {
   try {
      const brands = await axiosInstance('/features/brand')
      dispatch(setDataBrands(brands))
   } catch (error) {
      console.log(error.messages)
   }
}

export const fetchTypes = (category) => async (dispatch) => {
   try {
      const types = await axiosInstance(`/features/type?category=${category}`)
         .then((data) => data.map(({ type }) => type))
      dispatch(setDataTypes(types))
   } catch (error) {
      console.log(error.messages)
   }
}

export const fetchCategories = () => async (dispatch) => {
   try {
      const categories = await axiosInstance('/features/category')
         .then(data => data.map(({ category }) => category))
      dispatch(setDataCategories(categories))
   } catch (error) {
      console.log(error.messages)
   }

}

export const fetchColors = () => async (dispatch) => {
   try {
      const colors = await axiosInstance('/features/color')
         .then(data => data.map(({ name, html }) => { return { name, html } }))
      dispatch(setDataColors(colors))
   } catch (error) {
      console.log(error.messages)
   }
}

export const fetchSizes = (gender, category = 'shoes') => async (dispatch) => {
   try {
      const sizes = await axiosInstance(`/features/size?category=${category}&gender=${gender}`)
         .then(data => data.map(({ size }) => { return size }))
      dispatch(setDataSizes(sizes))
   } catch (error) {
      console.log(error.messages)
   }
}

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

export const {
   setSortBy,
   setBrand,
   setModel,
   setSize,
   setColor,
   setDataBrands,
   setDataCategories,
   setDataColors,
   setDataSizes,
   setDataTypes,
} = filters.actions;

export default filters.reducer;
