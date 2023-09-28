/** @format */

import React, { useState } from "react";

import zapa from "../../assets/Image/video1.webm"
import "./Register.css";

const Register = () => {
    const [showLoginForm, setShowLoginForm] = useState(false);

    const toggleForms = () => {
      setShowLoginForm(!showLoginForm);
    };
  return (
    <div className="regis">
      <div className="signup__container">
        
        <div className="container__child signup__form">
            <h1>Regiter</h1>
          <form action="#">
            <div className="form-group">
              <label>Username</label>
              <input
                className="form-control"
                type="text"
                name="username"
                id="username"
                placeholder="james.bond"
                required
              />
            </div>
            <div className="form-group">
              <label>Age</label>
              <input
                className="form-control"
                type="number"
                name="age"
                id="age"
                placeholder="+18"
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                type="text"
                name="email"
                id="email"
                placeholder="james.bond@spectre.com"
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                id="password"
                placeholder="********"
                required
              />
            </div>
            <div className="form-group">
              <label>Repeat Password</label>
              <input
                className="form-control"
                type="password"
                name="passwordRepeat"
                id="passwordRepeat"
                placeholder="********"
                required
              />
            </div>
            <div className="m-t-lg">
              <ul className="list-inline">
                <li>
                  <input
                    className="btn btn--form"
                    type="submit"
                    value="Register"
                  />
                </li>
                <li>
                  <a className="signup__link" href="#">
                    I am already a member
                  </a>
                </li>
              </ul>
            </div>
          </form>
        </div>
        <div className="container__child signup__thumbnail">
           
          <video src={zapa} autoPlay loop  controls></video>
        </div>
      </div>
    </div>
  );
};

export default Register;
