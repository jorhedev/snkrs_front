import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ForgotPassword.module.css';
import { Link } from "react-router-dom";
import Logo from '../../Icons/Logo'
import { MdLock, MdEmail } from 'react-icons/md';

const ForgotPassword = ({ viewForgot, onViewForgot }) => {
  const [forgotPass, setForgotPass] = useState({
    email: '',
    password: '',
    confirmPassword: '',

  })
  const [error, setError] = useState({
    email: '',
    password: '',
    confirmPassword: '',

  })

  const handlerCloseBox = () => { onViewForgot(false); };
  // Check if the click was outside the load dialog
  const handlerExternalClick = (event) => {
    if (event.target.classList.contains(styles.ForgotPasswordContainer)) handlerCloseBox();

  };

  const handlerInputChange = (event) => {
    const { name, value } = event.target
    setForgotPass({ ...forgotPass, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault();

  };
  return (
    <>
      {viewForgot && (<div className={styles.ForgotPasswordContainer} onClick={handlerExternalClick}>
        <div className={styles.ForgotPassword} >
          <div className={styles.Close} onClick={() => handlerCloseBox()}>x</div>
          <div className={styles.Header}>
            <Link to="/">
              <Logo width={'200px'} height={'60px'} />
            </Link>
          </div>
          {/* <h2 className={styles.h2}>
            <p>Magic Experience For Your Trip!</p>
            <p>Come home with us</p>
          </h2> */}
          <form onSubmit={handleSubmit}>

            {Object.keys(forgotPass).map((key, index) => {
              return (
                <div className={styles.inputGroup} key={index}>
                  {['password', 'confirmPassword'].includes(key) ? <MdLock size={30} className={styles.inputIcon} /> :
                    <MdEmail size={30} className={styles.inputIcon} />}
                  <input
                    type={['password', 'confirmPassword'].includes(key) ? 'password' : 'text'}
                    placeholder={
                      {
                        firstName: 'First Name',
                        lastName: 'Last Name',
                        email: 'Email',
                        password: 'Password',
                        confirmPassword: 'Confirm Password'
                      }[key]
                    }
                    name={key}
                    value={forgotPass[key]}
                    onChange={(event) => { handlerInputChange(event) }}
                    className={styles.inputField}
                  />
                  {error[key] && <p className={styles.errorText}>{error[key]}</p>}
                </div>
              )
            })}
            <div className={styles.BtnPass}>
              <button type="submit" className={styles.submitButton}>
                Restore
              </button>
            </div>
          </form>
        </div>
      </div>)}
    </>

  );
};

ForgotPassword.propTypes = {

  viewForgot: PropTypes.boolean,
  onViewForgot: PropTypes.func

};
ForgotPassword.propTypes = {};

export default ForgotPassword;
