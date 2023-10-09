import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import DashBoard from '../../DashBoard.module.css'
import styles from './Product.module.css';
import InfoProduct from "./InfoProduct/InfoProduct";
import StockProduct from "./StockProduct/StockProduct";
import RenderView from "../../../DashboardUser/RenderView";
import Logo from "../../../Icons/Logo";

const Product = () => {
  const [steps, setSteps] = useState(1);
  return (
    <div className={DashBoard.DashBoardContainer}>
      <div className={styles.ProductBody}>
        <span className={styles.StepsView}>
          {[1, 2, 3].map((step) => {
            return (
              <span className={styles.StepsViewBody} key={step}>
                <div className={`${styles.NumberStep} ${step <= steps && styles.StepActive}`}> {step}</div>
                {[1, 2].includes(step) && <div className={`${styles.LineStep} ${step == steps - 1 && styles.StepActive}`}></div>}
              </span>)
          })}
        </span>
        <div className={styles.ProductContainer}>
          <div className={styles.HeaderProduct}>
            <h2>NEW PRODUCT</h2>
          </div>
          <div className={styles.DataProduct}>
            <div className={styles.LogoProduct}>
              <Logo width='150px' height='25px' />
            </div>
            <div className={styles.Steps}>
              {steps === 1 && (
                <div className={styles.Info}>
                  <InfoProduct />
                </div>
              )}
              {steps === 2 && (
                <div className={styles.BasicInfo}>
                  <span className={styles.FormGroup}>
                    <span className={styles.FormLabel}>STOCK PRODUCT </span>
                    <div className={styles.FormLine}></div>
                    <StockProduct />
                  </span>
                </div>
              )}
              {steps === 3 && (
                <div className={styles.BasicInfo}>
                  <span className={styles.FormGroup} >
                    <span className={styles.FormLabel}>REVIEW PRODUCT </span>
                    <div className={styles.FormLine}></div>
                    <RenderView />
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className={`${styles.ProductTitle}`}>
            <div className={`${styles.SignUpForm}`}>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product