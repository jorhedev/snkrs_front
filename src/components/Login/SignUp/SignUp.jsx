/** @format */
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import zapa from "../../../assets/Image/video1.webm"
import styles from './SignUp.module.css';
import UploadPhoto from "../../Upload/UploadPhoto/UploadPhoto";
import axiosInstance from "../../../utils/axiosInstance";
import { NonActiveUser, ResetPassword } from "../../Alerts";
import { AddressInformation, BasicInformation } from "./RegisterForms";

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [signUp, setSignUp] = useState(false);
  const [user, setUser] = useState({
    nit: '',
    birthday: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    image: [],
    country: '',
    city: '',
    address: [{
      country: '',
      state: '',
      city: '',
      phone: '',
      address: '',
      additional: '',
    }],
  })

  const handlerChangeImage = () => {
    console.log('photo')
  }

  const handlerChangeSignUp = (data) => {
    setUser({ ...user, ...data });
  }

  const handlerPreview = () => { return step > 1 ? setStep(step - 1) : null }

  const handlerNext = async () => {
    try {
      const data = await axiosInstance.post(`/auth/verify-email/${user.email}`)
      console.log("🚀 ~ file: SignUp.jsx:41 ~ handlerNext ~ data:", data)
      if (data) {
        if (data.status == 'inactive') {
          NonActiveUser()
          return
        }
        if (data.status == 'active') {
          ResetPassword({ email: user.email })
          return
        }
        return step < 2 ? setStep(step + 1) : null
      }
    } catch (error) {
      return step < 2 ? setStep(step + 1) : null
    }
  }
  const handlerSignUp = () => {

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
                  <BasicInformation initValues={user} onChangeBasicInfo={handlerChangeSignUp} />
                </span>
              </div>
            )}
            {step === 2 && (
              <div className={styles.BasicInfo}>
                <span className={styles.FormGroup} >
                  <span className={styles.FormLabel}>ADDRESS INFORMATION </span>
                  <div className={styles.FormLine}></div>
                  <AddressInformation initValues={user.address[0]} onChangeInfoContact={handlerChangeSignUp} />
                </span>
              </div>
            )}
          </span>
          <div className={styles.ButtonSignUp}>
            {step > 1 ? <button className={`${styles.SignUpBtns}`} onClick={handlerPreview}>Prev</button> : null}
            {signUp ? <button className={`${styles.SignUpBtns}`} onClick={handlerSignUp}>Register</button> : null}
            {step < 2 && !signUp ? <button className={`${styles.SignUpBtns}`} onClick={handlerNext}>Next</button> : null}
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
