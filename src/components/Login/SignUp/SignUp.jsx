/** @format */
import React, { useEffect, useInsertionEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import zapa from "../../../assets/Image/video1.webm"
import styles from './SignUp.module.css';
import UploadPhoto from "../../Upload/UploadPhoto/UploadPhoto";
import axiosInstance from "../../../utils/axiosInstance";
import { NonActiveUser, NotValidEmail, ResetPassword, SendEmailVerify, SignUpSuccess, UserPrevSignUp } from "../../Alerts";
import { AddressInformation, BasicInformation } from "./RegisterForms";
import { SIGNUP_STORAGE } from "../../../const";
import { createUser } from "../../../services/firebase";
import { handlerIsObjectEmpty, signUpValidate } from "../../../services";

const initSignUp = {
  nit: '',
  firstName: '',
  lastName: '',
  birthday: '',
  email: '',
  password: '',
  image: '',
  address: [{
    country: '',
    state: '',
    city: '',
    phone: '',
    address: '',
    additional: '',
    zip_code: ''
  }]
}
const SignUp = () => {
  const [step, setStep] = useState(1);
  const [register, setRegister] = useState(false);
  const [signUp, setSignUp] = useState(initSignUp)

  const [error, setError] = useState({})

  useEffect(() => {
    //? Get Data from localStorage
    const storedData = JSON.parse(localStorage.getItem(SIGNUP_STORAGE));
    storedData && setSignUp({ ...signUp, ...storedData.signUp }) && setError({ ...storedData.error });
  }, []);

  const handlerChangeImage = () => {
    console.log('photo')
  }


  const handlerPreview = () => { return step > 1 ? setStep(step - 1) : null }

  const handlerNext = async () => {
    try {
      if (signUp.email === '') {
        NotValidEmail('Email cannot be empty')
      }
      else if (signUp.password === '') {
        NotValidEmail('Password cannot be empty')
      } else if (error.email !== '') {
        NotValidEmail('Email ERROR!!, verify the email entered')
      } else {
        const data = await axiosInstance.post(`/auth/verify-email/${signUp.email}`)
        if (data) {
          if (data.status == 'inactive') {
            SendEmailVerify(signUp.email)
            return
          }
          if (data.status == 'active') {
            ResetPassword(signUp.email)
            return
          }
          return step < 2 ? setStep(step + 1) : null
        }
      }
    } catch (error) {
      return step < 2 ? setStep(step + 1) : null
    }
  }

  const handlerSignUp = async (event) => {
    event.preventDefault();
    try {
      const { status, user } = await createUser(
        signUp.email,
        signUp.password,
      )

      const { password, ...data } = signUp
      await axiosInstance.post(`/auth/sign-up`, {
        user,
        signUp: data
      })
      SignUpSuccess()

    } catch (error) {
      console.log(error)
    }

  };

  const handlerChangeSignUp = (data) => {
    let currentValue = {}
    step == 1 ? currentValue = { ...signUp, ...data } : null
    step == 2 ? currentValue = { ...signUp, address: [data] } : null
    setSignUp(currentValue)
    setError(signUpValidate(currentValue))
    const { password, ...storage } = currentValue
    localStorage.setItem(SIGNUP_STORAGE, JSON.stringify({
      signUp: storage,
      error: signUpValidate(currentValue)
    }));
    isOkSignUp()
  }

  const isOkSignUp = () => {
    const testSignUp = { ...signUp };
    delete testSignUp.image;
    delete testSignUp.address[0].additional;
    delete testSignUp.address[0].zip_code;

    if (!handlerIsObjectEmpty(testSignUp) && handlerIsObjectEmpty(error)) {
      return setRegister(true)
    }
    return setRegister(false)
  }

  return (
    <div className={styles.SignUpContainer}>
      <div className={`${styles.SignUp}`}>
        <div className={`${styles.SignUpForm}`}>
          <div className={styles.HeaderSignUp}>
            <h1>Sign Up</h1>
            {step === 1 && (<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100px', height: '100px' }}>
              <span onClick={handlerChangeImage}>
                <UploadPhoto size={'100px'} avatarFill={'#d9d9d9'} background="#5b5b5b" />
              </span>
            </div>)}
          </div>
          <span className={styles.Steps}>
            {step === 1 && (
              <div className={styles.BasicInfo}>
                <span className={styles.FormGroup} >
                  <span className={styles.FormLabel}>BASIC INFORMATION </span>
                  <div className={styles.FormLine}></div>
                  <BasicInformation initValues={signUp} errors={error} onChangeBasicInfo={handlerChangeSignUp} />
                </span>
              </div>
            )}
            {step === 2 && (
              <div className={styles.BasicInfo}>
                <span className={styles.FormGroup} >
                  <span className={styles.FormLabel}>ADDRESS INFORMATION </span>
                  <div className={styles.FormLine}></div>
                  <AddressInformation
                    initValues={signUp.address[0]}
                    errors={error}
                    onChangeAddressInfo={handlerChangeSignUp} />
                </span>
              </div>
            )}
          </span>
          <div className={styles.ButtonSignUp}>
            {step > 1 && <button className={`${styles.SignUpBtns}`} onClick={handlerPreview}>Prev</button>}
            {register && step > 1 && <button className={`${styles.SignUpBtns}`} onClick={handlerSignUp}>Register</button>}
            {step < 2 && <button className={`${styles.SignUpBtns}`} onClick={handlerNext}>Next</button>}
          </div>
        </div>
        <div className={`${styles.ShoeMove} ${styles.SignUp_ShoeMove}`}>
          <video src={zapa} autoPlay loop></video>
        </div>
      </div>

    </div>
  );
};

export default SignUp;
