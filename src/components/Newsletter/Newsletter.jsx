import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { subscribeToNewsletter } from "../../redux/newsletterSlice";
import styles from "./Newsletter.module.css";
import { HiOutlineMail } from 'react-icons/hi';
import Swal from "sweetalert2"; // Importa SweetAlert2

const Newsletter = () => {
  const dispatch = useDispatch();
  const subscriptionStatus = useSelector((state) => state.newsletter.subscriptionStatus);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubscribe = () => {
    if (email) {
      dispatch(subscribeToNewsletter(email))
        .unwrap()
        .then((data) => {
          // La suscripción se realizó con éxito
          console.log("Suscripción exitosa", data);
          setEmail("");
          // Muestra una alerta de éxito con SweetAlert2
          Swal.fire({
            icon: "success",
            title: "Subscription Successful",
            text: "Thank you for subscribing to our newsletter!",
          });
        })
        .catch((error) => {
          // Error al suscribirse
          setErrorMessage(error.message);
          // Muestra una alerta de error con SweetAlert2
          Swal.fire({
            icon: "error",
            title: "Subscription Error",
            text: "There was an error while subscribing. Please try again later.",
          });
        });
    }
  };

  return (
    <div className={styles.containerEmail}>
      <div className={styles.infoEmail}>
        <h4><HiOutlineMail/></h4>
        <h1>SUSCRIBE TO NEWSLETTER</h1>
        <h2>for more information</h2>
        <div className={styles.send}>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubscribe} disabled={subscriptionStatus === "loading"}>
            SEND
          </button>
        </div>
        {subscriptionStatus === "failed" && <p>Error: {errorMessage}</p>}
      </div>
    </div>
  );
}

export default Newsletter;
