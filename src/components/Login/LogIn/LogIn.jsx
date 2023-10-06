import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './LogIn.module.css';
import SignIn from '../SignIn/SignIn';
import { FaRegUser } from 'react-icons/fa'
import LoggedIn from '../LoggedIn/LoggedIn';
import { setStatusLogin, setViewLogin, viewFormLog } from '../../../redux/user';
import { readCookieSession } from '../../../services';

const LogIn = ({ imageSrc, onChangeImage, defaultImage, style = { size: '55px' }, sizeAvatar = '35' }) => {
  const dispatch = useDispatch();
  const user = useSelector(({ user }) => user.user)
  const login = useSelector(({ user }) => user.login)
  const [imageUrl, setImageUrl] = useState(imageSrc || defaultImage || '');

  useEffect(() => {
    const cookie = readCookieSession()
    if (cookie) {
      const { _id, ...data } = cookie
      setImageUrl(data?.image)
    }
  }, [setImageUrl, user]);

  const handlerClickLogin = () => {
    dispatch(viewFormLog())
  }

  const handlerChangeLogin = (image) => {
    setImageUrl(image);
  }

  const handlerChangeSignIn = (status) => {
    dispatch(setViewLogin());
  }

  return (
    <div className={styles.LogIn} >
      <span className={styles.PhotoWrapper} title='login' style={{
        width: `${style.size}`, height: `${style.size}`
      }} onClick={handlerClickLogin}>
        {(imageUrl === '' || imageUrl === null || imageUrl === undefined) ?
          <FaRegUser size={sizeAvatar} /> :
          <img className={styles.Photo} src={imageUrl} alt='uploadImage' />}
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
