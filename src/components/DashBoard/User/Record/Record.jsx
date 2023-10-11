import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashBoard from '../../DashBoard.module.css'
import styles from "./Record.module.css"
import { fetchRecord } from "../../../../redux/recordSlice";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Record = () => {
  const dispatch = useDispatch();
  const record = useSelector((state) => state.record.record);

  useEffect(() => {
    dispatch(fetchRecord());
  }, [dispatch]);

  // Función para formatear una fecha en el formato deseado y aplicar estilos a la hora
  const formatDateTime = (dateTimeStr) => {
    const dateTime = new Date(dateTimeStr);

    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };

    const formattedDateTime = dateTime.toLocaleDateString(undefined, options);

    // Separa la fecha en sus partes
    const [datePart, timePart] = formattedDateTime.split(" ");
    const [hourPart, minutePart, secondPart] = timePart.split(":");

    // Aplica estilos condicionales a la hora, minutos y segundos
    const hourClass = parseInt(hourPart) <= 24 ? styles.greenText : "";
    const minuteClass = parseInt(minutePart) <= 60 ? styles.greenText : "";
    const secondClass = parseInt(secondPart) <= 60 ? styles.greenText : "";

    return (
      <span>
        {datePart}{" "}
        <span className={hourClass}>{hourPart}</span>:
        <span className={minuteClass}>{minutePart}</span>:
        <span className={secondClass}>{secondPart}</span>
      </span>
    );
  };

  return (
    <div className={DashBoard.DashBoardContainer}>
      <div className={styles.cartContainer}>
        <Link className={styles.homebtn} to={'/home'}>
          <p className={styles.homebtonP}><AiOutlineArrowLeft /> Home</p>
        </Link>

        <h2 className={styles.h2}>SHOPPING RECORD</h2>
        {record.length === 0 ? (
          <p className={styles.cartEmpty}>No records available</p>
        ) : (
          <table className={styles.cartTable}>
            <thead>
              <tr>
                <th>Payment date</th>
                <th>Pay</th>
                <th>Color</th>
                <th>Quantity</th>
                <th>Size</th>
              </tr>
            </thead>
            <tbody>
              {record.length && record.map(({ payment, purchase_date, purchase }, index) => (
                purchase?.map((item, itemIndex) => {
                  const formattedDateTime = formatDateTime(purchase_date);

                  return (
                    <tr key={itemIndex}>
                      <td>{formattedDateTime}</td>
                      <td>$ {payment}</td>
                      <td className={styles.td}>{item.color}</td>
                      <td>{item?.quantity}</td>
                      <td>{item.size}</td>
                    </tr>
                  );
                })
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Record;
