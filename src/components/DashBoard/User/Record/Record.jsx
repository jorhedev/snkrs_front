import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashBoard from '../../DashBoard.module.css'
import styles from "./Record.module.css"
import { fetchRecord } from "../../../../redux/recordSlice";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
const Record = () => {
  const dispatch = useDispatch();
  const record = useSelector((state) => {
    console.log("🚀 ~ file: Record.jsx:9 ~ Record ~ state:", state.record.record)
    return state.record.record
  });
console.log(record)
  useEffect(() => {
    dispatch(fetchRecord());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={DashBoard.DashBoardContainer}>
      <div className={styles.cartContainer}>
        <Link className={styles.homebtn} to={'/home'}><p className={styles.homebtonP} ><AiOutlineArrowLeft /> Home</p></Link>

        <h2 className={styles.h2}>SHOPPING RECORD</h2>
        {record.length === 0 ? (
          <p className={styles.cartEmpty}>No records available</p>
        ) : (
          <table className={styles.cartTable}>
            <thead>
              <tr>
                <th>Payment date</th>
                <th>Pay</th>
                {/* <th>Image</th> */}
                <th>Color</th>
                <th>Quantity</th>
                <th>Size</th>
              </tr>
            </thead>
            <tbody>
              {record.length && record.map(({ payment, purchase_date, purchase }, index) => (
                purchase?.map((item, itemIndex) => (
                  <tr key={itemIndex}>
                    <td>{purchase_date}</td>
                    <td>$ {payment}</td>
                    {/* <td>g</td> */}
                    <td className={styles.td}>{item.color}</td>
                    <td>{item?.quantity}</td>
                    <td>{item.size}</td>
                  </tr>
                ))
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};


export default Record;
