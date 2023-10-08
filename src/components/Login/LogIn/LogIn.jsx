import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './LogIn.module.css';
import SignIn from '../SignIn/SignIn';
import { FaRegUser } from 'react-icons/fa'
import LoggedIn from '../LoggedIn/LoggedIn';
import { setStatusLogin, setViewLogin, viewFormLog } from '../../../redux/auth';
import { getCookieSession, readCookieSession } from '../../../services';
import { Navigate, useLocation } from 'react-router-dom';
import { NAV_ALL, NAV_ADMIN, NAV_USER, SESSION_NOT_COOKIE, DETAIL_PAGE } from '../../../const';

const LogIn = ({ imageSrc, onChangeImage, defaultImage, style = { size: '55px' }, sizeAvatar = '35' }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation()
  const login = useSelector(({ auth }) => auth.login)
  const [imageUrl, setImageUrl] = useState(imageSrc || defaultImage || '');

  const cookie = readCookieSession()
  useEffect(() => {
    const interval = setInterval(() => {
      if (!getCookieSession()) {
        setImageUrl('')
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [cookie, setImageUrl]);

  useEffect(() => {
    if (cookie) {
      const { image } = cookie
      setImageUrl(image)
    } else {
      setImageUrl('')
    }
  }, [cookie, setImageUrl]);

  const handlerClickLogin = () => {
    dispatch(viewFormLog())
  }

  const handlerChangeSignIn = (status) => {
    dispatch(setViewLogin());
  }


  if (!cookie) {
    if (!NAV_ALL.some(nav => nav == pathname) && !DETAIL_PAGE(pathname)) return (<Navigate to={SESSION_NOT_COOKIE} />)
  } else {
    if (cookie.role == 'user' && !NAV_USER.some(nav => nav == pathname) && !DETAIL_PAGE(pathname)) {
      return (<Navigate to={SESSION_NOT_COOKIE} />)
    }
    if (cookie.role == 'admin' && !NAV_ADMIN.some(nav => nav == pathname)) {
      return (<Navigate to={SESSION_NOT_COOKIE} />)
    }
  }


  return (
    <div className={styles.LogIn} >
      <span className={styles.PhotoWrapper} title='login' style={{
        width: `${style.size}`, height: `${style.size}`
      }} onClick={handlerClickLogin}>
        {(imageUrl === '' || imageUrl === null || imageUrl === undefined) ?
          <FaRegUser size={sizeAvatar} /> :
          <img className={styles.PhotoLogin} src={imageUrl} alt='uploadImage' />}
      </span>
      {login.view && <SignIn isActiveSignIn={login.status} onChangeSignIn={handlerChangeSignIn} />}
      {login.view && < LoggedIn isActiveLoggedIn={!login.status} />}
    </div>
  )
}

LogIn.propTypes = {
  imageSrc: PropTypes.string,
  onChangeImage: PropTypes.func,
  defaultImage: PropTypes.string,
  style: PropTypes.object,
  sizeAvatar: PropTypes.number,
};

export default LogIn;
