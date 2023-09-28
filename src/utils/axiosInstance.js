import axios from 'axios'
import { readCookieSession } from '../services'
import { URL_SNKRS } from '../const/const';

const axiosInstance = axios.create({
    baseURL: URL_SNKRS,
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
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
