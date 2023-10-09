import axiosInstance from '../utils/axiosInstance.js';
import { createSlice } from "@reduxjs/toolkit";
import {
    SESSION_NAME,
} from "../const/const.jsx";
import { setCookieSession, readCookieSession, removeCookieSession } from '../services';
import { logOut } from '../services/firebase';
import { Signed } from '../components/Alerts';

const initialState = {
    login: {
        view: false,
        status: true
    },
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLogIn: (state, action) => {
            state.login = {
                view: false,
                status: false
            }
        },
        setLogOut: (state, action) => {
            state.login = state.login = {
                view: false,
                status: true
            }
        },
        setViewLogin: (state, action) => {
            if (action.payload === undefined)
                state.login.view = !state.login.view
            else
                state.login.view = action.payload
        },
        setStatusLogin: (state, action) => {
            state.login.status = action.payload
        },
    },
});
// Async action to sign in
export const signIn = (userCredentials) => async (dispatch) => {
    try {
        const data = await axiosInstance.post(`/auth/sign-in`, userCredentials)
        if (data) {
            setCookieSession(SESSION_NAME, data)
            dispatch(setLogIn())
            Signed()

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
        dispatch(setLogOut());
        removeCookieSession()
        await logOut()
        return
    }
    catch (error) {
        console.error('Error:', error.message);
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

export const {
    setLogIn,
    setLogOut,
    setStatusLogin,
    setViewLogin,
} = authSlice.actions;

export default authSlice.reducer;