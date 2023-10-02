/** @format */

import React, { useState } from "react";
import zapa from "../../../assets/Image/video1.webm"
import styles from './SignUp.module.css';

const SignUp = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const toggleForms = () => {
    setShowLoginForm(!showLoginForm);
  };
  return (
    <div className={styles.SignUpContainer}>
      <div className={`${styles.SignUp}`}>
        <div className={`${styles.signUpForm}`}>
          <h1>Regiter</h1>
          <form action="#">
            <div className={styles.form_group}>
              <label>Username</label>
              <input
                className={styles.form_control}
                type="text"
                name="username"
                id="username"
                placeholder="james.bond"
                required
              />
            </div>
            <div className="styles.form-group">
              <label>Age</label>
              <input
                className="{styles.form-control"
                type="number"
                name="age"
                id="age"
                placeholder="+18"
                required
              />
            </div>
            <div className="{styles.form-group">
              <label>Email</label>
              <input
                className="{styles.form-control"
                type="text"
                name="email"
                id="email"
                placeholder="james.bond@spectre.com"
                required
              />
            </div>
            <div className="{styles.form-group">
              <label>Password</label>
              <input
                className="{styles.form-control"
                type="password"
                name="password"
                id="password"
                placeholder="********"
                required
              />
            </div>
            <div className={styles.form_group}>
              <label>Repeat Password</label>
              <input
                className={styles.form_control}
                type="password"
                name="passwordRepeat"
                id="passwordRepeat"
                placeholder="********"
                required
              />
            </div>
            <div className={styles.mtlg}>
              <ul className={styles.list_inline}>
                <li>
                  <input
                    className={`${styles.btn} ${styles.btn_form}`}
                    type="submit"
                    value="Register"
                  />
                </li>
                <li>
                  <a className={styles.signup__link} href="#">
                    I am already a member
                  </a>
                </li>
              </ul>
            </div>
          </form>
        </div>
        {/* <div className={`${styles.container__child} ${styles.signup__thumbnail}`}>

          <video src={zapa} autoPlay loop controls></video>
        </div> */}
      </div>
    </div>
  );
};

export default SignUp;
