import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import styleDashBoard from '../../DashBoard.module.css'
import styles from './Product.module.css';
import InfoProduct from "./InfoProduct/InfoProduct";
import StockProduct from "./StockProduct/StockProduct";
import RenderView from "../../../DashboardUser/RenderView";

const Product = () => {
  const [step, setStep] = useState(1);
  return (
    <div className={styleDashBoard.DashBoardContainer}>
      <div className={styles.ProductContainer}>
        <div className={`${styles.SignUp}`}>
          <div className={`${styles.SignUpForm}`}>
            <div className={styles.HeaderSignUp}>
              <h1>Sign Up</h1>
            </div>
            <Form className={styles.Steps}>
              {step === 1 && (
                <div className={styles.BasicInfo}>
                  <Form.Group className={styles.FormGroup} controlId="step1">
                    <Form.Label className={styles.FormLabel}>BASIC INFORMATION </Form.Label>
                    <div className={styles.FormLine}></div>
                    <InfoProduct />
                  </Form.Group>
                </div>
              )}
              {step === 2 && (
                <div className={styles.BasicInfo}>
                  <Form.Group className={styles.FormGroup} controlId="step1">
                    <Form.Label className={styles.FormLabel}>BASIC INFORMATION </Form.Label>
                    <div className={styles.FormLine}></div>
                    <StockProduct />
                  </Form.Group>
                </div>
              )}
              {step === 3 && (
                <div className={styles.BasicInfo}>
                  <Form.Group className={styles.FormGroup} controlId="step1">
                    <Form.Label className={styles.FormLabel}>BASIC INFORMATION </Form.Label>
                    <div className={styles.FormLine}></div>
                    <RenderView />
                  </Form.Group>
                </div>
              )}
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product