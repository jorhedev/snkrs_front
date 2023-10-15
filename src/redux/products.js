import axiosInstance from '../utils/axiosInstance.js';
import { createSlice } from "@reduxjs/toolkit";
import { fetchSizes } from './filters.js';

const initialState = {
    products: [],
    detail: {}
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProducts: (state, payload) => {
            state.products = payload
        },
        setDetail: (state, { payload }) => {
            state.detail = payload
        },
        cleanProducts: (state, { payload }) => {
            state.products = []
        },
        cleanDetail: (state, { payload }) => {
            state.detail = []
        }
    }
});
// Async action to sign in
export const fetchProducts = (filters) => async (dispatch) => {
    try {
        dispatch(cleanProducts())
        if (Object.keys(filters).length) {
            let endPoint = '/products'
            Object.entries(filters).forEach(([key, value], index) => {
                if (!index) endPoint += `?${key}=${value}`
                else endPoint += `&${key}=${value}`
            })

        } else {
            console.error('Error when closing session')
        }

    } catch (error) {
        // Captura cualquier error que pueda ocurrir durante la solicitud
        console.error('Error:', error);
    }
};

export const fetchDetail = (id) => async (dispatch) => {
    try {
        dispatch(cleanDetail())
        const productDetail = await axiosInstance.get(`/products/${id}`)
        if (productDetail) {
            dispatch(setDetail(productDetail))
        }
    }
    catch (error) {
        console.error('Error:', error.message);
    }
}

export const {
    setProducts,
    setDetail,
    cleanProducts,
    cleanDetail
} = productSlice.actions;

export default productSlice.reducer;