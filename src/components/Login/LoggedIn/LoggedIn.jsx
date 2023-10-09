import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './LoggedIn.module.css';
import LoggedInPhoto from '../LoggedInPhoto/LoggedInPhoto'
import { signOut, viewFormLog } from '../../../redux/auth';
import { MdPerson } from 'react-icons/md';
import { FaUserTie } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { handlerNames, readCookieSession } from '../../../services';

const LoggedIn = ({ isActiveLoggedIn = false, onChangeLoggedIn }) => {
  const dispatch = useDispatch()
  const [user, setUser] = useState({})

  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const cookie = readCookieSession()
    if (cookie) {
      const { _id, ...data } = cookie
      setImageUrl(data?.image)
    }
  }, [setImageUrl, user]);

  useEffect(() => {
    const cookie = readCookieSession()
    if (cookie) {
      const { _id, ...data } = cookie
      setUser(data)
    }
  }, [setUser]);

  const handlerCloseLoggedIn = () => {
    dispatch(viewFormLog())
  }

  const handlerSignOut = () => {
    dispatch(signOut())
  }
  return (
    <>
      <div className={`${styles.LoggedIn} ${isActiveLoggedIn ? styles.active : ''}`}>
        <div className={styles.Header}>
          <div className={styles.LoggedInHeader}>
            <label htmlFor="">{user?.firstName?.split(' ')[0]} {user?.lastName?.split(' ')[0]}</label>
            <div className={styles.PhotoLogin}>
              <LoggedInPhoto imageSrc={
                (imageUrl === '' || imageUrl === null || imageUrl === undefined) ? '' :
                  imageUrl} size={'100%'} />
            </div>
          </div>
        </div>

        <div className={styles.LoggedInForm}>
          <div className={styles.Role} onClick={handlerCloseLoggedIn}>
            <NavLink to={
              user?.role === 'user' ? "/user" :
                user?.role === 'admin' ? "/admin" : null}>
              <div className={styles.BodyLoggedIn}>
                {user?.role === 'user' ? <MdPerson className={styles.inputIcon} size={30} /> :
                  user?.role === 'admin' ? <FaUserTie className={styles.inputIcon} size={30} /> : null}
                <label className={styles.Name} htmlFor="">{handlerNames(user?.role)}</label>
              </div>
            </NavLink >
          </div>
        </div>
        <div className={styles.LoggedInFooter}>
          <div className={styles.BtnSignOut}>
          </div>
        </div >
        <button className={styles.BtnLogOut} onClick={handlerSignOut}>Logout</button>
      </div>
    </>
  )
}

LoggedIn.propTypes = {
  isActiveLoggedIn: PropTypes.bool,
  onChangeLoggedIn: PropTypes.func,
};

export default LoggedIn;
