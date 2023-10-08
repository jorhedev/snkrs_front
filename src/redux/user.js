import axiosInstance from '../utils/axiosInstance.js';
import { createSlice } from "@reduxjs/toolkit";
import {
    SESSION_NAME,
} from "../const/const.jsx";
import { setCookieSession, readCookieSession, removeCookieSession } from '../services';
import { logOut } from '../services/firebase';

const initialState = {
    user: {},
    users: [],
};


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setAllUsers: (state, action) => {
            state.users = action.payload
        }
    },
});

export const fetchUserById = (id) => async (dispatch) => {
    try {
        const user = await axiosInstance.get(`/user/${id}`)
        dispatch(setUser(user))
    } catch (error) {
        console.log(error.message)
    }
}

export const fetchAllUser = () => async (dispatch) => {
    try {
        const users = await axiosInstance.get(`/user`)
        dispatch(setUser(users))
    } catch (error) {
        console.log(error.message)
    }
}

export const {
    setUser,
    setAllUsers
} = userSlice.actions;

export default userSlice.reducer;