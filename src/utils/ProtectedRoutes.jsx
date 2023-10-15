import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { SESSION_NAME } from '../const/const';
import { readCookieSession, updateCookieSession } from '../services';

const ProtectedRoutes = ({ children, nameCookie = SESSION_NAME, path, redirectPath = '/' }) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const [toHome, setToHome] = useState(false); // Inicializado a false

    const cookie = readCookieSession(nameCookie);

    useEffect(() => {
        if (!cookie) {
            setToHome(true);
        } else {
            checkCookieAndRedirect();
            setToHome(false);
        }
    }, [cookie]);

    const checkCookieAndRedirect = async () => {
        const newCookie = updateCookieSession(); // Asumo que esta función actualiza la cookie
        if (!newCookie) {
            setToHome(true);
        } else {
            setToHome(false);
        }
    };

    const handlerProtectedClick = (event) => {
        console.log('1')
        if (!event.target.classList.contains('ProtectedRoutes')) { // Verificar la clase correctamente
            checkCookieAndRedirect();
        }
    }

    // if (toHome) {
    //     return <Navigate to={redirect} />;
    // }

    return (
        <div className="ProtectedRoutes" onClick={handlerProtectedClick}>
            {children}
        </div>
    );
}

ProtectedRoutes.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]),
    nameCookie: PropTypes.string,
    path: PropTypes.string,
    redirectPath: PropTypes.string
};

export default ProtectedRoutes;
