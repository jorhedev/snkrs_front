import axios from 'axios'
import { readCookieSession } from '../services'
import { SESSION_NAME, URL_SNKRS } from '../const/const';

const axiosInstance = axios.create({
    baseURL: URL_SNKRS, // Replace with your API base URL

});

// Request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const auth = readCookieSession()
        //? ** If token is present add it to request's Authorization Header
        if (auth && auth?._id) {
            if (config.headers) config.headers.authorization = auth._id;
        }
        return config;
    },
    (error) => {

        return Promise.reject(error);
    }
);

// Interceptor de respuesta
axiosInstance.interceptors.response.use(
    (response) => {
        const customHeader = response.headers[SESSION_NAME];
        if (customHeader) {
            // Haz algo con la cabecera personalizada, por ejemplo, almacénala en una variable global
            console.log('Cabecera personalizada capturada:', customHeader);
        }
        // Simplificar la lectura de response.data
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
