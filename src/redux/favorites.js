import axiosInstance from '../utils/axiosInstance.js';
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: [],
    storages: [],
    pages: {
        currentPage: 0,
        itemsRange: { min: 0, max: 0 },
        totalPages: 0,
    }
};

export const favotites = createSlice({
    name: "favotites",
    initialState,
    reducers: {
        setFavorites: (state, { payload }) => {
            state.favorites = payload.favorites.map(({ _id }) => { return _id })
            state.storages = payload.favorites
            state.pages = { ...payload.pages }
        },
        mergeFavorites: ({ favorites }, { payload }) => {
            favorites.push(payload)
        },
        deleteFavorites: (state, { payload }) => {
            state.favorites = state.favorites.filter((favorite) => (favorite != payload))
        },
        cleanFavorites: (state, { payload }) => {
            state.favorites = []
        },
    },
});
// Async action to sign in
export const fetchFavorites = (filters) => async (dispatch) => {
    try {
        let endPoint = `/favorites`
        if (Object.keys(filters).length) {
            Object.entries(filters).forEach(([key, value], index) => {
                if (!index) endPoint += `?${key}=${value}`
                else endPoint += `&${key}=${value}`
            })
        }
        const data = await axiosInstance.get(endPoint)
        console.log("🚀 ~ file: favorites.js:45 ~ fetchFavorites ~ data:", data)
        if (data) dispatch(setFavorites(data))
    }
    catch (error) {
        console.error('Error:', error.message);
    }
}
export const addFavorites = (id) => async (dispatch) => {
    try {
        const data = await axiosInstance.post(`/favorites/${id}`)
        if (data)
            dispatch(mergeFavorites(id))
        return

    } catch (error) {
        console.error('Error:', error);
    }
};


export const removeFavorites = (id) => async (dispatch) => {
    try {
        const data = await axiosInstance.delete(`/favorites/${id}`)
        if (data)
            dispatch(deleteFavorites(id))
    } catch (error) {
        console.error('Error:', error.message);
    }
}

export const removeAllFavorites = () => async (dispatch) => {
    try {
        const data = await axiosInstance.delete(`/favorites`)
        if (data)
            dispatch(cleanFavorites())
    } catch (error) {
        console.error('Error:', error.message);
    }
}

export const {
    mergeFavorites,
    setFavorites,
    deleteFavorites,
    cleanFavorites
} = favotites.actions;

export default favotites.reducer;