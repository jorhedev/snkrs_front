import axiosInstance from '../utils/axiosInstance.js';
import { createSlice } from "@reduxjs/toolkit";
import {
    SESSION_NAME,
} from "../const/const";
import { setCookieSession, readCookieSession, removeCookieSession } from '../services';
import { logOut } from '../services/firebase';

const initialState = {
    user: {},
    login: {
        view: false,
        status: true
    },

};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLogIn: (state, action) => {
            state.user = action.payload;
            state.login = {
                view: false,
                status: false
            }
        },
        setLogOut: (state, action) => {
            state.user = {}
            state.login = state.login = {
                view: false,
                status: true
            }
        },
        setViewLogin: (state, action) => {
            state.login.view = !state.login.view
        },
        setStatusLogin: (state, action) => {
            state.login.status = action.payload
        }
    },
});
// Async action to sign in
export const signIn = (userCredentials) => async (dispatch) => {
    try {
        const data = await axiosInstance.post(`/auth/sign-in`, userCredentials)
        if (data) {
            const { _id, expires, ...user } = data
            setCookieSession(SESSION_NAME, data)
            dispatch(setLogIn(user));
        } else {
            console.error('Error when closing session')
        }

    } catch (error) {
        // Captura cualquier error que pueda ocurrir durante la solicitud
        console.error('Error:', error);
    }
};

export const signOut = () => async (dispatch) => {
    try {
        await axiosInstance.post(`/auth/sign-out`)
        logOut()
        dispatch(setLogOut());
        removeCookieSession()
        window.location.href = '/';
    }
    catch (error) {
        console.error('Error:', error);
    }

}

export const viewFormLog = () => (dispatch) => {
    const cookies = readCookieSession()
    if (cookies) {
        dispatch(setStatusLogin(false))
        dispatch(setViewLogin())
    } else {
        dispatch(setStatusLogin(true))
        dispatch(setViewLogin())
    }
}

export const { setLogIn, setLogOut, setStatusLogin, setViewLogin } = userSlice.actions;

export default userSlice.reducer;