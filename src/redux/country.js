import axiosInstance from '../utils/axiosInstance.js';
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    country: [],
    state: [],
    city: [],
    countryInfo: {
        flag: '',
        iso2: '',
        iso3: '',
        phone: '',
    }
};


export const countrySlice = createSlice({
    name: "country",
    initialState,
    reducers: {
        setCountry: (state, action) => {
            state.country = action.payload;
        },
        setState: (state, action) => {
            state.state = action.payload;
        },
        setCity: (state, action) => {
            state.city = action.payload;
        },

        setCountryInfo: (state, action) => {
            state.info = action.payload
        }
    },
});

export const fetchCountry = () => async (dispatch) => {
    try {
        const country = await axiosInstance('/countries')
            .then((data) => { return data.map(({ country }) => country) })
        dispatch(setCountry(country))
    } catch (error) {
        console.log(error.message)
    }

}

export const fetchState = (country) => async (dispatch) => {
    try {
        const { states } = axiosInstance(`/stateByCountry?country=${country}`)
        dispatch(setState(states))
    } catch (error) {
        console.log(error.message)
    }

}

export const fetchCity = (country, state) => async (dispatch) => {
    try {
        const { cities } = axiosInstance(`/cityByState?country=${country}?state=${state}`)
        dispatch(setCity(cities))
    } catch (error) {
        console.log(error.message)
    }

}

export const fetchCountryDetail = (country) => async (dispatch) => {
    try {
        const { flag, codes } = axiosInstance(`/countryDetail?country=${country}`)
        dispatch(setCountryInfo({
            flag: flag,
            iso2: codes.iso2,
            iso3: codes.iso3,
            phone: codes.phone,
        }))
    } catch (error) {
        console.log(error.message)
    }

}

export const { setCountry, setState, setCity, setCountryInfo } = countrySlice.actions;

export default countrySlice.reducer;