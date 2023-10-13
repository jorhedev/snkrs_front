import axiosInstance from '../utils/axiosInstance.js';
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: [],
    storages: [],
};

export const favotites = createSlice({
    name: "favotites",
    initialState,
    reducers: {
        setFavorites: ({ storages, favorites }, { payload }) => {
            storages.push(payload)
            favorites = payload.map(({ _id }) => { return _id })
        },
        mergeFavorites: ({ favorites }, { payload }) => {
            favorites.push(payload)
        },
        deleteFavorites: ({ favorites }, { payload }) => {
            return favorites.filter(favorite => favorite !== payload)
        },
        cleanFavorites: (state, { payload }) => {
            state.favorites = []
        },
    },
});
// Async action to sign in
export const fetchFavorites = () => async (dispatch) => {
    try {
        const data = await axiosInstance.get(`/favorites`)
        if (data)
            console.log("🚀 ~ file: favorites.js:33 ~ fetchFavorites ~ data:", data)
        dispatch(setFavorites(data))
        return
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