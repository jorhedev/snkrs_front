import React, {useState} from 'react'
import { snkrsStorage } from '../../const/const';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../redux/cartSlice';
import styles from "./PaymentSucces.module.css"
import Confetti from 'react-confetti';
import { Link } from 'react-router-dom';

const PaymentSucces = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        localStorage.removeItem(snkrsStorage);
        dispatch(clearCart())
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return (
    <div className={styles.paymentSuccessContainer}>
      <div className={styles.content}>
        <h1>WE RECEIVED YOUR ORDER </h1>
        <h3>We will get started on it right away and keep you up to date on our progress</h3>
        <h2>CHECK YOUR EMAIL</h2>
        <Link to='/'><button className={styles.boton}>BACK TO HOME</button></Link>
        
      </div>
      <Confetti 
        width={window.innerWidth}
        height={window.innerHeight}
      />
    </div>
  );
};

export default PaymentSucces
