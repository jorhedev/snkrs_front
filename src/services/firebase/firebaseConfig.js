/* eslint-disable no-undef */
// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseAccountConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MSN_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID
};

const firebase = initializeApp(firebaseAccountConfig);

const storage = getStorage(firebase)


export { firebase, storage }