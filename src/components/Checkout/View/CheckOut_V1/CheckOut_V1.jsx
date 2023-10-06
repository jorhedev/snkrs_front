import React, { useEffect, useState } from "react";
import styles from "./CheckOut_V1.module.css";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
initMercadoPago("APP_USR-e2f3a313-4a9d-4110-bd77-ad6c50675664");

// eslint-disable-next-line react/prop-types
const CheckOut_V1 = ({ onChangePrev, onChangeNext, payment = "" }) => {
  const [token, setToken] = useState("");
  console.log("🚀 ~ file: CheckOut_V2.jsx:10 ~ token:", token);
  console.log("🚀 ~ file: CheckOut_V2.jsx:9 ~ payment:", payment);
  useEffect(() => {
    setToken(payment);
  }, [payment]);
  // const handlerNext = () => {onChangeNext()}
  // const handlerPrev = () => {onChangePrev()}

  return (
    <div className={styles.checkout}>
      <div className={styles.leftPanel}>
        <h1 className={styles.title}>Checkout</h1>
        <h2 className={styles.h2}>Delivery Options</h2>
        <div className={styles.formContainer}>
          <form>
            <div className={styles.box}>
              <input type="checkbox" id="autocomplete" name="autocomplete" />
              <label className={styles.label} htmlFor="autocomplete">
                Autocomplete information?
              </label>
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>First Name: </label>
              <input
                placeholder="First Name"
                className={styles.input}
                type="text"
                id="firstName"
                name="firstName"
              />
            
            
              <label className={styles.label}>Last Name: </label>
              <input
                placeholder="Last Name"
                className={styles.input}
                type="text"
                id="lastName"
                name="lastName"
              />
            </div>
            <div className={styles.selectContainer}>
              <label className={styles.label}>Country: </label>
              <select className={styles.select}>
                <option value=""> </option>
                <option value=""></option>
              </select>
            
              <label className={styles.label}>City: </label>
              <select className={styles.select}>
                <option value=""> </option>
                <option value=""></option>
              </select>
            </div>
            
            <div className={styles.selectContainer}>
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
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Email: </label>
              <input
                placeholder="email@mail.com"
                className={styles.input}
                type="text"
                id="firstName"
                name="firstName"
              />
            
            
              <label className={styles.label}>Phone: </label>
              <input
                placeholder="555 555 555"
                className={styles.input}
                type="text"
                id="lastName"
                name="lastName"
              />
            </div>
          </form>
        </div>
        <h2 className={styles.h2}>Payment</h2>
        {/* <label > <img className={styles.img} src={foto} alt="" /></label> */}
        <div>
          <p>
            You will be redirected to the Mercado Pago site after reviewin your
            order
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <div id="wallet_container">
            <Wallet initialization={{ preferenceId: token }} />
          </div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <h2 className={styles.titlerigth}>IN YOUR BAG</h2>
      </div>
    </div>
  );
};

export default CheckOut_V1;
