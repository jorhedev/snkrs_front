import axiosInstance from '../utils/axiosInstance.js';
import { createSlice } from "@reduxjs/toolkit";

export const favotitesSlice = createSlice({
    name: "favotites",
    initialState: [],
    reducers: {
        setFavorites: (state, action) => {
            state = action.payload
        },
        mergeFavorites: (state, action) => {
            state.push(action.payload)
        },
        deleteFavorites: (state, action) => {
            return state.filter(favorite => favorite !== action.payload)
        },
        cleanFavorites: (state, action) => {
            state = []
        },
    },
});
// Async action to sign in
export const fetchFavorites = () => async (dispatch) => {
    try {
        const data = await axiosInstance.get(`/favotites`)
        if (data) dispatch(setFavorites(data));
        return
    }
    catch (error) {
        console.error('Error:', error.message);
    }
}
export const addFavorites = (id) => async (dispatch) => {
    try {
        // const data = await axiosInstance.post(`/favotites/${id}`)
        // if (data)
        dispatch(mergeFavorites(id))
        return

    } catch (error) {
        console.error('Error:', error);
    }
};


export const removeFavorites = (id) => async (dispatch) => {
    console.log("🚀 ~ file: favorites.js:47 ~ removeFavorites ~ id:", id)
    try {
        // const data = await axiosInstance.delete(`/favotites/${id}`)
        // if (data)
        dispatch(deleteFavorites(id))
    } catch (error) {
        console.error('Error:', error.message);
    }
}

export const removeAllFavorites = () => async (dispatch) => {
    try {
        const data = await axiosInstance.delete(`/`)
        if (data) dispatch(cleanFavorites())
    } catch (error) {
        console.error('Error:', error.message);
    }
}

export const {
    mergeFavorites,
    setFavorites,
    deleteFavorites,
    cleanFavorites
} = favotitesSlice.actions;

export default favotitesSlice.reducer;