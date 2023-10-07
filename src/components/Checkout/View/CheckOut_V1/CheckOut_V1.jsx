import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./CheckOut_V1.module.css";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
initMercadoPago("APP_USR-e2f3a313-4a9d-4110-bd77-ad6c50675664");
import Bag from "./Bag";
import { Link } from "react-router-dom";
import { fetchCity, fetchCountry,fetchState } from "../../../../redux/country";
// eslint-disable-next-line react/prop-types
const CheckOut_V1 = ({ payment = "" }) => {
  const dispatch = useDispatch();
  const [token, setToken] = useState("");
  

  const isFormValid = useRef({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
  });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  useEffect(() => {
    setToken(payment);
  }, [payment]);
  


  const updateFormValidity = (updateValue) => {
    const { name, data: { error, value}} = updateValue
    console.log(name, error, value)
    const isValid = Boolean(!error) && Boolean(value)
    isFormValid.current = {
      ...isFormValid.current,
      [name]: isValid,
    }
  };

  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case "firstName":
        return !value.trim().length ? "The name is required." : "";
      case "lastName":
        return !value.trim().length ? "The Last name is required." : "";
      case "email":
        return !value.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
          ? "enter a valid email."
          : "";
      case "phone":
        return !value.match(/^\d{10}$/)
          ? "Enter a valid phone number (10 digits)."
          : "";
      default:
        return "";
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    const error = validateField(name, value);
    setFormErrors({ ...formErrors, [name]: error });
    updateFormValidity({
      name,
      data: {
        value,
        error
      }
    });
  };

  return (
    <div className={styles.checkout}>
      <div className={styles.leftPanel}>
        <h1 className={styles.title}>Checkout</h1>
        <h2 className={styles.h2}>Delivery</h2>
        <div className={styles.formContainer}>
          <form>
            {/* <div className={styles.box}>
              <input type="checkbox" id="autocomplete" name="autocomplete" />
              <label className={styles.label} htmlFor="autocomplete">
                Autocomplete information?
              </label>
            </div> */}
            <div className={styles.inputGroup}>
              <div className={styles.inputWrapper}>
                <label className={styles.label}> First Name: </label>
                <input
                  placeholder="First Name"
                  className={`${styles.input} ${
                    formErrors.firstName && styles.errorInput
                  }`}
                  type="text"
                  id="firstNameInput"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                {formErrors.firstName && (
                  <div className={styles.errorText}>{formErrors.firstName}</div>
                )}
              </div>

              <div className={styles.inputWrapper}>
                <label className={styles.label}> Last Name: </label>
                <input
                  placeholder="Last Name"
                  className={`${styles.input} ${
                    formErrors.lastName && styles.errorInput
                  }`}
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
                {formErrors.lastName && (
                  <div className={styles.errorText}>{formErrors.lastName}</div>
                )}
              </div>

              <label className={styles.label}> Country: </label>
              <select className={styles.select}>
                <option value=""> </option>
                <option value=""></option>
              </select>

              <label className={styles.label}> City: </label>
              <select className={styles.select}>
                <option value=""> </option>
                <option value=""></option>
              </select>

              <label className={styles.label}>State: </label>
              <select className={styles.select}>
                <option value=""></option>
                <option value=""></option>
              </select>

              <label className={styles.label}>Address: </label>
              <input
                placeholder="Hollywood Boulevard"
                className={styles.input}
                type="text"
                id="address"
                name="address"
              />

              <div className={styles.inputWrapper}>
                <label className={styles.label}> Email: </label>
                <input
                  placeholder="mail@mail.com"
                  className={`${styles.input} ${
                    formErrors.email && styles.errorInput
                  }`}
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {formErrors.email && (
                  <div className={styles.errorText}>{formErrors.email}</div>
                )}
              </div>

              <div className={styles.inputWrapper}>
                <label className={styles.label}> Phone: </label>
                <input
                  placeholder="5555 555 555"
                  className={`${styles.input} ${
                    formErrors.phone && styles.errorInput
                  }`}
                  type="text"
                  inputMode="numeric"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key) || formData.phone.length >= 10) {
                      e.preventDefault();
                    }
                  }}
                  maxLength="10"
                />
                {formErrors.phone && (
                  <div className={styles.errorText}>{formErrors.phone}</div>
                )}
              </div>
            </div>
          </form>
        </div>
        <h2 className={styles.payment}>Payment</h2>
        <div>
          <p className={styles.p}>
            You will be redirected to the Mercado Pago site after reviewin your
            order
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <div
            id="wallet_container"
            style={{ display: Object.keys(isFormValid.current).every(e => isFormValid.current[e] === true) ? "" : "none"}}
          >
            <Wallet initialization={{ preferenceId: token }} />
          </div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <h2 className={styles.titlerigth}>In your bag</h2>
        <Link className={styles.Link} to="/user/shopping">
          Edit
        </Link>
        <Bag />
      </div>
    </div>
  );
};

export default CheckOut_V1;
