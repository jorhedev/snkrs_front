import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { SESSION_NAME } from '../../const/const';
import { readCookieSession, updateCookieSession } from '../../services';

// const user = useSelector(state => state.user.user)
// if (!user) {
//   return <Navigate to='/home' />
// }
const ProtectedRoutes = ({ children, nameCookie = SESSION_NAME, path, redirect = '/' }) => {
    const dispatch = useDispatch()
    const location = useLocation();
    const [toHome, setToHome] = useState(true)

    const cookie = readCookieSession(nameCookie)

    useEffect(() => {
        if (!cookie) {
            setToHome(true);
        } else {
            checkCookieAndRedirect()
            setToHome(false)
        }

    }, []);

    const checkCookieAndRedirect = async () => {
        const cookie = updateCookieSession()
        if (!cookie) {
            setToHome(true)
        }
        setToHome(false)
    };



    const handlerProtectedClick = (event) => {
        if (!event.target.classList.contains('ProtectedRoutes')) {
            checkCookieAndRedirect()
        }
    }

    return (
        <span className='ProtectedRoutes' onClick={handlerProtectedClick}>
            children
        </span>
    )
}

ProtectedRoutes.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]),
    nameCookie: PropTypes.string,
    path: PropTypes.string,
    redirect: PropTypes.string
};


export default ProtectedRoutes;