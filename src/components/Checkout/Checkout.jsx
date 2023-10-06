
import React, { useState } from "react";
import styles from './Checkout.module.css';
import Footer from '../Footer/Footer'
import CheckOut_V1 from "./View/CheckOut_V1/CheckOut_V1";
import { useEffect } from "react";
import { PAYMENT_STORAGE } from "../../const/const";

const CheckOut = () => {
    const [step, setStep] = useState(1);
    const [storageData, setStorageData] = useState();

    useEffect(() => {
        setStorageData(JSON.parse(localStorage.getItem(PAYMENT_STORAGE)));

    }, []);
    console.log(storageData, "storage");
    return (
        <>
            <div className={styles.CheckOutContainer}>
                {step === 1 && (
                    <CheckOut_V1
                        payment={storageData} />
                )}

            </div>
            <Footer />
        </>
    )
}

export default CheckOut