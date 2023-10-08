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
        },
        clearState: (state, action) => {
            state.state = []
        },
        clearCity: (state, action) => {
            state.city = []

        },
        clearCountryInfo: (state, action) => {
            state.info = {}
        }
    },
});

export const fetchCountry = () => async (dispatch) => {
    try {
        const country = await axiosInstance('/world/countries')
            .then((data) => { return data.map(({ country }) => { return country }) })
        dispatch(setCountry(country.sort()))
    } catch (error) {
        console.log(error.message)
    }

}

export const fetchState = (country) => async (dispatch) => {
    dispatch(clearState())
    try {
        const { states } = await axiosInstance(`/world/stateByCountry?country=${country}`)
        dispatch(setState(states.sort()))
    } catch (error) {
        console.log(error.message)
    }

}

export const fetchCity = (country, state) => async (dispatch) => {
    dispatch(clearCity())
    try {
        const { cities } = await axiosInstance(`/world/cityByState?country=${country}&state=${state}`)
        dispatch(setCity(cities.sort()))
    } catch (error) {
        console.log(error.message)
    }

}

export const fetchCountryDetail = (country) => async (dispatch) => {
    dispatch(clearCountryInfo())
    try {
        const { flag, codes } = axiosInstance(`/world/countryDetail?country=${country}`)
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

export const {
    clearCity,
    clearState,
    clearCountryInfo,
    setCountry,
    setState,
    setCity,
    setCountryInfo
} = countrySlice.actions;

export default countrySlice.reducer;