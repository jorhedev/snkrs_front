/* eslint-disable no-case-declarations */
import axiosInstance from '../../../utils/axiosInstance';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styles from './SignIn.module.css';
import { signInValidate } from '../../../services';
import {
  signIn,
  logOut,
  signInWithGoogle,
  signInWithTwitter,
  signInWithFacebook
} from '../../../services/firebase';
import { signIn as logIn, setViewLogin } from '../../../redux/user';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import SocialNetworks from '../../SocialNetworks/SocialNetworks';
import { InputPassword, InputText } from '../../Inputs';

import Swal from 'sweetalert2';

const SignIn = ({ isActiveSignIn = false, onChangeSignIn }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [login, setLogin] = useState({ email: null, password: null });
  const [error, setError] = useState({});
  const [viewForgotPass, setViewForgotPass] = useState(false);

  const handleInputChange = (inputField, inputValue) => {
    const currentState = { ...login, [inputField]: inputValue }
    setLogin(currentState);
    setError(signInValidate(currentState))
  };

  const handlerSignIn = async (Red) => {
    let _tokenResponse;
    try {
      switch (Red) {
        case 'google':
          await logOut();
          ({ _tokenResponse } = await signInWithGoogle());
          break;
        case 'facebook':
          await logOut();
          ({ _tokenResponse } = await signInWithFacebook());
          break;
        case 'twitter':
          await logOut();
          ({ _tokenResponse } = await signInWithTwitter());

          break;
        case 'login':
          await logOut();
          ({ _tokenResponse } = await signIn(login.email, login.password));
          if (_tokenResponse && !_tokenResponse.emailVerified) {
            await axiosInstance.post(`/verify-email/:${_tokenResponse.email}`)
            Swal.fire(
              'Confirm Email',
              'An email confirmation email has been sent',
              'warning'
            )
            return
          } else {
            Swal.fire({
              title: 'User Not Registered',
              text: 'Please, register to continue with us',
              icon: 'error',
              confirmButtonText: 'OK',
            })
            return
          }
        default:
          return
      }
      return dispatch(logIn(_tokenResponse))
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
    }
  };

  const handlerChangeSignUp = () => {
    dispatch(setViewLogin(false))
    navigate('/signUp')
  }

  const handlerChangeForgotPass = () => { setViewForgotPass(!viewForgotPass) }

  const handlerExternalClick = (event) => {
    if (event.target.classList.contains(styles.SignInContainer)) onChangeSignIn()
  };

  return (
    <>
      <div className={styles.SignInContainer} onClick={handlerExternalClick}>      </div>
      < div className={`${styles.SignIn} ${isActiveSignIn ? styles.active : styles.fadeOut}`}>
        <div className={styles.SignInForm}>
          <span className={styles.GroupInput}>
            <InputText
              tag={'email'}
              onChangeInput={(input) => handleInputChange('email', input)}
              style={{
                gap: '20px',
                alignItems: 'start',
                marginBottom: '4px',
                h3: { fontSize: '20px' },
                input: { width: '100%' },
              }}
            />
            {error.email && <p className={styles.errorText} title={error.email}>{error.email}</p>}
          </span>
          <span className={styles.GroupInput}>
            <InputPassword
              tag={'password'}
              onChangeInput={(input) => handleInputChange('password', input)}
              style={{
                gap: '20px',
                alignItems: 'start',
                marginBottom: '4px',
                h3: { fontSize: '20px' },
                input: { width: '100%' }

              }} />
            {error.password && <p className={styles.errorText} title={error.password}>{error.password}</p>}
          </span>
          <div className={styles.BtnSignIn}>
            <button className={styles.BtnLogIn} onClick={() => { handlerSignIn('login') }}>Login</button>
            <div className={styles.SocialNet}>
              <div onClick={() => { handlerSignIn('facebook') }} >
                <SocialNetworks redSocial={{ facebook: '' }} />
              </div>
              <span onClick={() => { handlerSignIn('google') }} >
                <SocialNetworks redSocial={{ google: '' }} />
              </span>
              <span onClick={() => { handlerSignIn('twitter') }}>
                <SocialNetworks redSocial={{ twitter: '' }} />
              </span>
            </div>
          </div>
          <div className={styles.Links}>
            <label onClick={handlerChangeForgotPass}>Forgot your password?</label>
            <label style={{ fontSize: '25px' }} onClick={handlerChangeSignUp}>Sign up</label>
          </div>
        </div>
      </div >
      <ForgotPassword viewForgot={viewForgotPass} onViewForgot={handlerChangeForgotPass} />

    </>
  )
}

SignIn.propTypes = {
  isActiveSignIn: PropTypes.bool.isRequired,
  onChangeSignIn: PropTypes.bool,
};

export default SignIn;